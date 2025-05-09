import { Fragment, useState } from "react";

import { DATA } from "../constants";
import { Desination } from "../types";
import Navbar from "../components/Navbar";

function Destination() {
  const destinations = DATA.destinations;
  const [data, setData] = useState<Desination>(destinations[0]);

  const handleTab = (data: Desination) => setData(data);

  const infos = [
    { name: "AVG. DISTANCE", value: data.distance },
    { name: "EST. TRAVEL TIME", value: data.travel },
  ];

  return (
    <main className="destination">
      <Navbar />
      <div className="contents">
        <h3>
          <span>01</span> Pick your destination
        </h3>
        <div className="main-content">
          <div className="image">
            <img src={data.images.webp} alt={data.name} />
          </div>
          <div className="text-content">
            <div className="tabs">
              {destinations.map((d) => (
                <button
                  key={d.name}
                  className={`tab ${d.name === data.name && "active"}`}
                  type="button"
                  onClick={() => handleTab(d)}
                >
                  {d.name}
                </button>
              ))}
            </div>
            <h1>{data.name}</h1>
            <p className="desc">{data.description}</p>
            <img
              src="/assets/destination/line.png"
              alt=""
              style={{ margin: "40px 0" }}
            />
            <div className="infos">
              {infos.map(({ name, value }) => (
                <div className="info" key={name}>
                  <h4>{name}</h4>
                  <p>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Destination;
