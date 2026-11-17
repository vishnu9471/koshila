
import {
  Building2,
  PanelsTopLeft,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

import { products } from "../../data/siteData";

const icons = {
  Building2,
  PanelsTopLeft,
  Rocket,
};

const Products = () => {
  return (
    <section className="section products-section" id="products">
      <div className="container">

        <div className="products-heading">
          <p className="section-label">OUR DIGITAL SOLUTIONS</p>

          <h2 className="section-title">
            Ideas Into Products.
            <span> Technology Into Possibilities.</span>
          </h2>

          <p>
            We focus on building useful digital products and
            technology platforms that help solve practical
            business challenges.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => {
            const Icon = icons[product.icon];

            return (
              <article className="product-card" key={product.number}>
                <div className="product-number">
                  {product.number}
                </div>

                <div className="product-icon">
                  <Icon size={34} />
                </div>

                <span>{product.category}</span>
                <h3>{product.title}</h3>
                <p>{product.description}</p>

                <a href="#contact">
                  Discuss Your Idea <ArrowUpRight size={18} />
                </a>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Products;



