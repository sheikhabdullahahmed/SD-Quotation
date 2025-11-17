import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  FileText,
  User,
  Building2,
  Users,
  Clock,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  X,
  Calendar,
} from "lucide-react";
import HistoryPage from '../HistoryPage'

export default function InvoiceForm() {
  const [activeTab, setActiveTab] = useState("customer");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [formData, setFormData] = useState({
    // Customer Details
    customerName: "Brown Martin",
    companyName: "Digital Thermal",
    deliveryAddress: "901 Bagby, between McKinney and Walker, Houston",
    city: "Houston",
    state: "Texas",
    postalCode: "77002",
    email: "thomasshelby@gmail.com",
    phoneNumber: "+1-281-658-5421",
    specialInstructions: "Type Special Note",

    // Order Sources
    orderSource: "Website",
    orderDate: "Nov 01, 2025",
    orderDeliveryAddress:
      "Ex. 123 901 Bagby, between McKinney and Walker, Houston Street, Los Angeles, USA",
    orderCity: "Houston",
    orderPhoneNumber: "+1-281-658-5421",
    issueDate: "Nov 01, 2025",
    dueDate: "Nov 10, 2025",
    paymentMethod: "Cheque",
    advance: "30% Mandatory",

    // Add Product
    productName: "Mixing Paddles",
    category: "Construction",
    unitMeasure: "Pcs",
    quantity: "15",
    productCity: "Houston",
    productPhoneNumber: "+1-281-658-5421",
    unitPrice: "15.00$",
    discountApplied: "8%",
    taxApplied: "2%",
  });

  const [showModal, setShowModal] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileType, setFileType] = useState("Pdf");
  const [activePage, setActivePage] = useState("quotation");


  const tabs = [
    { id: "customer", label: "Customer Details" },
    { id: "order", label: "Order Sources" },
    { id: "product", label: "Add Product" },
    { id: "summary", label: "Price Summary" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const renderFormContent = () => {
    switch (activeTab) {
      case "customer":
        return (
          <>
            {/* Customer Name */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Customer Name
              </label>
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Delivery Address */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Delivery Address
              </label>
              <input
                type="text"
                name="deliveryAddress"
                value={formData.deliveryAddress}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* City, State, Postal Code */}
            <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  City
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                >
                  <option>Houston</option>
                  <option>Dallas</option>
                  <option>Austin</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  State
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                >
                  <option>Texas</option>
                  <option>California</option>
                  <option>New York</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Postal Code
                </label>
                <select
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                >
                  <option>77002</option>
                  <option>77003</option>
                  <option>77004</option>
                </select>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Special Instructions */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Special Instruction
              </label>
              <input
                type="text"
                name="specialInstructions"
                value={formData.specialInstructions}
                onChange={handleChange}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </>
        );

      case "order":
        return (
          <>
            {/* Order Sources */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Order Sources
              </label>
              <input
                type="text"
                name="orderSource"
                value={formData.orderSource}
                onChange={handleChange}
                placeholder="Website"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Order Date */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Order Date
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="orderDate"
                  value={formData.orderDate}
                  onChange={handleChange}
                  placeholder="Nov 01, 2025"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Delivery Address */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Delivery Address
              </label>
              <input
                type="text"
                name="orderDeliveryAddress"
                value={formData.orderDeliveryAddress}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                City
              </label>
              <select
                name="orderCity"
                value={formData.orderCity}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option>Houston</option>
                <option>Dallas</option>
                <option>Austin</option>
              </select>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Phone Number
              </label>
              <select
                name="orderPhoneNumber"
                value={formData.orderPhoneNumber}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option>+1-281-658-5421</option>
                <option>+1-281-658-5422</option>
              </select>
            </div>

            {/* Issue Date */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Issue Date
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="issueDate"
                  value={formData.issueDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Due Date */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Due Date
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Payment Method
              </label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option>Cheque</option>
                <option>Cash</option>
                <option>Bank Transfer</option>
                <option>Credit Card</option>
              </select>
            </div>

            {/* Advance */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Advance
              </label>
              <input
                type="text"
                name="advance"
                value={formData.advance}
                onChange={handleChange}
                placeholder="30% Mandatory"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </>
        );

      case "product":
        return (
          <>
            {/* Product Name */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Product Name
              </label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                placeholder="Mixing Paddles"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option>Construction</option>
                <option>Hardware</option>
                <option>Tools</option>
              </select>
            </div>

            {/* Unit Measure */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Unit Measure
              </label>
              <select
                name="unitMeasure"
                value={formData.unitMeasure}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option>Pcs</option>
                <option>Box</option>
                <option>Kg</option>
              </select>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Quantity
              </label>
              <select
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option>15</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                City
              </label>
              <select
                name="productCity"
                value={formData.productCity}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option>Houston</option>
                <option>Dallas</option>
                <option>Austin</option>
              </select>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Phone Number
              </label>
              <select
                name="productPhoneNumber"
                value={formData.productPhoneNumber}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option>+1-281-658-5421</option>
                <option>+1-281-658-5422</option>
              </select>
            </div>

            {/* Unit Price */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Unit Price
              </label>
              <select
                name="unitPrice"
                value={formData.unitPrice}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option>15.00$</option>
                <option>25.00$</option>
                <option>50.00$</option>
              </select>
            </div>

            {/* Discount Applied */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Discount Applied
              </label>
              <select
                name="discountApplied"
                value={formData.discountApplied}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option>8%</option>
                <option>10%</option>
                <option>15%</option>
                <option>20%</option>
              </select>
            </div>

            {/* Tax Applied */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Tax Applied
              </label>
              <select
                name="taxApplied"
                value={formData.taxApplied}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option>2%</option>
                <option>5%</option>
                <option>8%</option>
                <option>10%</option>
              </select>
            </div>
          </>
        );

      case "summary":
        return (
          <>
            {/* Sub Total */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Sub Total
              </label>
              <input
                type="text"
                placeholder="Add Calculated"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                disabled
              />
            </div>

            {/* Total Discount Applied */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Total Discount Applied
              </label>
              <input
                type="text"
                placeholder="Add Calculated"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                disabled
              />
            </div>

            {/* Total Tax Applied */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Total Tax Applied
              </label>
              <input
                type="text"
                placeholder="Add Calculated"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                disabled
              />
            </div>

            {/* Grand Total */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Grand Total
              </label>
              <input
                type="text"
                placeholder="Add Calculated"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                disabled
              />
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Left Sidebar */}
      {/* <div
        className={`${
          sidebarCollapsed ? "w-20" : "w-64"
        } bg-white border-r border-gray-200 flex flex-col transition-all duration-300`}
      >
        <div className="p-4 flex items-center justify-between border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
                fill="currentColor"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
            </div>
            {!sidebarCollapsed && (
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  SD Quotation
                </h1>
              </div>
            )}
          </div>
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
          >
            <ChevronsLeft
              className={`w-4 h-4 transition-transform ${
                sidebarCollapsed ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div> */}
      

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Top Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              New Invoice
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
              <X className="w-4 h-4" />
              Hide Preview
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg border border-gray-300"
              onClick={() => setShowModal(true)}
            >
              <FileText className="w-4 h-4" />
              Save As
            </button>
            <button className="flex items-center gap-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              <Mail className="w-4 h-4" />
              Send Invoice
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          <div
            className={`flex flex-col ${
              sidebarCollapsed
                ? "lg:flex-row lg:gap-10"
                : "lg:flex-row md:gap-6"
            } p-6 transition-all duration-300`}
          >
            {/* Left Form Section */}
            <div
              className={`${
                sidebarCollapsed ? "w-full" : "w-full lg:w-3/5"
              } transition-all`}
            >
              <div className="bg-white rounded-lg border border-gray-200 p-4 max-w-5xl mx-auto">
                {/* Tabs */}
                <div className="col-span-full mb-6">
                  <div className="flex gap-2 overflow-x-auto whitespace-nowrap pb-1">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-3 py-1 rounded-full font-medium transition-colors ${
                          activeTab === tab.id
                            ? "bg-blue-200 border border-[#007AFF] text-[#007AFF]"
                            : "bg-white text-[#007AFF] border border-[#007AFF] hover:bg-blue-200"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {renderFormContent()}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col md:flex-row items-center justify-center md:mt-20 mt-8 gap-4 md:gap-8 px-4 py-4">
                  <button className="bg-gray-900 text-white w-64 py-2 rounded-lg hover:bg-gray-800 transition">
                    Next
                  </button>
                  <button className="bg-gray-900 text-white w-64 py-2 rounded-lg hover:bg-gray-800 transition">
                    Previous
                  </button>
                </div>
              </div>
            </div>

            {/* Right Preview Section */}
            <div
              className={`${
                sidebarCollapsed ? "w-full" : "col-span-1"
              } transition-all`}
            >
              <div className="rounded-lg border border-gray-200 px-3 py-4 sticky top-6 bg-white">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row mb-2">
                  <div className="flex flex-col items-center md:items-start">
                    <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center w-20 h-20">
                      <svg
                        viewBox="0 0 100 100"
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                      >
                        <path d="M30 20 L70 20 L70 40 L50 40 L50 80 L30 80 Z" />
                      </svg>
                    </div>
                    <div className="mt-4 flex gap-2 text-sm">
                      <span className="text-gray-600">Invoice Number:</span>
                      <span className="font-medium">INV-04568</span>
                    </div>
                    <p className="font-medium text-sm mt-1 text-gray-700">
                      07526
                    </p>
                  </div>

                  <div className="flex-1 text-sm text-right md:text-right space-y-1">
                    <p className="text-gray-600">
                      19th Street, Mckinney Walker
                    </p>
                    <p className="text-gray-600">Jaddah</p>
                    <p className="text-gray-600">+1-0281-856-6</p>
                    <div className="pt-2">
                      <p className="font-medium mb-1">Thomas Shelby</p>
                      <p className="text-gray-600">thomasshelby@gmail.com</p>
                      <p className="text-gray-600">Houston, Texas</p>
                      <p className="text-gray-600">77002</p>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <div className="border-t-2 border-blue-500 pt-3">
                  <p className="font-medium text-sm mb-2">
                    Project Description:
                  </p>
                  <p className="text-gray-600 text-sm">
                    Add a brief and concise description of the project, item, or
                    service here.
                  </p>
                </div>

                {/* Product Table - Show on Product and Summary tabs */}
                {(activeTab === "product" || activeTab === "summary") && (
                  <div className="mt-4">
                    <p className="font-medium text-sm mb-3">Product Details</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2 px-1 bg-blue-100 text-blue-600 rounded-tl-lg">
                              S.no
                            </th>
                            <th className="text-left py-2 px-1 bg-blue-100 text-blue-600">
                              Product Name
                            </th>
                            <th className="text-left py-2 px-1 bg-blue-100 text-blue-600">
                              Quantity
                            </th>
                            <th className="text-left py-2 px-1 bg-blue-100 text-blue-600">
                              Unit Price
                            </th>
                            <th className="text-left py-2 px-1 bg-blue-100 text-blue-600">
                              Discount %
                            </th>
                            <th className="text-left py-2 px-1 bg-blue-100 text-blue-600 rounded-tr-lg">
                              Tax %
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-700">
                          <tr className="border-b">
                            <td className="py-2 px-1">01</td>
                            <td className="py-2 px-1">Gas torch</td>
                            <td className="py-2 px-1">60pcs</td>
                            <td className="py-2 px-1">40.00$</td>
                            <td className="py-2 px-1">6%</td>
                            <td className="py-2 px-1">2%</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-1">02</td>
                            <td className="py-2 px-1">Scrapers</td>
                            <td className="py-2 px-1">45pcs</td>
                            <td className="py-2 px-1">25.00$</td>
                            <td className="py-2 px-1">8%</td>
                            <td className="py-2 px-1">2%</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-1">03</td>
                            <td className="py-2 px-1">Sealant guns</td>
                            <td className="py-2 px-1">30pcs</td>
                            <td className="py-2 px-1">50.00$</td>
                            <td className="py-2 px-1">5%</td>
                            <td className="py-2 px-1">3%</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-1">04</td>
                            <td className="py-2 px-1">Heat gun</td>
                            <td className="py-2 px-1">80pcs</td>
                            <td className="py-2 px-1">60.00$</td>
                            <td className="py-2 px-1">9%</td>
                            <td className="py-2 px-1">4%</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-1">05</td>
                            <td className="py-2 px-1">Mixing paddles</td>
                            <td className="py-2 px-1">15pcs</td>
                            <td className="py-2 px-1">15.00$</td>
                            <td className="py-2 px-1">8%</td>
                            <td className="py-2 px-1">2%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Subtotal - Only show on Summary tab */}
                    {activeTab === "summary" && (
                      <div className="mt-4 text-sm text-right">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Subtotal</span>
                          <span className="font-medium">190.00$</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-12 h-12 text-white"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                </svg>
              </div>
            </div>

            <div className="flex gap-4 mb-6 flex-col sm:flex-row">
              <button className="flex-1 h-24 border border-gray-500 rounded-lg flex flex-col items-center justify-center hover:bg-gray-50 transition">
                <span className="text-2xl mb-1">+</span>
                <span className="text-sm">New Folder</span>
              </button>
              <button className="flex-1 h-24 border border-gray-500 rounded-lg flex flex-col items-center justify-center hover:bg-gray-50 transition">
                <FileText className="w-6 h-6 mb-1" />
                <span className="text-sm">Browser</span>
              </button>
            </div>

            <div className="flex gap-4 mb-6 flex-col sm:flex-row">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">
                  File Name
                </label>
                <input
                  type="text"
                  placeholder="Ex. Download, Picture, etc"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={fileName}
                  onChange={(e) => setFileName(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">
                  Save as Type
                </label>
                <select
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={fileType}
                  onChange={(e) => setFileType(e.target.value)}
                >
                  <option>Pdf</option>
                  <option>Jpg</option>
                  <option>Png</option>
                  <option>Docx</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      
    </div>
    
  );
  }