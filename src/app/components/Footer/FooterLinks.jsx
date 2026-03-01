
import React from 'react'
import HelpSupport from './HelpSupport'
import Accounts from './Accounts'
import QuickLinks from './QuickLinks'
import DownloadApp from './DownloadApp'

const FooterLinks = () => {
  return (
    <div className='flex  px-10 flex-wrap xl:flex-nowrap gap-10 xl:gap-19 xl:justify-between pt-17.5 xl:pt-22.5 pb-10 xl:pb-20" '>
        <HelpSupport/>
        <Accounts/>
        <QuickLinks/>
        <DownloadApp/>
    </div>
  )
}

export default FooterLinks