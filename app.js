let sunContainer = document.getElementById('sun--container')
let sunRay = document.getElementById('sun--ray')
let stars = document.getElementById('stars--background')
let mountains = document.getElementById('mountains')
let aurora = document.getElementById('aurora')
let opacity = 0;
let brightness = 1;
let pageHeight= window.innerHeight * 4;

window.addEventListener('scroll', () => {
    let value = this.window.scrollY;
    if (value > window.innerHeight * 4) {
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
        opacity =  (value / (window.innerHeight * 4)) * (value / (window.innerHeight * 4)) * (value / (window.innerHeight * 4)) * (value / (window.innerHeight * 4))
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