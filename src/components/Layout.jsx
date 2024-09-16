import { Outlet } from "react-router-dom";
import { CustomCursor } from "./CustomCursor";
import Header from "./Header";
import Footer from "./Footer";
import { ReactLenis} from "@studio-freight/react-lenis";
export default function Layout() {
  const lenisOptions = {
    smooth: true,
    smoothWheel: true,
    smoothMobile: true,
    smoothDeceleration: 0.05, 
    wheelSpeedLimitPct: 0.2, 
    wheelMaxSpeed: 2,
  };

  return (
    <>
      <ReactLenis root options={lenisOptions}>
        <Header />
        <main>
          <CustomCursor/>
          <Outlet />
        </main>
        <Footer />
      </ReactLenis>
    </>
  );
}
