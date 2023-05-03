import Link from 'next/link';
import React, { FC } from 'react';

interface Props {
  title: string;
  description: string;
  slug: string;
}

const PostCard: FC<Props> = ({ title, description, slug }) => {
  return (
    <Link href={`/posts/${slug}`} className="block">
      <div className="bg-green-100 p-2 rounded cursor-pointer">
        <h1 className="text-3xl text-gray-900 font-semibold">{title}</h1>
        <p className="text-gray-500">{description}</p>
      </div>
    </Link>
  );
};

export default PostCard;
