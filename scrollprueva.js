document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("scrollVideo");
  let duration = 0;

  // Esperamos a que cargue para obtener duración
  video.addEventListener("loadedmetadata", () => {
    duration = video.duration;
  });

  // Detener reproducción automática
  video.pause();

  window.addEventListener("scroll", () => {
    if (duration === 0) return;

    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / docHeight;

    const videoTime = scrollFraction * duration;
    video.currentTime = videoTime;
  });
});
