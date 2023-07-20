// Add an event listener to execute the JavaScript code after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
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

// Add event listeners to image cards to redirect to the photo_detail.html page
const imageCards = document.querySelectorAll(".image-card");
imageCards.forEach((card) => {
  card.addEventListener("click", () => {
    const photoId = card.dataset.photoId; // Assuming you have unique IDs for each photo
    window.location.href = `photo_detail.html?id=${photoId}`;
  });
});
