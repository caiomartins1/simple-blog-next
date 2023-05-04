import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { randomUUID } from 'crypto';
import { Post } from '@/shared/types/post';

export const readPostsInfo = (): Post[] => {
  const postsFolder = path.join(process.cwd(), 'src', 'posts');
  const fileNames = fs.readdirSync(postsFolder);

  return fileNames.map((fileName) => {
    const filePath = path.join(postsFolder, fileName);
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });
    const metadata = matter(fileContent);
    return { ...metadata.data, id: randomUUID() };
  }) as Post[];
};
