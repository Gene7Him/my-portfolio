import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export async function getStaticProps() {
  const files = fs.readdirSync('posts');
  const posts = files.map(filename => {
    const markdown = fs.readFileSync(path.join('posts', filename), 'utf8');
    const { data } = matter(markdown);
    return {
      slug: filename.replace('.md', ''),
      title: data.title,
      date: data.date,
    };
  });

  return { props: { posts } };
}

export default function Blog({ posts }) {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <ul className="space-y-4">
          {posts.map(post => (
            <li key={post.slug}>
              <Link href="/blog" className="text-blue-500 hover:underline">
                Blog
              </Link>

              <p className="text-sm text-gray-500">{post.date}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
