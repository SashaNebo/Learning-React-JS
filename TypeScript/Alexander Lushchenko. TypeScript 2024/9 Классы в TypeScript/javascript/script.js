"use strict";
// Объявляем класс
class Button {
    text;
    className;
}
console.log(Button);
const b_01 = new Button();
b_01.text = 'click me';
b_01.className = ['button', 'button_red'];
console.log(b_01);
// ---
// Занесение данных сразу в класс
class Header {
    text = 'Header One';
    fontSize = '16px';
}
const h_01 = new Header();
console.log(h_01);
// ---
// Методы
class Button2 {
    text;
    className;
    create() {
        const button = document.createElement('button');
        button.textContent = this.text;
        this.className.forEach(style => button.classList.add(style));
        return button;
    }
}
const b02 = new Button2();
console.log(b02);
b02.text = 'CLICK';
b02.className = ['btn', 'btn-success', 'm-2'];
document.body.append(b02.create());
// ---
// Конструктор
class ButtonElement {
    text;
    className;
    role;
    // readonly type: string = 'button'
    constructor(text, className) {
        this.text = text;
        this.className = className;
        this.role = 'button';
    }
    create() {
        const button = document.createElement('button');
        button.textContent = this.text;
        button.setAttribute('role', this.role);
        this.className.forEach(style => button.classList.add(style));
        return button;
    }
}
const b03 = new ButtonElement('CLICK 2', ['btn', 'btn-primary', 'm-2']);
document.body.append(b03.create());
//# sourceMappingURL=script.js.map