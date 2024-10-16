import { NavLink } from "react-router-dom";

const lightblue = "bg-blue-100";

export default function NavBar() {
  return (
    <nav className="flex justify-center gap-5 bg-white dark:bg-slate-700">
      <NavLink
        className="m-3 p-4 text-xl bg-blue-400 dark:bg-slate-800 dark:hover:bg-slate-900 hover:bg-blue-500 rounded-md font-medium text-white"
        to={"/"}
      >
        All Entries
      </NavLink>
      <NavLink
        className="m-3 p-4 text-xl bg-blue-400 dark:bg-slate-800 dark:hover:bg-slate-900 hover:bg-blue-500 rounded-md font-medium text-white"
        to={"/create"}
      >
        New Entry
      </NavLink>
    </nav>
  );
}
