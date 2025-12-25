import { Hero } from "@/components/hero";
import CursorTrail from "@/components/CursorTrail";
import InteractiveParticles from "@/components/InteractiveParticles";
import MotionBackground from "@/components/MotionBackground";

export default function Home() {
  return (
    <main className="relative">
      <InteractiveParticles />
      <CursorTrail />
      <MotionBackground />
      <Hero />
    </main>
  );
}
