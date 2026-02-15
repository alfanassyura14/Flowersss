onload = () => {
  const startBtn = document.getElementById('startBtn');
  const bgMusic = document.getElementById('bgMusic');
  
  startBtn.addEventListener('click', () => {
    // Play music
    bgMusic.volume = 0.5; // Set volume to 50%
    bgMusic.play();
    
    // Hide button
    startBtn.style.opacity = '0';
    startBtn.style.pointerEvents = 'none';
    
    // Start animation
    setTimeout(() => {
      document.body.classList.remove("not-loaded");
    }, 500);
  });
};