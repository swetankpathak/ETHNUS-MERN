function forward(){
    var step=5;
    var y = document.getElementById('space-craft').offsetLeft;

    timer = setInterval(()=>{
        y=y+step;
        document.getElementById('space-craft').style.left = y+'px';
    },100)
}

function stop(){
    clearInterval(timer);
}