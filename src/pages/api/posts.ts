import { NextApiHandler } from 'next';
import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { randomUUID } from 'crypto';

const handler: NextApiHandler = (req, res) => {
  const { method } = req;

  const data = readPostsInfo();

  switch (method) {
    case 'GET':
      res.json({ posts: data });
      break;
    default:
      res.status(404).send('Not Found');
  }
};

const readPostsInfo = () => {
  const postsFolder = path.join(process.cwd(), 'src', 'posts');
  const fileNames = fs.readdirSync(postsFolder);

  return fileNames.map((fileName) => {
    const filePath = path.join(postsFolder, fileName);
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });
    const metadata = matter(fileContent);
    return { ...metadata.data, id: randomUUID() };
  });
};

export default handler;
