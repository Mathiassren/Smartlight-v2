import React from "react";

const HeaderText = ({
  text,
  textSize = "text-lg",
  textColor = "text-black",
  fontSize = "font-bold",
}) => {
  return <h1 className={`${textSize} ${fontSize} ${textColor}`}>{text}</h1>;
};

export default HeaderText;
