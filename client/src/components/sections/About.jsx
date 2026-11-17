
import { ArrowUpRight, Target, Eye, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">

        <div className="about-visual">
          <div className="about-visual-main">
            <div className="about-symbol">K.</div>
            <span>IDEAS. TECHNOLOGY. GROWTH.</span>
            <h3>Building Digital Experiences That Matter.</h3>
          </div>

          <div className="about-stat">
            <Lightbulb size={28} />
            <strong>Innovation</strong>
            <span>Driven by ideas</span>
          </div>
        </div>

        <div className="about-content">
          <p className="section-label">ABOUT KOSHILA</p>

          <h2 className="section-title">
            Technology That Moves Your Business Forward.
          </h2>

          <p className="section-description">
            Koshila Solution Pvt. Ltd. is focused on developing
            modern software products, web applications and
            digital solutions that address real business needs.
          </p>

          <p className="section-description about-second">
            We believe technology should make businesses more
            efficient, connected and prepared for the future.
            Our approach combines practical development,
            creative thinking and a commitment to quality.
          </p>

          <div className="about-values">
            <div>
              <Target />
              <div>
                <h3>Our Mission</h3>
                <p>
                  To turn ideas into reliable digital solutions
                  that create meaningful business value.
                </p>
              </div>
            </div>

            <div>
              <Eye />
              <div>
                <h3>Our Vision</h3>
                <p>
                  To contribute to a digitally empowered future
                  through innovation and technology.
                </p>
              </div>
            </div>
          </div>

          <a href="#contact" className="about-link">
            Let's Build Something Together
            <ArrowUpRight size={19} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;




