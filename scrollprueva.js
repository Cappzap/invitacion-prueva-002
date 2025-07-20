document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("scrollVideo");
  let duration = 0;
  const frameRate = 30; // Ajusta según el frame rate de tu video (24, 30, 60, etc.)

  // Cargar metadatos del video
  video.addEventListener("loadedmetadata", () => {
    duration = video.duration;
    console.log("Duración del video:", duration, "segundos");
  });

  // Detener reproducción automática
  video.pause();

  // Función para actualizar el tiempo del video
  const updateVideoTime = () => {
    if (duration === 0) return;

    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollFraction = Math.min(Math.max(scrollTop / docHeight, 0), 1);

    // Calcular el tiempo del video y alinear al frame más cercano
    const videoTime = scrollFraction * duration;
    const frameTime = Math.round(videoTime * frameRate) / frameRate;
    video.currentTime = frameTime;
  };

  // Debounce para optimizar scroll
  let isScrolling = false;
  const handleScroll = () => {
    if (!isScrolling) {
      isScrolling = true;
      requestAnimationFrame(() => {
        updateVideoTime();
        isScrolling = false;
      });
    }
  };

  // Escuchar eventos de scroll y touchmove
  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("touchmove", handleScroll, { passive: true });

  // Inicializar el video en el primer frame
  video.currentTime = 0;
});