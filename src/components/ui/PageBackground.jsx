import clsx from "clsx";
import FloatingOrb from "./FloatingOrb";

export default function PageBackground({
  children,
  className = "",
  showGrid = true,
  showNoise = true,
  showOrbs = true,
  fadeTop = true,
  fadeBottom = true
}) {

  return (

    <div className={clsx("relative min-h-screen overflow-hidden bg-[#F8FAFF]", className)}>

      {showGrid && (

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(148,163,184,.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(148,163,184,.3) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px"
          }}
        />

      )}

      {showNoise && (

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-multiply"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0,0,0,.12) 1px, transparent 1px)",
            backgroundSize: "18px 18px"
          }}
        />

      )}

      {showOrbs && (
        <>
          <FloatingOrb
            size={500}
            color="blue"
            top="-180px"
            left="-150px"
            duration={18}
            opacity={0.16}
          />

          <FloatingOrb
            size={420}
            color="indigo"
            right="-120px"
            top="20%"
            duration={22}
            delay={2}
            opacity={0.15}
          />

          <FloatingOrb
            size={360}
            color="cyan"
            bottom="-120px"
            left="35%"
            duration={20}
            delay={1}
            opacity={0.14}
          />

          <FloatingOrb
            size={320}
            color="purple"
            bottom="10%"
            right="-80px"
            duration={25}
            delay={4}
            opacity={0.12}
          />
        </>
      )}

      {fadeTop && (
        <div className="pointer-events-none absolute left-0 top-0 h-40 w-full bg-gradient-to-b from-white to-transparent" />
      )}

      {fadeBottom && (
        <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-white to-transparent" />
      )}

      <div className="relative z-10">

        {children}

      </div>

    </div>

  );

}