let number = 0
document.getElementById("value").textContent = number
document.getElementById("increase").onclick = increase
document.getElementById("decrease").onclick = decrease
document.getElementById("reset").onclick = reset

function increase(){
    if (number <= 999){
    document.getElementById("error").textContent = ""
    number = number + 1
    document.getElementById("value").textContent = number
}else{
      document.getElementById("error").textContent = "You cannot go above 999."  
}

function decrease(){
    if (number > 0){
    document.getElementById("error").textContent = ""
    number = number - 1
    document.getElementById("value").textContent = number
}else{document.getElementById("error").textContent = "You cannot go below zero."}
}

function reset(){
    document.getElementById("error").textContent = ""
    number = 0
    document.getElementById("value").textContent = number
}
