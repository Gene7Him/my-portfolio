import Navbar from '../components/Navbar';

export default function Resume() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col justify-center items-center text-center p-10">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 drop-shadow-lg">Resume</h1>
        <a href="/resume.pdf" target="_blank" className="text-blue-500">Download PDF</a>
      </main>
      </div>
    </>
  );
}
