import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload, FiMail, FiCode } from 'react-icons/fi';

const titles = ["React Developer", "Frontend Developer", "AI Enthusiast", "Problem Solver"];

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const canvasRef = useRef(null);

  useEffect(() => {
    let timer;
    const handleType = () => {
      const i = loopNum % titles.length;
      const fullWord = titles[i];

      if (isDeleting) {
        setText(fullWord.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(fullWord.substring(0, text.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && text === fullWord) {
        timer = setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    if (!(text === titles[loopNum % titles.length] && !isDeleting)) {
      timer = setTimeout(handleType, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  // Particle background logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const particleCount = Math.min(60, Math.floor((width * height) / 25000));

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > width) this.x = 0;
        else if (this.x < 0) this.x = width;

        if (this.y > height) this.y = 0;
        else if (this.y < 0) this.y = height;
      }
      draw() {
        ctx.fillStyle = 'rgba(124, 58, 237, 0.25)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (canvas) {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <canvas ref={canvasRef} className="hero-canvas" />
      
      <div className="container hero-container">
        <div className="hero-content">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-welcome"
          >
            Hello, I'm
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hero-name"
          >
            Thalapula Chitra
          </motion.h1>
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-title"
          >
            B.Tech CSE Student | Aspiring Software Developer
          </motion.h3>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hero-typing-container"
          >
            <span className="hero-typing-label">A passionate </span>
            <span className="hero-typing-text">{text}</span>
            <span className="typing-cursor"></span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hero-description"
          >
            Passionate first-year B.Tech CSE student focused on building scalable web applications, learning AI technologies, and solving real-world problems through technology. Seeking software engineering and web development internships to contribute to real-world codebases.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="hero-actions"
          >
            <button onClick={() => handleScrollTo('projects')} className="btn btn-primary">
              <FiCode /> View Projects
            </button>
            <button onClick={() => handleScrollTo('resume')} className="btn btn-secondary">
              <FiDownload /> Download Resume
            </button>
            <button onClick={() => handleScrollTo('contact')} className="btn btn-outline">
              <FiMail /> Contact Me
            </button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hero-graphic"
        >
          <div className="avatar-frame">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="avatar-svg">
              <defs>
                <clipPath id="avatar-clip">
                  <path d="M 0,100 C 0,30 30,0 100,0 C 170,0 200,30 200,100 C 200,170 170,200 100,200 C 30,200 0,170 0,100 Z" />
                </clipPath>
              </defs>
              <g clipPath="url(#avatar-clip)">
                <rect x="0" y="0" width="200" height="200" fill="var(--bg-tertiary)" />
                {/* Tech vector/schematic art */}
                <circle cx="100" cy="85" r="30" fill="none" stroke="var(--color-purple)" strokeWidth="3" />
                <path d="M 65,145 C 65,115 135,115 135,145" fill="none" stroke="var(--color-navy)" strokeWidth="3" />
                <line x1="100" y1="25" x2="100" y2="45" stroke="var(--color-purple)" strokeWidth="2" strokeDasharray="3,3" />
                <line x1="25" y1="100" x2="45" y2="100" stroke="var(--color-purple)" strokeWidth="2" strokeDasharray="3,3" />
                <line x1="155" y1="100" x2="175" y2="100" stroke="var(--color-purple)" strokeWidth="2" strokeDasharray="3,3" />
                <circle cx="100" cy="85" r="8" fill="var(--color-purple)" />
                <circle cx="100" cy="85" r="18" fill="none" stroke="var(--color-purple)" strokeWidth="1" strokeDasharray="2,2" />
              </g>
            </svg>
          </div>
        </motion.div>
      </div>

      <div className="hero-scroll-indicator" onClick={() => handleScrollTo('about')}>
        <span>Scroll Down</span>
        <FiArrowDown className="scroll-arrow" />
      </div>
    </section>
  );
};

export default Hero;
