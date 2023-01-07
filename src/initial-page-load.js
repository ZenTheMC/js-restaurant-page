import restaurantImage from './assets/restaurant-image.jpg';

export function initialPageLoad() {

    const contentDiv = document.querySelector("#content");

    // Remove any existing DOM children if present
    contentDiv.replaceChildren();

    // DOM for heading
    const heading = document.createElement("h1");
    heading.textContent = "Welcome To Anime Restaurant";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    // DOM for landing page top image
    const topImage = document.createElement("img");
    topImage.classList.add("image");
    topImage.src = restaurantImage;
    topImage.alt = "Image of Anime Style Restaurant";
    contentDiv.appendChild(topImage);

    // DOM for p tag #1
    const para1 = document.createElement("p");
    para1.classList.add("landing-page-copy");
    para1.textContent = "Anime Style Atmosphere"
    contentDiv.appendChild(para1);
    
    // DOM for p tag #2
    const para2 = document.createElement("p");
    para1.classList.add("landing-page-copy");
    para1.textContent = "Also, restaurant looks weird"
    contentDiv.appendChild(para2);

    // DOM for p tag #3
    const para3 = document.createElement("p");
    para1.classList.add("landing-page-copy");
    para1.textContent = "Restuarant looks right, but it is not"
    contentDiv.appendChild(para3);
}