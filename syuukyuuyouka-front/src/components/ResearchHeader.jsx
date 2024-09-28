import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading, Spacer, Button, Input, Menu, MenuButton, MenuList, MenuItem, useMediaQuery, Tooltip } from '@yamada-ui/react';

const Header = ({ onFilterChange, onSearch }) => {
  const [selectedFilter, setSelectedFilter] = useState('1'); //selectedFilterはプルダウン時に読み取り
  const [selectedDepartment, setSelectedDepartment] = useState('RU');
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const [isLargerThan600] = useMediaQuery('(min-width: 1920px)');
  const [isMobile] = useMediaQuery('(max-width: 600px)');

  return (
    <Box>
      <Box as="header" bg="orange.50" p={2} position="fixed" w="100%" top="0" zIndex="1000">
        <Flex align="center">
          <Heading as="h3" size="lg">
            Pronavi
          </Heading>
        </Flex>
      </Box>
      <Box mt="1px" p={3}>
      </Box>
    </Box>
  );
};

export default Header;
