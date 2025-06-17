import { NavLink } from "react-router-dom";
import Header from "./Header";

const Sidebar = () => {
  const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "Expenses", path: "/expenses" },
    { name: "Wallets", path: "/wallets" },
    { name: "Summary", path: "/summary" },
    { name: "Accounts", path: "/accounts" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <aside className="w-full md:w-64 bg-black text-white px-10 py-12 flex flex-col gap-16 justify-center items-center md:justify-start md:items-start">
      <div className="flex flex-col items-center md:items-start text-white">
        <div className="relative">
          <img
            src="profile.png"
            alt="Profile"
            className="rounded-xl w-16 h-16 mb-2"
          />

          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
            4
          </span>
        </div>

        <h2 className="font-bold text-lg mt-1">Ahsanul Haque nehal</h2>
        <p className="text-sm text-gray-400">007cryptic@gmail.com</p>
      </div>

      <Header navItems={navItems} />
    </aside>
  );
};

export default Sidebar;
