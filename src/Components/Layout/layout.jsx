import Sidebar from "../Sidebar";
import HistoryPage from '../HistoryPage'
import { useState } from "react";
import InvoiceForm from '../Dashboard/index'  


 export default function Dashboard() {
  const [activePage, setActivePage] = useState("quotation");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar - Always visible on left */}
      <Sidebar 
        activePage={activePage}
        setActivePage={setActivePage}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
      />

      {/* Main Content Area - Changes based on active page */}
      {activePage === "history" ? (
        <HistoryPage />
      ) : activePage === "quotation" ? (
        <InvoiceForm />
      ) : (
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {activePage === "clients" ? "Client List" : activePage === "templates" ? "Templates" : "Page"}
            </h2>
            <p className="text-gray-500">This page is under construction</p>
          </div>
        </div>
      )}
    </div>
  );
}
