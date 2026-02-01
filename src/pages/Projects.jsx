import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    slug: "profile-card",
    title: "Profile Card",
    image: "/images/profilecard.png",
    description: "A responsive profile card built with React.",
    tech: ["React ", "CSS"],
    live: "https://profile-card-three-omega.vercel.app/",
    github: "https://github.com/harish734/profile_card",
  },
  {
    slug: "mini-ecommerce",
    title: "Mini Ecommerce",
    image: "/images/mini-ecommerce.png",
    description: "Frontend ecommerce UI with cart functionality.",
    tech: ["React ", "CSS"],
    live: "https://mini-ecommerce-ten-tau.vercel.app/",
    github: "https://github.com/harish734/mini_ecommerce",
  },
  {
    slug: "theme-switcher",
    title: "Theme Switcher",
    image: "/images/themeswitcher.png",
    description: "Theme switcher using React.",
    tech: ["React ", " CSS"],
    live: "https://theme-switcher-gules.vercel.app/",
    github: "https://github.com/harish734/theme_switcher",
  },
];

const pageVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -50, opacity: 0 },
};

function ProjectCard({ slug, image, title, description, tech }) {
  return (
    <Link to={`/projects/${slug}`}>
      <div className="project-card">
        <img src={image} alt={title} width={300} height={200} />
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h5>Tech: {tech}</h5>
      </div>
    </Link>
  );
}

const Projects = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            image={project.image}
            title={project.title}
            description={project.description}
            tech={project.tech}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
