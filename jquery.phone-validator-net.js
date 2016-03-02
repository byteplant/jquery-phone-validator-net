(function ( $ ) {
  var baseUrl = "https://api.phone-validator.net/api/v2/verify"

  $.validatePhone = function(apiKey, countryCode, mode, locale){
    var apiKey = apiKey
    var countryCode = countryCode||"de"
    var mode = mode||"extensive"
    var locale = locale||"en-US"
    $.fn.validatePhone = function(cb, country, mode2, locale2) {
      countryCode = country||countryCode
      var mode = mode2||mode
      var locale = locale2||locale
      var phone = this.val();
      $.get(baseUrl + "?PhoneNumber=" + phone + "&CountryCode=" + countryCode + "&Mode=" + mode + "&APIKey=" + apiKey,
        $.proxy(function (res) {
          if (res.status == "VALID_CONFIRMED") {
            this.css('border-color', 'green');
          } else if (res.status == "VALID_UNCONFIRMED") {
            this.css('border-color', 'orange');
          } else if (res.status == "INVALID") {
            this.css('border-color', 'red');
          } else {
            this.css('border-color', 'black');
          }
          cb(res)
      }, this));
      return this;
    };
  }
}( jQuery ));
