import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashbaord from './Components/Dashboard/index'



function App() {
  return (
    <div >
      <Router>
      <Routes>
        <Route path="/" element={<Dashbaord />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      </Router>
    </div>
  )
}

export default App