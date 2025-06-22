import Navbar from '../components/Navbar';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">Projects</h1>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
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
    </>
  );
}
