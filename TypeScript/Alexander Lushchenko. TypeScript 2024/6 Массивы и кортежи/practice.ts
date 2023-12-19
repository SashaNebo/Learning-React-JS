// Сделать программу в которой я смогу добавлять и удалять пользователей.
const form = document.querySelector('.form') as HTMLFormElement
const input = document.querySelector('.i-1') as HTMLInputElement
const namesList = document.querySelector('.names-list')
let newName: string = ''
let arrayNames: string[] = []

form.addEventListener('submit', handleForm)
input.addEventListener('input', handleInput)

function handleInput({ target }): void {
  newName = target.value
}

function handleForm(e): void {
  e.preventDefault()
  arrayNames.push(newName)
  input.value = ''
  namesList.insertAdjacentHTML('beforeend', nameHTML(newName))
  const buttonsRemove = document.querySelectorAll('.remove')
  buttonsRemove.forEach(button => button.addEventListener('click', removeName))

  const notUsers = document.querySelector('.not-users')
  if (notUsers) notUsers.remove()
}

function nameHTML(name: string): string {
  return `<p id=${arrayNames.length} class="name"> <span>${name}</span><button class='remove'>x</button> </p>`
}

function removeName({ target }): void | string {
  const currentElement = target.closest('.name')
  const currentId = currentElement.id
  arrayNames.splice(currentId - 1, 1)
  currentElement.remove()

  if (arrayNames.length === 0) return usersNotFound()
}

function usersNotFound(): string {
  return (namesList.innerHTML = `<h1 class="not-users">Pizses gde vse users</h1>`)
}
