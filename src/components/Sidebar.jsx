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
      <div className="flex flex-col items-center md:items-start ">
        <img
          src="profile.png"
          alt="Profile"
          className="rounded-full w-16 h-16 mb-2"
        />
        <h2 className="font-bold text-lg">Ahsanul Haque</h2>
        <p className="text-sm">007cryptic@gmail.com</p>
      </div>
      <Header navItems={navItems} />
    </aside>
  );
};

export default Sidebar;
