import { FaHouse, FaBoltLightning } from "react-icons/fa6";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";

const Nav = () => {
  return (
    <nav className="fixed inset-x-0 bottom-0 bg-[#222222] bg-opacity-50 backdrop-blur-sm text-white h-[70px] px-4 flex items-center">
      <ul className="flex justify-between w-full text-xs">
        <li className="flex flex-col items-center justify-center">
          <FaHouse className="text-lg w-[30px] h-[30px]" />
          <p>HJEM</p>
        </li>
        <li className="flex flex-col items-center justify-center">
          <FaBoltLightning className="text-lg w-[30px] h-[30px]" />
          <p>AUTOMATISERING</p>
        </li>
        <li className="flex flex-col items-center justify-center">
          <BsFillRocketTakeoffFill className="text-lg w-[30px] h-[30px]" />
          <p>UDFORSK</p>
        </li>
        <li className="flex flex-col items-center justify-center">
          <IoSettings className="text-lg w-[30px] h-[30px]" />
          <p>INDSTILLINGER</p>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
