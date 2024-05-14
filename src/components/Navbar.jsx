import { NavLink } from "react-router-dom";

function Navbar() {
 
  return (
<><nav id="header" className="w-full z-30 top-10 py-1 bg-green-200 shadow-lg  ">
      <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
         <NavLink to="/" className="font-bold text-pink-800 uppercase">Catchonka</NavLink>
         <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
            <svg className="fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
               <title>menu</title>
               <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
         </label>
         <input className="hidden" type="checkbox" id="menu-toggle">
         </input>
         <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
            <nav>
               <ul className="md:flex items-center justify-between text-base text-pink-900 pt-4 md:pt-0">
                  <li><NavLink className="inline-block no-underline hover:text-black  font-medium text-lg py-2 px-4 lg:-ml-2" to="/">Home</NavLink></li>
                  <li><NavLink className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" to="/cats/:catId">Profile</NavLink></li>
               </ul>
            </nav>
         </div>
         
         <div className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
            <div className="auth flex items-center w-full md:w-full">
               <button className="bg-orange-400 text-pink-900  p-2 rounded font-bold uppercase hover:bg-orange-500 hover:text-pink-900" href="/cats/create">Add Cat</button>
            </div>
         </div>
        
      </div>
     
   </nav>
      </>
  );
}

export default Navbar;
