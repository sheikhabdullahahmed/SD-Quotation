  import React, { useState } from "react";
  import { FileText, CheckCircle, Clock, XCircle, Search, Bell, User } from "lucide-react";
import { Link } from "react-router-dom";

  export default function HistoryPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const quotations = [
      {
        id: "Q - 125",
        date: "12 Nov 2025",
        amount: "200,000",
        status: "Approved",
      },
      {
        id: "Q - 124",
        date: "08 Nov 2025",
        amount: "150,000",
        status: "Approved",
      },
      {
        id: "Q - 123",
        date: "02 Nov 2025",
        amount: "350,000",
        status: "Pending",
      },
      {
        id: "Q - 122",
        date: "28 Oct 2025",
        amount: "50,000",
        status: "Approved",
      },
    ];

    const filteredQuotations = quotations.filter(
      (q) =>
        q.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.amount.includes(searchTerm)
    );

    return (
      <div className="flex-1 flex flex-col bg-gray-50 overflow-auto">
        {/* Header */}
        
        <div className=" border-b border-gray-200 px-4  sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              My Quotation History
            </h1>
            
            <div className="flex items-center gap-3">
              {/* Search Bar */}
              <div className="relative flex-1 sm:flex-initial">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full sm:w-64 pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Notification Icon */}
              <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* User Profile */}
              <div className=" border-t border-gray-100 bg-gray-50">
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
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Total Quotation */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <FileText className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-sm font-medium text-gray-600">Total Quotation</h3>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">12</p>
              <p className="text-sm text-gray-500">All your quotations</p>
            </div>

            {/* Approved */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-green-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-sm font-medium text-gray-600">Approved</h3>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">25%</p>
              <p className="text-sm text-gray-500">Successfully approved</p>
            </div>

            {/* Pending */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-orange-50 rounded-lg">
                  <Clock className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-sm font-medium text-gray-600">Pending</h3>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">08</p>
              <p className="text-sm text-gray-500">Waiting for review</p>
            </div>

            {/* Reject */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-red-50 rounded-lg">
                  <XCircle className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-sm font-medium text-gray-600">Reject</h3>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">02</p>
              <p className="text-sm text-gray-500">Declined quotations</p>
            </div>
          </div>

          {/* Quotations Table */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Quotation ID
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Amount
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Action
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredQuotations.map((quotation, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {quotation.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {quotation.date}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {quotation.amount}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                            quotation.status === "Approved"
                              ? "bg-green-100 text-green-700"
                              : "bg-orange-100 text-orange-700"
                          }`}
                        >
                          {quotation.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-sm text-gray-700 hover:text-gray-900 font-medium">
                          View File
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-sm text-gray-700 hover:text-gray-900 font-medium">
                          Edit File
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden divide-y divide-gray-200">
              {filteredQuotations.map((quotation, index) => (
                <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">
                        {quotation.id}
                      </p>
                      <p className="text-sm text-gray-600">{quotation.date}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        quotation.status === "Approved"
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {quotation.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-600">Amount:</span>
                    <span className="font-semibold text-gray-900">
                      {quotation.amount}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                      View File
                    </button>
                    <button className="flex-1 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                      Edit File
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="border-t border-gray-200 px-4 py-3 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Showing <span className="font-medium">24</span> / <span className="font-medium">32</span>
              </div>
              <button className="px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors">
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }