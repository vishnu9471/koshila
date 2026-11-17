
import {
  Code, Globe, Monitor, Palette,
  TrendingUp, ShoppingCart, ArrowUpRight
} from "lucide-react";

import { services } from "../../data/siteData";

const icons = {
  Code,
  Globe,
  Monitor,
  Palette,
  TrendingUp,
  ShoppingCart,
};

const Services = () => {
  return (
    <section className="section services-section" id="services">
      <div className="container">

        <div className="section-heading">
          <div>
            <p className="section-label">WHAT WE DO</p>
            <h2 className="section-title">
              Our Technology & Digital Services
            </h2>
          </div>

          <p className="section-description">
            From software development to digital marketing,
            we provide solutions designed to help businesses
            establish, improve and grow their digital presence.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = icons[service.icon];

            return (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span>{service.number}</span>
                  <div className="service-icon">
                    <Icon size={27} />
                  </div>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <a href="#contact" aria-label={`Enquire about ${service.title}`}>
                  Explore Service <ArrowUpRight size={18} />
                </a>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;



