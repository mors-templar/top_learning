import "./index.css";
import createHomePage from "./home";
import createMenuPage from "./menu";
import createAboutPage from "./about";
import LogoImage from "./rss/logo.png";

document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    const homeTab = document.getElementById("home-tab");
    const menuTab = document.getElementById("menu-tab");
    const aboutTab = document.getElementById("about-tab");
    const logoImg = document.getElementById("logo-img");

    // Set the logo image source from the imported asset
    logoImg.src = LogoImage;

    // Function to clear the content and set active tab
    function setActiveTab(tab) {
        const tabs = document.querySelectorAll(".tab");
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        content.innerHTML = "";
    }

    // Initial page load
    setActiveTab(homeTab);
    createHomePage();

    // Event listeners for tabs
    homeTab.addEventListener("click", () => {
        setActiveTab(homeTab);
        createHomePage();
    });

    menuTab.addEventListener("click", () => {
        setActiveTab(menuTab);
        createMenuPage();
    });

    aboutTab.addEventListener("click", () => {
        setActiveTab(aboutTab);
        createAboutPage();
    });
});