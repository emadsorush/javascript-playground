window.onload = function () {
    let continer = document.getElementById('continer');
    const photo = document.querySelector('img')
    continer.addEventListener('mousemove', function (e) {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        photo.style.transformOrigin = `${x}px ${y}px`;
        photo.style.transform = 'scale(2)';
    })
    continer.addEventListener('mouseleave', function (e) {
        photo.style.transformOrigin = `center center`
        photo.style.transform = 'scale(1)'
    })
}