import { Fragment } from "react/jsx-runtime";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <Fragment>
      <Navbar />
      <main
        style={{
          backgroundImage: "url(/assets/home/background-home-desktop.jpg)",
          position: "absolute",
          inset: 0,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          zIndex: 5,
        }}
      >
        {/* So, you want to travel to Space Let’s face it; if you want to go to space,
      you might as well genuinely go to outer space and not hover kind of on the
      edge of it. Well sit back, and relax because we’ll give you a truly out of
      this world experience! Explore */}
      </main>
    </Fragment>
  );
}

export default Home;
