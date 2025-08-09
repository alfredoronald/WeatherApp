
export function loading() {
  
}
const loadingScreen = document.getElementById('loading-screen');
const mintContent = document.getElementById('mint-content');

if (loadingScreen) loadingScreen.style.display = 'block';
if (mintContent) mintContent.style.display = 'none';
setTimeout(() => {
  if (loadingScreen) {
    loadingScreen.style.display = 'none';
  }
  if (mintContent) {
    mintContent.style.display = 'block';
  }
  
}, 6000); // Adjust the timeout as needed
