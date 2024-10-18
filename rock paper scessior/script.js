let userscore = 0;
let compscore = 0;
let options = document.body.querySelectorAll(".choice")
let img = document.body.querySelectorAll("img")
let userWinCoun=document.body.querySelector("#userrun")
let compWinCoun=document.body.querySelector("#comprun")
let msg=document.body.querySelector("#msgbox")
let msgCon=document.body.querySelector(".msg")


const compGen = () => {
    let arr = ["rock", "paper", "scissor"]
    let randidx = Math.floor(Math.random() * 3)
    return (arr[randidx])
}
const drawgame = () => {
  msg.innerHTML="Game was draw"
  msg.style.backgroundColor="rgb(30, 20, 220)" 
}
const indicateWinner=(userwin,compGenVal,userchoice) =>{
    if(userwin){
        userscore++;
        userWinCoun.innerHTML=userscore 
        msg.style.backgroundColor="rgb(25, 83, 2)"
        msg.innerHTML =`Your ${userchoice} beats the ${compGenVal} `
    }
    else{
        compscore++;
        compWinCoun.innerHTML=compscore
        msg.style.backgroundColor="red" 
        msg.innerHTML =`Your ${userchoice} beats by the ${compGenVal} `
    }
}
const playgame = (userchoice) => {
    const compGenVal = compGen()
   let userwin =true;
    if (userchoice === compGenVal) {
        drawgame()
    } else {
        if(userchoice==="rock"){
            userwin=compGenVal==="paper"?false:true;
        } 
        else if(userchoice==="paper"){
            userwin=compGenVal==="scissor"?false:true;
        }
        else
        {
            userwin=compGenVal==="rock" ? false:true;
        }
        indicateWinner(userwin,compGenVal,userchoice)
    }
}

img.forEach(img => {
    img.addEventListener("click", () => {
        const userchoice = img.getAttribute("id")
        playgame(userchoice)
     
    })
});