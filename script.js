// Optional: Add smooth scroll or lazy loading scripts here if needed
document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('.video iframe');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.src += "&autoplay=1";
      }
    });
  });

  observer.observe(video);
});
