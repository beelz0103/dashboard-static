import { useState } from "react";
import hexagonIcon from "../assets/hexagonicon.svg";
import squareKeyIcon from "../assets/squarekey.svg";
import squareKeyIconSelected from "../assets/squarekeyselected.svg";
import rightArrow from "../assets/rightarrow.svg";
import rightArrowSelected from "../assets/rightarrowselected.svg";
import cube from "../assets/cube.svg";
import cubeSelected from "../assets/cubeselected.svg";
import profile from "../assets/profile.svg";
import profileSelected from "../assets/profileselected.svg";
import income from "../assets/income.svg";
import incomeSelected from "../assets/incomeselected.svg";
import promote from "../assets/promote.svg";
import promoteSelected from "../assets/promoteselected.svg";
import help from "../assets/help.svg";
import helpSelected from "../assets/helpselected.svg";
import downArrow from "../assets/downarrow.svg";
import downArrowSelected from "../assets/downarrowselected.svg";
import longIsland from "../assets/longisland.jpg";
import cross from "../assets/cross.svg";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const [selected, setSelected] = useState("Dashboard");

  const navItemsData = [
    {
      name: "Dashboard",
      icon: squareKeyIcon,
      selectedIcon: squareKeyIconSelected,
      showSideArrow: false,
      selected: selected,
    },
    {
      name: "Product",
      icon: cube,
      selectedIcon: cubeSelected,
      showSideArrow: true,
      selected: selected,
    },
    {
      name: "Customer",
      icon: profile,
      selectedIcon: profileSelected,
      showSideArrow: true,
      selected: selected,
    },
    {
      name: "Income",
      icon: income,
      selectedIcon: incomeSelected,
      showSideArrow: true,
      selected: selected,
    },
    {
      name: "Promote",
      icon: promote,
      selectedIcon: promoteSelected,
      showSideArrow: true,
      selected: selected,
    },
    {
      name: "Help",
      icon: help,
      selectedIcon: helpSelected,
      showSideArrow: true,
      selected: selected,
    },
  ];

  return (
    <>
      {showSidebar && (
        <div
          onClick={() => setShowSidebar(false)}
          className="sidebar-overlay"
        ></div>
      )}
      <nav className={`sidebar-nav ${showSidebar ? "show" : "hide"}`}>
        <button
          onClick={() => setShowSidebar(false)}
          className={`sidebar-toggle-off ${showSidebar ? "show" : "hide"}`}
        >
          <img src={cross} alt="cross"></img>
        </button>
        <div className="header">
          <img className="sidebaricon large" src={hexagonIcon} alt="icon"></img>
          Dashboard
        </div>
        <ul>
          {navItemsData.map((item, index) => (
            <li key={item.name}>
              <NavItem
                name={item.name}
                icon={item.icon}
                selectedIcon={item.selectedIcon}
                showSideArrow={item.showSideArrow}
                selected={item.selected}
              />
            </li>
          ))}
        </ul>
        <Profile
          name="Long Island"
          position="Project Manager"
          avatar={longIsland}
        />
      </nav>
    </>
  );
};

const NavItem = ({
  name,
  icon,
  selectedIcon,
  selected,
  showSideArrow = true,
}) => {
  const [isHover, setIsHover] = useState(false);

  const isSelected = selected === name;

  return (
    <a
      className={isSelected || isHover ? "selected" : ""}
      onClick={(e) => e.preventDefault()}
      href={`./${name.toLowerCase()}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        className="sidebaricon"
        src={isSelected || isHover ? selectedIcon : icon}
        alt="icon"
      ></img>
      <div>{name}</div>
      {showSideArrow && (
        <img
          className="sidebaricon sidearrow "
          src={isSelected || isHover ? rightArrowSelected : rightArrow}
          alt="icon"
        ></img>
      )}
    </a>
  );
};

const Profile = ({ name, position, avatar }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="sidebar-profile"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img className="avatar" src={avatar} alt="avatar"></img>
      <div>
        <div>{name}</div>
        <div>{position}</div>
      </div>
      <img
        className="sidebaricon downarrow"
        src={isHover ? downArrowSelected : downArrow}
        alt="icon"
      />
    </div>
  );
};

export default Sidebar;
