import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { services } from "../../data/services";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section id="services">
      <div className="services-container">
        <div className="services-header">
          <h2>My Services</h2>
          <p>
            Everything you need to turn your social media into a growth channel,
            from the plan to the finished video.
          </p>
        </div>

        <div className="services-grid">
          {services.map(({ id, title, description, icon }) => (
            <article className="service" key={id}>
              <div className="service-top">
                <span className="service-icon">
                  <FontAwesomeIcon icon={icon} />
                </span>
                <span className="service-number">
                  {String(id).padStart(2, "0")}
                </span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <Link to={"/services"} className="services-cta">
          Let’s talk
        </Link>
      </div>
    </section>
  );
}
