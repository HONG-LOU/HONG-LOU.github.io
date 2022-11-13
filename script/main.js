let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'image/title.jpg') {
    myImage.setAttribute ('src','image/one.jpg');
  } else if (mySrc === 'image/one.jpg') {
    myImage.setAttribute ('src','image/two.jpg');
  } else if (mySrc === 'image/two.jpg') {
    myImage.setAttribute ('src','image/three.jpg');
  } else if (mySrc === 'image/three.jpg') {
    myImage.setAttribute ('src','image/title.jpg');
  }
};