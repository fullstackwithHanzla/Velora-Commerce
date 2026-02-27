
import HeaderLogo from "./HeaderLogo";
import HeaderNavBar from "./HeaderNavBar";
import HeaderSnackBar from "./HeaderSnackBar";

const HeaderMain = () => {
  return (
    <div className="h-18 flex items-center justify-between w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[75%]">
      <HeaderLogo/>
      <HeaderNavBar/>
      <HeaderSnackBar/>
    </div>
  );
};

export default HeaderMain;
