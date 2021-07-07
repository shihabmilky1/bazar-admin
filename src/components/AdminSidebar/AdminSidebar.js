import React from 'react';
import './AdminSidebar.css'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Link } from 'react-router-dom'
const AdminSidebar = ({ sidebarOpen, setSidebarOpen }) => {
    return (
        <div className="admin-sidebar shadow"
            style={{
                transform: sidebarOpen && 'translateX(0%)', zIndex: sidebarOpen ? '100 !important' : ''
            }}
        >
            <div className="admin-sidebar-header d-flex align-items-center justify-content-between"
            >
                <div className="close-btn">
                    <i onClick={() => setSidebarOpen(false)} className="fal fa-times"></i>
                </div>
            </div>
            <div className="admin-sidebar-main h-100">

                <Scrollbars>
                    <ul>
                        <li>
                            <Link to="/"><i class="fas fa-th-large"></i> Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/"><i class="fad fa-shopping-bag"></i> Products</Link>
                        </li>
                        <li>
                            <Link to="/"><i class="fas fa-server"></i> Order</Link>
                        </li>
                        <li>
                            <Link to="/"><i class="fas fa-cut"></i> Coupons</Link>
                        </li>
                    </ul>
                </Scrollbars>
            </div>
            <div className="admin-sidebar-bottom">
                <div className="btn logout-btn d-flex align-items-center">
                    <i className="fal fa-sign-out-alt logout-icon"></i>
                    <p className="my-0">Logout</p>
                </div>
            </div>
        </div>
    );
};

export default AdminSidebar;