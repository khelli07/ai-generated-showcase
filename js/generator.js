const fs = require("fs");

// Function to generate the HTML page
function generatePhotoDetailPage(imagePath, caption, longDescription) {
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${caption}</title>
    <link rel="icon" href="../assets/logo.png" type="image/png" />
        <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    />
    <link rel="stylesheet" href="../css/global.css" />
    <link rel="stylesheet" href="../css/photo_detail.css" />
  </head>
  <body>
    <header>
      <nav>
        <a href="/">Home</a>
        <a href="/video.html">Video</a>
        <a href="/about.html">About</a>
      </nav>
    </header>

        <!-- Floating button to control music -->
    <div class="music-control">
      <button id="musicButton" onclick="toggleMusic">
        <i class="fas fa-music"></i>
      </button>
    </div>

    <!-- The main content of the photo detail page -->
    <main>
      <div class="photo-detail">
        <img src="${imagePath}" alt="Large Photo" />
        <div class="caption">
          <h3>${caption}</h3>
          <p>
            ${longDescription}
          </p>
          <!-- Add any other additional information or elements here -->
        </div>
      </div>

      <!-- Back to Main Page link -->
      <div class="back-link">
        <a href="/">Back to Main Page</a>
      </div>
    </main>

    <!-- Audio element for the stereo music loop -->
    <audio id="music" loop>
      <source src="assets/audio/texttomusic2.wav" type="audio/wav">
      Your browser does not support the audio element.
    </audio>

    <footer>
      <!-- Add your footer content here -->
      <p>&copy; 2023 Magnus - Submission for KORIKA Kreatif AI.</p>
    </footer>
    <script src="../js/music.js"></script>
  </body>
</html>
  `;

  return htmlContent;
}

// Read the JSON data from the data.json file
fs.readFile("data-food.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading data:", err);
  } else {
    const jsonData = JSON.parse(data);

    // Generate photo detail page for each item in the JSON data
    jsonData.forEach((photo) => {
      const photoDetailPageContent = generatePhotoDetailPage(
        `../assets/images/${photo.filename}`,
        photo.caption,
        photo.long_description
      );

      // Write the HTML content to a file with the photo filename as the file name
      fs.writeFile(
        `detail/${photo.filename.slice(0, -4)}.html`,
        photoDetailPageContent,
        (err) => {
          if (err) {
            console.error("Error writing file:", err);
          } else {
            console.log(
              `${photo.filename.slice(0, -4)}.html generated successfully!`
            );
          }
        }
      );
    });
  }
});
