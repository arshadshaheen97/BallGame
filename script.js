document.addEventListener("DOMContentLoaded", function() {
    const ball = document.getElementById("ball");
    const container = document.getElementById("container");
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
  
    let x = Math.random() * (containerWidth - 50);
    let y = Math.random() * (containerHeight - 50);
    
    let speedX = (Math.random() * 2 + 1) * 0.5;  // Reduced speed by half
    let speedY = (Math.random() * 2 + 1) * 0.5;  // Reduced speed by half
  
    const moveInterval = setInterval(function() {
      x += speedX;
      y += speedY;
  
      if (x <= 0 || x >= containerWidth - 50) {
        speedX = -speedX; // Reverse the horizontal direction
      }
  
      if (y <= 0 || y >= containerHeight - 50) {
        speedY = -speedY; // Reverse the vertical direction
      }
  
      ball.style.left = x + "px";
      ball.style.top = y + "px";
    }, 16);  // roughly 60fps
  
    ball.addEventListener("click", function() {
      // Reset ball position
      x = Math.random() * (containerWidth - 50);
      y = Math.random() * (containerHeight - 50);
      
      // Reset and re-apply speed values
      speedX = (Math.random() * 2 + 1) * 0.5;  // Reduced speed by half
      speedY = (Math.random() * 2 + 1) * 0.5;  // Reduced speed by half
    });
  });
  