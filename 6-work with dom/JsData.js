window.onload=function(){
const newParagraph=document.createElement('p')
    newParagraph.innerText='dynamicaly create paragraph';
    document.body.appendChild(newParagraph);
    /* newParagraph.style.padding='100px 100px';
    newParagraph.style.fontSize='30px' */
    newParagraph.setAttribute('style','background-color:green;color:red;padding:100px 100px;font-size:30px')
}
function clickHandler(){
    const link=document.getElementById('li1')
    alert(link.getAttribute('id'))
    link.innerText='google.com'
    
}
