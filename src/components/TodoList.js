import React from "react";
import TodoItem from './TodoItem';
import "./Todolist.css";

const TodoList = ({todos}) => {
    return (
       <div className="todolist">
        {todos.map(todo => (
            <TodoItem todo={todo} key={todo.id}/>
        ))}
       </div> 
    )
}

export default TodoList;