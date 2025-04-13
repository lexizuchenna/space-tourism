import { Fragment } from "react";

{
  /*
  "name": "Moon",
  "images": {
    "png": "./assets/destination/image-moon.png",
    "webp": "./assets/destination/image-moon.webp"
  },
  "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
  "distance": "384,400 km",
  "travel": "3 days"
*/
}

function Destination() {
  return (
    <Fragment>
      <main className="home">
        <div className="contents">
          <div className="text-content" style={{ width: "50%" }}>
            <h3>So, you want to travel to </h3>
            <h2>Space</h2>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="circle-white">Explore</div>
        </div>
      </main>
    </Fragment>
  );
}

export default Destination;
