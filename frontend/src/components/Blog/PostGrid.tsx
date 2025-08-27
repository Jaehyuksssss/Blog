import { Post } from "../../types/post";
import PostCard from "./PostCard";

interface PostGridProps {
  posts: Post[];
}

function PostGrid({ posts }: PostGridProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
   
        </div>
        <p className="text-gray-600 text-lg">게시물이 없습니다.</p>
        <p className="text-gray-500 text-sm mt-2">새로운 포스트를 작성해보세요!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostGrid;
