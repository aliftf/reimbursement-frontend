import React from 'react'
import { Link } from 'react-router-dom';

const Button = (prop) => {

  let btnSize;
  let btnColor;

  switch (prop.size) {
    case "small":
      btnSize = "btn-sm";
      break;
    case "large":
      btnSize = "btn-lg";
      break;
    default:
      btnSize = "";
  }

  switch (prop.action) {
    case "delete":
      btnColor = "bg-[#c70036]";
      break;
    case "edit":
      btnColor = "bg-[#f54900]";
      break;
    default:
      btnColor = "bg-primary hover:bg-white hover:text-primary hover:border-primary";
  }

  if (prop.as === "a") {
    return (
      <Link to={prop.href} className={`py-1.5 px-3 rounded-md text-white border border-transparent ${btnColor} ${btnSize}`}>{prop.children}</Link>
    )
  }
  
  return (
    <button type={prop.type} className={`py-1.5 px-3 rounded-md text-white border border-transparent ${btnColor} ${btnSize}`} onClick={prop.onClick}>{prop.children}</button>
  )
}

export default Button