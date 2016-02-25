$( document ).ready(function() {

  // Init only once
  $.validatePhone("YOUR API KEY");

  // OnClick
  $("#submit").click(function () {
    $("#phone").validatePhone(function (response) {
      console.log(response);
    }, $("#countrycode").val())
  })
});
