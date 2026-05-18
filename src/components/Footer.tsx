import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 text-sm text-zinc-500 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <p>Mark Louie C. Matus</p>
        <div className="flex flex-wrap gap-4">
          <Link className="hover:text-white" href="/projects">
            Projects
          </Link>
          <Link className="hover:text-white" href="/about">
            About
          </Link>
          <Link className="hover:text-white" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
