import Footer1 from "@/components/footers/Footer1";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import Hero1 from "@/components/homes/home-1/heros/Hero1";

import { mainDemoOnepage } from "@/data/menu";

import MetaComponent from "@/components/common/MetaComponent";
import Home10 from "@/components/homes/home-10";
import Header5 from "@/components/headers/Header5";
const metadata = {
  title: "Lunai Reset Center",
  description: "Reset Center",
};
export default function Home1MainDemoOnepage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar wch-unset">
            <Header5 links={mainDemoOnepage} />
          </nav>
          <main id="main">
            <ParallaxContainer
              className="home-section parallax-5 parallax-mousemove-scene scrollSpysection"
              style={{
                backgroundImage:
                  "url(/assets/images/full-width-images/section-bg-3.png)",
              }}
              id="home"
            >
              <Hero1 />
            </ParallaxContainer>
            <Home10 />
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
