import React,{createContext, useReducer} from 'react'
import { CREATE_TODO, DELETE_TODO, SET_TODO, UPDATE_TODO } from './TodoConstants'

export const TodoContext = createContext()
const todoReducer = (state, action) =>{
    switch(action.type){

        case CREATE_TODO :
            return{
                ...state,
                todos:[action.payload, ...state.todos]
            }
        case DELETE_TODO :
            return{
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case SET_TODO :
            return {
                ...state,
                currentText: action.payload
            }
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id == action.payload.id ? action.payload :todo)
            }
        
        default: return state
    }

}

const TodoProvider = (props) => {
    const initialState = {
        todos:[],
        currentText : null,
    }

    const [state, dispatch] = useReducer(todoReducer, initialState)

    //actions
    const createTodo = (todo) =>{
        dispatch({
            type: CREATE_TODO,
            payload: todo,
        })
    }
    const deleteTodo = id =>{
        dispatch({
            type: DELETE_TODO,
            payload: id
        })
    }
    const setTodo = todo =>{
        dispatch({
            type:SET_TODO,
            payload:todo
        })
    }

    const updateTodo = todo =>{
        dispatch({
            type: UPDATE_TODO,
            payload: todo,
        })
    }

    return ( 
        <TodoContext.Provider value={{
            todos:state.todos,
            currentText: state.currentText,
            createTodo,
            deleteTodo,
            setTodo,
            updateTodo
        }} >
            {props.children}
        </TodoContext.Provider>

    )
}


export default TodoProvider
