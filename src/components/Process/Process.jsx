import "./Process.css";

const steps = [
  {
    title: "Discover",
    text: "We talk about your brand, your audience, and what you want to achieve.",
  },
  {
    title: "Plan",
    text: "I build the content strategy and framework that fits your goals.",
  },
  {
    title: "Create",
    text: "Hooks, scripts, filming, and editing for videos made to hold attention.",
  },
  {
    title: "Grow",
    text: "We publish, track the analytics, and keep improving what works.",
  },
];

export default function Process() {
  return (
    <section className="process">
      <div className="process-container">
        <h2>How I Work</h2>
        <ul className="process-list">
          {steps.map(({ title, text }, index) => (
            <li className="process-step" key={title}>
              <span className="process-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
