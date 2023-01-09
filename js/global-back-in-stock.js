let gbisActivated = document.querySelectorAll('div.back-in-stock-feature')
if (gbisActivated.length > 0) {
  var BIS_482_MOD = ((namespace) => {
  var emailInput = document.getElementById('email')
  var notifyFormSubmitBtn = document.getElementById('submit-bis')
  var notifyForm = document.getElementById('notify-form-wrapper')
  var closeModalBtn = document.getElementById('close-modal')
  var successCloseloseModalBtn = document.getElementById('success-close-modal')
  var successDiv = document.getElementById('notify-success')
  var validityInfo = document.getElementById('email-warning-info')
  var email_valid_icon = document.getElementById('email-valid-status')
  var email_invalid_icon = document.getElementById('email-inivalid-status')
  var bisNotice = document.getElementById('bis-notice')
  var isEmailValid = false // init email validity
  // var emailMeBis = 'Email me'
  // var outOfStockBis = 'Out of stock'
  var selectedVariantId // The currently selected link
  var bisList
  var selectedCta

  var {
    template: { name: templateName, suffix },
  } = theme

  // Handle cases for index, page and product
  switch (templateName) {
    case 'index':
      // Fn for visible links on index page
      function indexPageLinksCb(event) {
        event.stopPropagation()
        setPageLinkVid(this, '.tile__variant__id')
        displayModal()
      }
      addClickHandlerToLinks(indexPageLinksCb)
      // Add event handler to email input
      emailInput.oninput = handleEmailInputChange
      // Add event handler to submit button
      notifyFormSubmitBtn.addEventListener('click', submitNotifyFormHandler)
      break
    case 'product':
      // Delay the execution until completion of jqurery
      setTimeout(() => {
        var ctaWithVariant = document.getElementById('bis-with-variant')
        var ctaWithoutVariant = document.getElementById('bis-without-variant') // Ledger Nano X case

        if (ctaWithVariant) {
          // First load of page CTA with variant case
          if (
            ctaWithVariant &&
            ctaWithVariant.getAttribute('data-oos') === 'true'
          ) {
            // enable the button
            var firstBtnDisabled = ctaWithVariant.disabled
            if (firstBtnDisabled) {
              ctaWithVariant.disabled = false
            }
            // Change the inner html value
            var firstBtnInputVal = ctaWithVariant.value
            if (
              // firstBtnInputVal === outOfStockBis
              firstBtnInputVal === window.translation_strings.out_of_stock_bis
            ) {
              // ctaWithVariant.value = emailMeBis
              ctaWithVariant.value = window.translation_strings.email_me_bis
            }
            // Remove any previous listener
            ctaWithVariant.removeEventListener('click', handleEmailMeBtnClick)
            // Add a click listener to the selectedInputButton
            ctaWithVariant.addEventListener('click', handleEmailMeBtnClick)
            // Notice should be visible
            bisNotice.style.display = 'flex'
          } else {
            // Hide the notification
            bisNotice.style.display = 'none'
          }

          // Bis button observer
          var buttonObserver = new MutationObserver(function (mutation) {
            // Notice is initially hidden
            bisNotice.style.display = 'none'

            const selectedMutation = mutation.filter(
              (mutationObj) => mutationObj.attributeName === 'value'
            )

            var selectedInputButton
            if (selectedMutation.length) {
              selectedInputButton = selectedMutation[0].target
              // From the selected input button, get te data attribute
              var variantOutOfStock =
                selectedInputButton.getAttribute('data-oos')

              // If data attribute is true,
              if (variantOutOfStock === 'true') {
                // Enable the button
                var buttonDisabled = selectedInputButton.disabled
                if (buttonDisabled) {
                  selectedInputButton.disabled = false
                }
                // Change the inner html value
                var selectedInputValue = selectedInputButton.value
                if (
                  selectedInputValue ===
                  window.translation_strings.out_of_stock_bis
                  // outOfStockBis
                ) {
                  selectedInputButton.value =
                  window.translation_strings.email_me_bis
                  // emailMeBis
                }
                // Show the notification banner on top of the button
                bisNotice.style.display = 'flex'
                // Remove the previous listener if it exists
                removePreviousListeners(
                  'click',
                  handleEmailMeBtnClick,
                  selectedInputButton
                )
                // Add a click listener to the selectedInputButton
                selectedInputButton.addEventListener(
                  'click',
                  handleEmailMeBtnClick
                )
              } else {
                // if the data attribute is false and product is in stock
                // Hide the notification
                bisNotice.style.display = 'none'
                // Remove the previous listener
                removePreviousListeners(
                  'click',
                  handleEmailMeBtnClick,
                  selectedInputButton
                )
              }
            }
          })

          // configure of the button observer:
          config = {
            attributes: true, // this is to watch for attribute changes.
          }
          // pass in the element to watch as well as the configuration
          buttonObserver.observe(ctaWithVariant, config)
        }

        if (ctaWithoutVariant) {
          // First load of page
          const ctaValue = ctaWithoutVariant.value.trim() //there is whitespace on the cta text
          if (suffix === 'nano-s-plus-genesis') {
            // enable the btn
            ctaWithoutVariant.disabled = false
            // Show the notification banner on top of the button
            bisNotice.style.display = 'flex'
            // Remove any previous listener
            ctaWithoutVariant.removeEventListener(
              'click',
              handleEmailMeBtnClick
            )
            // Add a click listener to the selectedInputButton
            ctaWithoutVariant.addEventListener('click', handleEmailMeBtnClick)
            // Add the submit email form  handler
            notifyFormSubmitBtn.addEventListener(
              'click',
              submitNotifyFormHandler
            )
          } else if ((suffix === 'nano-pod' || suffix === 'nano-case') && ctaValue === window.translation_strings.out_of_stock_bis) {
            // enable the btn
            ctaWithoutVariant.disabled = false
            // Change the btn cta
            // ctaWithoutVariant.value = emailMeBis
            ctaWithoutVariant.value = window.translation_strings.coming_soon_bis
            // Add click listener
            ctaWithoutVariant.addEventListener('click', handleEmailMeBtnClick)
            // Notice should be visible
            bisNotice.style.display = 'flex'
          } else if (
            ctaWithoutVariant &&
            // ctaValue === outOfStockBis
            ctaValue === window.translation_strings.out_of_stock_bis
          ) {
            // enable the btn
            ctaWithoutVariant.disabled = false
            // Change the btn cta
            // ctaWithoutVariant.value = emailMeBis
            ctaWithoutVariant.value = window.translation_strings.email_me_bis
            // Add click listener
            ctaWithoutVariant.addEventListener('click', handleEmailMeBtnClick)
            // Notice should be visible
            bisNotice.style.display = 'flex'
          }
        }
      }, 500)
      if (notifyForm) {
        // Add event handler to email input
        emailInput.oninput = handleEmailInputChange
        // Add event handler to submit button
        notifyFormSubmitBtn.addEventListener('click', submitNotifyFormHandler)
      }
      // handle case with other links on the product page
      // Fn for visible links on compare page
      function prodPageLinksCb(event) {
        event.preventDefault()
        setPageLinkVid(this, '.add-to-cart__variant')
        displayModal()
      }
      addClickHandlerToLinks(prodPageLinksCb)
      break
    case 'page':
      // Fn for visible links on compare page
      function comPageLinksCb(event) {
        event.preventDefault()
        setPageLinkVid(this, '.add-to-cart__variant')
        displayModal()
      }
      addClickHandlerToLinks(comPageLinksCb)
      // Add event handler to email input
      if (emailInput) {
        emailInput.oninput = handleEmailInputChange
      }
      // Add event handler to submit button
      if (notifyFormSubmitBtn) {
        notifyFormSubmitBtn.addEventListener('click', submitNotifyFormHandler)
      }
      break
    default:
    //console.log(`Sorry, no case for  ${templateName}.`);
  }

  // Email Me button handler
  function handleEmailMeBtnClick(event) {
    // Remove the notice
    if (bisNotice) {
      //bisNotice.style.display = "none";
    }
    // Display the form
    notifyForm.style.display = 'block'
    // Init the mail validity icons
    email_valid_icon.style.display = 'none'
    email_invalid_icon.style.display = 'none'
    // add modal css
    notifyForm.classList.add('add-to-cart__modal')
    // toggle the backdrop
    closeModalBtn.addEventListener('click', hideInfoModal)
    toggleBackdrop()
    // "this" refers to the "Email me" button
    // set the current "Email me" button for use later
    selectedCta = this
    setPageLinkVid(this, '.add-to-cart__variant')
    event.preventDefault()
  }

  function addClickHandlerToLinks(callback) {
    var visbleBisLinks = document.querySelectorAll('.read-more.notify-me')
    if (visbleBisLinks.length) {
      for (var bisLink of visbleBisLinks) {
        bisLink.addEventListener('click', callback)
      }
    }
  }

  function setPageLinkVid(linkNode, inputClass) {
    selectedVariantId = getVariantIdFromLink(linkNode, inputClass)
  }

  function getEnv() {
    var domainName = window.location.hostname
    var env = domainName === 'ledgerstore-dev.myshopify.com' ? 'dev' : 'prod'
    return env
  }
  var env = getEnv()

  function getBisListJsonPath() {
    return env === 'dev'
      ? '//cdn.shopify.com/s/files/1/2974/4858/t/278/assets/bis-dev.json?v=172470101947828623721666171974'
      : '//cdn.shopify.com/s/files/1/2974/4858/t/278/assets/bis-prod.json?v=20769747068588137261666171975'
  }
  function getNewsLetterListId() {
    return env === 'dev'
      ? 'e6a4dba4-4080-4d6a-b1b5-d70ff3717e1f'
      : '09625d4a-96b1-432e-a132-39de51a5ce9c'
  }

  // Fetch the BIS data list
  fetch(getBisListJsonPath())
    .then((res) => res.json())
    .then((data) => {
      bisList = data
    })
    .catch((err) => console.error(err))

  function submitNotifyFormHandler(e) {
    // Prevents the page from being reloaded on submit.
    e.preventDefault()
    if (isEmailValid && selectedVariantId) {
      //console.log('ok', bisList);
      var email = document.getElementById('email').value
      // Check if the news letter checkbox is available

      var filteredBisList = bisList.filter(
        (varMap) => varMap.variantID === selectedVariantId
      )

      if (filteredBisList.length) {
        var selectedList = filteredBisList[0]

        if (selectedList) {
          const { listId } = selectedList
          var checkbox = document.getElementById('subscribe-newsletter')
          // send the information to iterable
          if (checkbox.checked) {
            // With marketing permissions
            fetch(
              `https://links.iterable.com/lists/publicAddSubscriberForm?publicIdString=${listId.marketing_true}`,

              {
                method: 'POST',
                body: new URLSearchParams({
                  email,
                }),
                redirect: 'manual',
              }
            ).catch((error) => {
              console.error('There was an optin error')
            })
          } else {
            // Without marketing permissions
            fetch(
              `https://links.iterable.com/lists/publicAddSubscriberForm?publicIdString=${listId.marketing_false}`,
              {
                method: 'POST',
                body: new URLSearchParams({
                  email,
                }),
                redirect: 'manual',
              }
            ).catch((error) => {
              console.error('There was an opt out error')
            })
          }
          // Add the selected product to the product variant list
          fetch(
            `https://links.iterable.com/lists/publicAddSubscriberForm?publicIdString=${listId.prod_variant_list}`,
            {
              method: 'POST',
              body: new URLSearchParams({
                email,
              }),
              redirect: 'manual',
            }
          ).catch((error) => {
            console.error('There was an notify error!')
          })
          // Remove form
          notifyForm.style.display = 'none'
          // Display succss div
          successDiv.style.display = 'block'
          // Add modal style
          successDiv.classList.add('add-to-cart__modal')
          // Add a listener to hide the modal
          successCloseloseModalBtn.addEventListener('click', hideInfoModal)
          // disable the email me button
          if (selectedCta) {
            //console.log('ok go - 5');
            selectedCta.disabled = true
          }
        } else {
          // Error message to user
        }
      }
    }
  }

  function validateEmail(email) {
    var res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return res.test(email)
  }

  // Email input validation
  function handleEmailInputChange() {
    var { value } = emailInput

    if (validateEmail(value)) {
      isEmailValid = true

      //Enable the submit button
      notifyFormSubmitBtn.disabled = false
      // Hide message for invalid email
      validityInfo.style.display = 'none'
      // Set the mail validity icons
      email_valid_icon.style.display = 'block'
      email_invalid_icon.style.display = 'none'
      // Apply style on input
      emailInput.className = ''
      emailInput.classList.add('is-valid')
    } else {
      isEmailValid = false
      // Disable the submit button
      notifyFormSubmitBtn.disabled = true
      // Show friendly message to user
      validityInfo.style.display = 'block'
      // set the mail validity icons
      email_valid_icon.style.display = 'none'
      email_invalid_icon.style.display = 'block'
      // Apply style on input
      emailInput.className = ''
      emailInput.classList.add('is-error')
    }
  }

  // Remove listener util
  function removePreviousListeners(name, cb, element) {
    element.removeEventListener(name, cb)
  }

  // Toggle the modal backdrop
  function toggleBackdrop() {
    const backdropElement = document.getElementById('backdrop')
    backdropElement.classList.toggle('visible')
  }

  // Hide modal function
  function hideInfoModal() {
    toggleBackdrop()
    notifyForm.style.display = 'none'
    successDiv.style.display = 'none'
  }

  if (notifyForm) {
    // Initially disable the submit Button
    notifyFormSubmitBtn.disabled = true
    // Initially disable hide the info warning
    validityInfo.style.display = 'none'
    // Initially hide the notification form
    notifyForm.style.display = 'none'
    // initially hide the success div
    successDiv.style.display = 'none'
  }

  function getVariantIdFromLink(node, inputClass) {
    var ancestorForm = node.closest('form')
    var hiddenInput = ancestorForm.querySelector(inputClass)
    var variantId
    if (hiddenInput) {
      variantId = hiddenInput.value
    }

    return variantId
  }

  function displayModal() {
    notifyForm.style.display = 'block'
    notifyForm.classList.add('add-to-cart__modal')
    // Remove any previous listeners
    removePreviousListeners('click', hideInfoModal, closeModalBtn)
    closeModalBtn.addEventListener('click', hideInfoModal)
    toggleBackdrop()
  }

  // Fn for swatch link
  function bisLinkCallback(notifyLink) {
    setPageLinkVid(notifyLink, '.tile__variant__id')
    displayModal()
  }

  // Public Methods
  namespace.bisLinkCallback = bisLinkCallback

  return namespace
})(BIS_482_MOD || {})
}
