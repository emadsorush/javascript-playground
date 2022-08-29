let ID;
let fade;
function Fadein(){
    clearInterval(fade);
    ID=setInterval(hide,20);
}

function hide(){
    let img= document.getElementById('image')
    let opacity=Number(window.getComputedStyle(img).getPropertyValue('opacity'))
    if(opacity>0){
        opacity=opacity- 0.01;
        img.style.opacity=opacity
    }
    else{
        clearInterval(ID);
    }
}
function FadeOut(){
     fade=setInterval(show,20);
    
}
function show(){
    clearInterval(ID);

    let img= document.getElementById('image')

    let opacity=Number(window.getComputedStyle(img).getPropertyValue('opacity'))
    if(opacity<1){
        opacity=opacity + 0.01;
        img.style.opacity=opacity;
    }
    else{
        clearInterval(fade);
    }
}