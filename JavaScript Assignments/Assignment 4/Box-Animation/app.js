const shape = document.getElementById('shape');
let isDragging = false;
let offsetX, offsetY;

shape.onmousedown = function (e) {
    isDragging = true;
    offsetX = e.clientX - shape.offsetLeft;
    offsetY = e.clientY - shape.offsetTop;
    shape.style.cursor = "grabbing";
};

document.onmouseup = function () {
    isDragging = false;
    shape.style.cursor = "grab";
};

document.onmousemove = function (e) {
    if (isDragging) {
        shape.style.left = (e.clientX - offsetX) + 'px';
        shape.style.top = (e.clientY - offsetY) + 'px';
    }
};

