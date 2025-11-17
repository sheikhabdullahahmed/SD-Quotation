

import { useState } from "react";

const Dashboard = () => {
  const [activeNav, setActiveNav] = useState("Dashboard");

  const navigationItems = [
    { name: "Dashboard", icon: "fa-solid fa-chart-line" },
    { name: "Quotation", icon: "fa-regular fa-file-lines" },
    { name: "Client List", icon: "fa-solid fa-users" },
    { name: "User Management", icon: "fa-solid fa-gear" },
  ];

  const recentQuotations = [
    { id: 1, client: "Smith Jones", date: "Jan.02.2025", amount: "$230", status: "Sent" },
    { id: 2, client: "Victoria Roy", date: "Feb.05.2025", amount: "$340", status: "Sent" },
    { id: 3, client: "Liam James", date: "Feb.06.2025", amount: "$550", status: "Sent" },
    { id: 4, client: "David Liam", date: "Feb.07.2025", amount: "$666", status: "Sent" },
  ];

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className="flex flex-col w-64 bg-white border-r border-gray-100 shadow-sm hidden md:flex">
          <div className="p-6 flex items-center border-b border-gray-100">
            <i className="fa-solid fa-file-invoice text-blue-600 text-2xl mr-3"></i>
            <span className="text-xl font-medium text-gray-900">SD Quotation</span>
          </div>

          {/* Create Quotation Button */}
          <div className="p-4 border-b border-gray-100">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg">
              <i className="fa-solid fa-plus text-lg mr-2"></i>
              Create Quotation
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-grow p-4 space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveNav(item.name)}
                className={`w-full flex items-center p-3 rounded-xl text-left transition-all duration-200 ${
                  activeNav === item.name
                    ? "bg-blue-50 text-blue-600 font-semibold border border-blue-100 shadow-sm"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <i
                  className={`${item.icon} text-lg mr-3 ${
                    activeNav === item.name ? "text-blue-600" : "text-gray-400"
                  }`}
                ></i>
                {item.name}
              </button>
            ))}
          </nav>

          {/* User Profile */}
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <div className="flex items-center">
              <img
                src="https://placehold.co/40x40/4f46e5/ffffff?text=BM"
                alt="Brown Martin"
                className="w-10 h-10 rounded-full mr-3 border-2 border-white shadow-sm"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">Brown Martin</p>
                <p className="text-xs text-gray-500 truncate">Business owner</p>
              </div>
              <i className="fa-solid fa-caret-down text-gray-400 ml-2"></i>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          {/* Header */}
          <header className="h-20 flex items-center justify-between bg-white border-b border-gray-200 px-6 sticky top-0 z-10 shadow-sm">
            <div className="text-xl font-semibold text-gray-900">Admin</div>
            <div className="flex items-center space-x-6">
              {/* Search */}
              <div className="relative hidden sm:block">
                <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64 text-sm transition-all duration-200 bg-gray-50"
                />
              </div>

              {/* Notification */}
              <div className="relative">
                <i className="fa-regular fa-bell text-2xl text-gray-500 hover:text-gray-700 cursor-pointer transition-colors duration-200"></i>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
              </div>

              {/* Profile */}
              <div className="flex items-center space-x-2 border border-gray-200 rounded-xl p-1.5 pl-4 cursor-pointer hover:bg-gray-50 transition-all duration-200">
                <span className="text-sm font-medium text-gray-700 hidden sm:block">Brown Martin</span>
                <img
                  src="https://placehold.co/32x32/4f46e5/ffffff?text=BM"
                  alt="Profile"
                  className="w-8 h-8 rounded-full border border-gray-200"
                />
              </div>
            </div>
          </header>

          {/* Main Dashboard */}
          <main className="p-6 flex-1 bg-gray-50">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Welcome Martin Brown{" "}
                <i className="fa-regular fa-hand text-yellow-500 ml-1"></i>
              </h2>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-500 text-sm font-medium">Total Quotation</p>
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <i className="fa-regular fa-file-lines text-blue-600 text-lg"></i>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">12</h3>
                <div className="flex items-center text-green-600 text-sm font-medium">
                  <i className="fa-solid fa-arrow-up text-xs mr-1"></i>
                  +2% vs last week
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-500 text-sm font-medium">Pending Quotation</p>
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                    <i className="fa-regular fa-clock text-orange-600 text-lg"></i>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">25%</h3>
                <div className="flex items-center text-green-600 text-sm font-medium">
                  <i className="fa-solid fa-arrow-up text-xs mr-1"></i>
                  +2% vs last week
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-500 text-sm font-medium">New Clients</p>
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-users text-green-600 text-lg"></i>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">230</h3>
                <div className="flex items-center text-green-600 text-sm font-medium">
                  <i className="fa-solid fa-arrow-up text-xs mr-1"></i>
                  +24% vs last week
                </div>
              </div>
            </div>

            {/* Recent Quotation Table */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Recent Quotation</h3>
                <button className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center transition-colors duration-200">
                  View all <i className="fa-solid fa-arrow-right ml-1"></i>
                </button>
              </div>

              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentQuotations.map((q) => (
                      <tr key={q.id} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4 text-sm text-gray-900">{q.id}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{q.client}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">{q.date}</td>
                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">{q.amount}</td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 inline-flex text-xs font-semibold rounded-full bg-green-100 text-green-800 border border-green-200">
                            {q.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <div className="flex items-center space-x-3">
                            <button className="text-red-500 hover:text-red-700">
                              <i className="fa-solid fa-trash"></i>
                            </button>
                            <button className="text-blue-600 hover:text-blue-700">
                              <i className="fa-solid fa-share-nodes"></i>
                            </button>
                            <button className="text-gray-500 hover:text-gray-700">
                              <i className="fa-regular fa-eye"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>

        {/* Help Button */}
        <div className="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all duration-200 cursor-pointer">
          <i className="fa-solid fa-circle-question text-xl"></i>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
