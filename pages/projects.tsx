import Navbar from '../components/Navbar';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
      <div className="backdrop-blur-md bg-white/60 dark:bg-slate-800/40 border border-white/20 dark:border-slate-700/40 shadow-xl rounded-xl p-5 transition-all hover:scale-[1.02]">
      <main className="flex-1 flex flex-col justify-center items-center text-center p-10">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 drop-shadow-lg">Projects</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard
                title={project.title}
                description={project.description}
                link={project.link}
                stack={project.stack}
              />
            </div>
          ))}
        </div>
      </main>
      </div>
      </div>
      
    </>
    
  );
}
