
window.addEventListener('load', function () {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
    var footerText = document.getElementById('footerText');
  
    if (screenWidth <= 600) {
      footerText.textContent = '©2024 - Todos los derechos reservados';
    } else {
      footerText.textContent = '©2024 - Cabaña Casa del Lago - Bialet Masse - Córdoba, Argentina';
    }
  });
  