import Link from "next/link";
import { MotionGroup, MotionItem } from "@/components/motion";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog | Mark Louie",
  description: "Markdown-powered notes on product, frontend craft, and systems.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="page-shell">
      <MotionGroup>
        <p className="eyebrow">Blog</p>
        <h1 className="page-title">A markdown notebook for product craft.</h1>
        <p className="page-intro">
          Posts live as local markdown files with front matter, giving the site a
          lightweight writing system that can grow without a CMS.
        </p>

        <div className="mt-12 grid gap-5">
          {posts.map((post) => (
            <MotionItem
              className="glass-card rounded-2xl p-6 transition hover:-translate-y-1 hover:border-rose-300/40 md:p-8"
              key={post.slug}
            >
              <Link href={`/blog/${post.slug}`}>
                <p className="text-sm text-zinc-500">{post.date}</p>
                <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                  {post.title}
                </h2>
                <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
                  {post.excerpt}
                </p>
                <span className="mt-6 inline-flex text-sm font-medium text-teal-200">
                  Read post
                </span>
              </Link>
            </MotionItem>
          ))}
        </div>
      </MotionGroup>
    </main>
  );
}
