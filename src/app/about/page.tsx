import { MotionGroup, MotionItem } from "@/components/motion";

export const metadata = {
  title: "About | Mark Louie C. Matus",
  description: "Short profile for Mark Louie C. Matus.",
};

export default function AboutPage() {
  return (
    <main className="page-shell">
      <MotionGroup className="max-w-3xl">
        <MotionItem>
          <p className="eyebrow">About</p>
          <h1 className="page-title">I’m Mark Louie C. Matus.</h1>
        </MotionItem>
        <MotionItem>
          <p className="page-intro">
            I&apos;m a graduating IT student learning through real project work
            and OJT experience. Right now, I mostly work with React, PHP, npm,
            and Laravel.
          </p>
        </MotionItem>
        <MotionItem>
          <div className="glass-card mt-10 rounded-2xl p-6 leading-7 text-zinc-400">
            I like building practical systems, improving user workflows, and
            learning how real applications are planned, tested, deployed, and
            maintained.
          </div>
        </MotionItem>
      </MotionGroup>
    </main>
  );
}
