
window.onload = function () {
    let auto = document.getElementById('auto');
    auto.addEventListener('click', function () {
            setInterval(colorChange,100);
        function colorChange() {
            document.body.style.backgroundColor = `hsl(${Math.floor(Math.random() * 255)} 100% 50%)`;
        }
    })

    let btnRed = document.getElementById('btnRed');
    btnRed.addEventListener('click', function () {
        document.body.style.backgroundColor = 'red';
        document.getElementById('btnRed').style.backgroundColor = 'white'
    })

    let btn = document.getElementById("btn");
    btn.addEventListener("click", function () {
        document.body.style.backgroundColor = `hsl(${Math.floor(
            Math.random() * 255
        )} 100% 50%)`;
        btn.style.backgroundColor = "white";
    });
    /* let btnAuto =document.getElementById('auto');
      btnAuto.addEventListener('click',function(){ */

    /*  }) */
};
