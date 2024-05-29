//Button
import Toggle from "react-styled-toggle";
//3 Dot icon horisontal
import { HiDotsHorizontal } from "react-icons/hi";
// Header text
import HeaderText from "./HeaderText";

const GlobalButton = () => {
  return (
    <>
      <main className="bg-[#1e1e1e]">
        <div className="flex justify-end mr-4 pb-4 pt-4 items-center">
          <div className="bg-[#424242] mx-4 flex rounded-full text-2xl w-[40px] h-[40px] items-center justify-center">
            <HiDotsHorizontal className="text-white" />
          </div>

          <Toggle />
        </div>
      </main>

      <div className="ml-4">
        <HeaderText text="Hjem" textSize="text-3xl" textColor="text-white" />
      </div>
    </>
  );
};

export default GlobalButton;
