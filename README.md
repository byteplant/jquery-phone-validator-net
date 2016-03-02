jquery-phone-validator-net
=========

A small library providing a wrapper for [api.phone-validator.net](http://www.phone-validator.net/telefon-nummer-online-ueberpruefen-api.html) for jQuery

## Installation
  Download zip, extract and embed `jquery.phone-validator-net.js` to your HTML.
  This Plugin needs jQuery!
## Usage
See test.js and test.html
  ```js
  // Init only once
  $.validatePhone(APIKEY);

  // OnClick
  $("#submit").click(function () {
    $("#phone").validatePhone(function (response) {
      console.log(response);
    }, countryCodeIso2, mode, locale)
  })

  //response looks like that:
    /*
      status	VALID_CONFIRMED, VALID_UNCONFIRMED, INVALID or error: DELAYED, RATE_LIMIT_EXCEEDED, API_KEY_INVALID_OR_DEPLETED
      linetype	FIXED_LINE, MOBILE, VOIP, TOLL_FREE, PREMIUM_RATE, SHARED_COST, PERSONAL_NUMBER, PAGER, UAN, VOICEMAIL
      location	geographical location (city, county, state)
      countrycode	two letter ISO 3166-1 country code
      formatnational	phone number in national format
      formatinternational	phone number in international format
    */

  });
  ```

## Release History

* 0.1.0 Initial release
