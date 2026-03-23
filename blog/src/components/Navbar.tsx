import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();

  // Define your nav items here
  const navItems = [
    { name: "Home", to: "/" },
    { name: "Projects", to: "/projects" },
    // Add more sections as needed
    // { name: "Blog", to: "/blog" },
    // { name: "About", to: "/about" },
  ];

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">DCH</div>

      <div className="flex space-x-6">
        {navItems.map((item) => {
          const path = item.to.toLowerCase();
          const current = location.pathname.toLowerCase();

          // Highlight if exact match or nested route
          const isActive = current === path || current.startsWith(path + "/");

          return (
            <Link
              key={item.to}
              to={item.to}
              className={`hover:text-blue-600 transition ${
                isActive
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                  : "text-gray-700"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;