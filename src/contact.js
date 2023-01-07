import animePhoneImage from './assets/phone.jpg';
import animeEmailImage from './assets/email.png';
import animeMailImage from './assets/mail.png';

export function contact() {

    const contentDiv = document.querySelector("#content");

    // Remove any existing DOM children if present
    contentDiv.replaceChildren();

    // DOM for heading
    const heading = document.createElement("h1");
    heading.textContent = "Welcome To Anime Restaurant";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    // DOM for phoneImage
    const phoneImage = document.createElement("img");
    phoneImage.classList.add("image");
    phoneImage.src = animePhoneImage;
    phoneImage.alt = "Image of phone";
    contentDiv.appendChild(phoneImage);

    // DOM for p tag for phoneImage
    const para1phoneImage = document.createElement("p");
    para1phoneImage.classList.add("contact-copy");
    para1phoneImage.textContent = "Call us for reservations!";
    contentDiv.appendChild(para1phoneImage);
    
    // DOM for emailImage
    const emailImage = document.createElement("img");
    emailImage.classList.add("image");
    emailImage.src = animeEmailImage;
    emailImage.alt = "Image of email";
    contentDiv.appendChild(emailImage);

    // DOM for p tag for emailImage
    const para1emailImage = document.createElement("p");
    para1emailImage.classList.add("contact-copy");
    para1emailImage.textContent = "Email us for questions!";
    contentDiv.appendChild(para1emailImage);

    // DOM for addressImage
    const addressImage = document.createElement("img");
    addressImage.classList.add("image");
    addressImage.src = animeMailImage;
    addressImage.alt = "Image of mailing address";
    contentDiv.appendChild(addressImage);

    // DOM for p tag for addressImage
    const para1addressImage = document.createElement("p");
    para1addressImage.classList.add("contact-copy");
    para1addressImage.textContent = "We are located in an Anime World";
    contentDiv.appendChild(para1addressImage);
}