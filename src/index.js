import "./styles.css";
import { mainPage } from "./mainPage.js";
import { menuPage } from "./menuPage.js";
import { aboutPage } from "./aboutPage.js";

const content = document.querySelector("#content");
const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const aboutBtn = document.querySelector(".about-btn");

function renderPage(pageComponent) {
  content.innerHTML = "";
  pageComponent(content);
}

renderPage(mainPage);

homeBtn.addEventListener("click", () => renderPage(mainPage));
menuBtn.addEventListener("click", () => renderPage(menuPage));
aboutBtn.addEventListener("click", () => renderPage(aboutPage));
