export default function Project() {
  return (
    <section id="projects" className="mb-24">
        <br />
      <div className="rounded-xl border border-slate-700 p-6 transition-all duration-300 hover:border-cyan-400 hover:bg-slate-800/40">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-100">
            E-Commerce Web Application
          </h2>

          <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-sm text-yellow-300">
            In Progress
          </span>
        </div>

        <p className="mt-4 text-slate-400 leading-relaxed">
          A modern e-commerce web application currently being developed as part
          of my Frontend Developer Internship at <a href="https://www.bufferbytes.io/"><span className="text-white font-bold">BufferBytes Technology</span></a>. The
          project focuses on building a responsive and user-friendly shopping
          experience using modern frontend technologies.
        </p>

        <div className="mt-6">
          <h3 className="font-medium text-slate-200">
            Features Completed
          </h3>

          <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-400">
            <li>Responsive Homepage</li>
            <li>Product Listing</li>
            <li>Product Details</li>
            <li>Shopping Cart</li>
            <li>REST API Integration</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="font-medium text-slate-200">
            Currently Working On
          </h3>

          <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-400">
            <li>Checkout Flow</li>
            <li>User Profile</li>
            <li>Order Management</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="font-medium text-slate-200">Tech Stack</h3>

          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "React",
              "TypeScript",
              "Tailwind CSS",
              "REST API",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}