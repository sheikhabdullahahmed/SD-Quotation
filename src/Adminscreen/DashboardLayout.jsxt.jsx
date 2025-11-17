// components/DashboardLayout.jsx
import { useState } from 'react';
import { useRouter } from 'next/router';

const DashboardLayout = ({ children, activePage }) => {
  const [activeNav, setActiveNav] = useState(activePage);
  const router = useRouter();

  const navigationItems = [
    { name: 'Dashboard', icon: 'ph-layout', path: '/dashboard' },
    { name: 'Quotation', icon: 'ph-note', path: '/quotation' },
    { name: 'Client List', icon: 'ph-users-three', path: '/clients' },
    { name: 'Templates', icon: 'ph-copy', path: '/templates' },
    { name: 'User Management', icon: 'ph-gear-six', path: '/user' },
  ];

  const handleNavigation = (item) => {
    setActiveNav(item.name);
    router.push(item.path);
  };

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <div className="flex h-screen overflow-hidden">
        {/* Your sidebar code here */}
        <aside className="flex flex-col w-64 bg-white border-r border-gray-100 shadow-sm">
          {/* ... sidebar content ... */}
          {navigationItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item)}
              className={`w-full flex items-center p-3 rounded-xl text-left transition-all duration-200 ${
                activeNav === item.name 
                  ? 'bg-blue-50 text-blue-600 font-semibold border border-blue-100 shadow-sm' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <i className={`ph-bold ${item.icon} text-xl mr-3 ${activeNav === item.name ? 'text-blue-600' : 'text-gray-400'}`}></i>
              {item.name}
            </button>
          ))}
        </aside>

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          {/* Header */}
          <header className="h-20 flex items-center justify-between bg-white border-b border-gray-200 px-6 sticky top-0 z-10 shadow-sm">
            <div className="text-xl font-semibold text-gray-900">{activeNav}</div>
            {/* ... header content ... */}
          </header>

          {/* Page content */}
          <main className="p-6 flex-1 bg-gray-50">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;