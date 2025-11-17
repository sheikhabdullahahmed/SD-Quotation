// Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { User, Settings, Bell, HelpCircle, Info, LogOut, ChevronRight } from "lucide-react";

const SidebarItem = ({ icon: Icon, label, isActive, hasSubMenu = false }) => (
    <div
        className={`flex items-center justify-between p-3 rounded-xl transition-colors cursor-pointer ${
            isActive
                ? "bg-gray-100 text-gray-900 shadow-sm"
                : "text-gray-600 hover:bg-gray-50"
        }`}
    >
        <div className="flex items-center">
            <Icon className="w-5 h-5 mr-3" />
            <span className="font-medium text-sm">{label}</span>
        </div>
        {hasSubMenu && <ChevronRight className="w-4 h-4 text-gray-400" />}
    </div>
);

export default function Sidebar({ isOpen, toggleSidebar, active }) {
    const menuItems = [
        { label: "My Profile", icon: User, route: "/profile" },
        { label: "Settings", icon: Settings, route: "/settings" },
        { label: "Notifications", icon: Bell, route: "/notifications" },
        { label: "FAQ", icon: HelpCircle, route: "/faq" },
        { label: "About App", icon: Info, route: "/about" },
    ];

    return (
        <aside
            className={`fixed z-50 md:static transform ${
                isOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 transition-transform duration-300 ease-in-out w-64 bg-white h-full p-4 flex flex-col justify-between border-r border-gray-200`}
        >
            <div>
                {/* User Summary */}
                <div className="flex items-center p-3 mb-6">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-200">
                        <img src="https://placehold.co/150x150" alt="User" />
                    </div>
                    <div>
                        <p className="font-bold text-sm">Brown Martin</p>
                        <p className="text-xs text-gray-500">brownmartin@gmail.com</p>
                    </div>
                </div>

                {/* Menu */}
                <nav className="space-y-1">
                    {menuItems.map((item) => (
                        <Link key={item.label} to={item.route}>
                            <SidebarItem
                                icon={item.icon}
                                label={item.label}
                                isActive={active === item.route}
                                hasSubMenu={true}
                            />
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Logout */}
            <div className="p-3">
                <div className="flex items-center p-3 rounded-xl cursor-pointer text-gray-600 hover:bg-gray-100">
                    <LogOut className="w-5 h-5 mr-3" />
                    <span className="font-medium text-sm">Logout</span>
                </div>
            </div>
        </aside>
    );
}