let bulb = document.getElementById("bulb")
let btn = document.getElementById("toggleBtn")
function toggle() {
    if (btn.textContent.includes('on')) {
        bulb.src = "img/light-bulb-png-16519.png"
        bulb.style.cssText = `height : 65vh;
        scale : 1.1;`
        btn.textContent = "turn off"
        btn.style = "background-color : #8338ec"
    }
    else {
        bulb.src = "img/light-bulb-png-16522.png"
        bulb.style = "height : 65vh"
        btn.textContent = "turn on"
        btn.style = "background-color : #ff006e"
    }
}