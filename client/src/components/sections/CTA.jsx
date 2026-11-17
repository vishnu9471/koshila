
import { ArrowUpRight, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container cta-container">

        <div>
          <span>HAVE A PROJECT IN MIND?</span>

          <h2>
            Let's Turn Your Ideas Into Something Powerful.
          </h2>

          <p>
            Whether you need custom software, a web application
            or digital solutions, let's discuss how we can
            bring your vision to life.
          </p>
        </div>

        <div className="cta-actions">
          <a href="#contact" className="cta-button">
            Start Your Project <ArrowUpRight size={20} />
          </a>

          <a href="mailto:info@koshila.com" className="cta-secondary">
            <MessageCircle size={18} /> Get In Touch
          </a>
        </div>

      </div>
    </section>
  );
};

export default CTA;




