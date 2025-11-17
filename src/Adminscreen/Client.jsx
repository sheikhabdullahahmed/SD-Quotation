// import React from "react";
import Sidebar from "../Adminscreen/Sidebar.jsx";
import Header from "../Adminscreen/Header.jsx";
import React, { useState } from 'react';
import { Menu, X, LayoutDashboard, FileText, Users, Briefcase, DollarSign, CheckCircle, MinusCircle, Search, Filter, ChevronDown, ChevronUp } from 'lucide-react';

// Mock data for the table
const initialClients = [
    { id: 1, name: 'James Carter', company: 'Granita Solutions', phone: '+1 202 555 0143', status: 'Approved', date: '11-02-2025', amount: 100 },
    { id: 2, name: 'James Carter', company: 'Granita Solutions', phone: '+1 202 555 0143', status: 'Rejected', date: '11-02-2025', amount: 100 },
    { id: 3, name: 'James Carter', company: 'Granita Solutions', phone: '+1 202 555 0143', status: 'Approved', date: '11-02-2025', amount: 100 },
    { id: 4, name: 'James Carter', company: 'Granita Solutions', phone: '+1 202 555 0143', status: 'Rejected', date: '11-02-2025', amount: 100 },
    { id: 5, name: 'James Carter', company: 'Granita Solutions', phone: '+1 202 555 0143', status: 'Approved', date: '11-02-2025', amount: 100 },
    { id: 6, name: 'James Carter', company: 'Granita Solutions', phone: '+1 202 555 0143', status: 'Rejected', date: '11-02-2025', amount: 100 },
    { id: 7, name: 'James Carter', company: 'Granita Solutions', phone: '+1 202 555 0143', status: 'Approved', date: '11-02-2025', amount: 100 },
];

const StatCard = ({ title, value, percentage, icon: Icon, colorClass, iconBgClass }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex-1 min-w-[200px]">
        <div className="flex items-center justify-between">
            <div className={`p-3 rounded-xl ${iconBgClass}`}>
                <Icon className={`w-6 h-6 ${colorClass}`} />
            </div>
            <p className="text-sm font-semibold text-gray-700">{title}</p>
        </div>
        
        <div className="mt-4">
            <h2 className="text-3xl font-bold text-gray-900">{value}</h2>
            <div className="flex items-center mt-1 text-sm">
                <span className={`font-semibold ${percentage.includes('+') ? 'text-green-500' : 'text-red-500'}`}>{percentage}</span>
                <span className="ml-1 text-gray-500">vs last week</span>
            </div>
        </div>
    </div>
);

const StatusBadge = ({ status }) => {
    const isApproved = status === 'Approved';
    return (
        <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${
            isApproved 
            ? 'bg-green-100 text-green-700' 
            : 'bg-red-100 text-red-700'
        }`}>
            {status}
        </span>
    );
};

export default function Clients() {
  const [clients, setClients] = useState(initialClients);

const activeFilters = [
        { key: 'client', label: 'Client: Smith Jones' },
        { key: 'status', label: 'Status: Approved' },
    ];

    // Placeholder for sorting state
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    const sortedClients = React.useMemo(() => {
        let sortableItems = [...clients];
        if (sortConfig.key !== null) {
            sortableItems.sort((a, b) => {
                const aValue = a[sortConfig.key];
                const bValue = b[sortConfig.key];
                
                if (aValue < bValue) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (aValue > bValue) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [clients, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const getSortIndicator = (key) => {
        if (sortConfig.key === key) {
            return sortConfig.direction === 'ascending' ? <ChevronUp className="w-3 h-3 ml-1" /> : <ChevronDown className="w-3 h-3 ml-1" />;
        }
        return null;
    };

    const tableHeaders = [
        { key: 'name', label: 'Client Name' },
        { key: 'company', label: 'Company name' },
        { key: 'phone', label: 'Phone Number' },
        { key: 'status', label: 'Status' },
        { key: 'date', label: 'Date' },
        { key: 'amount', label: 'Amount' },
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
                        <h1 className="text-3xl font-bold text-gray-900 hidden md:block">Client List</h1>
                        <p className="text-gray-500 mt-1">Manage and track all your clients</p>
                    </div>

                    {/* KPI Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <StatCard 
                            title="Total Clients" 
                            value="05" 
                            percentage="+2%" 
                            icon={Users} 
                            colorClass="text-blue-600"
                            iconBgClass="bg-blue-100"
                        />
                        <StatCard 
                            title="Approved Quotation" 
                            value="05" 
                            percentage="+2%" 
                            icon={CheckCircle} 
                            colorClass="text-green-600"
                            iconBgClass="bg-green-100"
                        />
                        <StatCard 
                            title="Reject Quotation" 
                            value="01" 
                            percentage="-2%" 
                            icon={MinusCircle} 
                            colorClass="text-red-600"
                            iconBgClass="bg-red-100"
                        />
                        <StatCard 
                            title="Total Value" 
                            value="$99" 
                            percentage="+2%" 
                            icon={DollarSign} 
                            colorClass="text-indigo-600"
                            iconBgClass="bg-indigo-100"
                        />
                    </div>

                    {/* Filter and Table Container */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                        {/* Filters and Search */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
                            <div className="flex flex-wrap items-center space-x-2">
                                <button className="flex items-center text-gray-600 border border-gray-300 px-3 py-1.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
                                    <Filter className="w-4 h-4 mr-1" />
                                    Filter
                                </button>
                                {activeFilters.map((filter) => (
                                    <div key={filter.key} className="flex items-center bg-gray-100 text-gray-700 px-3 py-1.5 rounded-xl text-sm font-medium">
                                        {filter.label}
                                        <X className="w-4 h-4 ml-2 cursor-pointer text-gray-500 hover:text-gray-900" />
                                    </div>
                                ))}
                            </div>
                            
                            <div className="relative w-full sm:w-64">
                                <input 
                                    type="text" 
                                    placeholder="Search..." 
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                />
                                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                            </div>
                        </div>

                        {/* Client Table */}
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-white">
                                    <tr>
                                        {tableHeaders.map((header) => (
                                            <th
                                                key={header.key}
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer select-none"
                                                onClick={() => requestSort(header.key)}
                                            >
                                                <div className="flex items-center">
                                                    {header.label}
                                                    {getSortIndicator(header.key)}
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-100">
                                    {sortedClients.map((client) => (
                                        <tr key={client.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {client.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                {client.company}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                {client.phone}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <StatusBadge status={client.status} />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                {client.date}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                ${client.amount}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination/Footer Info */}
                        <div className="flex justify-end items-center mt-4 pt-4 border-t border-gray-100 text-sm text-gray-600">
                            <span className="mr-4">Show: 10 per result</span>
                            <span className="text-blue-600 font-medium cursor-pointer hover:text-blue-700">See More</span>
                        </div>
                    </div>
                </main>
        </div>
      </div>
    </div>


  );
}