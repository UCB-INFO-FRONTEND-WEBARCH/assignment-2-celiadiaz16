import React, { useState, setState, Component } from 'react';
import ToDoList from './TodoList';
import Tags from './Tags';

const Todo = ({text, todo, todos, setTodos }) => {
    //Events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(
            todos.map(item => {
                if(item.id === todo.id){
                    return{
                        ...item, completed: !item.completed,
                    };
                }
                return item;
            })
        );
    };
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
                </button>
                <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
                </button>
                <li>{todo.tags.map(tag => (
                    <Tags 
                    tag = {tag}
                    todo = {todo}
                    todos = {todos}
                    setTodos = {setTodos}
                    key = {todo.id}
                    />
                ))}

                </li>
        </div>
    );
}

export default Todo;