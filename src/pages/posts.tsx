import PostCard from '@/components/PostCard';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

type Post = {
  id: string;
  title: string;
  meta: string;
  slug: string;
};

const Posts: NextPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    const res = await fetch('/api/posts');
    const data = await res.json();

    setPosts(data.posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="p-5 max-w-3xl mx-auto space-y-5">
      {posts.map((post) => (
        <PostCard title={post.title} description={post.slug} key={post.id} />
      ))}
    </div>
  );
};
export default Posts;
