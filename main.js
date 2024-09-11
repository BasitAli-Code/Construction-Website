// Code for Login and Search Forms

// Selecting the login button element
const loginBtn = document.querySelector("#login-btn");
// Selecting the login form element
const loginForm = document.querySelector(".login-input");
// Selecting the search button element
const searchBtn = document.querySelector("#search-btn");
// Selecting the search bar element
const searchBar = document.querySelector(".search-box");

//accessing inputs field within Login Form

const passwordInputField = document.querySelector("#password-input");
const emailInputField = document.querySelector("#email-input");

// Event listener to toggle the login form when the login button is clicked

loginBtn.addEventListener('click', () => {
    // Clear the input fields each time the button is clicked
    passwordInputField.value = '';
    emailInputField.value = '';

    // Check if the search bar is currently active
    if (searchBar.classList.contains("search-box-active")) {
        // Hide the search bar and show the login form
        searchBar.classList.remove("search-box-active");
        loginForm.classList.add("login-input-active");
    } else {
        // Toggle the visibility of the login form
        loginForm.classList.toggle("login-input-active");
    }
});


// Event listener to toggle the search bar when the search button is clicked
searchBtn.addEventListener('click', () => {

    // Check if the login form is currently active
    if (loginForm.classList.contains("login-input-active")) {
        // Hide the login form and show the search bar
        loginForm.classList.remove("login-input-active");
        searchBar.classList.add("search-box-active");
    } else {
        // Toggle the visibility of the search bar
        searchBar.classList.toggle("search-box-active");
    }

});

//code for showing and hidding password

//getting html elements

const eyeElement = document.querySelector("#password-eye");
const passwordElement = document.querySelector("#password-input");


eyeElement.addEventListener('click', () => {
    if (passwordElement.classList.contains("password-input-state")) {
        
        passwordElement.setAttribute("type", "text");// so that it show password
        eyeElement.className = "fas fa-eye-slash"; //changing icons to hide password icon
        passwordElement.classList.remove("password-input-state");
        
    } else {
        
        passwordElement.setAttribute("type", "password");// so that it hides password
        eyeElement.className = "fas fa-eye"; 
       //changing icons to show password icon
        passwordElement.classList.add("password-input-state");
        
    }
});

//removing elements when user scroll through body of web page

document.addEventListener('scroll' , ()=>{

    if(window.scrollY > 0)
        {
            
            loginForm.classList.remove("login-input-active");
    
            searchBar.classList.remove("search-box-active");
            
        }
    
});

document.querySelector("#home").addEventListener('click' , () =>{

    loginForm.classList.remove("login-input-active");
     searchBar.classList.remove("search-box-active");

})

// Code for Home Image Slider

// Selecting all image container elements for the slider
const imageDivs = document.querySelectorAll(".image-con");
// Selecting the previous button element
const preBtn = document.querySelector(".pre");
// Selecting the next button element
const nextBtn = document.querySelector(".next");

// Variable to keep track of the currently displayed image index
let currentImage = 0;

// Function to display the image at the specified index
function displayImg(index) {
    imageDivs.forEach((imgCon, i) => {
        imgCon.style.display = (i === index) ? 'block' : 'none';
    });
}

// Function to display the next image
function nextImage() {
    currentImage = (currentImage + 1) % imageDivs.length;
    displayImg(currentImage);
}

// Function to display the previous image
function preImage() {
    currentImage = ((currentImage - 1) + imageDivs.length) % imageDivs.length;
    displayImg(currentImage);
}

// Event listeners for the previous and next buttons
preBtn.addEventListener('click', preImage);
nextBtn.addEventListener('click', nextImage);

// Code for generating HTML of Service Section

// Selecting the container where service section will be inserted
const serviceContainer = document.querySelector(".services-con");

// Array of service objects containing details for each service
const serArray = [
    {
        img: "service-1.png",
        heading: "Building Construction",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus."
    },
    {
        img: "service-2.png",
        heading: "House Renovation",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus."
    },
    {
        img: "service-3.png",
        heading: "Architecture Design",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus."
    },
    {
        img: "service-4.png",
        heading: "Material Supply",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus."
    },
    {
        img: "service-5.png",
        heading: "Construction Consultant",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus."
    },
    {
        img: "service-6.png",
        heading: "Interior Design",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus."
    },
    {
        img: "service-7.png",
        heading: "Building Maintenance",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus."
    },
    {
        img: "service-8.png",
        heading: "Building Renovation",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus."
    }
];

// Function to generate HTML for the service section
function generateServiceSection() {

    let htmlCode = '';
    // Iterate through each service object and create corresponding HTML
    for (let subCon of serArray) {
        htmlCode += `
            <div class="sub-ser-con test-con">
                <img src="${subCon.img}" loading="lazy" alt="${subCon.heading}">
                <h3>${subCon.heading}</h3>
                <p>${subCon.p}</p>
            </div>
        `;
    }
    return htmlCode;

}

// Insert the generated HTML into the service container
serviceContainer.innerHTML = generateServiceSection();

// Code for generating HTML of Project Section
// Selecting the container where the project section will be inserted
const projectContainer = document.querySelector(".pro-con");

// Array of project image filenames
const proArray = [
    "project-1.jpg",
    "project-2.jpg",
    "project-3.jpg",
    "project-4.jpg",
    "project-5.jpg",
    "project-6.jpg"
];

// Function to generate HTML for the project section
function generateProjectSection() {
    let htmlCode = '';
    // Iterate through each project image and create corresponding HTML
    for (let imgElement of proArray) {
        htmlCode += `
            <div class="sub-pro-con">
        
                    <img src="${imgElement}" alt="Project Image" loading="lazy" class = "display-none-images">

                <div class="pro-con-content">
                    <p>Dream house <br> <span>construction, design</span></p>
                    <span></span>
                    <i class="fas fa-plus"></i>
                </div>            
            </div>
        `;
    }
    return htmlCode;
}

// Insert the generated HTML into the project container
projectContainer.innerHTML = generateProjectSection();

// Initialize LightGallery after the new content has been inserted
lightGallery(projectContainer, {
    selector: '.sub-pro-con img', 
});


// Code for generating HTML of Pricing Section

// Selecting the container where pricing section will be inserted
const pricingContainer = document.querySelector(".pricing-con");

// Array of pricing plan objects containing details for each plan
const priArray = [
    {
        i: "fas fa-home",
        price: 250,
        plan: "Basic Plan"
    },
    {
        i: "fas fa-building",
        price: 650,
        plan: "Premium Plan"
    },
    {
        i: "fas fa-city",
        price: 1250,
        plan: "Ultimate Plan"
    }
];

// Function to generate HTML for the pricing section
function generatePricingSection() {

    let htmlCode = '';
    // Iterate through each pricing plan object and create corresponding HTML
    for (let subObj of priArray) {
        htmlCode += `
            <div class="sub-pri-con">
                <i class="${subObj.i}"></i>
                <span class="plan-para">${subObj.plan}</span>
                <h3><sub>$</sub>${subObj.price}<sub>/Mon</sub></h3>
                <p>interior design</p>
                <p>refurbishment</p>
                <p>material supply</p>
                <p>maintenance</p>
                <p>24/7 support</p>
                <button class="">Choose Plan</button>
            </div>
        `;
    }
    return htmlCode;

}

// Insert the generated HTML into the pricing container
pricingContainer.innerHTML = generatePricingSection();

// Code for generating HTML of Client Section

// Selecting the container where client section will be inserted
const clientContainer = document.querySelector(".client-con");

// Array of client objects containing details for each client
const clientArray = [
    {
        img: "pic-1.png",
        p: "John Doe",
        i: 4
    },
    {
        img: "pic-2.png",
        p: "Alexa",
        i: 5
    },
    {
        img: "pic-3.png",
        p: "Harry",
        i: 5
    },
    {
        img: "pic-4.png",
        p: "Sania",
        i: 4
    },
    {
        img: "pic-5.png",
        p: "Ahmed",
        i: 5
    },
    {
        img: "pic-6.png",
        p: "Random",
        i: 5
    }
];

// Function to generate HTML for the client section
function generateClientSection() {

    let htmlCode = '';
    // Iterate through each client object and create corresponding HTML
    for (let subObj of clientArray) {
        let stars = '';
        // Generate star ratings based on the client rating
        for (let j = 0; j < subObj.i; j++) {
            stars += `<i class="fas fa-star"></i>`;
        }
        htmlCode += `
            <div class="client-sub-con">
                <div class="review">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod voluptates asperiores ipsa odit dolorem dignissimos sit, maxime cupiditate voluptas deleniti voluptatibus mollitia veritatis fugiat impedit molestias. In optio nulla, assumenda.</p>
                </div>
                <div class="pro-str">
                    <img src="${subObj.img}" alt="client-image" loading="lazy">
                    <div class="pro-sub-str">
                        <p>${subObj.p}</p>
                        ${stars}
                    </div>
                </div>
            </div>
        `;
    }
    return htmlCode;

}

// Insert the generated HTML into the client container
clientContainer.innerHTML = generateClientSection();

// Code for generating HTML of Blog Section

// Selecting the container where blog section will be inserted
const blogContainer = document.querySelector(".blog-con");

// Array of blog image filenames
const blogArray = [
    "blog-1.jpg",
    "blog-2.jpg",
    "blog-3.jpg",
    "blog-4.jpg",
    "blog-5.jpg",
    "blog-6.jpg"
];

// Function to generate HTML for the blog section
function generateBlogSection() {

    let htmlCode = '';
    // Iterate through each blog image and create corresponding HTML
    for (let img of blogArray) {
        htmlCode += `
            <div class="blog-sub-con">
                <div class="blog-img-con">
                    <img src="${img}" alt="Blog Image" loading="lazy">
                </div>
                <div class="sub-con-content">
                    <h3>Blog Title Goes Here</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Doloremque rem ipsam.</p>
                    <button>Read More</button>
                </div>
            </div>
        `;
    }
    return htmlCode;

}

// Insert the generated HTML into the blog container
blogContainer.innerHTML = generateBlogSection();

// Code ends here
