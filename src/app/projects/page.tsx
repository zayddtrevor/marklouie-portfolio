import { MotionGroup, MotionItem } from "@/components/motion";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects | Mark Louie C. Matus",
  description:
    "Projects by Mark Louie C. Matus, including React, Supabase, QA, and design work.",
};

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <MotionGroup>
        <p className="eyebrow">Projects</p>
        <h1 className="page-title">Projects are the main proof of the work.</h1>
        <p className="page-intro">
          These cards highlight the systems I have built or contributed to,
          with the image, description, stack, GitHub link, and live demo action
          visible on every project.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <MotionItem key={project.slug}>
              <ProjectCard project={project} />
            </MotionItem>
          ))}
        </div>
      </MotionGroup>
    </main>
  );
}
