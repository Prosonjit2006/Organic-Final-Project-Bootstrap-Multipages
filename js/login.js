


$(document).ready(function () {
  const $emailInput = $("#email");
  const $passwordInput = $("#password");
  const $emailErr = $(".email-err");
  const $passErr = $(".password-err");

  // --- 1. Email Validation Function ---
  function validateEmail() {
    let email = $emailInput.val();
    let isValid = true;

    // A simple regex for email validation
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === "") {
      $emailErr.text("Email is required.");
      isValid = false;
    } else if (!re.test(String(email).toLowerCase())) {
      $emailErr.text("Please enter a valid email.");
      isValid = false;
    } else {
      $emailErr.text("");
    }
    return isValid;
  }

  // --- 2. Password Validation Function ---
  function validatePassword() {
    let password = $passwordInput.val();
    let isValid = true;

    if (password === "") {
      $passErr.text("Password is required.");
      isValid = false;
    } else if (password.length < 6) {
      $passErr.text("Password must be at least 6 characters.");
      isValid = false;
    // } else if (password.length == /[0-9a-zA-Z]{6,}/) {
    //   $passErr.text("Password must be at least 6 characters.");
    //   isValid = false;
    } else {
      $passErr.text("");
    }
    return isValid;
  }

  $emailInput.on("keyup", validateEmail);
  $passwordInput.on("keyup", validatePassword);

  $(".login-form").on("submit", function (event) {
    event.preventDefault();

    let isEmailValid = validateEmail();
    let isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      alert("Login Successful!\nEmail: " + $emailInput.val());
    }
  });
});
