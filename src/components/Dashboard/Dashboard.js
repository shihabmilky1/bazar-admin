import React, { useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar'
import Navbar from '../Navbar/Navbar.js'

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
        <section style={{ background: '#efefef' }}>
            <Navbar setSidebarOpen={setSidebarOpen} />
            <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </section>
    );
};

export default Dashboard;