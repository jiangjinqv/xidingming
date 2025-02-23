const images = document.querySelectorAll('.lazyload');

const lazyLoad = () => {
  images.forEach(img => {
    if (img.getBoundingClientRect().top < window.innerHeight) {
      img.src = img.dataset.src;
      img.classList.remove('lazyload');
    }
  });
};

window.addEventListener('scroll', lazyLoad);
window.addEventListener('resize', lazyLoad);
lazyLoad();
