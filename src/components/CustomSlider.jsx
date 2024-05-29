import React, { useCallback } from "react";
import Slider from "@mui/material/Slider";
import { debounce } from "lodash";

const CustomSlider = ({ value, onChange, min, max }) => {
  const percent = ((value - min) / (max - min)) * 100;

  // Debounce the onChange handler
  const debouncedOnChange = useCallback(debounce(onChange, 200), [onChange]);

  return (
    <Slider
      value={value}
      onChange={(e, newValue) => debouncedOnChange(newValue)}
      min={min}
      max={max}
      sx={{
        "& .MuiSlider-rail": {
          background: `linear-gradient(to right, #a99476 ${percent}%, #555 ${percent}%)`,
        },
        "& .MuiSlider-thumb": {
          backgroundColor: "white",
        },
      }}
    />
  );
};

export default CustomSlider;
