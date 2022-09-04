import { Link, NavLink, useNavigate } from "react-router-dom";
import { Logo } from "./Logo";

export const Navbar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link to={"/"}>
                <Logo />
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6 mt-2">
              <div className="flex space-x-4">
                <NavLink
                  className={({ isActive }) =>
                    `font-semibold text-white block px-3 py-2 rounded-md text-base font-medium  ${
                      isActive ? "text-slate-800" : ""
                    }`
                  }
                  to="/home"
                >
                  Dashboard
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `opacity-60 hover:opacity-80 focus:opacity-80 p-0 text-white block px-3 py-2 rounded-md text-base font-medium ${
                      isActive ? "text-slate-600" : ""
                    }`
                  }
                  to="/marvel"
                >
                  Marvel
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    `opacity-60 hover:opacity-80 focus:opacity-80 p-0 text-white block px-3 py-2 rounded-md text-base font-medium ${
                      isActive ? "text-slate-600" : ""
                    }`
                  }
                  to="/dc"
                >
                  DC
                </NavLink>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              onClick={onLogout}
              className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
            >
              Exit 👉
            </button>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-2 text-center">
          <NavLink
            className={({ isActive }) =>
              `font-semibold text-white block px-3 py-2 rounded-md text-base font-medium  ${
                isActive ? "text-slate-800" : ""
              }`
            }
            to="/home"
          >
            Dashboard
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `opacity-60 hover:opacity-80 focus:opacity-80 p-0 text-white block px-3 py-2 rounded-md text-base font-medium ${
                isActive ? "text-slate-600" : ""
              }`
            }
            to="/marvel"
          >
            Marvel
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `opacity-60 hover:opacity-80 focus:opacity-80 p-0 text-white block px-3 py-2 rounded-md text-base font-medium ${
                isActive ? "text-slate-600" : ""
              }`
            }
            to="/dc"
          >
            DC
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
