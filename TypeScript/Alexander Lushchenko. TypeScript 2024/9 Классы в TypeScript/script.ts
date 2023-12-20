// Объявляем класс
class Button {
  text: string
  className: string[]
}
console.log(Button)
const b_01 = new Button()
b_01.text = 'click me'
b_01.className = ['button', 'button_red']
console.log(b_01)

// ---

// Занесение данных сразу в класс
class Header {
  text: string = 'Header One'
  fontSize: string = '16px'
}
const h_01 = new Header()
console.log(h_01)

// ---

// Методы
class Button2 {
  text: string
  className: string[]
  create(): HTMLButtonElement {
    const button = document.createElement('button')
    button.textContent = this.text
    this.className.forEach(style => button.classList.add(style))
    return button
  }
}

const b02 = new Button2()
console.log(b02)
b02.text = 'CLICK'
b02.className = ['btn', 'btn-success', 'm-2']
document.body.append(b02.create())

// ---

// Конструктор
class ButtonElement {
  text: string
  className: string[]
  readonly role: string
  // readonly type: string = 'button'

  constructor(text: string, className: string[]) {
    this.text = text
    this.className = className
    this.role = 'button'
  }

  create(): HTMLButtonElement {
    const button = document.createElement('button')
    button.textContent = this.text
    button.setAttribute('role', this.role)
    this.className.forEach(style => button.classList.add(style))
    return button
  }
}

const b03 = new ButtonElement('CLICK 2', ['btn', 'btn-primary', 'm-2'])
document.body.append(b03.create())
