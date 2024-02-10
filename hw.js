const box = document.getElementById('box');

document.getElementById('btn1').addEventListener('click', () => {
  let x = 0;
  let y = 0;

  function animate() {
    if (x === 300 && y === 0) {
      x = 300;
      y = 150;
    } else if (x === 300 && y === 150) {
      x = 0;
      y = 150; 
    } else if (x === 0 && y === 150) {
      x = 0;
      y = 0;
    } else {
      x += 10;
    }
    
    box.style.left = x + 'px';
    box.style.top = y + 'px';

    requestAnimationFrame(animate);
  }

  animate();
});

document.getElementById('btn2').addEventListener('click', () => {
  // код анімації по трикутнику
});

document.getElementById('btn3').addEventListener('click', () => {
  box.style.width = '400px';
  box.style.height = '400px';
  box.style.opacity = 1;
  
  // код для повернення на місце
});