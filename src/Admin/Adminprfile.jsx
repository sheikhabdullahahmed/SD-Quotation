// src/pages/AdminProfile.jsx
import React, { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from '../Admin/Adminsidebar'

const initialUserData = {
    firstName: "Brown",
    lastName: "Martin",
    email: "brownmartin@gmail.com",
    mobile: "0806 123 7890",
    gender: "Male",
    profileImage: "https://placehold.co/150x150",
};

const GenderSelector = ({ selectedGender, setGender }) => {
    const genders = ["Male", "Female"];

    return (
        <div className="flex space-x-2 mt-2">
            {genders.map((gender) => (
                <button
                    key={gender}
                    onClick={() => setGender(gender)}
                    className={`px-4 py-2 rounded-xl text-sm border ${
                        selectedGender === gender
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-white text-gray-700 border-gray-300"
                    }`}
                >
                    {gender}
                </button>
            ))}
        </div>
    );
};

export default function AdminProfile() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [userData, setUserData] = useState(initialUserData);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="flex h-screen bg-gray-50 text-gray-800">
            {/* Sidebar */}
            <Sidebar
                isOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
                activeRoute="/profile"
            />

            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                {/* Mobile Header */}
                <header className="md:hidden flex items-center justify-between p-4 bg-white shadow-sm">
                    <button onClick={toggleSidebar}>
                        <Menu className="w-6 h-6" />
                    </button>
                    <h1 className="text-lg font-semibold">My Profile</h1>
                    <div className="w-6"></div>
                </header>

                {/* Body */}
                <main className="p-6 md:p-12 max-w-4xl mx-auto">
                    <h1 className="text-2xl font-bold mb-8 hidden md:block">
                        My Profile
                    </h1>

                    {/* Profile Photo */}
                    <div className="flex items-center space-x-6 border-b pb-8 mb-8">
                        <div className="w-32 h-32 overflow-hidden rounded-full border-4 border-gray-200">
                            <img
                                src={initialUserData.profileImage}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <button className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-xl">
                            Upload new photo
                        </button>
                    </div>

                    {/* Form */}
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-sm">First Name</label>
                                <input
                                    name="firstName"
                                    value={userData.firstName}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-xl"
                                />
                            </div>
                            <div>
                                <label className="text-sm">Last Name</label>
                                <input
                                    name="lastName"
                                    value={userData.lastName}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-xl"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-sm">Email</label>
                                <input
                                    disabled
                                    value={userData.email}
                                    className="w-full p-2 border bg-gray-100 rounded-xl"
                                />
                            </div>
                            <div>
                                <label className="text-sm">Mobile</label>
                                <input
                                    name="mobile"
                                    value={userData.mobile}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-xl"
                                />
                            </div>
                        </div>

                        {/* Gender */}
                        <div>
                            <label className="text-sm">Gender</label>
                            <GenderSelector
                                selectedGender={userData.gender}
                                setGender={(g) =>
                                    setUserData({ ...userData, gender: g })
                                }
                            />
                        </div>
                    </div>

                    <button className="mt-10 w-full bg-blue-600 text-white py-3 text-lg rounded-xl">
                        Save Changes
                    </button>
                </main>
            </div>
        </div>
    );
}