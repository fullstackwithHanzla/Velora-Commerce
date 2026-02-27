import React from 'react'
import PagesNavLink from './PagesNavLink'
import usePagesStore from '../layouts/providers/usePagesStore'
import { useShallow } from 'zustand/shallow'

const PageDropDown = () => {
    const { isPageDropdownOpen , checkDropDownStatus} = usePagesStore(
        useShallow(state => ({
            isPageDropdownOpen: state.isPageDropdownOpen,
            checkDropDownStatus : state.checkDropDownStatus
        }))
    )

    return (
        <div onMouseEnter={() => checkDropDownStatus(true)} onMouseLeave={() => checkDropDownStatus(false)} className={`
            absolute top-18 pt-14 ml-45 min-w-60 transform transition-all duration-300 ease-out
                ${isPageDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-none' : 'opacity-0 translate-y-2 pointer-events-none'}
        `}>
            <div
            className={`absolute  shadow-md shadow-gray-500/30 rounded-sm  bg-white min-w-60`}
        >
            <nav className="flex flex-col justify-start px-3 my-2 gap-2">
                <PagesNavLink />
            </nav>
            </div>
        </div>
    )
}

export default PageDropDown