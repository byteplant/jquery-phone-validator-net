$( document ).ready(function() {

  // Init only once
  $.validatePhone("pv-72529d9a6f4a94b56e26b5a9d39b60e9");

  // OnClick
  $("#submit").click(function () {
    $("#phone").validatePhone(function (response) {
      console.log(response);
    })
  })
});
