import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav id="header" className="sticky w-full z-30   py-1 bg-indigo-20 ">
        <div className="w-full flex items-center justify-between  mt-0 px-6 py-2">
          <NavLink to="/" className="font-bold text-indigo-600 uppercase">
            Catchonka
          </NavLink>

          <div
            className="  md:items-center sm:w-auto  md:w-auto w-full order-3 md:order-1"
            id="menu"
          >
            <nav>
              <ul className="flex sm:text-xs  sm:p-2 items-center justify-between  rounded-full text-base bg-indigo-600 text-indigo-200 md:p-2  ">
                <li>
                  <NavLink
                    className="inline-block no-underline hover:text-white hover:bg-pink-500 font-medium  rounded-full  text-lg py-2 px-4 lg:-ml-2"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                    to="/aboutUs"
                  >
                    About Us
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div
            className="order-2 md:order-3 flex flex-wrap items-center justify-end "
            id="nav-content"
          >
            <div className=" flex  items-center">
              <Link
                className="bg-yellow-300 text-indigo-900  p-2 rounded font-bold uppercase hover:bg-yellow-500 hover:text-indigo-900"
                to="/cats/create"
              >
                Create Cat
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
