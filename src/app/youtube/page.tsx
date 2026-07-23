import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Results } from "./components/Results";
import { CaseStudies } from "./components/CaseStudies";
import { Pipeline } from "./components/Pipeline";
import { Showreel } from "./components/Showreel";
import { CTA } from "./components/CTA";

export default function YouTubePage() {
  return (
    <div className="yt-grid-bg relative flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Results />
        <CaseStudies />
        <Pipeline />
        <Showreel />
        <CTA />
      </main>
    </div>
  );
}
