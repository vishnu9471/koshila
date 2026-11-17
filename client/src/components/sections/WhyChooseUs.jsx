
import {
  ShieldCheck,
  Lightbulb,
  Users,
  Zap,
  Code2,
  Headphones,
} from "lucide-react";

const reasons = [
  {
    icon: Code2,
    title: "Software Development Focus",
    description:
      "Our core focus is creating functional, scalable and reliable software solutions.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    description:
      "We approach business challenges with fresh ideas and practical technology.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Focused",
    description:
      "We value clean development, testing and dependable digital experiences.",
  },
  {
    icon: Zap,
    title: "Modern Technology",
    description:
      "We use modern development approaches to create adaptable digital solutions.",
  },
  {
    icon: Users,
    title: "Business Understanding",
    description:
      "We consider your business objectives when planning and building solutions.",
  },
  {
    icon: Headphones,
    title: "Long-Term Support",
    description:
      "We believe digital products should continue evolving with business needs.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section why-section">
      <div className="container">

        <div className="why-heading">
          <p className="section-label">WHY KOSHILA</p>

          <h2 className="section-title">
            A Technology Partner Focused on Your Growth.
          </h2>

          <p className="section-description">
            We combine software development expertise,
            creative problem-solving and a business-first
            approach to deliver meaningful digital solutions.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <article className="why-card" key={item.title}>
                <div className="why-icon">
                  <Icon size={27} />
                </div>

                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;



