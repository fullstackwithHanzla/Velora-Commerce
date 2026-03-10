
import { Link, NavLink } from 'react-router-dom'
import { RiArrowDropDownLine } from "react-icons/ri";
import PageDropDown from './PageDropDown';
import { useShallow } from 'zustand/shallow';
import usePagesStore from '../../layouts/providers/usePagesStore';
import useBlogsStore from '../../layouts/providers/useBlogsStores';
import PagesNavLink from './PagesNavLink';



const HeaderNavBar = () => {
  const { isPageDropdownOpen, checkDropDownStatus } = usePagesStore(
    useShallow(state => ({
      isPageDropdownOpen: state.isPageDropdownOpen,
      checkDropDownStatus: state.checkDropDownStatus,
    }))
  )
  const { isBlogsDropDownOpen, checkBlogsDropDownStatus } = useBlogsStore(
    useShallow(state => ({
      isBlogsDropDownOpen: state.isBlogsDropDownOpen,
      checkBlogsDropDownStatus: state.checkBlogsDropDownStatus,
    }))
  )
  const baseStyle = "list-none text-[14px] font-normal hover:text-(--accent-secondary)";
  const dropDownNavItemStyle = "list-none text-[14px] font-normal flex items-center gap-1 cursor-pointer transition-colors duration-200 hover:text-(--accent-secondary)"
  const absoluteDropdownStyle = "absolute left-[55%] top-full py-5 z-55 -translate-x-1/2 transition-all duration-200 ease-out"
  return (
    <nav className="hidden lg:flex justify-center items-center gap-5">
      <li className={`${baseStyle}`}>
        <NavLink to="/popular">Popular</NavLink>
      </li>

      <li className={`${baseStyle}`}>
        <NavLink to="/shop">Shop</NavLink>
      </li>

      {/* HOVER BOUNDARY */}
      <div
        className="relative group"
        onMouseEnter={() => checkDropDownStatus(true)}
        onMouseLeave={() => checkDropDownStatus(false)}
      >
        {/* TRIGGER */}
        <li
          className={`
            ${dropDownNavItemStyle}
            ${isPageDropdownOpen ? 'text-(--accent-secondary)' : ''}
          `}
        >
          Pages
          <span
            className={`
              transition-transform duration-300
              ${isPageDropdownOpen ? 'rotate-180' : 'rotate-0'}
            `}
          >
            <RiArrowDropDownLine className="size-6" />
          </span>
        </li>

        <div
      className={`
        ${absoluteDropdownStyle}
        ${isPageDropdownOpen
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-2 pointer-events-none'}
      `}
    >
      <div className="bg-white py-2 shadow-lg rounded-lg min-w-60">
        <nav className="flex flex-col px-3 my-2 gap-2">
          <PagesNavLink />
        </nav>
      </div>
    </div>
      </div>

      <div
        className="relative group"
        onMouseEnter={() => checkBlogsDropDownStatus(true)}
        onMouseLeave={() => checkBlogsDropDownStatus(false)}
      >
        {/* TRIGGER */}
        <li
          className={`
            ${dropDownNavItemStyle}
            ${isBlogsDropDownOpen ? 'text-(--accent-secondary)' : ''}
          `}
        >
          Blogs
          <span
            className={`
              transition-transform duration-300
              ${isBlogsDropDownOpen ? 'rotate-180' : 'rotate-0'}
            `}
          >
            <RiArrowDropDownLine className="size-6" />
          </span>
        </li>

        <div
      className={`
        ${absoluteDropdownStyle}
        ${isBlogsDropDownOpen
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-2 pointer-events-none'}
      `}
    >
      <div className="bg-white py-2 shadow-lg rounded-lg min-w-60">
        <nav className="flex flex-col px-3 my-2 gap-2">
          <PagesNavLink blogs={true} />
        </nav>
      </div>
    </div>
      </div>

      <li className={`${baseStyle}`}>
        <NavLink to="/">Contact</NavLink>
      </li>
    </nav>
  )
}

export default HeaderNavBar