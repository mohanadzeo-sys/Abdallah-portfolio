import "./Brands.css";

import garak from "../../assets/Garak.webp";
import ajMedical from "../../assets/AJ Medical.jpg";
import cairoBPandel from "../../assets/Cairo b panel.jpg";
import dletaPyramids from "../../assets/Delta Pyramids.jpg";
import elRslani from "../../assets/El Raslani.jpg";
import ironMasry from "../../assets/Iron Masry.jpg";


const brands = [
  { name: "Garak", logo: garak },
  { name: "AjMedical", logo: ajMedical },
  { name: "CairoBPandel", logo: cairoBPandel },
  { name: "DletaPyramids", logo: dletaPyramids  },
  { name: "ElRslani", logo: elRslani },
  { name: "IronMasry", logo: ironMasry },
];

function Brands({ variant = "default" }) {
  // Duplicate the list so the loop is seamless
  const loop = [...brands, ...brands];

  return (
    <section className={`brands brands--${variant}`}>
      <h2 className="brands-title">Brands I've worked with</h2>

      <div className="brands-slider">
        <div className="brands-track">
          {loop.map((brand, i) => (
            <div className="brand-item" key={i}>
              <img
                src={brand.logo}
                alt={brand.name}
                loading="lazy"
                aria-hidden={i >= brands.length}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;