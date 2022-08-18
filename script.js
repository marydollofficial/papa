let ref = document.querySelector('.link');
let img = document.querySelector('.image');

ref.addEventListener('click', () => {
    img.classList.add('vis');
});