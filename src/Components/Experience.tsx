declare global {
  interface ImportMetaEnv {
    readonly BASE_URL: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export default function Experience() {
  return (
    <section
      id="Experience"
      className="mb-24 text-slate-400 leading-relaxed space-y-4"
    >
      <br />
      <p>
        13th April 2026 marked the beginning of my journey as a Frontend
        Developer Intern at <a href="https://www.bufferbytes.io/"><span className="text-white font-bold">BufferBytes Technology</span></a>. During my internship, I
        have been learning modern web development while gaining a deeper
        understanding of the differences between academic learning and
        professional software development.
      </p>

      <p>
        I have gained practical experience in frontend development, team
        collaboration, and working in a professional environment. Currently, I
        am building the frontend of an e-commerce web application, where I
        apply the concepts I learned in college to real-world projects. This
        experience has strengthened my technical skills, improved my
        problem-solving abilities, and helped me grow as a developer.
      </p>

      <a
        href="https://www.linkedin.com/company/bufferbytes/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-4 rounded-xl border border-slate-700 p-4 hover:border-cyan-400 hover:bg-slate-800/40 hover:shadow-lg transition-all duration-300"
      >
        <img
          src={`${import.meta.env.BASE_URL}bufferbytes_technologies_logo.jpeg`}
          alt="BufferBytes Technology"
          className="w-14 h-14 rounded-lg object-contain"
        />

        <div>
          <h3 className="text-lg font-semibold text-slate-100">
            Frontend Developer Intern
          </h3>

          <p className="text-slate-300">
            BufferBytes Technology
          </p>

          <p className="text-sm text-slate-500">
            Apr 2026 – Present
          </p>
        </div>
      </a>
    </section>
  );
}