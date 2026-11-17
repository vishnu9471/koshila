


import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation } from "../../data/siteData";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Official Company Logo */}
        <a
          href="#home"
          className="brand"
          onClick={closeMenu}
          aria-label="Koshila Solution - Home"
        >
          <img
            src="/koshila-favicon.png"
            alt="Koshila Solution Pvt. Ltd."
            className="brand-logo"
          />
        </a>

        {/* Desktop and Mobile Navigation */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            className="mobile-contact"
            onClick={closeMenu}
          >
            Let's Talk <ArrowUpRight size={17} />
          </a>
        </nav>

        {/* Let's Talk Button */}
        <a href="#contact" className="nav-cta">
          Let's Talk <ArrowUpRight size={17} />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>

      </div>
    </header>
  );
};

export default Navbar;



