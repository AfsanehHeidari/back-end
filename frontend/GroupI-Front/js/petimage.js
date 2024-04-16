// Checking the presence of element with IDcomment-btn
const btn = document.querySelector('#comment-btn');

if (btn) {
    // Add the click event to the element
    btn.addEventListener('click', () => {
        alert('Commenting on the text');
    });
} else {
    console.error("Element with id 'comment-btn' not found!");
}

// desired coordinates (latitude and longitude)
var latitude = 65.059412;
var longitude = 25.465970;

// Initialize and add the map
var myMap = L.map('map').setView([latitude, longitude], 13); // Map center and zoom level

// Add tile layer and marker
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Add marker to the map
L.marker([latitude, longitude]).addTo(myMap)
    .bindPopup('Your location') // Popup message
    .openPopup(); // Open popup by default


//    pet

function showImages() {
    var selectedAnimal = document.getElementById("animals").value;
    var imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = ""; // Delete previous photos

    // We load and display new photos
    for (var i = 1; i <= 4; i++) {
        var imgSrc = "image/" + selectedAnimal + i + ".jpg";
        var imgAlt = selectedAnimal + " " + i;
        var star = "<span class='star'>&#9733;</span>";
        imageContainer.innerHTML += "<div class='grid-item'><img src='" + imgSrc + "' alt='" + imgAlt + "'>" + star + "</div>";
    }
}

function searchImages() {
    var input, filter, images, alt, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    images = document.querySelectorAll(".grid-item");

    for (i = 0; i < images.length; i++) {
        alt = images[i].querySelector("img").alt;
        if (alt.toUpperCase().indexOf(filter) > -1) {
            images[i].style.display = "block";
        } else {
            images[i].style.display = "none";
        }
    }
}
// Get the selected animal
function showImages() {
    // Get the selected animal
    var selectedAnimal = document.getElementById("animals").value;
    var imageContainer = document.getElementById("imageContainer");

    // Clear previous images
    imageContainer.innerHTML = "";

    // Create new image elements based on selected animal
    var images = [
        "image/1.png",
        "image/2.png",
        "image/3.png"
        // Add more image paths as needed
    ];

    images.forEach(function (imagePath) {
        var card = document.createElement("div");
        card.className = "col";
        card.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="${imagePath}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the
                        bulk of the card's content.</p>
                </div>
            </div>
        `;
        imageContainer.appendChild(card);
    });
}


// ............
function showImages() {
    var selectedAnimal = document.getElementById("animals").value;
    var imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = ""; // Clear previous images

    var images = {
        dog: ["../image/images/dog/dog1.jpg", "../image/images/dog/dog2.jpg", "../image/images/dog/dog3.jpg"],
        cat: ["../image/images/cat01.jpg", "../image/images/cat02.jpg", "../image/images/cat03.jpg"],
        bird: ["../image/images/bird01.jpg", "../image/images/bird02.jpg", "../image/images/bird03.jpg"],
        rabbit: ["../image/images/rabbit01.jpg", "../image/images/rabbit02.jpg", "../image/images/rabbit03.jpg"]
    };

    images[selectedAnimal].forEach(function(imageSrc) {
        var imgElement = document.createElement("img");
        imgElement.src = imageSrc;
        
        // Create like button and counter
        var likeButton = document.createElement("button");
        likeButton.classList.add("btn", "btn-primary", "like-button");
        likeButton.innerHTML = '<i class="fas fa-heart"></i> Like';
        
        var likeCounter = document.createElement("span");
        likeCounter.classList.add("like-counter");
        likeCounter.textContent = "0";
        
        // Create Comment link
        var commentLink = document.createElement("a");
        commentLink.href = "#";
        commentLink.textContent = "Comment";
        commentLink.classList.add("comment-link");
        
        // Create Adaption link
        var adaptionLink = document.createElement("a");
        adaptionLink.href = "#";
        adaptionLink.textContent = "Adaption";
        adaptionLink.classList.add("adaption-link");
        
        // Create container for like button and counter
        var likeContainer = document.createElement("div");
        likeContainer.classList.add("interaction-container");
        likeContainer.appendChild(likeButton);
        likeContainer.appendChild(likeCounter);
        
        // Create container for comment and adaption links
        var linkContainer = document.createElement("div");
        linkContainer.classList.add("interaction-container");
        linkContainer.style.marginTop = "10px";// Add margin between like and link containers
        linkContainer.appendChild(commentLink);
        linkContainer.appendChild(adaptionLink);
        
        // Create container for image, like, and link containers
        var imageContainerItem = document.createElement("div");
        imageContainerItem.classList.add("grid-item");
        imageContainerItem.appendChild(imgElement);
        imageContainerItem.appendChild(likeContainer);
        imageContainerItem.appendChild(linkContainer);
        
        imageContainer.appendChild(imageContainerItem);
        
        // Add click event listener to like button
        likeButton.addEventListener("click", function() {
            var currentLikes = parseInt(likeCounter.textContent);
            likeCounter.textContent = currentLikes + 1;
        });
    });
}

// Add comment function
function addComment() {
    var commentText = prompt("Enter your comment:");
    if (commentText !== null && commentText !== "") {
        var commentsContainer = document.getElementById("comments");
        var commentElement = document.createElement("div");
        commentElement.classList.add("comment");
        commentElement.innerText = commentText;
        commentsContainer.appendChild(commentElement);
    }
}
// //////////////////////////////


    // Function to fetch and display images
    function displayImages() {
        // URL of the server where images are stored
        const serverURL = 'http://your-server.com/images/';
        
        // List of image file names (you can fetch this dynamically from the server)
        const imageNames = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

        // Container to display images
        const imageContainer = document.getElementById('imageContainer');

        // Loop through each image name and create <img> element to display it
        imageNames.forEach(imageName => {
            // Create <img> element
            const imgElement = document.createElement('img');
            // Set the source (URL) of the image
            imgElement.src = serverURL + imageName;
            // Set optional attributes like alt text, width, height, etc.
            imgElement.alt = imageName; // You can set alt text to describe the image
            imgElement.width = 200; // Adjust width as needed
            // Append the <img> element to the container
            imageContainer.appendChild(imgElement);
        });
    }

    // Call the function to display images when the page loads
    window.onload = displayImages;
