

var btn = document.getElementsByClassName('login-button')[0];
var url = 'https://note.youdao.com/s/4HTy2sYY';
check = function () {
  if (input.value == '杨柳') {
    window.location = url;
  } else {
    alert('sorry, you\'re not the person I\'m looking for');
    window.location = 'https://hong-lou.github.io/index.html'
  }
};
var form = document.getElementsByTagName("form").item(0);
form.onsubmit = function () {
  return false
}