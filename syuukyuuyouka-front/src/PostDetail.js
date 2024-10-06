import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PostDetail = () => {
  const { id } = useParams();  // URLから取得したIDを使用
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  );
};

export default PostDetail;