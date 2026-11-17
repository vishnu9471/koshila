
import { Link } from "react-router-dom";
import {
  MapPin,
  ArrowUpRight,
  Code2,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-grid">

          <div className="footer-brand">
            <Link to="/" className="brand footer-logo">
              <span className="brand-icon">K</span>
              <span className="brand-text">
                <strong>KOSHILA</strong>
                <small>SOLUTION</small>
              </span>
            </Link>

            <p>
              Turning Ideas Into Powerful Digital Solutions.
              We specialize in software development, web
              applications and digital solutions that empower
              businesses to grow.
            </p>

            <div className="footer-socials">
              <a
                href="https://www.linkedin.com/in/vishnu-kant-pandey-8332a9297/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                in
              </a>

              <a
                href="https://www.instagram.com/is_that_vishnu/?hl=en"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                IG
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <a href="#about">About Us</a>
            <a href="#services">Our Services</a>
            <a href="#products">Our Products</a>
            <a href="#contact">Contact Us</a>
          </div>

          <div className="footer-column">
            <h3>Our Services</h3>
            <a href="#services">Software Development</a>
            <a href="#services">Web Applications</a>
            <a href="#services">Website Development</a>
            <a href="#services">UI/UX Design</a>
            <a href="#services">Digital Marketing</a>
            <a href="#services">E-commerce Solutions</a>
          </div>

          <div className="footer-column footer-location">
            <h3>Our Location</h3>

            <div className="footer-address">
              <MapPin size={21} />
              <p>
                Koshila, Gaya,
                <br />
                Bihar, India
                <br />
                PIN Code: 824231
              </p>
            </div>

            <a href="#contact" className="footer-project-link">
              Start a Project <ArrowUpRight size={17} />
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Koshila Solution Pvt. Ltd.
            All Rights Reserved.
          </p>

          <p>
            <Code2 size={15} />
            Designed with innovation in mind.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;









