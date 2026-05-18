import { MotionGroup, MotionItem } from "@/components/motion";

const contacts = [
  {
    label: "GitHub",
    value: "github.com/zayddtrevor",
    href: "https://github.com/zayddtrevor",
  },
  {
    label: "Email",
    value: "marklouie.matus01@gmail.com",
    href: "mailto:marklouie.matus01@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mark-louie-matus",
    href: "https://www.linkedin.com/in/mark-louie-matus/",
  },
];

export const metadata = {
  title: "Contact | Mark Louie C. Matus",
  description: "Contact links for Mark Louie C. Matus.",
};

export default function ContactPage() {
  return (
    <main className="page-shell">
      <MotionGroup>
        <p className="eyebrow">Contact</p>
        <h1 className="page-title">Let’s connect.</h1>
        <p className="page-intro">
          You can reach me through GitHub, email, or LinkedIn.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {contacts.map((contact) => (
            <MotionItem
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-teal-300/50 hover:bg-white/[0.07]"
              key={contact.label}
            >
              <p className="text-sm text-zinc-500">{contact.label}</p>
              <a
                className="mt-3 block break-words text-lg font-semibold text-white hover:text-teal-200"
                href={contact.href}
                rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
              >
                {contact.value}
              </a>
            </MotionItem>
          ))}
        </div>
      </MotionGroup>
    </main>
  );
}
