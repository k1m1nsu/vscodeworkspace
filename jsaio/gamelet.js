const ball = document.getElementById('ball');
document.addEventListener('keydown',handleKeyPress);
let position = 0;
let verticalPosition = 0;
function handleKeyPress(e){
    if(e.code === 'ArrowLeft'||e.code==='KeyA'){
        position = position -50;
    }
    if(e.code === 'ArrowRight'||e.code==='KeyD'){
        position = position +50;
    }
    if(position<0){
        position=0;
    }
    if(e.code === 'ArrowUp'||e.code==='KeyW'){
        verticalPosition = verticalPosition -50;
    }
    if(e.code === 'ArrowDown'||e.code==='KeyS'){
        verticalPosition = verticalPosition +50;
    }
    if(verticalPosition<0){
        verticalPosition=0;
    }
    refresh();
}

function refresh(){
    ball.style.left = position + 'px';
    ball.style.top = verticalPosition + 'px';
}