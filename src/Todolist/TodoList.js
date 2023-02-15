import React from 'react';
import Tododata from './Tododata';
import Todo from './Todo';
import { useState } from 'react';


export default function Todolist() {

    const [todos, setTodos] = useState([]);

    function handleCheck(id) {
        setTodos(
       todos.map((done) => done.id === id? {...done, description: done.description.style.textDecoration === "line-through"}: done)
            ); 
            console.log("Task completed")
    }
    return ( <div className='todolist'>
            <div >{
            Tododata.map((todo) => ( < Todo key = { todo.id }
                    title = { < div >
                        <form > < input type = "checkbox" className='Checkbox'
                        onClick = { handleCheck }/></form >
                        <h3 > { todo.title } </h3 > </div >
                    }
                    description = { todo.description }
                    />))} </div >
                    </div >






                )

            }