const overlay = document.querySelector('.overlay');
const tl = gsap.timeline()
var toggle = false


tl.from('nav', { opacity: 0, translateY: '-10px', duration: '0.6' })
  .from('.hero', { opacity: 0, translateX: '100px', duration: '0.6' })
  .from('.title', { opacity: 0, translateX: '-40px', duration: '0.6' })
  .from('.circle', { scale: 0, duration: '0.6' })

  
function openNav() {
    overlay.classList.add('overlay-open')
}

function closeNav() {
  overlay.classList.remove('overlay-open')
}
    
//     if(navBtn.classList.contains('close')) {
//     }
// })

