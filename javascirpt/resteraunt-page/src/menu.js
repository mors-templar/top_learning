const createMenuPage = () => {
  const content = document.getElementById("content");
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("page-content");

  const headline = document.createElement("h1");
  headline.textContent = "Our Delicious Menu";

  const menuItems = [
    { name: "Spaghetti Bolognese", price: "$15", description: "Classic Italian dish with rich meat sauce." },
    { name: "Caprese Salad", price: "$10", description: "Fresh mozzarella, tomatoes, and basil." },
    { name: "Tiramisu", price: "$8", description: "Traditional coffee-flavored Italian dessert." },
  ];

  const menuList = document.createElement("ul");
  menuItems.forEach(item => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <h3>${item.name} - ${item.price}</h3>
      <p>${item.description}</p>
    `;
    menuList.appendChild(listItem);
  });

  menuDiv.appendChild(headline);
  menuDiv.appendChild(menuList);

  content.appendChild(menuDiv);
};

export default createMenuPage;