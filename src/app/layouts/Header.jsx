
import HeaderBanner from '../components/HeaderBanner'
import HeaderMain from '../components/HeaderMain'
import PageDropDown from '../components/PageDropDown'

const Header = () => {
  return (
    <header className='top-0 flex flex-col items-center'>
        <HeaderBanner/>
        <HeaderMain/>
    </header>
  )
}

export default Header