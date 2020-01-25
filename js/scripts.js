// business logic
function EmailAddress(email, password) {
  this.email = email;
  this.password = password;
}
EmailAddress.prototype.freshContact=function(){
  return this.email + " " +this.password;
}

// user interface logic
$(document).ready(function() {
  $("form#new-email").submit(function(event) {
    event.preventDefault();

    var inputtedEmail = $("exampleInputEmail1").val();
    var inputtedPassword = $("exampleInputPassword1").val();

    var newEmailAddress = new EmailAddress(inputtedEmail, inputtedPassword);

    $("ul#contacts").append("<li><span class='contact'>" + newEmailAddress.email + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });
});