import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { CgProfile } from "react-icons/cg";
import auth from "../../firebase/firebase.config";
import { Tooltip } from "react-tooltip";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout(auth).then().catch();
  };
  console.log(user);
  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      {user && (
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
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
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">LiveLux</a>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <a
            onClick={handleLogout}
            className="btn text-xl flex items-center justify-center"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={user.displayName}
            data-tooltip-place="top"
          >
            <Tooltip id="my-tooltip"></Tooltip>
            <span className="text-2xl mt-1">
              <CgProfile />
            </span>
            signOut
          </a>
        ) : (
          <Link className="btn text-xl" to="/login">
            login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
