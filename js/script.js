// Function to load all images and generate the gallery
function loadImages(galleryId, jsonFile) {
  const gallery = document.getElementById(galleryId);
  console.log(gallery);
  fetch(jsonFile)
    .then((response) => response.json())
    .then((jsonData) => {
      jsonData.forEach((photo) => {
        // Create a new image element
        const image = document.createElement("img");
        image.src = "assets/images/" + photo.filename;
        image.alt = "Photo";

        // Create a new div for the image card
        const imageCard = document.createElement("div");
        imageCard.classList.add("photo");
        imageCard.dataset.photoId = photo.filename.slice(0, -4);

        const imageCardDiv = document.createElement("div");
        imageCardDiv.classList.add("image-card");

        const captionDiv = document.createElement("div");
        captionDiv.classList.add("caption");

        const captionHeader = document.createElement("h3");
        captionHeader.textContent = photo.caption;
        captionDiv.appendChild(captionHeader);

        const shortDescriptionParagraph = document.createElement("p");
        shortDescriptionParagraph.textContent = photo.short_description;
        captionDiv.appendChild(shortDescriptionParagraph);

        // Add the image and caption to the image card
        imageCardDiv.appendChild(image);
        imageCardDiv.appendChild(captionDiv);

        imageCard.appendChild(imageCardDiv);

        // Add a click event listener to the image card to open the detail page
        imageCard.addEventListener("click", () => {
          window.location.href = `detail/${photo.filename.split(".")[0]}.html`;
        });

        // Append the image card to the gallery
        gallery.appendChild(imageCard);
      });
    });
}

// Add an event listener to execute the JavaScript code after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  loadImages("gallery-food", "data-food.json");
  loadImages("gallery-culture", "data-culture.json");

  // Function to handle the hover event on a photo
  function handlePhotoHover(event) {
    const caption = event.currentTarget.querySelector(".caption");
    caption.style.bottom = "0";
    caption.style.opacity = "1";
  }

  // Function to handle the mouseleave event on a photo
  function handlePhotoLeave(event) {
    const caption = event.currentTarget.querySelector(".caption");
    caption.style.bottom = "-100%";
    caption.style.opacity = "0";
  }

  // Get all the photos with the "photo" class
  const photos = document.querySelectorAll(".photo");

  // Add event listeners for hover and mouseleave to each photo
  photos.forEach((photo) => {
    photo.addEventListener("mouseenter", handlePhotoHover);
    photo.addEventListener("mouseleave", handlePhotoLeave);
  });
});
