import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Text, Flex, Box, Portal, Button, Image } from "@yamada-ui/react";
import Header from "../components/Header";
import { useWindowSize } from "@uidotdev/usehooks";
import Phote from "../components/syuukyuu.jpg";

const Home = () => {
  const navigate = useNavigate(); // useNavigateフックを使ってナビゲーション機能を取得
  const { width, height } = useWindowSize(); // widthとheightをuseWindowSizeから取得

  // ボタンがクリックされたときに実行される関数
  const handleSearchClick = () => {
    navigate("/Research"); // "/search" に遷移
  };

  const handleAddClick = () => {
    navigate("/Addtion"); // "/add" に遷移
  };

  return (
    <>
      <Box position="fixed" top={height * 0.3} zIndex="200">
        <Header />
      </Box>
      {/* おすすめの画像を横に3つ並べるセクション */}
      <Box mt="20" p="4">
        <Text fontSize="2xl" fontWeight="bold" mb="4">
          あなたへのおすすめ
        </Text>

        {/* Flexを使って画像を横並びに配置 */}
        <Flex justifyContent="space-between" gap="4" mb="8">
          <Box w="30%">
            <Image
              src={Phote} // 画像URLを指定
              alt="おすすめ1"
              w="100%"
              h="auto"
              borderRadius="md"
              boxShadow="md"
            />
            <Text textAlign="center" mt="2">
              おすすめ 1
            </Text>
          </Box>
          <Box w="30%">
            <Image
              src={Phote} // 画像URLを指定
              alt="おすすめ2"
              w="100%"
              h="auto"
              borderRadius="md"
              boxShadow="md"
            />
            <Text textAlign="center" mt="2">
              おすすめ 2
            </Text>
          </Box>
          <Box w="30%">
            <Image
              src={Phote} // 画像URLを指定
              alt="おすすめ3"
              w="100%"
              h="auto"
              borderRadius="md"
              boxShadow="md"
            />
            <Text textAlign="center" mt="2">
              おすすめ 3
            </Text>
          </Box>
        </Flex>

        <Flex justifyContent="space-between" gap="4">
          <Box w="30%">
            <Image
              src={Phote} // 新しい画像URLを指定
              alt="おすすめ4"
              w="100%"
              h="auto"
              borderRadius="md"
              boxShadow="md"
            />
            <Text textAlign="center" mt="2">
              おすすめ 4
            </Text>
          </Box>
          <Box w="30%">
            <Image
              src={Phote} // 新しい画像URLを指定
              alt="おすすめ5"
              w="100%"
              h="auto"
              borderRadius="md"
              boxShadow="md"
            />
            <Text textAlign="center" mt="2">
              おすすめ 5
            </Text>
          </Box>
          <Box w="30%">
            <Image
              src={Phote} // 新しい画像URLを指定
              alt="おすすめ6"
              w="100%"
              h="auto"
              borderRadius="md"
              boxShadow="md"
            />
            <Text textAlign="center" mt="2">
              おすすめ 6
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
