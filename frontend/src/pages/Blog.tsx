import { useState } from "react";
import { usePosts } from "../hooks/usePosts";
import { Layout } from "../components/Layout/Layout";
import PostGrid from "../components/Blog/PostGrid";

function Blog() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const { posts, loading, error } = usePosts(
    activeCategory !== "all" ? activeCategory : undefined
  );

  const categories = [
    { id: "all", name: "All", color: "from-gray-500 to-gray-600" },
    { id: "web", name: "Web Development", color: "from-blue-500 to-blue-600" },
    { id: "cloud", name: "Cloud Computing", color: "from-purple-500 to-purple-600" },
    { id: "devops", name: "DevOps", color: "from-green-500 to-green-600" },
    { id: "programming", name: "Programming", color: "from-orange-500 to-orange-600" }
  ];

  return (
    <Layout>
      {/* Blog Header */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-4xl font-bold text-gray-900 mb-6">
            Blog Posts
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            기술과 개발에 대한 인사이트를 담은 포스트들을 확인해보세요
          </p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="py-8 px-4 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  category.id === activeCategory
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts Content */}
      <div className="py-12 px-4 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600 text-lg">포스트를 불러오는 중...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <p className="text-red-600 text-lg">{error}</p>
            </div>
          ) : (
            <PostGrid posts={posts} />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Blog;
