import React from "react";
import { useState } from "react";
import Todo from "../Todolist/Todo";

let theId = 0;

export default function Addtodo() {

    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");



    return ( < div className = 'addtodo' >
            <div className = 'inputform' > < form >
            <div > < div >
            <input type = "text"
            placeholder = "Title "
            value = { title }
            onChange = { e => setTitle(e.target.value) }
            /> </div >
            <div >
            <input type = "text"
            placeholder = "Description"
            value = { description }
            onChange = { e => setDescription(e.target.value) }
            />  </div>  <div className = "addbtn" >
            <button onClick = {
                () => {

                    setTitle("");
                    setDescription("");
                    todos.push({
                        id: theId++,
                        title: title,
                        description: description
                    })
                }
            } > Add </button></div >
            </div> </form > </div>

            <div> {
                todos.map((todo) => (< Todo key = { todo.id }
                        title = { <div >
                            <form> < input type = "checkbox"
                            className = 'Checkbox' /> </form > <h3> { todo.title } </h3> </div>
                        }
                        description = { todo.description }/>))} </div >
                        </div>
                    )
                }