
import HeaderLogo from "./HeaderLogo";
import HeaderNavBar from "./HeaderNavBar";
import HeaderSnackBar from "./HeaderSnackBar";

const HeaderMain = () => {
  return (
    <div className="h-18 bg-white px-5 shadow-lg flex items-center justify-between min-w-screen w-full sm:max-w-[90%] ">
      <HeaderLogo/>
      <HeaderNavBar/>
      <HeaderSnackBar/>
    </div>
  );
};

export default HeaderMain;
