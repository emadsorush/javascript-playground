window.onload=function(){
    let event=document.getElementById('start')
    event.addEventListener('click',function(){
        alert('start is active');
    })
    let event2=document.getElementById('stop');
    event2.addEventListener('click', function(){
        alert('stop is active')
    })
}