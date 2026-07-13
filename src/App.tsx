import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LoadingFallback from "./components/LoadingFallback";

// Route-level code splitting
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Experience = lazy(() => import("./pages/Experience"));
const CV = lazy(() => import("./pages/CV"));
const Contact = lazy(() => import("./pages/Contact"));
const XPExperience = lazy(() => import("./xp/XPExperience"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* XP Mode — outside Layout, full viewport */}
          <Route path="/xp" element={<XPExperience />} />
          <Route path="/boot.ini" element={<XPExperience />} />

          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
            {/* 404 fallback */}
            <Route
              path="*"
              element={
                <div className="page-container">
                  <div className="section-container py-20 text-center">
                    <div className="terminal-text mb-4">
                      <span className="text-accent">$</span> curl{" "}
                      {typeof window !== "undefined"
                        ? window.location.pathname
                        : "/404"}
                    </div>
                    <h1 className="font-display text-4xl font-bold mb-4">
                      404 — Not Found
                    </h1>
                    <p className="text-text-secondary mb-8">
                      The page you're looking for doesn't exist.
                    </p>
                    <a href="/" className="btn-neu">
                      ← Back to Home
                    </a>
                  </div>
                </div>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
