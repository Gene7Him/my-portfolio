export default function Newsletter() {
  return (
    <div className="p-6 mt-8 bg-gray-100 dark:bg-gray-800 rounded-xl">
      <h2 className="text-xl font-semibold mb-2">Stay in the loop</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">I occasionally write about projects I’m building, dev tools I’m exploring, and what I’m learning on the job hunt. Join the newsletter to follow along.</p>
      <form action="https://example.us1.list-manage.com/subscribe/post?u=YOUR_U_ID&amp;id=LIST_ID" method="post" target="_blank">
        <input type="email" name="EMAIL" placeholder="Enter your email" required className="p-2 rounded w-full max-w-md" />
        <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Subscribe</button>
      </form>
    </div>
  );
}
