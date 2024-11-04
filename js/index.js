const imageContainer = document.querySelector(".image-container");
const btnElment = document.querySelector(".btn");

// @ts-ignore
btnElment.addEventListener("click", () => {
  // @ts-ignore
  imageNum = 10;
  addNewImage();
});

const addNewImage = () => {
  // @ts-ignore
  for (let index = 0; index < imageNum; index++) {
    const newImg = document.createElement("img");
    newImg.src = `https://picsum.photos/200/300?random=${Math.floor(
      Math.random() * 2000
    )}`;

    // @ts-ignore
    imageContainer.appendChild(newImg);
  }
};
