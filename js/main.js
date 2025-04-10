function scrollToAnchor(section) {
  const target = document.getElementById(section);
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 50;
  window.scrollTo({ top: targetPosition, behavior: 'smooth'});
}

function loadGalleryModalElements() {
  var modal = document.getElementById("gallery-modal");
  var modalClose = document.getElementById("gallery-modal-close");
  modalClose.onclick = function() { 
    modal.style.display = "none";
  }

  Array.from(document.getElementsByClassName('modal-image')).forEach((element) => {
    element.onclick = function() {
      var img = document.getElementById("gallery-modal-content");
      img.src = element.src;
      modal.style.display = "block";
    }
  });
}

loadGalleryModalElements();