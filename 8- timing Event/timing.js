let id;
let seconds=0;
function printMessage(){
    document.getElementById('text').innerText='this message after '+seconds+' second'
    seconds++;
}
function start() {
   id= window.setInterval(printMessage, 1000 );
}

function end(){
    window.clearInterval(id);
}
