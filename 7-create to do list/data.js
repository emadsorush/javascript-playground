window.onload = function () {
    let userlist=document.querySelector('.neme-list')
    let listInput=document.querySelector('.inputeText')
    let btn=document.querySelector('.addListButton')
    btn.addEventListener('click', function(){
        const newUser=document.createElement('li')
        const userData=document.createTextNode(listInput.value)
        newUser.appendChild(userData);
        userlist.appendChild(newUser);
        listInput.value=' '
    })
   

}