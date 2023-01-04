export function initialPageLoad () {
    const contentDiv = document.querySelector("#content");
    const heading = document.createElement("h1");
    heading.textContent = "Welcome To Anime Restaurant";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    const topImage = document.createElement("img");
    topImage.classList.add("top-image");
    topImage.src = "../src/assets/restaurant-image.jpg";
    topImage.alt = "Image of Anime Style Restaurant";
    contentDiv.appendChild(topImage);

    const para1 = document.createElement("p");
    para1.classList.add("landing-page-copy");
    para1.textContent = "Anime Style Atmosphere"
    contentDiv.appendChild(para1);
    
    const para2 = document.createElement("p");
    para1.classList.add("landing-page-copy");
    para1.textContent = "Also, restaurant looks weird"
    contentDiv.appendChild(para2);

    const para3 = document.createElement("p");
    para1.classList.add("landing-page-copy");
    para1.textContent = "Restuarant looks right, but it is not"
    contentDiv.appendChild(para3);
}