var tom1 = document.querySelectorAll(".w")[0];
tom1.addEventListener("click", tom1Play);
function tom1Play () {
  var audio = new Audio('/sounds/tom-1.mp3');
  audio.play();
}

var tom2 = document.querySelectorAll(".a")[0];
tom2.addEventListener("click", tom2Play);
function tom2Play () {
  var audio = new Audio('/sounds/tom-2.mp3');
  audio.play()
}

var tom3 = document.querySelectorAll(".s")[0];
tom3.addEventListener("click", tom3Play);
function tom3Play () {
  var audio = new Audio('/sounds/tom-3.mp3');
  audio.play()
}

var tom4 = document.querySelectorAll(".d")[0];
tom4.addEventListener("click", tom4Play);
function tom4Play () {
  var audio = new Audio('/sounds/tom-4.mp3');
  audio.play()
}

var crash = document.querySelectorAll(".j")[0];
crash.addEventListener("click", crashPlay);
function crashPlay () {
  var audio = new Audio('/sounds/crash.mp3');
  audio.play()
}

var snare = document.querySelectorAll(".k")[0];
snare.addEventListener("click", snarePlay);
function snarePlay () {
  var audio = new Audio('/sounds/snare.mp3');
  audio.play();
}

var kick = document.querySelectorAll(".l")[0];
kick.addEventListener("click", kickPlay);
function kickPlay () {
  var audio = new Audio('/sounds/kick-bass.mp3');
  audio.play();
}

document.addEventListener('keypress', (e) => {
  var name = e.key;
  if (name=='w') {
    var audio = new Audio('/sounds/tom-1.mp3');
    audio.play();
  }
  else if (name=='a') {
    var audio = new Audio('/sounds/tom-2.mp3');
    audio.play()
  }
  else if (name=='s') {
    var audio = new Audio('/sounds/tom-3.mp3');
    audio.play()
  }
  else if (name=='d') {
    var audio = new Audio('/sounds/tom-4.mp3');
    audio.play()
  }
  else if (name=='j') {
    var audio = new Audio('/sounds/crash.mp3');
    audio.play()
  }
  else if (name=='k') {
    var audio = new Audio('/sounds/snare.mp3');
    audio.play()
  }
  else if (name=='l') {
    var audio = new Audio('/sounds/kick-bass.mp3');
    audio.play()
  }
}, false);