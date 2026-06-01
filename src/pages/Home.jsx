export default function Home() {
  const heroImages = [
    "/E-Cell _ IIT Indore_files/E_summit.png",
    "/E-Cell _ IIT Indore_files/entrepenuers_talk.jpeg",
    "/E-Cell _ IIT Indore_files/pitching.JPG",
    "/E-Cell _ IIT Indore_files/stock.png",

  ]

  return (
    <div className="overflow-hidden bg-[#f5f5f5]">

      <section
        className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#0C08B7]
        via-[#04052E]
        to-black
        py-20
      "
      >

        <div
          className="
          absolute
          -left-32
          top-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-500/20
          blur-[150px]
        "
        />

        <div
          className="
          absolute
          right-0
          bottom-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-indigo-500/20
          blur-[120px]
        "
        />

        <div
          className="
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-12
          px-6
          lg:grid-cols-2
        "
        >

          <div
            className="
            order-1
            lg:order-2
            relative
            h-[320px]
            md:h-[450px]
            lg:h-[500px]
            w-full
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-white/5
            shadow-[0_0_50px_rgba(12,8,183,0.25)]
            backdrop-blur-sm
            animate-fadeRight
          "
          >

            <div className="relative h-full w-full overflow-hidden rounded-[30px]">

              {heroImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`slide-${index}`}
                  className="absolute inset-0 h-full w-full object-cover animate-slide"
                  style={{
                    animationDelay: `${index * 4}s`,
                  }}
                />
              ))}

            </div>
          </div>

          <div
            className="
            order-2
            lg:order-1
            space-y-7
            text-white
            animate-fadeLeft
          "
          >

            <p
              className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.4em]
              text-[#7995CD]
            "
            >
              E-CELL IIT INDORE
            </p>

            <h1
              className="
              text-3xl
              font-bold
              leading-tight
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
            >
              Building Future
              <br />
              Entrepreneurs
              <br />
              & Innovators
            </h1>

            <p
              className="
              max-w-xl
              text-lg
              leading-8
              text-slate-300
            "
            >
              Empowering students through innovation,
              startup culture, leadership and entrepreneurial
              opportunities at IIT Indore.
            </p>

            <div
              className="
              flex
              items-center
              gap-3
              text-[#7995CD]
            "
            >
              <div className="h-2 w-2 rounded-full bg-[#7995CD]" />

              <span className="text-sm uppercase tracking-widest">
                Building India's Startup Culture
              </span>
            </div>

            <div className="flex flex-wrap gap-4">

              <a
                href="/about"
                className="
                inline-flex
                items-center
                rounded-full
                bg-[#0C08B7]
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-105
              "
              >
                Explore E-Cell →
              </a>

              <a
                href="/contact"
                className="
                inline-flex
                items-center
                rounded-full
                border
                border-white/20
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-white/10
              "
              >
                Contact Us
              </a>

            </div>

            <div
              className="
              flex
              flex-wrap
              gap-3
              pt-2
            "
            >

              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-slate-300 backdrop-blur-md">
                Startup Ecosystem
              </span>

              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-slate-300 backdrop-blur-md">
                E-Summit
              </span>

              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-slate-300 backdrop-blur-md">
                Founder Talks
              </span>

              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-slate-300 backdrop-blur-md">
                Innovation
              </span>

            </div>

          </div>

        </div>

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
      <div
        className="
    relative
    bg-[#04052E]
    py-20
    px-6
  ">

      <div className="mx-auto max-w-7xl">

        <p
          className="
          mb-4
          text-sm
          uppercase
          tracking-[0.35em]
      text-[#7995CD]
    "
    >
          ABOUT E-CELL
        </p>

        <h2
          className="
          max-w-3xl
          text-4xl
          font-bold
          text-white
          md:text-5xl
          "
          >
          Empowering Students
          <br />
          To Build, Lead & Innovate
        </h2>

        <p
          className="
          mt-6
          max-w-3xl
          text-lg
          leading-8
          text-slate-300
          "
          >
          E-Cell IIT Indore nurtures entrepreneurship,
          innovation and leadership by connecting students
          with founders, mentors, investors and industry experts.
        </p>

      </div>
      <div
        className="
        mx-auto
        mt-16
        grid
        max-w-7xl
        gap-8
        md:grid-cols-2
        "
        ></div>
      <div
  className="
  rounded-3xl
  border
  border-white/10
  bg-white/5
  p-8
  backdrop-blur-lg
  transition-all
  duration-500
  hover:-translate-y-2
    hover:border-[#7995CD]/40
    "
>
  <h3 className="mb-6 text-2xl font-bold text-white">
    About Us
  </h3>

  <p className="leading-8 text-slate-300">
    Entrepreneurship Cell at IIT Indore believes that entrepreneurship is not a part time job or a full time job, it is lifestyle. This is something that can be seen eminently in the working style of the E-Cell. We ensure that entrepreneurship is taken as an attitude and is always depicted in the events conducted by our cell. We conduct multiple events like Marketing Fiesta, E-Summit, talk sessions and workshops to promote entrepreneurship and fuel the fire in the budding entrepreneurial minds. We bring together students, professors, experts from various domains to share their ideas on a common topic of interest to bring the best out of the interaction. These events serve as an opportunity for many who aspire to “Solve Something Big” in their lives.
  </p>

</div>
<div
  className="
  rounded-3xl
  border
  border-white/10
  bg-white/5
  p-8
  backdrop-blur-lg
  transition-all
  duration-500
  hover:-translate-y-2
  hover:border-[#7995CD]/40
  "
>
  <h3 className="mb-6 text-2xl font-bold text-white">
    Our Vision
  </h3>

  <p className="leading-8 text-slate-300">
    E-Cell IIT,Indore believes that what truly matters in entrepreneurship is not the profits one can make,rather it is more of a journey where an individual has loads to learn along the way.A true entrepreneur believes firmly in his or her passion,and takes risks to build a fruitful career around a larger cause.He knows how to lead a team, solve problems, tap potential,and turn even the worst of setbacks into opportunities.Today,India is witnessing a boom in entrepreneurship like never before with an ever increasing number of people from across ages ,social and geographical backgrounds now trying to build businesses out of problem statements.With entrepreneurs becoming the new age celebrities, we are definitely taking the right steps as a society and a nation !
  </p>

</div>
</div>

<div
  className="
    bg-[#04052E]
    px-6
    py-16
  "
>

<div className="mx-auto max-w-7xl text-center">

  <p
    className="
      text-sm
      uppercase
      tracking-[0.35em]
      text-[#7995CD]
    "
  >
    WHAT WE DO
  </p>

  <h2
    className="
      mt-4
      text-4xl
      font-bold
      text-white
      md:text-5xl
    "
  >
    Building Opportunities
    <br />
    For Future Entrepreneurs
  </h2>

</div>
<div
  className="
    mx-auto
    mt-16
    grid
    max-w-7xl
    gap-8
    md:grid-cols-2
    lg:grid-cols-4
  "
>
<div
  className="
    group
    rounded-3xl
    border
    border-white/10
    bg-white/5
    p-8
    backdrop-blur-lg
    transition-all
    duration-500
    hover:-translate-y-3
    hover:border-[#7995CD]/50
  "
>
  <div
    className="
      mb-6
      text-4xl
    "
  >
    🚀
  </div>

  <h3
    className="
      mb-4
      text-xl
      font-bold
      text-white
    "
  >
    E-Summit
  </h3>

  <p
    className="
      leading-7
      text-slate-300
    "
  >
    Bringing together founders,
    investors and innovators
    through flagship entrepreneurship events.
  </p>
</div>
<div
  className="
    group
    rounded-3xl
    border
    border-white/10
    bg-white/5
    p-8
    backdrop-blur-lg
    transition-all
    duration-500
    hover:-translate-y-3
    hover:border-[#7995CD]/50
  "
>
  <div className="mb-6 text-4xl">
    💡
  </div>

  <h3 className="mb-4 text-xl font-bold text-white">
    Startup Support
  </h3>

  <p className="leading-7 text-slate-300">
    Helping students transform ideas into startups
    through mentorship, guidance and ecosystem support.
  </p>
</div>

<div
  className="
    group
    rounded-3xl
    border
    border-white/10
    bg-white/5
    p-8
    backdrop-blur-lg
    transition-all
    duration-500
    hover:-translate-y-3
    hover:border-[#7995CD]/50
  "
>
  <div className="mb-6 text-4xl">
    🏆
  </div>

  <h3 className="mb-4 text-xl font-bold text-white">
    Competitions
  </h3>

  <p className="leading-7 text-slate-300">
    Organizing business challenges, hackathons
    and innovation competitions that encourage
    problem-solving and creativity.
  </p>
</div>
<div
  className="
    group
    rounded-3xl
    border
    border-white/10
    bg-white/5
    p-8
    backdrop-blur-lg
    transition-all
    duration-500
    hover:-translate-y-3
    hover:border-[#7995CD]/50
  "
>
  <div className="mb-6 text-4xl">
    📚
  </div>

  <h3 className="mb-4 text-xl font-bold text-white">
    Learning Resources
  </h3>

  <p className="leading-7 text-slate-300">
    Providing students with entrepreneurial
    insights, startup knowledge and practical
    learning opportunities.
  </p>
</div>


</div>


</div>

</div>



)
}