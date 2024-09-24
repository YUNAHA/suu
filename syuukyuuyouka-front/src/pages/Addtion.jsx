import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Text, Flex, Box, Portal,Button} from '@yamada-ui/react';


const Home = () => {
  const navigate = useNavigate(); // useNavigateフックを使ってナビゲーション機能を取得

  // ボタンがクリックされたときに実行される関数
  const handleSearchClick = () => {
    navigate('/Research'); // "/search" に遷移
  };

  const handlehomeClick = () => {
    navigate('/'); // "/add" に遷移
  };

  return (
    <>
      東京電機大学 Addtion
      <Box>
        <Button onClick={handlehomeClick}>ホーム</Button>
        <Button onClick={handleSearchClick}>検索</Button>
      </Box>
    </>
  );
};

export default Home;
