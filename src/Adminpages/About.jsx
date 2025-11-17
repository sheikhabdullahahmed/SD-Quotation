// src/pages/About.jsx
import React from "react";
import Sidebar from "../Admin/Adminsidebar";
import { Menu } from "lucide-react";

const appFeatures = [
    {
        id: 1,
        title: 'Quotation Creation',
        description: 'Generate professional quotations instantly with auto-calculated totals and tax summaries.',
    },
    {
        id: 2,
        title: 'Custom Field Builder',
        description: 'Super Admins can add, edit, or remove fields to match their company\'s specific needs — no coding required.',
    },
    {
        id: 3,
        title: 'Client Management',
        description: 'Store and organize client details, view history, and access past quotations anytime.',
    },
    {
        id: 4,
        title: 'Dashboard & Analytics',
        description: 'Track total quotations, pending approvals, and client data with an interactive, real-time dashboard.',
    },
    {
        id: 5,
        title: 'Template Designer',
        description: 'Create and customize quotation templates to match your brand identity and layout preferences.',
    },
];


const FeatureBlock = ({ feature }) => (
    <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900 mb-1">
            {feature.id}. {feature.title}
        </h2>
        <p className="text-gray-600 text-base">
            {feature.description}
        </p>
    </div>
);

export default function About() {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    return (
        <div className="flex h-screen">
            <Sidebar
                isOpen={isSidebarOpen}
                toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
                activeRoute="/about"
            />

            <div className="flex-1 p-6">
                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="md:hidden mb-4"
                >
                    <Menu />
                </button>
                {/* <h1 className="text-2xl font-bold">About This App</h1> */}
                <main className="p-4 md:p-4 max-w-8xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center md:text-left">About App</h1>
                    
                    {/* Features List */}
                    <div className="bg-white rounded-xl divide-y divide-gray-100">
                        {appFeatures.map(feature => (
                            <FeatureBlock key={feature.id} feature={feature} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}