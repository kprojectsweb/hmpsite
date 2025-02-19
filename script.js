// Handle hamburger click to toggle menu
document.getElementById("hamburger").addEventListener('click', function() {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.getElementById('menu');
  const menuBackground = document.getElementById('menu-background');
    
  hamburger.classList.toggle('active');
    
  // Toggle the menu slide and blur background
  if (hamburger.classList.contains('active')) {
    menu.style.right = '10px'; // Slide in the menu
    menuBackground.style.display = 'block'; // Show the background overlay
  } else {
    menu.style.right = '-300px'; // Slide the menu out of view
    menuBackground.style.display = 'none'; // Hide the background overlay
  }
});
  
// Close menu when clicking on the blurred background
document.getElementById("menu-background").addEventListener('click', function() {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.getElementById('menu');
  const menuBackground = document.getElementById('menu-background');
    
  hamburger.classList.remove('active');
  menu.style.right = '-300px'; // Slide the menu out of view
  menuBackground.style.display = 'none'; // Hide the background overlay
});