import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Button,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useMediaQuery,
  Tooltip,
  IconButton,
} from "@yamada-ui/react";
//import { Menu as MenuIcon } from "@yamada-ui/lucide-icon";
import "./Header.css";

const Header = ({ onFilterChange, onSearch }) => {
  const [selectedFilter, setSelectedFilter] = useState("1");
  const [selectedDepartment, setSelectedDepartment] = useState("RU");
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [isLargerThan600] = useMediaQuery("(min-width: 1920px)");
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">完全週休8日希望</h1>
        <div className="menu-container">
          <button className="menu-button" onClick={toggleMenu}>
            ☰
          </button>
          {isMenuOpen && (
            <nav className="menu-dropdown">
              <Link to="/" className="menu-item" onClick={toggleMenu}>
                ホーム
              </Link>
              <Link to="/Addtion" className="menu-item" onClick={toggleMenu}>
                追加
              </Link>
              <Link to="/Research" className="menu-item" onClick={toggleMenu}>
                検索
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
