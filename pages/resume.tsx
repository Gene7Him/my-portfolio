import Navbar from '../components/Navbar';

export default function Resume() {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">Resume</h1>
        <a href="/resume.pdf" target="_blank" className="text-blue-500">Download my resume</a>
      </main>
    </>
  );
}
