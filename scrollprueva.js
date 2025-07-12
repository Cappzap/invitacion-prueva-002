const video = document.getElementById('scrollVideo');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScroll;

  if (!isNaN(video.duration)) {
    video.currentTime = video.duration * scrollFraction;
  }
});
