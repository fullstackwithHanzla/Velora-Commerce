
import HeaderBanner from '../components/HeaderBanner'
import HeaderMain from '../components/HeaderMain'

const Header = () => {
  return (
    <header className='top-0 flex flex-col items-center'>
        <HeaderBanner/>
        <HeaderMain/>
    </header>
  )
}

export default Header