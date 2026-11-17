


import { MapPin, ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Our Services", id: "services" },
    { name: "Our Products", id: "products" },
    { name: "Contact Us", id: "contact" },
  ];

  const services = [
    { name: "Software Development", id: "software-development" },
    { name: "Web Application Development", id: "web-application-development" },
    { name: "Website Development", id: "website-development" },
    { name: "UI/UX Design", id: "ui-ux-design" },
    { name: "Digital Marketing", id: "digital-marketing" },
    { name: "E-commerce Solutions", id: "ecommerce-solutions" },
  ];

  // Smooth scroll to the selected section
  const handleScroll = (e, id) => {
    e.preventDefault();

    const target = document.getElementById(id);

    if (target) {
      const headerOffset = 90;

      const elementPosition =
        target.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: "smooth",
      });

      // Update URL hash without reloading the page
      window.history.replaceState(null, "", `#${id}`);
    } else {
      console.warn(`Section with id "${id}" was not found.`);
    }
  };

  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .koshila-footer {
          width: 100%;
          background: #071827;
          color: #ffffff;
          padding: 70px 0 25px;
          font-family: inherit;
          box-sizing: border-box;
          overflow: hidden;
        }

        .koshila-footer *,
        .koshila-footer *::before,
        .koshila-footer *::after {
          box-sizing: border-box;
        }

        .koshila-footer-container {
          width: 100%;
          max-width: 1530px;
          margin: 0 auto;
          padding: 0 35px;
        }

        .koshila-footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1.2fr 1fr;
          gap: 40px;
          padding-bottom: 50px;
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }

        .koshila-footer-logo {
          display: inline-block;
          color: #ffffff;
          font-size: 29px;
          font-weight: 800;
          letter-spacing: -1px;
          text-decoration: none;
        }

        .koshila-footer-logo span {
          color: #60a5fa;
        }

        .koshila-footer-description {
          max-width: 370px;
          margin: 18px 0 0;
          color: #aab8c7;
          font-size: 14px;
          line-height: 1.9;
        }

        .koshila-footer-socials {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-top: 24px;
        }

        .koshila-footer-socials a {
          width: 43px;
          height: 43px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: rgba(255,255,255,0.09);
          color: #ffffff;
          font-size: 19px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .koshila-footer-socials a:hover {
          background: #2563eb;
          transform: translateY(-4px);
        }

        .koshila-footer-socials a:last-child:hover {
          background: #d9468f;
        }

        .koshila-footer-heading {
          position: relative;
          display: inline-block;
          margin: 0 0 25px;
          color: #ffffff;
          font-size: 18px;
          font-weight: 700;
        }

        .koshila-footer-heading::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -9px;
          width: 32px;
          height: 2px;
          border-radius: 5px;
          background: #60a5fa;
        }

        .koshila-footer-list {
          display: flex;
          flex-direction: column;
          gap: 13px;
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .koshila-footer-list a {
          display: inline-block;
          color: #aab8c7;
          font-size: 14px;
          line-height: 1.6;
          text-decoration: none;
          transition: all 0.25s ease;
          cursor: pointer;
        }

        .koshila-footer-list a:hover {
          color: #60a5fa;
          transform: translateX(5px);
        }

        .koshila-footer-address {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: #aab8c7;
          font-size: 14px;
          line-height: 1.9;
        }

        .koshila-footer-address p {
          margin: 0;
        }

        .koshila-footer-map-icon {
          flex-shrink: 0;
          margin-top: 4px;
          color: #60a5fa;
        }

        .koshila-footer-project {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 17px;
          color: #60a5fa;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .koshila-footer-project:hover {
          color: #bfdbfe;
          gap: 13px;
        }

        .koshila-footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
          padding-top: 25px;
        }

        .koshila-footer-bottom p {
          margin: 0;
          color: #8192a4;
          font-size: 12px;
          line-height: 1.7;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .koshila-footer-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 40px 30px;
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .koshila-footer {
            padding: 50px 0 22px;
          }

          .koshila-footer-container {
            padding: 0 22px;
          }

          .koshila-footer-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 32px;
            padding-bottom: 35px;
          }

          .koshila-footer-logo {
            font-size: 26px;
          }

          .koshila-footer-description {
            max-width: 100%;
            font-size: 13px;
          }

          .koshila-footer-heading {
            font-size: 17px;
          }

          .koshila-footer-list a {
            font-size: 13px;
          }

          .koshila-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            padding-top: 20px;
          }
        }

        @media (max-width: 360px) {
          .koshila-footer-container {
            padding: 0 16px;
          }
        }
      `}</style>

      <footer className="koshila-footer">
        <div className="koshila-footer-container">

          <div className="koshila-footer-grid">

            {/* Company Information */}
            <div>
              <a
                href="#home"
                onClick={(e) => handleScroll(e, "home")}
                className="koshila-footer-logo"
              >
                KOSHILA<span>.</span>
              </a>

              <p className="koshila-footer-description">
                Turning Ideas Into Powerful Digital Solutions.
                We specialize in software development, web applications,
                and digital solutions that empower businesses to grow.
              </p>

              {/* Social Media */}
              <div className="koshila-footer-socials">
                <a
                  href="https://www.linkedin.com/in/vishnu-kant-pandey-8332a9297/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://www.instagram.com/is_that_vishnu/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="koshila-footer-heading">
                Quick Links
              </h3>

              <ul className="koshila-footer-list">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleScroll(e, link.id)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="koshila-footer-heading">
                Our Services
              </h3>

              <ul className="koshila-footer-list">
                {services.map((service) => (
                  <li key={service.id}>
                    <a
                      href={`#${service.id}`}
                      onClick={(e) => handleScroll(e, service.id)}
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location */}
            <div>
              <h3 className="koshila-footer-heading">
                Our Location
              </h3>

              <div className="koshila-footer-address">
                <MapPin
                  size={21}
                  className="koshila-footer-map-icon"
                />

                <p>
                  Koshila, Gaya,
                  <br />
                  Bihar, India
                  <br />
                  PIN Code: 824231
                </p>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Koshila%2C+Gaya%2C+Bihar%2C+India+824231"
                target="_blank"
                rel="noopener noreferrer"
                className="koshila-footer-project"
              >
                View Location
                <ArrowUpRight size={17} />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "contact")}
                className="koshila-footer-project"
              >
                Start a Project
                <ArrowUpRight size={17} />
              </a>
            </div>

          </div>

          {/* Copyright */}
          <div className="koshila-footer-bottom">
            <p>
              © {new Date().getFullYear()} Koshila Solution Pvt. Ltd.
              All Rights Reserved.
            </p>

            <p>
              Designed with innovation in mind.
            </p>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;


