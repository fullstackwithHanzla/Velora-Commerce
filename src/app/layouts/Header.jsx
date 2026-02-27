
import HeaderBanner from '../components/Header/HeaderBanner'
import HeaderMain from '../components/Header/HeaderMain'


const Header = () => {
  return (
    <header className='top-0 flex flex-col items-center'>
        <HeaderBanner/>
        <HeaderMain/>
    </header>
  )
}

export default Header