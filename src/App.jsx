import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from './Components/Layout/layout'
// import AdminSlider from './Admin/Adminsidebar';
import AdminProfile from './Admin/Adminprfile';
import Settings from './Adminpages/Setting';
import Notifications from './Adminpages/Notifications'
import Faq from './Adminpages/Faq'
import About from './Adminpages/About'
import Clients from './Adminscreen/Client'
import User from './Adminscreen/User'


import Dashboardd from './Adminscreen/Dashboardd';
import InvoiceForm from './Components/Dashboard/index';
import Invoice from './Adminscreen/InvoicesDashboard'




function App() {
  return (
    <div >
      <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/invoice" element={<Invoice/>} />



{/* Admin profile   */}
        <Route path="/profile" element={<AdminProfile />} />
         <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/about" element={<About />} />


        {/* Admin Dashbaord*/}

        <Route path="/admindashbaord" element={<Dashboardd />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/user" element={<User />} />


      </Routes>
      </Router>
    </div>
  )
}

export default App