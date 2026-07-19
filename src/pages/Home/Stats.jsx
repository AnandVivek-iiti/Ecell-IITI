import { Rocket, Users, Building2, Trophy } from "lucide-react";
import AnimatedCounter from "../../components/ui/AnimatedCounter";
import Reveal from "../../components/ui/Reveal";

const stats = [
  {
    icon: <Rocket className="h-7 w-7" />,
    number: 120,
    suffix: "+",
    title: "Events Organized",
    description: "Workshops, hackathons, founder talks and competitions."
  },
  {
    icon: <Users className="h-7 w-7" />,
    number: 5000,
    suffix: "+",
    title: "Students Reached",
    description: "Building an entrepreneurial ecosystem across campuses."
  },
  {
    icon: <Building2 className="h-7 w-7" />,
    number: 40,
    suffix: "+",
    title: "Startups Supported",
    description: "Student-led ventures nurtured through mentorship."
  },
  {
    icon: <Trophy className="h-7 w-7" />,
    number: 25,
    suffix: "+",
    title: "National Competitions",
    description: "Innovation challenges and startup showcases."
  }
];

export default function Stats() {

  return (

    <section className="relative py-32">

      <div className="mx-auto max-w-7xl px-6">

        <Reveal>

          <div className="mb-20 text-center">

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-blue-600">

              OUR IMPACT

            </p>

            <h2 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">

              Empowering Ideas

              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">

                Creating Entrepreneurs

              </span>

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">

              Every event, workshop and mentorship session contributes to
              building a stronger startup ecosystem at IIT Indore.

            </p>

          </div>

        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((stat, index) => (

            <AnimatedCounter
              key={stat.title}
              icon={stat.icon}
              number={stat.number}
              suffix={stat.suffix}
              title={stat.title}
              description={stat.description}
              duration={2.5 + index * 0.3}
            />

          ))}

        </div>

      </div>

    </section>

  );

}