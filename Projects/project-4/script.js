const images = document.querySelectorAll(".image-container img");

images.forEach((image) => {
  image.addEventListener("click", () => {
    images.forEach((img) => img.classList.remove("active"));
    image.classList.add("active");
  });
});
