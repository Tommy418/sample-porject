import { useState } from "react";
import { NavLink } from "react-router-dom";
import '../../assets/CSS/Cus.css'
const Navbar = props => {
    const [open,setOpen]=useState(false);

    const menu =()=>{
       setOpen(!open)
    }
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary z-1000">
                <div className="container">
                    <a className="navbar-brand" href="#">Repo Hub</a>
                    <div className={`${open ? "show": ''} menu-icon `} onClick={menu} data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                        <span></span>
                        <span></span>
                    </div>
                    {/* <button className="btn border-0 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Menu</button> */}
                </div>
            </nav>




            <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div className="offcanvas-header">
                    
                </div>
                <div className="offcanvas-body">
                    <div>
                        <ul className="list-group list-group-flush mb-5">
                            <li className="list-group-item border-0"> <NavLink to="/" className={({ isActive }) => isActive ? "text-danger h5 text-decoration-none" : "h5 text-decoration-none"} > Home</NavLink></li>
                            <li className="list-group-item border-0"> <NavLink to="services" className={({ isActive }) => isActive ? "text-danger h5 text-decoration-none" : "h5 text-decoration-none"} > Services</NavLink></li>
                            <li className="list-group-item border-0"> <NavLink to="contact" className={({ isActive }) => isActive ? "text-danger h5 text-decoration-none" : "h5 text-decoration-none"} > Contact</NavLink></li>
                            <li className="list-group-item border-0"> <NavLink to="story" className={({ isActive }) => isActive ? "text-danger h5 text-decoration-none" : "h5 text-decoration-none"} > Story</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;