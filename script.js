const userName = document.querySelector("#user-name");
const userEmail = document.querySelector("#user-email");
const confirmPass = document.querySelector("#password-confirm");
const contactNum = document.querySelector("#contact-number");
const pass = document.querySelector("#password");
const signUpForm = document.querySelector("#signup-form");
const signupBtn = document.querySelector("#signup-btn");
const submitBtn = document.querySelector("#submit-btn");
const successPg = document.querySelector("#sucess-page");
const signupPg = document.querySelector("#signup-page");
const welcomePg = document.querySelector("#welcome-page");

signupBtn.addEventListener("click", signUpFunction);

function signUpFunction() {
  welcomePg.style.display = "none";
  signupPg.style.display = "block";
}

submitBtn.addEventListener("click", submitFunction);
function submitFunction(e) {
  e.preventDefault();

  const inputArr = [userName, userEmail, pass, confirmPass, contactNum];
  let l = 0;
  inputArr.forEach(function (input) {
    if (input.value == "") {
      input.style.border = "2px solid red";
      input.nextElementSibling.textContent = "Filed Must Be Done";
      input.nextElementSibling.classList.add("error-text");
    }

    if (input.nextElementSibling.classList.contains("success-text")) {
      console.log(input.nextElementSibling.classList);
      l++;
    }
  });

  if (inputArr.length === l) {
    signUpForm.style.display = "none";
    successPg.style.display = "block";
  }
}

signUpForm.addEventListener("keyup", signupFunction);

function signupFunction(e) {
  if (e.target.id == "user-name") {
    const userNameMsg = document.getElementById("user-name-msg");
    if (e.target.value.length < 4) {
      e.target.style.border = "2px solid red";
      userNameMsg.textContent = "X Not A Valid User Name";
      userNameMsg.classList.remove("success-text");
      userNameMsg.classList.add("error-text");
    } else {
      e.target.style.border = "2px solid  #28e028";
      userNameMsg.textContent = "User Name Accepted";
      userNameMsg.classList.remove("error-text");
      userNameMsg.classList.add("success-text");
    }
  }

  if (e.target.id == "password") {
    const passwordMsg = document.getElementById("password-msg");
    if (e.target.value.length < 8) {
      e.target.style.border = "2px solid red";
      passwordMsg.textContent = "X Not A Valid Password";
      passwordMsg.classList.remove("success-text");
      passwordMsg.classList.add("error-text");
    } else {
      e.target.style.border = "2px solid  #28e028";
      passwordMsg.textContent = "Password Accepted";
      passwordMsg.classList.remove("error-text");
      passwordMsg.classList.add("success-text");
    }
  }

  if (e.target.id == "password-confirm") {
    const p = document.getElementById("password-msg");
    const passwordConfirmMsg = document.getElementById("password-confirm-msg");
    if (
      e.target.value !== pass.value ||
      pass.value == "" ||
      p.classList.contains("error-text")
    ) {
      e.target.style.border = "2px solid red";
      passwordConfirmMsg.textContent = "X Passwords Do Not Match";
      passwordConfirmMsg.classList.remove("success-text");
      passwordConfirmMsg.classList.add("error-text");
    } else {
      e.target.style.border = "2px solid  #28e028";
      passwordConfirmMsg.textContent = "Passwords Matched";
      passwordConfirmMsg.classList.remove("error-text");
      passwordConfirmMsg.classList.add("success-text");
    }
  }

  if (e.target.id == "user-email") {
    const emailRegExp = /[A-Za-z]+[0-9_.-A-Za-z]*@[A-Za-z]+[.][A-Za-z]{2,}[.A-Za-z]*$/g;
    const userEmailMsg = document.getElementById("user-email-msg");

    if (!emailRegExp.test(e.target.value)) {
      e.target.style.border = "2px solid red";
      userEmailMsg.textContent = "X Not A Valid Email";
      userEmailMsg.classList.remove("success-text");
      userEmailMsg.classList.add("error-text");
    } else {
      e.target.style.border = "2px solid  #28e028";
      userEmailMsg.textContent = "Email Accepted";
      userEmailMsg.classList.remove("error-text");
      userEmailMsg.classList.add("success-text");
    }
  }

  if (e.target.id == "contact-number") {
    const numRegExp = /[01]{2}[356789][0-9]{8}/g;
    const contactNumberMsg = document.getElementById("contact-number-msg");

    if (!numRegExp.test(e.target.value)) {
      e.target.style.border = "2px solid red";
      contactNumberMsg.textContent =
        "X Not A Valid Mobile Number [Check Operator]";
      contactNumberMsg.classList.remove("success-text");
      contactNumberMsg.classList.add("error-text");
    } else {
      e.target.style.border = "2px solid  #28e028";
      contactNumberMsg.textContent = "Mobile Number Accepted";
      contactNumberMsg.classList.remove("error-text");
      contactNumberMsg.classList.add("success-text");
    }
  }

  // if (e.target.id == "pre-addr") {
  //   const preAddrMsg = document.getElementById("pre-addr-msg");

  //   if (e.target.value.length < 10) {
  //     e.target.style.border = "2px solid red";
  //     preAddrMsg.textContent = "X Enter Address In Details";
  //     preAddrMsg.classList.remove("success-text");
  //     preAddrMsg.classList.add("error-text");
  //   } else {
  //     e.target.style.border = "2px solid  #28e028";
  //     preAddrMsg.textContent = "Address Accepted";
  //     preAddrMsg.classList.remove("error-text");
  //     preAddrMsg.classList.add("success-text");
  //   }
  // }
  // if (e.target.id == "per-addr") {
  //   const perAddrMsg = document.getElementById("per-addr-msg");
  //   if (e.target.value.length < 10) {
  //     e.target.style.border = "2px solid red";
  //     perAddrMsg.textContent = "X Enter Address In Details";
  //     perAddrMsg.classList.remove("success-text");
  //     perAddrMsg.classList.add("error-text");
  //   } else {
  //     e.target.style.border = "2px solid  #28e028";
  //     perAddrMsg.textContent = "Address Accepted";
  //     perAddrMsg.classList.remove("error-text");
  //     perAddrMsg.classList.add("success-text");
  //   }
  // }
}
