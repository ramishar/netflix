//accordion for faqs - home page, index.html
const accordion = document.getElementsByClassName('faqs-container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

//browse.html, navigation bar to remain black while scrolling
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if(window.scrollY >= 100) {
    nav.classList.add('nav_black')
  } else {
    nav.classList.remove('nav_black')
  }
})

//browse.html video player
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById('video').pause();
}
