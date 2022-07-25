import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

export default function Navbar(props){
    return(
        <div>
            <nav className={`navbar navbar-expand navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid" >
                <Link className="navbar-brand" to="/">{props.title}</Link>
                {/* <a className="navbar-brand" href="/">{props.title}</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-left mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">{props.nav1}</Link>
                    {/* <a className="nav-link active" aria-current="page" href="/">{props.nav1}</a> */}
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">{props.link}</Link>
                    </li>
                </ul>
                {/* <div className="d-flex">
                    <div id="one" className="bg-primary rounded mx-2" onClick={()=>props.toggleMode('primary')} style={{height:'20px',width:'20px',cursor:'pointer'}}></div>
                    <div id="two" className="bg-secondary rounded mx-2" onClick={()=>props.toggleMode("secondary")} style={{height:'20px',width:'20px',cursor:'pointer'}}></div>
                    <div id="three" className="bg-success rounded mx-2" onClick={()=>props.toggleMode('success')} style={{height:'20px',width:'20px',cursor:'pointer'}}></div>
                    <div id="four" className="bg-info rounded mx-2" onClick={()=>props.toggleMode('info')} style={{height:'20px',width:'20px',cursor:'pointer'}}></div>
                    <div id="five" className="bg-warning rounded mx-2" onClick={()=>props.toggleMode('warning')} style={{height:'20px',width:'20px',cursor:'pointer'}}></div>
                    <div id="six" className="bg-danger rounded mx-2" onClick={()=>props.toggleMode('danger')} style={{height:'20px',width:'20px',cursor:'pointer'}}></div>
                    <div id="seven" className="bg-light rounded mx-2" onClick={()=>props.toggleMode('light')} style={{height:'20px',width:'20px',cursor:'pointer'}}></div>
                    <div id="eight" className="bg-dark rounded mx-2" onClick={()=>props.toggleMode('dark')} style={{height:'20px',width:'20px',cursor:'pointer'}}></div>
                </div> */}
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-success mx-3" type="submit">Search</button>
                </form> */}
                </div>
                <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input" onClick={()=>props.toggleMode(null)} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
                </div>
            </div> 
           </nav> 
        </div>
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    nav1: PropTypes.string
}
Navbar.defaultProps = {
    title: "Title",
    link: "Link",
    nav1: "navbarr"
}