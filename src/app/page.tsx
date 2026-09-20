import {
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { resumeData } from "../data/resume";

const featuredSkills = [
  "Full-stack web apps",
  "AI and machine learning",
  "Computer vision",
  "Wi-Fi sensing research",
  "Next.js and React",
  "Model optimization",
];

const sameAs = [
  resumeData.personal.github,
  resumeData.personal.linkedin,
  resumeData.personal.twitter,
  resumeData.personal.instagram,
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: resumeData.personal.name,
  url: resumeData.personal.portfolio,
  jobTitle: resumeData.personal.title,
  email: `mailto:${resumeData.personal.email}`,
  description: resumeData.bio,
  sameAs,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Shenzhen",
    addressCountry: "China",
  },
  alumniOf: resumeData.education.map((item) => ({
    "@type": "CollegeOrUniversity",
    name: item.school,
  })),
  knowsAbout: featuredSkills.concat(
    Object.values(resumeData.skills).flat().slice(0, 18),
  ),
  subjectOf: resumeData.publications.map((publication) => ({
    "@type": "ScholarlyArticle",
    name: publication.title,
    author: publication.authors,
    publisher: publication.conference,
    datePublished: publication.year,
    url: publication.doi,
  })),
  workExample: resumeData.projects
    .filter((project) => project.link !== "#")
    .map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      description: project.description,
      url: project.link,
      keywords: project.tech.join(", "),
    })),
};

const Page = () => {
  return (
    <main className="min-h-screen px-6 py-10 text-[#222522] sm:px-10 lg:px-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 border-y border-[#222522] py-10 lg:min-h-[82svh] lg:justify-between">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.22em] text-[#777a73]">
          <span>{resumeData.personal.location}</span>
          <span>Full-stack developer / AI researcher</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.24em] text-[#bd482f]">
              Portfolio, publications, code, and field notes
            </p>
            <h1 className="max-w-4xl text-6xl font-medium leading-[0.88] tracking-tight sm:text-7xl lg:text-8xl">
              {resumeData.personal.name}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#464941]">
              {resumeData.bio}
            </p>
          </div>

          <aside className="border-l border-[#c8c8c0] pl-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#bd482f]">
              Find me online
            </h2>
            <div className="mt-5 grid gap-3">
              <a
                href={resumeData.personal.github}
                target="_blank"
                rel="noopener noreferrer me"
                className="group flex items-center justify-between border-b border-[#c8c8c0] py-3 text-base font-medium transition-colors hover:text-[#bd482f]"
                aria-label="Visit Said Elhadi on GitHub"
              >
                <span className="inline-flex items-center gap-3">
                  <Github size={20} aria-hidden="true" /> GitHub projects
                </span>
                <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={resumeData.personal.instagram}
                target="_blank"
                rel="noopener noreferrer me"
                className="group flex items-center justify-between border-b border-[#c8c8c0] py-3 text-base font-medium transition-colors hover:text-[#bd482f]"
                aria-label="Follow Said Elhadi on Instagram"
              >
                <span className="inline-flex items-center gap-3">
                  <Instagram size={20} aria-hidden="true" /> Instagram updates
                </span>
                <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={resumeData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer me"
                className="group flex items-center justify-between border-b border-[#c8c8c0] py-3 text-base font-medium transition-colors hover:text-[#bd482f]"
                aria-label="Connect with Said Elhadi on LinkedIn"
              >
                <span className="inline-flex items-center gap-3">
                  <Linkedin size={20} aria-hidden="true" /> LinkedIn profile
                </span>
                <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={`mailto:${resumeData.personal.email}`}
                className="group flex items-center justify-between border-b border-[#c8c8c0] py-3 text-base font-medium transition-colors hover:text-[#bd482f]"
                aria-label="Email Said Elhadi"
              >
                <span className="inline-flex items-center gap-3">
                  <Mail size={20} aria-hidden="true" /> Email contact
                </span>
                <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </aside>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredSkills.map((skill) => (
            <span
              key={skill}
              className="border border-[#c8c8c0] px-4 py-3 text-sm font-medium text-[#464941]"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-10 py-14 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#bd482f]">
            <MapPin size={16} aria-hidden="true" /> Shenzhen, China
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            Searchable proof: research, products, and software systems.
          </h2>
        </div>
        <div className="grid gap-5">
          {resumeData.publications.map((publication) => (
            <article
              key={publication.title}
              className="border-b border-[#c8c8c0] pb-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="max-w-2xl text-xl font-semibold leading-snug">
                  {publication.title}
                </h3>
                <a
                  href={publication.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#bd482f]"
                  aria-label={`Read ${publication.title}`}
                >
                  Read <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
              <p className="mt-2 text-sm text-[#777a73]">
                {publication.conference} / {publication.year} / {publication.authors}
              </p>
              <p className="mt-3 leading-7 text-[#464941]">
                {publication.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl border-t border-[#222522] py-14">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#bd482f]">
              Projects and experience
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Full-stack, AI, computer vision, and wireless sensing work.
            </h2>
          </div>
          <a
            href="/Said_Elhadi_Resume_CV.pdf"
            className="inline-flex items-center gap-2 border border-[#222522] px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition-colors hover:border-[#bd482f] hover:text-[#bd482f]"
          >
            Resume <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {resumeData.projects.slice(0, 6).map((project) => (
            <article key={project.title} className="border border-[#c8c8c0] p-5">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                {project.link !== "#" ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#bd482f]"
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                ) : null}
              </div>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#bd482f]">
                {project.status}
              </p>
              <p className="mt-3 leading-7 text-[#464941]">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="border border-[#c8c8c0] px-2 py-1 text-xs text-[#464941]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Page;
