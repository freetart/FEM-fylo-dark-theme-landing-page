import preloader from "./preloader.js";
import validateEmail from "./validateEmail.js";

const init = () => {
  preloader();
  validateEmail();
};

window.addEventListener("DOMContentLoaded", init);
