// Progress bar
function progressBarScroll() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("scroll-progress").style.width = scrolled + "%";
}

window.onscroll = function () {
  progressBarScroll();
};

//continuouslyplayanimation('box-animation');
//continuouslyplayanimation('arrow-animation');

// Box animation
//const animation = document.getElementById('box-animation');
//console.log('Executing animation!');

// Function to restart the animation when it ends
//function restartAnimation() {
 // animation.stop();
  //animation.play();
//}

// Event listener to detect when the animation ends
//animation.addEventListener('complete', restartAnimation);

// arrow animation
//const animation = document.getElementById('arrow-animation');
//console.log('Executing animation!');

// Function to restart the animation when it ends
//function restartAnimation() {
 // animation.stop();
  //animation.play();
//}

// Event listener to detect when the animation ends
//animation.addEventListener('complete', restartAnimation);




function setupAnimation(id) {
  const animation = document.getElementById(id);
  console.log('Executing animation for', id);

  // Function to restart the animation when it ends
  function restartAnimation() {
    animation.stop();
    animation.play();
  }

  // Event listener to detect when the animation ends
  animation.addEventListener('complete', restartAnimation);
}

// Call the function for each animation
setupAnimation('box-animation');
setupAnimation('arrow-animation');
