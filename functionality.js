const addTodo = () => {
    // value from text input
    let newTask = textIn.value
    // value from date picker/input
    let date = setDate.value

    // checking for empty string
    if (newTask != '') {
        todosArray.push({
            title: newTask,
            checked: false,
            date,
        })

        localStorage.setItem('todos', JSON.stringify(todosArray))

        renderTodoItems()
        // clear inputs
        textIn.value = ''
        setDate.value = ''
    }
}

const deleteTodo = (e) => {
    let index = parseInt(e.target.parentNode.getAttribute('key'))
    todosArray.splice(index, 1)
    localStorage.setItem('todos', JSON.stringify(todosArray))
    renderTodoItems()
}

const completeTodo = (e) => {
    // checking for 'done' className
    // contains('done') true/false - текшерет барбы, же жокпу
    let todosTemporary = [...todosArray] // копирование

    let index = parseInt(e.target.parentNode.getAttribute('key'))
    // console.log(index) // 2
    let objElement = todosTemporary[index].checked // значенияны чыгарабыз
    todosTemporary[index].checked = !objElement // перезапись значения

    localStorage.setItem('todos', JSON.stringify(todosTemporary))

    let isDone = e.currentTarget.parentNode.classList.contains('taskItem-done')

    if (isDone) {
        e.currentTarget.parentNode.classList.remove('taskItem-done')
        e.currentTarget.parentNode.classList.add('taskItem')
    } else {
        e.currentTarget.parentNode.classList.add('taskItem-done')
        e.currentTarget.parentNode.classList.remove('taskItem')
    }
}

// const getTodos = () => {
//     fetch('https://jsonplaceholder.typicode.com/todos?_page=1')
//     .then(response => response.json())
//     .then(array => {
//         localStorage.setItem('todos', JSON.stringify(array))
//     })
// }

// getTodos()