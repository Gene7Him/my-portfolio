import Navbar from '../../components/Navbar';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import path from 'path';
import fs from 'fs';

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const paths = files.map((filename) => ({
    params: { slug: filename.replace('.md', '') }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join('posts', `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);

  return {
    props: {
      title: data.title,
      content: processedContent.toString(),
    },
  };
}

export default function Post({ title, content }) {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>
    </>
  );
}

