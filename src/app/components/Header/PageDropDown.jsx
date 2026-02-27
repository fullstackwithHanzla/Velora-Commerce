import React from 'react'
import PagesNavLink from './PagesNavLink'
import usePagesStore from '../../layouts/providers/usePagesStore'
import { useShallow } from 'zustand/shallow'

const PageDropDown = () => {
  const { isPageDropdownOpen } = usePagesStore(
    useShallow(state => ({
      isPageDropdownOpen: state.isPageDropdownOpen,
    }))
  )

  return (
    <div
      className={`
        absolute left-1/2 top-full  -translate-x-1/2
        transition-all duration-200 ease-out
        ${isPageDropdownOpen
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-2 pointer-events-none'}
      `}
    >
      <div className="bg-white py-2 shadow-md rounded-sm min-w-60">
        <nav className="flex flex-col px-3 my-2 gap-2">
          <PagesNavLink />
        </nav>
      </div>
    </div>
  )
}

export default PageDropDown