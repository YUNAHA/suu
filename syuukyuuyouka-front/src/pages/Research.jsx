import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Text, Box, Button } from '@yamada-ui/react';
import ResearchHeader from '../components/ResearchHeader';
import { useWindowSize } from "@uidotdev/usehooks";

const Research = () => {
  const navigate = useNavigate();
  const size = useWindowSize();
  const [posts, setPosts] = useState([]); // 型注釈を削除
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
      .then(data => {
        const formattedData = data.map((post) => ({
          id: post.id,
          cstname: post.cstname,
          kind: post.kind,
          custom1: post.custom1,
          custom2: post.custom2,
          custom3: post.custom3,
          custom4: post.custom4,
          created_at: post.created_at,
          updated_at: post.updated_at,
          image: post.image,
        }));

        setPosts(formattedData);
      })
      .catch(error => {
        setError(error.message);
        console.error('データ取得エラー:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleAddClick = () => {
    navigate('/Addtion');
  };

  const handleCustom1Click = () => {
    navigate('/Custom1');
  };

  return (
    <div>
      <ResearchHeader />
      <h2>Posts:</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.cstname}</h3>
            <p>種類: {post.kind}</p>
            <p>カスタム1: {post.custom1}</p>
            <p>カスタム2: {post.custom2}</p>
            <p>カスタム3: {post.custom3}</p>
            <p>カスタム4: {post.custom4}</p>
            <p>作成日: {post.created_at}</p>
            <p>更新日: {post.updated_at}</p>
            <img src={post.image} alt={post.cstname} />
          </li>
        ))}
      </ul>
      <Box
        position="fixed"
        top={size.height * 0.3}
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex="2000">
        <Button onClick={handleCustom1Click}><Text>カスタム名1</Text></Button>
      </Box>
      <Box
        position="fixed"
        top={size.height * 0.4}
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex="2000">
        <Button><Text>カスタム名2</Text></Button>
      </Box>
      <Box
        position="fixed"
        top={size.height * 0.7}
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex="2000"
      >
        <Text>東京電機大学 Research</Text>
        <Button onClick={handleHomeClick}>ホーム</Button>
        <Button onClick={handleAddClick}>追加</Button>
      </Box>
    </div>
  );
};

export default Research;