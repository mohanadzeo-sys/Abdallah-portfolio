import "./About.css";

export default function About() {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-intro">
          <h2>About Me</h2>
          <p>
            I am <strong>Abdullah Gamal</strong>, a Content Creator and Digital
            Marketing Specialist passionate about transforming creative ideas
            into high-performing short-form video content (Reels & Shorts) that
            captures attention and builds authentic brand connections.
          </p>
          <p>
            I focus on understanding the audience, perfecting every second from
            the hook to the call-to-action, and refining strategies based on
            analytics.
          </p>
        </div>

        <ul className="about-stats">
          <li>
            <strong>+13k</strong>
            <span>followers gained</span>
          </li>
          <li>
            <strong>+75%</strong>
            <span>more leads</span>
          </li>
          <li>
            <strong>+60%</strong>
            <span>sales growth</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
