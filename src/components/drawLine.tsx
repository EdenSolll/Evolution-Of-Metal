const drawLine = (info, style = {}) => {
  const {x, y, x1, y1} = info;
  const {color = 'blue', width = 1} = style;

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x1, y1);
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.stroke();
}
