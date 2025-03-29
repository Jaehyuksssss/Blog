import styled from "styled-components";
import { Link } from "react-router-dom";
import { Post } from "../../types/post";

const Card = styled.article`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const Title = styled.h2`
  ${({ theme }) => theme.typography.h2};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.monochrome[900]};
  font-size: 1.5rem;
`;

const Excerpt = styled.p`
  color: ${({ theme }) => theme.colors.monochrome[600]};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.5;
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.monochrome[500]};
  font-size: 0.9rem;
`;

const Tags = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.colors.monochrome[100]};
  color: ${({ theme }) => theme.colors.monochrome[600]};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
`;

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  return (
    <Link to={`/blog/${post.id}`} style={{ textDecoration: "none" }}>
      <Card>
        <CardContent>
          <Title>{post.title}</Title>
          <Excerpt>{post.excerpt}</Excerpt>
          <Meta>
            <span>{post.author.name}</span>
            <span>{post.date}</span>
          </Meta>
          <Tags>
            {post.tags.slice(0, 3).map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
        </CardContent>
      </Card>
    </Link>
  );
}

export default PostCard;
