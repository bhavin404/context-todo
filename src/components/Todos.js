import React, { useState, useContext, useEffect } from 'react'
import { TodoContext } from '../context/TodoProvider'


const Todos = () => {
    const todoContext = useContext(TodoContext)

    const [text, setText] = useState('')
    const { createTodo,deleteTodo,setTodo,currentText,updateTodo} = todoContext

    const onSubmit = (e) => {
        e.preventDefault();

        if(currentText !=null){
            const Updatedvalue = {
                id:currentText.id,
                text
            }
            console.log(Updatedvalue);
    
            updateTodo(Updatedvalue)
        }else {
            const Newvalue = {
                id:Math.random(),
                text
            }
            console.log(Newvalue);
    
            createTodo(Newvalue)
        }

        
        setText('')
    }

    useEffect(() => {
        if (currentText != null){
            setText(currentText.text)
        }
    }, [currentText])

    return (
        <div className="todo">
            <form onSubmit={onSubmit} >
                <input
                    type="text"
                    className="todo-input"
                    placeholder="Enter your Todo"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </form>

            <ul className="todo-body">
                {todoContext.todos.map((todo, index) =>
                    <li key={index}>
                        <span className="material-icons" onClick={(e) => setTodo(todo)} >
                            create
                        </span>
                        {todo.text}
                        <span className="material-icons" onClick={(e) =>deleteTodo(todo.id)} >
                            delete
                        </span>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Todos
