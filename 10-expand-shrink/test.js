let inerval;
let interval2;
let unit = 2;
let width = 500;

function increase() {
    interval = setInterval(expand, 20);
}
function expand() {
/*     let width=document.getElementById('image').width;
 */    if (width < 1000) {
        width = width + unit;
        document.getElementById('image').width = width;
    } else {
        clearInterval(interval);

    }

}
function decrease() {
    interval2 = setInterval(shrick, 20);

}
function shrick() {
/*     let width=document.getElementById('image').width;
 */    if (width > 700) {
        width = width - unit;
        document.getElementById('image').width = width;
    } else {
        clearInterval(interval2);
    }


}
