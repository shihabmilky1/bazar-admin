import React, { useContext } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { AdminInfo } from '../../App'

const Navbar = ({ setSidebarOpen }) => {
    const [admin, setAdmin, isAdmin, setIsAdmin] = useContext(AdminInfo)
    return (
        <>
            <nav className={`navbar navbar-expand fixed-top shadow-sm bg-white`}>
                <div className="container">
                    <Link className="navbar-brand navbar-name common-color" to="/">Bazar</Link>
                    <div className="menu-icon">
                        <i onClick={() => setSidebarOpen(true)} className="fal fa-bars"></i>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                            {!isAdmin.isAdmin && <li class="nav-item">
                                <Link className="nav-link navlink join-button" to="/login">Login</Link>
                            </li>}
                            {isAdmin.isAdmin && <li class="nav-item">
                                <Link className="nav-link navlink join-button" to="/login">Add Product</Link>
                            </li>}

                            <li className="nav-item dropdown navlink pe-5">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={`https://i.ibb.co/h7pz7dp/user.png`} className="img-fluid user-icon" alt="" />
                                </Link>
                                <ul className="dropdown-menu shadow" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item dropdownlink ms-2 pe-4 my-3" to="/">Profile</Link></li>
                                    <li><Link className="dropdown-item dropdownlink ms-2 pe-4 my-3" to="/">Your Order</Link></li>
                                    <li><Link className="dropdown-item dropdownlink ms-2 pe-4 my-3" to="/terms">Terms and Service</Link></li>
                                    <li><Link className="dropdown-item dropdownlink ms-2 pe-4 my-3" to="/privacy">Privacy Policy</Link></li>
                                    <li><span className="dropdown-item dropdownlink ms-2 pe-4 my-3" >Logout</span></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;