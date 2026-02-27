
import { Link, NavLink } from 'react-router-dom'
import { RiArrowDropDownLine } from "react-icons/ri";
import PageDropDown from './PageDropDown';
import { useShallow } from 'zustand/shallow';
import usePagesStore from '../../layouts/providers/usePagesStore';



const HeaderNavBar = () => {
  const { isPageDropdownOpen, checkDropDownStatus } = usePagesStore(
    useShallow(state => ({
      isPageDropdownOpen: state.isPageDropdownOpen,
      checkDropDownStatus: state.checkDropDownStatus,
    }))
  )

  return (
    <nav className="hidden md:flex justify-center items-center gap-3">
      <li className="list-none text-[14px] font-medium hover:text-(--accent-secondary)">
        <NavLink to="/popular">Popular</NavLink>
      </li>

      <li className="list-none text-[14px] font-medium hover:text-(--accent-secondary)">
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
            list-none text-[14px] font-medium flex items-center gap-1 cursor-pointer
            transition-colors duration-200
            hover:text-(--accent-secondary)
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

        {/* DROPDOWN */}
        <PageDropDown />
      </div>

      <li className="list-none text-[14px] font-medium hover:text-(--accent-secondary)">
        <NavLink to="/">Contact</NavLink>
      </li>
    </nav>
  )
}

export default HeaderNavBar