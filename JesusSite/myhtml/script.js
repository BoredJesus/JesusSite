document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.falling-photos-container');

    function createFallingPhoto(img) {
        const fallingPhoto = img.cloneNode(); // Клонируем изображение
        container.appendChild(fallingPhoto);

        const randomSize = Math.floor(Math.random() * 100) + 50; // Случайный размер от 50px до 150px
        const randomLeft = Math.random() * (window.innerWidth - randomSize);
        fallingPhoto.style.width = randomSize + 'px';
        fallingPhoto.style.left = randomLeft + 'px';

        const animationDuration = Math.random() * 3 + 2;
        fallingPhoto.style.animationDuration = animationDuration + 's';

        fallingPhoto.addEventListener('animationiteration', () => {
            container.removeChild(fallingPhoto);
            createFallingPhoto(img);
        });
    }

    const fallingPhotos = document.querySelectorAll('.falling-photos-container img');
    fallingPhotos.forEach((img) => {
        createFallingPhoto(img);
    });
});
