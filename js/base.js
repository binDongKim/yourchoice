$(document).ready(function() {
  var testType = $('main').data('type'); // a, b, c

  var aCases = ['case1', 'case2', 'case3'];
  var bCases = ['case4', 'case5', 'case6'];
  var cCase  = 'case7';

  var currentCases;
  if(testType === 'a') {
    currentCases = aCases;
  } else if(testType === 'b') {
    currentCases = bCases;
  }

  var userCase = testType === 'c' ? cCase : popCase(currentCases);
  console.log('첫번째: ' + userCase);
  manipulateNumber(userCase, 3000);

  $('button').click(function() {
    var userChoice = $(this).data('choice');
    var currentSectionColor = $('section').data('color');
    switch (currentSectionColor) {
      case 'red':
        $.post('/choice', { userCase: userCase, choice: userChoice }).done(function(message) {
          if(message === 'Success') {
            greenBtns(testType);
            userCase = testType === 'c' ? cCase : popCase(currentCases);
            console.log('두번째: ' + userCase);
            manipulateNumber(userCase, 2500);
          } else {
            $('main'.html('<p class="card-panel red white-text">에러가 발생하였습니다!!</p>'));
          }
        });
        break;
      case 'green':
        $.post('/choice', { userCase: userCase, choice: userChoice }).done(function(message) {
          if(message === 'Success') {
            blueBtns(testType);
            userCase = testType === 'c' ? cCase : popCase(currentCases);
            console.log('세번째: ' + userCase);
            manipulateNumber(userCase, 2000);
          } else {
            $('main'.html('<p class="card-panel red white-text">에러가 발생하였습니다!!</p>'));
          }
        });
        break;
      case 'blue':
        $.post('/choice', { userCase: userCase, choice: userChoice }).done(function(message) {
          if(message === 'Success') {
            $('main').html('<p class="thanks card-panel teal lighten-1 white-text">참여해주셔서 감사합니다.</p>');
          } else {
            $('main'.html('<p class="card-panel red white-text">에러가 발생하였습니다!!</p>'));
          }
        });
        break;
    }
  });
});

function popCase(caseArr) {
  var index = Math.floor((Math.random() * caseArr.length)); // 0, 1, 2
  return caseArr.splice(index,1).toString();
}

function manipulateNumber(testCase, msLater) {
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

function greenBtns(testType) {
  $('section').data('color', 'green');
  $('.choice-guide').html('두 버튼 중 <u>더 짙은 초록색</u> 버튼을 클릭해주세요.');
  $('button').removeClass('red').addClass('green');

  if(testType === 'a') {
    $('button:eq(0)').text(91);
    $('button:eq(1)').text(20);
  } else if(testType === 'b') {
    $('button:eq(0)').text(50);
    $('button:eq(1)').text(47);
  }
}

function blueBtns(testType) {
  $('section').data('color', 'blue');
  $('.choice-guide').html('두 버튼 중 <u>더 파란</u> 버튼을 클릭해주세요.');
  $('button').removeClass('green').addClass('blue');

  if(testType === 'a') {
    $('button:eq(0)').text(83);
    $('button:eq(1)').text(28);
  } else if(testType === 'b') {
    $('button:eq(0)').text(54);
    $('button:eq(1)').text(43);
  }
}
