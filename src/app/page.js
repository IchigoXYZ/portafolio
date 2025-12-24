import { Hero } from "@/components/hero";
import CursorTrail from "@/components/CursorTrail";
import InteractiveParticles from "@/components/InteractiveParticles";

export default function Home() {
  return (
    <main className="relative">
      <InteractiveParticles />
      <CursorTrail/>
  
      <Hero />
    </main>
  );
}
