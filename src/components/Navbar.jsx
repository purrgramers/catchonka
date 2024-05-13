import { NavLink } from "react-router-dom";
function Navbar() {
    const elSwitchs = document.querySelectorAll('.elSwitch')
    elSwitchs.forEach( e => {
            e.addEventListener('click', function(){
            if (e.classList.contains('left-[155px]')){
                e.classList.remove('left-[155px]')
                e.classList.add('left-1')
            }else {
                e.classList.remove('left-1')
                e.classList.add('left-[155px]')
            }
            
        })
    } )
  return (
    <div className="mx-8 shadow rounded-full h-10 mt-4 flex bg-green-200 p-1 relative items-center">
    <div className="w-full flex justify-center">
        <button href="/">Home</button>
    </div>
    <div className="w-full flex justify-center">
        <button href="/Profile">Profile</button>
    </div>
    <span 
    className="elSwitch bg-teal-600 shadow text-white flex items-center justify-center w-1/2 rounded-full h-8 transition-all top-[4px] absolute left-1 ">
    Home
    </span>
</div>
  );
}

export default Navbar;
