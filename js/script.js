window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("section-canvas");
  const section = canvas.parentElement;
  function resizeAndDraw() {
    const width = section.offsetWidth;
    const height = section.offsetHeight;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    // Vẽ tam giác phía trên section
    ctx.clearRect(0, 0, width, height);
    const grad = ctx.createLinearGradient(0, 0, width, 0);
    grad.addColorStop(0.61, "#6FB1FC");
    grad.addColorStop(0.94, "#0052D4");

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(width, 0);
    ctx.lineTo(width, 600);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();
  }

  resizeAndDraw();
  window.addEventListener("resize", resizeAndDraw);
});
