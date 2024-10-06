import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Button } from '@yamada-ui/react';
import { useNavigate } from 'react-router-dom';
import { useWindowSize } from "@uidotdev/usehooks";

const PostDetail = () => {
  const { id } = useParams();  // URLから取得したIDを使用
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const size = useWindowSize();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleAddClick = () => {
    navigate('/Research');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3101/api/v1/posts/${id}`);
        console.log(response.data);  // デバッグ用にAPIの応答内容を確認
        setPost(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!post) return <p>データが見つかりません。</p>;

  return (
    <>
    <div>
      <h1>{post.cstmname}</h1>
      <p>種類: {post.kind}</p>
      <p>カスタム1: {post.custom1}</p>
      <p>カスタム2: {post.custom2}</p>
      <p>カスタム3: {post.custom3}</p>
      <p>カスタム4: {post.custom4}</p>
      <p>作成日: {post.created_at}</p>
      <p>更新日: {post.updated_at}</p>
      {post.image && <img src={post.image} alt={post.cstname} />}
    </div>
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
          <Button onClick={handleAddClick} bg="#38A77F">検索</Button>
        </Box>
        </>
  );
};

export default PostDetail;