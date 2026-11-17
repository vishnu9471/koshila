
import {
  Code2,
  Globe2,
  Layers3,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">

        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-dot"></span>
            SOFTWARE DEVELOPMENT & DIGITAL INNOVATION
          </div>

          <h1>
            Turning Ideas Into
            <span> Powerful Digital</span>
            <span>Solutions.</span>
          </h1>

          <p className="hero-description">
            At Koshila Solution Pvt. Ltd., we transform innovative
            ideas into scalable software products, modern web
            applications, and meaningful digital experiences.

            We help businesses innovate, grow, and move forward
            through technology.
          </p>

          <div className="hero-actions">
            <a href="#services" className="primary-button">
              Explore Our Services <ArrowUpRight size={19} />
            </a>

            <a href="#contact" className="secondary-button">
              Start a Project <ArrowUpRight size={19} />
            </a>
          </div>

          <div className="hero-highlights">
            <div>
              <Code2 />
              <strong>Custom Software</strong>
              <small>Built for your needs</small>
            </div>

            <div>
              <Globe2 />
              <strong>Web Applications</strong>
              <small>Modern experiences</small>
            </div>

            <div>
              <Layers3 />
              <strong>Digital Growth</strong>
              <small>Business solutions</small>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orbit orbit-one"></div>
          <div className="hero-orbit orbit-two"></div>
          <div className="hero-orbit orbit-three"></div>

          <div className="hero-glow"></div>

          <div className="hero-tech-circle">
            <div className="hero-tech-inner">
              <Code2 size={75} strokeWidth={1.5} />
            </div>
          </div>

          <div className="floating-card focus-card">
            <Sparkles />
            <div>
              <small>Our Focus</small>
              <strong>Software Innovation</strong>
            </div>
          </div>

          <div className="floating-card approach-card">
            <Globe2 />
            <div>
              <small>Our Approach</small>
              <strong>Technology First</strong>
            </div>
          </div>

          <div className="floating-card growth-card">
            <Layers3 />
            <div>
              <small>Our Mission</small>
              <strong>Digital Growth</strong>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;




