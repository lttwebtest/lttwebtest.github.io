/*! For license information please see js_theme.js.LICENSE.txt */
(() => {
  var e = {
      757: (e, t, r) => {
        e.exports = r(666);
      },
      131: () => {
        var e = document.getElementById("main-navigation");
        function t() {
          e.classList.toggle("is-open"), r.classList.toggle("is-open");
        }
        var r = document.getElementById("mobile-menu"),
          n = document.getElementById("bg-menu-mobile");
        r && r.addEventListener("click", t, !1),
          n && n.addEventListener("click", t, !1);
      },
      256: () => {
        $(function () {
          Flow.set("on", "pageview.checkout_step_2", function () {
            var e = $("header").data("shipping-method"),
              t =
                "<span class='shipping_method_message js-shipping-method-message'>" +
                $("header").data("shipping-message") +
                "</span>",
              r = null,
              n = null;
            function a(t) {
              var r = t.selections[0],
                a = t.deliveries[0].options,
                o = "";
              for (var s in a) {
                var c = a[s];
                if (c.id === r) {
                  o = c.tier.name;
                  break;
                }
              }
              o === e
                ? (n = setInterval(i, 50))
                : $(".js-shipping-method-message").remove();
            }
            function i() {
              var e = $(".radio-button__input");
              e.length &&
                (clearInterval(n),
                (e.length > 1 ? e.filter(":checked") : e.first())
                  .parent()
                  .find(".order-delivery-options__option-text")
                  .append(t));
            }
            flow.checkout.onOrderUpserted(function (e) {
              a(e);
            }),
              a(flow.checkout.getOrder().order),
              (r = setInterval(function () {
                $(".order-delivery-options__option").length &&
                  ((function (e) {
                    var t =
                        flow.checkout.getOrder().order.deliveries[0].options,
                      r = [],
                      n = $(".order-delivery-options__option"),
                      a = {};
                    for (var i in (n.each(function (e) {
                      var t = $(n[e])
                        .find(".order-delivery-options__option-primary-text")
                        .text();
                      t = t.slice(0, t.indexOf("(") - 1);
                      var r = $(n[e]).find(
                        ".order-delivery-options__option-price"
                      );
                      a[t] = r;
                    }),
                    t))
                      0 === t[i].price.amount && r.push(t[i].tier.name);
                  })(),
                  clearInterval(r));
              }, 50));
          });
        });
      },
      843: () => {
        !(function (e, t) {
          !(function () {
            if (
              "collection" === e.template.name ||
              "index" === e.template.name ||
              ("page" === e.template.name &&
                "black-friday" === e.template.suffix) ||
              "back-to-school" === e.template.suffix ||
              "christmas-pack" === e.template.suffix ||
              "financial-freedom" === e.template.suffix ||
              "valentines-promotion" === e.template.suffix ||
              "black-friday-2022" === e.template.suffix ||
              "buy-feature-eligibility" === e.template.suffix ||
              "singles-day" === e.template.suffix
            ) {
              var r =
                ((i = []),
                t.each(e.products.list, function (e, t) {
                  i.push(t);
                }),
                i);
              t(".subbar").appendTo(".header--fixed"),
                (a = t(".js-anchor-target")),
                t(window).on("resize scroll", function () {
                  var e = t(window).scrollTop() + 0.25 * t(window).height(),
                    r = a.filter(function () {
                      var r =
                        t(this).offset().top - t(this).prev().outerHeight(!0);
                      return e > r;
                    });
                  r.length > 0
                    ? (t(".collection__header-anchor--active").removeClass(
                        "collection__header-anchor--active"
                      ),
                      t(r.last().data("target")).addClass(
                        "collection__header-anchor--active"
                      ))
                    : t(".collection__header-anchor")
                        .first()
                        .addClass("collection__header-anchor--active");
                }),
                t(".js-anchor-click").on("click", function () {
                  var e =
                    t(t(this).data("sectionTarget")).offset().top -
                    t(".header--fixed").outerHeight();
                  t("html, body").animate({ scrollTop: e }, "slow");
                }),
                ".js-collection-form",
                (n = r),
                t(document).on("submit", ".js-collection-form", function (r) {
                  r.preventDefault();
                  var a = (function (e) {
                    for (var t = {}, r = 0; r < e.length; r++)
                      t[e[r].name] = e[r].value;
                    return t;
                  })(t(this).serializeArray());
                  e.cart.add(a),
                    ga(
                      "send",
                      "event",
                      "Products",
                      "AddToCart",
                      e.current_object.title,
                      a.quantity
                    );
                  for (var i = n, o = [], s = 0; s < i.length; s++) {
                    var c = {};
                    (c.id = i[s].id),
                      (c.name = i[s].title),
                      (c.quantity = a.quantity),
                      o.push(c);
                  }
                });
            }
            var n, a, i;
          })();
        })((window.theme = window.theme || {}), jQuery);
      },
      753: () => {
        $(function () {
          var e = $("#comparison-page-dropdown").find("#device1"),
            t = $("#comparison-page-dropdown").find("#device2");
          function r() {
            var r = $(this);
            $('[data-product="'.concat(r.val(), '"]')).show(),
              r.val() !== e.val() &&
                r.val() !== t.val() &&
                $('[data-product="'.concat(r.val(), '"]')).hide();
          }
          t.on("click", function () {
            t.find("option").each(function () {
              var t = $(this);
              t.show(), t.val() === e.val() && t.hide();
            });
          }),
            e.on("click", function () {
              e.find("option").each(function () {
                var e = $(this);
                e.show(), e.val() === t.val() && e.hide();
              });
            }),
            e.on("change", function () {
              t.find("option").each(r);
            }),
            t.on("change", function () {
              e.find("option").each(r);
            });
        }),
          $(function () {
            function e() {
              var e = $(document),
                t = $(".js-comparison-sticky-header"),
                r = e.scrollTop(),
                n = e.width();
              r > (n > 991 ? 840 : n > 767 ? 620 : 760)
                ? t.addClass("isVisible")
                : t.removeClass("isVisible");
            }
            $(window).on("scroll", e), e();
          });
      },
      127: () => {
        $(function () {
          ($button = $(".js-faq-button")),
            $button.on("click", function () {
              var e = $(this).find(".js-faq-pane"),
                t = $(this).find(".js-faq-chevron");
              e.is(":animated") ||
                (e.slideToggle("slow"), t.toggleClass("isExpanded"));
            });
        });
      },
      741: () => {
        $(function () {
          var e = $(window);
          $(document).on("submit", ".subbar__atc-form", function (e) {
            e.preventDefault();
            var t = $(this).find(".subbar__variant").val(),
              r = { id: t, quantity: 1 };
            theme.cart.add(r),
              theme.current_object.length > 0
                ? (ga(
                    "send",
                    "event",
                    "Products",
                    "AddToCart",
                    theme.current_object.title,
                    r.quantity
                  ),
                  dataLayer.push({
                    event: "EEaddToCart",
                    ecommerce: {
                      currencyCode: Flow.session.getCurrency(),
                      add: {
                        products: [
                          {
                            id: t.toString(),
                            name: theme.current_object.title,
                            quantity: r.quantity,
                          },
                        ],
                      },
                    },
                  }))
                : "nano-x-marketing" == theme.template.suffix &&
                  (ga(
                    "send",
                    "event",
                    "Products",
                    "AddToCart",
                    "Ledger Nano X",
                    1
                  ),
                  dataLayer.push({
                    event: "EEaddToCart",
                    ecommerce: {
                      currencyCode: Flow.session.getCurrency(),
                      add: {
                        products: [
                          {
                            id: t.toString(),
                            name: "Ledger Nano X",
                            quantity: 1,
                          },
                        ],
                      },
                    },
                  }));
          }),
            $(".bg-subnav-mobile").click(function () {
              $(this).toggle(),
                $(".js-accordion__list").toggleClass(
                  "js-accordion__list--open"
                );
            }),
            $(".has-children > a").click(function (e) {
              e.preventDefault();
            }),
            $(".has-children").click(function () {
              $(".has-children").not(this).removeClass("subnav-active"),
                $(this).toggleClass("subnav-active");
            }),
            $("body").click(function () {
              $("html").removeClass(),
                $("body").css("overflow-y", "visible"),
                $(
                  ".fb_digioh-overlay, .fb_lightbox-overlay, .fb_lightbox-overlay-fixed, .preloaded_lightbox, .preloaded_lightbox iframe"
                ).hide();
            });
          var t = $("#subnav-nano-x");
          t.length &&
            e.on("scroll", function () {
              e.scrollTop() <= 90
                ? t.removeClass("active")
                : t.addClass("active");
            });
          var r = $("#subnav-nano-sp");
          r.length &&
            e.on("scroll", function () {
              e.scrollTop() <= 90
                ? r.removeClass("active")
                : r.addClass("active");
            });
          var n = $("#subnav-stax");
          n.length &&
            e.on("scroll", function () {
              e.scrollTop() <= 90
                ? n.removeClass("active")
                : n.addClass("active");
            });
        }),
          $(function () {
            function e(e) {
              window.location.href = e;
            }
            jQuery(".all-clickable").each(function () {
              var t = jQuery(this).find("a:first-of-type").attr("href");
              jQuery(this).on("click", function () {
                var r = jQuery(this).find("input"),
                  n = jQuery(this).find(".no-all-clickable");
                void 0 !== r
                  ? jQuery(event.target).closest(r).length || e(t)
                  : (void 0 !== n && jQuery(event.target).closest(n).length) ||
                    e(t);
              });
            });
          }),
          $(function () {
            var e,
              t,
              r = $("a"),
              n = theme.shop.locale.toLowerCase();
            if ("en" != n)
              for (var a = 0; a < r.length; a++) {
                var i = r[a],
                  o = i.host,
                  s = i.href;
                (t = n),
                  (e = s).includes("/" + t + "/") ||
                    e.slice(-3) == "/" + t ||
                    e.slice(-6) == "/" + t ||
                    e.includes("/" + t + "#") ||
                    ([
                      "ledger.com",
                      "www.ledger.com",
                      "shop.ledger.com",
                      "ledgerstore-dev.myshopify.com",
                    ].includes(o)
                      ? (i.href = l(s, n, o))
                      : [
                          "support.ledger.com",
                          "support.ledgerwallet.com",
                        ].includes(o) && (i.href = c(s, n, o)));
              }
            function c(e, t, r) {
              return (
                "fr" == t
                  ? "support.ledgerwallet.com" == r
                    ? e.replace(
                        "support.ledgerwallet.com/hc",
                        "support.ledgerwallet.com/hc/fr-fr"
                      )
                    : e.replace(
                        "support.ledger.com/hc",
                        "support.ledger.com/hc/fr-fr"
                      )
                  : "support.ledgerwallet.com" == r
                  ? e.replace(
                      "support.ledgerwallet.com/hc",
                      "support.ledgerwallet.com/hc/" + t
                    )
                  : e.replace(
                      "support.ledger.com/hc",
                      "support.ledger.com/hc/" + t
                    )
              ).replace("/en-us", "");
            }
            function l(e, t, r) {
              return (
                "/" == e.slice(-1) && (e = e.slice(0, -1)),
                "ledger.com" == r || "www.ledger.com" == r
                  ? "zh-cn" == t
                    ? e.replace("ledger.com", "ledger.com/zh-hans")
                    : e.replace("ledger.com", "ledger.com/" + t)
                  : "ledgerstore-dev.myshopify.com" == r
                  ? e.replace(
                      "ledgerstore-dev.myshopify.com",
                      "ledgerstore-dev.myshopify.com/" + t
                    )
                  : "shop.ledger.com" == r
                  ? e.replace("shop.ledger.com", "shop.ledger.com/" + t)
                  : e
              );
            }
          });
      },
      739: () => {
        $(function () {
          var e = $(this).width(),
            t = $(".homepage-cta-banner__image img").width() + 20;
          if (e < t) {
            var r = e - t - 20;
            $(".homepage-cta-banner__image img").css("margin-left", r + "px");
          } else $(".homepage-cta-banner__image img").css("margin-left", "0px");
        }),
          $(window).resize(function () {
            var e = $(this).width(),
              t = $(".homepage-cta-banner__image img").width() + 20;
            if (e < t) {
              var r = e - t - 20;
              $(".homepage-cta-banner__image img").css("margin-left", r + "px");
            } else $(".homepage-cta-banner__image img").css("margin-left", "0px");
          });
      },
      73: () => {
        var e, t, r, n, a, i, o, s, c, l, d;
        "nano-x" === theme.template.suffix &&
          ((l = { deviceId: "nanoX" }),
          (d = window.location.search.split("&").filter(function (e) {
            return e.includes("utm");
          })).length &&
            (d
              .map(function (e) {
                return e.split("=");
              })
              .forEach(function (e) {
                l[e[0]] = e[1];
              }),
            sessionStorage.setItem("ref_llm", JSON.stringify(l)),
            (e = document.getElementById(
              "shopify-section-product-cross-sell--nano-x"
            )),
            (t = document.getElementById(
              "shopify-section-product-ledger-live"
            )),
            (r = document.getElementById("compare-products")),
            (n = document.getElementsByClassName(
              "add-to-cart-wrapper quantity-buttons-container"
            )),
            (a = document.getElementById("shopify-section-tech-specs--nano-x")),
            (i = document.getElementById(
              "shopify-section-product-features--nano-x"
            )),
            (o = document.getElementById("footer")),
            (s = document.getElementsByClassName(
              "product-features scroll-fixed-content"
            )[0]),
            (c = a.firstChild),
            (e.style.display = "none"),
            (t.style.display = "none"),
            (r.style.display = "none"),
            (o.style.display = "none"),
            (n[0].style.flexWrap = "nowrap"),
            c.classList.remove("margin-lg"),
            s.classList.remove("margin-lg"),
            s.remove(),
            a.remove(),
            i.prepend(s, a)));
      },
      428: () => {
        $(function () {
          if ("ledger-live" == theme.template.suffix) {
            var e = theme.utils.getOperatingSystem(),
              t = $(".ledger-live__top-banner__button");
            "PC" == e
              ? t.attr("href", theme.live_links.windows)
              : "Mac" == e
              ? t.attr("href", theme.live_links.mac)
              : t.attr("href", theme.live_links.linux);
          }
        });
      },
      421: () => {
        $(function () {
          $("[data-open-modal]").click(function () {
            $($(this).attr("data-open-modal")).addClass("modal--active"),
              $(".modal--active .modal__white-background").outerHeight() <
                $(".modal--active .modal__content").height() &&
                $(".modal--active .modal__white-background").css(
                  "overflow-y",
                  "scroll"
                );
          }),
            $(".modal__close").click(function () {
              $(".modal").removeClass("modal--active");
            }),
            $(".modal").click(function (e) {
              e.target === this && $(".modal").removeClass("modal--active");
            });
        });
      },
      530: () => {
        $(function () {
          "nano-x-marketing" == theme.template.suffix &&
            $(function () {
              setTimeout(function () {
                $("#nano-x-hero").addClass("ledger-animation");
              }, 1500),
                setTimeout(function () {
                  $("#nano-x-video").addClass("ledger-animation");
                }, 1700),
                $("#nano-x-keynote-video").click(function (e) {
                  e.preventDefault(),
                    $(".ledger-popup").css("display", "flex"),
                    window.scrollTo(0, 0);
                }),
                $(".ledger-popup__close").click(function (e) {
                  e.preventDefault(),
                    $(".youtube-video")[0].contentWindow.postMessage(
                      '{"event":"command","func":"stopVideo","args":""}',
                      "*"
                    ),
                    $(".ledger-popup").hide();
                });
              var e = $("#nano-x-hero"),
                t = $("#nano-x-product"),
                r = $("#nano-x-feature-mobility"),
                n = $("#nano-x-feature-staking"),
                a = $("#nano-x-feature-currency"),
                i = $("#nano-x-manage-crypto"),
                o = $("#compare-products"),
                s = $("#subnav-nano-x")
                  ? $("#subnav-nano-x")
                  : $("#subnav-nano-sp"),
                c = ($("#nano-x-product"), $("#product-part-1")),
                l = $("#product-part-2"),
                d = $("#product-part-3"),
                u = $("#product-part-4"),
                p = $("#product-part-5"),
                f = $("#product-part-6"),
                m = $("#product-part-7"),
                h = ($("#product-part-8"), $("#product-part-9")),
                _ = $("#product-detail-buttons"),
                v = $("#product-detail-chip");
              function g(e, t) {
                "add" == t
                  ? jQuery.each(e, function (e, t) {
                      t.addClass("animate");
                    })
                  : jQuery.each(e, function (e, t) {
                      t.removeClass("animate");
                    });
              }
              s.find("a.marketing-anchor").click(function (e) {
                e.preventDefault();
                var t = $(this).attr("href");
                (t = "#" + t.split("#").pop()),
                  $("html, body").animate(
                    { scrollTop: $("div" + t).offset().top - 80 },
                    400
                  );
              }),
                $("#subnav-nano-x ul").click(function (e) {
                  e.preventDefault(),
                    $(this).toggleClass("navOpen"),
                    $(this)
                      .parents(".subbar__container")
                      .toggleClass("navOpen");
                }),
                $("a#nano-x-video-scroll").click(function (e) {
                  e.preventDefault();
                  var t = $(this).attr("href");
                  $("html, body").animate(
                    { scrollTop: $("div" + t).offset().top - 40 },
                    400
                  );
                });
              var b,
                y,
                w = 0,
                k = $(window).innerWidth();
              $(".product__atc--fixed").hide(),
                $(window).on("scroll", function (s) {
                  var x =
                      ((b = window.pageYOffset),
                      (y = b > w ? "down" : "up"),
                      (w = b),
                      y),
                    C = (e.height(), t.height()),
                    j =
                      (r.height(),
                      n.height(),
                      a.height(),
                      i.height(),
                      o.height(),
                      $(".header--fixed").height(),
                      e.offset().top,
                      t.offset().top),
                    I = r.offset().top,
                    S = n.offset().top,
                    O = a.offset().top,
                    E = o.offset().top,
                    T = i.offset().top;
                  if (k < 768)
                    var q = O - 350,
                      L = T - 350,
                      A = I - 350,
                      P = S - 350,
                      H = j - 350,
                      D = E - 400;
                  else
                    k < 1180
                      ? ((q = O - 400),
                        (L = T - 400),
                        (A = I - 350),
                        (P = S - 350),
                        (H = j - 400),
                        (D = E - 450))
                      : ((q = O - 400),
                        (L = T - 500),
                        (A = I - 400),
                        (P = S - 400),
                        (H = j - 500),
                        (D = E - 650));
                  if ("down" == x) {
                    if (
                      $(this).scrollTop() >= H &&
                      $(this).scrollTop() < j + C
                    ) {
                      t.addClass("ledger-animation");
                      var M = [u, p, f, m, _, v];
                      g([c, l, d, h], "add"),
                        setTimeout(function () {
                          g(M, "add");
                        }, 100);
                    }
                    $(this).scrollTop() >= q && a.addClass("ledger-animation"),
                      $(this).scrollTop() >= L &&
                        i.addClass("ledger-animation"),
                      $(this).scrollTop() >= A &&
                        r.addClass("ledger-animation"),
                      $(this).scrollTop() >= P &&
                        n.addClass("ledger-animation"),
                      $(this).scrollTop() >= D &&
                        o.addClass("ledger-animation");
                  } else $(this).scrollTop() < 15 && $("#template-page-nano-x-marketing header > .header-container").removeClass("header__dark").show(), k < 768 && $("#template-page-nano-x-marketing header > .header-container").addClass("header__dark").show();
                });
            });
        });
      },
      458: () => {
        $(function () {
          if ("partners" == theme.template.suffix) {
            var e = theme.utils.getURLParams();
            theme.cart
              .updateAttributes({
                attributes: { _partner_id: e["attributes[partner_id]"] },
              })
              .then(function () {
                Flow.set("on", "ready", function () {
                  Flow.cart.redirectToCheckout({
                    orderForm: {
                      attributes: { partner_id: e["attributes[partner_id]"] },
                      items: [
                        { number: e["items[0]"], quantity: e["quantity[0]"] },
                      ],
                    },
                  });
                });
              });
          } else
            "cart" != theme.template.name &&
              theme.template.name &&
              theme.cart.updateAttributes({ attributes: { _partner_id: "" } });
        });
      },
      174: () => {
        $(function () {
          $(document).on("submit", ".reseller-form-login", function (e) {
            e.preventDefault();
            var t = $(this).serialize();
            $.ajax({
              url: "/account/login",
              type: "post",
              data: t,
              success: function (e) {
                var t = jQuery(e).find(".errors").text();
                "" != t && "undefined" != t
                  ? $("#login-form-errors").html(t)
                  : location.reload(!0);
              },
              error: function (e) {
                $("#login-form-errors").html(
                  "Hi, an error has occured in the registation process"
                );
              },
            });
          }),
            $(document).on("submit", ".reseller-form-recover", function (e) {
              e.preventDefault();
              var t = $(this).serialize();
              $.ajax({
                url: "/account/recover",
                type: "post",
                data: t,
                success: function (e) {
                  var t = jQuery(e).find(".errors").text();
                  "" != t && "undefined" != t
                    ? $("#recover-form-errors").html(t)
                    : $("#recover-form-errors").html(
                        '<span style="color: #41ccb4;"><i class="fal fa-check" style="font-size: 18px;"></i> An email has been sent to you.</span>'
                      );
                },
                error: function (e) {
                  $("#recover-form-errors").html(
                    "Hi, an error has occured in the registation process"
                  );
                },
              });
            }),
            $(document).on("submit", ".reseller-form-create", function (e) {
              e.preventDefault();
              var t = $(this).serialize();
              $.ajax({
                url: "/account",
                type: "post",
                data: t,
                success: function (e) {
                  var t = jQuery(e).find(".errors").text();
                  "" != t && "undefined" != t
                    ? $("#create-form-errors").html(t)
                    : $("#create_customer").after(
                        '<div class="reseller-form bg-dark-blue forms-area-msg"><i class="fal fa-envelope-open-text"></i><br>You are going to receive a mail with all the information for the next part.</div>'
                      );
                },
                error: function (e) {
                  $("#create-form-errors").html(
                    "Hi, an error has occured in the registation process"
                  );
                },
              });
            });
        });
      },
      555: () => {
        $(function () {
          $(".retailers-hero__search-input").keyup(function () {
            var e = $(this).val().toLowerCase(),
              t = "";
            window.outerWidth >= 768 && window.outerWidth <= 1079
              ? ((t = $(".external-cta--tablet")),
                $(".external-cta.only__desk-mob").hide())
              : ((t = $(".external-cta.only__desk-mob")),
                $(".external-cta--tablet").hide()),
              "" === e
                ? (t.show(),
                  $(this)
                    .parent()
                    .removeClass("retailers-hero__search--active"))
                : (t.hide(),
                  $(this).parent().addClass("retailers-hero__search--active")),
              $(".retailer-list__merchant-info").each(function () {
                "" === e || $(this).text().toLowerCase().indexOf(e) >= 0
                  ? $(this).removeClass(
                      "retailer-list__merchant-info--filtered-out"
                    )
                  : $(this).addClass(
                      "retailer-list__merchant-info--filtered-out"
                    );
              });
            var r = !0;
            $(".retailer-list__country").each(function () {
              var e = !0,
                t = $(this).text();
              $(".retailer-list__merchant-info__country").each(function () {
                $(this).text() != t ||
                  $(this)
                    .parent()
                    .hasClass("retailer-list__merchant-info--filtered-out") ||
                  ((e = !1), (r = !1));
              }),
                $(this).toggleClass("retailer-list__country--filtered-out", e);
            }),
              r ? $(".no-results").show() : $(".no-results").hide();
          }),
            $(".retailers-hero__search-input").blur(function (e) {
              "" !== $(this).val()
                ? $(this).addClass("retailers-hero__search-input--edited")
                : $(this).removeClass("retailers-hero__search-input--edited");
            });
        });
      },
      304: () => {
        function e(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        $(function () {
          $(document).on("click", function (e) {
            (!$(e.target).is(".select__box") &&
              !$(e.target).parents().is(".select__box")) ||
            ($(e.target).is(".select__list") &&
              $(e.target).parents().is(".select__list"))
              ? $(".select__box--active").length > 0 &&
                $(".select__box--active").removeClass("select__box--active")
              : $(e.target).hasClass("select__box")
              ? $(e.target).toggleClass("select__box--active")
              : $(e.target)
                  .closest(".select__box")
                  .toggleClass("select__box--active");
          }),
            $(document).on("click", ".select__list-item", function () {
              $(this)
                .siblings(".select__list-item--selected")
                .removeClass("select__list-item--selected"),
                $(this).addClass("select__list-item--selected"),
                $(this)
                  .parent()
                  .siblings(".review__sort__results")
                  .text($(this).text());
            });
        });
        var t,
          r = (function (t, r) {
            var n =
              ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
              t["@@iterator"];
            if (!n) {
              if (
                Array.isArray(t) ||
                (n = (function (t, r) {
                  if (t) {
                    if ("string" == typeof t) return e(t, r);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return (
                      "Object" === n &&
                        t.constructor &&
                        (n = t.constructor.name),
                      "Map" === n || "Set" === n
                        ? Array.from(t)
                        : "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? e(t, r)
                        : void 0
                    );
                  }
                })(t))
              ) {
                n && (t = n);
                var a = 0,
                  i = function () {};
                return {
                  s: i,
                  n: function () {
                    return a >= t.length
                      ? { done: !0 }
                      : { done: !1, value: t[a++] };
                  },
                  e: function (e) {
                    throw e;
                  },
                  f: i,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var o,
              s = !0,
              c = !1;
            return {
              s: function () {
                n = n.call(t);
              },
              n: function () {
                var e = n.next();
                return (s = e.done), e;
              },
              e: function (e) {
                (c = !0), (o = e);
              },
              f: function () {
                try {
                  s || null == n.return || n.return();
                } finally {
                  if (c) throw o;
                }
              },
            };
          })(document.querySelectorAll(".fields-container input"));
        try {
          for (r.s(); !(t = r.n()).done; ) {
            var n = t.value;
            n.addEventListener("focus", function (e) {
              var t = e.target.id;
              document
                .querySelector("label[for=" + t + "]")
                .closest("div")
                .classList.add("is-active");
            }),
              n.addEventListener("blur", function (e) {
                if (!e.target.value) {
                  var t = e.target.id;
                  document
                    .querySelector("label[for=" + t + "]")
                    .closest("div")
                    .classList.remove("is-active");
                }
              });
          }
        } catch (e) {
          r.e(e);
        } finally {
          r.f();
        }
      },
      558: () => {
        $(function () {
          var e = {
            live: $(".live__slideshow"),
            externalSlideshow: $(".external-slideshow"),
            page_live: $(".currency-slideshow"),
          };
          function t(e) {
            e.slick({
              slidesToShow: 1,
              infinite: !1,
              dots: !0,
              arrows: !1,
              variableWidth: !0,
            }),
              (function (e, t) {
                e.slick("slickFilter", ".live__slideshow-slide");
              })(e);
          }
          function r(e) {
            e.slick({
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: !1,
              dots: !0,
              arrows: !1,
            });
          }
          function n(e) {
            e.hasClass("slick-initialized") &&
              ((function (e) {
                e.slick("slickUnfilter");
              })(e),
              e.slick("unslick"));
          }
          function a(e) {
            e.slick({
              centerMode: !0,
              slidesToShow: 1,
              infinite: !1,
              dots: !0,
              arrows: !1,
              variableWidth: !0,
            });
          }
          $(window).width() <= globals.breakpoints.mobile &&
            (a(e.externalSlideshow), t(e.live), r(e.page_live)),
            $(document).on("break:mobile", function () {
              e.live.hasClass("slick-initialized") || t(e.live),
                e.externalSlideshow.hasClass("slick-initialized") ||
                  a(e.externalSlideshow),
                e.page_live.hasClass("slick-initialized") || r(e.page_live);
            }),
            $(document).on("break:desktop", function () {}),
            $(document).on("break:tablet", function () {}),
            $(document).on("break:tablet break:desktop", function () {
              n(e.live), n(e.externalSlideshow), n(e.page_live);
            }),
            $(document).on("break:mobile break:tablet", function () {});
        });
      },
      674: () => {
        $(function () {
          ("stax-marketing" !== theme.template.suffix &&
            "stax" !== theme.template.suffix) ||
            (($button = $(".js-stax-marketing-tech-specs-button")),
            $button.on("click", function (e) {
              e.preventDefault();
              var t = $(this)
                .closest(".js-stax-marketing-tech-specs")
                .find(".js-stax-marketing-tech-specs-container");
              $(this).remove(), t.removeClass("isTruncated");
            })),
            ($subbarNav = $("#subnav-stax")),
            $subbarNav.find("a.marketing-anchor").click(function (e) {
              e.preventDefault();
              var t = $(this).attr("href");
              (t = "#" + t.split("#").pop()),
                $("html, body").animate(
                  { scrollTop: $("div" + t).offset().top - 80 },
                  400
                );
            }),
            $("#subnav-stax ul").click(function (e) {
              e.preventDefault(),
                $(this).toggleClass("navOpen"),
                $(this).parents(".subbar__container").toggleClass("navOpen");
            });
        }),
          $(function () {
            if ("stax-marketing" === theme.template.suffix) {
              var e = window.location.pathname.includes("/ar/"),
                t = e ? "rtl" : "ltr";
              $(".js-stax-marketing-nft-carousel-original")
                .attr("dir", t)
                .slick({
                  prevArrow: ".js-stax-marketing-nft-carousel-prev",
                  nextArrow: ".js-stax-marketing-nft-carousel-next",
                  asNavFor: ".js-stax-marketing-nft-carousel-emulated",
                  infinite: !0,
                  speed: 800,
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  variableWidth: !0,
                  swipeToSlide: !1,
                  touchMove: !1,
                  centerMode: !0,
                  responsive: [
                    { breakpoint: 992, settings: { swipeToSlide: !0 } },
                    { breakpoint: 768, settings: { swipeToSlide: !0 } },
                  ],
                }),
                $(".js-stax-marketing-nft-carousel-emulated")
                  .attr("dir", t)
                  .slick({
                    asNavFor: ".js-stax-marketing-nft-carousel-original",
                    infinite: !0,
                    speed: 800,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    variableWidth: !0,
                    swipeToSlide: !1,
                    touchMove: !1,
                    arrows: !1,
                    centerMode: !0,
                  }),
                $(".js-stax-marketing-feature-carousel-mobile")
                  .attr("dir", t)
                  .slick({
                    arrows: !1,
                    infinite: !1,
                    speed: 800,
                    slidesToShow: 1.25,
                    centerMode: !0,
                    adaptiveHeight: !0,
                    rtl: e,
                    responsive: [
                      {
                        breakpoint: 768,
                        settings: {
                          slidesToShow: 1.25,
                          swipeToSlide: !0,
                          touchMove: !0,
                          adaptiveHeight: !0,
                          dots: !1,
                        },
                      },
                    ],
                  }),
                $(".js-stax-testimonials-slider")
                  .attr("dir", t)
                  .slick({
                    prevArrow: ".js-stax-testimonials-prev",
                    nextArrow: ".js-stax-testimonials-next",
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    swipeToSlide: !1,
                    touchMove: !1,
                    infinite: e,
                    rtl: !1,
                    responsive: [
                      {
                        breakpoint: 992,
                        settings: {
                          slidesToShow: 2.25,
                          slidesToScroll: 2,
                          swipeToSlide: !0,
                          touchMove: !0,
                          infinite: !1,
                          rtl: e,
                        },
                      },
                      {
                        breakpoint: 768,
                        settings: {
                          slidesToShow: 1.25,
                          slidesToScroll: 1,
                          swipeToSlide: !0,
                          touchMove: !0,
                          infinite: !1,
                          rtl: e,
                        },
                      },
                    ],
                  })
                  .on("setPosition", function (e, t) {
                    t.$slides.css("height", t.$slideTrack.height() + "px");
                  });
            }
          }),
          $(function () {
            var e = window.location.pathname.includes("/ar/") ? "rtl" : "ltr";
            setTimeout(function () {
              $(".js-stax-marketing-feature-carousel-desktop")
                .attr("dir", e)
                .slick({
                  arrows: !1,
                  dots: !0,
                  appendDots: ".js-stax-marketing-feature-carousel-dots",
                  infinite: !1,
                  speed: 500,
                  swipeToSlide: !1,
                  touchMove: !1,
                  adaptiveHeight: !0,
                  cssEase: "linear",
                  autoplay: !0,
                  fade: !0,
                  autoplaySpeed: 8e3,
                  pauseOnFocus: !1,
                  pauseOnHover: !1,
                  pauseOnDotsHover: !0,
                }),
                $(".js-stax-marketing-feature-carousel-desktop").on(
                  "beforeChange",
                  function (e, t, r, n) {
                    var a = $(".js-stax-marketing-feature-carousel-subtitle"),
                      i = $(".js-stax-marketing-feature-carousel-title"),
                      o = $(".js-stax-marketing-feature-carousel-description"),
                      s = t.$slides[n].firstChild.firstChild.dataset;
                    a.text(s.subtitle), i.text(s.title), o.html(s.description);
                  }
                );
            }, 1e3);
          });
      },
      81: () => {
        !(function (e, t) {
          var r = t(window).width();
          t(window).resize(function () {
            var e = n(r);
            r = e;
          });
          var n = function (n) {
            var a = t(window).width();
            return (
              r <= e.breakpoints.tablet && a > e.breakpoints.tablet
                ? t(document).trigger("break:desktop")
                : (r <= e.breakpoints.mobile &&
                    a > e.breakpoints.mobile &&
                    a <= e.breakpoints.tablet) ||
                  (r >= e.breakpoints.desktop &&
                    a > e.breakpoints.mobile &&
                    a <= e.breakpoints.tablet)
                ? t(document).trigger("break:tablet")
                : r > e.breakpoints.mobile &&
                  a <= e.breakpoints.mobile &&
                  t(document).trigger("break:mobile"),
              a
            );
          };
        })((window.globals = window.globals || {}), jQuery);
      },
      507: () => {
        $(function () {
          Flow.set("on", "loaded", function () {
            var e = Flow.getCountry();
            dataLayer.push({ user_country: e });
          }),
            theme.utils.getCookie("_f60_session") &&
              _sift.push([
                "_setSessionId",
                theme.utils.getCookie("_f60_session"),
              ]);
        });
      },
      206: () => {
        $(function () {
          $(".designguide__form--text-input").focusout(function () {
            "" == !$(this).val()
              ? $(this).addClass("not-empty")
              : $(this).removeClass("not-empty");
          }),
            $(".select-wrap__icon").on("click", function () {
              $(this).next().toggleClass("select-wrap__box--active"),
                $(this)
                  .parent(".select-wrap")
                  .siblings()
                  .find(".select-wrap__box")
                  .removeClass("select-wrap__box--active");
            }),
            $(".select-wrap__box select").on("change", function () {
              var e = $(this).val();
              $(this)
                .closest(".select-wrap")
                .children(".select-wrap__selection")
                .val(e);
            }),
            $("body").on("click", function (e) {
              $(e.target).hasClass("select-wrap") ||
                $(".select-wrap").find(e.target).length ||
                $(".select-wrap__box").removeClass("select-wrap__box--active");
            }),
            $(document).on(
              "submit",
              ".vault-form__form__container--form",
              function (e) {
                e.preventDefault();
                var t = $(this).serialize(),
                  r = $(this).attr("action");
                $.ajax({
                  url: r,
                  type: "post",
                  dataType: "json",
                  data: t,
                  success: function (e) {
                    window.location.href = "/pages/thank-you/";
                  },
                  error: function (e) {
                    200 == e.status
                      ? (window.location.href = "/pages/thank-you/")
                      : 429 == e.status
                      ? ($(".customer__form-error").html(
                          '<span>Too many account creation attempts. Please try again later or contact <a href="https://support.ledgerwallet.com/hc/en-us/requests/new">Ledger Support</a>.</span>'
                        ),
                        $(window).scrollTop(0))
                      : ($(".customer__form-error").html(
                          '<span>Hi, an error has occured in the registation process, please contact <a href="https://support.ledgerwallet.com/hc/en-us/requests/new">Ledger support</a></span>'
                        ),
                        $(window).scrollTop(0));
                  },
                });
              }
            ),
            window.location.pathname.indexOf("pages/thank-you/") > -1 &&
              setTimeout(function () {
                window.location.href = theme.shop.url;
              }, 5e3);
        });
      },
      666: (e) => {
        var t = (function (e) {
          "use strict";
          var t,
            r = Object.prototype,
            n = r.hasOwnProperty,
            a = "function" == typeof Symbol ? Symbol : {},
            i = a.iterator || "@@iterator",
            o = a.asyncIterator || "@@asyncIterator",
            s = a.toStringTag || "@@toStringTag";
          function c(e, t, r) {
            return (
              Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            c({}, "");
          } catch (e) {
            c = function (e, t, r) {
              return (e[t] = r);
            };
          }
          function l(e, t, r, n) {
            var a = t && t.prototype instanceof _ ? t : _,
              i = Object.create(a.prototype),
              o = new S(n || []);
            return (
              (i._invoke = (function (e, t, r) {
                var n = u;
                return function (a, i) {
                  if (n === f) throw new Error("Generator is already running");
                  if (n === m) {
                    if ("throw" === a) throw i;
                    return E();
                  }
                  for (r.method = a, r.arg = i; ; ) {
                    var o = r.delegate;
                    if (o) {
                      var s = C(o, r);
                      if (s) {
                        if (s === h) continue;
                        return s;
                      }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                      if (n === u) throw ((n = m), r.arg);
                      r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    n = f;
                    var c = d(e, t, r);
                    if ("normal" === c.type) {
                      if (((n = r.done ? m : p), c.arg === h)) continue;
                      return { value: c.arg, done: r.done };
                    }
                    "throw" === c.type &&
                      ((n = m), (r.method = "throw"), (r.arg = c.arg));
                  }
                };
              })(e, r, o)),
              i
            );
          }
          function d(e, t, r) {
            try {
              return { type: "normal", arg: e.call(t, r) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          e.wrap = l;
          var u = "suspendedStart",
            p = "suspendedYield",
            f = "executing",
            m = "completed",
            h = {};
          function _() {}
          function v() {}
          function g() {}
          var b = {};
          c(b, i, function () {
            return this;
          });
          var y = Object.getPrototypeOf,
            w = y && y(y(O([])));
          w && w !== r && n.call(w, i) && (b = w);
          var $ = (g.prototype = _.prototype = Object.create(b));
          function k(e) {
            ["next", "throw", "return"].forEach(function (t) {
              c(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function x(e, t) {
            function r(a, i, o, s) {
              var c = d(e[a], e, i);
              if ("throw" !== c.type) {
                var l = c.arg,
                  u = l.value;
                return u && "object" == typeof u && n.call(u, "__await")
                  ? t.resolve(u.__await).then(
                      function (e) {
                        r("next", e, o, s);
                      },
                      function (e) {
                        r("throw", e, o, s);
                      }
                    )
                  : t.resolve(u).then(
                      function (e) {
                        (l.value = e), o(l);
                      },
                      function (e) {
                        return r("throw", e, o, s);
                      }
                    );
              }
              s(c.arg);
            }
            var a;
            this._invoke = function (e, n) {
              function i() {
                return new t(function (t, a) {
                  r(e, n, t, a);
                });
              }
              return (a = a ? a.then(i, i) : i());
            };
          }
          function C(e, r) {
            var n = e.iterator[r.method];
            if (n === t) {
              if (((r.delegate = null), "throw" === r.method)) {
                if (
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  C(e, r),
                  "throw" === r.method)
                )
                  return h;
                (r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return h;
            }
            var a = d(n, e.iterator, r.arg);
            if ("throw" === a.type)
              return (
                (r.method = "throw"), (r.arg = a.arg), (r.delegate = null), h
              );
            var i = a.arg;
            return i
              ? i.done
                ? ((r[e.resultName] = i.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  h)
                : i
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                h);
          }
          function j(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function I(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function S(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(j, this),
              this.reset(!0);
          }
          function O(e) {
            if (e) {
              var r = e[i];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var a = -1,
                  o = function r() {
                    for (; ++a < e.length; )
                      if (n.call(e, a))
                        return (r.value = e[a]), (r.done = !1), r;
                    return (r.value = t), (r.done = !0), r;
                  };
                return (o.next = o);
              }
            }
            return { next: E };
          }
          function E() {
            return { value: t, done: !0 };
          }
          return (
            (v.prototype = g),
            c($, "constructor", g),
            c(g, "constructor", v),
            (v.displayName = c(g, s, "GeneratorFunction")),
            (e.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === v || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (e.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, g)
                  : ((e.__proto__ = g), c(e, s, "GeneratorFunction")),
                (e.prototype = Object.create($)),
                e
              );
            }),
            (e.awrap = function (e) {
              return { __await: e };
            }),
            k(x.prototype),
            c(x.prototype, o, function () {
              return this;
            }),
            (e.AsyncIterator = x),
            (e.async = function (t, r, n, a, i) {
              void 0 === i && (i = Promise);
              var o = new x(l(t, r, n, a), i);
              return e.isGeneratorFunction(r)
                ? o
                : o.next().then(function (e) {
                    return e.done ? e.value : o.next();
                  });
            }),
            k($),
            c($, s, "Generator"),
            c($, i, function () {
              return this;
            }),
            c($, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (e) {
              var t = [];
              for (var r in e) t.push(r);
              return (
                t.reverse(),
                function r() {
                  for (; t.length; ) {
                    var n = t.pop();
                    if (n in e) return (r.value = n), (r.done = !1), r;
                  }
                  return (r.done = !0), r;
                }
              );
            }),
            (e.values = O),
            (S.prototype = {
              constructor: S,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(I),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var r = this;
                function a(n, a) {
                  return (
                    (s.type = "throw"),
                    (s.arg = e),
                    (r.next = n),
                    a && ((r.method = "next"), (r.arg = t)),
                    !!a
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var o = this.tryEntries[i],
                    s = o.completion;
                  if ("root" === o.tryLoc) return a("end");
                  if (o.tryLoc <= this.prev) {
                    var c = n.call(o, "catchLoc"),
                      l = n.call(o, "finallyLoc");
                    if (c && l) {
                      if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
                      if (this.prev < o.finallyLoc) return a(o.finallyLoc);
                    } else if (c) {
                      if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < o.finallyLoc) return a(o.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var a = this.tryEntries[r];
                  if (
                    a.tryLoc <= this.prev &&
                    n.call(a, "finallyLoc") &&
                    this.prev < a.finallyLoc
                  ) {
                    var i = a;
                    break;
                  }
                }
                i &&
                  ("break" === e || "continue" === e) &&
                  i.tryLoc <= t &&
                  t <= i.finallyLoc &&
                  (i = null);
                var o = i ? i.completion : {};
                return (
                  (o.type = e),
                  (o.arg = t),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), h)
                    : this.complete(o)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  h
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t];
                  if (r.finallyLoc === e)
                    return this.complete(r.completion, r.afterLoc), I(r), h;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t];
                  if (r.tryLoc === e) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var a = n.arg;
                      I(r);
                    }
                    return a;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, r, n) {
                return (
                  (this.delegate = {
                    iterator: O(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  h
                );
              },
            }),
            e
          );
        })(e.exports);
        try {
          regeneratorRuntime = t;
        } catch (e) {
          "object" == typeof globalThis
            ? (globalThis.regeneratorRuntime = t)
            : Function("r", "regeneratorRuntime = r")(t);
        }
      },
    },
    t = {};
  function r(n) {
    var a = t[n];
    if (void 0 !== a) return a.exports;
    var i = (t[n] = { exports: {} });
    return e[n](i, i.exports, r), i.exports;
  }
  (r.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, { a: t }), t;
  }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      function e(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function t(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function n(e, r) {
        if (e) {
          if ("string" == typeof e) return t(e, r);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? t(e, r)
              : void 0
          );
        }
      }
      function a(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return t(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          n(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function s(e, t, r) {
        return t && o(e.prototype, t), r && o(e, r), e;
      }
      function c(e, t, r, n, a, i, o) {
        try {
          var s = e[i](o),
            c = s.value;
        } catch (e) {
          return void r(e);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, a);
      }
      function l(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, a) {
            var i = e.apply(t, r);
            function o(e) {
              c(i, n, a, o, s, "next", e);
            }
            function s(e) {
              c(i, n, a, o, s, "throw", e);
            }
            o(void 0);
          });
        };
      }
      function d(e) {
        return (
          (d =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          d(e)
        );
      }
      !(function (e) {
        var t = (function () {
          function t() {
            i(this, t), this._handleize();
          }
          return (
            s(t, [
              {
                key: "_handleize",
                value: function () {
                  for (
                    var e = [
                        {
                          base: "A",
                          letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ",
                        },
                        { base: "AA", letters: "Ꜳ" },
                        { base: "AE", letters: "ÆǼǢ" },
                        { base: "AO", letters: "Ꜵ" },
                        { base: "AU", letters: "Ꜷ" },
                        { base: "AV", letters: "ꜸꜺ" },
                        { base: "AY", letters: "Ꜽ" },
                        { base: "B", letters: "BⒷＢḂḄḆɃƂƁ" },
                        { base: "C", letters: "CⒸＣĆĈĊČÇḈƇȻꜾ" },
                        { base: "D", letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ" },
                        { base: "DZ", letters: "ǱǄ" },
                        { base: "Dz", letters: "ǲǅ" },
                        {
                          base: "E",
                          letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ",
                        },
                        { base: "F", letters: "FⒻＦḞƑꝻ" },
                        { base: "G", letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ" },
                        { base: "H", letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ" },
                        { base: "I", letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ" },
                        { base: "J", letters: "JⒿＪĴɈ" },
                        { base: "K", letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ" },
                        { base: "L", letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ" },
                        { base: "LJ", letters: "Ǉ" },
                        { base: "Lj", letters: "ǈ" },
                        { base: "M", letters: "MⓂＭḾṀṂⱮƜ" },
                        { base: "N", letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ" },
                        { base: "NJ", letters: "Ǌ" },
                        { base: "Nj", letters: "ǋ" },
                        {
                          base: "O",
                          letters:
                            "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ",
                        },
                        { base: "OI", letters: "Ƣ" },
                        { base: "OO", letters: "Ꝏ" },
                        { base: "OU", letters: "Ȣ" },
                        { base: "OE", letters: "Œ" },
                        { base: "oe", letters: "œ" },
                        { base: "P", letters: "PⓅＰṔṖƤⱣꝐꝒꝔ" },
                        { base: "Q", letters: "QⓆＱꝖꝘɊ" },
                        { base: "R", letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ" },
                        { base: "S", letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ" },
                        { base: "T", letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ" },
                        { base: "TZ", letters: "Ꜩ" },
                        {
                          base: "U",
                          letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ",
                        },
                        { base: "V", letters: "VⓋＶṼṾƲꝞɅ" },
                        { base: "VY", letters: "Ꝡ" },
                        { base: "W", letters: "WⓌＷẀẂŴẆẄẈⱲ" },
                        { base: "X", letters: "XⓍＸẊẌ" },
                        { base: "Y", letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ" },
                        { base: "Z", letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ" },
                        {
                          base: "a",
                          letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ",
                        },
                        { base: "aa", letters: "ꜳ" },
                        { base: "ae", letters: "æǽǣ" },
                        { base: "ao", letters: "ꜵ" },
                        { base: "au", letters: "ꜷ" },
                        { base: "av", letters: "ꜹꜻ" },
                        { base: "ay", letters: "ꜽ" },
                        { base: "b", letters: "bⓑｂḃḅḇƀƃɓ" },
                        { base: "c", letters: "cⓒｃćĉċčçḉƈȼꜿↄ" },
                        { base: "d", letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ" },
                        { base: "dz", letters: "ǳǆ" },
                        {
                          base: "e",
                          letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ",
                        },
                        { base: "f", letters: "fⓕｆḟƒꝼ" },
                        { base: "g", letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ" },
                        { base: "h", letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ" },
                        { base: "hv", letters: "ƕ" },
                        { base: "i", letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı" },
                        { base: "j", letters: "jⓙｊĵǰɉ" },
                        { base: "k", letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ" },
                        { base: "l", letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ" },
                        { base: "lj", letters: "ǉ" },
                        { base: "m", letters: "mⓜｍḿṁṃɱɯ" },
                        { base: "n", letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ" },
                        { base: "nj", letters: "ǌ" },
                        {
                          base: "o",
                          letters:
                            "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ",
                        },
                        { base: "oi", letters: "ƣ" },
                        { base: "ou", letters: "ȣ" },
                        { base: "oo", letters: "ꝏ" },
                        { base: "p", letters: "pⓟｐṕṗƥᵽꝑꝓꝕ" },
                        { base: "q", letters: "qⓠｑɋꝗꝙ" },
                        { base: "r", letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ" },
                        { base: "s", letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ" },
                        { base: "t", letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ" },
                        { base: "tz", letters: "ꜩ" },
                        {
                          base: "u",
                          letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ",
                        },
                        { base: "v", letters: "vⓥｖṽṿʋꝟʌ" },
                        { base: "vy", letters: "ꝡ" },
                        { base: "w", letters: "wⓦｗẁẃŵẇẅẘẉⱳ" },
                        { base: "x", letters: "xⓧｘẋẍ" },
                        { base: "y", letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ" },
                        { base: "z", letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ" },
                      ],
                      t = {},
                      r = 0;
                    r < e.length;
                    r++
                  )
                    for (
                      var n = e[r].letters.split(""), a = 0;
                      a < n.length;
                      a++
                    )
                      t[n[a]] = e[r].base;
                  (String.prototype.noAccents = function (e, r) {
                    var n = this.replace(/[^\u0000-\u007E]/g, function (e) {
                      return t[e] || e;
                    });
                    return (
                      (r = r || ""),
                      e && (n = n.replace(/[^\u0000-\u007E]/g, r)),
                      n
                    );
                  }),
                    (String.prototype.handleize = function (e, t) {
                      return (
                        (e = e || "-"),
                        (t = t || ""),
                        this.noAccents(!0, t)
                          .trim()
                          .replace(/[^a-z0-9\s-]/gi, t)
                          .replace(/\s/gi, e)
                          .toLowerCase()
                      );
                    });
                },
              },
              {
                key: "toMoney",
                value: function (t) {
                  var r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  return (function (t) {
                    if (!t)
                      return (
                        console.error(
                          "Utilities.toMoney: Invalid price passed.",
                          t
                        ),
                        null
                      );
                    t = new Number(t);
                    var n = { style: "currency" };
                    return (
                      (r.cents = r.cents || !1),
                      (r.locale =
                        r.locale || (e.shop ? e.shop.locale : null) || "en-CA"),
                      (n.currency =
                        r.currency ||
                        (e.shop ? e.shop.currency : null) ||
                        "CAD"),
                      r.cents && (t /= 100),
                      r.no_zeros &&
                        !t.toString().split(".")[1] &&
                        (n.minimumSignificantDigits = 2),
                      t.toLocaleString(r.locale, n)
                    );
                  })(t);
                },
              },
              {
                key: "removeProtocol",
                value: function (e) {
                  return e
                    ? e.replace(/http(s)?:/, "")
                    : (console.error(
                        "Utilities.removeProtocol: Invalid path passed.",
                        e
                      ),
                      null);
                },
              },
              {
                key: "getSizedImageUrl",
                value: function (e, t) {
                  if (!t)
                    return (
                      console.error(
                        "Utilities.getSizedImageUrl: Invalid size passed.",
                        t
                      ),
                      e
                    );
                  if ("master" === t) return this.removeProtocol(e);
                  var r = e.match(
                    /\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i
                  );
                  if (r) {
                    var n = e.split(r[0]),
                      a = r[0];
                    return this.removeProtocol(n[0] + "_" + t + a);
                  }
                  return (
                    console.error(
                      "Utilities.getSizedImageUrl: Invalid image URL passed.",
                      e
                    ),
                    null
                  );
                },
              },
              {
                key: "toObject",
                value: function (e) {
                  var t = {};
                  return e
                    ? ((e = decodeURIComponent(e))
                        .split("&")
                        .forEach(function (e) {
                          (e = e.split("=")), (t[e[0]] = e[1] || null);
                        }),
                      t)
                    : {};
                },
              },
              {
                key: "getURLParams",
                value: function (e) {
                  var t = (e = e || window.location.href).split(
                    /\?([^\#]+)/
                  )[1];
                  return t ? this.toObject(t) : {};
                },
              },
              {
                key: "setURLParams",
                value: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    r = this.getURLParams(),
                    n = t.clear ? {} : r,
                    a = [],
                    i = "";
                  Object.keys(e).forEach(function (r) {
                    var a = e[r];
                    n[r] = (t.no_overwrite && n[r]) || a;
                  }),
                    Object.keys(n).forEach(function (e) {
                      a.push(
                        encodeURIComponent(e) + "=" + encodeURIComponent(n[e])
                      );
                    }),
                    a.length && (i = "?" + a.join("&")),
                    t.push_state
                      ? window.history.pushState({}, null, i)
                      : window.history.replaceState({}, null, i);
                },
              },
              {
                key: "getOperatingSystem",
                value: function () {
                  return navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)
                    ? "Mac"
                    : navigator.platform.match(/(Linux)/i)
                    ? "Linux"
                    : "PC";
                },
              },
              {
                key: "getBrowser",
                value: function () {
                  var e =
                    navigator.userAgent || navigator.vendor || window.opera;
                  return /windows phone/i.test(e)
                    ? "Windows Phone"
                    : /android/i.test(e)
                    ? "Android"
                    : /iPad|iPhone|iPod/.test(e) && !window.MSStream
                    ? "iOS"
                    : /Chrome/.test(e)
                    ? "Chrome"
                    : /Safari/.test(e)
                    ? "Safari"
                    : /Trident\/7\./.test(e)
                    ? "ie"
                    : "unknown";
                },
              },
              {
                key: "getCookie",
                value: function (e) {
                  for (
                    var t = e + "=",
                      r = decodeURIComponent(document.cookie).split(";"),
                      n = 0;
                    n < r.length;
                    n++
                  ) {
                    for (var a = r[n]; " " == a.charAt(0); ) a = a.substring(1);
                    if (0 == a.indexOf(t))
                      return a.substring(t.length, a.length);
                  }
                  return null;
                },
              },
              {
                key: "setCookie",
                value: function (e, t, r) {
                  var n = "";
                  if (r) {
                    var a = new Date();
                    a.setTime(a.getTime() + 24 * r * 60 * 60 * 1e3),
                      (n = "; expires=" + a.toUTCString());
                  }
                  document.cookie = e + "=" + (t || "") + n + "; path=/";
                },
              },
            ]),
            t
          );
        })();
        e.utils = new t();
      })((window.theme = window.theme || {}));
      var u = r(757),
        p = r.n(u),
        f = "shop.ledger.com";
      "ledgerstore-dev.myshopify.com" == window.location.hostname &&
        (f = "ledgerstore-dev.myshopify.com");
      for (
        var m = "ledger.referrale_code",
          h = window.location.href
            .slice(window.location.href.indexOf("?") + 1)
            .split("&"),
          _ = {},
          v = 0;
        v < h.length;
        v++
      ) {
        var g = h[v].split("=");
        _[g[0]] = g[1];
      }
      var b = _.referral_code;
      if (null != b) {
        var y = new Date(),
          w = new Date(y);
        w.setDate(w.getDate() + 1);
        var k = "expires=" + w.toUTCString();
        (document.cookie = ""
          .concat(m, "=")
          .concat(b, ";")
          .concat(k, ";path/;domain=")
          .concat(f, ";")),
          x("ledger.affiliate_uuid"),
          x("ledger.affiliate_tracker");
      }
      function x(e) {
        document.cookie = e + "=; Max-Age=0;";
      }
      var C = (function (e) {
        for (
          var t = e + "=",
            r = decodeURIComponent(document.cookie).split(";"),
            n = 0;
          n < r.length;
          n++
        ) {
          for (var a = r[n]; " " == a.charAt(0); ) a = a.substring(1);
          if (0 == a.indexOf(t)) return a.substring(t.length, a.length);
        }
        return null;
      })(m);
      function j(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function I(t) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? j(Object(n), !0).forEach(function (r) {
                e(t, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : j(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function S(e, t) {
        var r =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!r) {
          if (
            Array.isArray(e) ||
            (r = (function (e, t) {
              if (e) {
                if ("string" == typeof e) return O(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === r && e.constructor && (r = e.constructor.name),
                  "Map" === r || "Set" === r
                    ? Array.from(e)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? O(e, t)
                    : void 0
                );
              }
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            r && (e = r);
            var n = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return n >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[n++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          o = !0,
          s = !1;
        return {
          s: function () {
            r = r.call(e);
          },
          n: function () {
            var e = r.next();
            return (o = e.done), e;
          },
          e: function (e) {
            (s = !0), (i = e);
          },
          f: function () {
            try {
              o || null == r.return || r.return();
            } finally {
              if (s) throw i;
            }
          },
        };
      }
      function O(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      "index" === theme.template.name &&
        C &&
        ((document.getElementById("title").style.display = "none"),
        (document.getElementById("referral-title").style.display = "block")),
        (function (e, t) {
          window.location.hostname;
          var r = [parseInt(window.theme.stax_id)],
            n = window.translation_strings.nem_error_message,
            o = window.translation_strings.lnsx_error_message,
            c = window.translation_strings.cs_error_message,
            u = window.translation_strings.starter_error_message,
            f = window.translation_strings.billfodl_error_message,
            m = window.translation_strings.cryptozeus_error_message,
            h = window.translation_strings.sbx_nano_error_message,
            _ =
              "You cannot add more than 1 Ledger Limited Edition Merge Bundle to your cart.",
            v = document.getElementsByClassName("cart__header"),
            g =
              '<div class="warning-stock-message small-text" id="cart_warning_alert_2"><i class="fas fa-exclamation-triangle" aria-hidden="true"></i><span>'
                .concat(
                  window.translation_strings.usa_warn_1,
                  ' <br><a href=" https://shop.ledger.com/pages/buy-feature-eligibility"><u>'
                )
                .concat(
                  window.translation_strings.usa_warn_2,
                  "</u></a><span></div>"
                ),
            b = new Set([37143182639292, 36479239782472]),
            y = new Set([
              0xbac6ef78035, 0xbc470078035, 28875140530229, 0xbc46a350035,
              0xbc46a358035, 0xbc46a360035, 0xc521971002a, 0xcf128b1002a,
              0xcf128b1802a, 0xcf128b2002a, 0xcf128b2802a, 0xcf128b3002a,
            ]),
            w = new Set([
              0xbd3892b8035, 0xd14bbcc802a, 41827711680700, 41827711713468,
              41827711746236, 39493371166792, 39493371199560, 39493371232328,
            ]),
            $ = new Set([
              41826730836156, 41826730868924, 41827088433340, 41827088466108,
              41827088498876, 39493377065032, 39493377097800, 39493377130568,
              39493377163336, 39493377196104,
            ]),
            k = new Set([41874280251580, 39497774956616]),
            x = new Set([
              41874281726140, 0xcb484d98035, 39497775022152, 0xd5efe40802a,
            ]),
            C = new Set([37817148604604, 36506989887560]),
            j = new Set([39310149943484, 39255591223368]),
            O = new Set([40564674068668, 39340115787848]),
            E = new Set([41292110266556, 39403697635400]),
            T = new Set([41746419613884, 39473062314056]),
            q = new Set([42118047006908, 39556269998152]),
            L = new Set(r);
          function A(e) {
            console.error(e),
              t(document).trigger("cartUpdates"),
              t("#cart_error_message").html(e),
              t(".cart__preorder").show();
          }
          var P = (function () {
            function r(e) {
              i(this, r), (this.content = e || {}), e || this.fetch();
            }
            return (
              s(r, [
                {
                  key: "content",
                  get: function () {
                    return this._object;
                  },
                  set: function (e) {
                    (this._object = e || this._object),
                      t(document).trigger("cart_set", this.content);
                  },
                },
                {
                  key: "fetch",
                  value: function () {
                    var r = this,
                      n =
                        "en" == e.shop.locale.toLowerCase()
                          ? ""
                          : "/" + e.shop.locale.toLowerCase();
                    return t
                      .ajax({
                        url: n + "/cart.js",
                        type: "GET",
                        dataType: "json",
                      })
                      .done(function (e) {
                        (r.content = e),
                          t(document).trigger("cart_fetch", r.content);
                      })
                      .fail(function (e) {
                        console.error("Cart.fetch: Error getting the cart.", e);
                      });
                  },
                },
                {
                  key: "addMultiple",
                  value: function (r) {
                    var i = 0;
                    if (!r)
                      return console.error("Cart.add: No item was passed."), !1;
                    var s,
                      l = S(r);
                    try {
                      var p = function () {
                        var e = s.value;
                        "object" != d(e) && (e = { id: e });
                        var r = 0,
                          a = 0,
                          l = 0,
                          p = 0,
                          I = 0,
                          S = 0,
                          q = 0,
                          P = 0,
                          H = 0,
                          D = 0,
                          M = 0;
                        return (
                          (e.quantity = e.quantity || 1),
                          (_ = document.getElementById(
                            "cart_warning_alert_2"
                          )) &&
                            _.parentNode &&
                            _.parentNode.removeChild(_),
                          t.ajax({
                            type: "GET",
                            url: "/cart.js",
                            dataType: "json",
                            async: !1,
                            success: function (t) {
                              if (
                                (t.items,
                                (b.has(parseInt(e.id)) && t.items.length > 0) ||
                                  (b.has(parseInt(e.id)) && e.quantity > 1))
                              )
                                return A(n), (i += 1), !1;
                              t.items.forEach(function (e) {
                                if (b.has(parseInt(e.id)))
                                  return A(n), (i += 1), !1;
                                w.has(parseInt(e.id)) &&
                                  (I += parseInt(e.quantity)),
                                  $.has(parseInt(e.id)) &&
                                    (a += parseInt(e.quantity)),
                                  k.has(parseInt(e.id)) &&
                                    (l += parseInt(e.quantity)),
                                  x.has(parseInt(e.id)) &&
                                    (p += parseInt(e.quantity)),
                                  y.has(parseInt(e.id)) &&
                                    (r += parseInt(e.quantity)),
                                  C.has(parseInt(e.id)) &&
                                    (q += parseInt(e.quantity)),
                                  O.has(parseInt(e.id)) &&
                                    (H += parseInt(e.quantity)),
                                  j.has(parseInt(e.id)) &&
                                    (P += parseInt(e.quantity)),
                                  E.has(parseInt(e.id)) &&
                                    (D += parseInt(e.quantity)),
                                  T.has(parseInt(e.id)) &&
                                    (M += parseInt(e.quantity)),
                                  L.has(parseInt(e.id)) &&
                                    (S += parseInt(e.quantity));
                              });
                            },
                          }),
                          (L.has(parseInt(e.id)) &&
                            (t("#cart_warning_alert").show(),
                            parseInt(e.quantity) + S > 8)) ||
                          (w.has(parseInt(e.id)) &&
                            (t("#cart_warning_alert").show(),
                            parseInt(e.quantity) + I > 8)) ||
                          ($.has(parseInt(e.id)) &&
                            parseInt(e.quantity) + a > 8) ||
                          (k.has(parseInt(e.id)) &&
                            parseInt(e.quantity) + l > 5) ||
                          (x.has(parseInt(e.id)) &&
                            parseInt(e.quantity) + p > 8) ||
                          (y.has(parseInt(e.id)) &&
                            parseInt(e.quantity) + r > 8)
                            ? (A(o), (i += 1), { v: !1 })
                            : C.has(parseInt(e.id)) &&
                              parseInt(e.quantity) + q > 2
                            ? (A(c), (i += 1), { v: !1 })
                            : O.has(parseInt(e.id)) &&
                              parseInt(e.quantity) + H > 2
                            ? (A(f), (i += 1), { v: !1 })
                            : E.has(parseInt(e.id)) &&
                              parseInt(e.quantity) + D > 2
                            ? (A(m), (i += 1), { v: !1 })
                            : T.has(parseInt(e.id)) &&
                              parseInt(e.quantity) + M > 1
                            ? (A(h), (i += 1), { v: !1 })
                            : j.has(parseInt(e.id)) &&
                              ("USA" === Flow.getCountry() &&
                                v[0].insertAdjacentHTML("afterend", g),
                              parseInt(e.quantity) + P > 1)
                            ? (A(u), (i += 1), { v: !1 })
                            : void 0
                        );
                      };
                      for (l.s(); !(s = l.n()).done; ) {
                        var _,
                          I = p();
                        if ("object" === d(I)) return I.v;
                      }
                    } catch (e) {
                      l.e(e);
                    } finally {
                      l.f();
                    }
                    var q,
                      P = { items: [] },
                      H = S(r);
                    try {
                      for (H.s(); !(q = H.n()).done; ) {
                        var D = q.value;
                        if (
                          ("object" != d(D) && (D = { id: D }),
                          e.black_friday &&
                            ($.has(parseInt(D.id)) || w.has(parseInt(D.id))))
                        ) {
                          var M,
                            N = e.cart.addGiftCardToCard(
                              D,
                              parseInt(D.id),
                              cartItems
                            );
                          (M = P.items).push.apply(M, a(N.items));
                        } else P.items.push(D);
                      }
                    } catch (e) {
                      H.e(e);
                    } finally {
                      H.f();
                    }
                    return 0 == i
                      ? t
                          .ajax({
                            url: "/cart/add.js",
                            data: P,
                            type: "POST",
                            dataType: "json",
                          })
                          .then(
                            function (e) {
                              t(document).trigger("cartUpdates"),
                                dataLayer.push({
                                  event: "EEaddToCart",
                                  ecommerce: {
                                    currencyCode: Flow.session.getCurrency(),
                                    add: {
                                      products: [
                                        {
                                          id: e.id.toString(),
                                          name: e.product_title,
                                          price: formatGTMPrice(e.price),
                                          quantity: e.quantity,
                                          category: getProductCategory(
                                            e.product_title
                                          ),
                                          variant: e.variant_title,
                                        },
                                      ],
                                    },
                                  },
                                });
                            },
                            function (e) {
                              console.error(
                                "Cart.add: Error adding to the cart.",
                                e
                              );
                            }
                          )
                      : void 0;
                  },
                },
                {
                  key: "add",
                  value: function (r, a) {
                    var i =
                      !(arguments.length > 2 && void 0 !== arguments[2]) ||
                      arguments[2];
                    if (!r)
                      return console.error("Cart.add: No item was passed."), !1;
                    "object" != d(r) && (r = { id: r });
                    var s = parseInt(r.id),
                      l = 0,
                      p = 0,
                      I = 0,
                      S = 0,
                      P = 0,
                      H = 0,
                      D = 0,
                      M = 0,
                      N = 0,
                      F = 0,
                      z = 0,
                      U = 0;
                    r.quantity = r.quantity || 1;
                    var B = !0,
                      R = document.getElementById("cart_warning_alert_2");
                    R && R.parentNode && R.parentNode.removeChild(R);
                    var G = [];
                    if (
                      (t.ajax({
                        type: "GET",
                        url: "/cart.js",
                        dataType: "json",
                        async: !1,
                        success: function (e) {
                          if (
                            ((G = e.items),
                            (b.has(s) && e.items.length > 0) ||
                              (b.has(s) && r.quantity > 1))
                          )
                            return A(n), (B = !1), !1;
                          e.items.forEach(function (e) {
                            if (b.has(parseInt(e.id)))
                              return A(n), (B = !1), !1;
                            w.has(parseInt(e.id)) &&
                              (P += parseInt(e.quantity)),
                              $.has(parseInt(e.id)) &&
                                (p += parseInt(e.quantity)),
                              k.has(parseInt(e.id)) &&
                                (I += parseInt(e.quantity)),
                              x.has(parseInt(e.id)) &&
                                (S += parseInt(e.quantity)),
                              y.has(parseInt(e.id)) &&
                                (l += parseInt(e.quantity)),
                              C.has(parseInt(e.id)) &&
                                (H += parseInt(e.quantity)),
                              O.has(parseInt(e.id)) &&
                                (M += parseInt(e.quantity)),
                              j.has(parseInt(e.id)) &&
                                (D += parseInt(e.quantity)),
                              E.has(parseInt(e.id)) &&
                                (N += parseInt(e.quantity)),
                              T.has(parseInt(e.id)) &&
                                (F += parseInt(e.quantity)),
                              q.has(parseInt(e.id)) &&
                                (z += parseInt(e.quantity)),
                              L.has(parseInt(e.id)) &&
                                (U += parseInt(e.quantity));
                          });
                        },
                      }),
                      L.has(parseInt(r.id)) &&
                        (t("#cart_warning_alert").show(),
                        parseInt(r.quantity) + U > 8))
                    )
                      return A(o), (B = !1), !1;
                    if (
                      w.has(s) &&
                      (t("#cart_warning_alert").show(),
                      parseInt(r.quantity) + P > 8)
                    )
                      return A(o), (B = !1), !1;
                    if ($.has(s) && parseInt(r.quantity) + p > 8)
                      return A(o), (B = !1), !1;
                    if (k.has(s) && parseInt(r.quantity) + I > 5)
                      return A(o), (B = !1), !1;
                    if (x.has(s) && parseInt(r.quantity) + S > 8)
                      return A(o), (B = !1), !1;
                    if (y.has(s) && parseInt(r.quantity) + l > 8)
                      return A(o), (B = !1), !1;
                    if (C.has(s) && parseInt(r.quantity) + H > 2)
                      return A(c), (B = !1), !1;
                    if (O.has(s) && parseInt(r.quantity) + M > 2)
                      return A(f), (B = !1), !1;
                    if (E.has(s) && parseInt(r.quantity) + N > 2)
                      return A(m), (B = !1), !1;
                    if (T.has(s) && parseInt(r.quantity) + F > 1)
                      return A(h), (B = !1), !1;
                    if (q.has(s) && parseInt(r.quantity) + z > 1)
                      return A(_), (B = !1), !1;
                    if (j.has(s)) {
                      var W = Flow.getCountry();
                      if (
                        ("USA" === W && v[0].insertAdjacentHTML("afterend", g),
                        parseInt(r.quantity) + D > 1)
                      )
                        return A(u), (B = !1), !1;
                    }
                    return (
                      e.black_friday &&
                        ($.has(s) || w.has(s)) &&
                        (r = e.cart.addGiftCardToCard(r, s, G)),
                      B
                        ? t
                            .ajax({
                              url: "/cart/add.js",
                              data: r,
                              type: "POST",
                              dataType: "json",
                            })
                            .then(
                              function (e) {
                                var r;
                                Array.isArray(
                                  null === (r = e) || void 0 === r
                                    ? void 0
                                    : r.items
                                ) || (e = { items: [e] }),
                                  dataLayer.push({
                                    event: "EEaddToCart",
                                    ecommerce: {
                                      currencyCode: Flow.session.getCurrency(),
                                      add: {
                                        products: e.items.map(function (e) {
                                          return {
                                            id: e.id.toString(),
                                            name: e.product_title,
                                            price: formatGTMPrice(e.price),
                                            quantity: e.quantity,
                                            category: getProductCategory(
                                              e.product_title
                                            ),
                                            variant: e.variant_title,
                                          };
                                        }),
                                      },
                                    },
                                  }),
                                  1 != a && t(".cart__preorder").hide(),
                                  i && t(document).trigger("cartUpdates");
                              },
                              function (e) {
                                console.error(
                                  "Cart.add: Error adding to the cart.",
                                  e
                                );
                              }
                            )
                        : void 0
                    );
                  },
                },
                {
                  key: "addGiftCardToCard",
                  value: function (t, r, n) {
                    var a = $.has(r)
                        ? e.black_friday.nano_s_plus_gift_card
                        : e.black_friday.nano_x_gift_card,
                      i = 0,
                      o = 0;
                    return (
                      n.forEach(function (t) {
                        var r = parseInt(t.id);
                        r === e.black_friday.nano_x_gift_card &&
                          (i += t.quantity),
                          r === e.black_friday.nano_s_plus_gift_card &&
                            (o += t.quantity);
                      }),
                      i >= 5 || o >= 5
                        ? t
                        : a
                        ? (t = {
                            items: [
                              I(
                                I({}, t),
                                {},
                                {
                                  properties: {
                                    hasGiftCode: !0,
                                    giftCodeId: a,
                                  },
                                }
                              ),
                              {
                                id: a,
                                quantity: t.quantity,
                                properties: {
                                  isGiftCode: !0,
                                  linkedProduct: r,
                                },
                              },
                            ],
                          })
                        : t
                    );
                  },
                },
                {
                  key: "checketIsWarrantyAssociated",
                  value: function (e, t) {
                    var r,
                      n = t.items.find(function (t) {
                        return t.id == e;
                      }),
                      a =
                        null == n || null === (r = n.properties) || void 0 === r
                          ? void 0
                          : r.warranty;
                    if (a && "false" !== a)
                      return { id: a, quantity: n.quantity };
                  },
                },
                {
                  key: "checketIsGiftCardAssociated",
                  value: function (e, t) {
                    var r,
                      n = t.items.find(function (t) {
                        return t.id == e;
                      }),
                      a =
                        null == n || null === (r = n.properties) || void 0 === r
                          ? void 0
                          : r.giftCodeId;
                    if (a && "false" !== a)
                      return { id: a, quantity: n.quantity };
                  },
                },
                {
                  key: "update",
                  value: function (r) {
                    if (!r)
                      return (
                        console.error("Cart.update: No item was passed."), !1
                      );
                    1 === r.length && (r = r[0]);
                    var a = {},
                      i = function (e) {
                        if ("object" === d(e)) {
                          if (!e.id)
                            return (
                              console.error(
                                "Cart.update: No id was passed with the product object."
                              ),
                              !1
                            );
                          a[e.id] =
                            e.quantity || 0 === e.quantity ? e.quantity : 1;
                        } else a[e] = 1;
                      };
                    if (
                      (Array.isArray(r)
                        ? r.forEach(function (e) {
                            i(e);
                          })
                        : i(r),
                      0 === Object.keys(a).length)
                    )
                      return !1;
                    var s = !0,
                      l = 0,
                      p = 0,
                      v = 0,
                      g = 0;
                    if (b.has(parseInt(r.id))) return A(n), (s = !1), !1;
                    if (j.has(parseInt(r.id))) return A(u), (s = !1), !1;
                    if (
                      (($.has(parseInt(r.id)) || w.has(parseInt(r.id))) &&
                        t.ajax({
                          type: "GET",
                          url: "/cart.js",
                          dataType: "json",
                          async: !1,
                          success: function (t) {
                            var n = e.cart.checketIsWarrantyAssociated(r.id, t);
                            n && (a[n.id] = r.quantity);
                            var i = e.cart.checketIsGiftCardAssociated(r.id, t);
                            if (
                              (t.items.forEach(function (e) {
                                $.has(parseInt(e.id)) &&
                                  e.id != r.id &&
                                  (v += parseInt(e.quantity)),
                                  w.has(parseInt(e.id)) &&
                                    e.id != r.id &&
                                    (p += parseInt(e.quantity)),
                                  L.has(parseInt(e.id)) &&
                                    e.id != r.id &&
                                    (g += parseInt(e.quantity));
                              }),
                              i)
                            ) {
                              if (r.quantity > 5)
                                return (r.quantity = 5), (s = !1), !1;
                              a[i.id] = r.quantity;
                            }
                          },
                        }),
                      L.has(parseInt(r.id)) && parseInt(r.quantity) + g > 8)
                    )
                      return (
                        A(o),
                        t("#cart_warning_alert").show(),
                        (productError += 1),
                        !1
                      );
                    if (w.has(parseInt(r.id))) {
                      if (
                        (t("#cart_warning_alert").show(),
                        parseInt(r.quantity) + p > 8)
                      )
                        return A(o), (s = !1), !1;
                    } else t(" #cart_warning_alert").hide();
                    return C.has(parseInt(r.id)) && parseInt(r.quantity) > 2
                      ? (A(c), (s = !1), !1)
                      : O.has(parseInt(r.id)) && parseInt(r.quantity) > 2
                      ? (A(f), (s = !1), !1)
                      : E.has(parseInt(r.id)) && parseInt(r.quantity) > 2
                      ? (A(m), (s = !1), !1)
                      : T.has(parseInt(r.id)) && parseInt(r.quantity) + 0 > 1
                      ? (A(h), (s = !1), !1)
                      : q.has(parseInt(r.id)) && parseInt(r.quantity) + 0 > 1
                      ? (A(_), (s = !1), !1)
                      : ($.has(parseInt(r.id)) &&
                          parseInt(r.quantity) + v > 8) ||
                        (k.has(parseInt(r.id)) && parseInt(r.quantity) > 5) ||
                        (x.has(parseInt(r.id)) && parseInt(r.quantity) > 8)
                      ? (A(o), (s = !1), !1)
                      : (y.has(parseInt(r.id)) &&
                          t.ajax({
                            type: "GET",
                            url: "/cart.js",
                            dataType: "json",
                            async: !1,
                            success: function (e) {
                              e.items.forEach(function (e) {
                                y.has(parseInt(e.id)) &&
                                  e.id != r.id &&
                                  (l += parseInt(e.quantity));
                              });
                            },
                          }),
                        y.has(parseInt(r.id)) && parseInt(r.quantity) + l > 8
                          ? (A(o), (s = !1), !1)
                          : s
                          ? t
                              .ajax({
                                url: "/cart/update.js",
                                data: { updates: a },
                                type: "POST",
                                dataType: "json",
                              })
                              .then(
                                function () {
                                  t(".cart__preorder").hide(),
                                    t(document).trigger("cartUpdates");
                                },
                                function (e) {
                                  console.error(
                                    "Cart.update: Error updating a cart item.",
                                    e
                                  );
                                }
                              )
                          : void 0);
                  },
                },
                {
                  key: "updateAttributes",
                  value: function (e) {
                    return t
                      .ajax({
                        url: "/cart/update.js",
                        data: e,
                        type: "POST",
                        dataType: "json",
                      })
                      .done(function () {})
                      .fail(function (e) {
                        console.error(
                          "Cart.update: Error updating a cart item.",
                          e
                        );
                      });
                  },
                },
                {
                  key: "change",
                  value: function (e) {
                    var r = this;
                    return e
                      ? ("object" != d(e) && (e = { id: e }),
                        (e.quantity = e.quantity || 1),
                        t
                          .ajax({
                            url: "/cart/change.js",
                            data: e,
                            type: "POST",
                            dataType: "json",
                          })
                          .done(function (n) {
                            (r.content = n),
                              t(document).trigger("cart_change", [n, e]);
                          })
                          .fail(function (e) {
                            console.error(
                              "Cart.change: Error changing a cart quantity.",
                              e
                            );
                          }))
                      : (console.error("Cart.change: No item was passed."), !1);
                  },
                },
                {
                  key: "remove",
                  value: function (e) {
                    if (!e)
                      return (
                        console.error("Cart.remove: No item was passed."), !1
                      );
                    var t = [];
                    return (
                      Array.isArray(e)
                        ? e.forEach(function (e) {
                            t.push({
                              id: "object" === d(e) ? e.id : e,
                              quantity: 0,
                            });
                          })
                        : t.push({
                            id: "object" === d(e) ? e.id : e,
                            quantity: 0,
                          }),
                      this.update(t)
                    );
                  },
                },
                {
                  key: "deteleWarranty",
                  value: function (r, n) {
                    t.ajax({
                      url: "/cart.js",
                      type: "GET",
                      dataType: "json",
                    }).done(
                      (function () {
                        var t = l(
                          p().mark(function t(a) {
                            var i, o;
                            return p().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (i = {
                                        line:
                                          a.items.findIndex(function (e) {
                                            return e.id === n;
                                          }) + 1,
                                        properties: { warranty: !1 },
                                        quantity: a.items.find(function (e) {
                                          return e.id === n;
                                        }).quantity,
                                      }),
                                      (o = { id: r }),
                                      (t.next = 4),
                                      e.cart.change(i)
                                    );
                                  case 4:
                                    return (t.next = 6), e.cart.remove(o);
                                  case 6:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })()
                    );
                  },
                },
                {
                  key: "addWarranty",
                  value: function (r, n, a) {
                    t.ajax({
                      url: "/cart.js",
                      type: "GET",
                      dataType: "json",
                    }).done(function (t) {
                      var i = {
                          line:
                            t.items.findIndex(function (e) {
                              return e.id === n;
                            }) + 1,
                          quantity: a,
                          properties: { warranty: r },
                        },
                        o = {
                          id: r,
                          quantity: a,
                          properties: { isWarranty: !0, linkedProduct: n },
                        };
                      e.cart.change(i), e.cart.add(o);
                    });
                  },
                },
                {
                  key: "clear",
                  value: function () {
                    var e = this;
                    return t
                      .ajax({
                        url: "/cart/clear.js",
                        type: "POST",
                        dataType: "json",
                      })
                      .done(function (r) {
                        (e.content = r), t(document).trigger("cart_clear", r);
                      })
                      .fail(function (e) {
                        console.error(
                          "Cart.clear: Error clearing the cart.",
                          e
                        );
                      });
                  },
                },
              ]),
              r
            );
          })();
          e.cart = new P(e.cart_json || null);
        })((window.theme = window.theme || {}), jQuery);
      var E = "https://www.ledgerwallet.com",
        T = R("ledger.affiliate_uuid"),
        q = R("ledger.affiliate_tracker"),
        L = ".ledger.com";
      "ledgerstore-dev.myshopify.com" == window.location.hostname &&
        ((L = ".ledgerstore-dev.myshopify.com"),
        (E = "https://internal-systems-bo-new.staging.aws.ledger.fr"));
      for (
        var A = window.location.href
            .slice(window.location.href.indexOf("?") + 1)
            .split("&"),
          P = {},
          H = 0;
        H < A.length;
        H++
      ) {
        var D = A[H].split("=");
        P[D[0]] = D[1];
      }
      var M = P.r,
        N = P.tracker;
      if (null != M && (null == T || T != M || q != N)) {
        (T = M), (q = N);
        var F = document.referrer,
          z = new Date(),
          U = new Date(z);
        U.setMonth(U.getMonth() + 1);
        var B = ";expires=" + U.toUTCString();
        (document.cookie =
          "ledger.affiliate_uuid=" + T + B + ";path=/;domain=" + L + ";"),
          (document.cookie =
            "ledger.affiliate_tracker=" + q + B + ";path=/;domain=" + L + ";"),
          (document.cookie =
            "ledger.referrer=" + F + B + ";path=/;domain=" + L + ";"),
          "0ba5d7199327" !== T &&
            (function (e, t) {
              console.log(
                "Affiliate Hit - affiliate_uuid: " + e + " - referrer: " + t
              ),
                $.ajax({
                  type: "POST",
                  url: E + "/api/v1.0/affiliate/hit",
                  data: { affiliate_uuid: e, referrer: t },
                  success: function () {
                    console.log("Affiliates Hit : Success");
                  },
                  fail: function () {
                    console.log("Affiliates Hit : Fail");
                  },
                });
            })(T, F);
      }
      function R(e) {
        for (
          var t = e + "=",
            r = decodeURIComponent(document.cookie).split(";"),
            n = 0;
          n < r.length;
          n++
        ) {
          for (var a = r[n]; " " == a.charAt(0); ) a = a.substring(1);
          if (0 == a.indexOf(t)) return a.substring(t.length, a.length);
        }
        return null;
      }
      function G(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                i = [],
                o = !0,
                s = !1;
              try {
                for (
                  r = r.call(e);
                  !(o = (n = r.next()).done) &&
                  (i.push(n.value), !t || i.length !== t);
                  o = !0
                );
              } catch (e) {
                (s = !0), (a = e);
              } finally {
                try {
                  o || null == r.return || r.return();
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          n(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      !(function (e, t) {
        var r = (function () {
          function r(e) {
            i(this, r), (this._list = e || {});
          }
          return (
            s(r, [
              {
                key: "list",
                get: function () {
                  return this._list;
                },
                set: function (e) {
                  return !1;
                },
              },
              {
                key: "update",
                value: function (r) {
                  var n = this;
                  if (!r || "object" !== d(r)) return !1;
                  r.handle
                    ? (r = [r])
                    : Array.isArray(r) ||
                      (r = Object.keys(r)
                        .map(function (e) {
                          return r[e];
                        })
                        .filter(function (e) {
                          return e.handle;
                        })),
                    r.forEach(function (r) {
                      if (r.handle)
                        if (n._list[r.handle]) {
                          var a = e.utils.modifyObject(n._list[r.handle], r);
                          (n._list[r.handle] = a),
                            t(document).trigger("products_update", a);
                        } else
                          (n._list[r.handle] = r),
                            t(document).trigger("products_add", r);
                    });
                },
              },
            ]),
            r
          );
        })();
        e.products = new r(
          e.products && e.products.list ? e.products.list : {}
        );
      })((window.theme = window.theme || {}), jQuery);
      var W,
        J,
        Q,
        V,
        Y,
        Z,
        X = void 0,
        K = function (e) {
          dataLayer.push({
            event: "EEaddToCart",
            ecommerce: {
              currencyCode: Flow.session.getCurrency(),
              add: {
                products: [
                  {
                    id: $(X).find(".cart__recommended-id").val(),
                    name: $(X).find(".cart__recommended-sku").val(),
                    quantity: e.quantity,
                  },
                ],
              },
            },
          });
        },
        ee = function () {
          var e = G(getPageType(), 2),
            t = e[0],
            r = e[1];
          dataLayer.push({
            event: "view_side_cart",
            site_language: theme.shop.locale,
            user_country: theme.shop.address.country,
            page_type: t,
            page_path: r,
          });
        },
        te = function (e) {
          var t = e.flow.order,
            r = e.shopify.cart.items;
          dataLayer.push({
            event: "view_cart",
            ecommerce: {
              currencyCode: t.total.currency,
              items: r.map(function (e, r) {
                var n;
                return (
                  t.items[r].local,
                  {
                    item_name: e.product_title,
                    item_id: e.product_id,
                    discount: e.discounts.map(function (e) {
                      return e.amount;
                    }),
                    index: r,
                    item_brand: "Ledger",
                    item_category: getProductCategory(e.product_title),
                    item_list_id: e.id,
                    item_list_name: e.title,
                    item_variant:
                      null === (n = t.items[r].local.attributes) || void 0 === n
                        ? void 0
                        : n.variant_title,
                    price: ne(t.items[r].local.prices),
                    quantity: e.quantity,
                  }
                );
              }),
            },
          });
        },
        re = function (e, t) {
          var r, n, a, i, o;
          dataLayer.push({
            event: "removeFromCart",
            ecommerce: {
              currencyCode: theme.cart_json.currency,
              remove: {
                products: [
                  {
                    name: t.product_title,
                    id: t.id,
                    price: formatGTMPrice(t.price),
                    category: getProductCategory(t.product_title),
                    variant:
                      null === (r = theme) ||
                      void 0 === r ||
                      null === (n = r.cart) ||
                      void 0 === n ||
                      null === (a = n._object) ||
                      void 0 === a ||
                      null === (i = a.items) ||
                      void 0 === i ||
                      null ===
                        (o = i.find(function (e) {
                          return e.variant_id === parseInt(t.id);
                        })) ||
                      void 0 === o
                        ? void 0
                        : o.variant_title,
                    quantity: e,
                  },
                ],
              },
            },
          });
        },
        ne = function (e) {
          if (e.length > 0) {
            var t = e[0] ? e[0].base.amount : 0,
              r = e[1] ? e[1].base.amount : 0;
            return "".concat(t + r);
          }
          return "";
        };
      function ae(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ie(t) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? ae(Object(n), !0).forEach(function (r) {
                e(t, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : ae(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      if (
        (r(741),
        r(131),
        r(81),
        $(function () {
          var e = {
              email: "email",
              firstName: "firstName",
              lastName: "lastName",
              addressLine1: "addressLine1",
              locality: "locality",
              country: "country",
              administrativeArea: "administrativeArea",
              postalCode: "postalCode",
              phoneNumber: "phoneNumber",
            },
            t = window.theme.covid_19.countries.split(","),
            r = document.createElement("div");
          r.innerHTML = window.theme.covid_19.msg;
          var n = document.createElement("div");
          n.innerHTML = window.theme.checkout_messages.ongoing_situation;
          var a = document.createElement("div");
          function i(e, t) {
            jQuery(e).length
              ? t()
              : setTimeout(function () {
                  i(e, t);
                }, 100);
          }
          a.innerHTML = window.theme.checkout_messages.taxes_duties;
          var o = function () {
              $(".checkout-layout__checkout-content-order-summary");
              var e = $(".order-item"),
                t = $(".mobile-order-summary"),
                r = t.find(".order-prices"),
                n = t.find(".order-total"),
                a = t.find(".mobile-order-summary__header"),
                i = t.find(".mobile-order-summary__header-action .button");
              $.each(e, function (e, t) {
                var r = $(t).find(".badge").text();
                $(t)
                  .find(".order-item__details > .order-item__quantity")
                  .remove(),
                  $(t)
                    .find(".order-item__details")
                    .append(
                      '<div class="order-item__quantity">x' + r + "</div>"
                    );
              }),
                r.appendTo(t.find(".collapse")),
                n.appendTo(t.find(".collapse")),
                a.children("span").first().text("Review your cart");
              var o = flow.checkout.getOrder().order.total.label;
              i.text(o),
                t.addClass("mobile-order-summary--active"),
                flow.checkout.onOrderUpserted(function (e) {
                  i.text(e.balance.label);
                });
            },
            s = function () {
              if (
                flow.checkout.getOrder().order.attributes.partner_id &&
                window.partnerObject
              ) {
                var e = flow.checkout.getOrder().order.attributes.partner_id,
                  t = $("#partner-logo").data("partnerName"),
                  r = partnerObject.marketing_copy,
                  n = partnerObject.terms_copy,
                  a = partnerObject.partner_url,
                  i = $("#partner-logo").data("partnerFavicon");
                $("body")
                  .addClass("branded-checkout")
                  .addClass("branded-checkout--" + e),
                  $(".order-confirmation-step__continue-shopping span")
                    .text("Back to " + t)
                    .parent()
                    .attr("href", a),
                  i &&
                    ((o = i),
                    $(".dynamic-favicon").each(function () {
                      $(this).attr("href", o);
                    })),
                  setTimeout(function () {
                    r &&
                      ($("#accepts_marketing")
                        .parent()
                        .find(".flowio-localized-content-element__markdown")
                        .html(r),
                      $("#newsletter-msg").html(r)),
                      n &&
                        $("#flow-policies")
                          .parent()
                          .find(".flowio-localized-content-element__markdown")
                          .html(n);
                  }, 500);
              }
              var o;
            },
            c = function () {
              var a = $(".checkout-layout__checkout-content-container"),
                i = a
                  .find(".customer-information-form__flat-cart-button")
                  .parent(),
                o = a.find(".customer-information-form__continue-button");
              function s() {
                var e = $('select[name="country"]').val();
                "RUS" === e
                  ? ($("div#deliver_error").empty(),
                    $("form.customer-information-form > .flow-grid").before(
                      '<div id="deliver_error"><div class="order__customs-message">'.concat(
                        n.innerText,
                        "</div></div>"
                      )
                    ))
                  : t.includes(e)
                  ? ($("div#deliver_error").empty(),
                    $("form.customer-information-form > .flow-grid").before(
                      '<div id="deliver_error"><div class="order__customs-message">'.concat(
                        r.innerText,
                        "</div></div>"
                      )
                    ))
                  : $("div#deliver_error").empty();
              }
              $(".logged-in-customer-info").closest(".section").hide(),
                $.each(e, function (e, t) {
                  $(
                    'label[for="' + $('[name="' + t + '"]').attr("id") + '"]'
                  ).addClass("text-field__label--required");
                }),
                i.length > 0 &&
                  (i.children().remove(),
                  i.append(
                    '<a href="/cart" class="cart-button"><span>Back to cart</span></a>'
                  )),
                o.length > 0 &&
                  o.find("span").text("Continue to shipping method"),
                $(".mobile_progress_bar__step").removeClass("active checked"),
                $("#mobile_progress_bar-step-1").addClass("active"),
                $(document).ready(s),
                $('select[name="country"]').on("change", s);
            },
            d = function () {
              var e = $(".checkout-layout__breadcrumb-container").find(
                  ".breadcrumb"
                ),
                t = e.find(".step.breadcrumb__item").first();
              e
                .find(".step--completed.breadcrumb__item")
                .last()
                .addClass("step--current"),
                t.find(".step__title").remove(),
                document.querySelector(
                  ".customer-information-form__desktop-cart-button"
                );
              var r = document.getElementsByClassName(
                  "section__header--divided"
                )[0].firstChild.innerHTML,
                n = flow.checkout.getOrder().order.geo.language,
                a = "/cart";
              "zh" == n ? (a = "/zh-cn" + a) : "en" != n && (a = "/" + n + a),
                t.append(
                  '<a href="'
                    .concat(a, "\" class='step__title'>")
                    .concat(r, "</a>")
                ),
                e.addClass("breadcrumb--active");
            };
          function u(e) {
            var t = [];
            $.each(flow.checkout.getOrder().order.items, function (e, r) {
              var n,
                a,
                i,
                o,
                s = {
                  id: r.number,
                  name:
                    null === (n = theme.cart) ||
                    void 0 === n ||
                    null === (a = n._object) ||
                    void 0 === a ||
                    null === (i = a.items) ||
                    void 0 === i ||
                    null ===
                      (o = i.find(function (e) {
                        return e.id.toString() === r.number;
                      })) ||
                    void 0 === o
                      ? void 0
                      : o.product_title,
                  price: ne(r.local.prices),
                  category: getProductCategory(
                    r.local.attributes.product_title
                  ),
                  variant: m(r.local.attributes.variant_title),
                  quantity: r.quantity,
                };
              t.push(s);
            }),
              gtmCleaner(),
              dataLayer.push({
                event: "EEcheckout",
                mail_marketing:
                  flow.checkout.getOrder().order.attributes.accepts_marketing,
                ecommerce: {
                  currencyCode: Flow.session.getCurrency(),
                  checkout: { actionField: { step: e }, products: t },
                },
              });
          }
          function f(e) {
            var t, r;
            gtmCleaner();
            var n = flow.checkout.getOrder().order.selections[0],
              a = flow.checkout.getOrder().order,
              i = void 0;
            a.deliveries[0].options.forEach(function (e) {
              e.id == n && (i = e.service.id);
            }),
              (null == a ||
              null === (t = a.payments[0]) ||
              void 0 === t ||
              null === (r = t.method) ||
              void 0 === r
                ? void 0
                : r.length) > 0 && (i = a.payments[0].method),
              dataLayer.push({
                event: "checkoutOption",
                mail_marketing:
                  flow.checkout.getOrder().order.attributes.accepts_marketing,
                ecommerce: {
                  currencyCode: flow.checkout.getOrder().order.balance.currency,
                  checkout_option: { actionField: { step: e, option: i } },
                },
              });
          }
          function m(e) {
            return "Default Title" == e ? void 0 : e;
          }
          function h() {
            for (
              var e, t = document.querySelectorAll("input ,select"), r = 0;
              (e = t[r++]);

            )
              e.setAttribute("data-cs-mask", "");
          }
          var _ = function () {
              var e,
                t = document.querySelector(
                  'input[autocomplete="shipping email"]'
                ),
                r = document.getElementById("accepts_marketing").checked,
                n =
                  ((e = [
                    {
                      marketing_false: "822b8b93-fdbd-46fc-afb2-a583455149cf",
                      marketing_true: "cbe4680d-cda4-488a-92ee-2c047f193f7c",
                      env: "dev",
                    },
                    {
                      marketing_false: "ab6e72e3-b92e-4ab0-bf1c-b78f613e7420",
                      marketing_true: "9c8fd07a-ab43-4b9b-b95b-943c0a82dbaf",
                      env: "prod",
                    },
                  ]),
                  "dev" ==
                  ("ledgerstore-dev.myshopify.com" === window.location.hostname
                    ? "dev"
                    : "prod")
                    ? e[0]
                    : e[1]);
              if (t) {
                var a = t.value;
                if (a)
                  if (r)
                    try {
                      fetch(
                        "https://links.iterable.com/lists/publicAddSubscriberForm?publicIdString=".concat(
                          n.marketing_true
                        ),
                        {
                          method: "POST",
                          redirect: "manual",
                          body: new URLSearchParams({ email: a }),
                        }
                      ).then(function (e) {
                        window.abandonCart = !1;
                      });
                    } catch (e) {
                      console.log("subscribe error : ", e);
                    }
                  else
                    try {
                      fetch(
                        "https://links.iterable.com/lists/publicAddSubscriberForm?publicIdString=".concat(
                          n.marketing_false
                        ),
                        {
                          method: "POST",
                          redirect: "manual",
                          body: new URLSearchParams({ email: a }),
                        }
                      ).then(function (e) {
                        window.abandonCart = !1;
                      });
                    } catch (e) {
                      console.log("subscribe error : ", e);
                    }
                else console.log("User did not enter an email ");
              } else console.log("No valid email node : abd cart");
            },
            v = function () {
              window.abandonCart = window.abandonCart || "stage1";
              var e = document.querySelector(
                ".customer-information-form__continue-button"
              );
              if (e)
                try {
                  e.removeEventListener("click", _);
                } catch (e) {}
              "stage1" === window.abandonCart && e.addEventListener("click", _);
            },
            g = function () {
              var e = localStorage.getItem("nft10off");
              return new Promise(function (t, r) {
                e
                  ? flow.checkout.getOrder().addPromotion(e, {
                      onSuccess: function (e) {
                        localStorage.removeItem("nft10off"), t();
                      },
                      onError: function (e) {
                        t();
                      },
                    })
                  : t();
              });
            };
          Flow.set(
            "on",
            "pageview.checkout_step_1",
            l(
              p().mark(function e() {
                return p().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), g();
                      case 2:
                        h(),
                          d(),
                          (r = void 0),
                          void 0,
                          void 0,
                          (l = void 0),
                          (n = (r = document.querySelector(
                            ".customer-information-form__desktop-cart-button"
                          )).innerHTML),
                          (l = "/cart"),
                          "zh" ==
                          (a = flow.checkout.getOrder().order.geo.language)
                            ? (l = "/zh-cn" + l)
                            : "en" != a && (l = "/" + a + l),
                          (r.parentElement.innerHTML =
                            '\n      <a class="button button button--flat-default customer-information-form__desktop-cart-button" href="'
                              .concat(l, '">\n        ')
                              .concat(
                                n,
                                '\n      </a>\n      <a class="button button button--flat-default customer-information-form__mobile-cart-button" href="'
                              )
                              .concat(l, '">\n        ')
                              .concat(n, "\n      </a>")),
                          c(),
                          o(),
                          s(),
                          void 0,
                          (t = theme.utils.getCookie("_f60_session")
                            ? theme.utils.getCookie("_f60_session")
                            : "").length > 0 &&
                            flow.checkout
                              .getOrder()
                              .setAttribute("user_session", t, {
                                onSuccess: function (e) {},
                                onError: function (e) {
                                  console.log(
                                    "Failed to add attribute to order",
                                    e
                                  );
                                },
                              }),
                          u(1),
                          i('input[name="addressLine1"]', function () {
                            $('input[name="addressLine1"]').attr(
                              "maxlength",
                              35
                            ),
                              $('input[name="addressLine1"]').on(
                                "input",
                                function () {
                                  $(this).val().length >= 35 &&
                                    alert(
                                      "Max length of address line 1 reached, please use address line 2."
                                    );
                                }
                              );
                          }),
                          i('input[name="addressLine2"]', function () {
                            $('input[name="addressLine2"]').attr(
                              "maxlength",
                              35
                            ),
                              $('input[name="addressLine2"]').on(
                                "input",
                                function () {
                                  $(this).val().length >= 35 &&
                                    alert(
                                      "The address line 2 can not be longer than 35 characters."
                                    );
                                }
                              );
                          }),
                          i('input[name="organizationName"]', function () {
                            $('input[name="organizationName"]').attr(
                              "maxlength",
                              35
                            ),
                              $('input[name="organizationName"]').on(
                                "input",
                                function () {
                                  $(this).val().length >= 35 &&
                                    alert(
                                      "The company name can not be longer than 35 characters."
                                    );
                                }
                              );
                          }),
                          ga(
                            "send",
                            "event",
                            "Checkout",
                            "Checkout Initiated",
                            flow.checkout.getOrder().order.number
                          ),
                          v();
                      case 13:
                      case "end":
                        return e.stop();
                    }
                  var t, r, n, a, l;
                }, e);
              })
            )
          ),
            Flow.set("on", "pageview.checkout_step_2", function () {
              var e, t, r, n, i, c, l;
              h(),
                d(),
                (l = $(".shipping-method-form .order-delivery-options")),
                flow.checkout.getOrder().order.lines.find(function (e) {
                  var t;
                  return (
                    e.item_number ==
                    (null === (t = window.theme) || void 0 === t
                      ? void 0
                      : t.stax_id)
                  );
                }) &&
                  l.prepend(
                    '<div class="order__shipping-message"><i class="icon-info"></i><span>'.concat(
                      window.theme.stax_delay_label,
                      "</span></div>"
                    )
                  ),
                (r = flow.checkout.getOrder().order.destination.country),
                (n = flow.checkout.getOrder().order.total.amount),
                (i = !1),
                (c = !1),
                $(".shipping-method-form .order-delivery-options").length &&
                  null != a &&
                  (c = !0),
                c &&
                  ![
                    "AUT",
                    "BEL",
                    "BGR",
                    "HRV",
                    "CYP",
                    "CZE",
                    "DNK",
                    "EST",
                    "FIN",
                    "FRA",
                    "DEU",
                    "GRC",
                    "HUN",
                    "IRL",
                    "ITA",
                    "LVA",
                    "LTU",
                    "LUX",
                    "MLT",
                    "NLD",
                    "POL",
                    "PRT",
                    "ROU",
                    "SVK",
                    "SVN",
                    "ESP",
                    "SWE",
                    "GBR",
                    "USA",
                  ].includes(r) &&
                  (i = !0),
                c && "USA" === r && n >= 800 && (i = !0),
                i &&
                  l.append(
                    '<div class="order__customs-message">'.concat(
                      a.innerText,
                      "</div>"
                    )
                  ),
                $(".mobile_progress_bar__step").removeClass("active checked"),
                $("#mobile_progress_bar-step-1").addClass("checked"),
                $("#mobile_progress_bar-step-2").addClass("active"),
                $("#mobile_progress_bar-step-2").addClass("active"),
                o(),
                s(),
                (e = new Set([
                  "fr",
                  "en",
                  "de",
                  "es",
                  "ru",
                  "zh",
                  "ar",
                  "tr",
                  "ko",
                  "ja",
                ])),
                (t =
                  theme.utils.getCookie("userLanguage") ||
                  (
                    window.navigator.userLanguage || window.navigator.language
                  ).slice("0", "2")),
                e.has(t) &&
                  flow.checkout.getOrder().setAttribute("user_locale", t, {
                    onSuccess: function (e) {},
                    onError: function (e) {
                      console.log("Failed to add attribute to order", e);
                    },
                  }),
                u(2),
                ga(
                  "send",
                  "event",
                  "Checkout",
                  "Contact Information Complete",
                  flow.checkout.getOrder().order.number
                );
            }),
            Flow.set("on", "pageview.checkout_step_3", function () {
              h(),
                d(),
                $(".mobile_progress_bar__step").removeClass("active checked"),
                $("#mobile_progress_bar-step-1").addClass("checked"),
                $("#mobile_progress_bar-step-2").addClass("checked"),
                $("#mobile_progress_bar-sep-2").addClass("active"),
                $("#mobile_progress_bar-step-3").addClass("active"),
                o(),
                s(),
                (function () {
                  var e =
                    null != T
                      ? { affiliate_uuid: T, affiliate_tracker: q }
                      : null;
                  if (e) {
                    var t = JSON.stringify({
                      affiliate_reference: e.affiliate_uuid,
                      affiliate_tracker: e.affiliate_tracker,
                    });
                    flow.checkout.getOrder().setAttribute("affiliate", t, {
                      onSuccess: function (e) {},
                      onError: function (e) {
                        console.log("Failed to add attribute to order", e);
                      },
                    });
                  }
                })(),
                (function () {
                  var e = null != C ? { referral_code: C } : null;
                  if (e && e.referral_code) {
                    var t = JSON.stringify({ referral_code: e.referral_code });
                    flow.checkout.getOrder().setAttribute("referral", t, {
                      onSuccess: function (e) {},
                      onError: function (e) {
                        console.log(
                          "Failed to add attribute referral to order",
                          e
                        );
                      },
                    });
                  }
                })(),
                f(2),
                u(3),
                (function () {
                  if (sessionStorage.getItem("ref_llm")) {
                    var e = document.querySelector(
                      "form > section.section.section--fitted.payment-method > div.section__content > div > div > div > div > div > div:nth-child(6)"
                    );
                    e && (e.style.display = "none");
                  }
                })(),
                ga(
                  "send",
                  "event",
                  "Checkout",
                  "Shipping Method Chosen",
                  flow.checkout.getOrder().order.number
                );
            }),
            Flow.set("on", "pageview.checkout_thank_you", function (e) {
              var t, r;
              !(function () {
                for (
                  var e,
                    t = document.querySelectorAll(
                      ".order-confirmation-step__order-number, .order-confirmation-step__customer-name, .address-summary__content"
                    ),
                    r = 0;
                  (e = t[r++]);

                )
                  e.setAttribute("data-cs-mask", "");
              })(),
                o(),
                (t = $(".checkout__live")).length > 0 &&
                  t.addClass("checkout__live--active"),
                flow.checkout.getOrder().order &&
                  dataLayer.push({
                    total_price:
                      flow.checkout.getOrder().order.total.base.amount,
                    transaction_id: flow.checkout.getOrder().order.number,
                  }),
                $("#mobile_progress_bar-step-1").addClass("checked"),
                $("#mobile_progress_bar-step-2").addClass("checked"),
                $("#mobile_progress_bar-sep-2").addClass("active"),
                $("#mobile_progress_bar-step-3").addClass("checked"),
                $("#mobile_progress_bar-sep-3").addClass("checked"),
                $("#mobile_progress_bar-sep-4").addClass("active"),
                $("#mobile_progress_bar-step-4").addClass("checked"),
                s(),
                f(3),
                ga(
                  "send",
                  "event",
                  "Checkout",
                  "Payment Method Complete",
                  flow.checkout.getOrder().order.number
                ),
                flow.checkout.getOrder().order.prices[2] &&
                  flow.checkout
                    .getOrder()
                    .order.prices[2].base.amount.toString(),
                flow.checkout.getOrder().order.prices[1] &&
                  flow.checkout
                    .getOrder()
                    .order.prices[1].base.amount.toString(),
                (function () {
                  var e = [];
                  $.each(flow.checkout.getOrder().order.items, function (t, r) {
                    var n = {
                      id: r.number,
                      name: r.local.attributes.product_title,
                      price: ne(r.local.prices),
                      position: t,
                      variant: m(r.local.attributes.variant_title),
                      quantity: r.quantity,
                    };
                    e.push(n);
                  });
                  var t = 0,
                    r = 0;
                  flow.checkout.getOrder().order.prices[2] &&
                    (t = flow.checkout.getOrder().order.prices[2].base.amount),
                    flow.checkout.getOrder().order.prices[1] &&
                      (r = flow.checkout
                        .getOrder()
                        .order.prices[1].base.amount.toString()),
                    gtmCleaner();
                  var n = flow.checkout.getOrder().order.tax_registration
                    ? "business"
                    : "individual";
                  dataLayer.push({
                    event: "EEtransaction",
                    mail_marketing:
                      flow.checkout.getOrder().order.attributes
                        .accepts_marketing,
                    buyer_type: n,
                    ecommerce: {
                      purchase: {
                        currencyCode: Flow.session.getCurrency(),
                        actionField: {
                          id: flow.checkout.getOrder().order.number,
                          affiliation: "Online Store",
                          revenue:
                            flow.checkout.getOrder().order.prices[0].base
                              .amount + t,
                          shipping: r,
                        },
                        products: e,
                      },
                    },
                  });
                })(),
                (r = document.createElement("script")),
                document.head.appendChild(r),
                (r.onload = function () {
                  var e = window.dataLayer[32],
                    t = {},
                    r = [];
                  if (e) {
                    var n = e.ecommerce;
                    if (n) {
                      var a = n.purchase;
                      a && ((t = a.actionField), (r = a.products));
                    }
                  }
                  var i = (function (e) {
                      return "#".concat(e.id);
                    })(t),
                    o = (function (e) {
                      var t = e.revenue;
                      return parseFloat(t);
                    })(t),
                    s = (function (e) {
                      return e.map(function (e) {
                        return e.id;
                      });
                    })(r),
                    c = (function (e) {
                      return e.currency;
                    })(t),
                    l = {
                      event: "purchase",
                      orderId: i,
                      orderValue: o,
                      orderProductIds: s,
                      currency: c,
                    };
                  window._bambuser.collect(l);
                }),
                (r.src =
                  "https://cdn.liveshopping.bambuser.com/metrics/bambuser.min.js"),
                (function () {
                  var e,
                    t = sessionStorage.getItem("ref_llm");
                  if (t) {
                    var r = JSON.parse(t),
                      n = { data: null },
                      a = { type: "ledgerLiveOrderFail", value: {} };
                    if (flow.checkout.getOrder().order) {
                      n.data = flow.checkout.getOrder().order;
                      var i = n.data.total,
                        o = i.amount,
                        s = i.currency;
                      (a.type = "ledgerLiveOrderSuccess"),
                        (a.value = {
                          deviceId: r.deviceId,
                          price: o,
                          currency: s,
                        });
                    }
                    if (window.ReactNativeWebView)
                      try {
                        window.ReactNativeWebView.postMessage(
                          JSON.stringify(a)
                        ),
                          (e = document.getElementsByClassName(
                            "button button button--secondary button--medium button--fluid order-confirmation-step__continue-shopping"
                          )).length &&
                            ((e[0].href = "ledgerlive://hw-purchase-success"),
                            (e[0].innerHTML =
                              window.translation_strings.return_to_ledger_live_app));
                      } catch (e) {
                        console.log("Attribution message sending failed");
                      }
                  }
                })(),
                theme.cart.clear();
            }),
            $(document).on(
              "click",
              '.step:not(".step--completed") a',
              function (e) {
                e.preventDefault();
              }
            ),
            $(document).on(
              "click",
              ".mobile-order-summary__header-action .button",
              function (e) {
                $(this).toggleClass("button--active");
              }
            );
        }),
        $(function () {
          function e(e) {
            e > 0
              ? ($(".header__cart--count")
                  .removeClass("header__cart--count--hidden")
                  .text(e),
                dataLayer.push({
                  total_price: theme.cart._object.items_subtotal_price,
                }))
              : 0 == !!theme.cart._object.item_count
              ? $(".header__cart--count").addClass(
                  "header__cart--count--hidden"
                )
              : $(".header__cart--count")
                  .addClass("header__cart--count--hidden")
                  .text(e);
          }
          function t(e, t, r) {
            var n,
              a = $(t).html(),
              i = Handlebars.compile(a);
            (null == e || null === (n = e.items) || void 0 === n
              ? void 0
              : n.length) > 0
              ? ($("#cart-review-header").show(),
                $("#cart-empty-header").hide())
              : ($("#cart-review-header").hide(),
                $("#cart-empty-header").show()),
              r.html(i(e)),
              window.partnerObject &&
                $(".cart__content-empty .cart__button--checkout ").attr(
                  "href",
                  partnerObject.partner_url
                );
          }
          function r() {
            var e, t, r, n;
            null === (e = window) ||
              void 0 === e ||
              null === (t = e.yotpoWidgetsContainer) ||
              void 0 === t ||
              t.initWidgets(),
              null === (r = window) ||
                void 0 === r ||
                null === (n = r.yotpo) ||
                void 0 === n ||
                n.initWidgets(),
              window.Flow.variants.localize();
          }
          function n(e) {
            var t, n, a;
            if (
              ($("[data-personalize-recommendation]").remove(), 0 === e.length)
            )
              return $("[data-default-recommendation]").show(), void r();
            $("[data-default-recommendation]").hide();
            var i =
              (null === (t = $("#card-recommendation-map")) ||
              void 0 === t ||
              null === (n = t.children()) ||
              void 0 === n ||
              null ===
                (a = n.map(function () {
                  var e, t, r;
                  return {
                    product:
                      null === (e = this.dataset) || void 0 === e
                        ? void 0
                        : e.product,
                    recommendations:
                      (null === (t = $(this)) ||
                      void 0 === t ||
                      null ===
                        (r = t.children().map(function () {
                          var e;
                          return null === (e = $(this)) || void 0 === e
                            ? void 0
                            : e.data("recommended-products");
                        })) ||
                      void 0 === r
                        ? void 0
                        : r.get()) || [],
                  };
                })) ||
              void 0 === a
                ? void 0
                : a.get()) || [];
            i = i.filter(function (t) {
              return e.find(function (e) {
                return e.handle === t.product;
              });
            });
            var o = [];
            if (1 === i.length) o = i[0].recommendations;
            else {
              if (!(i.length > 1))
                return (
                  $("[data-default-recommendation]").show(),
                  e.forEach(function (e) {
                    $("#cart-reco-".concat(e.handle)).hide();
                  }),
                  void r()
                );
              var s = i.reduce(function (e, t) {
                var r = t.recommendations.length;
                return (
                  t.recommendations.forEach(function (t, n) {
                    var a = e.findIndex(function (e) {
                      return e.product === t;
                    });
                    a > -1
                      ? (e[a].strength += r - n)
                      : e.push({ product: t, strength: r - n });
                  }),
                  e
                );
              }, []);
              o = s
                .sort(function (e, t) {
                  return t.strength - e.strength;
                })
                .map(function (e) {
                  return e.product;
                });
            }
            (o = o.filter(function (t) {
              return !e.find(function (e) {
                return e.handle === t;
              });
            })),
              fetch(
                ""
                  .concat(window.location.origin, "/")
                  .concat(
                    window.theme.shop.locale,
                    "?sections=product-recommended-personalize"
                  )
              )
                .then(function (e) {
                  return e.json();
                })
                .then(function (t) {
                  var n = [];
                  $(t["product-recommended-personalize"])
                    .children()
                    .filter(function () {
                      var e = this;
                      return o.find(function (t) {
                        return $(e).attr("id") === "cart-reco-".concat(t);
                      });
                    })
                    .each(function () {
                      var t = this,
                        r = o.findIndex(function (e) {
                          return $(t).attr("id") === "cart-reco-".concat(e);
                        }),
                        a = $(this).data("variant-rec");
                      a
                        ? e.find(function (e) {
                            return e.handle === a;
                          }) && n.push({ article: this, index: r })
                        : n.push({ article: this, index: r });
                    });
                  var a = n
                    .sort(function (e, t) {
                      return e.index - t.index;
                    })
                    .map(function (e) {
                      return e.article;
                    });
                  $(".cart__recommended-products").empty().append(a),
                    $("[cart__recommended-products]").css({
                      visibility: "visible",
                    }),
                    r();
                })
                .catch(function () {
                  $("[data-default-recommendation]").show(),
                    $("[cart__recommended-products]").css({
                      visibility: "visible",
                    });
                });
          }
          function a() {
            var e = $(".cart__flyout"),
              t = "cart__flyout--active",
              r = $(".cart__flyout-cart");
            e.hasClass(t)
              ? e.delay(325).queue(function (r) {
                  e.removeClass(t), $("html").removeClass("no-scroll"), r();
                })
              : (e.addClass(t), $("html").addClass("no-scroll")),
              r && r.length > 0 && r.toggleClass("cart__flyout-cart--active");
          }
          function i(e) {
            var t = parseInt(window.theme.stax_id);
            e.items.length > 1 &&
              e.items.find(function (e) {
                return t === e.id;
              }) &&
              window.theme.stax_delay_cart_label &&
              "" !== window.theme.stax_delay_cart_label &&
              ($("#cart_error_message").html(
                window.theme.stax_delay_cart_label
              ),
              $(".cart__preorder").show());
          }
          if (
            ($(document).on(
              "click",
              ".cart__quantity--inc, .cart__quantity--dec",
              function () {
                var e = $(this).siblings(".cart__quantity-input"),
                  t = e.val(),
                  r = {};
                (r.id = $(this)
                  .parent()
                  .siblings(".cart__item-variant_id")
                  .val()),
                  $(this).hasClass("cart__quantity--inc")
                    ? (K(r), ++t)
                    : ((function (e) {
                        gtmCleaner();
                        var t = (function () {
                          var t = l(
                            p().mark(function t() {
                              var r;
                              return p().wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (t.next = 2), theme.cart.fetch();
                                    case 2:
                                      (r = theme.cart._object.items.find(
                                        function (t) {
                                          return t.variant_id === parseInt(e);
                                        }
                                      )),
                                        re(1, r);
                                    case 5:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            })
                          );
                          return function () {
                            return t.apply(this, arguments);
                          };
                        })();
                        t();
                      })(r.id),
                      --t),
                  (r.quantity = t),
                  theme.cart.update(r) && e.val(t);
              }
            ),
            $(document).on("change", ".cart__quantity-input", function (e) {
              e.preventDefault,
                $(this)
                  .closest(".cart__details")
                  .find(".cart__item-variant_id")
                  .val(),
                $(this).val();
            }),
            $(document).on("click", ".cart__details-trash", function () {
              var e = $(this).closest(".cart__item-details"),
                t = {
                  id: e.find(".cart__item-variant_id").val(),
                  quantity: 0,
                  position: e.find(".cart__item-position").val(),
                },
                r = (function () {
                  var r = l(
                    p().mark(function r() {
                      var n, a;
                      return p().wrap(function (r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              return (
                                gtmCleaner(), (r.next = 3), theme.cart.fetch()
                              );
                            case 3:
                              (n = theme.cart._object.items.find(function (e) {
                                return e.variant_id === parseInt(t.id);
                              })),
                                (a = e
                                  .find(".cart__quantity.cart__quantity-input")
                                  .val()),
                                re(a, n);
                            case 6:
                            case "end":
                              return r.stop();
                          }
                      }, r);
                    })
                  );
                  return function () {
                    return r.apply(this, arguments);
                  };
                })();
              r(), theme.cart.remove(t);
            }),
            $(document).on("submit", ".cart__recommended-form", function (e) {
              e.preventDefault();
              var t = {
                id: $(this).find(".cart__recommended-id").val(),
                quantity: 1,
              };
              $(".cart__flyout-cart").animate({ scrollTop: 0 }, "slow"),
                theme.cart.add(t),
                ga(
                  "send",
                  "event",
                  "Products",
                  "AddToCart",
                  $(this).find(".cart__recommended-sku").val(),
                  t.quantity
                ),
                gtmCleaner(),
                K(t);
            }),
            $(document).on(
              "submit",
              ".cart__checkout-form--checkout, .cart__content-item-form",
              function (e) {
                e.preventDefault(), Flow.checkout.redirect();
              }
            ),
            $(document).ready(function () {
              e(theme.cart._object.item_count),
                window.partnerObject &&
                  $(".cart__content-empty .cart__button--checkout").attr(
                    "href",
                    partnerObject.partner_url
                  );
            }),
            $(document).on("cartUpdates", function () {
              var r =
                "en" == theme.shop.locale.toLowerCase()
                  ? ""
                  : "/" + theme.shop.locale.toLowerCase();
              $.getJSON({
                url: r + "/cart.js",
                async: !1,
                success: function (r) {
                  if (
                    (Flow.cart.localize({ cart: r, success: function (e) {} }),
                    "cart" == theme.template.name)
                  ) {
                    if (
                      (t(r, "#cart_template", $(".cart .cart__container")),
                      theme.cart._object.attributes._partner_id)
                    ) {
                      var o = {};
                      (o.partner_id =
                        theme.cart._object.attributes._partner_id),
                        Flow.cart.setAttributes(o, {});
                    }
                  } else
                    $("div.cart__flyout").hasClass("cart__flyout--active") ||
                      (Flow.cart.localize({
                        cart: r,
                        success: function (e) {
                          te(e);
                        },
                      }),
                      ee(),
                      a()),
                      t(
                        r,
                        "#cart_flyout_template",
                        $(".cart__flyout-cart .cart__content")
                      ),
                      i(r),
                      n(r.items);
                  e(r.item_count);
                },
                error: function (e, t, r) {
                  console.log("Status code : ".concat(t)),
                    console.log("Error : ".concat(r));
                },
              });
            }),
            Handlebars.registerHelper("ifWarranty", function (e, t, r, n) {
              var a = n.data.root.items;
              if ("USA" == Flow.session.getCountry()) {
                var i = $(".product-warranty#".concat(r));
                if (
                  null != e &&
                  e.warranty &&
                  "false" !== (null == e ? void 0 : e.warranty)
                )
                  return n.fn(
                    ie(
                      ie(
                        {},
                        a.find(function (e) {
                          var r;
                          return (
                            (null == e ||
                            null === (r = e.properties) ||
                            void 0 === r
                              ? void 0
                              : r.linkedProduct) ===
                            (null == t ? void 0 : t.toString())
                          );
                        })
                      ),
                      {},
                      { productAssociated: t }
                    )
                  );
                if (i) {
                  var o,
                    s = $(".product-warranty#".concat(r)),
                    c = s.find(".warranty__variant").val(),
                    l = a.find(function (e) {
                      return e.id === t;
                    }).quantity;
                  return (
                    s
                      .find("#add-warranty")
                      .attr(
                        "onclick",
                        "theme.cart.addWarranty("
                          .concat(c, ", ")
                          .concat(t, ", ")
                          .concat(l, ")")
                      ),
                    null === (o = s[0]) || void 0 === o ? void 0 : o.innerHTML
                  );
                }
              }
            }),
            Handlebars.registerHelper("ifGiftCard", function (e, t, r) {
              if (null != e && e.hasGiftCode) {
                var n = r.data.root.items.find(function (t) {
                  return t.id.toString() === e.giftCodeId;
                });
                return r.fn(ie(ie({}, n), {}, { quantity: t }));
              }
            }),
            Handlebars.registerHelper("eachProductsSideCart", function (e, t) {
              for (var r = "", n = 0, a = e.length; n < a; n++) {
                var i, o;
                (null !== (i = e[n]) &&
                  void 0 !== i &&
                  null !== (o = i.properties) &&
                  void 0 !== o &&
                  o.linkedProduct) ||
                  (r += t.fn(e[n]));
              }
              return r;
            }),
            Handlebars.registerHelper("lr_compare", function (e, t, r) {
              if (arguments.length < 3)
                throw new Error(
                  "Registered Helper: 'compare' - needs 2 parameters to compare"
                );
              var n = r.hash.operator || "==",
                a = {
                  "==": function (e, t) {
                    return e == t;
                  },
                  "===": function (e, t) {
                    return e === t;
                  },
                  "!=": function (e, t) {
                    return e != t;
                  },
                  "<": function (e, t) {
                    return e < t;
                  },
                  ">": function (e, t) {
                    return e > t;
                  },
                  "<=": function (e, t) {
                    return e <= t;
                  },
                  ">=": function (e, t) {
                    return e >= t;
                  },
                  typeof: function (e, t) {
                    return d(e) == t;
                  },
                };
              if (!a[n])
                throw new Error(
                  "Registered Helper: 'compare' - needs a valid operator. Invalide: " +
                    n
                );
              var i = a[n](e, t);
              return i ? r.fn(this) : r.inverse(this);
            }),
            Handlebars.registerHelper("toJSON", function (e) {
              return new Handlebars.SafeString(JSON.stringify(e));
            }),
            $(document).on("click", ".header__cart", function () {
              var e =
                "en" == theme.shop.locale.toLowerCase()
                  ? ""
                  : "/" + theme.shop.locale.toLowerCase();
              $.getJSON({
                url: e + "/cart.js",
                async: !1,
                success: function (e) {
                  Flow.cart.localize({
                    cart: e,
                    success: function (e) {
                      te(e);
                    },
                  }),
                    ee(),
                    $(".cart__preorder").hide(),
                    t(
                      e,
                      "#cart_flyout_template",
                      $(".cart__flyout-cart .cart__content")
                    ),
                    i(e),
                    n(e.items),
                    a();
                },
                error: function (e, t, r) {
                  console.log("Status code : ".concat(t)),
                    console.log("Error : ".concat(r));
                },
              });
            }),
            $(document).on(
              "click",
              ".cart__header-close, .cart__flyout-overlay",
              function () {
                a();
              }
            ),
            "cart" == theme.template.name &&
              (Flow.set("on", "ready", function () {
                Flow.cart.localize({
                  success: function (e) {
                    te(e);
                  },
                });
              }),
              t(
                theme.cart._object,
                "#cart_template",
                $(".cart .cart__container")
              ),
              theme.cart._object.attributes._partner_id))
          ) {
            var o = {};
            (o.partner_id = theme.cart._object.attributes._partner_id),
              Flow.cart.setAttributes(o, {});
          }
        }),
        r(753),
        $(function () {
          $(".add-to-cart__box").on("click", function () {
            $(".add-to-cart__quantity-list").toggleClass(
              "add-to-cart__quantity-list--active"
            );
          }),
            $("body").on("click", function (e) {
              $(e.target).hasClass("add-to-cart__box") ||
                $(".add-to-cart__box").find(e.target).length ||
                $(".add-to-cart__quantity-list").removeClass(
                  "add-to-cart__quantity-list--active"
                );
            }),
            $(".add-to-cart__quantity-list-item").on("click", function () {
              var e = $(this).data("value");
              $(".add-to-cart__quantity-select-input").val(e),
                $(".add-to-cart__box span").text(e),
                $(".add-to-cart__quantity-list-item--selected").removeClass(
                  "add-to-cart__quantity-list-item--selected"
                ),
                $(this).addClass("add-to-cart__quantity-list-item--selected");
            }),
            $("#thumb-container .swiper-slide").on("click", function (e) {
              var t = $(this)
                .closest("#thumb-container .swiper-slide")
                .find("img")
                .attr("alt");
              void 0 !== t &&
                ~t.toLowerCase().indexOf("youtube.com") &&
                ($("img.product-details__main-image").hide(),
                $("#product-video").attr("src", t + "?rel=0"),
                $("#product-video").show());
            }),
            $("#product-photo-gallery").on(
              "click touchstart touchend touchmove",
              function (e) {
                "main_image" ==
                $(
                  ".swiper-main-photo .swiper-slide.slide-1.swiper-slide-active"
                )
                  .find("img")
                  .attr("id")
                  ? $(".photo-gallery").removeClass("change-background-color")
                  : $(".photo-gallery").addClass("change-background-color");
              }
            ),
            $(document).on("submit", ".add-to-cart__form", function (e) {
              e.preventDefault();
              var t = $(this)
                  .closest("form.add-to-cart__form")
                  .find(".add-to-cart__quantity-select-input")
                  .val(),
                r = {
                  product_id: $(this)
                    .closest("form.add-to-cart__form")
                    .find(".add-to-cart__product")
                    .val(),
                  id: $(this)
                    .closest("form.add-to-cart__form")
                    .find(".add-to-cart__variant")
                    .val(),
                  quantity: t,
                },
                n = $(this)
                  .closest("form.add-to-cart__form")
                  .find("#warranty")
                  .is(":checked"),
                a = {
                  product_id: $(this)
                    .closest("form.add-to-cart__form")
                    .find(".warranty__product")
                    .val(),
                  id: $(this)
                    .closest("form.add-to-cart__form")
                    .find(".warranty__variant")
                    .val(),
                  quantity: t,
                  properties: { isWarranty: !0, linkedProduct: r.id },
                };
              n
                ? ((r.properties = { warranty: a.id }),
                  console.log([r, a]),
                  theme.cart.addMultiple([r, a]))
                : theme.cart.add(r),
                ga(
                  "send",
                  "event",
                  "Products",
                  "AddToCart",
                  theme.current_object.title,
                  r.quantity
                );
            }),
            $(document).on("click", "#wallet-connect", function (e) {
              t("wallet-connect");
            }),
            $(document).on("click", " #metamask-connect", function (e) {
              t(e);
            });
          var e,
            t = (function () {
              var e = l(
                p().mark(function e(t) {
                  var r, a;
                  return p().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = $("form.add-to-cart__form-moralis")),
                            (a = {
                              product_id: r.find(".add-to-cart__product").val(),
                              id: r.find(".add-to-cart__variant").val(),
                              quantity: 1,
                            }),
                            (e.next = 4),
                            n(a, t)
                          );
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          function r(e) {
            var t = window.ethereum;
            if (null != t && t.providers) {
              var r;
              switch (e) {
                case "coinbase":
                  r = t.providers.find(function (e) {
                    return e.isCoinbaseWallet;
                  });
                  break;
                case "metamask":
                  r = t.providers.find(function (e) {
                    return e.isMetaMask;
                  });
                  break;
                case "walletconnect":
                  r = t.providers.find(function (e) {
                    return e.isWalletConnect;
                  });
                  break;
                default:
                  return;
              }
              r && t.setSelectedProvider(r);
            }
          }
          function n(e, t) {
            return a.apply(this, arguments);
          }
          function a() {
            return (a = l(
              p().mark(function e(t, n) {
                var a, i;
                return p().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((a = Moralis.User.current()),
                          (i = {}),
                          "wallet-connect" == n
                            ? (closeDialogFunction(),
                              (i = { provider: "walletconnect" }))
                            : (loadingModal(), (i = { provider: "metamask" })),
                          r(n),
                          a)
                        ) {
                          e.next = 10;
                          break;
                        }
                        return (
                          (e.next = 7),
                          Moralis.enableWeb3(i)
                            .then(function (e) {
                              successModal(),
                                setTimeout(function () {
                                  addProductToCartModal(t);
                                }, 1e3),
                                ga(
                                  "send",
                                  "event",
                                  "Products",
                                  "AddToCart",
                                  theme.current_object.title,
                                  t.quantity
                                ),
                                dataLayer.push({
                                  event: "EEaddToCart",
                                  ecommerce: {
                                    currencyCode: Flow.session.getCurrency(),
                                    add: {
                                      products: [
                                        {
                                          id: theme.current_object.id.toString(),
                                          name: theme.current_object.title,
                                          price: theme.utils
                                            .toMoney(theme.current_object.price)
                                            .replace("$", ""),
                                          quantity: t.quantity,
                                        },
                                      ],
                                    },
                                  },
                                });
                            })
                            .catch(function (e) {
                              console.log("error", e), errorModal();
                            })
                        );
                      case 7:
                        (a = e.sent), (e.next = 12);
                        break;
                      case 10:
                        successModal(),
                          setTimeout(function () {
                            addProductToCartModal(t);
                          }, 1e3);
                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          if (
            ($(document).on("click", ".buy-now-btn", function (e) {
              e.preventDefault();
              var t = {
                number: $(this)
                  .closest("form.add-to-cart__form")
                  .find(".add-to-cart__variant")
                  .val(),
                quantity: $(this)
                  .closest("form.add-to-cart__form")
                  .find(".add-to-cart__quantity-select-input")
                  .val(),
              };
              Flow.checkout.redirect({ orderForm: { items: [t] } });
            }),
            (e = $(".add-to-cart__quantity-list-item").eq(0).data("value")),
            $(".add-to-cart__box span").text(e),
            $(".add-to-cart__quantity-select-input").val(e),
            "product" == theme.template.name)
          ) {
            var i = function (e) {
                for (var t = 0; t < e.length; t++)
                  e[t].hasOwnProperty("comment") &&
                    (Array.isArray(e[t].comment)
                      ? (e[t].num_comments = e[t].comment.length)
                      : "object" === d(e[t].comment) &&
                        (e[t].num_comments = 1));
                return e;
              },
              o = function () {
                return $.get(_, g, function (e) {
                  if (
                    ((b = e.response),
                    (k = b.bottomline.total_review),
                    void 0 !== g.star)
                  ) {
                    var t = g.star,
                      r = b.bottomline.star_distribution;
                    k = r[t];
                  }
                  (w = b.pagination.page), (y = b.pagination.per_page);
                  var n = Math.ceil(k / y);
                  (j = { num_pages: n, step: y, current_page: w }),
                    i(b.reviews),
                    (C.reviews = b.reviews),
                    u(
                      C.reviews,
                      "#product_review_template",
                      $(".product__review")
                    ),
                    u(
                      j,
                      "#product_review_pagination_template",
                      $(".product__review__pagination")
                    ),
                    0 == k ? $("#reviews").hide() : $("#reviews").show();
                });
              },
              s = function () {
                $.get(_, g, function (e) {
                  (b = e.response),
                    i(b.reviews),
                    (C.reviews = b.reviews),
                    u(
                      j,
                      "#product_review_pagination_template",
                      $(".product__review__pagination")
                    ),
                    u(
                      C.reviews,
                      "#product_review_template",
                      $(".product__review")
                    );
                });
              },
              c = function (e, t, r) {
                return e.slice(t, r);
              },
              u = function (e, t, r) {
                var n = $(t).html(),
                  a = Handlebars.compile(n),
                  i = { data: e };
                r.html(a(i));
              },
              f = function (e) {
                e.data("min"),
                  e.data("max"),
                  (C.reviews = b.reviews),
                  (j.current_page = w),
                  (g.page = w),
                  s();
              },
              m = function (e) {
                var t = e.data("min"),
                  r = e.data("max"),
                  n = c(C.reviews, t, r);
                (j.current_page = w), h(n);
              },
              h = function (e) {
                u(
                  j,
                  "#product_review_pagination_template",
                  $(".product__review__pagination")
                ),
                  u(e, "#product_review_template", $(".product__review"));
              },
              _ =
                "//api.yotpo.com/v1/widget/VjYC1hjLHPTTjBOJGQajJPG9ZjLqy7OBx6uqubzH/products/" +
                theme.current_object.id +
                "/reviews.json",
              v = 3,
              g = { per_page: v, page: w },
              b = void 0,
              y = v,
              w = 1,
              k = 0,
              x = !1,
              C = { reviews: [] },
              j = { num_pages: 1, step: y, current_page: w };
            Handlebars.registerHelper("times", function (e, t) {
              for (var r = "", n = 0; n < e; ++n) r += t.fn(n);
              return r;
            }),
              Handlebars.registerHelper("timesLessFive", function (e, t) {
                var r = "",
                  n = 3 - e;
                if (n > 0) for (var a = 0; a < n; ++a) r += t.fn(a);
                return r;
              }),
              Handlebars.registerHelper("formatDate", function (e) {
                var t = new Date(e),
                  r = t.getDate(),
                  n = t.getMonth(),
                  a = t.getFullYear();
                return new Handlebars.SafeString(
                  '<span class="review__date-formated">' +
                    [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sept",
                      "Oct",
                      "Nov",
                      "Dec",
                    ][n] +
                    " " +
                    r +
                    ", " +
                    a +
                    "</span>"
                );
              }),
              Handlebars.registerHelper("fixString", function (e) {
                return $("<span>").html(e).text();
              }),
              Handlebars.registerHelper("compare", function (e, t, r) {
                if (arguments.length < 3)
                  throw new Error(
                    "Registered Helper: 'compare' - needs 2 parameters to compare"
                  );
                var n = r.hash.operator || "==",
                  a = {
                    "==": function (e, t) {
                      return e == t;
                    },
                    "===": function (e, t) {
                      return e === t;
                    },
                    "!=": function (e, t) {
                      return e != t;
                    },
                    "<": function (e, t) {
                      return e < t;
                    },
                    ">": function (e, t) {
                      return e > t;
                    },
                    "<=": function (e, t) {
                      return e <= t;
                    },
                    ">=": function (e, t) {
                      return e >= t;
                    },
                    typeof: function (e, t) {
                      return d(e) == t;
                    },
                  };
                if (!a[n])
                  throw new Error(
                    "Registered Helper: 'compare' - needs a valid operator. Invalide: " +
                      n
                  );
                var i = a[n](e, t);
                return i ? r.fn(this) : r.inverse(this);
              }),
              Handlebars.registerHelper("formatText", function (e) {
                var t = $("#review__temp");
                return (
                  (e = (e = e.replace(/(\r\n|\n|\r)/gm, " <br/> ")).replace(
                    /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi,
                    "<a href='$&' target='_blank'>$&</a>"
                  )),
                  t.html(e),
                  (e = t[0].innerHTML),
                  new Handlebars.SafeString(e)
                );
              }),
              Handlebars.registerHelper("pagination", function (e, t, r, n) {
                for (var a = 1, i = "", o = 0, s = t; a <= e; ++a) {
                  var c = !1,
                    l = !1,
                    d = !1,
                    u = "page__number";
                  a == r
                    ? ((c = !0), (l = !0))
                    : 1 == a || a + 1 == r || a - 1 == r || a == e
                    ? (c = !0)
                    : (a + 2 == r || a - 2 == r) && (d = !0),
                    (u += l
                      ? " page__number--active page__number--current"
                      : c
                      ? " page__number--active"
                      : " page__number--inactive"),
                    (i += d
                      ? '<div class="' +
                        (u += " page__number--ellipses") +
                        '" data-page-number="' +
                        a +
                        '" data-min="' +
                        o +
                        '" data-max="' +
                        s +
                        '"><span class="page__number-label">...</span></div>'
                      : '<div class="' +
                        u +
                        '" data-page-number="' +
                        a +
                        '" data-min="' +
                        o +
                        '" data-max="' +
                        s +
                        '"><span class="page__number-label">' +
                        a +
                        "</span></div>"),
                    (o += t),
                    (s += t);
                }
                return i;
              }),
              $(document).on(
                "click",
                ".page__number--active:not(.page__number--current)",
                function () {
                  var e = $(this).data("min"),
                    t = $(this).data("max");
                  if (
                    ((w = $(this).data("pageNumber")), (j.current_page = w), x)
                  ) {
                    var r = c(C.reviews, e, t);
                    h(r);
                  } else (C.reviews = b.reviews), (g.page = w), s();
                }
              ),
              $(document).on("click", ".page__previous", function () {
                if (1 != w) {
                  w -= 1;
                  var e = $('.page__number[data-page-number="' + w + '"]');
                  e.length > 0 && (x ? m(e) : f(e));
                }
              }),
              $(document).on("click", ".page__next", function () {
                if (w != $(".page__number").length) {
                  w += 1;
                  var e = $('.page__number[data-page-number="' + w + '"]');
                  e.length > 0 && (x ? m(e) : f(e));
                }
              }),
              Flow.set("on", "loaded", function () {
                window.theme.shop.domain,
                  Flow.init({ force: !0 }),
                  Flow.getExperience(),
                  Flow.session.getCountry(),
                  Flow.session.getCurrency();
                var e = e || [];
                "product" == theme.template.name &&
                  e.push({
                    event: "impressionAdded",
                    ecommerce: {
                      currencyCode: Flow.session.getCurrency(),
                      detail: {
                        products: [
                          {
                            id: theme.current_object.id.toString(),
                            name: theme.current_object.title,
                            price: theme.utils
                              .toMoney(theme.current_object.price)
                              .replace("$", ""),
                            brand: theme.current_object.vendor,
                            category: theme.current_object.type,
                          },
                        ],
                      },
                    },
                  });
              }),
              $(document).on("click", ".js-review-sort", function () {
                var e = (function (e) {
                  var t = e.data("filter-type"),
                    r = "";
                  if ("star" === t) {
                    var n = e.data("star-num");
                    r = $(
                      "[data-filter-type=" + t + "][data-star-num=" + n + "]"
                    );
                  } else if ("sort" === t) {
                    var a = e.data("sort-type"),
                      i = e.data("sort-direction");
                    r = $(
                      "[data-filter-type=" +
                        t +
                        "][data-sort-type=" +
                        a +
                        "][data-sort-direction=" +
                        i +
                        "]"
                    );
                  }
                  return r;
                })($(this));
                !(function (e) {
                  var t = e.parent();
                  t
                    .find(".select__list-item--selected")
                    .removeClass("select__list-item--selected"),
                    e.addClass("select__list-item--selected"),
                    t.siblings(".review__sort__results").text(e.first().text());
                })(e),
                  "comment" === $(this).data("sortType")
                    ? ((x = !0),
                      (function (e, t) {
                        (C.reviews = []), toggleLoading();
                        for (
                          var r = $.when(),
                            n = function (e) {
                              r = r.then(function () {
                                return (
                                  (g.page = e),
                                  $.get(_, g, function (e) {
                                    for (var t in ((b = e.response),
                                    i(b.reviews),
                                    b.reviews))
                                      b.reviews[t].num_comments &&
                                        b.reviews[t].num_comments > 0 &&
                                        C.reviews.push(b.reviews[t]);
                                  })
                                );
                              });
                            },
                            a = 1;
                          a <= j.num_pages;
                          a++
                        )
                          n(a);
                        r = r.then(function () {
                          var e;
                          (C.reviews =
                            ((e = C.reviews),
                            t
                              ? e.sort(function (e, t) {
                                  return (
                                    new Date(e.comment.created_at) <
                                    new Date(t.comment.created_at)
                                  );
                                })
                              : e.sort(function (e, t) {
                                  return (
                                    new Date(e.comment.created_at) >
                                    new Date(t.comment.created_at)
                                  );
                                }),
                            e)),
                            (function (e) {
                              (k = e.length), (w = 1), (y = v);
                              var t = Math.ceil(k / y);
                              j = { num_pages: t, step: y, current_page: w };
                            })(C.reviews);
                          var r = c(C.reviews, 0, v);
                          u(
                            j,
                            "#product_review_pagination_template",
                            $(".product__review__pagination")
                          ),
                            u(
                              r,
                              "#product_review_template",
                              $(".product__review")
                            ),
                            $(".yotpo-bottomline .text-m").text(
                              C.reviews.length + " Reviews"
                            ),
                            toggleLoading();
                        });
                      })(0, "desc" === $(this).data("sortDirection")))
                    : ((x = !1),
                      (g = (function (e) {
                        var t = e.data("filterType"),
                          r = {};
                        if (null == t) r = { per_page: v, page: 1 };
                        else
                          switch (t) {
                            case "star":
                              var n = parseInt(e.data("starNum"));
                              r = { per_page: v, page: 1, star: n };
                              break;
                            case "sort":
                              var a = e.data("sortType"),
                                i = e.data("sortDirection");
                              r = {
                                per_page: v,
                                page: 1,
                                sort: a,
                                direction: i,
                              };
                              break;
                            default:
                              r = { per_page: v, page: 1, star };
                          }
                        return r;
                      })($(this))),
                      (w = g.page),
                      o());
              }),
              $(".reviews-score").on("click", function () {
                $("html, body").animate(
                  { scrollTop: $("#reviews").offset().top - 100 },
                  "slow"
                );
              }),
              $(".js-view-all-reviews-btn").on("click", function () {
                window.location = $(this).data("product-url") + "?view=reviews";
              }),
              o();
          }
          var I,
            S = window.theme.p.out_of_stock,
            O = window.theme.p.add_to_cart,
            E = window.theme.p.sold_out,
            T = window.location.pathname,
            q = 0;
          function L(e, t, r, n, a, i) {
            if (!i) {
              var o = e.find("input").data("variantId"),
                s = e.find("input").data("variantComparePrice");
              $("#" + o + "-compare_at").length > 0 &&
                (s = $("#" + o + "-compare_at").text());
              var c = e.find("input").data("variantPrice");
              $("#" + o + "-prices").length > 0 &&
                (c = $("#" + o + "-prices").text()),
                t.find(".add-to-cart__price--compare-at").text(s),
                t.find(".add-to-cart__price--sale").text(c),
                t.find(".add-to-cart__price--original").text(c),
                r.find(".price .add-to-cart__price--compare-at").text(s),
                r.find(".price .add-to-cart__price--sale").text(c),
                r.find(".price .add-to-cart__price--original").text(c),
                a.find(n).find(".tile__price--desktop").text(s),
                a.find(n).find(".tile__price--mobile").text(s),
                a.find(n).find(".tile__price--sale").text(c),
                a.find(n).find(".tile__price--original").text(c);
            }
          }
          function A(e, t, r) {
            var n = e.data("variantComparePrice"),
              a = e.data("variantPrice");
            t.find(".add-to-cart__price--compare-at").text(n),
              t.find(".add-to-cart__price--sale").text(a),
              t.find(".add-to-cart__price--original").text(a),
              r.find(".price .add-to-cart__price--compare-at").text(n),
              r.find(".price .add-to-cart__price--sale").text(a),
              r.find(".price .add-to-cart__price--original").text(a);
          }
          window.location.pathname.indexOf("products") > -1 &&
            ((I = function (e) {
              var t = e.product.tags.includes("soldout");
              "ledger-nano-s-plus-genesis-edition" === e.product.handle
                ? $(".add-to-cart__submit, .subbar__submit")
                    .attr("data-oos", "true")
                    .val(window.theme.marketing_lnsp.cta_label)
                : t &&
                  ($(".add-to-cart__submit, .subbar__submit")
                    .attr("disabled", !0)
                    .val(E),
                  (q = 1));
            }),
            $.getJSON(T + ".json", function (e) {
              I(e);
            })),
            $(".variant-list-box").on("click", function () {
              $(this).find("ul").show(),
                0 == $(".variant-list-box ul li span").hasClass("selected") &&
                  $(".variant-list-box ul li:first-of-type span").addClass(
                    "selected"
                  );
            }),
            $(".swatch-element").on("click", function () {
              var e = $(this).hasClass("swatch-element-secondary"),
                t = !1,
                r =
                  this.parentElement.parentElement.parentElement.parentElement
                    .parentElement;
              r && (t = r.classList.contains("atcm-tile-color")),
                this.parentElement
                  .querySelectorAll(".swatch-element span.selected")
                  .forEach(function (e) {
                    e.classList.remove("selected");
                  });
              var n = $(this).closest(".collection__tile"),
                a = $(this).find("input").data("variantTitle"),
                i = $(this).find("input").data("variantHandle"),
                o = $(this)[0].parentElement.parentElement.querySelector(
                  "#swatch-placeholder"
                );
              o.setAttribute("data-swatch-color", "swatch-" + i);
              var s =
                a + '<i class="far fa-angle-down" aria-hidden="true"></i>';
              o.innerHTML = s;
              var c = $(this).find("input").data("variantId");
              if (
                ($(this).find("span").addClass("selected"),
                "product" == theme.template.name
                  ? ($(this)
                      .closest("form.add-to-cart__form")
                      .find(".add-to-cart__variant")
                      .val(c),
                    $(".subbar__variant").val(c))
                  : n.find(".tile__variant__id").val(c),
                (j = $(this).find("input").data("variantAvailability")) <= 10 &&
                  j > 0)
              )
                var l = "Only " + j + " left!";
              else
                l =
                  0 == j
                    ? "This size is out of stock."
                    : j > 500
                    ? ""
                    : "Stock: " + j;
              $("#variant-id").text(l),
                e ||
                  (function (e, t) {
                    var r;
                    if (
                      "atcm-tile" !=
                      (null === (r = t[0]) || void 0 === r
                        ? void 0
                        : r.classList[0])
                    ) {
                      var n = e.find("input").data("productHandle"),
                        a = e.find("input").data("variantHandle"),
                        i = window.location.pathname.split(n)[0];
                      "/" != i.slice(-1) && (i += "/");
                      var o = i.includes("/products/"),
                        s = "";
                      if (i.includes("/pages/")) {
                        var c = i.split("/");
                        s =
                          2 == c.indexOf("pages")
                            ? "/" + c[1] + "/products/" + n + "/" + a
                            : "/products/" + n + "/" + a;
                      } else
                        s =
                          ("ledger-nano-s" != n &&
                            "ledger-nano-x" != n &&
                            "ledger-nano-s-plus" != n) ||
                          o
                            ? i + n + "/" + a
                            : i + "products/" + n + "/" + a;
                      "product" == theme.template.name
                        ? window.history.pushState("", "", s)
                        : t.find(".tile__button-container a").attr("href", s);
                    }
                  })($(this), n);
              var d = $(this).find("input").data("variantTitle");
              "product" == theme.template.name
                ? $(".swatch-selected-color").find("span").text(d)
                : n.find(".swatch-selected-color span").text(d);
              var u = $(this).find("input").data("variantComparePrice");
              $("#" + c + "-compare_at").length > 0 &&
                (u = $("#" + c + "-compare_at").text());
              var p = $(this).find("input").data("variantPrice");
              if (
                ($("#" + c + "-prices").length > 0 &&
                  (p = $("#" + c + "-prices").text()),
                "" == u)
              ) {
                $(".add-to-cart__price-container").removeClass(
                  "add-to-cart__price-container--sale"
                ),
                  $(".add-to-cart__price-container").addClass(
                    "add-to-cart__price-container--no-sale"
                  ),
                  $(".subbar__content").removeClass("subbar__content--sale"),
                  $(".subbar__content").addClass("subbar__content--no-sale"),
                  n
                    .find(".tile__detail-content")
                    .removeClass("tile__detail-content--sale"),
                  n
                    .find(".tile__detail-content")
                    .addClass("tile__detail-content--no-sale");
                var f = $(".add-to-cart__price-container--no-sale"),
                  m = $(".subbar__content--no-sale"),
                  h = $(".tile__detail-content--no-sale");
                L($(this), f, m, h, n, t);
              } else if (u != p) {
                $(".add-to-cart__price-container").addClass(
                  "add-to-cart__price-container--sale"
                ),
                  $(".add-to-cart__price-container").removeClass(
                    "add-to-cart__price-container--no-sale"
                  ),
                  $(".subbar__content").addClass("subbar__content--sale"),
                  $(".subbar__content").removeClass("subbar__content--no-sale"),
                  n
                    .find(".tile__detail-content")
                    .addClass("tile__detail-content--sale"),
                  n
                    .find(".tile__detail-content")
                    .removeClass("tile__detail-content--no-sale");
                var _ = $(".add-to-cart__price-container--sale"),
                  v = $(".subbar__content--sale"),
                  g = $(".tile__detail-content--sale");
                L($(this), _, v, g, n, t);
              }
              var b = $(this).find("input").data("variantImg");
              if (
                (e
                  ? $(".photo-gallery").find("#dual_sell_image").attr("src", b)
                  : t || $(".photo-gallery").find("#main_image").attr("src", b),
                $(".photo-gallery .swiper-wrapper").attr(
                  "style",
                  "transform: translate3d(0, 0, 0);"
                ),
                $(".swiper-slide").removeClass(
                  "swiper-slide-active swiper-slide-thumb-active activeThumbnail"
                ),
                $(".pictures-container .swiper-slide")
                  .first()
                  .removeClass("swiper-slide-prev")
                  .addClass("swiper-slide-active"),
                $("#thumb-container .swiper-slide")
                  .first()
                  .removeClass("swiper-slide-prev")
                  .addClass("swiper-slide-active swiper-slide-thumb-active"),
                $("#thumb-container .swiper-slide:nth-child(2)").addClass(
                  "swiper-slide-next"
                ),
                $(".photo-gallery").removeClass("change-background-color"),
                t)
              );
              else if (1 != e) {
                var y = $("#thumb-container").find("#main_image_thumb");
                y.attr("src", b),
                  $("#thumb-container")
                    .find(".swiper-slide > *")
                    .not(y)
                    .removeClass("activeThumbnail"),
                  y.addClass("activeThumbnail");
              }
              b = $(this).find("input").data("variantImg");
              var w = $(this).find("input").data("variantSrcset1"),
                k = $(this).find("input").data("variantSrcset2"),
                x = $(this).find("input").data("variantSrcset3"),
                C = $(this).find("input").data("variantImgsrc");
              if (
                (n.find(".tile__image .image1").attr("srcset", w),
                n.find(".tile__image .image2").attr("srcset", k),
                n.find(".tile__image .image3").attr("srcset", x),
                n.find(".tile__image img").attr("src", C),
                $(this).find(".swatch-element__container").hasClass("selected"))
              ) {
                var j = $(this).find("input").data("variantAvailability"),
                  I = n.find(".tile__button"),
                  T = $(I).parent().find(".notify-me");
                if ((T.length > 0 && $(T)[0].remove(), 1 == q))
                  $(".add-to-cart__submit, .subbar__submit")
                    .attr("disabled", !0)
                    .val(E);
                else if (j <= 0) {
                  $(".add-to-cart__submit, .subbar__submit")
                    .attr("disabled", !0)
                    .attr("data-oos", !0)
                    .val(S);
                  var A = n.find(".tile__button--detail");
                  if (
                    (n.find("a.tile__button.tile__button--atc").attr("href"), A)
                  ) {
                    var P = BIS_482_MOD.bisLinkCallback;
                    $(I)
                      .parent()
                      .find(".notify-me")
                      .click(function (e) {
                        e.preventDefault(), P(this);
                      });
                  }
                  n.find(".tile__button").attr("disabled", !0).val(S);
                } else
                  $(".add-to-cart__submit, .subbar__submit")
                    .attr("disabled", !1)
                    .attr("data-oos", !1)
                    .val(O),
                    n.find(".tile__button").attr("disabled", !1).val(O);
              }
              return !1;
            }),
            $(function () {
              var e = window.location.href.split("/"),
                t =
                  e[e.length - 1].startsWith("?") || !e[e.length - 1]
                    ? e[e.length - 2]
                    : e[e.length - 1];
              if (t.includes("?")) {
                var r = t.split("?");
                t = r[0];
              }
              if (
                $(".swatch-element").find("[data-variant-handle='" + t + "']")
                  .length > 0
              ) {
                $(".swatch-element__container").removeClass("selected");
                var n = $(".swatch-element"),
                  a = n.find("[data-variant-handle='" + t + "']"),
                  i = a
                    .closest(".swatch-element")
                    .find(".swatch-element__container"),
                  o = i
                    .addClass("selected")
                    .parent(".swatch-element")
                    .find("input")
                    .data("variantId");
                n
                  .closest("form.add-to-cart__form")
                  .find(".add-to-cart__variant")
                  .val(o),
                  $(".subbar__variant").val(o);
                var s = a ? a.data("variantTitle") : "";
                s &&
                  $("#swatch-placeholder").html(
                    s + '<i class="far fa-angle-down" aria-hidden="true"></i>'
                  ),
                  $("#swatch-placeholder").attr(
                    "data-swatch-color",
                    "swatch-" + t
                  );
                var c = a.data("variantComparePrice"),
                  l = a.data("variantPrice");
                "" == c
                  ? ($(".add-to-cart__price-container").removeClass(
                      "add-to-cart__price-container--sale"
                    ),
                    $(".add-to-cart__price-container").addClass(
                      "add-to-cart__price-container--no-sale"
                    ),
                    $(".subbar__content").removeClass("subbar__content--sale"),
                    $(".subbar__content").addClass("subbar__content--no-sale"),
                    A(
                      a,
                      $(".add-to-cart__price-container--no-sale"),
                      $(".subbar__content--no-sale")
                    ))
                  : c != l &&
                    ($(".add-to-cart__price-container").addClass(
                      "add-to-cart__price-container--sale"
                    ),
                    $(".add-to-cart__price-container").removeClass(
                      "add-to-cart__price-container--no-sale"
                    ),
                    $(".subbar__content").addClass("subbar__content--sale"),
                    $(".subbar__content").removeClass(
                      "subbar__content--no-sale"
                    ),
                    A(
                      a,
                      $(".add-to-cart__price-container--sale"),
                      $(".subbar__content--sale")
                    ));
                var d = a.data("variantImg");
                if (
                  ($(".photo-gallery").find("#main_image").attr("src", d),
                  $("#thumb-container")
                    .find("#main_image_thumb")
                    .attr("src", d),
                  i.hasClass("selected"))
                ) {
                  var u = a.data("variantAvailability");
                  u <= 0
                    ? $(".add-to-cart__submit, .subbar__submit")
                        .attr("disabled", !0)
                        .attr("data-oos", !0)
                        .val(S)
                    : $(".add-to-cart__submit, .subbar__submit").attr(
                        "disabled",
                        !1
                      );
                }
                if (u <= 10 && u > 0) var p = "Only " + u + " left!";
                else
                  p =
                    0 == u
                      ? "This size is out of stock."
                      : u > 500
                      ? ""
                      : "Stock: " + u;
                $("#variant-id").text(p);
              } else
                $(".swatch-element").each(function () {
                  if (
                    $(this)
                      .find(".swatch-element__container")
                      .hasClass("selected")
                  ) {
                    var e = $(this).find("input").data("variantImg");
                    $(".product-details__image-wrapper")
                      .find("#main_image")
                      .attr("src", e);
                  }
                });
            }),
            $(function () {
              $("[data-product-variant-case]").each(function () {
                var e = window.location.href,
                  t = $(this)
                    .data("product-variant-title")
                    .toLowerCase()
                    .split(" ")
                    .join("-"),
                  r = e.substring(e.lastIndexOf("/") + 1);
                t === r &&
                  ($("[data-product-variant-case]").each(function () {
                    t !==
                      $(this)
                        .data("product-variant-title")
                        .toLowerCase()
                        .split(" ")
                        .join("-") &&
                      $(this).removeClass("nano-case-variant__selected");
                  }),
                  $(this).addClass("nano-case-variant__selected")),
                  $(this).click(function () {
                    var e = $(this).data("product-variant-case");
                    $("[data-product-variant-case]").each(function () {
                      t !==
                      $(this)
                        .data("product-variant-title")
                        .toLowerCase()
                        .split(" ")
                        .join("-")
                        ? $(this).removeClass("nano-case-variant__selected")
                        : $(this).addClass("nano-case-variant__selected");
                    }),
                      $(".add-to-cart__variant").each(function () {
                        $(this).val(e);
                      }),
                      $(".add-to-cart__product").each(function () {
                        $(this).val(e);
                      });
                    var r = $(this).data("product-handle"),
                      n = window.location.pathname.split(r);
                    window.history.pushState(
                      null,
                      {},
                      "".concat(n[0]).concat(r, "/").concat(t)
                    );
                  });
              });
            }),
            $(function () {
              $(".collection__tile").each(function () {
                $(".swatch-element").each(function () {
                  if (
                    $(this)
                      .find(".swatch-element__container")
                      .hasClass("selected")
                  ) {
                    var e = $(this).find("input").data("variantImg");
                    $(".product-details__image-wrapper")
                      .find("#main_image")
                      .attr("src", e);
                  }
                });
              });
            }),
            $(function () {
              ($button = $(".js-product-nft-button")),
                $button.on("click", function () {
                  var e = $(this).find(".js-product-nft-pane"),
                    t = $(this).find(".js-product-nft-chevron");
                  console.log("chevron", t),
                    e.is(":animated") ||
                      (e.slideToggle("slow"), t.toggleClass("isExpanded"));
                }),
                $(document).on(
                  "click",
                  ".gallery-thumbs .thumb-gallery, .control",
                  function () {
                    $(".video-mobile").each(function () {
                      var e = $(this).find("iframe").attr("id");
                      $("#" + e)[0].contentWindow.postMessage(
                        '{"event":"command","func":"stopVideo","args":""}',
                        "*"
                      );
                    });
                  }
                ),
                $("#modal-size-guide").on("click", function () {
                  $(".modal-guide-container").fadeIn(300),
                    $(".modal-close, #modal-background").on(
                      "click",
                      function () {
                        $(".modal-guide-container").fadeOut(300);
                      }
                    );
                });
              var e = $("#on-click-block .swiper-slide.active")
                .find("img")
                .attr("src");
              $("#on-click-block-illustration").html(
                '<img src="' + e + '" alt="">'
              ),
                $(window).width() >= 768
                  ? $("#on-click-block .swiper-wrapper .swiper-slide").on(
                      "click",
                      function () {
                        $(
                          "#on-click-block .swiper-wrapper .swiper-slide"
                        ).removeClass("active"),
                          jQuery(this).addClass("active");
                        var e = $("#on-click-block .swiper-wrapper")
                          .find(".active")
                          .find("img")
                          .attr("src");
                        $("#on-click-block-illustration img").attr("src", e);
                      }
                    )
                  : new Swiper(".swiper-live-container", {
                      slidesPerView: "auto",
                      spaceBetween: 20,
                      pagination: {
                        el: ".swiper-live-pagination",
                        clickable: !0,
                      },
                    });
            });
        }),
        $(function () {
          if (
            "page" == theme.template.name &&
            "ledger-reviews" == theme.template.suffix
          ) {
            var e = function (e, t, r) {
                var n = $(t).html(),
                  a = Handlebars.compile(n),
                  i = { data: e };
                r.html(a(i));
              },
              t = { per_page: 3, page: n },
              r = void 0,
              n = 1,
              a = { reviews: [] };
            Handlebars.registerHelper("times", function (e, t) {
              for (var r = "", n = 0; n < e; ++n) r += t.fn(n);
              return r;
            }),
              Handlebars.registerHelper("timesLessFive", function (e, t) {
                var r = "",
                  n = 3 - e;
                if (n > 0) for (var a = 0; a < n; ++a) r += t.fn(a);
                return r;
              }),
              Handlebars.registerHelper("formatDate", function (e) {
                var t = new Date(e),
                  r = t.getDate(),
                  n = t.getMonth(),
                  a = t.getFullYear();
                return new Handlebars.SafeString(
                  '<span class="review__date-formated">' +
                    [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sept",
                      "Oct",
                      "Nov",
                      "Dec",
                    ][n] +
                    " " +
                    r +
                    ", " +
                    a +
                    "</span>"
                );
              }),
              Handlebars.registerHelper("fixString", function (e) {
                return $("<span>").html(e).text();
              }),
              Handlebars.registerHelper("compare", function (e, t, r) {
                if (arguments.length < 3)
                  throw new Error(
                    "Registered Helper: 'compare' - needs 2 parameters to compare"
                  );
                var n = r.hash.operator || "==",
                  a = {
                    "==": function (e, t) {
                      return e == t;
                    },
                    "===": function (e, t) {
                      return e === t;
                    },
                    "!=": function (e, t) {
                      return e != t;
                    },
                    "<": function (e, t) {
                      return e < t;
                    },
                    ">": function (e, t) {
                      return e > t;
                    },
                    "<=": function (e, t) {
                      return e <= t;
                    },
                    ">=": function (e, t) {
                      return e >= t;
                    },
                    typeof: function (e, t) {
                      return d(e) == t;
                    },
                  };
                if (!a[n])
                  throw new Error(
                    "Registered Helper: 'compare' - needs a valid operator. Invalide: " +
                      n
                  );
                var i = a[n](e, t);
                return i ? r.fn(this) : r.inverse(this);
              }),
              Handlebars.registerHelper("formatText", function (e) {
                var t = $("#review__temp");
                return (
                  (e = (e = e.replace(/(\r\n|\n|\r)/gm, " <br/> ")).replace(
                    /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi,
                    "<a href='$&' target='_blank'>$&</a>"
                  )),
                  t.html(e),
                  (e = t[0].innerHTML),
                  new Handlebars.SafeString(e)
                );
              }),
              $(".js-view-all-reviews-btn").on("click", function () {
                window.location = $(this).data("product-url") + "?view=reviews";
              }),
              $("input.reviews_product_id").each(function () {
                var i;
                (i = $(this).val()),
                  $.get(
                    "//api.yotpo.com/v1/widget/VjYC1hjLHPTTjBOJGQajJPG9ZjLqy7OBx6uqubzH/products/" +
                      i +
                      "/reviews.json",
                    t,
                    function (o) {
                      if (
                        ((r = o.response).bottomline.total_review,
                        void 0 !== t.star)
                      ) {
                        var s = t.star;
                        r.bottomline.star_distribution[s];
                      }
                      (n = r.pagination.page),
                        r.pagination.per_page,
                        (function (e) {
                          for (var t = 0; t < e.length; t++)
                            e[t].hasOwnProperty("comment") &&
                              (Array.isArray(e[t].comment)
                                ? (e[t].num_comments = e[t].comment.length)
                                : "object" === d(e[t].comment) &&
                                  (e[t].num_comments = 1));
                        })(r.reviews),
                        (a.reviews = r.reviews),
                        e(
                          a.reviews,
                          "#product_review_template",
                          $(".product__review__" + i)
                        );
                    }
                  );
              });
          }
        }),
        r(530),
        r(843),
        r(428),
        r(421),
        r(304),
        r(558),
        r(206),
        (function (e, t) {
          var r = function (e) {
              return "string" == typeof e
                ? e
                : e instanceof Array
                ? e.join(" ")
                : "number" == typeof e
                ? e.toString()
                : void 0;
            },
            n = function (e) {
              var t = [];
              return (
                e.symbol && 0 != e.symbol.length && t.push(r(e.symbol)),
                e.name && 0 != e.name.length && t.push(r(e.name)),
                e.support.wallets &&
                  0 != e.support.wallets.length &&
                  t.push(r(e.support.wallets)),
                e.support.app_type &&
                  0 != e.support.app_type.length &&
                  t.push(r(e.support.app_type)),
                e.support.compatible_devices &&
                  0 != e.support.compatible_devices.length &&
                  t.push("Ledger " + r(e.support.compatible_devices)),
                (t = t.map(function (e) {
                  return e.toLowerCase();
                })).join(" ")
              );
            };
          Handlebars.registerHelper("create_wallet_link", function (e, t, r) {
            if (
              ("string" == typeof e && (e = [e]),
              "string" == typeof t && (t = [t]),
              r)
            )
              for (var n = 0; n < t.length; n++)
                t[n].indexOf(r) > -1 && t.splice(n, 1);
            if (t.length) {
              var a = t.map(function (t, r) {
                return e ? [t, e[r]] : [t, ""];
              });
              return (function (e) {
                for (var t = [], r = 0; r < e.length; r++)
                  null != e[r][1]
                    ? t.push(
                        "<a href='" +
                          e[r][1] +
                          "' class='crypto__wallets crypto__wallets--link' target='_blank'>" +
                          e[r][0] +
                          "</a>"
                      )
                    : t.push(
                        "<span class='crypto__wallets'>" + e[r][0] + "</span>"
                      );
                return t;
              })(a).join(",&nbsp;");
            }
          }),
            Handlebars.registerHelper("isNewCurrency", function (e, t) {
              return new Date(e) < new Date() - 2592e6
                ? t.inverse(this)
                : t.fn(this);
            }),
            Handlebars.registerHelper("isInArr", function (e, t, r) {
              return (
                "string" == typeof t && (t = [t]),
                (t = t.map(function (e) {
                  return e.toLowerCase();
                })),
                t.indexOf(e) > -1 ? r.fn(this) : r.inverse(this)
              );
            }),
            Handlebars.registerHelper("isNotInArr", function (e, t, r) {
              return (
                "string" == typeof t && (t = [t]),
                (t = t.map(function (e) {
                  return e.toLowerCase();
                })),
                t.indexOf(e) <= -1 ? r.fn(this) : r.inverse(this)
              );
            }),
            Handlebars.registerHelper("lr_compare", function (e, t, r) {
              if (arguments.length < 3)
                throw new Error(
                  "Registered Helper: 'compare' - needs 2 parameters to compare"
                );
              var n = r.hash.operator || "==",
                a = {
                  "==": function (e, t) {
                    return e == t;
                  },
                  "===": function (e, t) {
                    return e === t;
                  },
                  "!=": function (e, t) {
                    return e != t;
                  },
                  "<": function (e, t) {
                    return e < t;
                  },
                  ">": function (e, t) {
                    return e > t;
                  },
                  "<=": function (e, t) {
                    return e <= t;
                  },
                  ">=": function (e, t) {
                    return e >= t;
                  },
                  typeof: function (e, t) {
                    return d(e) == t;
                  },
                };
              if (!a[n])
                throw new Error(
                  "Registered Helper: 'compare' - needs a valid operator. Invalide: " +
                    n
                );
              var i = a[n](e, t);
              return i ? r.fn(this) : r.inverse(this);
            });
          var a = function (e, r, n) {
              var a = t(r).html(),
                i = Handlebars.compile(a);
              n.html(i(e));
            },
            i = function (e) {
              t(".table__asset-count").text(e);
            },
            o = function (e) {
              t(".table__asset-filter-title").text(e);
            };
          "page" === e.template.name &&
            "crypto_currencies" === e.template.suffix &&
            (t(".subbar").appendTo(".header--fixed"),
            t(".crypto__table-data").length &&
              t
                .get({
                  url: t(".crypto__table-data").data("tableUrl"),
                  dataType: "json",
                })
                .then(function (e) {
                  if (e.length) {
                    for (var r = e, s = 0; s < r.length; s++)
                      r[s].search_terms = n(r[s]);
                    var c = (function (e) {
                      var r = e.reduce(function (e, t) {
                          return (
                            e[t.support.app_type]
                              ? (e[t.support.app_type] += 1)
                              : null != t.support.app_type &&
                                (e[t.support.app_type] = 1),
                            e
                          );
                        }, {}),
                        n = [];
                      return (
                        t.each(r, function (e, t) {
                          n.push({ name: e, count: t });
                        }),
                        n
                      );
                    })(r);
                    c = (function (e, t) {
                      var r = e.reduce(function (e, t) {
                        return e + parseInt(t.count);
                      }, 0);
                      return e.unshift({ name: "All assets", count: r }), e;
                    })(c);
                    var l = { group: 1, data: c };
                    a(
                      r,
                      "#crypto_currency-handlebar",
                      t(".crypto__table .crypto__table__body")
                    ),
                      a(
                        l,
                        "#crypto_currency_filter-handlebar",
                        t(".crypto__filter-list--table")
                      ),
                      (l.group = 2),
                      a(
                        l,
                        "#crypto_currency_filter-handlebar",
                        t(".crypto__filter-list--header")
                      ),
                      i(r.length),
                      (d = t(".table__main-heading")),
                      (u = t(".crypto__filter")),
                      (p = "crypto__filter--active"),
                      d.on("click", function () {
                        u.toggleClass(p);
                      }),
                      t(document).on("click", function (e) {
                        0 === t(e.target).closest(d).length && u.removeClass(p);
                      }),
                      (function (e, r, n, a, s) {
                        var c = "." + a,
                          l = ".table__row--empty";
                        e.keyup(function () {
                          var e = t(".crypto__table__body .table__row");
                          if (t(this).val().length >= 3) {
                            for (
                              var r = t(this).val().toLowerCase(), s = 0;
                              s < e.length;
                              s++
                            ) {
                              var d = t(e[s]);
                              d.data(n) && -1 != d.data(n).indexOf(r)
                                ? d.addClass(a)
                                : d.removeClass(a);
                            }
                            t(c).length > 0
                              ? i(t(c).length)
                              : (t(l).addClass(a), i(0)),
                              o("All Assets");
                          } else e.addClass(a), t(l).removeClass(a), i(t(c).length), o("All Assets");
                        });
                      })(
                        t(".crypto__input"),
                        0,
                        "searchTerms",
                        "table__row--active"
                      ),
                      (function (e, r, n, a, s, c) {
                        var l = "." + a,
                          d = ".table__row--empty";
                        e.on("change", function () {
                          var e = t(".crypto__table__body .table__row");
                          if ("All assets" != t(this).val()) {
                            for (
                              var r = t(this).val(), s = 0;
                              s < e.length;
                              s++
                            ) {
                              var c = t(e[s]);
                              c.data(n) && c.data(n) == r
                                ? c.addClass(a)
                                : c.removeClass(a);
                            }
                            t(l).length > 0
                              ? (i(t(l).length), o(t(this).val()))
                              : (t(d).addClass(a), i(0), o(t(this).val()));
                          } else e.addClass(a), t(d).removeClass(a), i(t(l).length), o(t(this).val());
                          !(function (e, t) {
                            e.removeClass(t);
                          })(t(".crypto__filter"), "crypto__filter--active");
                        });
                      })(
                        t(".crypto__filter-input"),
                        0,
                        "filterTerms",
                        "table__row--active"
                      );
                  } else console.error("File Error");
                  var d, u, p;
                })
                .fail(function (e) {
                  console.error(
                    "File error: " + e.status + " - " + e.statusText
                  );
                }));
        })((window.theme = window.theme || {}), jQuery),
        r(507),
        r(458),
        r(555),
        r(739),
        r(256),
        r(174),
        "resource-center" === theme.template.suffix)
      ) {
        var oe = function (e) {
            e.srcElement.parentElement.classList.toggle("active");
          },
          se = document.getElementById("resources_search"),
          ce = function () {
            var e = document.getElementById("resource-center-tile-grid"),
              t = "";
            (t +=
              '\n  <div class="no-results">\n    <span class="no-results-title h4">'
                .concat(
                  window.translation_strings.rrc_no_results,
                  '</span>\n    <span class="no-results-subline h6">'
                )
                .concat(
                  window.translation_strings.rrc_come_back,
                  "</span>\n  </div>\n  "
                )),
              (e.innerHTML = t);
          },
          le = function (e, t) {
            return t.title.toLocaleLowerCase().indexOf(e) > -1;
          },
          de =
            ((Y = function (e) {
              var t,
                r = e.target.value.trim().toLocaleLowerCase(),
                n = ue(),
                a = n.list_filtered,
                i = n.rrc_filtered_list,
                o = n.rrc_full_list;
              if ("" === r)
                if (((n.search_filter = !1), a)) {
                  (n.current_page = 1), (n.search_filter = !1), pe(n);
                  var s = we(i, ue().current_page, ue().records_per_page);
                  xe(s);
                } else {
                  (n.current_page = 1), (n.rrc_filtered_list = []), pe(n);
                  var c = we(o, ue().current_page, ue().records_per_page);
                  xe(c);
                }
              else if (
                (t = a
                  ? i.filter(function (e) {
                      return le(r, e);
                    })
                  : o.filter(function (e) {
                      return le(r, e);
                    })).length
              ) {
                (n.search_filter = !0),
                  (n.current_page = 1),
                  (n.rrc_filtered_list = t),
                  pe(n);
                var l = we(t, ue().current_page, ue().records_per_page);
                xe(l);
              } else
                ce(),
                  (n.current_page = 1),
                  (n.search_filter = !0),
                  (n.rrc_filtered_list = []),
                  pe(n),
                  ye();
            }),
            500,
            function () {
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r];
              clearTimeout(Z);
              var n = this;
              Z = setTimeout(function () {
                return Y.apply(n, t);
              }, 500);
            });
        se.addEventListener("input", de);
        var ue = function () {
            return JSON.parse(sessionStorage.getItem("rcc_list_state"));
          },
          pe = function (e) {
            return sessionStorage.setItem("rcc_list_state", JSON.stringify(e));
          },
          fe = function () {
            var e = ue(),
              t = e.list_filtered,
              r = e.rrc_filtered_list,
              n = e.rrc_full_list,
              a = e.records_per_page,
              i = e.search_filter;
            return t || i ? Math.ceil(r.length / a) : Math.ceil(n.length / a);
          },
          me = function () {
            var e = ue(),
              t = e.current_page,
              r = e.list_filtered,
              n = e.rrc_full_list,
              a = e.rrc_filtered_list,
              i = e.records_per_page,
              o = e.search_filter;
            if (1 !== t) {
              var s;
              (e.current_page = t - 1), (s = r || o ? a : n), pe(e);
              var c = we(s, e.current_page, i);
              xe(c);
            }
          },
          he = function () {
            var e = ue(),
              t = e.current_page,
              r = e.list_filtered,
              n = e.rrc_full_list,
              a = e.rrc_filtered_list,
              i = e.records_per_page,
              o = e.search_filter;
            if (t < fe()) {
              var s;
              (e.current_page = t + 1), (s = r || o ? a : n), pe(e);
              var c = we(s, e.current_page, i);
              xe(c);
            }
          },
          _e = function (e) {
            for (var t = [], r = 1; r <= e; r++) {
              var n = "pg-".concat(r);
              t.push(n);
            }
            return t;
          },
          ve = function (e) {
            var t = [];
            return (
              e.forEach(function (e) {
                var r,
                  n = ((r = e), document.getElementById(r));
                n && t.push(n);
              }),
              t
            );
          },
          ge = function (e) {
            var t,
              r,
              n = ue(),
              a = n.current_page,
              i = n.rrc_filtered_list,
              o = n.rrc_full_list,
              s = n.records_per_page,
              c = n.list_filtered,
              l = n.search_filter,
              d =
                ((r = (t = e.target.id.split("-"))[t.length - 1]), parseInt(r));
            if (d !== a) {
              (n.current_page = d), pe(n);
              var u = we(c || l ? i : o, n.current_page, s);
              pe(n), xe(u);
            }
          },
          be = function (e) {
            return "pg-".concat(e);
          },
          ye = function () {
            var e = ue().current_page,
              t = document.getElementById("paginator-controls");
            t.innerHTML = "";
            var r = "",
              n = fe();
            if (n <= 5)
              for (var a = 0; a < n; a++) {
                var i = a + 1;
                r += '<span id="'
                  .concat(be(i), '" ')
                  .concat(
                    e === i ? "data-active='active'" : "data-active=''",
                    " >"
                  )
                  .concat(i, "</span>");
              }
            else if (n > 5)
              if (e > 5 && n - e > 5)
                for (var o = 0; o < n; o++) {
                  var s = o + 1,
                    c = s + 1,
                    l = s - 1;
                  s === e &&
                    ((r += "<span>...</span>"),
                    (r += '<span id="'
                      .concat(be(l), '" >')
                      .concat(l, "</span>")),
                    (r += '<span id="'
                      .concat(be(s), '" ')
                      .concat(
                        e === s ? "data-active='active'" : "data-active=''",
                        " >"
                      )
                      .concat(s, "</span>")),
                    (r += '<span id="'
                      .concat(be(c), '">')
                      .concat(c, "</span>")),
                    (r += "<span>...</span>"));
                }
              else if (n - e <= 5) {
                r += "<span>...</span>";
                for (var d = n - 5; d <= n; d++) {
                  var u = d;
                  r += '<span id="'
                    .concat(be(u), '" ')
                    .concat(
                      e === u ? "data-active='active'" : "data-active=''",
                      " >"
                    )
                    .concat(u, "</span>");
                }
              } else {
                for (var p = 0; p < 5; p++) {
                  var f = p + 1;
                  r += '<span id="'
                    .concat(be(f), '" ')
                    .concat(
                      e === f ? "data-active='active'" : "data-active=''",
                      " >"
                    )
                    .concat(f, "</span>");
                }
                r += "<span>...</span>";
              }
            t.innerHTML = r;
            var m = document.getElementById("pgDown"),
              h = document.getElementById("pgUp");
            (m.style.visibility = 0 === n ? "hidden" : ""),
              (h.style.visibility = 0 === n ? "hidden" : "");
          },
          we = function (e, t, r) {
            var n,
              a,
              i,
              o,
              s = ue(),
              c = [];
            s.page_listener_status &&
              ((i = document.getElementById("pgDown")),
              (o = document.getElementById("pgUp")),
              i.removeEventListener("click", me),
              o.removeEventListener("click", he),
              (n = fe()),
              (a = _e(n)),
              ve(a).forEach(function (e) {
                e.removeEventListener("click", ge);
              }),
              (s.page_listener_status = !1),
              pe(s));
            for (var l = (t - 1) * r; l < t * r; l++) {
              var d = e[l];
              d && c.push(d);
            }
            return (
              ue().page_listener_status ||
                (ye(),
                (function () {
                  var e,
                    t,
                    r = document.getElementById("pgDown"),
                    n = document.getElementById("pgUp");
                  r.addEventListener("click", me),
                    n.addEventListener("click", he),
                    (e = fe()),
                    (t = _e(e)),
                    ve(t).forEach(function (e) {
                      e.addEventListener("click", ge);
                    });
                })(),
                (s.page_listener_status = !0),
                pe(s)),
              c
            );
          },
          $e = function () {
            var e = document.getElementById("rrc-modal-wrapper");
            ke(), (e.style.display = "none");
          },
          ke = function () {
            document.getElementById("rrc_backdrop").classList.toggle("visible");
          },
          xe = function (e) {
            var t = document.getElementById("resource-center-tile-grid");
            (t.innerHTML = ""),
              Object.entries(e).forEach(function (e) {
                var r = G(e, 2),
                  n = r[0],
                  a = r[1],
                  i = a.thumbnail_small,
                  o = a.type,
                  s = a.thumbnail_big,
                  c = (function (e, t, r) {
                    var n = document.createElement("div");
                    (n.dataset.thmb = r), (n.dataset.yturl = t);
                    var a = "tile-" + e;
                    return (
                      (n.id = a), (n.className = "tile-container  rrc-thumb"), n
                    );
                  })(n, a.url, s),
                  l = (function (e, t) {
                    var r = document.createElement("div");
                    r.className = "tile-image-container";
                    var n = document.createElement("img");
                    return (
                      (n.className = "tile-image"),
                      (n.src = e),
                      (n.alt = t),
                      r.append(n),
                      r
                    );
                  })(i, o),
                  d = (function (e) {
                    var t = document.createElement("span");
                    return (t.innerText = e), (t.className = "tile-file"), t;
                  })(o);
                c.append(l), c.append(d), t.append(c);
              }),
              document.querySelectorAll("div.rrc-thumb").forEach(function (e) {
                return e.addEventListener("click", function (t) {
                  var r = e.dataset,
                    n = r.thmb,
                    a = r.yturl;
                  !(function (e) {
                    var t,
                      r,
                      n,
                      a,
                      i = document.getElementById("rrc-modal-wrapper"),
                      o = document.getElementById("rcc-img-container"),
                      s =
                        ((r = (t = e).alt),
                        (n = t.thmb),
                        (a = t.yturl),
                        "vid" === r
                          ? '\n    <iframe\n      src="'
                              .concat(
                                a,
                                '"\n      title="" width="100%" height="400" frameborder="0"\n      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>\n    </iframe>\n    <input type="hidden" value="'
                              )
                              .concat(
                                a,
                                '" id="yt_download_link">\n    <button class="row button secondary" id="copy_to_clipboard">'
                              )
                              .concat(
                                window.translation_strings.rrc_copy_url,
                                "</button>\n    "
                              )
                          : '\n    <img src="'
                              .concat(n, '" alt="')
                              .concat(
                                r,
                                '">\n    <a class="row button secondary download-link" href="'
                              )
                              .concat(a, '" target="_blank" download>')
                              .concat(
                                window.translation_strings.rrc_download,
                                "</a>\n    "
                              ));
                    (o.innerHTML = s), (i.style.display = "block");
                    var c = document.getElementById("copy_to_clipboard");
                    c &&
                      c.addEventListener("click", function () {
                        var e = document
                          .getElementById("yt_download_link")
                          .value.replace("/embed/", "/watch?v=");
                        (e = e.replace(
                          "www.youtube-nocookie.com",
                          "www.youtube.com"
                        )),
                          navigator.clipboard.writeText(e);
                      }),
                      ke();
                  })({ alt: t.target.alt, thmb: n, yturl: a });
                });
              });
          };
        if (
          ((Q = !1),
          (V = window.location.href) && (Q = V.includes("resource-center")),
          Q)
        ) {
          var Ce = document.getElementById("dataJson");
          if (Ce)
            (J = (W = Ce.dataset.jsonUrl).includes("?") ? W.split("?")[0] : W),
              fetch(J)
                .then(
                  (function () {
                    var e = l(
                      p().mark(function e(t) {
                        var r, n;
                        return p().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (200 !== t.status) {
                                  e.next = 7;
                                  break;
                                }
                                return (e.next = 3), t.text();
                              case 3:
                                (n = e.sent), (r = JSON.parse(n)), (e.next = 8);
                                break;
                              case 7:
                                r = { res: [] };
                              case 8:
                                return e.abrupt("return", r);
                              case 9:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()
                )
                .then(function (e) {
                  var t,
                    r = e.rrc;
                  if (r.length) {
                    var n = (function (e) {
                        var t = {
                          list_filtered: !1,
                          list_filters: [],
                          rrc_filtered_list: [],
                          rrc_full_list: e,
                          current_page: 1,
                          records_per_page: 9,
                          page_listener_status: !1,
                          search_filter: !1,
                        };
                        return pe(t), t;
                      })(r),
                      a = n.current_page,
                      i = n.records_per_page,
                      o = we(r, a, i);
                    xe(o),
                      (t = document.querySelectorAll("[class|='cb-select']"))
                        .length &&
                        t.forEach(function (e) {
                          e.addEventListener("click", function (e) {
                            var t;
                            !(function (e) {
                              var t = ue(),
                                r = t.list_filters;
                              if (r.includes(e)) {
                                var n = r.indexOf(e);
                                r.splice(n, 1), (t.list_filters = r), pe(t);
                              } else r.push(e), (t.list_filters = r), pe(t);
                            })(e.target.value),
                              (function () {
                                var e = ue(),
                                  t = e.list_filters,
                                  r = e.rrc_full_list,
                                  n = e.search_filter,
                                  a = e.rrc_filtered_list;
                                if (t.length) {
                                  var i,
                                    o = new Set();
                                  (i = n ? a : r),
                                    t.forEach(function (e) {
                                      i.filter(function (t) {
                                        var r;
                                        if (
                                          ("pdf-pr" === e || (r = e),
                                          (r === t.type) |
                                            (r === t.product) |
                                            (r === t.topic))
                                        ) {
                                          var n = JSON.stringify(t);
                                          return o.add(n), t;
                                        }
                                      });
                                    });
                                  var s = [];
                                  o.forEach(function (e) {
                                    s.push(JSON.parse(e));
                                  }),
                                    (e.rrc_filtered_list = s),
                                    (e.list_filtered = !0),
                                    pe(e);
                                } else
                                  (e.list_filtered = !1),
                                    (e.rrc_filtered_list = n ? a : []),
                                    pe(e);
                              })();
                            var r = ue(),
                              n = r.list_filtered,
                              a = r.rrc_filtered_list,
                              i = r.rrc_full_list,
                              o = r.search_filter;
                            if (o && n) t = a;
                            else if (o || n)
                              if (o && !n) {
                                var s =
                                  document.getElementById(
                                    "resources_search"
                                  ).value;
                                (t = i.filter(function (e) {
                                  return le(s, e);
                                })),
                                  (r.rrc_filtered_list = t);
                              } else t = !o && n ? a : i;
                            else t = i;
                            (r.current_page = 1), pe(r);
                            var c = we(
                              t,
                              ue().current_page,
                              ue().records_per_page
                            );
                            c.length ? xe(c) : ce();
                          });
                        }),
                      document
                        .getElementById("close-modal")
                        .addEventListener("click", $e);
                  }
                })
                .catch(function (e) {
                  sessionStorage.setItem(
                    "rcc_list_state",
                    JSON.stringify(initialListState)
                  ),
                    console.log("An errror occoured !!!!", e);
                });
        }
        var je = document.getElementById("rrc-accordion-product"),
          Ie = document.getElementById("rrc-accordion-type");
        je.addEventListener("click", oe), Ie.addEventListener("click", oe);
      }
      function Se(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) e[n] = r[n];
        }
        return e;
      }
      r(73),
        r(127),
        $(function () {
          if ("stax-marketing" === theme.template.suffix) {
            var t = window.location.pathname.includes("/ar/"),
              r = t ? "rtl" : "ltr";
            $(".js-stax-more-features-slider")
              .attr("dir", r)
              .slick({
                prevArrow: ".js-stax-more-features-prev",
                nextArrow: ".js-stax-more-features-next",
                slidesToShow: 3,
                slidesToScroll: 3,
                swipeToSlide: !1,
                touchMove: !1,
                infinite: t,
                rtl: !1,
                responsive: [
                  {
                    breakpoint: 992,
                    settings: {
                      slidesToShow: 2.25,
                      slidesToScroll: 2,
                      swipeToSlide: !0,
                      touchMove: !0,
                      infinite: !1,
                      rtl: t,
                    },
                  },
                  {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 1.25,
                      slidesToScroll: 1,
                      swipeToSlide: !0,
                      touchMove: !0,
                      infinite: !1,
                      rtl: t,
                    },
                  },
                ],
              })
              .on("setPosition", function (e, t) {
                t.$slides.css("height", t.$slideTrack.height() + "px");
              });
          }
          if ("stax" === theme.template.suffix) {
            var n = window.location.pathname.includes("/ar/"),
              a = n ? "rtl" : "ltr";
            $(".js-stax-more-features-slider")
              .attr("dir", a)
              .slick({
                prevArrow: ".js-stax-more-features-prev",
                nextArrow: ".js-stax-more-features-next",
                infinite: !1,
                slidesToShow: 3,
                slidesToScroll: 3,
                swipeToSlide: !1,
                touchMove: !1,
                responsive: [
                  { breakpoint: 4e3, settings: "unslick" },
                  e({ breakpoint: 690, settings: "slick" }, "settings", {
                    slidesToShow: 1.25,
                    slidesToScroll: 1,
                    swipeToSlide: !0,
                    touchMove: !0,
                    rtl: n,
                  }),
                ],
              })
              .on("setPosition", function (e, t) {
                t.$slides.css("height", t.$slideTrack.height() + "px");
              });
          }
        }),
        r(674);
      var Oe = (function e(t, r) {
        function n(e, n, a) {
          if ("undefined" != typeof document) {
            "number" == typeof (a = Se({}, r, a)).expires &&
              (a.expires = new Date(Date.now() + 864e5 * a.expires)),
              a.expires && (a.expires = a.expires.toUTCString()),
              (e = encodeURIComponent(e)
                .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                .replace(/[()]/g, escape));
            var i = "";
            for (var o in a)
              a[o] &&
                ((i += "; " + o),
                !0 !== a[o] && (i += "=" + a[o].split(";")[0]));
            return (document.cookie = e + "=" + t.write(n, e) + i);
          }
        }
        return Object.create(
          {
            set: n,
            get: function (e) {
              if ("undefined" != typeof document && (!arguments.length || e)) {
                for (
                  var r = document.cookie ? document.cookie.split("; ") : [],
                    n = {},
                    a = 0;
                  a < r.length;
                  a++
                ) {
                  var i = r[a].split("="),
                    o = i.slice(1).join("=");
                  try {
                    var s = decodeURIComponent(i[0]);
                    if (((n[s] = t.read(o, s)), e === s)) break;
                  } catch (e) {}
                }
                return e ? n[e] : n;
              }
            },
            remove: function (e, t) {
              n(e, "", Se({}, t, { expires: -1 }));
            },
            withAttributes: function (t) {
              return e(this.converter, Se({}, this.attributes, t));
            },
            withConverter: function (t) {
              return e(Se({}, this.converter, t), this.attributes);
            },
          },
          {
            attributes: { value: Object.freeze(r) },
            converter: { value: Object.freeze(t) },
          }
        );
      })(
        {
          read: function (e) {
            return (
              '"' === e[0] && (e = e.slice(1, -1)),
              e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
            );
          },
          write: function (e) {
            return encodeURIComponent(e).replace(
              /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
              decodeURIComponent
            );
          },
        },
        { path: "/" }
      );
      const Ee = Oe;
      function Te(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function qe(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Le(t) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? qe(Object(n), !0).forEach(function (r) {
                e(t, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : qe(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var Ae = "userLanguage",
        Pe = {},
        He = {
          ar: {
            title_1: "موقعنا الآن متاح باللغة ",
            title_2: ". هل تريد تغيير اللغة؟",
            cta_yes: "نعم ، من فضلك",
            cta_no: "لا، لا داعيَ",
            description:
              "يمكنك الرجوع إلى اللغة الإنجليزية في أي وقت بالنقر على قائمة اللغة في الزاوية العليا اليمنى من الصفحة.",
          },
          de: {
            title_1: "Unsere Website gibt es jetzt auch auf ",
            title_2: ". Möchten Sie die Sprache wechseln?",
            cta_yes: "Ja, bitte",
            cta_no: "Nein, danke",
            description:
              "Wenn Sie zur englischsprachigen Website zurückkehren möchten, können Sie dies jederzeit über das Sprachmenü oben rechts auf der Seite tun.",
          },
          fr: {
            title_1: "Notre site Web est désormais disponible en ",
            title_2: ". Souhaitez-vous changer de langue ?",
            cta_yes: "Oui, volontiers",
            cta_no: "Non, merci",
            description:
              "Vous pouvez revenir à l’anglais à tout moment en cliquant sur le menu des langues en haut à droite de la page.",
          },
          en: {
            title_1: "Our Website now exists in ",
            title_2: ". Do you want to change languages?",
            cta_yes: "Yes, please",
            cta_no: "No, I'm good",
            description:
              "You can revert to English at any time by clicking on the language menu on the top right corner of the page.",
          },
          es: {
            title_1: "Nuestro sitio web ahora está disponible en ",
            title_2: ". ¿Deseas cambiar de idioma?",
            cta_yes: "Sí, por favor",
            cta_no: "No es necesario",
            description:
              "Puedes volver al inglés cuando quieras, haciendo clic en el menú de idioma en la esquina superior derecha de la página.",
          },
          ja: {
            title_1: "当ウェブサイトが対応する言語はこちら： ",
            title_2: " 言語を変更しますか?",
            cta_yes: "はい。変更します。",
            cta_no: "いいえ。結構です。",
            description:
              "ページの右上にある言語メニューから、いつでも英語に再設定できます。",
          },
          ko: {
            title_1: "이제 웹사이트가 다음 언어로 지원됩니다: ",
            title_2: " 언어를 변경하시겠습니까?",
            cta_yes: "네, 변경해 주세요",
            cta_no: "아니오, 필요 없습니다",
            description:
              "페이지 오른쪽 상단의 언어 메뉴를 클릭하여 언제든지 다시 영어로 전환할 수 있습니다.",
          },
          ru: {
            title_1: "Теперь наш сайт поддерживает и ",
            title_2: " язык. Хотите поменять?",
            cta_yes: "Да",
            cta_no: "Нет",
            description:
              "Вы сможете в любой момент переключиться обратно на английский язык. Для этого необходимо выбрать соответствующую опцию в языковом меню. Оно находится в правом верхнем углу страницы.",
          },
          tr: {
            title_1: "Web sitemiz artık bu dilde mevcut: ",
            title_2: ". Dili değiştirmek istiyor musunuz?",
            cta_yes: "Evet, lütfen",
            cta_no: "Hayır, teşekkürler",
            description:
              "İstediğiniz zaman sayfanın sağ üst köşesindeki dil menüsüne tıklayarak dili tekrar İngilizce yapabilirsiniz.",
          },
          "zh-CN": {
            title_1: "我们的网站现已推出",
            title_2: "您想更改语言吗？",
            cta_yes: "好的，更改",
            cta_no: "不用",
            description: "您可以点击页面右上角的语言菜单，随时恢复为英文版。",
          },
        };
      document.location.hostname.endsWith(".ledger.com") &&
        (Pe.domain = ".ledger.com");
      var De = function () {
          var e = Ee.get(Ae) || navigator.language.slice(0, 2);
          return (
            window.__LEDGER__.availLanguages.find(function (t) {
              return t.isoCode === e;
            }) || {}
          );
        },
        Me = function (e) {
          Ee.set(Ae, e, Le(Le({}, Pe), {}, { expires: 365 }));
        },
        Ne = function (e) {
          for (
            var t = window.__LEDGER__,
              r = t.availLanguages,
              n = t.storeLanguage,
              a = document.location,
              i = a.pathname,
              o = a.origin,
              s = r.find(function (t) {
                return t.isoCode === e;
              }),
              c = i.slice(n.rootUrl.length);
            c.startsWith("/");

          )
            c = c.slice(1);
          var l = ""
            .concat(o)
            .concat(s.rootUrl)
            .concat(c.length ? "/".concat(c) : "");
          Me(e), document.location.assign(l);
        },
        Fe = function (e, t) {
          return He[e.isoCode] ? He[e.isoCode][t] : null;
        };
      const ze = {
        onLoad: function () {
          var e = window.__LEDGER__.availLanguages,
            t = __LEDGER__.storeLanguage,
            r = De(),
            n = [
              document.querySelector("#language-popup"),
              document.querySelector("#language-popup-no"),
              document.querySelector("#language-popup-set-default"),
              document.querySelectorAll(".localeItem"),
              document.querySelector("#user-language"),
              document.querySelector("#language-popup-close"),
              document.querySelector("#discoverability_title_1"),
              document.querySelector("#discoverability_title_2"),
              document.querySelector("#discoverability_description"),
            ],
            a = n[0],
            i = n[1],
            o = n[2],
            s = n[3],
            c = n[4],
            l = n[5],
            d = n[6],
            u = n[7],
            p = n[8];
          (c.innerText = (function (e) {
            return "".concat(e.name, " - ").concat(e.isoCode);
          })(r)),
            (d.innerText = Fe(r, "title_1")),
            (u.innerText = Fe(r, "title_2")),
            (p.innerText = Fe(r, "description")),
            (o.innerText = Fe(r, "cta_yes")),
            (i.innerText = Fe(r, "cta_no")),
            "ar" == r.isoCode
              ? a.classList.add("forced-rtl")
              : a.classList.add("forced-ltr");
          var f,
            m = (function (e, t) {
              var r =
                ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
              if (!r) {
                if (
                  Array.isArray(e) ||
                  (r = (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return Te(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(e)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? Te(e, t)
                          : void 0
                      );
                    }
                  })(e)) ||
                  (t && e && "number" == typeof e.length)
                ) {
                  r && (e = r);
                  var n = 0,
                    a = function () {};
                  return {
                    s: a,
                    n: function () {
                      return n >= e.length
                        ? { done: !0 }
                        : { done: !1, value: e[n++] };
                    },
                    e: function (e) {
                      throw e;
                    },
                    f: a,
                  };
                }
                throw new TypeError(
                  "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              }
              var i,
                o = !0,
                s = !1;
              return {
                s: function () {
                  r = r.call(e);
                },
                n: function () {
                  var e = r.next();
                  return (o = e.done), e;
                },
                e: function (e) {
                  (s = !0), (i = e);
                },
                f: function () {
                  try {
                    o || null == r.return || r.return();
                  } finally {
                    if (s) throw i;
                  }
                },
              };
            })(s);
          try {
            for (m.s(); !(f = m.n()).done; )
              f.value.addEventListener("click", function (e) {
                e.preventDefault(), Ne(e.target.getAttribute("lang"));
              });
          } catch (e) {
            m.e(e);
          } finally {
            m.f();
          }
          r.isoCode === t.isoCode ||
            !(function () {
              var e = De();
              return window.__LEDGER__.availLanguages.some(function (t) {
                return t.isoCode === e.isoCode;
              });
            })() ||
            document.location.pathname.startsWith("/apps/flow") ||
            (function () {
              for (var e = document.cookie.split(";"), t = 0; t < e.length; t++)
                if ("userLanguage" == e[t].split("=")[0].trim()) return !0;
              return !1;
            })() ||
            ((c.textContent = e.find(function (e) {
              return e.isoCode === r.isoCode;
            }).name),
            a.classList.remove("is-hidden"),
            i.addEventListener("click", function () {
              Me(t.isoCode), a.classList.add("is-hidden");
            }),
            l.addEventListener("click", function () {
              Me(t.isoCode), a.classList.add("is-hidden");
            }),
            o.addEventListener("click", function () {
              a.classList.add("is-hidden"), Me(r.isoCode), Ne(r.isoCode);
            }));
        },
      };
      function Ue(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Be(t) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? Ue(Object(n), !0).forEach(function (r) {
                e(t, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Ue(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      jQuery(document).ready(function () {
        function e(e) {
          window.location.href = e;
        }
        jQuery(".all-clickable").each(function () {
          var t = jQuery(this).find("a:first-of-type").attr("href");
          jQuery(this).on("click", function () {
            var r = jQuery(this).find("input"),
              n = jQuery(this).find(".no-all-clickable");
            void 0 !== r
              ? jQuery(event.target).closest(r).length || e(t)
              : (void 0 !== n && jQuery(event.target).closest(n).length) ||
                e(t);
          });
        }),
          a(document.getElementsByClassName("product-card-col-single")).forEach(
            function (e) {
              e.onclick = function () {
                var t,
                  r = e.closest(".collection-home-products"),
                  n =
                    r.previousElementSibling.querySelector(
                      ".title"
                    ).textContent,
                  i = {
                    position: a(
                      r.getElementsByClassName("product-card-col-single")
                    ).indexOf(e),
                    name: e.querySelector(".title").textContent.trim(),
                    id: e.querySelector(".tile__variant__product").value,
                    price:
                      ((t = e
                        .querySelector(".flow-price__item")
                        .textContent.trim()
                        .replace(/\D/g, "")),
                      t.slice(0, -2) + "." + t.slice(-2)),
                    category: n,
                  };
                dataLayer.push({
                  event: "productClick",
                  ecommerce: {
                    currencyCode: theme.shop.currency,
                    click: { actionField: { list: n }, products: [i] },
                  },
                });
              };
            }
          );
      }),
        (window.__LEDGER__ = Be(
          Be({}, window.__LEDGER__),
          {},
          { language: ze }
        ));
    })();
})();
