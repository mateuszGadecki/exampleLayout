import NewModal from "./js/modules/Modal.js";
import { data, buttons } from "./js/modules/base.js";

const body = document.querySelector("body");
const nav = document.querySelector(".nav");

const showModal = (value) => {
  const index = data.findIndex((el) => el.name === value);
  const modal = new NewModal(
    data[index].name,
    data[index].role,
    data[index].desc,
    data[index].icon
  );
  body.appendChild(modal.createModal());
};

buttons.forEach((el) => {
  el.addEventListener("click", () => {
    const value = el.textContent;
    showModal(value);
    nav.style.display = "none";
  });
});

// Sticky navigation

const sticky = () => {
  if (window.pageYOffset > 0) {
    nav.classList.add("nav__sticky");
  } else {
    nav.classList.remove("nav__sticky");
  }
};

window.addEventListener("scroll", sticky);
