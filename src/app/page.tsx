import Link from "next/link";
import { MotionGroup, MotionItem } from "@/components/motion";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const techStack = ["React", "PHP", "Laravel", "npm", "Supabase", "Vite"];

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <main className="overflow-hidden">
      <section className="relative isolate min-h-[calc(100svh-5rem)] px-5 py-16 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(20,184,166,0.18),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(244,63,94,0.13),transparent_28%),linear-gradient(135deg,#030712_0%,#0b1020_45%,#111827_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />

        <MotionGroup className="mx-auto grid w-full max-w-7xl items-center gap-12 pt-10 lg:grid-cols-[1fr_0.9fr] lg:pt-20">
          <div className="max-w-3xl">
            <MotionItem>
              <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-zinc-300 backdrop-blur">
                Graduating IT student
              </p>
            </MotionItem>
            <MotionItem>
              <h1 className="text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
                Mark Louie C. Matus
              </h1>
            </MotionItem>
            <MotionItem>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
                A graduating IT student currently working with React, PHP, npm,
                and Laravel during OJT, focused on building useful web systems
                with clean interfaces.
              </p>
            </MotionItem>
            <MotionItem>
              <div className="mt-8 flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-zinc-300"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </MotionItem>
            <MotionItem>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link className="button-primary" href="/projects">
                  View projects
                </Link>
                <Link className="button-secondary" href="/contact">
                  Contact me
                </Link>
              </div>
            </MotionItem>
          </div>

          <MotionItem className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/30 backdrop-blur">
            <p className="eyebrow">Current focus</p>
            <h2 className="text-3xl font-semibold leading-tight text-white">
              Backend-minded web development with practical frontend polish.
            </h2>
            <p className="mt-5 leading-7 text-zinc-400">
              I enjoy building systems that organize data, support real user
              workflows, and stay understandable for the people who maintain
              them.
            </p>
          </MotionItem>
        </MotionGroup>
      </section>

      <section className="section-shell">
        <MotionGroup>
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Featured projects</p>
              <h2 className="section-title">Work from school, OJT, and practice.</h2>
            </div>
            <Link className="text-sm font-medium text-teal-200 hover:text-white" href="/projects">
              All projects
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <MotionItem key={project.slug}>
                <ProjectCard project={project} />
              </MotionItem>
            ))}
          </div>
        </MotionGroup>
      </section>
    </main>
  );
}
