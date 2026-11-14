import "./About.css";

export default function About() {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-intro">
          <h2>About Me</h2>
          <p>
            I am a <span>Content Creator Digital Marketing</span> |{" "}
            <span>Content Strategy</span> | <span>Creative Production</span>, I
            combine creativity with strategic thinking to create purposeful
            content that connects with the right audience and supports brand
            objectives.
          </p>
          <p>
            From audience research and content strategy development to creative
            ideation, scriptwriting, filming, and video editing, I turn ideas
            into impactful content that builds brand presence and drives
            measurable results.
          </p>
        </div>

        <ul className="about-stats">
          <li>
            <strong>+5M</strong>
            <span> Total Video Views</span>
          </li>
          <li>
            <strong>+14k</strong>
            <span>followers gained</span>
          </li>
          <li>
            <strong>+150</strong>
            <span>Content Pieces Produced</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
