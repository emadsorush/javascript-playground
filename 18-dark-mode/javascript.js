window.onload=function(e){
    var toggle=document.getElementById('toggle')
    toggle.addEventListener('change',function(){
        document.body.classList.toggle('dark',e.target.checked)
    })

}