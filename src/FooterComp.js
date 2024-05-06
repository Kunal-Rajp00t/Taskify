import React from 'react'

export default function FooterComp(props) {
  return (
    <div className="container">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
          <svg className="bi" width="30" height="24"></svg>
        </a>
        <span className="mb-3 mb-md-0 text-body-secondary">{props.display?"©":"x"} {props.year} Taskify, Inc</span>
      </div>
  
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex mx-4">
        <li className="ms-3"><a className="text-body-secondary text-decoration-none fw-medium" href="https://in.linkedin.com/in/kunal-rajput-616178275" target='_blank'>LinkedIn</a></li>
        <li className="ms-3"><a className="text-body-secondary text-decoration-none fw-medium" href="https://github.com/Kunal-Rajp00t"target='_blank'>GitHub</a></li>
        <li className="ms-3"><a className="text-body-secondary text-decoration-none fw-medium" href="https://www.instagram.com/__the_name_is_kunal__/"target='_blank'>Instagram</a></li>
      </ul>
    </footer>
  </div>
  )
}
