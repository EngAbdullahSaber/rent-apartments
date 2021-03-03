


var slider = document.getElementById('test-slider');
  noUiSlider.create(slider, {
   start: [1000, 3000],
   connect: true,
   step: 1,
   orientation: 'horizontal', // 'horizontal' or 'vertical'
   range: {
     'min': 1000,
     'max': 8000
   },
   behaviour: 'tap-drag',
    tooltips: true,
    format: wNumb({
        decimals: 0
    }),
  });
     
 







