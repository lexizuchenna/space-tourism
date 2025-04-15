import { Fragment, useState } from "react";

import { DATA } from "../constants";
import { Technology as Tech } from "../types";

function Technology() {
  const techbologies = DATA.technology;
  const [data, setData] = useState<Tech>(techbologies[0]);

  const handleTab = (data: Tech) => setData(data);
  return (
    <Fragment>
      <main className="technology">
        <div className="contents">
          <h3>
            <span>03</span> space launch 101
          </h3>
          <div className="main-content">
            <div className="text-content">
              <div
                className="tabs"
                style={{
                  flexDirection: "column",
                  marginBottom: 0,
                  justifyContent: "space-between",
                }}
              >
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
                <h2
                  style={{
                    fontFamily: "var(--font-main)",
                    fontWeight: 400,
                    fontSize: "32px",
                    marginBottom: "16px",
                    opacity: "50.42%",
                    textTransform: "uppercase",
                  }}
                >
                  The terminology...
                </h2>
                <h1
                  style={{
                    fontFamily: "var(--font-main)",
                    fontWeight: 400,
                    textTransform: "uppercase",
                    fontSize: "56px",
                  }}
                >
                  {data.name}
                </h1>
                <p
                  className="desc"
                  style={{
                    marginTop: "24px",
                    fontFamily: "var(--font-sub1)",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "180%",
                  }}
                >
                  {data.description}
                </p>
              </div>
            </div>
            <div className="image" style={{ width: "450px" }}>
              <img
                style={{ width: "100%" }}
                src={data.images.portrait}
                alt="image-launch-vehicle-portrait"
              />
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Technology;
