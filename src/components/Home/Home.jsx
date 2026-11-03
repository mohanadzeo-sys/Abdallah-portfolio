import "./Home.css";
import image from "../../assets/Abdullah photo.jfif";
export default function Home() {
  return (
    <>
      <section id="home">
        <div className="home-container">
          <div className="home-left">
            <p>Abdullah Gamal</p>
            <h1 className="job-title">Content Creator</h1>
          </div>
          <div className="img">
            <img src={image} alt="Abdullah photo" />
          </div>
          <div className="home-right">
            <p className="job-title">Digital Marketing Specialist</p>
            <p>I grow brands with content people actually watch</p>
          </div>
        </div>
      </section>
    </>
  );
}
