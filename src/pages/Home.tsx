import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background.primary};
  margin: 0 auto;
  padding: 4rem 1rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Hero = styled.section`
  text-align: left;
  margin-bottom: 6rem;

  h1 {
    font-size: 4.5rem;
    margin-bottom: 1.5rem;
    color: #000000;
    font-weight: 500;
    line-height: 1.1;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.25rem;
    color: #595959;
    margin-bottom: 2.5rem;
    max-width: 600px;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.95rem;
    }
  }
`;

const FeaturedPosts = styled.section`
  margin-bottom: 6rem;

  h2 {
    font-size: 1.75rem;
    margin-bottom: 3rem;
    color: #000000;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin-bottom: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const NewsletterSection = styled.section`
  margin-bottom: 6rem;
  padding: 4rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #000000;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    color: #595959;
    margin-bottom: 2rem;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;
const PostCard = styled.div`
  background: transparent;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #000000;
    font-weight: 500;
    line-height: 1.3;
  }

  p {
    color: #595959;
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  small {
    color: #8c8c8c;
    font-size: 0.875rem;
  }
`;
const CategoryTag = styled.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  background-color: #f5f5f5;
  color: #595959;
  border-radius: 4px;
  margin-bottom: 1rem;
  font-size: 0.875rem;
`;
const Button = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #000000;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.2s;
  font-size: 1rem;

  &:hover {
    background-color: #262626;
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.95rem;
  }
`;

function Home() {
  return (
    <HomeContainer>
      <Hero>
        <h1>Insights for Developers, by Developers</h1>
        <p>인사이트를 전합니다.</p>
        <Button to="/blog">최신 기술 블로그 읽기</Button>
      </Hero>

      <FeaturedPosts>
        <h2>Featured articles</h2>
        <PostGrid>
          {featuredPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              style={{ textDecoration: "none" }}
            >
              <PostCard>
                <CategoryTag>Technology</CategoryTag>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <small>
                  by {post.author.name} • {post.date}
                </small>
              </PostCard>
            </Link>
          ))}
        </PostGrid>
      </FeaturedPosts>

      <NewsletterSection>
        <h2>기술 뉴스레터 구독하기</h2>
        <p>
          최신 프레임워크 트렌드부터 생산성 도구, 실전 개발 노하우까지 개발자를
          위한 정보만 엄선해 전달드립니다.
        </p>
        <Button to="/subscribe">Subscribe now</Button>
      </NewsletterSection>
    </HomeContainer>
  );
}

export default Home;
const featuredPosts = [
  {
    id: 1,
    title: "Next.js 14의 새 기능 완벽 정리",
    excerpt:
      "App Router, Server Actions, 그리고 새로운 Image 컴포넌트까지—Next.js 14의 주요 변화와 사용법을 자세히 알아봅니다.",
    category: "React / Next.js",
    image: "/images/nextjs14.jpg",
    date: "March 26, 2025",
    readTime: "6",
    author: {
      name: "Jaehyuk Lim",
      avatar: "/images/avatar1.jpg",
    },
  },
  {
    id: 2,
    title: "Terraform으로 AWS 인프라 자동화하기",
    excerpt:
      "코드로 인프라를 정의하면 어떤 점이 좋을까요? Terraform을 이용해 실전 인프라를 구축해봅니다.",
    category: "DevOps / Terraform",
    image: "/images/terraform.jpg",
    date: "March 24, 2025",
    readTime: "7",
    author: {
      name: "Jaehyuk Lim",
      avatar: "/images/avatar2.jpg",
    },
  },
  {
    id: 3,
    title: "ChatGPT API를 활용한 AI 서비스 만들기",
    excerpt:
      "OpenAI의 ChatGPT API를 통해 실시간 AI 챗봇을 만드는 방법을 소개합니다. 프롬프트 디자인부터 응답 처리까지!",
    category: "AI / OpenAI",
    image: "/images/chatgpt-api.jpg",
    date: "March 21, 2025",
    readTime: "8",
    author: {
      name: "Jaehyuk Lim",
      avatar: "/images/avatar3.jpg",
    },
  },
];
