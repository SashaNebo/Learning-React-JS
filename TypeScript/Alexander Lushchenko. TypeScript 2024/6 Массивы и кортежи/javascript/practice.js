"use strict";
// Сделать программу в которой я смогу добавлять и удалять пользователей.
const form = document.querySelector('.form');
const input = document.querySelector('.i-1');
const namesList = document.querySelector('.names-list');
let newName = '';
let arrayNames = [];
form.addEventListener('submit', handleForm);
input.addEventListener('input', handleInput);
function handleInput({ target }) {
    newName = target.value;
}
function handleForm(e) {
    e.preventDefault();
    arrayNames.push(newName);
    input.value = '';
    namesList.insertAdjacentHTML('beforeend', nameHTML(newName));
    const buttonsRemove = document.querySelectorAll('.remove');
    buttonsRemove.forEach(button => button.addEventListener('click', removeName));
    const notUsers = document.querySelector('.not-users');
    if (notUsers)
        notUsers.remove();
}
function nameHTML(name) {
    return `<p id=${arrayNames.length} class="name"> <span>${name}</span><button class='remove'>x</button> </p>`;
}
function removeName({ target }) {
    const currentElement = target.closest('.name');
    const currentId = currentElement.id;
    arrayNames.splice(currentId - 1, 1);
    currentElement.remove();
    if (arrayNames.length === 0)
        return usersNotFound();
}
function usersNotFound() {
    return (namesList.innerHTML = `<h1 class="not-users">Pizses gde vse users</h1>`);
}
//# sourceMappingURL=practice.js.map