let sunContainer = document.getElementById('sun--container')
let sunRay = document.getElementById('sun--ray')
let stars = document.getElementById('stars--background')
let mountains = document.getElementById('mountains')
let aurora = document.getElementById('aurora')
let opacity = 0;
let brightness = 1;
let pageHeight= window.innerHeight * 4;

const date= new Date()
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let year = date.getFullYear()
let month = months[date.getMonth()]
let day = date.getDay() -1 

let dateAsString = `${month} ${day}, ${year}`
let currDateDisplay = document.getElementById("current-date")
currDateDisplay.innerHTML = dateAsString

const menu = document.querySelector('#navbar--toggle')
const navbarLinks = document.querySelector('.navbar--menu')



// Display Mobile Menu

const mobileMenu = () => {
    window.scrollTo(window.scrollX, window.scrollY - 1);
    window.scrollTo(window.scrollX, window.scrollY + 1);
    menu.classList.toggle('is-active')
    navbarLinks.classList.toggle('active')
}
menu.addEventListener('click', mobileMenu)
navbarLinks.addEventListener('click', mobileMenu)

// Handle Scroll
window.addEventListener('scroll', () => {
    let value = this.window.scrollY;
    if (value > window.innerHeight * 3) {
        return
    }
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    // brightness = ((pageHeight)/(value + pageHeight)) ** 2
    // if(value % 5 == 0){
        // }
        console.log(brightness)
        // mountains.style.filter = `brightness(${brightness}%)`
        console.log("value " + value)
        sunRay.style.padding = 75 - ((value/pageHeight) * 75) + '%'
        sunContainer.style.top = value * 0.33 + 'px';
        opacity =  (value / (window.innerHeight * 3)) ** 6
        // stars.style.opacity = opacity
        document.documentElement.style.setProperty("--opacity",opacity)
    // if(value > window.innerHeight * 3){
    //     aurora.style.opacity = opacity ** 2
    // }
    // else{
    //     aurora.style.opacity = 0
    // }
    // // console.log(opacity)
})

