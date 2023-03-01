let enterButton = document.getElementById('enter')
let input = document.getElementById('userInput')
let ul = document.getElementById('ul')

enterButton.addEventListener('click', addListAfterClick)
input.addEventListener('keypress', addListAfterKeyPress)

function inputLength() {
    return input.value.length
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement()
    }
}

function addListAfterKeyPress() {
    if (inputLength() > 0 && event.which === 13) {
        createListElement()
    }
    if (inputLength() > 34) {
        alert('Sua tarefa está grande demais!')
        return (input.value = '')
    }
}

function createListElement() {
    let li = document.createElement('li')

    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)
    input.value = ''

    function crossOut() {
        li.classList.toggle('done')
    }

    li.addEventListener('click', crossOut)

    let deleteButton = document.createElement('button')
    deleteButton.appendChild(document.createTextNode('X'))
    li.appendChild(deleteButton)

    function deleteListItem() {
        li.classList.add('delete')
    }

    deleteButton.addEventListener('click', deleteListItem)
}