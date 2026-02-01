import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug.trim().toLowerCase());

  if (!project) return <h2>Project Not Found</h2>;
  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <h4>Tech Stack</h4>
      <ul>
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <a href={project.live} target="_blank">
        Live Demo
      </a>
      <a href={project.github} target="_blank">
        Github
      </a>
    </div>
  );
};

export default ProjectDetail;
