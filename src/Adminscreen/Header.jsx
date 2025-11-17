
import Notification from '../assets/Notification.png'
import { Link} from "react-router-dom";


export default function Header() {
  return (
    <header className="py-4 z-[999] flex items-center justify-between border-b border-gray-200 px-6 sticky top-0 shadow-sm bg-white">
      <div className="text-xl font-semibold text-gray-900">Admin</div>
      <div className="flex items-center space-x-6">
        <div className="relative hidden sm:block">
          <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64 text-sm transition-all duration-200 bg-gray-50"
          />
        </div>

        <div className="relative">
          {/* <i className="fa-regular fa-bell text-2xl text-gray-500 hover:text-gray-700 cursor-pointer transition-colors duration-200"></i> */}
          <img src={Notification} alt="" className='w-4' />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
        </div>

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
    </header>
  );
}