import styled from "styled-components";
import { useState } from "react";
import { usePosts } from "../hooks/usePosts";
import { Layout } from "../components/Layout/Layout";
import PostGrid from "../components/Blog/PostGrid";

const BlogHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  h1 {
    ${({ theme }) => theme.typography.h1}
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

const FilterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CategoryButton = styled.button<{ $isActive: boolean }>`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border: 1px solid
    ${({ theme, $isActive }) =>
      $isActive ? theme.colors.primary : theme.colors.monochrome[300]};
  background: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary : "transparent"};
  color: ${({ theme, $isActive }) =>
    $isActive ? "white" : theme.colors.monochrome[700]};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme, $isActive }) =>
      $isActive ? theme.colors.primaryDark : theme.colors.monochrome[100]};
  }
`;

function Blog() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const { posts, loading, error } = usePosts(
    activeCategory !== "all" ? activeCategory : undefined
  );

  const categories = ["all", "web", "cloud", "devops", "programming"];

  return (
    <Layout>
      <BlogHeader>
        <h1>Blog Posts</h1>
        <FilterSection>
          {categories.map((category) => (
            <CategoryButton
              key={category}
              $isActive={category === activeCategory}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </CategoryButton>
          ))}
        </FilterSection>
      </BlogHeader>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <PostGrid posts={posts} />
      )}
    </Layout>
  );
}

export default Blog;
