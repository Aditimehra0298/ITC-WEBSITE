import Link from "next/link";
import { notFound } from "next/navigation";
import { allServices, serviceCopy } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const nav = allServices.find((s) => s.slug === slug);
  const copy = serviceCopy[slug];
  if (!nav || !copy) return { title: "ITC India" };
  return {
    title: `${nav.label} | ITC India`,
    description: copy.desc,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const nav = allServices.find((s) => s.slug === slug);
  const copy = serviceCopy[slug];
  if (!nav || !copy) notFound();

  return (
    <main className="page-main">
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="page-eyebrow">{copy.eyebrow}</p>
          <h1 className="page-title">{copy.title}</h1>
          <p className="page-lead">{copy.desc}</p>
          {copy.meta ? <p className="page-meta">{copy.meta}</p> : null}
          <div className="page-actions">
            <Link className="btn btn-primary" href="/quote">
              Get a Quote <span aria-hidden="true">→</span>
            </Link>
            <Link className="btn btn-outline-navy" href="/#section-1">
              All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
