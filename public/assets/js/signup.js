$(document).ready(function () {
  // Getting references to our form and input



  // When the signup button is clicked, we validate the email and password are not blank
  $("#submitButton").on("click", function (event) {
    event.preventDefault();


    var userData = {
      email: $("input#email").val().trim(),
      password: $("input#password").val().trim()
    };
    console.log(userData)

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password);
    $("input#email").val("")
    $("input#password").val("")
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password) {
    console.log(email)
    console.log(password)
    console.log('=== SIgning UP')
    $.post("/api/signup", {
      email: email,
      password: password
    })
      .then(function (data) {

        console.log('Server Responded')
        window.location.replace("/compare");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    console.log('Error Help !! ', err)
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
