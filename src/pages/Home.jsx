export default function Home() {
  const heroImages = [
    "/E-Cell _ IIT Indore_files/E_summit.png",
    "/E-Cell _ IIT Indore_files/entrepenuers_talk.jpeg",
    "/E-Cell _ IIT Indore_files/pitching.JPG",
    "/E-Cell _ IIT Indore_files/stock.png",

  ]

  return (
    <div className="overflow-hidden bg-[#f5f5f5]">

      <section className="relative bg-[#0b0b4d] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">

          <div className="space-y-7 text-white animate-fadeLeft">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300">
              E-Cell IIT Indore
            </p>

            <h1 className="text-5xl font-bold leading-tight lg:text-6xl">
              Spreading the spirit of Entrepreneurship
            </h1>

            <p className="max-w-xl text-lg leading-8 text-slate-200">
              Entrepreneurship Cell at IIT Indore believes that entrepreneurship
              is not a part-time job or a full-time job; it is lifestyle.
              This is something that can be seen eminently in the working style
              of the E-Cell.
            </p>

            <div className="flex gap-4 pt-3">
              <a
                href="/about"
                className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-900 transition duration-300 hover:scale-105 hover:bg-cyan-300"
              >
                Learn More
              </a>

              <a
                href="/contact"
                className="rounded-full border border-white/40 px-7 py-3 font-semibold text-white transition duration-300 hover:bg-white hover:text-slate-900"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="relative flex justify-center animate-fadeRight">
            <div className="relative h-[420px] w-[100%] overflow-hidden rounded-[30px] border border-white/10 shadow-2xl">

              {heroImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`slide-${index}`}
                  className={`absolute inset-0 h-full w-full object-cover animate-slide`}
                  style={{
                    animationDelay: `${index * 4}s`,
                  }}
                />
              ))}

            </div>
          </div>
        </div>

        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"></div>
      </section>



      {/* ANIMATIONS */}
      <style jsx>{`
        .animate-slide {
          opacity: 0;
          animation: slideShow 16s infinite;
        }

        @keyframes slideShow {
          0% {
            opacity: 0;
            transform: scale(1.08);
          }

          8% {
            opacity: 1;
          }

          25% {
            opacity: 1;
            transform: scale(1);
          }

          33% {
            opacity: 0;
          }

          100% {
            opacity: 0;
          }
        }

        .animate-fadeLeft {
          animation: fadeLeft 1s ease forwards;
        }

        .animate-fadeRight {
          animation: fadeRight 1s ease forwards;
        }

        @keyframes fadeLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}