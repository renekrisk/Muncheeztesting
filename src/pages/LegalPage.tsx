import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, LucideIcon, Hash, Globe, Shield, Zap, Camera, PenTool } from 'lucide-react';
import { useEffect } from 'react';

const pages: Record<string, {
    title: string;
    subtitle: string;
    content: string;
    sections?: { title: string; body: string | string[] }[];
    team?: { name: string; role: string; bio: string; icon: LucideIcon }[];
    contact?: { type: string; value: string; icon: LucideIcon }[];
}> = {
    'about-us': {
        title: 'Our Identity',
        subtitle: 'The 254 Delivery Soul.',
        content: "Munchezz isn't just an app. It's a bridge. We connect Nairobi's legendary kitchens and hidden gems to your table. Built for the city, by the city.",
        sections: [
            {
                title: "The Mission",
                body: "Our goal is simple: to honor the hustle of Nairobi's local food scene while providing a premium, seamless experience for our customers. We believe that good food shouldn't just be accessible ... it should be celebrated. We represent the bold, the flavorful, and the relentless spirit of the 254."
            },
            {
                title: "The Vision",
                body: "We're building more than a delivery app; we're building a community that values authenticity, speed, and the unique flavors that make Nairobi the heartbeat of East Africa. Our vision is to be the pulse of the city's culinary world, connecting every kitchen to every heart."
            },
            {
                title: "Our Values",
                body: [
                    "Respect the Craft: Every meal is handled with the care it deserves.",
                    "Hustle & Flow: We move with the city's energy, fast and intentional.",
                    "Community First: We exist for Nairobi, by Nairobi.",
                    "Transparency: No hidden fees, no AI jargon ... just real talk."
                ]
            }
        ]
    },
    'our-team': {
        title: 'The Collective',
        subtitle: 'Architects of the Culture.',
        content: "We are a group of creators, builders, and believers. United by the hustle and driven to digitize the soul of Nairobi.",
        team: [
            {
                name: "Dean N",
                role: "Founder, CEO",
                bio: "Webbing the fabric of Nairobi's food scene into a digital tapestry. For Dean, it's not just about delivery; it's about defining the city's new standard.",
                icon: Globe
            },
            {
                name: "Kris K",
                role: "CTO, Co-founder",
                bio: "Crafting the binary heartbeat of Munchezz. If the city doesn't sleep, neither does the code. Building infrastructure that moves as fast as the 254.",
                icon: Hash
            },
            {
                name: "Bradley K",
                role: "Sales & Marketing",
                bio: "Bridging the gap between the boardroom and the bodega. Keeping the brand authentic, loud, and undisputedly Nairobi.",
                icon: Zap
            },
            {
                name: "Evans N",
                role: "Law & Policy",
                bio: "Ensuring the hustle is honorable. Policy, protection, and people ... building a foundation that protects our riders and partners alike.",
                icon: Shield
            },
            {
                name: "Sharleen M",
                role: "Vlogs & Community",
                bio: "Capturing the raw, unfiltered energy of the streets. Every frame she shoots tells a story of grit, flavor, and the people behind the food.",
                icon: Camera
            },
            {
                name: "Zipporah N",
                role: "Content & Media",
                bio: "Turning delivery into cinema. Because Nairobi isn't just a place, it's a feeling, and Zipporah makes sure you see it in high definition.",
                icon: PenTool
            }
        ]
    },
    'faq': {
        title: 'Common Questions',
        subtitle: 'Support at your pace.',
        content: "Everything you need to know about navigating the Munchezz experience.",
        sections: [
            {
                title: "How long does delivery take?",
                body: "Most orders arrive within 30-45 minutes. We prioritize speed and handled-with-care delivery to ensure your food arrives exactly as intended. During peak hours (lunch/dinner), times may vary slightly, but we’ll always keep you posted in real-time."
            },
            {
                title: "What suburbs do you cover?",
                body: "We currently cover Westlands, Kilimani, Lavington, Kileleshwa, and the CBD, with expansion across the wider Nairobi area coming soon. If you're outside these zones, stay tuned ... the movement is growing fast."
            },
            {
                title: "Can I pay with M-Pesa?",
                body: "Absolutely. M-Pesa is integrated deeply into our platform for a seamless, secure, and fast checkout experience. We also support card payments for those who prefer them."
            },
            {
                title: "How do I become a partner?",
                body: "Navigate to our 'Partner With Us' section in the footer. Fill in your details, and our Collective team will reach out to vet your kitchen and get you on the platform."
            }
        ]
    },
    'contact-us': {
        title: 'Contact Us',
        subtitle: 'Direct Access.',
        content: "Based in the heart of Nairobi. We're always listening for feedback, partnership ideas, or support requests.",
        contact: [
            { type: "Email", value: "hello@munchezz.com", icon: Mail },
            { type: "Phone", value: "+254 700 000 000", icon: Phone },
            { type: "HQ", value: "Westlands, Nairobi, KE", icon: MapPin }
        ]
    },
    'terms-of-service': {
        title: 'Terms of Service',
        subtitle: 'The Foundation.',
        content: "Designed to protect both our hungry customers and our kitchen partners. Transparency is the rule.",
        sections: [
            {
                title: "1. Acceptance of Terms",
                body: "By accessing or using the Munchezz platform, you agree to be bound by these terms. We believe in mutual respect across our community, and these rules ensure a fair experience for everyone."
            },
            {
                title: "2. User Conduct",
                body: "We expect a high standard of respect between our customers, partners, and riders. Harassment, fraudulent behavior, or any action that compromises the safety of our network will result in immediate account termination."
            },
            {
                title: "3. Payments & Refunds",
                body: "All payments are processed securely. Cancellations and refunds are handled on a case-by-case basis based on the kitchen's status and the timing of the request. We aim to be fair and transparent in every transaction."
            }
        ]
    },
    'privacy-policy': {
        title: 'Privacy Policy',
        subtitle: 'Your Data, Respected.',
        content: "Your data is yours. We only use it to make your delivery experience move. We never sell your info.",
        sections: [
            {
                title: "1. Information We Collect",
                body: "We collect only what's necessary: your delivery address, contact details for order updates, and your preferences to curate a better experience for you. We do not track you beyond what is required for the service."
            },
            {
                title: "2. Data Protection",
                body: "We use high-end encryption and industry-standard security protocols to safeguard your details. Your payment information is handled by secure, PCI-compliant providers."
            },
            {
                title: "3. Cookie Usage",
                body: "We use essential cookies to keep you logged in and functional. Analytical cookies help us understand how to move the city better, but you can opt-out at any time."
            }
        ]
    }
};

export default function LegalPage() {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const page = slug ? pages[slug] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const handleBack = () => {
        navigate(-1);
    };

    if (!page) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                <h1 className="text-4xl font-heading font-extralight tracking-tighter">Page Not Found</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white pt-40 pb-20 px-6 md:px-8 overflow-hidden">

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
                >
                    <button
                        onClick={handleBack}
                        className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.4em] text-[#4A90E2] hover:opacity-70 transition-all group"
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        Return
                    </button>
                </motion.div>

                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="block text-[10px] font-bold text-white/40 uppercase tracking-[0.5em] mb-8"
                >
                    {page.subtitle}
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-5xl md:text-8xl font-heading font-extralight tracking-tighter mb-12"
                >
                    {page.title}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="prose prose-invert max-w-none"
                >
                    <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed font-serif italic mb-16 max-w-3xl">
                        {page.content}
                    </p>

                    <div className="h-[1px] w-full bg-white/10 mb-20" />

                    {/* Team Section V2 - Clean Digital ID Cards */}
                    {page.team && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20">
                            {page.team.map((member, i) => (
                                <motion.div
                                    key={member.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * i }}
                                    className="relative p-6 md:p-8 border border-white/5 rounded-2xl bg-[#0A0A0A] hover:border-white/20 transition-all duration-300"
                                >
                                    {/* Tech Header */}
                                    <div className="flex items-start justify-between mb-8">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#4A90E2]">
                                                <member.icon size={16} strokeWidth={1.5} />
                                            </div>
                                            <div className="h-[1px] w-12 bg-white/10" />
                                        </div>
                                        <span className="text-[9px] font-mono text-white/30 tracking-widest">ID_0{i + 1}</span>
                                    </div>

                                    {/* Name & Role */}
                                    <h3 className="text-3xl font-heading font-bold text-white mb-2 tracking-tight">{member.name}</h3>
                                    <p className="text-[#4A90E2] text-xs font-bold uppercase tracking-[0.2em] mb-6">{member.role}</p>

                                    <div className="h-[1px] w-full bg-white/5 mb-6" />

                                    {/* Bio */}
                                    <p className="text-sm text-white/50 leading-relaxed font-mono tracking-tight">
                                        {member.bio}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {/* Contact Section */}
                    {page.contact && (
                        <div className="space-y-20 mb-20">
                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 md:p-12"
                            >
                                <form className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Full Name</label>
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                className="w-full bg-transparent border-b border-white/10 py-4 text-sm focus:outline-none focus:border-[#4A90E2] transition-colors"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Email Address</label>
                                            <input
                                                type="email"
                                                placeholder="your@email.com"
                                                className="w-full bg-transparent border-b border-white/10 py-4 text-sm focus:outline-none focus:border-[#4A90E2] transition-colors"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Subject</label>
                                        <input
                                            type="text"
                                            placeholder="What's this about?"
                                            className="w-full bg-transparent border-b border-white/10 py-4 text-sm focus:outline-none focus:border-[#4A90E2] transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Message</label>
                                        <textarea
                                            rows={4}
                                            placeholder="Tell us more..."
                                            className="w-full bg-transparent border-b border-white/10 py-4 text-sm focus:outline-none focus:border-[#4A90E2] transition-colors resize-none"
                                        />
                                    </div>
                                    <button className="group flex items-center justify-between w-full md:w-auto md:min-w-[240px] bg-white text-black px-8 py-5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#4A90E2] hover:text-white transition-all duration-500">
                                        Send Message
                                        <div className="w-8 h-8 rounded-full bg-black/5 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                                            <ArrowLeft size={14} className="rotate-180" />
                                        </div>
                                    </button>
                                </form>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {page.contact.map((item, i) => (
                                    <motion.div
                                        key={item.type}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7 + (i * 0.1) }}
                                        className="p-8 border border-white/5 rounded-3xl bg-white/[0.02] text-center group hover:border-[#4A90E2]/30 transition-colors"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-[#4A90E2]/10 flex items-center justify-center text-[#4A90E2] mx-auto mb-6 group-hover:scale-110 transition-transform">
                                            <item.icon size={20} />
                                        </div>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">{item.type}</h3>
                                        <p className="text-sm font-medium">{item.value}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Generic Sections (FAQ, TOS, Privacy) */}
                    {page.sections && (
                        <div className="space-y-16 mb-20">
                            {page.sections.map((section, i) => (
                                <motion.div
                                    key={section.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + (i * 0.1) }}
                                    className="space-y-6"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="h-2 w-2 rounded-full bg-[#4A90E2]" />
                                        <h2 className="text-2xl font-heading tracking-tight">{section.title}</h2>
                                    </div>
                                    <div className="pl-6 border-l border-white/5">
                                        {Array.isArray(section.body) ? (
                                            <ul className="space-y-4">
                                                {section.body.map((item, j) => (
                                                    <li key={j} className="text-sm text-white/50 leading-relaxed font-light flex gap-3">
                                                        <span className="text-[#4A90E2]">•</span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-sm text-white/50 leading-relaxed font-light">
                                                {section.body}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    <div className="h-[1px] w-full bg-white/10 mb-12" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[10px] text-white/20 uppercase tracking-[0.2em] leading-loose font-bold">
                        <p>
                            Munchezz ... Built for the 254. Dedicated to the vision of a connected, flavorful city.
                        </p>
                        <p className="md:text-right">
                            © 2025 Munchezz. All rights reserved.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
