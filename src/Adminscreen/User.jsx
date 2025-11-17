
// import React from "react";
import Sidebar from "../Adminscreen/Sidebar";
import Header from "../Adminscreen/Header";
import React, { useState } from 'react';
import { Menu, X, LayoutDashboard, FileText, Briefcase, DollarSign, Search, Plus, MoreVertical } from 'lucide-react';

// Mock data for the table
const initialUsers = [
    { id: 1, name: 'Florence Shaw', email: 'florenceshaw@gmail.com', access: ['Data export', 'Data Import'], lastActive: 'Jan.02.2023', dateAdded: 'Jan.02.2022' },
    { id: 2, name: 'Jhon Maverick Sins', email: 'jhonmaverice@gmail.com', access: ['Data export', 'Data Import'], lastActive: 'Feb.09.2023', dateAdded: 'Feb.09.2022' },
    { id: 3, name: 'Smith Jones', email: 'smithjones58@gmail.com', access: ['Data export', 'Data Import'], lastActive: 'Feb.20.2023', dateAdded: 'Feb.20.2022' },
    { id: 4, name: 'Tremblay Morton Singh', email: 'tremblaymortonsingh@outlook.com', access: ['Data export', 'Data Import'], lastActive: 'March.02.2024', dateAdded: 'March.02.2023' },
    { id: 5, name: 'Gagnon Martin', email: 'gagnonmartin@gmail.com', access: ['Data export', 'Data Import'], lastActive: 'April.04.2024', dateAdded: 'April.04.2023' },
    { id: 6, name: 'Amelia Margaret', email: 'ameliamargaret@yahoo.com', access: ['Data export', 'Data Import'], lastActive: 'July.18.2024', dateAdded: 'July.18.2023' },
    { id: 7, name: 'Evans O’Ryan', email: 'evansoryan@outlook.com', access: ['Data export', 'Data Import'], lastActive: 'Dec.30.2024', dateAdded: 'Dec.02.2023' },
    { id: 8, name: 'William Damian', email: 'williamdamian@gmail.com', access: ['Data export', 'Data Import'], lastActive: 'Jan.02.2025', dateAdded: 'Jan.02.2025' },
    { id: 9, name: 'Isabella Victoria', email: 'isabellavictoria@gmail.com', access: ['Data export', 'Data Import'], lastActive: 'Feb.17.2025', dateAdded: 'Feb.10.2025' },
];


const UserRow = ({ user }) => {
    // Generate simple initials for the placeholder avatar
    const initials = user.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);

return (
        <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
            <td className="px-6 py-4">
                <input type="checkbox" className="rounded text-blue-600 border-gray-300 focus:ring-blue-500" />
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex items-center">
                    {/* Placeholder for user avatar with initials */}
                    <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-semibold mr-3">
                        {initials}
                    </div>
                    <div>
                        <p className="font-medium text-gray-900">{user.name}</p>
                        <p className="text-gray-500 text-xs">{user.email}</p>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex space-x-2">
                    {user.access.map(access => (
                        // Access badges styled like Data export/import
                        <span key={access} className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-700">
                            {access}
                        </span>
                    ))}
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                {user.lastActive}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                {user.dateAdded}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                <MoreVertical className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
            </td>
        </tr>
    );
};

const NotificationSnackbar = ({ message, profileAction, onClose }) => {
    if (!message) return null;

    return (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-xl shadow-2xl max-w-xs transition-opacity duration-300 z-50">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm font-semibold">{message}</p>
                    <button 
                        onClick={profileAction} 
                        className="mt-2 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        View profile
                    </button>
                </div>
                <X className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" onClick={onClose} />
            </div>
        </div>
    );
};
export default function Users() {
  const [showNotification, setShowNotification] = useState(true);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const handleViewProfile = () => {
        // Placeholder action for viewing profile
        console.log('Navigating to profile view...');
        setShowNotification(false);
    };

    const tableHeaders = [
        { label: 'User name' },
        { label: 'Access' },
        { label: 'Last active' },
        { label: 'Date added' },
    ];
  return (

    <div className="font-sans bg-gray-50 min-h-screen">
      <div className="flex h-screen overflow-hidden">
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-y-auto">
          <Header />
          <main className="p-4 md:p-8">
                    {/* Page Title/Description */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 hidden md:block">User Management</h1>
                        <p className="text-gray-500 mt-1">Manage your team member and there account permission</p>
                    </div>

                    {/* User Count and Action Bar (Search and Add User) */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
                        <h2 className="text-xl font-semibold text-gray-900">All Users <span className="text-gray-500 font-normal">2000</span></h2>
                        <div className="flex items-center space-x-3 w-full sm:w-auto">
                            <div className="relative flex-1">
                                <input 
                                    type="text" 
                                    placeholder="Search..." 
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                />
                                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                            </div>
                            <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors shadow-md">
                                <Plus className="w-5 h-5 mr-1" />
                                Add User
                            </button>
                        </div>
                    </div>

                    {/* User Table */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-white">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider w-12">
                                            {/* Checkbox for Select All */}
                                        </th>
                                        {tableHeaders.map((header) => (
                                            <th
                                                key={header.label}
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                                            >
                                                {header.label}
                                            </th>
                                        ))}
                                        <th scope="col" className="px-6 py-3 w-12">{/* Actions */}</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-100">
                                    {initialUsers.map((user) => (
                                        <UserRow key={user.id} user={user} />
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination Footer */}
                        <div className="flex justify-center items-center p-4 border-t border-gray-100 space-x-2">
                            <button className="p-2 w-8 h-8 text-center text-gray-500 hover:bg-gray-100 rounded-full transition-colors">{'<'}</button>
                            {[1, 2, 3, 4, 5, 6].map(page => (
                                <button key={page} className={`p-2 w-8 h-8 text-center text-sm font-medium rounded-full transition-colors ${
                                    page === 1 ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                                }`}>
                                    {page}
                                </button>
                            ))}
                            <button className="p-2 w-8 h-8 text-center text-gray-500 hover:bg-gray-100 rounded-full transition-colors">{'>'}</button>
                        </div>
                    </div>
                </main>
        </div>
      </div>
      {/* Notification Snackbar (Bottom right) */}
            {showNotification && (
                <NotificationSnackbar
                    message={'“Brown Martin” details updated'}
                    profileAction={handleViewProfile}
                    onClose={() => setShowNotification(false)}
                />
            )}
    </div>

  );
}
