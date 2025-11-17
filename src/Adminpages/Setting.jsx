
// src/pages/Settings.jsx
import React from "react";
import Sidebar from "../Admin/Adminsidebar";
import { Menu } from "lucide-react";

export default function Settings() {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    return (
        <div className="flex h-screen">
            <Sidebar
                isOpen={isSidebarOpen}
                toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
                activeRoute="/settings"
            />

            <div className="flex-1 p-6">
                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="md:hidden mb-4"
                >
                    <Menu />
                </button>
                <h1 className="text-2xl font-bold">Settings</h1>
                <p className="mt-4 text-gray-600">
                    Settings page content goes here.
                </p>
            </div>
        </div>
    );
}
