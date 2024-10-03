import React, { useEffect, useState, useRef, useCallback } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { Text, Flex, Box, Portal,Button, color} from '@yamada-ui/react';
import AddtionHeader from '../components/AddtionHeader';
import { useWindowSize } from "@uidotdev/usehooks";

const Home = () => {
  const navigate = useNavigate(); // useNavigateフックを使ってナビゲーション機能を取得
  const size = useWindowSize();

  // ボタンがクリックされたときに実行される関数
  const handleSearchClick = () => {
    navigate('/Research'); // "/Research" に遷移
  };

  const handlehomeClick = () => {
    navigate('/'); // "/" home に遷移
  };

  const buttonStyle = {
    background: "#01714B",//スタバカラー　黒は0F0F0F
    fontFamily: "Meiryo UI",
    border: "none",
    borderRadius: "10%",
    padding: "2px",
    fontSize: "150%",
    color: "white"
  };

  const footerStyle = {
    width: size.width,
    fontFamily: "Meiryo UI",
    fontSize: "125%",
    color: "#01714B",
    background: "white",
    borderTop: "dotted"
  };

  const bodyStyle = {
    height: size.height*0.75,
    width: size.width*0.75,
    background: "white",//スタバカラー　黒は0F0F0F
    fontFamily: "Meiryo UI",
    borderTop: "none",
    borderRadius: "5%",
    fontSize: "100%",
    color: "#01714B"
  };

  const cstmTextStyle = {
    width: size.width*0.75,
    fontFamily: "Meiryo UI",
    textAlign:"left",
    borderBottom: "dotted",
    fontSize: "125%",
    color: "#01714B",
    paddingLeft:"5%",
    marginTop:size.height*0.05
  };

  const textbox = {

    fontFamily: "Meiryo UI",
    textAlign:"right",
    fontSize: "100%",
    color: "#01714B",
    paddingRight:"2%"
  };

  return (
    <>
    <Box 
    position="fixed"
    top={size.height * 0.3}
    zIndex="200"
    >
      <AddtionHeader/>
    </Box>

    <div style={{ backgroundColor: "#cfcfcc", height: size.height }}></div>

    <Box
    style={bodyStyle}
    position="fixed"
    bottom={size.height * 0.5}
    left="50%"
    transform="translate(-50%,50%)"
    zIndex="100"
    >
        <text style={{
          fontFamily: "Meiryo UI",
          textAlign:"center",
          borderBottom: "solid",
          fontSize: "150%",
          color: "#01714B"
          }}>
          <br/>カスタムを投稿する 
          </text>

        <table style={cstmTextStyle}>
        <tr>
          <td >カスタム名</td>
          <td style={textbox}><input type="text" name="cstmname"/></td>          
        </tr>
        </table>

        <br/>

        <table style={cstmTextStyle}>
        <tr>
          <td >カスタム元メニュー</td>
          <td style={textbox}><input type="text" name="kind"/></td>          
        </tr>
        </table>

        <br/>

        <table style={cstmTextStyle}>
        <tr>
          <td >カスタム1</td>
          <td style={textbox}><input type="text" name="cstm1"/></td>          
        </tr>
        </table>

        <br/>

        <table style={cstmTextStyle}>
        <tr>
          <td >カスタム2</td>
          <td style={textbox}><input type="text" name="cstm2"/></td>          
        </tr>
        </table>

        <br/>

        <table style={cstmTextStyle}>
        <tr>
          <td >カスタム3</td>
          <td style={textbox}><input type="text" name="cstm3"/></td>          
        </tr>
        </table>

        <br/>

        <table style={cstmTextStyle}>
        <tr>
          <td >カスタム4</td>
          <td style={textbox}><input type="text" name="cstm4"/></td>          
        </tr>
        </table>

        <br/>

        <input type="submit" style={buttonStyle} name="submit" value="カスタムを投稿する"></input>
    </Box>
    

    <Box  style={footerStyle}
    position="fixed"
    bottom= "0%"
    left="50%"
    transform="translate(-50%,0%)"
    zIndex="200"
    >
      <Text> 東京電機大学 Addition </Text>
        <Button style={buttonStyle} onClick={handlehomeClick}>ホーム</Button>
        <Button style={buttonStyle} onClick={handleSearchClick}>検索</Button>
    </Box>
    </>
  );
};

export default Home;