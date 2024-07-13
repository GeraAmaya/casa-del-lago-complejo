
window.addEventListener('load', function () {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
    var footerText = document.getElementById('footerText');
  
    if (screenWidth <= 600) {
      footerText.textContent = '©2024 - Todos los derechos reservados';
    } else {
      footerText.textContent = '©2024 - Cabaña Casa del Lago - Bialet Masse - Córdoba, Argentina';
    }
  });
  

  // Función para abrir el lightbox
function openLightbox(img) {
  var lightbox = document.getElementById('myLightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var caption = document.getElementById('caption');
  lightbox.style.display = 'block';
  lightboxImg.src = img.src;
  caption.innerHTML = img.alt;
}

// Función para cerrar el lightbox
function closeLightbox() {
  var lightbox = document.getElementById('myLightbox');
  lightbox.style.display = 'none';
}

// Añadir el evento onclick a cada imagen
document.querySelectorAll('.fotoCabanas img').forEach(img => {
  img.onclick = function() {
    openLightbox(this);
  };
});
