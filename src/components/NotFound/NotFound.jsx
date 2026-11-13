import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found-container">
        <span className="not-found-code">404</span>
        <h1>Page not found</h1>
        <p>
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <Link to="/" className="not-found-btn">
          Back to Home
        </Link>
      </div>
    </section>
  );
}