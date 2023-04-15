import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown({ setClickModal }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const handleClose = () => {
    setClickModal(false);
  };

  return (
    <>
      <ul className="dropDownList">
        {MenuItems.map((item, index) => {
          return (
            <li key={index} onClick={handleClose} className="dropDownItem">
              <Link
                // className="dropdown"
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
