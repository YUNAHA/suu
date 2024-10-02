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
    fontSize: "20px",
    color: "white"
  };

  const footerStyle = {
    width: size.width,
    fontFamily: "Meiryo UI",
    fontSize: "100%",
    color: "#01714B"
  };

  const bodyStyle = {
    height: size.height*1.1,
    width: size.width*0.75,
    background: "white",//スタバカラー　黒は0F0F0F
    fontFamily: "Meiryo UI",
    borderTop: "none",
    borderRadius: "5%",
    fontSize: "125%",
    color: "#01714B"
  };

  const cstmTextStyle = {
    width: size.width*0.75,
    fontFamily: "Meiryo UI",
    textAlign:"left",
    borderBottom: "dotted",
    fontSize: "100%",
    color: "#01714B",
    paddingLeft:"5%"
  };

  const textbox = {
    
    fontFamily: "Meiryo UI",
    textAlign:"right",
    fontSize: "100%",
    color: "#01714B",
    paddingRight:"5%"
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

    <Box
    style={bodyStyle}
    transform="translate(16%,10%)"
    zIndex="100"
    >
        <table style={cstmTextStyle}>
        <tr>
          <td >画像をアップロード</td>
          <td style={textbox}><input type="file" accept='image/*'/></td>          
        </tr>
        </table>

        <table style={cstmTextStyle}>
        <tr>
          <td >カスタム名</td>
          <td style={textbox}><input type="text" name="cstmname"/></td>          
        </tr>
        </table>
        <table style={cstmTextStyle}>
        <tr>
          <td >カスタム元メニュー</td>
          <td style={textbox}>
            <select style={{width:"175px"}} name="kind"/>
          </td>
        </tr>
        </table>
        <table style={cstmTextStyle}>
        <tr>
          <td>ミルク</td>
          <td style={textbox}>
            変更なし
            <input type='radio' name="milk"/>
            |低脂肪乳
            <input type='radio' name="milk"/>
            |無脂肪乳
            <input type='radio' name="milk"/>
            <br></br>
            豆乳
            <input type='radio' name="milk"/>
            |アーモンド
            <input type='radio' name="milk"/>
            |オーツ
            <input type='radio' name="milk"/>
            |ブレべ
            <input type='radio' name="milk"/>
          </td>          
        </tr>
        </table>
        <table style={cstmTextStyle}>
        <tr>
          <td>ホイップ</td>
          <td style={textbox}>
            変更なし
            <input type='radio' name="Whippedcream"/>
            |多め
            <input type='radio' name="Whippedcream"/>
            |少な目
            <input type='radio' name="Whippedcream"/>
            |抜き
            <input type='radio' name="Whippedcream"/>
            |追加
            <input type='radio' name="Whippedcream"/>
          </td>          
        </tr>
        </table>
        <table style={cstmTextStyle}>
        <tr>
          <td>チョコレートソース</td>
          <td style={textbox}>
            変更なし
            <input type='radio' name="chocolatesauce"/>
            |追加
            <input type='radio' name="chocolatesauce"/>
            |増量
            <input type='radio' name="chocolatesauce"/>
            |減量
            <input type='radio' name="chocolatesauce"/>
            |抜き
            <input type='radio' name="chocolatesauce"/>
          </td>          
        </tr>
        <tr>
          <td>キャラメルソース</td>
          <td style={textbox}>
            変更なし
            <input type='radio' name="caramelsauce"/>
            |追加
            <input type='radio' name="caramelsauce"/>
            |増量
            <input type='radio' name="caramelsauce"/>
            |減量
            <input type='radio' name="caramelsauce"/>
            |抜き
            <input type='radio' name="caramelsauce"/>
          </td>          
        </tr>
        </table>
        <table style={cstmTextStyle}>
        <tr>
          <td>チョコチップ</td>
          <td style={textbox}>
            変更なし
            <input type='radio' name="chocolatechips"/>
            |追加
            <input type='radio' name="chocolatechips"/>
            |増量
            <input type='radio' name="chocolatechips"/>
          </td>          
        </tr>
        </table>
        <table style={cstmTextStyle}>
        <tr>
          <td>シロップ</td>
          <td style={textbox}>
            変更なし
            <input type='radio' name="syrup"/>
            |増量
            <input type='radio' name="syrup"/>
            |減量
            <input type='radio' name="syrup"/>
            |抜き
            <input type='radio' name="syrup"/>
            <br/>
            キャラメル
            <input type='checkbox' name="syrup"/>
            |チョコレート
            <input type='checkbox' name="syrup"/>
            |バニラ
            <input type='checkbox' name="syrup"/>

            <br/>
            ホワイトモカ
            <input type='checkbox' name="syrup"/>
            |チャイ
            <input type='checkbox' name="syrup"/>
            |クラシック
            <input type='checkbox' name="syrup"/>
            
            <br/>
            ジンジャー
            <input type='checkbox' name="syrup"/>
            |バレンシア
            <input type='checkbox' name="syrup"/>
          </td>          
        </tr>
        </table>
        <table style={cstmTextStyle}>
        <tr>
          <td>シトラス果肉</td>
          <td style={textbox}>
            <input type='number' name="citrus" min = "0"/>
            スプーン
          </td>          
        </tr>
        </table>
        <table style={cstmTextStyle}>
        <tr>
          <td>フォームミルク</td>
          <td style={textbox}>
            変更なし
            <input type='radio' name="formedmilk"/>
            |多め
            <input type='radio' name="formedmilk"/>
            |少な目
            <input type='radio' name="formedmilk"/>
            |抜き
            <input type='radio' name="formedmilk"/>
            <br/>ホイップから変更
            <input type='radio' name="formedmilk"/>
          </td>          
        </tr>
        </table>

        <table style={cstmTextStyle}>
        <tr>
          <td>パウダー</td>
          <td style={textbox}>
          変更なし
          <input type='radio' name="powder"/>
          |増量
          <input type='radio' name="powder"/>
          |減量
          <input type='radio' name="powder"/>
          |抜き
          <input type='radio' name="powder"/>
          <br/>

          シナモン
          <input type='checkbox' name="powder"/>
          |ココア
          <input type='checkbox' name="powder"/>
          |オレンジバニラ
          <input type='checkbox' name="powder"/>
          <br/>
          カスカラ
          <input type='checkbox' name="powder"/>
          |ナツメグ
          <input type='checkbox' name="powder"/>
          |ハニーオレンジ
          <input type='checkbox' name="powder"/>
          <br/>
          抹茶
          <input type='checkbox' name="powder"/>
          |ダークモカ
          <input type='checkbox' name="powder"/>
          </td>
        </tr>
        </table>

        <table style={cstmTextStyle}>
        <tr>
          <td>エスプレッソショット</td>
          <td style={textbox}>
            <input type='number' name="espresso" min = "0"/>
            ショット
          </td>          
        </tr>
        </table>

        <table style={cstmTextStyle}>
        <tr>
          <td>リストレットショット</td>
          <td style={textbox}>
            <input type='number' name="ristretto" min = "0"/>
            ショット
          </td>          
        </tr>
        </table>

        <table style={cstmTextStyle}>
        <tr>
          <td>コーヒーロースト</td>
          <td style={textbox}>
          変更なし
          <input type='radio' name="roast"/>
          |追加
          <input type='radio' name="roast"/>
          </td>          
        </tr>
        </table>

        <table style={cstmTextStyle}>
        <tr>
          <td>ディカフェ</td>
          <td style={textbox}>
          変更なし
          <input type='radio' name="decafe"/>
          |ディカフェに変更
          <input type='radio' name="decafe"/>
          </td>          
        </tr>
        </table>

        <table style={cstmTextStyle}>
        <tr>
          <td>氷、温度</td>
          <td style={textbox}>
          変更なし
          <input type='radio' name="icentemp"/>
          |氷少なめ
          <input type='radio' name="icentemp"/>
          |氷なし
          <input type='radio' name="icentemp"/>
          |熱め
          <input type='radio' name="icentemp"/>
          |ぬるめ
          <input type='radio' name="icentemp"/>
          <br/>
          ミルク多め
          <input type='checkbox' name="icentemp"/>
          |コーヒー多め
          <input type='checkbox' name="icentemp"/>
          
          </td>          
        </tr>
        </table>

        <table style={cstmTextStyle}>
        <tr>
          <td >その他</td>
          <td style={textbox}><textarea name="others"/></td>          
        </tr>
        </table>

        <input type="submit" style={buttonStyle} name="submit" value="カスタムを投稿する"></input>
    </Box>
    

    <Box  style={footerStyle}
    position="fixed"
    bottom= "0%"
    left="50%"
    transform="translate(-50%,0%)"
    zIndex="200"
    >
      <Text></Text>
        <Button style={buttonStyle} onClick={handlehomeClick}>ホーム</Button>
        <Button style={buttonStyle} onClick={handleSearchClick}>検索</Button>
    </Box>
    </>
  );
};

export default Home;