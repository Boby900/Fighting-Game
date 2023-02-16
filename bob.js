const buttonQ = document.getElementById("q")
const buttonH = document.getElementById("h")
const buttonP = document.getElementById("p")
const buttonR = document.getElementById("r")
const audio1 = document.getElementById("sound1")
const audio2 = document.getElementById("sound2")
const audio3 = document.getElementById("sound3")
const audio4 = document.getElementById("sound4")
const damage1 = document.getElementById("damage-1")
const damage2 = document.getElementById("damage-2")
const Reset = document.getElementById("reset")
const result = document.getElementById("result")
const random = ()=>{
    return Math.ceil(Math.random() * 10)
}
buttonQ.onclick = ()=>{audio2.play(),damage2.textContent -= random(),winner()}
buttonH.onclick = ()=> {audio1.play();
    if(damage1.textContent >= 100){
        return damage1.textContent = 100
    }
    damage1.textContent = Number(damage1.textContent) + random(),winner();
    }
buttonP.onclick = ()=> {audio4.play(),damage1.textContent -= random(),winner()}
buttonR.onclick = ()=> {audio3.play();
    if(damage2.textContent >= 100){
        return damage2.textContent = 100 
    }
    damage2.textContent = Number(damage2.textContent) + 10}

Reset.onclick = ()=>{damage2.textContent=100,damage1.textContent=100,damage1.textContent=100,damage2.textContent=100,result.textContent =""}
let winner1 = ()=>{
    result.textContent = "Player2 Won 🏆"
}
let winner2 = ()=>{
    result.textContent = "Player1 Won 🏆"
}
const winner = ()=>{
    if(damage1.textContent <=0){
       winner1()
    }
    else if(damage2.textContent <=0){
        winner2()
    }
}
document.addEventListener("keydown", function(e){
    
    if (e.key ==="q" || e.key ==="Q"){
        audio2.play(),damage2.textContent -= random(),winner()
    }
    else if(e.key === "u" || e.key ==="U"){
        audio1.play();
    if(damage1.textContent >=100){
        return damage1.textContent = 100
    }
    damage1.textContent = Number(damage1.textContent)+ 10}
    else if(e.key === "p" || e.key === "P"){
        audio4.play(),damage1.textContent -= random(),winner()
    }
    else if(e.key === "r" || e.key === "R"){
        audio3.play();
    if(damage2.textContent >= 100){
        return damage2.textContent = 100
    }
    damage2.textContent = Number(damage2.textContent) + 10
    }
})