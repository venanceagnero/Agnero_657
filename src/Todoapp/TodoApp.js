import React from 'react'
import Addtodo from './Addtodo'
import TodoList from '../Todolist/TodoList';
import Tododata from '../Todolist/Tododata';


export default function TodoApp() {
    return ( <div>
            <Addtodo/> 
            {
                Tododata.map((todoapp) => ( <TodoList key = { todoapp.id }
                        title = { todoapp.title }
                        description = { todoapp.description }/>)) 
                    } </div>
                )
            }