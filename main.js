const buttonYes = document.querySelector('.button-yes');
const buttonNo = document.querySelector('.button-no');

buttonYes.addEventListener('click', function () {
    buttonYesPushed();
});

function buttonYesPushed() {
    location.href = './page2.html';
}

buttonNo.addEventListener("mousemove", run);

function run(event) {
    const containerRect = document.querySelector('.container').getBoundingClientRect();
    const maxX = containerRect.width - buttonNo.offsetWidth;
    const maxY = containerRect.height - buttonNo.offsetHeight;
    const offsetX = event.pageX - containerRect.left;
    const offsetY = event.pageY - containerRect.top;

    // Ограничение перемещения кнопки внутри контейнера
    const newX = Math.max(0, Math.min(maxX, offsetX));
    const newY = Math.max(0, Math.min(maxY, offsetY));

    buttonNo.style.transform = `translate(${newX}px, ${newY}px)`;
}


