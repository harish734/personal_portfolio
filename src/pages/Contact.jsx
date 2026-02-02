import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const pageVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -50, opacity: 0 },
};

const Contact = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <div className="contact">
        <img src="/images/profileicon.png" alt="profile" />
        <div className="contact-content">
          <h1>
            <span style={{ color: "whitesmoke" }}>H</span>ARISH
            <span style={{ color: "whitesmoke" }}>R</span>AAJENDAR R
          </h1>
          <h3>React Developer</h3>
          <p>I build modern web applications using React.</p>
        </div>
      </div>
      <div className="contact-btns">
        <a href="">
          <button>
            <FaWhatsapp />
          </button>
        </a>
      </div>
    </motion.div>
  );
};

export default Contact;
