import React from 'react'
import './MyCss.css';

export default function TodoItems(props) {
    // console.log(props);
    return (
        <div className="col-md-3 col-sm-6 ">
            <div className="mybox text-break">
                <h2>Task-{props.todo.sno}</h2>
                <p>{props.todo.title}</p>
                {props.todo.desc}<br />
                <button className='del-btn px-2 my-1' onClick={() => { props.onDelete(props.todo) }}>
                    <i className="fas fa-trash"></i> Delete </button>
            </div>
        </div>
    )
}
