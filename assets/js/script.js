document
  .getElementById("randomNftButton")
  .addEventListener("click", showRandomImage);

function showRandomImage() {
  const images = [
    "assets/images/jeongyoeb-han-0012.jpg",
    "assets/images/jeongyoeb-han-0014.jpg",
    "assets/images/jeongyoeb-han-0015.jpg",
    "assets/images/jeongyoeb-han-0025.jpg",
    "assets/images/jeongyoeb-han-0048.jpg",
    "assets/images/jeongyoeb-han-00488.jpg",
    "assets/images/jeongyoeb-han-cyberfiction-pf-t-0111.jpg",
    "assets/images/jeongyoeb-han-cyberfiction-pf-t-0222.jpg",
    "assets/images/jeongyoeb-han-cyberfiction-pf-t-033.jpg",
    "assets/images/jeongyoeb-han-cyberfiction-pf-t-0333.jpg",
  ];

  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];

  const imageElement = document.getElementById("randomNft");
  imageElement.src = randomImage;
  imageElement.alt = `Random NFT ${randomIndex + 1}`;
}
