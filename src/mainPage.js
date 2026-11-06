import mainImage from "./main.jpg";

const mainPage = function (content) {
  const div = document.createElement("div");
  div.classList.add("grid-2d");

  //   content.appendChild(div);

  const div2 = document.createElement("div");

  const h1 = document.createElement("h1");
  h1.textContent = "Honest Food, Naturally Sourced";
  h1.classList.add("primary-heading");

  const p = document.createElement("p");
  p.textContent =
    " A culinary journey focused on fresh, local, and seasonal ingredients";

  p.classList.add("main-text");

  const button = document.createElement("button");
  button.textContent = "Explore the Menu";
  button.classList.add("main-menu-btn");

  div2.append(h1, p, button);

  const img = document.createElement("img");
  img.src = mainImage;
  img.alt = "Green Table cousin";
  img.classList.add("main-img");

  div.append(div2, img);

  content.appendChild(div);
};

export { mainPage };
