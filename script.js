let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

const openModal = () => {
    modal.classList.add("active");
    overlay.classList.add("activeOverlay");
}

const closeModal = () => {
    modal.classList.remove("active");
    overlay.classList.remove("activeOverlay");
}