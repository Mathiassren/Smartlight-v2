import React from "react";
import Toggle from "react-styled-toggle";
import CustomSlider from "./CustomSlider"; // Ensure this is the correct import path
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { FaEllipsisH } from "react-icons/fa";

const HeaderDetails = ({ lights, onToggle, onBrightnessChange }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <div className="bg-gray-900 rounded-b-2xl p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="bg-gray-600 w-8 h-8 flex items-center justify-center rounded-full mr-4">
            <FaArrowLeft className="w-6 h-6 " onClick={handleNavigate} />
          </div>

          {lights.map((light) => (
            <h1 key={light.id} className="text-white">
              {light.name}
            </h1>
          ))}
        </div>
        <div className="bg-gray-600 h-8 flex w-8 justify-center items-center rounded-full ml-6">
          <FaEllipsisH className="w-6 h-6 items-center" />
        </div>
        <div>
          {lights.map((light) => (
            <Toggle
              key={light.id}
              checked={light.isOn}
              onChange={() => onToggle(light.id, light.isOn)}
              className="last:mr-0" // Removes margin from the last toggle if needed
            />
          ))}
        </div>
      </div>
      {lights.map((light) => (
        <CustomSlider
          key={light.id}
          value={light.brightness}
          onChange={(newValue) => onBrightnessChange(newValue, light.id)}
          min={0}
          max={254}
          className="mt-2"
        />
      ))}
    </div>
  );
};

export default HeaderDetails;
