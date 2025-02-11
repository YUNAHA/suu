import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Text, Flex, Box, Portal ,Button} from '@yamada-ui/react';
import ResearchHeader from '../components/ResearchHeader';
import { useWindowSize } from "@uidotdev/usehooks";


const Research = () => {
  const navigate = useNavigate(); // useNavigateフックを使ってナビゲーション機能を取得
  const size = useWindowSize();

  // ボタンがクリックされたときに実行される関数
  const handlehomeClick = () => {
    navigate('/'); // "/search" に遷移
  };

  const handleAddClick = () => {
    navigate('/Addtion'); // "/add" に遷移
  };

  const handleCustom1Click = () => {
    navigate('/Custom1'); // "/add" に遷移
  };

  return (
    <div>
      <ResearchHeader />
      <Box
        position="fixed"
        top={size.height * 0.3}
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex="2000">
        <Button onClick={handleCustom1Click}><Text>カスタム名1</Text></Button>
      </Box>
      <Box
        position="fixed"
        top={size.height * 0.4}
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex="2000">
        <Button><Text>カスタム名2</Text></Button>
      </Box>
        <Box
          position="fixed"
          top={size.height * 0.7}
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex="2000"
        >
          <Text>東京電機大学 Research</Text>
          <Button onClick={handlehomeClick}>ホーム</Button>
          <Button onClick={handleAddClick}>追加</Button>
        </Box>
    </div>
  );
};

export default Research;
