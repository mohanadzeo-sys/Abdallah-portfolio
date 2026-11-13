import "./Faq.css";

const faqs = [
  {
    question: "What do you need from me to get started?",
    answer:
      "Your goals, a short description of your audience, and examples of brands or videos you like. We'll cover the rest in a first conversation.",
  },
  {
    question: "Which platforms do you work on?",
    answer:
      "Mainly short-form video: Instagram Reels, TikTok, and YouTube Shorts.",
  },
  {
    question: "Can we start with a single project?",
    answer:
      "Yes. You can start with one service or one project and expand if it works for you.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "It depends on where your account is today and how often you post. We track the numbers from the start so you can see what is working.",
  },
];

export default function Faq() {
  return (
    <section className="faq">
      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map(({ question, answer }) => (
            <details className="faq-item" key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
