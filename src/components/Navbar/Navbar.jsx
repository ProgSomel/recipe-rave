import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
             <li>
            <a>Home</a>
          </li>
          <li>
            <a>Recipes</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Search</a>
          </li>
          <div className="">
       <div className="relative">
       <input className="bg-[#150B2B0D] w-full rounded-lg pl-8 pr-0" type="text"  placeholder="search"/>
        <div className=" absolute bottom-1 left-2">
        <CiSearch />
        </div>
       </div>
        <div className="bg-[#0BE58A] w-[25px] ml-2 flex justify-center rounded-full">
            <img className="mt-1" src="../../../public/images/manIcon.png" alt="" />
        </div>
      </div>
          </ul>
          
        </div>
        <a className="btn btn-ghost text-3xl  ">Flavourfull Feats</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Recipes</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Search</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
       <div className="relative">
       <input className="bg-[#150B2B0D] rounded-lg pl-8 pr-0" type="text"  placeholder="search"/>
        <div className=" absolute bottom-0.5 left-2">
        <CiSearch />
        </div>
       </div>
        <div className="bg-[#0BE58A] w-[25px] ml-2 flex justify-center rounded-full">
            <img className="mt-1" src="../../../public/images/manIcon.png" alt="" />
        </div>
      </div>
    </div>
  );
};


export default Navbar;
