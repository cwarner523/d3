//an experiment using Mike Bostock’s Block bf2f5f02b62b5b3bb92ae1b59b53da36
var n = 480;
var m = 250
var values = new Array(n - m);

for (var j = 0.5, k = 0; j < m; ++j) {
  for (var i = 0.5; i < n; ++i, ++k) {
    values[k] = value(i / n * 19.2 - 9.6, 5 - j / m * 10);
  }
}

var canvas = document.querySelector("canvas"),
    context = canvas.getContext("2d"),
    color = d3.scaleSequential(d3.interpolateRainbow).domain([-1, 1]),
    path = d3.geoPath(null, context),
    thresholds = d3.range(-1.2, 1, 0.2),
    contours = d3.contours().size([n, m]);

context.scale(canvas.width / n, canvas.width / n);

d3.timer((t) => {
  var dv = (t % 1000) / 1000 * 0.2;
  contours
      .thresholds(thresholds.map((d) => { return d + dv; }))
    (values)
      .forEach(fill);
});

function fill(geometry) {
  context.beginPath();
  path(geometry);
  context.fillStyle = color(geometry.value);
  context.fill();
}

function value(x, y) {
  return Math.sin(x + y) * Math.sin(x - y);
}