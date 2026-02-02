import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import { preloadImages } from "./utils/imageCache";
import { clientProjects, labProjects } from "./data/projects";
import profilePic from "@/assets/images/profile.jpg";
import { blogs } from "./data/library";
import { communities } from "./data/communities";
import { mysqlRoadmap, redisRoadmap, djangoRoadmap, systemDesignRoadmap } from "@/data/resources";
import desiDiariesLogo from "./assets/logos/desi-diaries.png";

import Home from "./pages/Home";
import TestimonialsForm from "./pages/TestimonialsForm";
import Testimonials from "./pages/Testimonials";
import Experience from "./pages/Experience";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Communities from "./pages/Communities";
import Library from "./pages/Library";
import DSARoadmap from "./pages/DSARoadmap";
import OneShotPage from "./pages/OneShotPage";
import DSAPractice from "./pages/DSAPractice";
import DSAConcepts from "./pages/DSAConcepts";
import TimeComplexityPrimer from "./pages/TimeComplexityPrimer";
import Links from "./pages/Links";
import Custom404 from "./pages/404";
import TerminalWidget from "./components/TerminalWidget";

export default function App() {
  // Preload critical images on app mount
  useEffect(() => {
    const projectImages = [...clientProjects, ...labProjects].map(p => p.thumbnail);
    const communityImages = communities.map(c => c.image);
    const blogImages = blogs.map(b => b.thumbnail);

    const allImages = [
      ...projectImages,
      ...communityImages,
      ...blogImages,
      profilePic,
      desiDiariesLogo
    ];

    // Preload images in the background
    preloadImages(allImages).catch(err => {
      console.warn("Some images failed to preload:", err);
    });
  }, []);

  const hostname = window.location.hostname;
  const isLinksSubdomain = hostname === "links.warriorwhocodes.com";
  const isArchiveSubdomain = hostname === "archive.warriorwhocodes.com";

  const location = useLocation();
  const isLinksPage = location.pathname === "/links" || isLinksSubdomain;

  return (
    <>
      {!isLinksPage && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            isLinksSubdomain ? <Links /> :
              isArchiveSubdomain ? <Library /> :
                <Home />
          }
        />
        <Route path="/testimonialsform" element={<TestimonialsForm />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/library" element={<Library />} />
        <Route path="/library/dsa-roadmap" element={<DSARoadmap />} />
        <Route path="/library/dsa-roadmap/problems" element={<DSAPractice />} />
        <Route path="/library/dsa-roadmap/patterns" element={<DSAPractice />} />
        <Route path="/library/dsa-roadmap/concepts" element={<DSAConcepts />} />
        <Route path="/library/dsa-roadmap/time-complexity" element={<TimeComplexityPrimer />} />
        <Route path="/library/mysql-one" element={<OneShotPage data={mysqlRoadmap} />} />
        <Route path="/library/redis-one" element={<OneShotPage data={redisRoadmap} />} />
        <Route path="/library/django-orm-one" element={<OneShotPage data={djangoRoadmap} />} />
        <Route path="/library/system-design" element={<OneShotPage data={systemDesignRoadmap} />} />
        <Route path="/links" element={<Links />} />
        <Route path="*" element={<Custom404 />} />
      </Routes>
      <TerminalWidget />
    </>
  );
}
