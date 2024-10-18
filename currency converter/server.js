let fromCountry  = document.querySelector("#from-country")
// alert("Welcome ! Please select the both countries to get exchange rate")
let fromOutput = document.querySelector(".fromOutput")
let toOutput = document.querySelector(".toOutput")
let input =document.querySelector("input")
let btn = document.querySelector("button")
let toCountry = document.querySelector("#to-country")
let options = document.querySelectorAll("select");
var country_name = document.querySelectorAll("option");
for (let select of options) {
    for (curcode in countryList) {
        const fullCunName = countryList[curcode];
        let new_options = document.createElement("option");
        new_options.innerText = curcode + "-" + fullCunName;
        new_options.value = curcode;
        select.append(new_options);
    }



    select.addEventListener("change", (evt) => {
        updateflag(evt.target)
    })
}
let updateflag = async (element) => {
    let curcode = element.value;
    let flgName = curcode.slice(0, 2);

    let img_url = `https://flagsapi.com/${flgName}/flat/64.png`
    let img = element.parentElement.parentElement.querySelector("img")
    img.src = img_url
}



let  mainfuntion = async () => {
    btn.addEventListener("click",()=>{
       let fromcost= fromCountry.value
       let tocost= toCountry.value




 async   function exchangerate() {

    

        let curr_url =await fetch(`https://proxy.cors.sh/https://v6.exchangerate-api.com/v6/3fd3e93bb988b756e2f65fb3/latest/USD`)
        let response = await curr_url.json()
        let   torate = response.conversion_rates[tocost]
        let inputVal=input.value
        let result = Math.floor(
            inputVal*torate
        ) 

    toOutput.innerText=`${inputVal} ${fromcost}=${result} ${tocost}`
    fromOutput.innerText=`1 ${fromcost}=${torate} ${tocost}`


    
 }
    exchangerate()
     

    
    })
 
}
mainfuntion()
