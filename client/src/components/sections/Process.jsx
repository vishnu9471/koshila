
import {
  Search,
  ClipboardList,
  Code2,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

import { processSteps } from "../../data/siteData";

const icons = [
  Search,
  ClipboardList,
  Code2,
  CheckCircle2,
  TrendingUp,
];

const Process = () => {
  return (
    <section className="section process-section" id="process">
      <div className="container">

        <div className="process-heading">
          <p className="section-label">HOW WE WORK</p>

          <h2 className="section-title">
            From Your Idea to a Digital Solution.
          </h2>

          <p>
            A structured development process helps us
            transform your requirements into working solutions.
          </p>
        </div>

        <div className="process-grid">
          {processSteps.map((step, index) => {
            const Icon = icons[index];

            return (
              <article className="process-card" key={step.number}>
                <div className="process-icon">
                  <Icon size={25} />
                </div>

                <span className="process-number">{step.number}</span>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Process;





