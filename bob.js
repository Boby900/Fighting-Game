const buttonQ = document.getElementById("q")
const buttonH = document.getElementById("h")
const buttonP = document.getElementById("p")
const buttonR = document.getElementById("r")
const audio1 = document.getElementById("sound1")
const audio2 = document.getElementById("sound2")
const audio3 = document.getElementById("sound3")
const audio4 = document.getElementById("sound4")
buttonQ.onclick = ()=> audio1.play()
buttonH.onclick = ()=> audio2.play()
buttonP.onclick = ()=> audio3.play()
buttonR.onclick = ()=> audio4.play()