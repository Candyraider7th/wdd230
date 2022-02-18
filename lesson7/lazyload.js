const images = document.querySelectorAll("img");

const options = {threshold: [0.5]};

function preloadImage(img) {
  const source = img.getAttribute("data-src");
  img.src = source;
}

const io = new IntersectionObserver((entries, io) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target); //call a function send in the image that is currently intersectiong
      io.unobserve(entry.target);
    }
  });
}, options);

images.forEach((image) => {
  io.observe(image);
});
