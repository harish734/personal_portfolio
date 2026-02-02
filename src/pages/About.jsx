import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -50, opacity: 0 },
};

const About = () => {
  return (
    <>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        <div className="about">
          <img src="/images/profileicon.png" alt="profile" />
          <div className="about-content">
            <h1>
              <span style={{ color: "whitesmoke" }}>H</span>ARISH
              <span style={{ color: "whitesmoke" }}>R</span>AAJENDAR R
            </h1>
            <h3>React Developer</h3>
            <p>I build modern web applications using React.</p>
          </div>
        </div>
        <div className="about-btns">
          <a href="mailto:harishraajendar2006@gmail.com">
            <button>
              <FaEnvelope />
            </button>
          </a>
          <a
            href="https://instagram.com/harish_s.intrend_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <FaInstagram />
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/harish-raajendar-6612a7320/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <FaLinkedin />
            </button>
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default About;
