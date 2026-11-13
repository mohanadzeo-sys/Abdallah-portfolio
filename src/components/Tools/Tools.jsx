import "./Tools.css";

// Replace with the platforms and tools he actually uses
const tools = [
  "Instagram Reels",
  "TikTok",
  "YouTube Shorts",
  "CapCut",
  "Facebook",
  "Canva",
  "Meta Ads Manager",
];

export default function Tools() {
  return (
    <section className="tools">
      <div className="tools-container">
        <h2>Platforms & Tools</h2>
        <ul className="tools-list">
          {tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
