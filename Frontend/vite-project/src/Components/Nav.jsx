import { HR } from "flowbite-react";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className="mt-2 mx-4 ">
        <NavLink to={"/"} className="capitalize underline mx-4">
          Home
        </NavLink>
        <NavLink to={"/page1"} className="underline mx-4 capitalize">
          page1
        </NavLink>
        <NavLink to={"/page2"} className="underline mx-4 capitalize">
          page2
        </NavLink>
        <NavLink to={"/page3"} className="underline mx-4 capitalize">
          page3
        </NavLink>
      </div>
      <HR className="mt-2" />
      <div>
        <Outlet />
      </div>
    </>
  );
}
