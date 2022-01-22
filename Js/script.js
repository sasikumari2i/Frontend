document.getElementById("num1").addEventListener("click",display)
document.getElementById("num2").addEventListener("click",display)
document.getElementById("num3").addEventListener("click",display)
document.getElementById("num4").addEventListener("click",display)
document.getElementById("num5").addEventListener("click",display)
document.getElementById("num6").addEventListener("click",display)
document.getElementById("num7").addEventListener("click",display)
document.getElementById("num8").addEventListener("click",display)
document.getElementById("num9").addEventListener("click",display)
document.getElementById("num0").addEventListener("click",display)
document.getElementById("division").addEventListener("click",display)
document.getElementById("subtract").addEventListener("click",display)
document.getElementById("plus").addEventListener("click",display)
document.getElementById("multiplies").addEventListener("click",display)
document.getElementById("decimal").addEventListener("click",display)
document.getElementById("equalTo").addEventListener("click",equals)
document.getElementById("clearScreen").addEventListener("click",clearDisplay)

function display() {
    document.getElementById("num").innerHTML += this.innerHTML 
}

function clearDisplay() {
    document.getElementById("num").innerHTML = ""
}

function equals() {
    let num = document.getElementById("num").innerHTML
    let result = eval(num)
    document.getElementById("num").innerHTML = result
    return result
}
