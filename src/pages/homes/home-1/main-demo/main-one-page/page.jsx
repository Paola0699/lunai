import Footer1 from "@/components/footers/Footer1";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import Hero1 from "@/components/homes/home-1/heros/Hero1";

import { mainDemoOnepage } from "@/data/menu";

import MetaComponent from "@/components/common/MetaComponent";
import Home10 from "@/components/homes/home-10";
import Header5 from "@/components/headers/Header5";
const metadata = {
  title: "Lunai Reset Center | Retiros de Ibogaína con Supervisión Médica",
  description:
    "Retiros terapéuticos con ibogaína bajo supervisión médica para adicción, TEPT, depresión, ansiedad y trauma. Programas integrales de 3 a 9 días con preparación, tratamiento e integración.",
  url: "/",
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
