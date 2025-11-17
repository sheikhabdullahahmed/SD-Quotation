import React, { useState } from "react";
import { FileText, Users, Clock, ChevronsLeft, Mail, X, Calendar, CheckCircle, XCircle, Search, Bell, User } from "lucide-react";
import blueimage from '../assets/blueimage.png'

// Sidebar Component
function Sidebar({ activePage, setActivePage, sidebarCollapsed, setSidebarCollapsed }) {
  return (
    <div className={`${sidebarCollapsed ? "w-20" : "w-64"} bg-white border-r border-gray-200 flex flex-col transition-all duration-300`}>
      <div className="p-4 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10  rounded-lg flex items-center justify-center">
            <img src={blueimage} alt="" />
          </div>
          {!sidebarCollapsed && <h1 className="text-lg font-semibold text-gray-900">SD Quotation</h1>}
        </div>
        <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition">
          <ChevronsLeft className={`w-4 h-4 transition-transform ${sidebarCollapsed ? "rotate-180" : ""}`} />
        </button>
      </div>

      <nav className="flex-1 p-3">
        <button onClick={() => setActivePage("quotation")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
            activePage === "quotation" ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-50"}`}>
          <FileText className="w-5 h-5" />
          {!sidebarCollapsed && <span>Quotation</span>}
        </button>

       

        

        <button onClick={() => setActivePage("history")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            activePage === "history" ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-50"}`}>
          <Clock className="w-5 h-5" />
          {!sidebarCollapsed && <span>View History</span>}
        </button>
      </nav>
    </div>
  );
}


export default Sidebar