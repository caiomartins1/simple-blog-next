import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { ParsedUrlQuery } from 'querystring';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Post: NextPage<Props> = ({ post }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold py-5">{post.title}</h1>
      <div className="prose pb-20">
        <MDXRemote {...post.content} />
      </div>
    </div>
  );
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

  return {
    paths,
    fallback: false,
  };
};

interface IStaticProps extends ParsedUrlQuery {
  slug: string;
}

type PostResponse = {
  post: {
    content: MDXRemoteSerializeResult;
    title: string;
  };
};

export const getStaticProps: GetStaticProps<PostResponse> = async (ctx) => {
  const { params } = ctx;
  const { slug } = params as IStaticProps;

  const postsFolder = path.join(process.cwd(), 'src', 'posts');
  const filePath = path.join(postsFolder, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });

  const source: any = await serialize(fileContent, {
    parseFrontmatter: true,
  });
  return {
    props: {
      post: {
        content: source,
        title: source.frontmatter.title,
      },
    },
  };
};

export default Post;
