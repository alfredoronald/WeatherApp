const loadingScreen = document.getElementById('loading-screen');
const mintContent = document.getElementById('mint-content');

setTimeout(() => {
  if (loadingScreen) {
    loadingScreen.style.display = 'none';
  }
  if (mintContent) {
    mintContent.style.display = 'block';
  }
  if(window.location.pathname === '/') {
    window.location.href = "/weather";
  }
}, 1000); // Adjust the timeout as needed
