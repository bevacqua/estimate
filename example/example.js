var calc = estimate.element(pad);

requestAnimationFrame(function re () {
  console.clear();
  console.log(calc.total, calc.remaining, calc.progress);

  calc.update();
  remaining.innerText = calc.remaining;
  requestAnimationFrame(re);
});

