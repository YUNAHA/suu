import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Text, Flex, Box, Portal, Button } from "@yamada-ui/react";
import Header from "../components/Header";
import { useWindowSize } from "@uidotdev/usehooks";

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
    </>
  );
};

export default Home;
