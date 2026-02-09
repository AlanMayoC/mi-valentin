function accept() {
    document.getElementById("step1").classList.add("hidden");
    document.getElementById("step2").classList.remove("hidden");
    drawHeart();
  }
  
  function moveButton(btn) {
    btn.style.position = "absolute";
    btn.style.left = Math.random() * 200 + "px";
    btn.style.top = Math.random() * 200 + "px";
  }
  
  /* Corazón animado */
  function drawHeart() {
    const canvas = document.getElementById("heartCanvas");
    const ctx = canvas.getContext("2d");
    let t = 0;
  
    function heart(x) {
      return {
        x: 16 * Math.pow(Math.sin(x), 3),
        y: -(13 * Math.cos(x) - 5 * Math.cos(2 * x)
           - 2 * Math.cos(3 * x) - Math.cos(4 * x))
      };
    }
  
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#ff4d6d";
  
      for (let i = 0; i < 200; i++) {
        const p = heart(t + i);
        ctx.beginPath();
        ctx.arc(
          canvas.width / 2 + p.x * 6,
          canvas.height / 2 + p.y * 6,
          2,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
      t += 0.01;
      requestAnimationFrame(animate);
    }
  
    animate();
  }