import React from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { useShallow } from "zustand/shallow";
import useSideBarStore from "../../layouts/providers/useSideBarStore";
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
          h-full flex flex-col  w-80
          bg-(--bg-card)
          transition-transform duration-500 ease-in-out
          ${isSideBarOpen ? "translate-x-0" : "translate-x-full"}
          pointer-events-auto
        `}
      >
        <div className=" flex flex-col min-h-full justify-between">
          <div>
            <div className=" h-15 flex items-center justify-between">
          <Link to="/">
            <img
              src="/assets/Velora-Logo.png"
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
        <hr className="text-black/30"/>
        <SidebarLinks/>
          </div>
        
        <div className="border-t border-t-black/30 h-15 flex justify-start items-center gap-4 px-5">
          <Link to={`/sign-in`} className="text-[13px] text-black/60 font-semibold">
            Sign In
          </Link>
          <Link to={`/sign-up`} className="text-[13px] text-black/60 font-semibold">
            Create an Account
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;