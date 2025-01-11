document.addEventListener('DOMContentLoaded', () => {
    function redirectIfMobile() {
        if (window.innerWidth < 768) {
            window.location.href = './about--me--phone.html';
        }
    }

    // Проверяем размер экрана сразу при загрузке
    redirectIfMobile();

    // Слушаем изменения размера экрана
    window.addEventListener('resize', redirectIfMobile);
});