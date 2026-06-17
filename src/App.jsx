import { motion } from "framer-motion";
import profile from "./assets/profile.jpg";
import "./App.css";

function App() {
  return (
    <>

    {/* NAVBAR */}
  <nav className="navbar">
    <h2>Akshar</h2>

    <ul>
          <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  {/* HERO SECTION */}
    <section id="home" className="hero">
  <div className="hero-container">

    <div className="hero-content">

        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Akshar Baraiya
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
  Passionate Frontend Developer creating modern, responsive and interactive web experiences.        </motion.p>

        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.5 }}
  className="hero-buttons"
>
  {/* <button>Hire Me</button> */}
  <a
  href="/AksharBaraiya_Resume.pdf"
  download
  className="cv-btn"
>
  Download CV
</a>
</motion.div>
        

      </div>

   <div className="hero-image">
 <motion.div
  className="profile-container"
  animate={{
    y: [0, -20, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <img src={profile} alt="Akshar" className="profile-img" />
</motion.div>
</div>

  </div>
</section>

{/* About Section */}
<section id="about" className="about">
  <h2>About Me</h2>

  <div className="about-container">
    <div className="about-text">
      <p>
        Hi, I'm <span>Akshar Baraiya</span>, a passionate Frontend Developer
        with a strong interest in creating modern, responsive, and user-friendly
        web applications.
      </p>

      <p>
        I specialize in React.js, JavaScript, HTML, CSS, and UI/UX design.
        I enjoy transforming ideas into interactive digital experiences that
        are both visually appealing and highly functional.
      </p>

      <p>
        Currently, I am continuously improving my skills by building real-world
        projects and exploring new web technologies.
      </p>
    </div>

    <div className="about-info">
      <div className="info-card">
        <h3>Experience</h3>
        <p>Frontend Projects & Freelance Learning</p>
      </div>

      <div className="info-card">
        <h3>Education</h3>
        <p>B.tech Student</p>
      </div>

      <div className="info-card">
        <h3>Location</h3>
        <p>Bhavnagar, Gujarat</p>
      </div>

      <div className="info-card">
        <h3>Focus</h3>
        <p>React, UI Design & Web Development</p>
      </div>
    </div>
  </div>
</section>

{/* Skills Section */}
<section id="skills" className="skills">

  <h2>My Skills</h2>

  <div className="skills-grid">

    <div className="skill-card">
<h3>🌐 HTML</h3>
    </div>

    <div className="skill-card">
      <h3>🎨 CSS</h3>
    </div>

    <div className="skill-card">
      <h3>⚡ JavaScript</h3>
    </div>

    <div className="skill-card">
      <h3>⚛️ React JS</h3>
    </div>

    <div className="skill-card">
      <h3>🎬 Framer Motion</h3>
    </div>

    <div className="skill-card">
      <h3>🖌️ UI/UX Design</h3>
    </div>

    <div className="skill-card">
      <h3>🔧 Web Development</h3>
    </div>
    
    <div className="skill-card">
      <h3>PHP</h3>
    </div>

    <div className="skill-card">
      <h3>MySQL</h3>
    </div>

    <div className="skill-card">
      <h3>🔍 SEO Basics</h3>
    </div>

    <div className="skill-card">
      <h3>Python</h3>
    </div>
    <div className="skill-card">
      <h3>🐙 Git & GitHub</h3>
    </div>

  </div>

</section>

{/* Projects Section */}
<section id="projects" className="projects">

  <h2>Projects</h2>

  <div className="project-grid">

    <div className="project-card">
      <h3>Student Registration System</h3>
      <p>PHP + MySQL based student management project.</p>
    </div>

    <div className="project-card">
      <h3>E-Commerce Store</h3>
      <p>Modern shopping website with cart functionality.</p>
    </div>

    <div className="project-card">
      <h3>Portfolio Website</h3>
      <p>Animated React portfolio using Framer Motion.</p>
    </div>

    <div className="project-card">
      <h3>pomodoro-timer</h3>
      <p>Simple Pomodoro timer application built with React.</p>
    </div>

  </div>

</section>

{/* Contact Section */}
<section id="contact" className="contact">

  <h2>Contact Me</h2>

  <p>Let's work together and create something amazing.</p>

  <div className="contact-info">
    <a href="mailto:aksharbaraiya6@gmail.com">📧 Email</a>
    <a href="https://github.com/" target="_blank">🐙 GitHub</a>
    <a href="https://linkedin.com/" target="_blank">💼 LinkedIn</a>
  </div>

</section>

{/* Footer */}
<footer className="footer">
  <div className="footer-container">

    <div className="footer-about">
      <h3>Akshar Baraiya</h3>
      <p>
        Frontend Developer passionate about building modern,
        responsive and interactive web experiences.
      </p>
    </div>

    <div className="footer-links">
      <h3>Quick Links</h3>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>

    <div className="footer-contact">
      <h3>Contact</h3>
      <p>📧 aksharbaraiya6@gmail.com</p>
      <p>📍 Bhavnagar, Gujarat</p>
    </div>

  </div>

  <div className="footer-bottom">
    © 2026 Akshar Baraiya. All Rights Reserved.
  </div>
</footer>
</>
 
 
  );
}

export default App;