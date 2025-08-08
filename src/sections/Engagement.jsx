import Section from "../components/Section";
import Heading from "../components/Heading";
import Button from "../components/Button";
import { check } from "../assets";

const models = [
  {
    title: "Discovery Sprint",
    description: "1–2 weeks to align on goals, validate opportunities, and produce a delivery plan.",
    bullets: [
      "Workshops & stakeholder interviews",
      "Problem framing and success metrics",
      "Tech options, architecture, and roadmap",
    ],
  },
  {
    title: "Fixed Scope Project",
    description: "We design, build, and ship an agreed scope with clear timelines and milestones.",
    bullets: [
      "Weekly demos and progress reports",
      "Staging environment & QA",
      "Deployment and handover",
    ],
  },
  {
    title: "Ongoing Retainer",
    description: "Continuous improvements, monitoring, and new feature delivery.",
    bullets: [
      "Monthly roadmap and priorities",
      "Uptime, evals, and analytics",
      "On-call support and training",
    ],
  },
];

const Engagement = () => (
  <Section id="engagement">
    <div className="container">
      <Heading title="Engagement Models" text="Choose the collaboration style that fits your goals and stage." />
      <div className="grid gap-6 md:grid-cols-3">
        {models.map((m, i) => (
          <div key={i} className="p-6 bg-n-8 border border-white/10 rounded-2xl flex flex-col">
            <h4 className="h4 mb-2">{m.title}</h4>
            <p className="body-2 text-n-3 mb-4">{m.description}</p>
            <ul className="mb-6">
              {m.bullets.map((b, j) => (
                <li key={j} className="flex items-start py-2 border-t border-n-6 first:border-t-0">
                  <img src={check} width={18} height={18} alt="check" />
                  <p className="body-2 ml-3">{b}</p>
                </li>
              ))}
            </ul>
            <Button href="#contact" className="mt-auto w-full" white>
              Get proposal
            </Button>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default Engagement;

