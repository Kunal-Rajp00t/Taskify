import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default function HeaderComp(props) {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <img src={props.url} className='header_logo m-auto' />
                    <svg className="bi me-2" width="15" height="32"></svg>
                    <span className="fs-4">{props.title} <span className='fs-6'>by {props.name}</span> </span>
                </Link>

                <ul className="nav nav-pills">
                    <li className="nav-item"><Link to="/" className="nav-link active" aria-current="page">Home</Link></li>
                    <li className="nav-item"><Link to="/addTask" className="nav-link">Add Task</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link">About Us</Link></li>
                </ul>
            </header>
        </div>
    )
}