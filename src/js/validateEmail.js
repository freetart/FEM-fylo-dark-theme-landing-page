const validateEmail = () => {
  const form = document.querySelector(".cta__form");
  const emailInput = document.querySelector(".cta__input");

  // check input
  const checkInput = () => {
    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
      setErrorMsg(emailInput, "Email cannot be blank");
    } else if (!isEmail(emailValue)) {
      setErrorMsg(emailInput, "Email is not valid");
    }
  };

  // error message
  const setErrorMsg = (input, message) => {
    const inputGroup = input.parentElement.parentElement.parentElement;
    const errorMessage = inputGroup.querySelector(".cta__message");
    errorMessage.innerText = message;
    inputGroup.className = "cta error";
  };

  // check if valid email
  const isEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };

  // submit form
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInput();
  });
};

export default validateEmail;
