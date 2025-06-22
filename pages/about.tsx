import Navbar from '../components/Navbar';

export default function About() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col justify-center items-center text-center p-10">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 drop-shadow-lg">About Me</h1>
        <p className="text-gray-700 dark:text-gray-300">
          Hey, I’m Eugene — a fullstack developer with a passion for turning ideas into working software. I have experience building scalable backend systems, polished frontend apps, and managing projects end-to-end.
          <br /><br />
          I recently graduated with a degree in Computer Science and have been sharpening my skills through personal projects, open source work, and freelance gigs. I'm especially interested in working on teams where I can learn fast, ship often, and contribute across the stack.
          <br /><br />
          Outside of coding, I enjoy exploring AI ethics, advocating for accessibility in tech, and supporting projects that empower people through data.
        </p>
      </main>
      </div>
    </>
    
  );
}
