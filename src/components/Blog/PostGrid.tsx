import styled from "styled-components";
import { Post } from "../../types/post";
import PostCard from "./PostCard";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.md} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.monochrome[600]};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  font-size: 1.1rem;
`;

interface PostGridProps {
  posts: Post[];
}

function PostGrid({ posts }: PostGridProps) {
  if (posts.length === 0) {
    return <EmptyMessage>게시물이 없습니다.</EmptyMessage>;
  }

  return (
    <Grid>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Grid>
  );
}

export default PostGrid;
