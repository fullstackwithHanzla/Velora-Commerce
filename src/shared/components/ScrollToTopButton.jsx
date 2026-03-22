import { useEffect, useState } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";


export default function ScrollToTopButton() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const screenHeight = window.innerHeight;

      if (scrolled > screenHeight) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-20 right-10 z-5 rounded-md bg-(--accent-secondary) hover:bg-blue-600/90 text-white p-2.5 shadow-lg transition-all duration-300
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}
    >
      <IoIosArrowRoundUp className="size-4 stroke-1 md:size-6"/>
    </button>
  );
}