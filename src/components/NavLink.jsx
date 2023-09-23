// React Router
import { Link } from "react-router-dom";

const NavLink = ({ link, dropdown }) => {
  return (
    <li
      className={`h-full flex items-center group ${!dropdown && "relative"} `}
    >
      <span className="text-3xl font-black">
        {link}
        <span className=" text-[#FFC700]">.</span>
      </span>
      {link === "Account" && (
        <div className=" min-w-dropdown bg-white opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto  z-10 p-5 absolute top-full translate-y-1 group-hover:translate-y-0 duration-200 -left-10 rounded-xl border border-gray-100 shadow">
          <div className=" flex gap-5">
            <ul className=" space-y-5">
              <li className="text-xl font-bold">
                <Link to="/login">
                  <span className=" opacity-75 block hover:translate-x-2 hover:opacity-100 duration-200">
                    Sign In
                  </span>
                </Link>
              </li>
              <li className="text-xl font-bold whitespace-nowrap">
                <Link to="/register">
                  <span className=" opacity-75 block hover:translate-x-2 hover:opacity-100 duration-200">
                    Create Account
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

export default NavLink;
