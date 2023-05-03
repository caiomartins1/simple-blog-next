import PostCard from '@/components/PostCard';
import { InferGetStaticPropsType, NextPage } from 'next';

type Post = {
  id: string;
  title: string;
  meta: string;
  slug: string;
};

interface PostsApiResponse {
  posts: Post[];
}

export const getStaticProps = async () => {
  const { posts }: PostsApiResponse = await fetch(
    'http://localhost:3000/api/posts',
  ).then((data) => data.json());

  return {
    props: { posts },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Posts: NextPage<Props> = ({ posts }) => {
  return (
    <div className="p-5 max-w-3xl mx-auto space-y-5">
      {posts.map((post) => (
        <PostCard
          title={post.title}
          description={post.meta}
          slug={post.slug}
          key={post.id}
        />
      ))}
    </div>
  );
};
export default Posts;
