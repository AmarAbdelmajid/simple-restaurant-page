import firstDish from "./dish1.jpg";
import secondDish from "./dish2.jpg";
import thirdDish from "./dish3.jpg";
import fourthDish from "./dish4.jpg";

const imgs = [firstDish, secondDish, thirdDish, fourthDish];

const menuPage = function (content) {
  const gridWrapper = document.createElement("div");
  gridWrapper.classList.add("grid-2d");

  for (let i = 0; i < imgs.length; i++) {
    const contentWrapper = document.createElement("div");
    contentWrapper.classList.add("grid-2d", "center");

    const img = document.createElement("img");
    img.classList.add("dish-img");
    img.src = imgs[i];
    img.alt = `Dish ${i + 1}`;

    const dishDescriptionWrapper = document.createElement("div");

    const dishHeading = document.createElement("h3");
    dishHeading.classList.add("dish-heading");
    dishHeading.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

    const dishDescription = document.createElement("p");
    dishDescription.classList.add("dish-description");
    dishDescription.textContent =
      "Eveniet reprehenderit voluptas ut ipsa, quam vitae laboriosam quidem sunt fugiat sed.";

    const dishPrice = document.createElement("p");
    dishPrice.classList.add("dish-price");
    dishPrice.textContent = `$${(14 + i * 1.5).toFixed(2)}`;

    dishDescriptionWrapper.append(dishHeading, dishDescription, dishPrice);
    contentWrapper.append(img, dishDescriptionWrapper);
    gridWrapper.appendChild(contentWrapper);
  }

  content.appendChild(gridWrapper);
};

export { menuPage };
