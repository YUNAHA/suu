import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading, Spacer, Button, Input, Menu, MenuButton, MenuList, MenuItem, useMediaQuery, Tooltip } from '@yamada-ui/react';
import "./Header.css";

const Header = ({ onFilterChange, onSearch }) => {
  const [selectedFilter, setSelectedFilter] = useState('1'); //selectedFilterはプルダウン時に読み取り
  const [selectedDepartment, setSelectedDepartment] = useState('RU');
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const [isLargerThan600] = useMediaQuery('(min-width: 1920px)');
  const [isMobile] = useMediaQuery('(max-width: 600px)');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box>
      <Box
        as="header"
        bg="#01714B"
        p={2}
        position="fixed"
        w="100%"
        top="0"
        zIndex="1000"
      >
        <Flex align="center" justify="space-between">
          <Heading as="h3" size="lg">
            ノーカスタム・ノーライフ
          </Heading>
          <button className="menu-button" onClick={toggleMenu}>
            ☰
          </button>
        </Flex>
        {/* ハンバーガーメニューのドロップダウン */}
        <div className="menu-container">
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
      </Box>

      <Box mt="1px" p={3}>
      </Box>
    </Box>
  );
};

export default Header;
