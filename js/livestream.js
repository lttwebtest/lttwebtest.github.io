(function () {
  if (!window.initBambuserLiveShopping) {
    // Initialize bambuser here
    window.initBambuserLiveShopping = function (item) {
      window.initBambuserLiveShopping.queue.push(item);
    };
    window.initBambuserLiveShopping.queue = [];
    const scriptNode = document.createElement("script");
    scriptNode["src"] = "https://lcx-embed.bambuser.com/ledger/embed.js";
    //scriptNode['defer'] = 'defer'; // Why are you doing this?
    document.body.appendChild(scriptNode);
  }

  const heroBtnsArr = document.querySelectorAll(".liveshopping-hero");
  const tileDataArr = document.querySelectorAll(".liveshopping-tile");

  // Init the Hero buttons
  if (heroBtnsArr.length) {
    heroBtnsArr.forEach((dataInput) => {
      const showDataObj = dataInput.dataset;
      const showId = showDataObj.showId;
      if (showId) {
        // Init a bambuser show
        window.initBambuserLiveShopping({
          showId: showId,
          node: dataInput,
          type: "overlay",
        });
      }
    });
  }

  // Init the tile buttons
  if (tileDataArr.length) {
    tileDataArr.forEach((dataNode) => {
      const { showId } = dataNode.dataset;
      if (showId) {
        window.initBambuserLiveShopping({
          showId: showId,
          node: dataNode,
          type: "overlay",
        });
      }
    });
  }

  // Reduces server calls if a product has a crazy number of images.
  const MAX_IMAGES_COUNT = 6;

  // Extracts product handle from the product URL
  const SHOPIFY_PRODUCT_URL_HANDLE_REGEX = /\/products\/(.[\w\d-+]+)/;
  // Sometimes image URLs miss the protocol at the beginning
  // E.g. '//cdn.shopify.com/s/files/.../image.jpg'
  const urlSanitizer = (url) => {
    if (typeof url === "string") {
      if (url.startsWith("//")) return `https:${url}`;
      else if (url.toLocaleLowerCase().startsWith("http")) return url;
      else console.log(`Not a valid URL: ${url}`);
    } else console.log(`Not a valid URL: ${url}`);
    return null;
  };

  //========== Shopify Ajax API Helper methods ===============

  const storeApi = {};

  storeApi.getProductByUrl = (url) => {
    const handle = SHOPIFY_PRODUCT_URL_HANDLE_REGEX.exec(url);
    return fetch("/products/" + handle[1] + ".js", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((resp) => resp.json());
  };

  storeApi.addToCart = (itemId) =>
    fetch("/cart/add.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          {
            quantity: 1,
            id: itemId,
          },
        ],
      }),
    }).then((resp) => resp.json());

  storeApi.updateItemInCart = (itemId, quantity) =>
    fetch("/cart/update.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        updates: {
          [itemId]: quantity,
        },
      }),
    }).then((resp) => resp.json());

  storeApi.getCartState = () =>
    fetch("/cart.js", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((resp) => resp.json());

  //---- Use this code to update the item bubble
  function itemsBubble(item_count) {
    if (item_count > 0) {
      $(".header__cart--count")
        .removeClass("header__cart--count--hidden")
        .text(item_count);
    } else if (item_count === 0) {
      $(".header__cart--count")
        .removeClass("header__cart--count--hidden")
        .text(item_count);
    } else {
      // Fail silently here
    }
  }

  //---- Configure the minimize screen here
  /*
    window.onBambuserLiveShoppingReady = function (player) {
      player.configure({
        buttons: {
          product: player.BUTTON.MINIMIZE,
        },
      });
    };
    * I get an iframe error, it seems that this configuration is not compatible.
  */


  //=========== Bambuser onReady Handler =================

  window.onBambuserLiveShoppingReady = (player) => {
    // ---- Start of player configuration ----
    const splitCookieArr = document.cookie.split("; ");
    const currency = splitCookieArr.find((row) =>
      row.startsWith("cart_currency")
    );
    player.configure({
      currency: (currency && currency.split("=")[1]) || Shopify.currency.active,
      locale: "en-US",
      buttons: {
        dismiss: player.BUTTON.LINK,
      },
    });

    // ---- Start of Cart Integrations ----
    player.on(player.EVENT.ADD_TO_CART, (addedItem, callback) => {
      storeApi
        .addToCart(addedItem.sku)
        .then((res) => {
          if (res.items) {
            callback(true);
            itemsBubble(res.items[0].quantity);
          } else if (res.description && res.description.includes("sold out")) {
            callback({ success: false, reason: "out-of-stock" });
          } else callback(false);
        })
        .catch((error) => {
          callback(false);
          console.error("Add to cart error! ", error);
        });
    });

    player.on(player.EVENT.UPDATE_ITEM_IN_CART, (updatedItem, callback) => {
      // console.log(
      //   `Cart updated! ${updatedItem.previousQuantity} --> ${updatedItem.quantity}`
      // );
      storeApi
        .updateItemInCart(updatedItem.sku, updatedItem.quantity)
        .then((res) => {
          if (res.items) {
            itemsBubble(updatedItem.quantity);
            callback(true);
          } else callback(false);
        })
        .catch((error) => {
          callback(false);
          console.error("Error on updating item! ", error);
        });
    });

    player.on(player.EVENT.SYNC_CART_STATE, () => {
      // Use your method to check if the user has checkout
      storeApi.getCartState().then((res) => {
        if (res.item_count == 0) {
          // Emptying the in-player cart
          player.updateCart({
            items: [],
          });
        }
      });
    });

    player.on(player.EVENT.CHECKOUT, () => {
      // Use the showCheckout() method to safely
      // navigate the user to your checkout page
      player.showCheckout(window.location.origin + "/cart");
    });
    // ---- End of Cart Integrations ----

    // ---- Start of Product Hydration ----
    player.on(player.EVENT.PROVIDE_PRODUCT_DATA, (event) => {
      // Iterates over all the products you have added to the show on the dashboard
      event.products.forEach(({ ref: sku, id, url }) => {
        // Your method to fetch a product data
        storeApi.getProductByUrl(url).then((item) => {
          //Uncomment the line below for testing
          //console.log(item);
          player.updateProduct(id, (productFactory) =>
            productFactory.product((detailsFactory) =>
              detailsFactory
                .name(item.title)
                .sku(item.id)
                .brandName(item.vendor)
                .variations((variationFactory) =>
                  item.variants.map((variation) =>
                    variationFactory()
                      .attributes((attributeFactory) =>
                        attributeFactory.colorName(variation.title)
                      )
                      .imageUrls([
                        // Adding the featured image of the chosen variation (if existed) at the begining of the images array
                        ...(variation.featured_image
                          ? [variation.featured_image.src]
                          : []),
                        // Adding product imgaes
                        ...item.images
                          .slice(0, MAX_IMAGES_COUNT - 1)
                          .map((url) => urlSanitizer(url))
                          .filter((url) => typeof url === "string"),
                      ])
                      .name(variation.title)
                      .sku(item.id)
                      .sizes((sizeFactory) => [
                        sizeFactory()
                          .name(variation.title)
                          .sku(variation.id)
                          .inStock(variation.available)
                          .price((priceFactory) =>
                            priceFactory
                              .original(variation.compare_at_price / 100)
                              .current(variation.price / 100)
                          ),
                      ])
                  )
                )
            )
          );
        });
      });
    });
  };
})();
