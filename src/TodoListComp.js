import React from 'react'
import { Link } from 'react-router-dom';
import TodoItems from './TodoItems'

export default function TodoListComp(props) {
    const { todo } = props;
    let headstl={
        fontFamily: "cursive"
    }
    return (
        <div className="container">
            <h2 style={headstl}>Your Todo List</h2>
            <div className="row">
                {props.todo.length <= 0 ? <div className="alert alert-warning mt-4" role="alert">
                    No Tasks left for now !!  <Link to="/addTask"> Click here to Add Now</Link>
                </div> :
                    todo.map(item => (
                        <TodoItems key={item.sno} todo={item} onDelete={props.onDelete} />
                    ))
                }
            </div>
        </div>
    )
}

