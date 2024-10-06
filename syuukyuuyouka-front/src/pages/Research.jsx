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
  transform="translate(-50%, -50%)"
  zIndex="2000"
>
  <ul>
    {posts.map((post) => (
      <li key={post.id}>
        <Button
          onClick={() => handleDetailClick(post.id)}
          sx={{
            width: '200px',
            height: '50px',
            fontSize: '16px',
            color: 'black', // テキストの色を指定
            backgroundColor: 'white', // ボタンの背景色を指定
            margin: '10px 0',
            display: 'flex', // テキストを中央に配置
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
        top={size.height * 0.7}
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex="2000"
      >
        <Button onClick={handleHomeClick}>ホーム</Button>
        <Button onClick={handleAddClick}>追加</Button>
      </Box>
    </div>
  );
};

export default Research;