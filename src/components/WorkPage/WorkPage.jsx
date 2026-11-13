import { projects } from "../../data/projects.jsx";
import "./WorkPage.css";

const focusAreas = [
  "Brand awareness",
  "Sales campaigns",
  "Seasonal offers",
  "B2B authority",
];

function ProjectCard({ project }) {
  const {
    name,
    industry,
    goal,
    format,
    problem,
    approach,
    result,
    metrics,
    featured,
  } = project;

  return (
    <article
      className={`project-card ${featured ? "project-card--featured" : ""}`}
    >
      <div className="project-top">
        <span className="project-tag">{industry}</span>
        <span className="project-goal">{goal}</span>
      </div>

      <h3>
        {name}
        {featured && <span className="project-badge">Featured</span>}
      </h3>
      {format && <p className="project-format">{format}</p>}

      <div className="project-block">
        <h4>Problem</h4>
        <p>{problem}</p>
      </div>
      <div className="project-block">
        <h4>How I handled it</h4>
        <p>{approach}</p>
      </div>
      <div className="project-block project-result">
        <h4>Result</h4>
        <p>{result}</p>

        {metrics && (
          <ul className="project-metrics">
            {metrics.map((m) => (
              <li key={m.label}>
                <strong>{m.value}</strong>
                <span>{m.label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
export default function WorkPage() {
  const industries = new Set(projects.map((p) => p.industry)).size;

  return (
    <section id="work" className="work">
      <div className="work-container">
        <header className="work-overview">
          <span className="work-eyebrow">Selected Work</span>
          <h1>Content strategies that turn attention into customers</h1>
          <p>
            Every brand has a different problem. For each project below I start
            with who the audience is and what stops them from buying, then build
            a content plan of reels and carousels around that.
          </p>

          <ul className="work-stats">
            <li>
              <strong>{projects.length}</strong>
              <span>Brands</span>
            </li>
            <li>
              <strong>{industries}</strong>
              <span>Industries</span>
            </li>
          </ul>

          <ul className="work-focus">
            {focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </header>

        <div className="work-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
