// JavaScript to control the stereo music loop
const musicButton = document.getElementById("musicButton");
const music = document.getElementById("music");
let isMusicPlaying = false;

function toggleMusic() {
  isMusicPlaying = !isMusicPlaying;
  if (isMusicPlaying) {
    music.play();
    musicButton.innerHTML = '<i class="fas fa-pause"></i>'; // Change the icon to pause when music is playing
  } else {
    music.pause();
    musicButton.innerHTML = '<i class="fas fa-play"></i>'; // Change the icon to play when music is paused
  }
}

musicButton.addEventListener("click", function () {
  // Check if the user has interacted with the page (allowed by the autoplay policy)
  if (music.paused && music.currentTime === 0) {
    // Start music playback if it's paused and at the beginning
    music.play();
    isMusicPlaying = true;
    musicButton.innerHTML = '<i class="fas fa-pause"></i>'; // Show pause icon as music is playing
  } else {
    // Toggle music playback if it's already playing or not at the beginning
    toggleMusic();
  }
});

// Check if the music is already playing (e.g., on page load)
if (!music.paused && music.currentTime > 0) {
  isMusicPlaying = true;
  musicButton.innerHTML = '<i class="fas fa-pause"></i>'; // Show pause icon as music is playing
}
