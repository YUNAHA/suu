import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Text, Flex, Box, Portal,Button} from '@yamada-ui/react';
import AddtionHeader from '../components/AddtionHeader';
import { useWindowSize } from "@uidotdev/usehooks";


const Home = () => {
  const navigate = useNavigate(); // useNavigateフックを使ってナビゲーション機能を取得
  const size = useWindowSize();

  // ボタンがクリックされたときに実行される関数
  const handleSearchClick = () => {
    navigate('/Research'); // "/search" に遷移
  };

  const handlehomeClick = () => {
    navigate('/'); // "/add" に遷移
  };


  return (
    <>
    <Box
    position="fixed"
    top={size.height * 0.3}
    >
      <AddtionHeader/>
    </Box>
    <Box
    position="fixed"
    top={size.height * 0.5}
    left="50%"
    transform="translate(-50%, -50%)"
    zIndex="200">
      <Text>東京電機大学 Addtion</Text>
        <Button onClick={handlehomeClick}>ホーム</Button>
        <Button onClick={handleSearchClick}>検索</Button>
    </Box>
    </>
  );
};

export default Home;
