
import HeaderBanner from '../components/Header/HeaderBanner'
import HeaderMain from '../components/Header/HeaderMain'


const Header = () => {
  return (
    <header className='top-0 sticky z-10 w-full flex bg-gray-400/20 flex-col items-center'>
        <HeaderBanner/>
        <HeaderMain/>
    </header>
  )
}

export default Header