let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product => {
    product.onclick = () => {
        preveiwContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close => {
    close.querySelector('.bx-x').onclick = () => {
        close.classList.remove('active');
        preveiwContainer.style.display = 'none';
    };
});


let container = document.querySelector('.hero-img');

container.onmousemove = (e) => {
    container.querySelectorAll('.parallax').forEach(parallax => {
        let speed = parallax.getAttribute('data-speed');
        let x = (window.innerWidth - e.pageX * speed) / 70;
        let y = (window.innerHeight - e.pageY * speed) / 70;
        parallax.style.transform = `translateX(${x}px) translateY(${y}px)`;
        container.style.backgroundPosition = `${x}% ${y}%`;
    });
};
