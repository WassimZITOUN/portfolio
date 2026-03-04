import { HeroSection } from "@/components/ui/hero-section";
import { ExpertiseSection } from "@/components/blocks/expertise-section";
import { ProjectsSection } from "@/components/blocks/projects-section";
import { InteractiveNebulaShader } from "@/components/ui/liquid-shader";

export default function Home() {
  return (
    <>
      <InteractiveNebulaShader className="fixed inset-0 -z-10" />
      <HeroSection />
      <ExpertiseSection />
      <ProjectsSection />
    </>
  );
}
