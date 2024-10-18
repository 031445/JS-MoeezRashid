let hrs = document.querySelector(".hrs")
let mins = document.querySelector(".mins")
let secs = document.querySelector(".secs")

function displayTime() {
    let time = new Date();
    let hh = time.getHours()
    let mm = time.getMinutes()
    let ss = time.getUTCSeconds()
    let hrotation = hh * 30 + mm / 2
    let mrotation = 6 * mm
    let srotation = 6 * ss
    hrs.style.transform = `rotate(${hrotation}deg)`
    mins.style.transform = `rotate(${mrotation}deg)`
    secs.style.transform = `rotate(${srotation}deg)`
}
setInterval(displayTime, 1000)