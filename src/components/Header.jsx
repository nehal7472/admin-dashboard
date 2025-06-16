import { NavLink } from "react-router-dom";

function Header({ navItems }) {
  return (
    <nav className="space-y-3">
      {navItems.map(({ name, path }) => (
        <NavLink
          key={name}
          to={path}
          className={({ isActive }) =>
            isActive
              ? "block font-semibold text-blue-400"
              : "block hover:text-gray-300"
          }
        >
          {name}
        </NavLink>
      ))}
    </nav>
  );
}

export default Header;
