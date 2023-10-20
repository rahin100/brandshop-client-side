import { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import "./Navbar.css"
import { FaToggleOn } from 'react-icons/fa';


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleToggle = () => {
    const body = document.body;
    body.classList.toggle("dark-mode");
    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  };

  useEffect(() => {
    const isDarkMode = localStorage.getItem("theme") === "dark";
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    }
  }, []);

 

  const handleSignOut = () => {
    logOut()
    .then()
    .catch();
  };

  const navLink = (
    <ul className="lg:flex lg:space-x-6">
      <li className="text-[18px] font-bold text-black">
        <NavLink
          to="/"
          className="text-black"
          activeclassname="text-primary-600"
        >
          Home
        </NavLink>
      </li>
      <li className="text-[18px]  font-bold text-black">
        <NavLink
          to="/addProduct"
          className="text-black"
          activeclassname="text-primary-600"
        >
          Add Product
        </NavLink>
      </li>
      <li className="text-[18px] font-bold  text-black">
        <NavLink
          to="/mycart"
          className="text-black"
          activeclassname="text-primary-600"
        >
          My Cart
        </NavLink>
      </li>
      <li className="text-[18px] font-bold text-black">
        <NavLink
          to="/login"
          className="text-black"
          activeclassname="text-primary-600"
        >
          Login
        </NavLink>
      </li>
    </ul>
  );

  return (
    <div>
      <div className="navbar shadow-2xl p-4 bg-[#F9F6EE]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <Link to={"/"}>
            <img
              className="w-[230px]"
              src="https://svgshare.com/i/yd8.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt="User Avatar" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-lg dropdown-content bg-black rounded-box h-[]"
              >
                <li>
                  <a>{user.displayName}</a>
                </li>
                <li>
                  <button onClick={handleSignOut}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src="https://i.ibb.co/s5zPXPr/accoung-img.jpg"
                      alt="User Avatar"
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <button>Login</button>
                  </li>
                </ul>
              </div>
            </Link>
          )}
          <FaToggleOn onClick={handleToggle} className="icons text-3xl"></FaToggleOn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
