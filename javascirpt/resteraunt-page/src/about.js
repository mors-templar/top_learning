const createAboutPage = () => {
  const content = document.getElementById("content");
  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("page-content");

  const headline = document.createElement("h1");
  headline.textContent = "About Us";

  const description = document.createElement("p");
  description.textContent = "Founded in 2023, our restaurant is a family-owned business dedicated to bringing authentic Italian flavors to your table. Our chefs use time-honored recipes to create a truly memorable dining experience.";

  aboutDiv.appendChild(headline);
  aboutDiv.appendChild(description);

  content.appendChild(aboutDiv);
};

export default createAboutPage;