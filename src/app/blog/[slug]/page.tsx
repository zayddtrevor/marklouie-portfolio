import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, markdownToHtml } from "@/lib/posts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Mark Louie`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="page-shell">
      <article className="mx-auto max-w-3xl">
        <Link className="mb-8 inline-flex text-sm font-medium text-teal-200 hover:text-white" href="/blog">
          Back to blog
        </Link>
        <p className="eyebrow">{post.date}</p>
        <h1 className="page-title">{post.title}</h1>
        <p className="page-intro">{post.excerpt}</p>
        <div
          className="prose-dark mt-10"
          dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
        />
      </article>
    </main>
  );
}
