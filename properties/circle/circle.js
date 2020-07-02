registerPaint('circle', class {
    static get inputProperties() { return ['--radius']; }
    paint(ctx, geom, properties) {
      let radius = properties.get('--radius').value;
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.arc(geom.width / 2, geom.height / 2, radius, 0, 2 * Math.PI);
      ctx.fill();
    }
});