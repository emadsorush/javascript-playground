window.onload = function () {
    const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit.`;
    let index = 0;
    function autoWriter() {
        document.body.innerText = text.slice(0, index)
        index++;
        if (index > text.length - 1) {
            index = 0;
        }
    }
    setInterval(autoWriter, 100)
}
