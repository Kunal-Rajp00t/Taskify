import React from 'react'
import './MyCss.css';

const AddTodo = (props) => {

    return (
        <form className='main-form needs-validation'>
            <h2 >Add Task</h2>
            <div className="mb-3 leftText">
                <label htmlFor="sno" className="form-label ">Serial Number</label>
                <input type="text" className="form-control" id="sno" aria-describedby="emailHelp" />
                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
            </div>
            <div className="mb-3 leftText">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" aria-describedby="emailHelp" required/>
                <div id="emailHelp" className="form-text">Maximum words limit:50</div>
            </div>
            <div className="mb-3 leftText" >
                <label htmlFor="desc" className="form-label">Add Description</label>
                <input type="text" className="form-control" id="desc" required/>
            </div>
            <button type="submit" className="btn btn-success" onClick={props.addNow}>Add Now</button>
        </form>
    )
}

export default AddTodo
