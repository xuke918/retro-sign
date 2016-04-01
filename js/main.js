$('.svg').on('click', function () {
  $('svg').toggleClass('.is-clicked');
});

$('.lines').on('animationend', function () {
  $(this).removeClass('draw');
});
