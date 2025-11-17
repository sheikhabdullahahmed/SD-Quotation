import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navigationItems = [
  { name: "Dashboard", icon: "fa-solid fa-chart-line", path: "/admindashbaord" },
  // { name: "Quotation", icon: "fa-regular fa-file-lines", path: "/invoice" },
  { name: "Client List", icon: "fa-solid fa-users", path: "/clients" },
  // { name: "Templates", icon: "fa-regular fa-copy", path: "/templates" },
  { name: "User Management", icon: "fa-solid fa-gear", path: "/user" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="flex flex-col w-64 bg-white border-r border-gray-100 shadow-sm hidden md:flex">
      <div className="p-6 flex items-center border-b border-gray-100">
        <i className="fa-solid fa-file-invoice text-blue-600 text-2xl mr-3"></i>
        <span className="text-xl font-medium text-gray-900">SD Quotation</span>
      </div>

      <Link to={"/invoice"} className="p-4 border-b border-gray-100">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg">
          <i className="fa-solid fa-plus text-lg mr-2"></i>
          Create Quotation
        </button>
      </Link>

      <nav className="flex-grow p-4 space-y-2">
        {navigationItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`w-full flex items-center p-3 rounded-xl text-left transition-all duration-200 ${
              location.pathname === item.path
                ? "bg-gray-900 text-white font-semibold border border-blue-100 shadow-sm"
                : "  hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            <i
              className={`${item.icon} text-lg mr-3 ${
                location.pathname === item.path ? "text-blue-600" : "text-gray-400"
              }`}
            ></i>
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="p-6 border-t border-gray-100 bg-gray-50">
        <div className="flex items-center">
          <img
            src="https://placehold.co/40x40/4f46e5/ffffff?text=BM"
            alt="Brown Martin"
            className="w-10 h-10 rounded-full mr-3 border-2 border-white shadow-sm"
          />
          <Link to={"./profile"} className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">Brown Martin</p>
            <p className="text-xs text-gray-500 truncate">Business owner</p>
          </Link>
          <i className="fa-solid fa-caret-down text-gray-400 ml-2"></i>
        </div>
      </div>
    </aside>
  );
}