import React from 'react'
import './css/NavBar.css'
import { NavLink, Outlet } from 'react-router-dom'
export default function NavBar() {
    return (
        <>
            <div className='container-fluid'>

                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Github Api Project</a>
                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="toggler-icon top-bar"></span>
                            <span className="toggler-icon middle-bar"></span>
                            <span className="toggler-icon bottom-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to='/' className="nav-link active" aria-current="page" href="#">Users</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='repositary-card' className="nav-link" href="#">Repositaries</NavLink>
                                </li>

                            </ul>

                        </div>
                    </div>

                </nav>
                <Outlet />
            </div>

        </>
    )
}
