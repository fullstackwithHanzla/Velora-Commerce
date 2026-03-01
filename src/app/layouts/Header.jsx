
import HeaderBanner from '../components/Header/HeaderBanner'
import HeaderMain from '../components/Header/HeaderMain'


const Header = () => {
  return (
    <header className='top-0 flex bg-gray-400/20 flex-col items-center'>
        <HeaderBanner/>
        <HeaderMain/>
    </header>
  )
}

export default Header