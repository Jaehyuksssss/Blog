import { useParams } from "react-router-dom";
import styled from "styled-components";

import { useState, useEffect } from "react";
import { Post } from "../types/post";
import { Layout } from "../components/Layout/Layout";

const PostContainer = styled.article`
  max-width: 800px;
  margin: 0 auto;
`;

const PostHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;

  h1 {
    ${({ theme }) => theme.typography.h1}
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

const PostMeta = styled.div`
  color: ${({ theme }) => theme.colors.monochrome[600]};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  span {
    margin: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

const PostContent = styled.div`
  line-height: 1.8;
  font-size: 1.1rem;

  p {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  img {
    max-width: 100%;
    height: auto;
    margin: ${({ theme }) => theme.spacing.lg} 0;
  }
`;

function PostPage() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        // API 호출 로직 구현
        // const response = await api.getPost(id);
        // setPost(response.data);
        // 임시 데이터
        setPost({
          id: 1,
          title: "샘플 포스트",
          content: "포스트 내용...",
          date: "2024-03-19",
          author: { name: "작성자", avatar: "" },
          category: ["web", "devops"],
          tags: ["react", "typescript"],
          excerpt: "요약",
        });
      } catch (err) {
        setError("포스트를 불러오는데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading)
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    );
  if (error)
    return (
      <Layout>
        <p>{error}</p>
      </Layout>
    );
  if (!post)
    return (
      <Layout>
        <p>포스트를 찾을 수 없습니다.</p>
      </Layout>
    );

  return (
    <Layout>
      <PostContainer>
        <PostHeader>
          <h1>{post.title}</h1>
          <PostMeta>
            <span>By {post.author.name}</span>
            <span>•</span>
            <span>{post.date}</span>
          </PostMeta>
        </PostHeader>
        <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
      </PostContainer>
    </Layout>
  );
}

export default PostPage;
