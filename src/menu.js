import ramenImage from './assets/ramen.jpg';
import pizzaImage from './assets/pizza.jpg';

export function menu() {

    const contentDiv = document.querySelector("#content");

    // Remove any existing DOM children if present
    contentDiv.replaceChildren();

    // DOM for heading
    const heading = document.createElement("h1");
    heading.textContent = "Welcome To Anime Restaurant";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    // DOM for ramen
    const ramen = document.createElement("img");
    ramen.classList.add("image");
    ramen.src = ramenImage;
    ramen.alt = "Image of Ramen";
    contentDiv.appendChild(ramen);

    // DOM for p tag for ramen
    const para1Ramen = document.createElement("p");
    para1Ramen.classList.add("menu-copy");
    para1Ramen.textContent = "Just like Ichiraku's from Naruto";
    contentDiv.appendChild(para1Ramen);
    
    // DOM for ramen
    const pizza = document.createElement("img");
    pizza.classList.add("image");
    pizza.src = pizzaImage;
    pizza.alt = "Image of Pizza";
    contentDiv.appendChild(pizza);

    // DOM for p tag for pizza
    const para1Pizza = document.createElement("p");
    para1Pizza.classList.add("menu-copy");
    para1Pizza.textContent = "Oh so cheesy and slicey..."
    contentDiv.appendChild(para1Pizza);
}