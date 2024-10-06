import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@yamada-ui/react';
import ResearchHeader from '../components/ResearchHeader';
import { useWindowSize } from "@uidotdev/usehooks";

const Research = () => {
  const navigate = useNavigate();
  const size = useWindowSize();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3101/api/v1/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setPosts(data))  // データをセット
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleAddClick = () => {
    navigate('/Addtion');
  };

  const handleDetailClick = (id) => {
    navigate(`/post/${id}`); // 詳細ページへのリンク
  };

  return (
    <div>
      <ResearchHeader />
      <Box
  position="fixed"
  top={size.height * 0.2}
  left="50%"
  transform="translate(-50%, 0)"
  zIndex="2000"
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    marginTop: '20px',
    width: '320px', // width of the container
    height: '300px', // set a fixed height for the container
    overflowY: 'auto', // enable vertical scrolling
    border: '1px solid #ccc', // optional, add a border for visual distinction
    padding: '10px', // optional, add padding inside the box
  }}
>
  <ul style={{ padding: 0, margin: 0 }}>
    {posts.map((post) => (
      <li key={post.id} style={{ listStyleType: 'none' }}>
        <Button
          onClick={() => handleDetailClick(post.id)}
          sx={{
            width: '280px',
            height: '50px',
            fontSize: '16px',
            color: 'black',
            backgroundColor: 'yellow',
            margin: '10px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {post.cstmname}
        </Button>
      </li>
    ))}
  </ul>
</Box>
      <Box
        position="fixed"
        top={size.height * 0.75}
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex="2000"
        sx={{
          display: 'flex',
          flexDirection: 'row', // ボタンを水平に並べる
          alignItems: 'center', // 垂直方向の中央揃え
          justifyContent: 'center', // 水平方向の中央揃え
          gap: '10px', // ボタン間のスペース
        }}
      >
        <Button onClick={handleHomeClick} bg="#38A77F">ホーム</Button>
        <Button onClick={handleAddClick} bg="#38A77F">追加</Button>
      </Box>
    </div>
  );
};

export default Research;