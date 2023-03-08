$(document).ready(function () {

  $('ul').hide();

  $('h2').on("click", function () {
      $('ul').slideUp();
      
      $(this).next('ul').slideDown();
  });
 });

const h2 = document.querySelectorAll('h2');

function expandir() {

  $('ul').hide();

  $('h2').on("click", function () {
      $('ul').slideUp();
      
      $(this).next('ul').slideDown();
  });
 };

 h2.addEventListener('click', expandir())