import { useState, useEffect } from "react";
import { Post } from "../types/post";

const mockPosts: Post[] = [
  {
    id: 1,
    title: "AWS CloudFront + S3 정적 웹사이트 배포 완전 가이드",
    excerpt:
      "CloudFront와 S3를 활용한 정적 웹사이트 배포 전략과 무효화(Invalidation)까지 모든 과정을 다룹니다.",
    content:
      "정적 웹사이트를 배포할 때, S3와 CloudFront 조합은 가장 많이 사용되는 패턴입니다. 이 글에서는 HTTPS 설정, 무효화 처리, 배포 자동화까지 실무에 필요한 모든 내용을 정리합니다...",
    date: "2025-03-30",
    author: {
      name: "Jaehyuk Lim",
      avatar: "/profile.jpg",
    },
    category: ["cloud", "devops"],
    tags: ["AWS", "CloudFront", "S3", "DevOps"],
  },
  {
    id: 2,
    title: "React 프로젝트 구조 설계",
    excerpt:
      "",
    content:
      ".",
    date: "2025-03-28",
    author: {
      name: "Jaehyuk Lim",
      avatar: "/profile.jpg",
    },
    category: ["web"],
    tags: ["React", "Architecture", "TypeScript"],
  },
  {
    id: 3,
    title: "GitHub Actions로 CI/CD 파이프라인 구축하기",
    excerpt:
      "",
    content:
      "",
    date: "2025-03-25",
    author: {
      name: "Jaehyuk Lim",
      avatar: "/profile.jpg",
    },
    category: ["devops", "cloud"],
    tags: ["GitHub Actions", "CI/CD", "DevOps"],
  },
];

export const usePosts = (category?: string) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // 실제 API 연동 시 여기에 API 호출 코드가 들어갈 예정
        // const response = await fetch('/api/posts');
        // const data = await response.json();

        await new Promise((resolve) => setTimeout(resolve, 500));
        const filteredPosts = category
          ? mockPosts.filter((post) => post.category.includes(category))
          : mockPosts;

        setPosts(filteredPosts);
        setError(null);
      } catch (err) {
        setError("포스트를 불러오는데 실패했습니다.");
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [category]);

  const getPostById = (id: number) => {
    return posts.find((post) => post.id === id) || null;
  };

  return {
    posts,
    loading,
    error,
    getPostById,
  };
};
