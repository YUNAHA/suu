import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@yamada-ui/react';
import AddtionHeader from '../components/AddtionHeader';
import { useWindowSize } from "@uidotdev/usehooks";
import axios from 'axios';

const Addtion = () => {
  const navigate = useNavigate();
  const size = useWindowSize();

  const [formData, setFormData] = useState({
    cstmname: '',
    kind: '',
    custom1: '',
    custom2: '',
    custom3: '',
    custom4: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3101/api/v1/posts', formData);
      console.log('Data submitted:', response.data);
      navigate('/');
    } catch (error) {
      console.error('API Error:', error);
    }
  };

  const buttonStyle = {
    background: "#01714B",
    fontFamily: "Meiryo UI",
    border: "none",
    borderRadius: "10%",
    padding: "2px",
    fontSize: "150%",
    color: "white"
  };

  const bodyStyle = {
    height: size.height * 0.75,
    width: size.width * 0.75,
    background: "white",
    fontFamily: "Meiryo UI",
    borderTop: "none",
    borderRadius: "5%",
    fontSize: "100%",
    color: "#01714B"
  };

  const customTextStyle = {
    width: size.width * 0.75,
    fontFamily: "Meiryo UI",
    textAlign: "left",
    borderBottom: "dotted",
    fontSize: "125%",
    color: "#01714B",
    paddingLeft: "5%"
  };

  const textbox = {
    fontFamily: "Meiryo UI",
    textAlign: "right",
    fontSize: "100%",
    color: "#01714B",
    paddingRight: "2%"
  };

  return (
    <>
      <Box
        position="fixed"
        top={size.height * 0.3}
        zIndex="200"
      >
        <AddtionHeader />
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
        <form onSubmit={handleSubmit}>
          <div style={{
            fontFamily: "Meiryo UI",
            textAlign: "center",
            borderBottom: "solid",
            fontSize: "150%",
            color: "#01714B"
          }}>
            <br />カスタムを投稿する
          </div>

          <table style={customTextStyle}>
            <tbody>
              <tr>
                <td>カスタム名</td>
                <td style={textbox}><input type="text" name="cstmname" value={formData.cstmname || ''} onChange={handleChange} /></td>
              </tr>
            </tbody>
          </table>

          <br />

          <table style={customTextStyle}>
            <tbody>
              <tr>
                <td>カスタム元メニュー</td>
                <td style={textbox}><input type="text" name="kind" value={formData.kind || ''} onChange={handleChange} /></td>
              </tr>
            </tbody>
          </table>

          <br />

          <table style={customTextStyle}>
            <tbody>
              <tr>
                <td>カスタム1</td>
                <td style={textbox}><input type="text" name="custom1" value={formData.custom1 || ''} onChange={handleChange} /></td>
              </tr>
            </tbody>
          </table>

          <br />

          <table style={customTextStyle}>
            <tbody>
              <tr>
                <td>カスタム2</td>
                <td style={textbox}><input type="text" name="custom2" value={formData.custom2 || ''} onChange={handleChange} /></td>
              </tr>
            </tbody>
          </table>

          <br />

          <table style={customTextStyle}>
            <tbody>
              <tr>
                <td>カスタム3</td>
                <td style={textbox}><input type="text" name="custom3" value={formData.custom3 || ''} onChange={handleChange} /></td>
              </tr>
            </tbody>
          </table>

          <br />

          <table style={customTextStyle}>
            <tbody>
              <tr>
                <td>カスタム4</td>
                <td style={textbox}><input type="text" name="custom4" value={formData.custom4 || ''} onChange={handleChange} /></td>
              </tr>
            </tbody>
          </table>

          <br />

          <input type="submit" style={buttonStyle} value="カスタムを投稿する"></input>
        </form>
      </Box>

      <Box 
        position="fixed"
        bottom="0%"
        left="10%"
        transform="translate(-50%,0%)"
        zIndex="200"
      >
        <Button style={buttonStyle} onClick={() => navigate('/Research')}>検索</Button>
      </Box>
    </>
  );
};

export default Addtion;