import './styles.css';
import {Todo,TodoList} from './classes'
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();
todoList.todos.forEach(todo => {
    crearTodoHtml(todo)
});

//const newTodo = new Todo('aprender js');
//todoList.nuevoTodo(newTodo);
//todoList.todos[0].imprimirClase();
//newTodo.imprimirClase();
console.log('todos ',todoList.todos);



/*/
       todoList.nuevoTodo(tarea);

        console.log(todoList);

        crearTodoHtml(tarea);


        localStorage.setItem('mi-key','ABC2016');
       sessionStorage.setItem('mi-key','ABC2016');


        setTimeout(()=>{
        localStorage.removeItem('mi-key');
        },2000) /*/