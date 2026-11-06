import chefImage from "./chef.jpeg";
import restaurantImage from "./restaurant.jpeg";

const aboutPage = function (content) {
  const div = document.createElement("div");
  div.classList.add("about-page");

  // --- 1. Header / Story Section ---
  const storySection = document.createElement("section");
  storySection.classList.add("about-story");

  const storyTitle = document.createElement("h1");
  storyTitle.textContent = "Our Story";
  storyTitle.classList.add("primary-heading");

  const storyHeading = document.createElement("h2");
  storyHeading.textContent = "Nurturing community through thoughtful dining...";
  storyHeading.classList.add("secondary-heading");

  const storyText1 = document.createElement("p");
  storyText1.textContent =
    "In nurturing community through thoughtful dining, we bring fresh, locally sourced ingredients to your table every day. Our passion is crafting meals that bring people together.";
  storyText1.classList.add("main-text");

  const storyText2 = document.createElement("p");
  storyText2.textContent =
    "Our story began with a simple idea: serve honest, seasonal food prepared with care and respect for local farmers and sustainable practices.";
  storyText2.classList.add("main-text");

  const storyImage = document.createElement("img");
  storyImage.src = restaurantImage;
  storyImage.alt = "Restaurant Interior Dining Area";
  storyImage.classList.add("story-img");

  storySection.append(
    storyTitle,
    storyHeading,
    storyText1,
    storyText2,
    storyImage,
  );

  const chefSection = document.createElement("section");
  chefSection.classList.add("about-chef");

  const chefHeading = document.createElement("h2");
  chefHeading.textContent = "Meet the Chef";
  chefHeading.classList.add("secondary-heading");

  const chefCard = document.createElement("div");
  chefCard.classList.add("chef-card");

  const chefImg = document.createElement("img");
  chefImg.src = chefImage;
  chefImg.alt = "Head Chef Portrait";
  chefImg.classList.add("chef-img");

  const chefBio = document.createElement("p");
  chefBio.textContent =
    "Chef Marcus brings over 15 years of culinary expertise, focusing on organic textures and farm-to-table dining experiences.";
  chefBio.classList.add("chef-bio");

  chefCard.append(chefImg, chefBio);
  chefSection.append(chefHeading, chefCard);

  const footerSection = document.createElement("footer");
  footerSection.classList.add("about-footer");

  const hoursDiv = document.createElement("div");
  hoursDiv.classList.add("footer-info");
  hoursDiv.innerHTML = `
    <strong>Operating Hours</strong>
    <p>10:00 am – 9:00 pm (Mon–Thu)</p>
    <p>11:00 am – 9:00 pm (Fri–Sun)</p>
  `;

  const locationDiv = document.createElement("div");
  locationDiv.classList.add("footer-info");
  locationDiv.innerHTML = `
    <strong>Location</strong>
    <p>Amman, Jordan</p>
  `;

  footerSection.append(hoursDiv, locationDiv);
  div.append(storySection, chefSection, footerSection);
  content.appendChild(div);
};

export { aboutPage };
