let hrs = document.querySelector("#hrs")
let mins = document.querySelector("#mins")
let sec = document.querySelector("#sec")

setInterval(() => {
    let time = new Date();
    sec.innerHTML = (time.getSeconds()<10?"0":"")  + time.getSeconds()
    mins.innerHTML = (time.getMinutes()<10?"0":"")  + time.getMinutes()
    hrs.innerHTML = (time.getHours()<10?"0":"")  + time.getHours()

    



}, 1000);