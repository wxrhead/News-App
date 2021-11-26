import React from 'react'
import {Link} from "react-router-dom"



export default function Navbar() {
    
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand mx-3" to="/">News App</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {/* <li className="nav-item ">
                            <Link className="nav-link" to="/">Home </Link>
                        </li> */}
                        <li className="nav-item"><Link className="nav-link" to="/business">India</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/entertainment">Japan</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/general">Canada</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/health">France</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/science">Russia</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/sports">New Zealand</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/technology">Thailand</Link></li>
                    </ul>
                </div>  
            </nav>
        </div>   
    )
}




