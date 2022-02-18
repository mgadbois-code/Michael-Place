let sunContainer = document.getElementById('sun--container')
let sunRay = document.getElementById('sun--ray')
let stars = document.getElementById('stars--background')
let mountains = document.getElementById('mountains')
// let sunContainer = document.getElementById('sun--container')

window.addEventListener('scroll', () => {
    let value = this.window.scrollY;
    if (value > window.innerHeight * 4) {
        return
    }
    console.log(value)
    sunRay.style.padding = 150 - value/20 + 'px'
    sunContainer.style.top = value * 0.33 + 'px';
})