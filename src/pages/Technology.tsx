import { useState } from "react";

import { DATA } from "../constants";
import { Technology as Tech } from "../types";
import Navbar from "../components/Navbar";

function Technology() {
  const techbologies = DATA.technology;
  const [data, setData] = useState<Tech>(techbologies[0]);

  const handleTab = (data: Tech) => setData(data);

  const media = window.matchMedia("(max-width: 768px)");
  const media2 = window.matchMedia("(max-width: 430px)");

  const [isTablet, setIsTablet] = useState(media.matches);
  const [isMobile, setIsMobile] = useState(media2.matches);

  media.addEventListener("change", (e) => setIsTablet(e.matches));
  media2.addEventListener("change", (e) => setIsMobile(e.matches));

  console.log(isMobile && isTablet);

  return (
    <main className="technology">
      <Navbar />
      <div className="contents">
        <h3>
          <span>03</span> space launch 101
        </h3>
        <div className="main-content">
          <div className="text-content">
            <div className="tabs">
              {techbologies.map((tech, index) => (
                <button
                  key={tech.name}
                  className={`tab ${tech.name === data.name ? "active" : ""}`}
                  type="button"
                  onClick={() => handleTab(tech)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div>
              <h2>The terminology...</h2>
              <h1>{data.name}</h1>
              <p className="desc">{data.description}</p>
            </div>
          </div>
          <div className="image">
            <img
              src={
                isMobile === false && isTablet === true
                  ? data.images.landscape
                  : data.images.portrait
              }
              alt="image-launch-vehicle"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Technology;
