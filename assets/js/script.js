document
  .getElementById("randomNftButton")
  .addEventListener("click", showRandomImage);

function showRandomImage() {
  const images = [
    "assets/images/1.png",
    "assets/images/2.png",
    "assets/images/3.png",
    "assets/images/4.png",
    "assets/images/5.png",
    "assets/images/6.png",
    "assets/images/7.png",
    "assets/images/8.png",
    "assets/images/9.png",
    "assets/images/10.png",
    "assets/images/11.png",
  ];

  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];

  const imageElement = document.getElementById("randomNft");
  imageElement.src = randomImage;
  imageElement.alt = `Random NFT ${randomIndex + 1}`;
}
