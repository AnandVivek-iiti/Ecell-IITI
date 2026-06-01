export default function BlogHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0C08B7] to-[#04052E] px-8 py-20 text-center">

      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-20 top-10 h-40 w-40 rounded-full bg-white blur-3xl"></div>
        <div className="absolute right-20 bottom-10 h-40 w-40 rounded-full bg-white blur-3xl"></div>
      </div>

      <div className="relative z-10">

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/80">
          E-CELL IIT INDORE
        </p>

        <h1 className="text-5xl font-bold text-white md:text-7xl">
          The E-Cell Blog
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
          Startup stories, founder journeys,
          innovation insights and entrepreneurial
          thinking from the E-Cell community.
        </p>

      </div>

    </section>
  )
}