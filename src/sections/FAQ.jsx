import Section from "../components/Section";
import Heading from "../components/Heading";

const faqs = [
  {
    q: "How long to deliver an MVP?",
    a: "Discovery in 1–2 weeks, MVP in 4–6 weeks depending on scope.",
  },
  {
    q: "What stacks do you use?",
    a: "OpenAI/Anthropic models, Vercel/Vite/React, Node/Python, Postgres/Vector DBs, plus Slack/Notion/CRM integrations.",
  },
  {
    q: "How do you handle data security?",
    a: "We follow least-privilege access, store secrets securely, and can deploy to your cloud when required.",
  },
  { q: "Who owns the IP?", a: "You do. We transfer all deliverables at project completion." },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. Retainers for monitoring, improvements, and new features.",
  },
];

const FAQ = () => (
  <Section id="faq">
    <div className="container">
      <Heading title="FAQ" text="Answers to common questions about working together" />
      <div className="grid gap-6 md:grid-cols-2">
        {faqs.map((item, i) => (
          <div key={i} className="p-6 rounded-2xl bg-n-8 border border-white/10">
            <h4 className="h6 mb-2">{item.q}</h4>
            <p className="body-2 text-n-3">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default FAQ;

