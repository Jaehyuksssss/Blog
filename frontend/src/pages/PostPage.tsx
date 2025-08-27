import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Post } from "../types/post";
import { Layout } from "../components/Layout/Layout";

function PostPage() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);



  if (loading)
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mb-4"></div>
            <p className="text-gray-600 text-lg">포스트를 불러오는 중...</p>
          </div>
        </div>
      </Layout>
    );
  if (error)
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <p className="text-red-600 text-xl">{error}</p>
          </div>
        </div>
      </Layout>
    );
  if (!post)
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-gray-600 text-xl">포스트를 찾을 수 없습니다.</p>
          </div>
        </div>
      </Layout>
    );

  return (
    <Layout>
      {/* Post Header */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            {post.category.map((cat) => (
              <span 
                key={cat} 
                className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mr-2 mb-2"
              >
                {cat}
              </span>
            ))}
          </div>
          <h1 className="text-5xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center space-x-6 text-gray-600">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                {post.author.name.charAt(0)}
              </div>
              <span className="font-medium">{post.author.name}</span>
            </div>
            <span className="text-lg">•</span>
            <span>{post.date}</span>
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div 
              className="leading-relaxed text-lg text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </div>
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                >
                  #{tag}
                </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default PostPage;
