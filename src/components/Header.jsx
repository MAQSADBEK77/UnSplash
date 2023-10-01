import { PiGooglePhotosLogoBold, PiSquaresFour } from "react-icons/pi";
import { BsMenuButtonWide } from "react-icons/bs";
import { FiSave } from "react-icons/fi";

function Header() {
  return (
    <div className="fixed left-0 z-20 h-[100vh] w-20 md:w-24 bg-neutral rounded-2xl pt-10">
      <div className="container-css flex flex-col justify-center gap-8">
        <PiGooglePhotosLogoBold className="md:w-14 md:h-14 w-12 h-12 cursor-pointer transition-all hover:scale-110 active:rotate-180 text-primary m-auto" />
        <PiSquaresFour className="md:w-8 md:h-8 w-6 h-6 text-white m-auto cursor-pointer transition-all scale-150 active:rotate-180 " />
        <BsMenuButtonWide className="w-6 h-6 text-base-content m-auto cursor-pointer transition-all hover:scale-110 active:rotate-180" />
        <FiSave className="md:w-8 md:h-8 w-7 h-7 text-base-content m-auto cursor-pointer transition-all hover:scale-110 active:rotate-180" />
      </div>
    </div>
  );
}

export default Header;
