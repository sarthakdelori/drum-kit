function playSound(e){
  const sound = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
  if(!sound){
    return;
  }
  sound.currentTime = 0;
  sound.play();
  key.classList.add(`playing`);
  // console.log(e);
}
window.addEventListener('keydown',playSound);

const keys = document.querySelectorAll('.key');

function removeTransition(e){
  if(e.propertyName !== 'transform'){
    return;
  }

  this.classList.remove(`playing`);
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));