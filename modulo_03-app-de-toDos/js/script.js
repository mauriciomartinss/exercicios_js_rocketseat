let listElement = document.querySelector('#app ul')
let inputElement = document.querySelector('#app input')
let buttonElement = document.querySelector('#app button')



let todos = JSON.parse(localStorage.getItem('list_todos')) || []

// renderização

function renderTodos() {
    listElement.innerHTML = ''

    for (todo of todos) {


        let todoElement = document.createElement('li')
        let todoText = document.createTextNode(todo)

        let linkElement = document.createElement('a')

        linkElement.setAttribute('href', '#')

        let pos = todos.indexOf(todo)
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')')

        let linkText = document.createTextNode(' Excluir')

        linkElement.appendChild(linkText)
        
        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)

        listElement.appendChild(todoElement)

    }
}

renderTodos()

// adição

function addTodo() {
    var todoText = inputElement.value
    
    todos.push(todoText)
    inputElement.value = ''

    renderTodos()
    saveToStorage()
}

buttonElement.onclick = addTodo

// exclusão

function deleteTodo(pos) {
    todos.splice(pos, 1)
    renderTodos()
    saveToStorage()
}

// salvando dados no storage

function saveToStorage() {
    
    localStorage.setItem('list_todos', JSON.stringify(todos))
}