import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full flex justify-between p-3 z-10">
      <NavLink to="/" className="font-bold">
        Works
      </NavLink>
      <div className="flex gap-5 text-sm text-gray-400">
        <NavLink to="/" className={(e) => (e.isActive ? "text-black" : "")}>
          Projects
        </NavLink>
        <NavLink className={(e) => (e.isActive ? "text-black" : "")}>
          Ideas
        </NavLink>
        <NavLink className={(e) => (e.isActive ? "text-black" : "")}>
          About
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
