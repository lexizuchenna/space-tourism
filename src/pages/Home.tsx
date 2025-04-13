import { Fragment } from "react";

function Home() {
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

export default Home;
