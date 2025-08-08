import Section from "../components/Section";
import Heading from "../components/Heading";
import Button from "../components/Button";

const Contact = () => (
  <Section id="contact">
    <div className="container max-w-3xl">
      <Heading title="Book a discovery call" text="Tell us about your goals. We’ll reply within 1 business day." />
      <form action="https://formspree.io/f/mayvlzye" method="POST" className="grid gap-4">
        <input name="name" required placeholder="Your name" className="p-3 rounded-lg bg-n-8 border border-white/10" />
        <input name="email" type="email" required placeholder="Email" className="p-3 rounded-lg bg-n-8 border border-white/10" />
        <textarea name="message" rows="5" placeholder="What problem are you trying to solve?" className="p-3 rounded-lg bg-n-8 border border-white/10" />
        <Button type="submit" className="w-full">Send</Button>
      </form>
      <div className="mt-6 text-center">
        <a href="https://cal.com/" target="_blank" className="underline">Or schedule via our calendar</a>
      </div>
    </div>
  </Section>
);

export default Contact;

