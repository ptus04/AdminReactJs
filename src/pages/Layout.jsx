import { Link, NavLink, Outlet } from "react-router";
import icons from "../icon-pack";

export default function Layout() {
  return (
    <div className="relative grid h-dvh grid-cols-[max-content_1fr] grid-rows-[max-content_1fr]">
      <div className="col-start-2 flex items-center justify-between border border-gray-300 p-4">
        <h1 className="text-3xl font-bold text-[var(--my-color-red)]">Dashboard</h1>
        <div className="flex items-center gap-4">
          <form className="flex items-center gap-1 rounded-lg bg-gray-200 px-4 py-2">
            <button className="cursor-pointer">
              <img className="h-4 w-4" src={icons.searchIcon} />
            </button>
            <input type="search" placeholder="Search..." required />
          </form>
          <button className="cursor-pointer">
            <img className="h-6 w-6" src={icons.notificationIcon} />
          </button>
          <button className="cursor-pointer">
            <img className="h-6 w-6" src={icons.helpIcon} />
          </button>
          <Link href="profile">
            <img className="h-10 w-10" src="https://avatar.iran.liara.run/public" />
          </Link>
        </div>
      </div>

      <div className="row-span-2 row-start-1 border border-r-0 border-gray-300 p-4">
        <h2 className="text-3xl font-bold">Logo</h2>
        <ul className="navbar mt-8 flex flex-col gap-2">
          <li>
            <NavLink className="flex items-center gap-2 px-4 py-2" to="/">
              <img className="h-6 w-6" src={icons.dashBoardIcon} />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="flex items-center gap-2 px-4 py-2" to="/projects">
              <img className="h-6 w-6" src={icons.projectsIcon} />
              <span>Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="flex items-center gap-2 px-4 py-2" to="/teams">
              <img className="h-6 w-6" src={icons.teamsIcon} />
              <span>Teams</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="flex items-center gap-2 px-4 py-2" to="/analystics">
              <img className="h-6 w-6" src={icons.analysticsIcon} />
              <span>Analystics</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="flex items-center gap-2 px-4 py-2" to="/messages">
              <img className="h-6 w-6" src={icons.messagesIcon} />
              <span>Messages</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="flex items-center gap-2 px-4 py-2" to={"/integrations"}>
              <img className="h-6 w-6" src={icons.integrationsIcon} />
              <span>Integrations</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
}
