// import { useState, useRef } from "react";
// import TEAM_DATA from "../Data/team.js";

// // SVG ICONS
// const IconLinkedIn = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
//     <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
//   </svg>
// );
// const IconInstagram = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
//   </svg>
// );
// const IconMail = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
//   </svg>
// );

// // PHOTO / AVATAR (With Image Error Fallback)
// function PersonPhoto({ photo, initials, size, accent, index }) {
//   const [imgError, setImgError] = useState(false);
//   const bg = `hsl(${(index * 47) % 360},40%,12%)`;

//   if (photo && !imgError) {
//     return (
//       <div style={{
//         width: size, height: size, borderRadius: "50%", overflow: "hidden",
//         border: `2px solid ${accent}88`,
//         boxShadow: `0 0 0 4px ${accent}15, 0 8px 24px #00000088`,
//         flexShrink: 0, position: "relative",
//       }}>
//         <img 
//           src={photo} 
//           alt={initials} 
//           onError={() => setImgError(true)} // Triggers placeholder on failure
//           style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} 
//         />
//       </div>
//     );
//   }
  
//   // Fallback Placeholder
//   return (
//     <div style={{
//       width: size, height: size, borderRadius: "50%", flexShrink: 0,
//       background: `radial-gradient(circle at 35% 35%, ${accent}28, ${bg} 70%)`,
//       border: `2px solid ${accent}66`,
//       boxShadow: `0 0 0 4px ${accent}15, 0 8px 24px #00000088`,
//       display: "flex", alignItems: "center", justifyContent: "center",
//       fontFamily: "'Syne', sans-serif", fontSize: size * 0.35, fontWeight: 800,
//       color: accent, letterSpacing: "0.02em", userSelect: "none",
//     }}>
//       {initials}
//     </div>
//   );
// }

// // SOCIAL BUTTON
// function SocialBtn({ href, accent, children }) {
//   const [hov, setHov] = useState(false);
//   if (!href) return null; // Hide if no link provided
//   return (
//     <a href={href} target="_blank" rel="noreferrer"
//       onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
//       style={{
//         width: 36, height: 36, borderRadius: "50%", display: "flex",
//         alignItems: "center", justifyContent: "center", textDecoration: "none",
//         border: `1px solid ${hov ? accent + "aa" : "#ffffff1a"}`,
//         background: hov ? `${accent}1a` : "#ffffff05",
//         color: hov ? accent : `#ffffff88`,
//         transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
//         transform: hov ? "scale(1.15) translateY(-2px)" : "scale(1)",
//         boxShadow: hov ? `0 8px 16px ${accent}22` : "none",
//       }}
//     >{children}</a>
//   );
// }

// // SECRETARY / BOARD CARD
// function SecretaryCard({ member, index }) {
//   const [tilt, setTilt] = useState({ x: 0, y: 0 });
//   const [hov, setHov] = useState(false);
//   const ref = useRef(null);
  
//   const accent = "#d4a843"; 
//   const secondary = "#0c1f45"; 

//   const onMove = (e) => {
//     if (!ref.current) return;
//     const r = ref.current.getBoundingClientRect();
//     const x = ((e.clientY - r.top) / r.height - 0.5) * -15;
//     const y = ((e.clientX - r.left) / r.width - 0.5) * 15;
//     setTilt({ x, y });
//   };
//   const onLeave = () => { setTilt({ x: 0, y: 0 }); setHov(false); };

//   return (
//     <div ref={ref} onMouseMove={onMove} onMouseEnter={() => setHov(true)} onMouseLeave={onLeave}
//       style={{ perspective: "1000px", cursor: "default", height: "100%" }}> {/* <-- Added height 100% here */}
//       <div style={{
//         height: "100%", // <-- Added height 100% here
//         borderRadius: 24,
//         background: `linear-gradient(145deg, #070e20 0%, ${secondary} 50%, #030814 100%)`,
//         border: `1px solid ${hov ? accent + "80" : accent + "22"}`,
//         padding: "36px 28px 28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", gap: 0,
//         minHeight: 380,
//         position: "relative", overflow: "hidden",
//         transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hov ? "translateY(-12px) scale(1.02)" : "scale(1)"}`,
//         transformStyle: "preserve-3d",
//         transition: hov ? "transform 0.1s ease-out, border 0.3s, box-shadow 0.3s" : "transform 0.6s cubic-bezier(.23,1,.32,1), border 0.4s, box-shadow 0.4s",
//         boxShadow: hov ? `0 30px 60px #00000099, 0 0 0 1px ${accent}44, 0 0 60px ${accent}25` : "0 10px 40px #00000099",
//       }}>
//         <div style={{
//           position: "absolute", inset: 0, borderRadius: 24, pointerEvents: "none",
//           background: hov ? `radial-gradient(circle at ${50 + tilt.y * 2}% ${50 + tilt.x * 2}%, ${accent}1a 0%, #1e3a8a33 40%, transparent 80%)` : "none",
//           transition: "background 0.2s",
//         }} />
//         <div style={{
//           position: "absolute", top: 0, left: 0, right: 0, height: 3,
//           background: `linear-gradient(90deg, transparent, ${accent}, transparent)`, opacity: hov ? 1 : 0.6,
//           transition: "opacity 0.3s",
//         }} />

//         <div style={{ marginBottom: 24, position: "relative" }}>
//           <div style={{
//             position: "absolute", inset: -10, borderRadius: "50%",
//             background: `radial-gradient(circle, ${accent}33 0%, #1e3a8a44 40%, transparent 70%)`,
//             filter: "blur(8px)", pointerEvents: "none", transform: hov ? "scale(1.2)" : "scale(1)", transition: "transform 0.4s",
//           }} />
//           <div style={{ transform: "translateZ(30px)" }}>
//              <PersonPhoto photo={member.photo} initials={member.initials} size={150} accent={accent} index={index} />
//           </div>
//         </div>

//         <div style={{
//           fontFamily: "'Syne', sans-serif", fontSize: 24, fontWeight: 800,
//           color: "#ffffff", letterSpacing: "-0.01em", textAlign: "center",
//           marginBottom: 8, lineHeight: 1.2, transform: "translateZ(20px)"
//         }}>{member.name}</div>

//         <div style={{
//           fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: accent,
//           padding: "6px 16px", borderRadius: 24, background: `linear-gradient(90deg, ${accent}11, ${accent}05)`, 
//           border: `1px solid ${accent}44`, marginBottom: 18, transform: "translateZ(20px)"
//         }}>{member.position}</div>

//         <div style={{ display: "flex", gap: 12, transform: "translateZ(20px)" }}>
//           <SocialBtn href={member.linkedin} accent={accent}><IconLinkedIn /></SocialBtn>
//           <SocialBtn href={member.instagram} accent={accent}><IconInstagram /></SocialBtn>
//         </div>
//       </div>
//     </div>
//   );
// }

// // LEADER CARD
// function MemberCard({ member, index }) {
//   const [hov, setHov] = useState(false);
//   const [tilt, setTilt] = useState({ x: 0, y: 0 });
//   const ref = useRef(null);
//   const accent = "#4fc3f7";
//   const secondary = "#082f49";

//   const onMove = (e) => {
//     if (!ref.current) return;
//     const r = ref.current.getBoundingClientRect();
//     const x = ((e.clientY - r.top) / r.height - 0.5) * -10;
//     const y = ((e.clientX - r.left) / r.width - 0.5) * 10;
//     setTilt({ x, y });
//   };

//   return (
//     <div ref={ref} onMouseMove={onMove} onMouseEnter={() => setHov(true)}
//       onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHov(false); }}
//       style={{ perspective: "900px", cursor: "default", height: "100%" }}> {/* <-- Added height 100% here */}
//       <div style={{
//         height: "100%", // <-- Added height 100% here
//         borderRadius: 24, background: `linear-gradient(145deg, #06101f 0%, ${secondary} 52%, #030814 100%)`,
//         border: `1px solid ${hov ? accent + "80" : accent + "22"}`, padding: "32px 24px 24px",
//         display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", minHeight: 340,
//         transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hov ? "translateY(-10px) scale(1.02)" : "scale(1)"}`,
//         transformStyle: "preserve-3d", position: "relative", overflow: "hidden",
//         transition: hov ? "transform 0.1s ease-out, border 0.3s, box-shadow 0.3s" : "transform 0.6s cubic-bezier(.23,1,.32,1), border 0.4s, box-shadow 0.4s",
//         boxShadow: hov ? `0 26px 54px #00000099, 0 0 0 1px ${accent}44, 0 0 48px ${accent}22` : "0 10px 36px #00000088",
//       }}>
//         <div style={{
//           position: "absolute", inset: 0, borderRadius: 24, pointerEvents: "none",
//           background: hov ? `radial-gradient(circle at ${50 + tilt.y * 2}% ${50 + tilt.x * 2}%, ${accent}1a 0%, #1e3a8a24 42%, transparent 80%)` : "none",
//           transition: "background 0.2s",
//         }} />
//         <div style={{
//           position: "absolute", top: 0, left: 0, right: 0, height: 3,
//           background: `linear-gradient(90deg, transparent, ${accent}, transparent)`, opacity: hov ? 1 : 0.6,
//           transition: "opacity 0.3s",
//         }} />

//         <div style={{ marginBottom: 22, position: "relative", transform: "translateZ(28px)" }}>
//           <div style={{
//             position: "absolute", inset: -10, borderRadius: "50%",
//             background: `radial-gradient(circle, ${accent}30 0%, #1e3a8a36 42%, transparent 70%)`, filter: "blur(8px)", pointerEvents: "none",
//             transform: hov ? "scale(1.18)" : "scale(1)", transition: "transform 0.4s",
//           }} />
//           <PersonPhoto photo={member.photo} initials={member.initials} size={130} accent={accent} index={index} />
//         </div>

//         <div style={{
//           fontFamily: "'Syne', sans-serif", fontSize: 21, fontWeight: 800, color: "#ffffff", textAlign: "center", marginBottom: 8, lineHeight: 1.2, transform: "translateZ(20px)"
//         }}>{member.name}</div>

//         <div style={{
//           fontSize: 10, color: accent, textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 700, textAlign: "center",
//           padding: "6px 14px", borderRadius: 24, background: `${accent}12`, border: `1px solid ${accent}38`, marginBottom: 18, transform: "translateZ(20px)"
//         }}>{member.position}</div>

//         <div style={{ display: "flex", gap: 10, transform: "translateZ(20px)" }}>
//           <SocialBtn href={member.linkedin} accent={accent}><IconLinkedIn /></SocialBtn>
//           <SocialBtn href={member.instagram} accent={accent}><IconInstagram /></SocialBtn>
//         </div>
//       </div>
//     </div>
//   );
// }

// // TEAM VOLUNTEER BADGE 
// function VolBadge({ member, index }) {
//   const [hov, setHov] = useState(false);
//   const [tilt, setTilt] = useState({ x: 0, y: 0 });
//   const ref = useRef(null);
//   const accent = "#81c784";

//   const onMove = (e) => {
//     if (!ref.current) return;
//     const r = ref.current.getBoundingClientRect();
//     const x = ((e.clientY - r.top) / r.height - 0.5) * -10;
//     const y = ((e.clientX - r.left) / r.width - 0.5) * 10;
//     setTilt({ x, y });
//   };
//   const onLeave = () => { setTilt({ x: 0, y: 0 }); setHov(false); };

//   return (
//     <div ref={ref} onMouseMove={onMove} onMouseEnter={() => setHov(true)} onMouseLeave={onLeave}
//       style={{ perspective: "900px", cursor: "default", height: "100%" }}> {/* <-- Added height 100% here */}
//       <div style={{
//         height: "100%", // <-- Added height 100% here
//         display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", padding: "26px 20px 22px", minHeight: 280, 
//         borderRadius: 24, position: "relative", overflow: "hidden",
//         background: "linear-gradient(145deg, #06120f 0%, #0b2018 54%, #030814 100%)",
//         border: `1px solid ${hov ? accent + "78" : accent + "20"}`,
//         transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hov ? "translateY(-8px) scale(1.02)" : "scale(1)"}`,
//         transformStyle: "preserve-3d",
//         boxShadow: hov ? `0 24px 48px #00000090, 0 0 44px ${accent}20` : "0 10px 32px #00000077",
//         transition: hov ? "transform 0.1s ease-out, border 0.3s, box-shadow 0.3s" : "transform 0.6s cubic-bezier(.23,1,.32,1), border 0.4s, box-shadow 0.4s",
//       }}>
//         <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, transparent, ${accent}, transparent)`, opacity: hov ? 1 : 0.6 }} />
        
//         <div style={{ marginBottom: 18, position: "relative", transform: "translateZ(28px)" }}>
//           <div style={{ position: "absolute", inset: -8, borderRadius: "50%", background: `radial-gradient(circle, ${accent}28 0%, transparent 70%)`, filter: "blur(7px)", pointerEvents: "none" }} />
//           <PersonPhoto photo={member.photo} initials={member.initials} size={110} accent={accent} index={index} />
//         </div>
        
//         <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 800, color: "#f2f5f8", lineHeight: 1.2, textAlign: "center", marginBottom: 12, transform: "translateZ(20px)" }}>
//           {member.name}
//         </div>

//         {/* Mini Socials for Volunteers */}
//         <div style={{ display: "flex", gap: 8, marginTop: "auto", transform: "translateZ(20px)" }}>
//           <SocialBtn href={member.linkedin} accent={accent}><IconLinkedIn /></SocialBtn>
//           <SocialBtn href={member.instagram} accent={accent}><IconInstagram /></SocialBtn>
//         </div>
//       </div>
//     </div>
//   );
// }

// // HEADER
// function SectionHeader({ label, accent }) {
//   return (
//     <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
//       <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//         <div style={{ width: 4, height: 24, background: accent, borderRadius: 4, boxShadow: `0 0 12px ${accent}66` }} />
//         <span style={{ fontFamily: "'Kaushan Script', cursive", fontSize: 34, fontWeight: 400, color: "#ffffff", letterSpacing: 0 }}>
//           {label}
//         </span>
//       </div>
//     </div>
//   );
// }

// // MAIN COMPONENT
// export default function Team() {
//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Syne:wght@500;700;800&display=swap');
//         .team-wrap { font-family: 'Plus Jakarta Sans', sans-serif; }
//         .team-wrap *, .team-wrap *::before, .team-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }
//         .team-wrap a { text-decoration: none; }
//         .team-wrap, .team-content { width: 100%; max-width: 100%; overflow-x: clip; }
//         .sec-grid  { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
//         .mem-grid  { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
//         .vol-grid  { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
//         .orb { position: absolute; border-radius: 50%; pointer-events: none; }
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         .fade-up { animation: fadeUp 0.7s cubic-bezier(.16, 1, .3, 1) both; }
//         @media (max-width: 1024px) {
//           .sec-grid { grid-template-columns: repeat(2, 1fr); }
//           .mem-grid { grid-template-columns: repeat(2, 1fr); }
//           .vol-grid { grid-template-columns: repeat(3, 1fr); }
//         }
//         @media (max-width: 768px) {
//           .sec-grid, .mem-grid { grid-template-columns: 1fr; }
//           .vol-grid { grid-template-columns: repeat(2, 1fr); }
//           .team-content { padding-left: 20px !important; padding-right: 20px !important; }
//         }
//         @media (max-width: 520px) {
//           .vol-grid { grid-template-columns: 1fr; }
//           .team-content { padding-left: 16px !important; padding-right: 16px !important; }
//         }
//       `}</style>

//       <div className="team-wrap" style={{ background: "#020611", minHeight: "100vh", width: "100%", maxWidth: "100vw", position: "relative", overflowX: "hidden", overflowY: "visible" }}>
        
//         {/* Background Effects */}
//         <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
//           <div className="orb" style={{ left: "-5%", top: "-5%", width: 700, height: 700, background: "#1e3a8a", filter: "blur(140px)", opacity: 0.15 }} />
//           <div className="orb" style={{ right: "-10%", top: "15%", width: 600, height: 600, background: "#d4a843", filter: "blur(150px)", opacity: 0.1 }} />
//           <div className="orb" style={{ left: "20%", top: "50%", width: 500, height: 500, background: "#0c4a6e", filter: "blur(120px)", opacity: 0.15 }} />
//           <div className="orb" style={{ right: "10%", bottom: "-10%", width: 600, height: 600, background: "#172554", filter: "blur(130px)", opacity: 0.2 }} />
//           <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(#ffffff03 1px, transparent 1px), linear-gradient(90deg, #ffffff03 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
//           <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center, transparent 30%, #020611 100%)" }} />
//         </div>

//         {/* Content */}
//         <div className="team-content" style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "0 28px 56px" }}>

//           <div className="team-hero fade-up" style={{ paddingTop: 48, paddingBottom: 42, textAlign: "center" }}>
//             <h1 style={{ fontFamily: "'Kaushan Script', cursive", fontSize: "clamp(52px, 8vw, 96px)", fontWeight: 400, lineHeight: 1.08, color: "#ffffff", letterSpacing: 0, marginBottom: 20 }}>
//               Meet Our <span style={{ position: "relative", display: "inline-block", background: "linear-gradient(135deg, #f5d78a 10%, #d4a843 50%, #9c7614 90%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Team<span style={{ position: "absolute", bottom: -4, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, transparent, #d4a843, transparent)", borderRadius: 2, filter: "blur(1px)" }} /></span>
//             </h1>
//             <p style={{ fontSize: 18, color: "#8b9db5", lineHeight: 1.7, fontWeight: 400, maxWidth: 540, margin: "0 auto" }}>
//               The minds, makers, and movers behind every startup, every event, every spark of entrepreneurial energy at IIT Indore.
//             </p>
//           </div>

//           {/* BOARD OF DIRECTORS (CEOs & Asst) */}
//           <section className="fade-up" style={{ marginBottom: 54, animationDelay: "0.1s" }}>
//             <SectionHeader label="Board of Directors" accent="#d4a843" />
//             <div className="sec-grid">
//               {TEAM_DATA.board.map((m, i) => (
//                 <SecretaryCard key={m.name} member={m} index={i} />
//               ))}
//             </div>
//           </section>

//           {/* SECRETARIES */}
//           <section className="fade-up" style={{ marginBottom: 54, animationDelay: "0.2s" }}>
//             <SectionHeader label="Secretaries" accent="#d4a843" />
//             <div className="sec-grid">
//               {TEAM_DATA.secretaries.map((m, i) => (
//                 <SecretaryCard key={m.name} member={m} index={i + 3} />
//               ))}
//             </div>
//           </section>

//           {/* TEAM LEADERS */}
//           <section className="fade-up" style={{ marginBottom: 54, animationDelay: "0.3s" }}>
//             <SectionHeader label="Team Leaders" accent="#4fc3f7" />
//             <div className="mem-grid">
//               {TEAM_DATA.leaders.map((m, i) => (
//                 <MemberCard key={m.name} member={m} index={i + 10} />
//               ))}
//             </div>
//           </section>

//           {/* DYNAMIC TEAMS */}
//           {Object.entries(TEAM_DATA.teams).map(([teamName, members], idx) => (
//             <section key={teamName} className="fade-up" style={{ marginBottom: 54, animationDelay: `${0.4 + idx * 0.1}s` }}>
//               <SectionHeader label={`${teamName} Team`} accent="#81c784" />
//               <div className="vol-grid">
//                 {members.map((m, i) => (
//                   <VolBadge key={m.name} member={m} index={i * idx * 2} />
//                 ))}
//               </div>
//             </section>
//           ))}

//         </div>
//       </div>
//     </>
//   );
// }








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
const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);

// PHOTO / AVATAR (With Image Error Fallback)
function PersonPhoto({ photo, initials, size, accent, index }) {
  const [imgError, setImgError] = useState(false);
  const bg = `hsl(${(index * 47) % 360},40%,12%)`;

  if (photo && !imgError) {
    return (
      <div style={{
        width: size, height: size, borderRadius: "50%", overflow: "hidden",
        border: `2px solid ${accent}88`,
        boxShadow: `0 0 0 4px ${accent}15, 0 8px 24px #00000088`,
        flexShrink: 0, position: "relative",
      }}>
        <img 
          src={photo} 
          alt={initials} 
          onError={() => setImgError(true)} // Triggers placeholder on failure
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} 
        />
      </div>
    );
  }
  
  // Fallback Placeholder
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%", flexShrink: 0,
      background: `radial-gradient(circle at 35% 35%, ${accent}28, ${bg} 70%)`,
      border: `2px solid ${accent}66`,
      boxShadow: `0 0 0 4px ${accent}15, 0 8px 24px #00000088`,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "'Syne', sans-serif", fontSize: size * 0.35, fontWeight: 800,
      color: accent, letterSpacing: "0.02em", userSelect: "none",
    }}>
      {initials}
    </div>
  );
}

// SOCIAL BUTTON
function SocialBtn({ href, accent, children }) {
  const [hov, setHov] = useState(false);
  if (!href) return null; // Hide if no link provided
  return (
    <a href={href} target="_blank" rel="noreferrer"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
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

// SECRETARY / BOARD CARD
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
      style={{ perspective: "1000px", cursor: "default", height: "100%" }}>
      <div style={{
        height: "100%",
        borderRadius: 24,
        background: `linear-gradient(145deg, #070e20 0%, ${secondary} 50%, #030814 100%)`,
        border: `1px solid ${hov ? accent + "80" : accent + "22"}`,
        padding: "36px 28px 28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", gap: 0,
        minHeight: 380,
        position: "relative", overflow: "hidden",
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hov ? "translateY(-12px) scale(1.02)" : "scale(1)"}`,
        transformStyle: "preserve-3d",
        transition: hov ? "transform 0.1s ease-out, border 0.3s, box-shadow 0.3s" : "transform 0.6s cubic-bezier(.23,1,.32,1), border 0.4s, box-shadow 0.4s",
        boxShadow: hov ? `0 30px 60px #00000099, 0 0 0 1px ${accent}44, 0 0 60px ${accent}25` : "0 10px 40px #00000099",
      }}>
        <div style={{
          position: "absolute", inset: 0, borderRadius: 24, pointerEvents: "none",
          background: hov ? `radial-gradient(circle at ${50 + tilt.y * 2}% ${50 + tilt.x * 2}%, ${accent}1a 0%, #1e3a8a33 40%, transparent 80%)` : "none",
          transition: "background 0.2s",
        }} />
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 3,
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`, opacity: hov ? 1 : 0.6,
          transition: "opacity 0.3s",
        }} />

        <div style={{ marginBottom: 24, position: "relative" }}>
          <div style={{
            position: "absolute", inset: -10, borderRadius: "50%",
            background: `radial-gradient(circle, ${accent}33 0%, #1e3a8a44 40%, transparent 70%)`,
            filter: "blur(8px)", pointerEvents: "none", transform: hov ? "scale(1.2)" : "scale(1)", transition: "transform 0.4s",
          }} />
          <div style={{ transform: "translateZ(30px)" }}>
             <PersonPhoto photo={member.photo} initials={member.initials} size={150} accent={accent} index={index} />
          </div>
        </div>

        <div style={{
          fontFamily: "'Syne', sans-serif", fontSize: 24, fontWeight: 800,
          color: "#ffffff", letterSpacing: "-0.01em", textAlign: "center",
          marginBottom: 8, lineHeight: 1.2, transform: "translateZ(20px)"
        }}>{member.name}</div>

        <div style={{
          fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: accent,
          padding: "6px 16px", borderRadius: 24, background: `linear-gradient(90deg, ${accent}11, ${accent}05)`, 
          border: `1px solid ${accent}44`, marginBottom: 18, transform: "translateZ(20px)"
        }}>{member.position}</div>

        <div style={{ display: "flex", gap: 12, transform: "translateZ(20px)" }}>
          <SocialBtn href={member.linkedin} accent={accent}><IconLinkedIn /></SocialBtn>
          <SocialBtn href={member.instagram} accent={accent}><IconInstagram /></SocialBtn>
        </div>
      </div>
    </div>
  );
}

// LEADER CARD (Golden Green Theme)
function MemberCard({ member, index }) {
  const [hov, setHov] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  
  // Golden green theme
  const accent = "#c0ca33"; 
  const secondary = "#1c2b14"; 

  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = ((e.clientY - r.top) / r.height - 0.5) * -10;
    const y = ((e.clientX - r.left) / r.width - 0.5) * 10;
    setTilt({ x, y });
  };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseEnter={() => setHov(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHov(false); }}
      style={{ perspective: "900px", cursor: "default", height: "100%" }}>
      <div style={{
        height: "100%",
        borderRadius: 24, background: `linear-gradient(145deg, #091206 0%, ${secondary} 52%, #020601 100%)`,
        border: `1px solid ${hov ? accent + "80" : accent + "22"}`, padding: "32px 24px 24px",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", minHeight: 340,
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hov ? "translateY(-10px) scale(1.02)" : "scale(1)"}`,
        transformStyle: "preserve-3d", position: "relative", overflow: "hidden",
        transition: hov ? "transform 0.1s ease-out, border 0.3s, box-shadow 0.3s" : "transform 0.6s cubic-bezier(.23,1,.32,1), border 0.4s, box-shadow 0.4s",
        boxShadow: hov ? `0 26px 54px #00000099, 0 0 0 1px ${accent}44, 0 0 48px ${accent}22` : "0 10px 36px #00000088",
      }}>
        <div style={{
          position: "absolute", inset: 0, borderRadius: 24, pointerEvents: "none",
          background: hov ? `radial-gradient(circle at ${50 + tilt.y * 2}% ${50 + tilt.x * 2}%, ${accent}1a 0%, #2b3a1e40 42%, transparent 80%)` : "none",
          transition: "background 0.2s",
        }} />
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 3,
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`, opacity: hov ? 1 : 0.6,
          transition: "opacity 0.3s",
        }} />

        <div style={{ marginBottom: 22, position: "relative", transform: "translateZ(28px)" }}>
          <div style={{
            position: "absolute", inset: -10, borderRadius: "50%",
            background: `radial-gradient(circle, ${accent}30 0%, #2b3a1e50 42%, transparent 70%)`, filter: "blur(8px)", pointerEvents: "none",
            transform: hov ? "scale(1.18)" : "scale(1)", transition: "transform 0.4s",
          }} />
          <PersonPhoto photo={member.photo} initials={member.initials} size={130} accent={accent} index={index} />
        </div>

        <div style={{
          fontFamily: "'Syne', sans-serif", fontSize: 21, fontWeight: 800, color: "#ffffff", textAlign: "center", marginBottom: 8, lineHeight: 1.2, transform: "translateZ(20px)"
        }}>{member.name}</div>

        <div style={{
          fontSize: 10, color: accent, textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 700, textAlign: "center",
          padding: "6px 14px", borderRadius: 24, background: `${accent}12`, border: `1px solid ${accent}38`, marginBottom: 18, transform: "translateZ(20px)"
        }}>{member.position}</div>

        <div style={{ display: "flex", gap: 10, transform: "translateZ(20px)" }}>
          <SocialBtn href={member.linkedin} accent={accent}><IconLinkedIn /></SocialBtn>
          <SocialBtn href={member.instagram} accent={accent}><IconInstagram /></SocialBtn>
        </div>
      </div>
    </div>
  );
}

// TEAM VOLUNTEER BADGE (Dynamic Alternate Blue & Green Theme)
function VolBadge({ member, index, isBlueTheme }) {
  const [hov, setHov] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  
  const accent = isBlueTheme ? "#4fc3f7" : "#66bb6a"; 
  const bgTheme = isBlueTheme
    ? "linear-gradient(145deg, #06101f 0%, #082f49 54%, #030814 100%)" // Blue base
    : "linear-gradient(145deg, #05130a 0%, #0b2e1c 54%, #020805 100%)"; // Green base

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
      style={{ perspective: "900px", cursor: "default", height: "100%" }}>
      <div style={{
        height: "100%",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", padding: "26px 20px 22px", minHeight: 280, 
        borderRadius: 24, position: "relative", overflow: "hidden",
        background: bgTheme,
        border: `1px solid ${hov ? accent + "78" : accent + "20"}`,
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hov ? "translateY(-8px) scale(1.02)" : "scale(1)"}`,
        transformStyle: "preserve-3d",
        boxShadow: hov ? `0 24px 48px #00000090, 0 0 44px ${accent}20` : "0 10px 32px #00000077",
        transition: hov ? "transform 0.1s ease-out, border 0.3s, box-shadow 0.3s" : "transform 0.6s cubic-bezier(.23,1,.32,1), border 0.4s, box-shadow 0.4s",
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, transparent, ${accent}, transparent)`, opacity: hov ? 1 : 0.6 }} />
        
        <div style={{ marginBottom: 18, position: "relative", transform: "translateZ(28px)" }}>
          <div style={{ position: "absolute", inset: -8, borderRadius: "50%", background: `radial-gradient(circle, ${accent}28 0%, transparent 70%)`, filter: "blur(7px)", pointerEvents: "none" }} />
          <PersonPhoto photo={member.photo} initials={member.initials} size={110} accent={accent} index={index} />
        </div>
        
        <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 800, color: "#f2f5f8", lineHeight: 1.2, textAlign: "center", marginBottom: 12, transform: "translateZ(20px)" }}>
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
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 4, height: 24, background: accent, borderRadius: 4, boxShadow: `0 0 12px ${accent}66` }} />
        <span style={{ fontFamily: "'Kaushan Script', cursive", fontSize: 34, fontWeight: 400, color: "#ffffff", letterSpacing: 0 }}>
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
        @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Syne:wght@500;700;800&display=swap');
        .team-wrap { font-family: 'Plus Jakarta Sans', sans-serif; }
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

      {/* Deep Navy Blue Background applied here */}
      <div className="team-wrap" style={{ background: "#080b1c", minHeight: "100vh", width: "100%", maxWidth: "100vw", position: "relative", overflowX: "hidden", overflowY: "visible" }}>
        
        {/* Background Effects */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
          <div className="orb" style={{ left: "-5%", top: "-5%", width: 700, height: 700, background: "#11183b", filter: "blur(140px)", opacity: 0.4 }} />
          <div className="orb" style={{ right: "-10%", top: "15%", width: 600, height: 600, background: "#18204a", filter: "blur(150px)", opacity: 0.3 }} />
          <div className="orb" style={{ left: "20%", top: "50%", width: 500, height: 500, background: "#0a133a", filter: "blur(120px)", opacity: 0.4 }} />
          <div className="orb" style={{ right: "10%", bottom: "-10%", width: 600, height: 600, background: "#0d102e", filter: "blur(130px)", opacity: 0.5 }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(#ffffff03 1px, transparent 1px), linear-gradient(90deg, #ffffff03 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center, transparent 30%, #080b1c 100%)" }} />
        </div>

        {/* Content */}
        <div className="team-content" style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "0 28px 56px" }}>

          <div className="team-hero fade-up" style={{ paddingTop: 48, paddingBottom: 42, textAlign: "center" }}>
            <h1 style={{ fontFamily: "'Kaushan Script', cursive", fontSize: "clamp(52px, 8vw, 96px)", fontWeight: 400, lineHeight: 1.08, color: "#ffffff", letterSpacing: 0, marginBottom: 20 }}>
              Meet Our <span style={{ position: "relative", display: "inline-block", background: "linear-gradient(135deg, #f5d78a 10%, #d4a843 50%, #9c7614 90%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Team<span style={{ position: "absolute", bottom: -4, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, transparent, #d4a843, transparent)", borderRadius: 2, filter: "blur(1px)" }} /></span>
            </h1>
            <p style={{ fontSize: 18, color: "#8b9db5", lineHeight: 1.7, fontWeight: 400, maxWidth: 540, margin: "0 auto" }}>
              The minds, makers, and movers behind every startup, every event, every spark of entrepreneurial energy at IIT Indore.
            </p>
          </div>

          {/* BOARD OF DIRECTORS (CEOs & Asst) */}
          <section className="fade-up" style={{ marginBottom: 54, animationDelay: "0.1s" }}>
            <SectionHeader label="Board of Directors" accent="#d4a843" />
            <div className="sec-grid">
              {TEAM_DATA.board.map((m, i) => (
                <SecretaryCard key={m.name} member={m} index={i} />
              ))}
            </div>
          </section>

          {/* SECRETARIES */}
          <section className="fade-up" style={{ marginBottom: 54, animationDelay: "0.2s" }}>
            <SectionHeader label="Secretaries" accent="#d4a843" />
            <div className="sec-grid">
              {TEAM_DATA.secretaries.map((m, i) => (
                <SecretaryCard key={m.name} member={m} index={i + 3} />
              ))}
            </div>
          </section>

          {/* TEAM LEADERS */}
          <section className="fade-up" style={{ marginBottom: 54, animationDelay: "0.3s" }}>
            <SectionHeader label="Team Leaders" accent="#c0ca33" /> {/* Golden Green accent */}
            <div className="mem-grid">
              {TEAM_DATA.leaders.map((m, i) => (
                <MemberCard key={m.name} member={m} index={i + 10} />
              ))}
            </div>
          </section>

          {/* DYNAMIC TEAMS */}
          {Object.entries(TEAM_DATA.teams).map(([teamName, members], idx) => {
            const isBlueTheme = idx % 2 === 0; // Alternates True/False
            const sectionAccent = isBlueTheme ? "#4fc3f7" : "#66bb6a"; // Blue or Green header

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