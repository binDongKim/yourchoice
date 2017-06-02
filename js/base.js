$(document).ready(function() {
  var currentTestCase = $('main').data('case');
  var userChoice = [];
  manipulateResult(currentTestCase, 3500);
  $('button').click(function() {
    userChoice.push($(this).data('choice'));
    var currentSectionColor = $('section').data('color');
    switch (currentSectionColor) {
      case 'red':
        greenBtns(currentTestCase);
        manipulateResult(currentTestCase, 2500);
        break;
      case 'green':
        blueBtns(currentTestCase);
        manipulateResult(currentTestCase, 3000);
        break;
      case 'blue':
        $.post('/choice', { testCase: currentTestCase, choice: userChoice }).done(function() {
          $('main').html('<p class="thanks card-panel teal lighten-1 white-text">참여해주셔서 감사합니다.</p>');
        });
    }
  });
});

function manipulateResult(testCase, msLater) {
  var caseNum = Number(testCase.slice(-1)); // 1,2,3,4,5,6,7
  /*
    1,4,7일땐 do nothing
    2,5일땐 첫번째 button value+1
    3,6일땐 두번째 button value+1
  */

  var index = (caseNum+1)%3;
  if(index !== 2) {
    var targetButton = $('button:eq(' + index + ')');
    setTimeout(function() {
      var targetResult = Number($(targetButton).text());
      $(targetButton).text(targetResult+1);
    }, msLater);
  }
}

function greenBtns(testCase) {
  $('section').data('color', 'green');
  $('.choice-guide').html('두 버튼 중 <u>더 짙은 초록색</u> 버튼을 클릭해주세요.');
  $('button').removeClass('red').addClass('green');
  switch (testCase) {
    case 'case1':
    case 'case2':
    case 'case3':
      $('button:eq(0)').text(91);
      $('button:eq(1)').text(20);
      break;
    case 'case4':
    case 'case5':
    case 'case6':
      $('button:eq(0)').text(50);
      $('button:eq(1)').text(47);
      break;
  }
}

function blueBtns(testCase) {
  $('section').data('color', 'blue');
  $('.choice-guide').html('두 버튼 중 <u>더 파란</u> 버튼을 클릭해주세요.');
  $('button').removeClass('green').addClass('blue');
  switch (testCase) {
    case 'case1':
    case 'case2':
    case 'case3':
      $('button:eq(0)').text(83);
      $('button:eq(1)').text(28);
      break;
    case 'case4':
    case 'case5':
    case 'case6':
      $('button:eq(0)').text(54);
      $('button:eq(1)').text(43);
      break;
  }
}
