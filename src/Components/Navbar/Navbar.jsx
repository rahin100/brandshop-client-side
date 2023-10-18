import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <ul className="flex space-x-6">
      <li className="text-[18px] font-medium text-black">
        <NavLink
          to="/"
          className="text-black"
          activeclassname="text-primary-600"
        >
          Home
        </NavLink>
      </li>
      <li className="text-[18px]  font-medium text-black">
        <NavLink
          to="/team"
          className="text-black"
          activeclassname="text-primary-600"
        >
          Add Product
        </NavLink>
      </li>
      <li className="text-[18px] font-medium  text-black">
        <NavLink
          to="/testimonials"
          className="text-black"
          activeclassname="text-primary-600"
        >
          My Cart
        </NavLink>
      </li>
      <li className="text-[18px] font-medium text-black">
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
      <div className="navbar shadow-xl p-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
          <Link to={'/'}>
          <img className="w-[230px]" src="https://svgshare.com/i/yd8.svg" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
