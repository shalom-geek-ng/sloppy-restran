// let navEl =  document.querySelector('.navbar')

// window.addEventListener('scroll',()=>{
//     if(window.scrollY > 50){
//      navEl.classList.add('nav-scrolled')
//     }else if(window.scrollY<50){
//         navEl.classList.remove('nav-scrolled')
//     }
// })

let navEl = document.querySelector('.navbar')

window.addEventListener('scroll',()=>{
    if(window.scrollY > 150){
navEl.classList.add('nav-scrolled')
    }
    else if(window.screenY<150){
        navEl.classList.remove('nav-scrolled')
    }
})

// Counter


let counterBtn = document.querySelector('.counter-btn')
let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;


counterBtn.addEventListener('click', ()=>{

    valueDisplays.forEach((valueDisplays) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplays.getAttribute("data-val"));
        let duration = Math.floor(interval/endValue);
        let counter = setInterval(function(){
          startValue += 5;
          valueDisplays.textContent = startValue;
          if (startValue == endValue) {
            clearInterval(counter);
            setTimeout(updateCounter, 20)
          }
          }, duration);
      });
})

// Carousel

let color_btn = document.querySelectorAll('.color-btn')
color_btn.addEventListener('click',()=>{
    
})

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}