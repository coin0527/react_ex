//생성
import { useState } from "react";

function DropdownMenu(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleMenu}>
        {props.buttonText}
      </button>
      {isOpen && <ul className="dropdown-menu">{props.children}</ul>}
    </div>
  );
}

export default DropdownMenu;
