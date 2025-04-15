import { Fragment, useState } from "react";

import { DATA } from "../constants";
import { Crew } from "../types";

function Crews() {
  const crews = DATA.crew;
  const [data, setData] = useState<Crew>(crews[0]);

  const handleTab = (data: Crew) => setData(data);
  return (
    <Fragment>
      <main className="crew">
        <div className="contents">
          <h3>
            <span>02</span> meet your crew
          </h3>
          <div className="main-content">
            <div className="text-content">
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
                  Commander
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
                  {data.bio}
                </p>
              </div>
              <div className="tabs">
                {crews.map((crew) => (
                  <button
                    key={crew.name}
                    className={`tab ${crew.name === data.name && "active"}`}
                    type="button"
                    title={crew.name}
                    onClick={() => handleTab(crew)}
                  ></button>
                ))}
              </div>
            </div>
            <div className="image" style={{ width: "50%" }}>
              <img
                style={{ width: "330px" }}
                src={data.images.png}
                alt={data.name}
              />
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Crews;
