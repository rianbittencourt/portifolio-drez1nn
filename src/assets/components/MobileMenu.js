import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas);

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="menu-toggle" onClick={toggle}>
        <FontAwesomeIcon icon={["fas", "bars"]} />
      </div>
      {isOpen && (
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      )}
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-arround;
          padding: 1rem;
        }

        .menu-toggle {
          cursor: pointer;
        }

        i {
          font-size: 1rem;
        }

        ul {
          background-color: red;
          list-style: none;
          position: absolute;
          display: flex;
          height: 100vh;
          padding: 0;
          widht: 100%;
          right: 0;
        }
        li {
          padding: 0;
        }
      `}</style>
    </nav>
  );
}

export default MobileMenu;
