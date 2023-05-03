import PostCard from '@/components/PostCard';
import { NextPage } from 'next';

interface Props {}

const Posts: NextPage<Props> = () => {
  return (
    <div className="p-5 max-w-3xl mx-auto space-y-5">
      <PostCard
        title="Lorem ipsum dolor sit amet."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio pariatur rem quisquam tempora nulla dolorum impedit cum alias itaque! Ducimus."
      />
      <PostCard
        title="Lorem ipsum dolor sit amet."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio pariatur rem quisquam tempora nulla dolorum impedit cum alias itaque! Ducimus."
      />
      <PostCard
        title="Lorem ipsum dolor sit amet."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio pariatur rem quisquam tempora nulla dolorum impedit cum alias itaque! Ducimus."
      />
    </div>
  );
};
export default Posts;
