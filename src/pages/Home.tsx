import { Fragment } from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <main className="home">
      <Navbar />
      <div className="contents">
        <div className="text-content">
          <h3>So, you want to travel to </h3>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="circle-white">Explore</div>
      </div>
    </main>
  );
}

export default Home;
