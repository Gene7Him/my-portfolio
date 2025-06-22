import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="p-8 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
        <form className="space-y-4" action="https://formspree.io/f/{your-form-id}" method="POST">
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 border rounded" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-2 border rounded" />
          <textarea name="message" placeholder="Your Message" rows="5" required className="w-full p-2 border rounded" />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send</button>
        </form>
      </main>
    </>
  );
}
