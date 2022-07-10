'use strict';

const modal = document.querySelector('.modal');
const showModalbtns = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

showModalbtns.forEach(btn => {
    btn.addEventListener('click', openModalFunction);
});

closeModal.addEventListener('click', closeModalFunction);

overlay.addEventListener('click', closeModalFunction);

function closeModalFunction() {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
};

function openModalFunction() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};