import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { title } from 'process';

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
      <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col justify-center items-center text-center p-10">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Blog</h1>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {posts.map(post => (
            <li key={post.slug} className="p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-md hover:shadow-xl">
              <Link href="/blog" className="text-blue-500 hover:underline">
                Blog
              </Link>
              
              <p className="text-sm text-gray-500">{post.date}</p>
            </li>
          ))}
        </ul>
      </main>
      </div>
    </>
  );
}
