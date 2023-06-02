const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');



function islampBroken(){
    return lamp.src.indexOf( 'quebrada' ) > -1
}



function lampOn(){
    if (!islampBroken () ){
        lamp.src = './img/ligada.png'
    }
}

function lampOff(){
    if (!islampBroken () ){
    lamp.src = './img/desligada.png'
    }
}
function lampHover(){
    if (!islampBroken () ){
    lamp.src = './img/ligada.png'
    } 
}
function lampOut(){
    if (!islampBroken () ){
    lamp.src = './img/desligada.png'
    }
}
function lampBroken(){
    lamp.src = './img/quebrada.png'
}

turnOn.addEventListener('click', lampOn); 
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampHover);
lamp.addEventListener('mouseout', lampOut);
lamp.addEventListener('dblclick', lampBroken);