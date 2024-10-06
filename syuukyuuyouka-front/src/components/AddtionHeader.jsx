import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading, Spacer, Button, Input, Menu, MenuButton, MenuList, MenuItem, useMediaQuery, Tooltip } from '@yamada-ui/react';
import { useWindowSize } from "@uidotdev/usehooks";

const Header = ({ onFilterChange, onSearch }) => {
  const [selectedFilter, setSelectedFilter] = useState('1'); //selectedFilterはプルダウン時に読み取り
  const [selectedDepartment, setSelectedDepartment] = useState('RU');
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const [isLargerThan600] = useMediaQuery('(min-width: 1920px)');
  const [isMobile] = useMediaQuery('(max-width: 600px)');

  const size = useWindowSize();

  const headerStyle = {
	  width: size.width,
    background: "#01714B",//スタバカラー　黒は0F0F0F
    fontFamily: "Meiryo UI",
    color: "white"
  };

  return (
    <Box>
      <Box as="header" bg="orange.50" p={2} position="fixed" w="100%" top="0" zIndex="200">
        <Flex align="center">
          <Heading as="h3" size="lg" style={headerStyle}>
            ノーカスタム・ノーライフ
          </Heading>
        </Flex>
      </Box>
      <Box mt="1px" p={3}>
      </Box>
    </Box>
  );
};

export default Header;
