$('.svg').on('click', function () {
  $('this').toggleClass('.is-clicked');
});

$('.lines').on('animationend', function () {
  $(this).removeClass('draw');
});
