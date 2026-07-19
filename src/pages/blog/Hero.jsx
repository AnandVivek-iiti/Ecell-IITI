export default function BlogHero() {
  return (
    <section className="relative rounded-3xl bg-gradient-to-br from-blue-200 via-blue-100 to-indigo-200 px-8 py-20 text-center shadow-lg shadow-blue-500/15">
      {/* Stronger gradient blobs for more depth */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute left-20 top-10 h-40 w-40 rounded-full bg-blue-400/40 blur-3xl"></div>
        <div className="absolute right-20 bottom-10 h-40 w-40 rounded-full bg-indigo-400/40 blur-3xl"></div>
        <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200/30 blur-3xl"></div>
      </div>

      {/* Subtle grid pattern (kept but lighter to not overpower) */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />

      <div className="relative z-10">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
          E-CELL IIT INDORE
        </p>

        <h1 className="text-5xl font-bold md:text-7xl bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent inline-block pb-3 leading-tight">
          The E-Cell Blog
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-800">
          Startup stories, founder journeys,
          innovation insights and entrepreneurial
          thinking from the E-Cell community.
        </p>
      </div>
    </section>
  )
}