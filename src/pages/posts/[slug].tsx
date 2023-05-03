import { InferGetStaticPropsType, NextPage } from 'next';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Post: NextPage<Props> = () => {
  return <div>Post</div>;
};

export const getStaticPaths = async () => {
  const postsFolder = path.join(process.cwd(), 'src', 'posts');
  const fileNames = fs.readdirSync(postsFolder);

  const paths = fileNames.map((fileName) => {
    const filePath = path.join(postsFolder, fileName);
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });

    const metadata = matter(fileContent);

    return { params: { slug: metadata.data.slug } };
  });

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = () => {
  return {
    props: {},
  };
};

export default Post;
