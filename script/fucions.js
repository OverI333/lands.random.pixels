document.addEventListener('DOMContentLoaded', function() {
    let isDragging = false;
    let offset = {x: 0, y: 0};
    let updateRandom = document.getElementById('updateRandom');
  
    updateRandom.addEventListener('mousedown', function(e) {
      isDragging = true;
      offset.x = e.clientX - parseInt(updateRandom.style.left || "1200vh");
      offset.y = e.clientY - parseInt(updateRandom.style.top || "500vh");
      updateRandom.style.cursor = 'grabbing';
    });
  
    document.addEventListener('mouseup', function() {
      isDragging = false;
      updateRandom.style.cursor = 'pointer';
    });
  
    document.addEventListener('mousemove', function(e) {
      if (isDragging) {
        let x = e.clientX - offset.x;
        let y = e.clientY - offset.y;
        updateRandom.style.left = x + 'px';
        updateRandom.style.top = y + 'px';
      }
    });
  });