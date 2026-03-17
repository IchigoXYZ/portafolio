import { Hero } from "@/components/hero";
import InteractiveParticles from "@/components/InteractiveParticles";
import MotionBackground from "@/components/MotionBackground";

export default function Home() {
  return (
    <main className="relative">
      <InteractiveParticles />
      <MotionBackground />
      <Hero />
    </main>
  );
}
