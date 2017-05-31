$(document).ready(function() {
  var userChoice = [];
  $('button').click(function() {
    userChoice.push($(this).data('choice'));
    var currentSectionColor = $('section').data('color');
    switch (currentSectionColor) {
      case 'red':
        greenBtns();
        break;
      case 'green':
        blueBtns();
        break;
      case 'blue':
        $.post('/choice', { choice: userChoice }).done(function() {
          $('main').html('<p>감사합니다</p>');
        });
    }
  });
});

function greenBtns() {
  $('section').data('color', 'green');
  $('.choice-guide').text('두 버튼 중 더 짙은 초록색 버튼을 클릭해주세요.');
  $('button').removeClass('red').addClass('green');
}

function blueBtns() {
  $('section').data('color', 'blue');
  $('.choice-guide').text('두 버튼 중 더 파란 버튼을 클릭해주세요.');
  $('button').removeClass('green').addClass('blue');
}
