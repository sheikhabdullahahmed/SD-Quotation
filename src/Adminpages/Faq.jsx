// src/pages/FAQ.jsx
import React, { useState } from 'react';
import Sidebar from "../Admin/Adminsidebar";
import { Menu, Plus, Minus } from "lucide-react";

const mockFAQs = [
    {
        id: 1,
        question: 'What is the Quotation System App?',
        answer: 'It\'s a platform where users can request quotations for products or services, and vendors can send personalized offers in response.',
        isExpanded: true,
    },
    {
        id: 2,
        question: 'How can I request a quotation?',
        answer: 'You can request a quotation by navigating to the "Quotation" section, filling in the required details about your needs, and submitting the request. It will then be distributed to relevant vendors.',
    },
    {
        id: 3,
        question: 'Can I compare quotations from multiple vendors?',
        answer: 'Yes, the system is designed to allow side-by-side comparison of all received quotations, making it easy to evaluate price, terms, and delivery schedules.',
    },
    {
        id: 4,
        question: 'How long does it take to receive a quotation?',
        answer: 'The time varies depending on the complexity of the request, but most users receive their first few offers within 24 to 48 hours.',
    },
    {
        id: 5,
        question: 'Can I approve or reject a quotation?',
        answer: 'Absolutely. Within the "Notifications" or "Client List" section, you have clear options to Approve or Reject any quotation you have received.',
    },
    {
        id: 6,
        question: 'Do I need to register to use the app?',
        answer: 'Yes, registration is required to ensure data security and to track your requests and vendor communications accurately.',
    },
    {
        id: 7,
        question: 'Can I view my previous quotations?',
        answer: 'All your past and present quotation requests and received offers are archived under the "Client Management" section for easy access and historical review.',
    },
    {
        id: 8,
        question: 'Is there any fee for requesting quotations?',
        answer: 'No, requesting quotations is completely free for users. The system generates revenue from vendors who pay a small fee to access relevant requests.',
    },
];

const AccordionItem = ({ faq, toggleAccordion, isOpen }) => {
    const Icon = isOpen ? Minus : Plus;

    return (
        <div className="border-b border-gray-100 last:border-b-0">
            {/* Header/Question */}
            <button
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none hover:bg-gray-50 transition-colors"
                onClick={() => toggleAccordion(faq.id)}
            >
                <span className={`text-base font-semibold ${isOpen ? 'text-gray-900' : 'text-gray-800'}`}>
                    {faq.question}
                </span>
                <Icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
            </button>

            {/* Content/Answer */}
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
            >
                {isOpen && (
                    <p className="px-4 text-gray-600 text-sm leading-relaxed">
                        {faq.answer}
                    </p>
                )}
            </div>
        </div>
    );
};


export default function FAQ() {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    const [openItemId, setOpenItemId] = useState(1); // Start with the first item open


    const toggleAccordion = (id) => {
        setOpenItemId(prevId => (prevId === id ? null : id));
    };

    return (
        <div className="flex h-screen">
            <Sidebar
                isOpen={isSidebarOpen}
                toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
                activeRoute="/faq"
            />

            <div className="flex-1 p-6">
                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="md:hidden mb-4"
                >
                    <Menu />
                </button>
                {/* <h1 className="text-2xl font-bold">Frequently Asked Questions</h1> */}
                <main className="p-4 md:p-4 max-w-8xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center md:text-left">FAQs</h1>

                    {/* Accordion Container */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 divide-y-0">
                        {mockFAQs.map(faq => (
                            <AccordionItem
                                key={faq.id}
                                faq={faq}
                                isOpen={faq.id === openItemId}
                                toggleAccordion={toggleAccordion}
                            />
                        ))}
                    </div>
                </main>

            </div>
        </div>
    );
}