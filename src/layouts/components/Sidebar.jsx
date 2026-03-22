import React from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { useShallow } from "zustand/shallow";
import useSideBarStore from "../../store/useSideBarStore";
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

      {/* Sidebar: header + scrollable nav (expanded dropdowns) + pinned footer links */}
      <div
        className={`
          absolute right-0 top-0 flex h-dvh max-h-dvh w-80 flex-col
          bg-(--bg-card) shadow-lg
          transition-transform duration-500 ease-in-out
          ${isSideBarOpen ? "translate-x-0" : "translate-x-full"}
          pointer-events-auto
        `}
      >
        <header className="flex h-15 shrink-0 items-center justify-between border-b border-black/10">
          <Link to="/" onClick={checkSideBarStatus}>
            <img
              src="/assets/Velora-Logo.png"
              alt="Velora"
              className="h-7 cursor-pointer px-3"
            />
          </Link>
          <button
            type="button"
            onClick={checkSideBarStatus}
            className="p-3 text-2xl hover:text-(--accent-secondary)"
            aria-label="Close sidebar"
          >
            <RxCross2 />
          </button>
        </header>

        <div className="cart-drawer-scroll min-h-0 flex-1 overflow-y-auto overscroll-y-contain">
          <SidebarLinks onNavigate={checkSideBarStatus} />
        </div>

        <footer className="flex h-15 shrink-0 items-center gap-4 border-t border-black/10 px-5">
          <Link
            to="/sign-in"
            className="text-[13px] font-semibold text-black/60"
            onClick={checkSideBarStatus}
          >
            Sign In
          </Link>
          <Link
            to="/sign-up"
            className="text-[13px] font-semibold text-black/60"
            onClick={checkSideBarStatus}
          >
            Create an Account
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Sidebar;