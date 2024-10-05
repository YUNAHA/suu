import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Text, Flex, Box, Portal ,Button} from '@yamada-ui/react';
import ResearchHeader from '../components/ResearchHeader';
import { useWindowSize } from "@uidotdev/usehooks";


const Custom1 = () => {
  const navigate = useNavigate(); // useNavigateフックを使ってナビゲーション機能を取得
  const size = useWindowSize();

  // ボタンがクリックされたときに実行される関数
  const handlehomeClick = () => {
    navigate('/'); // "/search" に遷移
  };

  const handleresarchClick = () => {
    navigate('/Research'); // "/add" に遷移
  };


  const handleAddClick = () => {
    navigate('/Addtion'); // "/add" に遷移
  };

  return (
    <div>
      <ResearchHeader />
      <Box
        position="fixed"
        top={size.height * 0.2}
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex="2000">
        <Text>カスタム名1</Text>
      </Box>
        <Box
          position="fixed"
          top={size.height * 0.7}
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex="2000"
        >
          <Text>東京電機大学 case1</Text>
          <Button onClick={handlehomeClick}>ホーム</Button>
          <Button onClick={handleresarchClick}>検索</Button>
          <Button onClick={handleAddClick}>追加</Button>
        </Box>
    </div>
  );
};

export default Custom1;
