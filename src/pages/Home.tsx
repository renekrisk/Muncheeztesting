import Hero from "../components/Hero";
import Services from "../components/Services";
import Collections from "../components/Collections";
import HowItWorks from "../components/HowItWorks";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import AppDownload from "../components/AppDownload";
import Footer from "../components/Footer";
import { FadeIn } from "../components/ui/fade-in";

export default function Home() {
    return (
        <main>
            <Hero />

            <FadeIn>
                <Services />
            </FadeIn>

            <FadeIn>
                <Collections />
            </FadeIn>

            <FadeIn>
                <HowItWorks />
            </FadeIn>

            <Stats />

            <FadeIn>
                <Testimonials />
            </FadeIn>

            {/* Quiet Luxury Partner/Rider Section - NOW GREEN */}
            <section className="relative py-0 bg-[#00A082]">
                {/* Top Curve: Yellow to Green */}
                <div className="absolute top-[-1px] left-0 w-full leading-[0] z-10 rotate-180">
                    <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-[60px] block" preserveAspectRatio="none">
                        <path fill="#FFC244" fillOpacity="1" d="M0,0L48,10C96,20,192,40,288,50C384,60,480,60,576,50C672,40,768,20,864,15C960,10,1056,20,1152,30C1248,40,1344,50,1392,55L1440,60L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
                    </svg>
                </div>
                <div className="flex flex-col lg:flex-row border-y border-gray-200/50">

                    {/* Merchant Canvas */}
                    <div className="flex-1 p-20 lg:p-32 border-b lg:border-b-0 lg:border-r border-gray-200/50 group relative overflow-hidden">
                        <div className="relative z-10 transition-transform duration-700 group-hover:-translate-y-2">
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#FFC244] mb-12 block">Merchant Collective</span>
                            <h2 className="text-5xl font-heading font-light text-white mb-10 leading-[1.1] tracking-tight">
                                Elevate Your <br />
                                Fine Selection.
                            </h2>
                            <p className="text-lg text-white/90 font-light max-w-sm mb-16 leading-relaxed">
                                Join our network of intentional partners and scale your presence with absolute precision.
                            </p>
                            <a href="#" className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-white border-b border-white pb-2 hover:text-[#FFC244] hover:border-[#FFC244] transition-colors">
                                Apply to Partner
                            </a>
                        </div>
                        {/* Faint Texture */}
                        <div className="absolute inset-0 opacity-[0.03] grayscale pointer-events-none group-hover:opacity-[0.08] transition-opacity duration-1000">
                            <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1000" alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Rider Canvas */}
                    <div className="flex-1 p-20 lg:p-32 group relative overflow-hidden">
                        <div className="relative z-10 transition-transform duration-700 group-hover:-translate-y-2">
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#FFC244] mb-12 block">Courier Fleet</span>
                            <h2 className="text-5xl font-heading font-light text-white mb-10 leading-[1.1] tracking-tight">
                                Sovereignty in <br />
                                Every Journey.
                            </h2>
                            <p className="text-lg text-white/90 font-light max-w-sm mb-16 leading-relaxed">
                                Curate your own time and experience the pinnacle of professional flexible earnings.
                            </p>
                            <a href="#" className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-white border-b border-white pb-2 hover:text-[#FFC244] hover:border-[#FFC244] transition-colors">
                                Join the Fleet
                            </a>
                        </div>
                        {/* Faint Texture */}
                        <div className="absolute inset-0 opacity-[0.03] grayscale pointer-events-none group-hover:opacity-[0.08] transition-opacity duration-1000">
                            <img src="https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=1000" alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>

                </div>
            </section>

            <AppDownload />

            <Footer />
        </main>
    )
}
