import { Fragment, useState } from "react";

import { DATA } from "../constants";
import { Crew } from "../types";
import Navbar from "../components/Navbar";

function Crews() {
  const crews = DATA.crew;
  const [data, setData] = useState<Crew>(crews[0]);

  const handleTab = (data: Crew) => setData(data);
  return (
    <main className="crew">
      <Navbar />
      <div className="contents">
        <h3>
          <span>02</span> meet your crew
        </h3>
        <div className="main-content">
          <div className="text-content">
            <div>
              <h2>Commander</h2>
              <h1>{data.name}</h1>
              <p className="desc">{data.bio}</p>
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
          <div className="image">
            <img
              style={{ width: "330px" }}
              src={data.images.png}
              alt={data.name}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Crews;
