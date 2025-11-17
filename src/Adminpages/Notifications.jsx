
// src/pages/Notifications.jsx
import React from "react";
import Sidebar from "../Admin/Adminsidebar";
import { Menu, MoreVertical } from "lucide-react";

const mockNotifications = [
    { id: 1, name: 'Smith Jones', time: '12:22', message: 'fill up the quotation foam', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=300&q=80' },
    { id: 2, name: 'David Robins', time: '12:22', message: 'fill up the quotation foam', avatar: 'https://images.unsplash.com/photo-1547425260-76bc0fa4d2ce?fit=crop&w=300&q=80' },
    { id: 3, name: 'Ethan Jones', time: '12:22', message: 'fill up the quotation foam', avatar: 'https://images.unsplash.com/photo-1519085360753-af0257928c94?fit=crop&w=300&q=80' },
    { id: 4, name: 'Williams Roy', time: '12:22', message: 'fill up the quotation foam', avatar: 'https://images.unsplash.com/photo-1560250097-fb5597987251?fit=crop&w=300&q=80' },
    { id: 5, name: 'Donald Trump', time: '12:22', message: 'fill up the quotation foam', avatar: 'https://images.unsplash.com/photo-1506794778202-dfa1197c8286?fit=crop&w=300&q=80' },
    { id: 6, name: 'Kevin Roy', time: '12:22', message: 'fill up the quotation foam', avatar: 'https://images.unsplash.com/photo-1507003211169-0a8169c7aa6d?fit=crop&w=300&q=80' },
    { id: 7, name: 'Sam Jones', time: '12:22', message: 'fill up the quotation foam', avatar: 'https://images.unsplash.com/photo-1531427186611-adcb659475c4?fit=crop&w=300&q=80' },
];

const NotificationItem = ({ notification }) => {
    // Fallback initials for broken images
    const initials = notification.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);

    return (
        <div className="flex items-start justify-between p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <div className="flex items-start">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-4 flex-shrink-0 bg-gray-200">
                    <img
                        src={notification.avatar}
                        alt={notification.name}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/40x40/9ca3af/ffffff?text=${initials}` }}
                    />
                </div>
                <div>
                    <p className="font-semibold text-gray-900">
                        {notification.name}, <span className="font-normal text-gray-600">{notification.message}</span>
                    </p>
                    <p className="text-xs text-gray-400">{notification.time}</p>
                </div>
            </div>
            <MoreVertical className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600 flex-shrink-0" />
        </div>
    );
};

export default function Notifications() {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const notificationCount = mockNotifications.length;

    return (
        <div className="flex h-screen">
            <Sidebar
                isOpen={isSidebarOpen}
                toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
                activeRoute="/notifications"
            />

            <div className="flex-1 p-6">
                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="md:hidden mb-4"
                >
                    <Menu />
                </button>
                {/* <h1 className="text-2xl font-bold">Notifications</h1> */}
                <main className="p-4 md:p-4 max-w-8xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Notifications</h1>

                    {/* Notification Summary */}
                    <p className="text-sm text-gray-500 mb-8">
                        You have <span className="text-blue-600 font-semibold">{notificationCount} notifications</span> today.
                    </p>

                    {/* Notifications List */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 divide-y divide-gray-100">
                        {mockNotifications.map(notification => (
                            <NotificationItem key={notification.id} notification={notification} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}
