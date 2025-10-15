// === Script JS ===
const bodyEl = document.querySelector('body');
const toggleElement = document.querySelector('.toggle'); // Light/Dark Mode Style
const hamburgerIcon = document.getElementById('hamburger-icon'); // Hamburger Menu For Smaller Displays On Devices
const siderBarEl = document.querySelector('.nav-link-responsive');
const xMarkEl = document.getElementById('x-mark');
const textEl = document.querySelector('.js-auto-text');
const texts = ['Explore' , 'Achieve' , 'Thrive']; // Continous Text
const typeBarEl = document.querySelector('.js-type-bar');
const homeLinkEl = document.querySelector('.home-link');

// Light/Dark Mode Style Active
toggleElement.addEventListener('click' , ()=>{
  bodyEl.classList.toggle('active')
})
 
// Hamburger Menu Display
hamburgerIcon.addEventListener('click' , ()=>{
  siderBarEl.classList.toggle('show-sidebar');
})
xMarkEl.addEventListener('click' , ()=>{
  siderBarEl.classList.remove('show-sidebar');
})

// Read More Section
document.querySelectorAll('.read-more')
  .forEach((readMoreEl)=>{
    readMoreEl.addEventListener('click' , ()=>{
      const careerInfoEl = readMoreEl.parentElement;
      careerInfoEl.classList.add('show-more');
  });
});

const homePage = homeLinkEl.classList.contains('active') ? true : false;

if(homePage){

let textIndex = 0;

// Animation
animateText(texts,textEl,textIndex);

function animateText(texts,element,textIndex){
  let index = 0;
  if(textIndex > 2){
    textIndex = 0;
  }
  const text = texts[textIndex];
  let interval =  setInterval(()=>{
    if(index < text.length){
      element.innerHTML += text.charAt(index);
      index ++;
    }else if (index === text.length){
      clearInterval(interval);
      setTimeout(()=>{
        element.innerHTML = '';
        textIndex ++;
        animateText(texts,element,textIndex);
      },1000) 
    }
  },150)
}
}
