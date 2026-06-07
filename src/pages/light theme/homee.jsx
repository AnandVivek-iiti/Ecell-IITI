export default function Home() {
  const heroImages = [
    "/E-Cell _ IIT Indore_files/E_summit.png",
    "/E-Cell _ IIT Indore_files/entrepenuers_talk.jpeg",
    "/E-Cell _ IIT Indore_files/pitching.JPG",
    "/E-Cell _ IIT Indore_files/stock.png",
  ]

  return (
    // Single continuous gradient for the entire page
    <div className="overflow-hidden bg-gradient-to-br from-blue-100 via-white to-indigo-100">
      
      {/* Hero Section – now transparent (no extra background) */}
      <section className="relative overflow-hidden py-20">
        {/* Gradient blobs */}
        <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-blue-300/40 blur-[150px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-indigo-300/30 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200/20 blur-[100px]" />

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          {/* Image Slider */}
          <div className="order-1 lg:order-2 relative h-[320px] md:h-[450px] lg:h-[500px] w-full overflow-hidden rounded-[32px] border border-white/40 bg-white/20 shadow-2xl shadow-blue-500/20 backdrop-blur-sm animate-fadeRight">
            <div className="relative h-full w-full overflow-hidden rounded-[30px]">
              {heroImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`slide-${index}`}
                  className="absolute inset-0 h-full w-full object-cover animate-slide"
                  style={{ animationDelay: `${index * 4}s` }}
                />
              ))}
            </div>
          </div>

          {/* Left content */}
          <div className="order-2 lg:order-1 space-y-7 animate-fadeLeft">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-blue-600">
              E-CELL IIT INDORE
            </p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              Building Future<br />Entrepreneurs<br />& Innovators
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-700">
              Empowering students through innovation, startup culture, leadership and entrepreneurial opportunities at IIT Indore.
            </p>
            <div className="flex items-center gap-3 text-amber-600">
              <div className="h-2 w-2 rounded-full bg-amber-500" />
              <span className="text-sm uppercase tracking-widest font-medium">Building India's Startup Culture</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="/about" className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Explore E-Cell →
              </a>
              <a href="/contact" className="inline-flex items-center rounded-full border-2 border-blue-200 bg-white/60 px-8 py-4 font-semibold text-blue-700 backdrop-blur-sm transition-all duration-300 hover:bg-blue-50 hover:border-blue-300">
                Contact Us
              </a>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Startup Ecosystem", "E-Summit", "Founder Talks", "Innovation"].map((tag) => (
                <span key={tag} className="rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-blue-50 hover:border-blue-200 hover:scale-105">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section – transparent background, only cards with glass effect */}
      <div className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-600">ABOUT E-CELL</p>
          <h2 className="max-w-3xl text-4xl font-bold md:text-5xl bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">
            Empowering Students<br />To Build, Lead & Innovate
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            E-Cell IIT Indore nurtures entrepreneurship, innovation and leadership by connecting students with founders, mentors, investors and industry experts.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-8 md:grid-cols-2">
          {/* About Us Card */}
          <div className="group rounded-3xl border border-white/40 bg-white/60 p-8 shadow-lg shadow-blue-500/5 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-blue-300/60 hover:shadow-xl hover:shadow-blue-500/10">
            <h3 className="mb-6 text-2xl font-bold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">About Us</h3>
            <p className="leading-8 text-slate-700">
              Entrepreneurship Cell at IIT Indore believes that entrepreneurship is not a part time job or a full time job, it is lifestyle. This is something that can be seen eminently in the working style of the E-Cell. We ensure that entrepreneurship is taken as an attitude and is always depicted in the events conducted by our cell. We conduct multiple events like Marketing Fiesta, E-Summit, talk sessions and workshops to promote entrepreneurship and fuel the fire in the budding entrepreneurial minds. We bring together students, professors, experts from various domains to share their ideas on a common topic of interest to bring the best out of the interaction. These events serve as an opportunity for many who aspire to “Solve Something Big” in their lives.
            </p>
          </div>

          {/* Our Vision Card */}
          <div className="group rounded-3xl border border-white/40 bg-white/60 p-8 shadow-lg shadow-blue-500/5 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-blue-300/60 hover:shadow-xl hover:shadow-blue-500/10">
            <h3 className="mb-6 text-2xl font-bold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">Our Vision</h3>
            <p className="leading-8 text-slate-700">
              E-Cell IIT,Indore believes that what truly matters in entrepreneurship is not the profits one can make, rather it is more of a journey where an individual has loads to learn along the way. A true entrepreneur believes firmly in his or her passion, and takes risks to build a fruitful career around a larger cause. He knows how to lead a team, solve problems, tap potential, and turn even the worst of setbacks into opportunities. Today, India is witnessing a boom in entrepreneurship like never before with an ever increasing number of people from across ages, social and geographical backgrounds now trying to build businesses out of problem statements. With entrepreneurs becoming the new age celebrities, we are definitely taking the right steps as a society and a nation!
            </p>
          </div>
        </div>
      </div>

      {/* What We Do Section – transparent background, only cards */}
      <div className="px-6 py-16">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-600">WHAT WE DO</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">
            Building Opportunities<br />For Future Entrepreneurs
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: "🚀", title: "E-Summit", desc: "Bringing together founders, investors and innovators through flagship entrepreneurship events." },
            { icon: "💡", title: "Startup Support", desc: "Helping students transform ideas into startups through mentorship, guidance and ecosystem support." },
            { icon: "🏆", title: "Competitions", desc: "Organizing business challenges, hackathons and innovation competitions that encourage problem-solving and creativity." },
            { icon: "📚", title: "Learning Resources", desc: "Providing students with entrepreneurial insights, startup knowledge and practical learning opportunities." }
          ].map((card, i) => (
            <div key={i} className="group rounded-3xl border border-white/40 bg-white/60 p-8 shadow-lg shadow-blue-500/5 backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:border-blue-300/60 hover:shadow-xl hover:shadow-blue-500/15">
              <div className="mb-6 text-5xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">{card.icon}</div>
              <h3 className="mb-4 text-xl font-bold text-slate-800">{card.title}</h3>
              <p className="leading-7 text-slate-700">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animations (unchanged) */}
      <style>{`
        .animate-slide {
          opacity: 0;
          animation: slideShow 16s infinite;
        }
        @keyframes slideShow {
          0% { opacity: 0; transform: scale(1.08); }
          8% { opacity: 1; }
          25% { opacity: 1; transform: scale(1); }
          33% { opacity: 0; }
          100% { opacity: 0; }
        }
        .animate-fadeLeft {
          animation: fadeLeft 1s ease forwards;
        }
        .animate-fadeRight {
          animation: fadeRight 1s ease forwards;
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}


