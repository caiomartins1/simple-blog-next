import { NextApiHandler } from 'next';
import { readPostsInfo } from '@/lib/files';

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

export default handler;
