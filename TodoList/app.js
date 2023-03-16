let textId = document.getElementById('textId');
let todoList = document.getElementById('todoList');
let add = document.getElementById('add');

let todos=[];
window.onload = () => {
     todos = JSON.parse(localStorage.getItem('todos')) || []
     todos.forEach(element => {
        addTodoList(element)
     });
}


add.addEventListener('click',() => {
  
    todos.push(textId.value);
    localStorage.setItem('todos',JSON.stringify(todos))
    addTodoList(textId.value);
    textId.value='';
})

function addTodoList(todo){
    let para = document.createElement('p');
    para.innerText = todo;
    todoList.appendChild(para);

    para.addEventListener('click',() => {
        para.style.textDecoration= 'line-through';
        remove(todo);
    })

    para.addEventListener('dblclick', () => {
        todoList.removeChild(para);
        remove(todo)
    })

    function remove(todo){
        let index = todos.indexOf(todo);
        if(index>-1)
           todos.splice(index,1);
        localStorage.setItem('todos',JSON.stringify(todos))         
    }
}

