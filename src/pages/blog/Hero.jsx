export default function BlogHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20">

      {/* Background Orbs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">

        <div className="absolute left-[-180px] top-0 h-[420px] w-[420px] rounded-full bg-blue-400/20 blur-[120px]" />

        <div className="absolute right-[-180px] top-[220px] h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-[120px]" />

      </div>

      <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center text-center">

        <span className="px-4 py-1.5 rounded-full bg-white/80 border border-indigo-100/80 text-indigo-600 text-xs font-bold tracking-widest uppercase shadow-sm">
            E-Cell IIT Indore
          </span>

        <h1 className="mt-8 text-5xl flex gap-4 font-black leading-tight md:text-7xl">

          <span className="text-slate-900">
            Startup
          </span>

          <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
            Stories
          </span>

        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">
          Discover founder journeys, startup lessons, entrepreneurial
          insights, innovation stories and everything happening inside the
          E-Cell IIT Indore ecosystem.
        </p>

      </div>

    </section>
  );
}