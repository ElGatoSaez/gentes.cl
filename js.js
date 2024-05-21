  // Function to remove <br> tags for mobile devices
  function removeBrForMobile() {
    if (window.innerWidth <= 768) {
      const subtitulo = document.getElementById('subtitulo');
      subtitulo.innerHTML = subtitulo.innerHTML.replace(/<br\s*\/?>/g, ' ');
    }
  }

  // Run the function on page load
  window.onload = removeBrForMobile;

  // Run the function on window resize
  window.onresize = removeBrForMobile;