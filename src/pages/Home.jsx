import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -50, opacity: 0 },
};
const Home = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <div className="home">
        <img src="../images/profile.png" alt="" />
        <h1>Hi, Im Harish</h1>
        <h3>React Developer</h3>
        <p>I build modern web applications using React</p>
        <div className="home-btn">
          <Link to="/projects">
            <button>View Projects</button>
          </Link>
          <a href="/Resume.pdf" download>
            <button>Download Resume</button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
