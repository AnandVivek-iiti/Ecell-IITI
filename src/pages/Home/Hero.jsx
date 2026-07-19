import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const heroImages = [
    "/E-Cell _ IIT Indore_files/E_summit.png",
    "/E-Cell _ IIT Indore_files/entrepenuers_talk.jpeg",
    "/E-Cell _ IIT Indore_files/pitching.JPG",
    "/E-Cell _ IIT Indore_files/stock.png",
];

export default function Hero() {
    const navigate = useNavigate();
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-28 pb-12 lg:pt-32">
            <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
                {/* LEFT */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="relative z-10"
                >
                    <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-200/50 bg-white/60 px-5 py-2 backdrop-blur-2xl">
                        <Sparkles className="h-4 w-4 text-blue-600" />
                        <span className="text-xs font-bold uppercase tracking-[0.35em] text-blue-700">
                            Entrepreneurship Cell • IIT Indore
                        </span>
                    </div>

                    <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
                        Build.<br />Launch.<br />
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                            Transform Ideas.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-9 text-slate-600">
                        Join a thriving community of innovators, founders and dreamers.
                        Learn from industry leaders, participate in startup events and
                        turn your ideas into impactful ventures.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-5">
                        <button
                            onClick={() => navigate("/contact")}
                            className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-blue-500/50"
                        >
                            Join E-Cell
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                        <button
                            onClick={() => navigate("/gallery")}
                            className="inline-flex items-center rounded-full border border-slate-200 bg-white/60 px-8 py-4 font-semibold text-slate-700 backdrop-blur-2xl transition-all duration-300 hover:bg-white/90 hover:shadow-lg"
                        >
                            <Play className="mr-2 h-5 w-5" />
                            Watch Highlights
                        </button>
                    </div>
                </motion.div>

                {/* RIGHT – slideshow only */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="relative"
                >
                    <div className="overflow-hidden rounded-[32px] border border-white/30 bg-white/40 p-3 backdrop-blur-2xl shadow-xl">
                        <div className="relative h-[520px] w-full overflow-hidden rounded-[24px]">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentImage}
                                    src={heroImages[currentImage]}
                                    alt="E-Cell Event"
                                    className="absolute inset-0 h-full w-full object-cover"
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.8 }}
                                />
                            </AnimatePresence>
                        </div>
                        {/* Dot indicators */}
                        <div className="mt-4 flex justify-center gap-2">
                            {heroImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImage(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        index === currentImage ? "w-8 bg-blue-600" : "w-2 bg-slate-300"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}