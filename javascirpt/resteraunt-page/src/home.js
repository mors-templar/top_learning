import RestaurantImage from "./rss/logo.png";

const createHomePage = () => {
  const content = document.getElementById("content");
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("page-content");

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to Our Wonderful Restaurant!";

  const description = document.createElement("p");
  description.textContent = "Experience a culinary journey like no other. Our food is made with the freshest ingredients and passion.";

  const restaurantImage = document.createElement("img");
  restaurantImage.src = RestaurantImage;
  restaurantImage.alt = "A beautiful restaurant interior";
  restaurantImage.style.maxWidth = "100%";
  restaurantImage.style.height = "auto";
  restaurantImage.style.borderRadius = "8px";
  restaurantImage.style.marginTop = "20px";

  homeDiv.appendChild(headline);
  homeDiv.appendChild(description);
  homeDiv.appendChild(restaurantImage);

  content.appendChild(homeDiv);
};

export default createHomePage;