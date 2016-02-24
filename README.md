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
    })
  })
  
  //response looks like that: 
    { 
      status: 200,                      // ==> http://www.email-validator.net/email-verification-results.html
      info: "OK - Valid Address",       // ==> http://www.email-validator.net/email-verification-results.html
      details: "Looong description",    // ==> http://www.email-validator.net/email-verification-results.html
      easyStatus: "VALID"               // VALID, SUSPECT or INVALID (to keep it simple)
    }
    
  });
  ```

## Release History

* 0.1.0 Initial release
