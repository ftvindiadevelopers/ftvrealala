import { useEffect } from "react";
import AOS from "aos";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import Fashiontv from "./pages/Fashiontv";
import Blogs from "./pages/Blogs";
import Vertical from "./template/Vertical";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Projects from "./pages/Projects";
import RealEstate from "./pages/RealEstate";
import Blogsreal from "./pages/Blogsreal";
import NotFound from "./pages/NotFound";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Layout from "./components/Layout";
import Photogallary from "./pages/Photogallary";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ProjectDetails from "./template/ProjectDetails";
import Error from "./components/Error";
import ThankYou from "./pages/ThankYou";
import BlogDetails from "./template/BlogDetails";
import Videogallary from "./pages/Videogallary";
import Kk from "./pages/kk";
import Ma from "./pages/Ma";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about-us" element={<Fashiontv />} />
      <Route path="about-ftv-real-estate" element={<RealEstate />} />
      <Route path="projects" element={<Projects />} />
      <Route path="photo-gallary" element={<Photogallary />} />
      <Route path="video-gallary" element={<Videogallary />} />
      <Route path="news" element={<Blogs />} />
      <Route path="blogs" element={<Blogsreal />} />
      <Route path="contact-us" element={<Contact />} />
      <Route path="faq" element={<Faq />} />
      <Route path="kashiff-khan" element={<Kk />} />
      <Route path="michel-adam" element={<Ma />} />
      <Route path="terms-and-conditions" element={<Terms />} />
      <Route path="news/:blogname" element={<BlogDetails />} />
      <Route path="blogs/:blogname" element={<BlogDetails />} />
      <Route path="thank-you" element={<ThankYou />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route
        path="projects/:any"
        element={<ProjectDetails />}
      />
      <Route path="*" element={<NotFound />} />
      <Route
        path=":verticalType/:any"
        element={<Vertical />}
        errorElement={<Error />}
      />
    </Route>
  )
);  

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1400,
    });
    AOS.refresh();
  }, []);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
