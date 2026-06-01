
import { useState, useRef } from "react";

const TEAM_DATA = {
  secretaries: [],
  members: [],
  volunteers: [],
};

// SVG ICONS
const IconLinkedIn = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const IconInstagram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);

// PHOTO / AVATAR
function PersonPhoto({ photo, initials, size, accent, index }) {
  const bg = `hsl(${(index * 47) % 360},40%,12%)`;
  if (photo) {
    return (
      <div style={{
        width: size, height: size, borderRadius: "50%", overflow: "hidden",
        border: `2px solid ${accent}88`,
        boxShadow: `0 0 0 4px ${accent}15, 0 8px 24px #00000088`,
        flexShrink: 0,
        position: "relative",
      }}>
        <img src={photo} alt={initials} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
      </div>
    );
  }
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%", flexShrink: 0,
      background: `radial-gradient(circle at 35% 35%, ${accent}28, ${bg} 70%)`,
      border: `2px solid ${accent}66`,
      boxShadow: `0 0 0 4px ${accent}15, 0 8px 24px #00000088`,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "'Syne', sans-serif",
      fontSize: size * 0.35, fontWeight: 800,
      color: accent, letterSpacing: "0.02em",
      userSelect: "none",
    }}>
      {initials}
    </div>
  );
}

// SOCIAL BUTTON
function SocialBtn({ href, accent, children }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: 36, height: 36, borderRadius: "50%", display: "flex",
        alignItems: "center", justifyContent: "center", textDecoration: "none",
        border: `1px solid ${hov ? accent + "aa" : "#ffffff1a"}`,
        background: hov ? `${accent}1a` : "#ffffff05",
        color: hov ? accent : `#ffffff88`,
        transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
        transform: hov ? "scale(1.15) translateY(-2px)" : "scale(1)",
        boxShadow: hov ? `0 8px 16px ${accent}22` : "none",
      }}
    >{children}</a>
  );
}

// SECRETARY CARD
function SecretaryCard({ member, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hov, setHov] = useState(false);
  const ref = useRef(null);
  
  const accent = "#d4a843"; 
  const secondary = "#0c1f45"; 

  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = ((e.clientY - r.top) / r.height - 0.5) * -15;
    const y = ((e.clientX - r.left) / r.width - 0.5) * 15;
    setTilt({ x, y });
  };
  const onLeave = () => { setTilt({ x: 0, y: 0 }); setHov(false); };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseEnter={() => setHov(true)} onMouseLeave={onLeave}
      style={{ perspective: "1000px", cursor: "default" }}>
      <div style={{
        borderRadius: 24,
        background: `linear-gradient(145deg, #070e20 0%, ${secondary} 50%, #030814 100%)`,
        border: `1px solid ${hov ? accent + "80" : accent + "22"}`,
        padding: "36px 28px 28px",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 0,
        position: "relative", overflow: "hidden",
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hov ? "translateY(-12px) scale(1.02)" : "scale(1)"}`,
        transformStyle: "preserve-3d",
        transition: hov
          ? "transform 0.1s ease-out, border 0.3s, box-shadow 0.3s"
          : "transform 0.6s cubic-bezier(.23,1,.32,1), border 0.4s, box-shadow 0.4s",
        boxShadow: hov
          ? `0 30px 60px #00000099, 0 0 0 1px ${accent}44, 0 0 60px ${accent}25`
          : "0 10px 40px #00000099",
      }}>

        <div style={{
          position: "absolute", inset: 0, borderRadius: 24, pointerEvents: "none",
          background: hov
            ? `radial-gradient(circle at ${50 + tilt.y * 2}% ${50 + tilt.x * 2}%, ${accent}1a 0%, #1e3a8a33 40%, transparent 80%)`
            : "none",
          transition: "background 0.2s",
        }} />

        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 3,
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          opacity: hov ? 1 : 0.6,
          transition: "opacity 0.3s",
        }} />

        <div style={{ marginBottom: 24, position: "relative" }}>
          <div style={{
            position: "absolute", inset: -10, borderRadius: "50%",
            background: `radial-gradient(circle, ${accent}33 0%, #1e3a8a44 40%, transparent 70%)`,
            filter: "blur(8px)", pointerEvents: "none",
            transform: hov ? "scale(1.2)" : "scale(1)",
            transition: "transform 0.4s",
          }} />
          <div style={{ transform: "translateZ(30px)" }}>
             <PersonPhoto photo={member.photo} initials={member.initials} size={120} accent={accent} index={index} />
          </div>
        </div>

        {/* Name */}
        <div style={{
          fontFamily: "'Syne', sans-serif", fontSize: 24, fontWeight: 800,
          color: "#ffffff", letterSpacing: "-0.01em", textAlign: "center",
          marginBottom: 8, lineHeight: 1.2, transform: "translateZ(20px)"
        }}>{member.name}</div>

        {/* Position badge */}
        <div style={{
          fontSize: 11, fontWeight: 700, letterSpacing: "0.2em",
          textTransform: "uppercase", color: accent,
          padding: "6px 16px", borderRadius: 24,
          background: `linear-gradient(90deg, ${accent}11, ${accent}05)`, 
          border: `1px solid ${accent}44`,
          marginBottom: 24, transform: "translateZ(20px)"
        }}>{member.position}</div>

        <div style={{ width: "100%", height: 1, background: `linear-gradient(to right, transparent, ${accent}33, transparent)`, marginBottom: 20 }} />

        {/* Socials */}
        <div style={{ display: "flex", gap: 12, transform: "translateZ(20px)" }}>
          <SocialBtn href={member.linkedin} accent={accent}><IconLinkedIn /></SocialBtn>
          <SocialBtn href={member.instagram} accent={accent}><IconInstagram /></SocialBtn>
          <SocialBtn href={`mailto:${member.email}`} accent={accent}><IconMail /></SocialBtn>
        </div>
      </div>
    </div>
  );
}

// MEMBER
function MemberCard({ member, index }) {
  const [hov, setHov] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  const accent = "#4fc3f7";

  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = ((e.clientY - r.top) / r.height - 0.5) * -6;
    const y = ((e.clientX - r.left) / r.width - 0.5) * 6;
    setTilt({ x, y });
  };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseEnter={() => setHov(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHov(false); }}
      style={{ perspective: "800px" }}>
      <div style={{
        borderRadius: 16,
        background: "linear-gradient(135deg, #0a1124 0%, #050a14 100%)",
        border: `1px solid ${hov ? accent + "55" : "#ffffff11"}`,
        padding: "16px 20px",
        display: "flex", alignItems: "center", gap: 18,
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hov ? "translateY(-4px)" : ""}`,
        transition: hov
          ? "transform 0.1s ease-out, border 0.2s, box-shadow 0.2s"
          : "transform 0.5s cubic-bezier(.23,1,.32,1), border 0.3s, box-shadow 0.3s",
        boxShadow: hov ? `0 20px 40px #000000aa, 0 0 30px ${accent}1a` : "0 4px 20px #00000066",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", left: 0, top: "15%", bottom: "15%", width: 3, borderRadius: 3,
          background: hov ? `linear-gradient(to bottom, transparent, ${accent}, transparent)` : "transparent",
          transition: "background 0.3s",
        }} />

        <PersonPhoto photo={member.photo} initials={member.initials} size={64} accent={accent} index={index} />

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontFamily: "'Syne', sans-serif", fontSize: 16, fontWeight: 700,
            color: "#ffffff", marginBottom: 4,
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          }}>{member.name}</div>
          <div style={{
            fontSize: 10, color: accent, textTransform: "uppercase",
            letterSpacing: "0.15em", fontWeight: 700,
          }}>{member.position}</div>
        </div>

        <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
          <SocialBtn href={member.linkedin} accent={accent}><IconLinkedIn /></SocialBtn>
          <SocialBtn href={member.instagram} accent={accent}><IconInstagram /></SocialBtn>
        </div>
      </div>
    </div>
  );
}

// VOLUNTEER
function VolBadge({ member, index }) {
  const [hov, setHov] = useState(false);
  const accent = "#81c784"; // Fresh green for volunteers
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", alignItems: "center", gap: 12, padding: "12px 16px",
        borderRadius: 14, cursor: "default",
        background: hov ? `linear-gradient(115deg, #0d1a2c, #060c18)` : "#080e1c",
        border: `1px solid ${hov ? accent + "55" : "#ffffff0f"}`,
        transform: hov ? "translateY(-4px) scale(1.02)" : "none",
        boxShadow: hov ? `0 12px 30px #00000088, 0 0 20px ${accent}15` : "0 4px 12px #00000044",
        transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
      }}>
      <PersonPhoto photo={member.photo} initials={member.initials} size={44} accent={accent} index={index} />
      <div>
        <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 700, color: "#f2f5f8", lineHeight: 1.2 }}>
          {member.name}
        </div>
        <div style={{ fontSize: 9, color: `${accent}aa`, textTransform: "uppercase", letterSpacing: "0.12em", marginTop: 3, fontWeight: 600 }}>
          Volunteer
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ label, accent, count }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 4, height: 24, background: accent, borderRadius: 4, boxShadow: `0 0 12px ${accent}66` }} />
        <span style={{
          fontFamily: "'Syne', sans-serif", fontSize: 26, fontWeight: 800,
          color: "#ffffff", letterSpacing: "-0.01em",
        }}>{label}</span>
        <span style={{
          fontSize: 12, fontWeight: 700, color: accent,
          padding: "4px 12px", borderRadius: 24,
          background: `${accent}1a`, border: `1px solid ${accent}40`,
          letterSpacing: "0.1em", marginLeft: 4,
        }}>{count}</span>
      </div>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${accent}40, transparent)` }} />
    </div>
  );
}

// MAIN COMPONENT
export default function Team() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Syne:wght@500;700;800&display=swap');
        
        .team-wrap { font-family: 'Plus Jakarta Sans', sans-serif; }
        .team-wrap *, .team-wrap *::before, .team-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .team-wrap a { text-decoration: none; }

        .sec-grid  { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
        .mem-grid  { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .vol-grid  { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }

        .orb { position: absolute; border-radius: 50%; pointer-events: none; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s cubic-bezier(.16, 1, .3, 1) both; }

        @media (max-width: 1024px) {
          .sec-grid { grid-template-columns: repeat(2, 1fr); }
          .vol-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
          .sec-grid { grid-template-columns: 1fr; }
          .mem-grid { grid-template-columns: 1fr; }
          .vol-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <div className="team-wrap" style={{
        background: "#020611",
        minHeight: "100vh",
        position: "relative",
        overflowX: "hidden",
      }}>

        <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <div className="orb" style={{ left: "-5%", top: "-5%", width: 700, height: 700, background: "#1e3a8a", filter: "blur(140px)", opacity: 0.15 }} />
          <div className="orb" style={{ right: "-10%", top: "15%", width: 600, height: 600, background: "#d4a843", filter: "blur(150px)", opacity: 0.1 }} />
          <div className="orb" style={{ left: "20%", top: "50%", width: 500, height: 500, background: "#0c4a6e", filter: "blur(120px)", opacity: 0.15 }} />
          <div className="orb" style={{ right: "10%", bottom: "-10%", width: 600, height: 600, background: "#172554", filter: "blur(130px)", opacity: 0.2 }} />
          
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(#ffffff03 1px, transparent 1px), linear-gradient(90deg, #ffffff03 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(circle at center, transparent 30%, #020611 100%)",
          }} />
        </div>

        {/*Content*/}
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "0 32px 80px" }}>

          {/*Hero*/}
          <div className="fade-up" style={{ paddingTop: 80, paddingBottom: 80, textAlign: "center" }}>
            <h1 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(48px, 8vw, 88px)",
              fontWeight: 800, lineHeight: 1.1,
              color: "#ffffff", letterSpacing: "-0.03em",
              marginBottom: 24,
            }}>
              Meet Our{" "}
              <span style={{
                position: "relative", display: "inline-block",
                background: "linear-gradient(135deg, #f5d78a 10%, #d4a843 50%, #9c7614 90%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Team
                <span style={{
                  position: "absolute", bottom: -4, left: 0, right: 0, height: 4,
                  background: "linear-gradient(90deg, transparent, #d4a843, transparent)",
                  borderRadius: 2, filter: "blur(1px)"
                }} />
              </span>
            </h1>

            <p style={{
              fontSize: 18, color: "#8b9db5", lineHeight: 1.7, fontWeight: 400,
              maxWidth: 540, margin: "0 auto 60px",
            }}>
              The minds, makers, and movers behind every startup, every event,
              every spark of entrepreneurial energy at IIT Indore.
            </p>
          </div>

          {/*SECRETARIES*/}
          <section className="fade-up" style={{ marginBottom: 96, animationDelay: "0.1s" }}>
            <SectionHeader label="Secretaries" accent="#d4a843" count={TEAM_DATA.secretaries.length} />
            <div className="sec-grid">
              {TEAM_DATA.secretaries.map((m, i) => (
                <SecretaryCard key={m.name} member={m} index={i} />
              ))}
            </div>
          </section>

          {/*CORE MEMBERS*/}
          <section className="fade-up" style={{ marginBottom: 96, animationDelay: "0.2s" }}>
            <SectionHeader label="Core Members" accent="#4fc3f7" count={TEAM_DATA.members.length} />
            <div className="mem-grid">
              {TEAM_DATA.members.map((m, i) => (
                <MemberCard key={m.name} member={m} index={i + 3} />
              ))}
            </div>
          </section>

          {/*VOLUNTEERS*/}
          <section className="fade-up" style={{ animationDelay: "0.3s" }}>
            <SectionHeader label="Volunteers" accent="#81c784" count={TEAM_DATA.volunteers.length} />
            <div style={{
              background: "linear-gradient(160deg, #060d1a, #03060c)",
              border: "1px solid #ffffff11", borderRadius: 24,
              padding: "36px",
              boxShadow: "0 20px 40px #000000aa",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: 0, right: 0, width: 300, height: 300,
                background: "radial-gradient(circle at top right, #81c78415, transparent 65%)",
                pointerEvents: "none",
              }} />
              <div className="vol-grid">
                {TEAM_DATA.volunteers.map((m, i) => (
                  <VolBadge key={m.name} member={m} index={i + 9} />
                ))}
              </div>
            </div>
          </section>

          {/*FOOTER*/}
          <div style={{
            display: "none", textAlign: "center", marginTop: 100,
            paddingTop: 48, borderTop: "1px solid #ffffff11",
          }}>
            <div style={{
              fontFamily: "'Syne', sans-serif", fontSize: 13, fontWeight: 700,
              color: "#475c7a", letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}>
              E-Cell · IIT Indore
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

