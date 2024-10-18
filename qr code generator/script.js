let but = document.querySelector("button");
let img = document.querySelector("img");
let inp = document.querySelector("input");
console.log(but,img,inp)

function genQR() {
    but.addEventListener("click",async () => {
        let data =inp.value
        let url = `https://quickchart.io/qr?text=${data}`
        img.src=url
        console.log(data,img.src)
    })
}
genQR()