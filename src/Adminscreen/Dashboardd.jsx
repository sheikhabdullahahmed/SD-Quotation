import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";

export default function Dashboard() {
  const recentQuotations = [
    {
      id: 1,
      client: "Smith Jones",
      date: "Jan.02.2025",
      amount: "$230",
      status: "Sent",
    },
    {
      id: 2,
      client: "Victoria Roy",
      date: "Feb.05.2025",
      amount: "$340",
      status: "Sent",
    },
    {
      id: 3,
      client: "Liam James",
      date: "Feb.06.2025",
      amount: "$550",
      status: "Sent",
    },
    {
      id: 4,
      client: "David Liam",
      date: "Feb.07.2025",
      amount: "$666",
      status: "Sent",
    },
  ];

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <div className="flex h-screen overflow-hidden">
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-y-auto">
          <Header />

          <main className="p-6 flex-1 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Welcome Martin Brown{" "}
              <i className="fa-regular fa-hand text-yellow-500 ml-1"></i>
            </h2>
            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-500 text-sm font-medium">
                    Total Quotation
                  </p>
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <i className="fa-regular fa-file-lines text-blue-600 text-lg"></i>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">12</h3>
                {/* <div className="flex items-center text-green-600 text-sm font-medium">
                  <i className="fa-solid fa-arrow-up text-xs mr-1"></i>
                  +2% vs last week
                </div> */}
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-500 text-sm font-medium">
                    Total Revenue
                  </p>
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                    <i className="fa-regular fa-clock text-orange-600 text-lg"></i>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">25%</h3>
                {/* <div className="flex items-center text-green-600 text-sm font-medium">
                  <i className="fa-solid fa-arrow-up text-xs mr-1"></i>
                  +2% vs last week
                </div> */}
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-500 text-sm font-medium">
                    This Month Revenue
                  </p>
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-users text-green-600 text-lg"></i>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">230</h3>
                {/* <div className="flex items-center text-green-600 text-sm font-medium">
                  <i className="fa-solid fa-arrow-up text-xs mr-1"></i>
                  +24% vs last week
                </div> */}
              </div>
            </div>

            {/* Recent Quotation Table */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Recent Quotation
                </h3>
                <button className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center transition-colors duration-200">
                  View all <i className="fa-solid fa-arrow-right ml-1"></i>
                </button>
              </div>

              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        #
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Client
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentQuotations.map((q) => (
                      <tr key={q.id} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {q.id}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {q.client}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {q.date}
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                          {q.amount}
                        </td>
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
      </div>

      <div className="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all duration-200 cursor-pointer">
        <i className="fa-solid fa-circle-question text-xl"></i>
      </div>
    </div>
  );
}
