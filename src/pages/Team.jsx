import { useState, useRef } from "react";
import TEAM_DATA from "../Data/team.js";

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

// PHOTO / AVATAR
function PersonPhoto({ photo, initials, size, accent, index }) {
  const [imgError, setImgError] = useState(false);
  const bg = `hsl(${(index * 47) % 360}, 70%, 95%)`;

  if (photo && !imgError) {
    return (
      <div style={{
        width: size, height: size, borderRadius: "50%", overflow: "hidden",
        border: `3px solid ${accent}55`,
        boxShadow: `0 0 0 4px rgba(255,255,255,0.6), 0 10px 24px rgba(0,0,0,0.1)`,
        flexShrink: 0, position: "relative", background: "#ffffff"
      }}>
        <img 
          src={photo} 
          alt={initials} 
          onError={() => setImgError(true)} 
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} 
        />
      </div>
    );
  }
  
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%", flexShrink: 0,
      background: bg,
      border: `2px solid ${accent}55`,
      boxShadow: `0 0 0 4px rgba(255,255,255,0.6), 0 10px 24px rgba(0,0,0,0.1)`,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: size * 0.35, fontWeight: 800,
      color: accent, letterSpacing: "0.02em", userSelect: "none",
    }}>
      {initials}
    </div>
  );
}

// SOCIAL BUTTON
function SocialBtn({ href, accent, children }) {
  const [hov, setHov] = useState(false);
  if (!href) return null;
  return (
    <a href={href} target="_blank" rel="noreferrer"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        width: 36, height: 36, borderRadius: "50%", display: "flex",
        alignItems: "center", justifyContent: "center", textDecoration: "none",
        border: `1px solid ${hov ? accent : "rgba(255,255,255,0.8)"}`,
        background: hov ? accent : "rgba(255,255,255,0.5)",
        color: hov ? "#ffffff" : "#475569",
        transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
        transform: hov ? "scale(1.15) translateY(-2px)" : "scale(1)",
        boxShadow: hov ? `0 8px 16px ${accent}44` : "0 2px 4px rgba(0,0,0,0.02)",
      }}
    >{children}</a>
  );
}

// SECRETARY / BOARD CARD (Orange Theme)
function SecretaryCard({ member, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hov, setHov] = useState(false);
  const ref = useRef(null);
  
  const accent = "#f59e0b"; 

  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = ((e.clientY - r.top) / r.height - 0.5) * -10;
    const y = ((e.clientX - r.left) / r.width - 0.5) * 10;
    setTilt({ x, y });
  };
  const onLeave = () => { setTilt({ x: 0, y: 0 }); setHov(false); };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseEnter={() => setHov(true)} onMouseLeave={onLeave}
      style={{ perspective: "1000px", cursor: "default", height: "100%" }}>
      <div style={{
        height: "100%",
        borderRadius: 24,
        // DYNAMIC ORANGE GRADIENT
        background: hov ? "linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)" : "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, #ffedd5 100%)",
        backdropFilter: "blur(12px)",
        border: `1px solid ${hov ? accent + "66" : "rgba(255,255,255,0.6)"}`,
        padding: "36px 28px 28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", gap: 0,
        minHeight: 380, position: "relative", overflow: "hidden",
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hov ? "translateY(-8px) scale(1.02)" : "scale(1)"}`,
        transformStyle: "preserve-3d",
        transition: "transform 0.4s cubic-bezier(.23,1,.32,1), border 0.3s, box-shadow 0.3s, background 0.3s",
        boxShadow: hov ? `0 24px 48px rgba(245, 158, 11, 0.15), 0 0 0 1px ${accent}22` : "0 10px 30px rgba(0,0,0,0.06)",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`, opacity: hov ? 1 : 0.3,
          transition: "opacity 0.3s",
        }} />

        <div style={{ marginBottom: 24, position: "relative" }}>
          <div style={{
            position: "absolute", inset: -10, borderRadius: "50%",
            background: `radial-gradient(circle, ${accent}33 0%, transparent 70%)`,
            filter: "blur(8px)", pointerEvents: "none", transform: hov ? "scale(1.2)" : "scale(1)", transition: "transform 0.4s",
          }} />
          <div style={{ transform: "translateZ(30px)" }}>
             <PersonPhoto photo={member.photo} initials={member.initials} size={140} accent={accent} index={index} />
          </div>
        </div>

        <div style={{
          fontSize: 22, fontWeight: 800,
          color: "#1c2e65", letterSpacing: "-0.01em", textAlign: "center",
          marginBottom: 8, lineHeight: 1.2, transform: "translateZ(20px)"
        }}>{member.name}</div>

        <div style={{
          fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#d97706",
          padding: "6px 16px", borderRadius: 24, background: "rgba(254, 243, 199, 0.8)", 
          marginBottom: 18, transform: "translateZ(20px)"
        }}>{member.position}</div>

        <div style={{ display: "flex", gap: 12, transform: "translateZ(20px)" }}>
          <SocialBtn href={member.linkedin} accent={accent}><IconLinkedIn /></SocialBtn>
          <SocialBtn href={member.instagram} accent={accent}><IconInstagram /></SocialBtn>
        </div>
      </div>
    </div>
  );
}

// LEADER CARD (Blue Theme)
function MemberCard({ member, index }) {
  const [hov, setHov] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  
  const accent = "#465de5"; 

  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = ((e.clientY - r.top) / r.height - 0.5) * -8;
    const y = ((e.clientX - r.left) / r.width - 0.5) * 8;
    setTilt({ x, y });
  };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseEnter={() => setHov(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHov(false); }}
      style={{ perspective: "900px", cursor: "default", height: "100%" }}>
      <div style={{
        height: "100%", borderRadius: 24, 
        // DYNAMIC BLUE/INDIGO GRADIENT
        background: hov ? "linear-gradient(135deg, #eff6ff 0%, #c7d2fe 100%)" : "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, #e0e7ff 100%)", 
        backdropFilter: "blur(12px)",
        border: `1px solid ${hov ? accent + "55" : "rgba(255,255,255,0.6)"}`, padding: "32px 24px 24px",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", minHeight: 340,
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hov ? "translateY(-6px) scale(1.02)" : "scale(1)"}`,
        transformStyle: "preserve-3d", position: "relative", overflow: "hidden",
        transition: "transform 0.4s cubic-bezier(.23,1,.32,1), border 0.3s, box-shadow 0.3s, background 0.3s",
        boxShadow: hov ? `0 24px 48px rgba(70, 93, 229, 0.15)` : "0 10px 24px rgba(0,0,0,0.05)",
      }}>
        
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`, opacity: hov ? 1 : 0.3,
          transition: "opacity 0.3s",
        }} />

        <div style={{ marginBottom: 22, position: "relative", transform: "translateZ(28px)" }}>
          <div style={{
            position: "absolute", inset: -10, borderRadius: "50%",
            background: `radial-gradient(circle, ${accent}33 0%, transparent 70%)`, filter: "blur(8px)", pointerEvents: "none",
            transform: hov ? "scale(1.18)" : "scale(1)", transition: "transform 0.4s",
          }} />
          <PersonPhoto photo={member.photo} initials={member.initials} size={120} accent={accent} index={index} />
        </div>

        <div style={{
          fontSize: 20, fontWeight: 800, color: "#1c2e65", textAlign: "center", marginBottom: 8, lineHeight: 1.2, transform: "translateZ(20px)"
        }}>{member.name}</div>

        <div style={{
          fontSize: 10, color: "#2563eb", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 700, textAlign: "center",
          padding: "6px 14px", borderRadius: 24, background: "rgba(255, 255, 255, 0.7)", marginBottom: 18, transform: "translateZ(20px)"
        }}>{member.position}</div>

        <div style={{ display: "flex", gap: 10, transform: "translateZ(20px)" }}>
          <SocialBtn href={member.linkedin} accent={accent}><IconLinkedIn /></SocialBtn>
          <SocialBtn href={member.instagram} accent={accent}><IconInstagram /></SocialBtn>
        </div>
      </div>
    </div>
  );
}

// TEAM VOLUNTEER BADGE (Alternating Blue and Teal Themes)
function VolBadge({ member, index, isBlueTheme }) {
  const [hov, setHov] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  
  const accent = isBlueTheme ? "#465de5" : "#0d9488"; 

  // DYNAMIC GRADIENTS BASED ON THEME
  const bgDefault = isBlueTheme 
    ? "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, #dbeafe 100%)" 
    : "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, #ccfbf1 100%)";
  
  const bgHover = isBlueTheme 
    ? "linear-gradient(135deg, #eff6ff 0%, #bfdbfe 100%)" 
    : "linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%)";

  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = ((e.clientY - r.top) / r.height - 0.5) * -6;
    const y = ((e.clientX - r.left) / r.width - 0.5) * 6;
    setTilt({ x, y });
  };
  const onLeave = () => { setTilt({ x: 0, y: 0 }); setHov(false); };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseEnter={() => setHov(true)} onMouseLeave={onLeave}
      style={{ perspective: "900px", cursor: "default", height: "100%" }}>
      <div style={{
        height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", padding: "26px 20px 22px", minHeight: 280, 
        borderRadius: 24, position: "relative", overflow: "hidden", 
        background: hov ? bgHover : bgDefault, 
        backdropFilter: "blur(12px)",
        border: `1px solid ${hov ? accent + "55" : "rgba(255,255,255,0.6)"}`,
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hov ? "translateY(-4px) scale(1.02)" : "scale(1)"}`,
        transformStyle: "preserve-3d",
        boxShadow: hov ? `0 20px 32px ${accent}22` : "0 6px 16px rgba(0,0,0,0.04)",
        transition: "transform 0.4s cubic-bezier(.23,1,.32,1), border 0.3s, box-shadow 0.3s, background 0.3s",
      }}>
        
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 3,
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`, opacity: hov ? 1 : 0.2,
          transition: "opacity 0.3s",
        }} />

        <div style={{ marginBottom: 18, position: "relative", transform: "translateZ(28px)" }}>
          <div style={{ position: "absolute", inset: -8, borderRadius: "50%", background: `radial-gradient(circle, ${accent}33 0%, transparent 70%)`, filter: "blur(7px)", pointerEvents: "none", transform: hov ? "scale(1.15)" : "scale(1)", transition: "transform 0.4s" }} />
          <PersonPhoto photo={member.photo} initials={member.initials} size={100} accent={accent} index={index} />
        </div>
        
        <div style={{ fontSize: 17, fontWeight: 800, color: "#1c2e65", lineHeight: 1.2, textAlign: "center", marginBottom: 12, transform: "translateZ(20px)" }}>
          {member.name}
        </div>

        <div style={{ display: "flex", gap: 8, marginTop: "auto", transform: "translateZ(20px)" }}>
          <SocialBtn href={member.linkedin} accent={accent}><IconLinkedIn /></SocialBtn>
          <SocialBtn href={member.instagram} accent={accent}><IconInstagram /></SocialBtn>
        </div>
      </div>
    </div>
  );
}

// HEADER
function SectionHeader({ label, accent }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 6, height: 28, background: accent, borderRadius: 4 }} />
        <span style={{ fontFamily: "'Kaushan Script', cursive", fontSize: 36, fontWeight: 400, color: "#1c2e65", letterSpacing: "0.02em" }}>
          {label}
        </span>
      </div>
    </div>
  );
}

// MAIN COMPONENT
export default function Team() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
        .team-wrap *, .team-wrap *::before, .team-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .team-wrap a { text-decoration: none; }
        .team-wrap, .team-content { width: 100%; max-width: 100%; overflow-x: clip; }
        .sec-grid  { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
        .mem-grid  { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
        .vol-grid  { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .orb { position: absolute; border-radius: 50%; pointer-events: none; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s cubic-bezier(.16, 1, .3, 1) both; }
        @media (max-width: 1024px) {
          .sec-grid { grid-template-columns: repeat(2, 1fr); }
          .mem-grid { grid-template-columns: repeat(2, 1fr); }
          .vol-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
          .sec-grid, .mem-grid { grid-template-columns: 1fr; }
          .vol-grid { grid-template-columns: repeat(2, 1fr); }
          .team-content { padding-left: 20px !important; padding-right: 20px !important; }
        }
        @media (max-width: 520px) {
          .vol-grid { grid-template-columns: 1fr; }
          .team-content { padding-left: 16px !important; padding-right: 16px !important; }
        }
      `}</style>

      {/* DEEPER SHADED BACKGROUND WRAPPER */}
      <div className="team-wrap" style={{ 
        background: "linear-gradient(135deg, #a6d0f7 0%, #f0f6ff 50%, #bedbf7 100%)", 
        backgroundAttachment: "fixed",
        minHeight: "100vh", width: "100%", maxWidth: "100vw", position: "relative", overflowX: "hidden", overflowY: "visible" 
      }}>

        <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
          <div className="orb" style={{ left: "-10%", top: "-10%", width: "50vw", height: "50vw", background: "#8dbcf2", filter: "blur(140px)", opacity: 0.5 }} />
          <div className="orb" style={{ right: "-5%", top: "20%", width: "40vw", height: "40vw", background: "#d6e6f9", filter: "blur(140px)", opacity: 0.6 }} />
          <div className="orb" style={{ left: "15%", bottom: "-10%", width: "60vw", height: "60vw", background: "#d1e5fb", filter: "blur(150px)", opacity: 0.5 }} />
          <div className="orb" style={{ right: "-10%", bottom: "-20%", width: "55vw", height: "55vw", background: "#b3d4f5", filter: "blur(130px)", opacity: 0.6 }} />
        </div>

        <div className="team-content" style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "0 28px 64px" }}>

          <div className="team-hero fade-up" style={{ paddingTop: 64, paddingBottom: 54, textAlign: "center" }}>
            <h1 style={{ fontFamily: "'Kaushan Script', cursive", fontSize: "clamp(54px, 7vw, 84px)", fontWeight: 400, lineHeight: 1.1, color: "#1c2e65", letterSpacing: "0", marginBottom: 20 }}>
              Meet Our <span style={{ color: "#465de5" }}>Team</span>
            </h1>
            <p style={{ fontSize: 18, color: "#475569", lineHeight: 1.7, fontWeight: 400, maxWidth: 600, margin: "0 auto" }}>
              The minds, makers, and movers behind every startup, every event, and every spark of entrepreneurial energy at IIT Indore.
            </p>
          </div>

          <section className="fade-up" style={{ marginBottom: 64, animationDelay: "0.1s" }}>
            <SectionHeader label="Board of Directors" accent="#f59e0b" />
            <div className="sec-grid">
              {TEAM_DATA.board.map((m, i) => (
                <SecretaryCard key={m.name} member={m} index={i} />
              ))}
            </div>
          </section>

          <section className="fade-up" style={{ marginBottom: 64, animationDelay: "0.2s" }}>
            <SectionHeader label="Secretaries" accent="#f59e0b" />
            <div className="sec-grid">
              {TEAM_DATA.secretaries.map((m, i) => (
                <SecretaryCard key={m.name} member={m} index={i + 3} />
              ))}
            </div>
          </section>

          <section className="fade-up" style={{ marginBottom: 64, animationDelay: "0.3s" }}>
            <SectionHeader label="Team Leaders" accent="#465de5" /> 
            <div className="mem-grid">
              {TEAM_DATA.leaders.map((m, i) => (
                <MemberCard key={m.name} member={m} index={i + 10} />
              ))}
            </div>
          </section>

          {Object.entries(TEAM_DATA.teams).map(([teamName, members], idx) => {
            const isBlueTheme = idx % 2 === 0;
            const sectionAccent = isBlueTheme ? "#465de5" : "#0d9488";

            return (
              <section key={teamName} className="fade-up" style={{ marginBottom: 54, animationDelay: `${0.4 + idx * 0.1}s` }}>
                <SectionHeader label={`${teamName} Team`} accent={sectionAccent} />
                <div className="vol-grid">
                  {members.map((m, i) => (
                    <VolBadge key={m.name} member={m} index={i * idx * 2} isBlueTheme={isBlueTheme} />
                  ))}
                </div>
              </section>
            );
          })}

        </div>
      </div>
    </>
  );
}