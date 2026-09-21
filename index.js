const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  const line1 = document.getElementById('line-1');
  const line2 = document.getElementById('line-2');
  const line3 = document.getElementById('line-3');

  let isOpen = false;

  btn.addEventListener('click', () => {
    isOpen = !isOpen;

    if (isOpen) {
      menu.style.maxHeight = menu.scrollHeight + 'px';
      menu.classList.add('border-gray-800');

      // Cross animation
      line1.classList.add('rotate-45', 'translate-y-2');
      line2.classList.add('opacity-0');
      line3.classList.add('-rotate-45', '-translate-y-2');
    } else {
      menu.style.maxHeight = '0px';
      setTimeout(() => menu.classList.remove('border-gray-800'), 300);

      // Reset to hamburger
      line1.classList.remove('rotate-45', 'translate-y-2');
      line2.classList.remove('opacity-0');
      line3.classList.remove('-rotate-45', '-translate-y-2');
    }
  });



document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert("Right-click is disabled on this site!");
});


document.addEventListener('keydown', function(e) {
    // F12 key
    if (e.key === 'F12') {
        e.preventDefault();
        return false;
    }
    // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+U
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
        e.preventDefault();
        return false;
    }
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
    }
});
  
