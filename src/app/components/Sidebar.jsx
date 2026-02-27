import React from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { useShallow } from "zustand/shallow";
import useSideBarStore from "../layouts/providers/useSideBarStore";
import SidebarLinks from "./SidebarLinks";

const Sidebar = () => {
  const { isSideBarOpen, checkSideBarStatus } = useSideBarStore(
    useShallow((state) => ({
      isSideBarOpen: state.isSideBarOpen,
      checkSideBarStatus: state.checkSideBarStatus,
    }))
  );

  return (
    <div className="fixed  inset-0 z-20 pointer-events-none">
      {/* Overlay */}
      <div
        onClick={checkSideBarStatus}
        className={`
          absolute inset-0
          bg-black/40
          transition-opacity duration-300 ease-in-out
          ${isSideBarOpen ? "opacity-100 pointer-events-auto" : "opacity-0"}
        `}
      />

      {/* Sidebar */}
      <div
        className={`
          absolute right-0 top-0
          h-full w-80
          bg-white
          transition-transform duration-500 ease-in-out
          ${isSideBarOpen ? "translate-x-0" : "translate-x-full"}
          pointer-events-auto
        `}
      >
        <div className="border-b h-15 flex items-center justify-between">
          <Link to="/">
            <img
              src="/src/assets/Velora-Logo.png"
              alt="Velora"
              className="h-7 cursor-pointer px-3"
            />
          </Link>

          <button
            onClick={checkSideBarStatus}
            className="p-3 text-2xl"
            aria-label="Close sidebar"
          >
            <RxCross2 />
          </button>
        </div>
        <SidebarLinks/>
      </div>
    </div>
  );
};

export default Sidebar;