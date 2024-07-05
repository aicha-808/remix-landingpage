import { Link, NavLink } from "@remix-run/react";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white px-2 py-4 mt-3 fixed top-0 left-0 right-0">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="#home" className="space-x-3 rtl:space-x-reverse">
            <span className="text-3xl font-semibold text-blue-600 font-display px-1">Colab</span>
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="border inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={menuOpen ? "true" : "false"}
          >
            <span className="sr-only">Toggle navigation</span>
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
    
        <div className="hidden md:flex flex-grow justify-center">
          <ul className="font-medium flex mx-auto text-lg p-4 space-x-8 rtl:space-x-reverse">
            <li>
              <NavLink to="#home" className="font-sans block py-2 px-3 text-gray-900 rounded border-0 hover:border-b-2 hover:border-indigo-500 md:p-0 dark:text-white">Home</NavLink>
            </li>
            <li>
              <NavLink to="#projects" className="font-sans block py-2 px-3 text-gray-900 rounded hover:border-b-2 hover:border-green-500 md:p-0 dark:text-white">Projects</NavLink>
            </li>
            <li>
              <NavLink to="#services" className="font-sans block py-2 px-3 text-gray-900 rounded hover:border-b-2 hover:border-green-500 md:p-0 dark:text-white">Services</NavLink>
            </li>
            <li>
              <NavLink to="#blog" className="font-sans block py-2 px-3 text-gray-900 rounded hover:border-b-2 hover:border-green-500 md:p-0 dark:text-white">Blog</NavLink>
            </li>
            <li>
              <NavLink to="#about" className="font-sans block py-2 px-3 text-gray-900 rounded hover:border-b-2 hover:border-green-500 md:p-0 dark:text-white">About</NavLink>
            </li>
            <li>
              <NavLink to="#contacts" className="font-sans block py-2 px-3 text-gray-900 rounded hover:border-b-2 hover:border-green-500 md:p-0 dark:text-white">Contacts</NavLink>
            </li>
          </ul>
          <div className="flex space-x-4 text-lg items-center">
            <NavLink to='/signin' className="font-medium">Sign In</NavLink>
            <NavLink to='/login' className="font-medium p-1 w-20 bg-blue-500 text-white text-center rounded">Log In</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
