"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl transition hover:border-teal-300/45"
      transition={{ duration: 0.18, ease: "easeOut" }}
      whileHover={{ scale: 1.015, y: -4 }}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
        <Image
          alt={`${project.title} project preview`}
          className="object-cover transition duration-500 group-hover:scale-105"
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          src={project.image}
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-4 text-sm text-zinc-500">
          <span>{project.type}</span>
          <span>{project.year}</span>
        </div>
        <h2 className="mt-4 text-2xl font-semibold text-white">
          {project.title}
        </h2>
        <p className="mt-3 flex-1 leading-7 text-zinc-400">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              className="rounded-full bg-white/8 px-3 py-1 text-xs text-zinc-300"
              key={tech}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a
            className="button-secondary min-h-11 px-4 py-2 text-sm"
            href={project.githubUrl}
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          {project.liveUrl ? (
            <a
              className="button-primary min-h-11 px-4 py-2 text-sm"
              href={project.liveUrl}
              rel="noreferrer"
              target="_blank"
            >
              Live demo
            </a>
          ) : (
            <span className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-zinc-500">
              Demo soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
