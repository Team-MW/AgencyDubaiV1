import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Star, Tag, Car, Watch, Home as HomeIcon, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/bacground.jpg';

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: custom * 0.1 }
    })
};

const Section = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
    <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        custom={delay}
        variants={fadeInUp}
        className={`py-20 px-4 ${className}`}
    >
        {children}
    </motion.section>
);

export const Home = () => {
    return (
        <>
            <Helmet>
                <title>Dubai Agency - Les Meilleurs Plans de Dubai</title>
                <meta name="description" content="Louez votre voiture de luxe, votre appartement ou votre montre à Dubai au meilleur prix. Service conciergerie discount." />
            </Helmet>


            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">
                <div className="absolute inset-0 z-0">
                    <img
                        src={bgImage}
                        alt="Dubai Skyline"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.5 }}
                        className="inline-block"
                    >
                        <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter mb-4 text-yellow-500 text-shadow-hard transform -rotate-2">
                            DUBAI <br /> <span className="text-white">PAS CHER</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl md:text-4xl font-bold uppercase mb-8 bg-red-600 inline-block px-4 py-2 transform rotate-1 shadow-lg"
                    >
                        LA CONCIERGERIE N°1 DES BONS PLANS
                    </motion.p>

                    <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
                        <Link to="/contact" className="group bg-yellow-400 text-black text-xl font-black px-8 py-4 uppercase transform skew-x-[-12deg] hover:bg-white transition-all shadow-[6px_6px_0px_#FFF] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                            <span className="block transform skew-x-[12deg] flex items-center gap-2">
                                RÉSERVER MAINTENANT <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </span>
                        </Link>
                        <Link to="/services" className="group bg-transparent border-4 border-white text-white text-xl font-black px-8 py-4 uppercase transform skew-x-[-12deg] hover:bg-white hover:text-black transition-all">
                            <span className="block transform skew-x-[12deg]">
                                VOIR LES PRIX
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Sticker */}
                <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 5 }}
                    className="absolute top-24 right-4 md:right-20 lg:right-40 w-32 h-32 md:w-48 md:h-48 bg-red-600 rounded-full flex items-center justify-center flex-col text-white font-black border-4 border-white shadow-2xl rotate-12 z-20"
                >
                    <span className="text-2xl md:text-4xl">-50%</span>
                    <span className="text-sm md:text-xl uppercase text-center leading-none">SUR TOUT <br />LE SITE</span>
                </motion.div>
            </section>

            {/* Services Section - Light Background */}
            <Section className="bg-yellow-50 relative overflow-hidden">
                {/* Pattern */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-7xl font-black uppercase italic mb-4 text-black">NOS OFFRES DE FOLIE</h2>
                        <div className="h-2 w-32 bg-red-600 mx-auto transform -skew-x-12"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Car, title: "LOCATION LUXE", desc: "Ferrari, Lamborghini à prix Dacia. C'est pas une blague.", price: "Dès 500 AED/j" },
                            { icon: HomeIcon, title: "AIRBNB DE RÊVE", desc: "Penthouse vue Marina ou Palm. Piscine privée.", price: "Dès 300 AED/nuit" },
                            { icon: Watch, title: "MONTRES DE LUXE", desc: "Rolex, AP sur demande. Pour flamber en soirée.", price: "Sur devis" },
                        ].map((service, i) => (
                            <div key={i} className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_#000] hover:-translate-y-2 hover:shadow-[12px_12px_0px_#000] transition-all group">
                                <div className="bg-yellow-400 w-16 h-16 flex items-center justify-center border-4 border-black mb-6 group-hover:rotate-12 transition-transform">
                                    <service.icon size={32} strokeWidth={2.5} />
                                </div>
                                <h3 className="text-3xl font-black uppercase mb-3 italic">{service.title}</h3>
                                <p className="text-gray-600 font-bold mb-6 text-lg">{service.desc}</p>
                                <div className="bg-black text-white text-center py-2 font-black uppercase text-xl transform -skew-x-12">
                                    {service.price}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Why Us Section - Dark Background (Alternating) */}
            <Section className="bg-black text-white border-y-8 border-yellow-400">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-5xl md:text-7xl font-black uppercase italic mb-8 leading-none">
                                POURQUOI <span className="text-yellow-400">NOUS ?</span>
                            </h2>
                            <ul className="space-y-6">
                                {[
                                    "PRIX IMBATTABLES GARANTIS",
                                    "PAS DE FRAIS CACHÉS (OU PRESQUE)",
                                    "SERVICE EN FRANÇAIS 24/7",
                                    "PAIEMENT CASH OU CRYPTO ACCEPTÉ"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-xl md:text-2xl font-bold uppercase">
                                        <CheckCircle className="text-red-500 min-w-[32px]" size={32} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/portfolio" className="inline-inline-block mt-10 bg-white text-black font-black uppercase px-8 py-4 text-xl hover:bg-yellow-400 transition-colors shadow-[6px_6px_0px_#666]">
                                VOIR NOS CLIENTS HEUREUX
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-yellow-400 transform translate-x-4 translate-y-4 border-4 border-white"></div>
                            <img
                                src="https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&w=1000&auto=format&fit=crop"
                                alt="Dubai Life"
                                loading="lazy"
                                className="relative z-10 w-full h-full object-cover border-4 border-white grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>
                </div>
            </Section>

            {/* Testimonials - Light Background */}
            <Section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-center text-4xl md:text-6xl font-black uppercase italic mb-16 border-b-8 border-yellow-400 inline-block pb-2">
                        ILS ONT KIFFÉ DUBAI
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="bg-gray-100 p-8 border-l-8 border-red-600 relative">
                                <div className="flex gap-1 mb-4 text-yellow-500">
                                    {[...Array(5)].map((_, j) => <Star key={j} fill="currentColor" />)}
                                </div>
                                <p className="font-bold italic text-lg mb-6">"Franchement c'était lourd. J'ai eu la Lambo en 30min, pas de galère de caution bizarre. Je recommande de fou !"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-black rounded-full"></div>
                                    <div>
                                        <p className="font-black uppercase">Karim B.</p>
                                        <p className="text-sm text-gray-500 font-bold uppercase">Client depuis 2023</p>
                                    </div>
                                </div>
                                <Tag className="absolute top-4 right-4 text-gray-300" size={40} />
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <section className="bg-yellow-400 py-24 border-t-8 border-black">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-5xl md:text-8xl font-black uppercase mb-8 text-black">PRÊT À RÉSERVER ?</h2>
                    <p className="text-2xl font-bold mb-8 max-w-2xl mx-auto">N'ATTENDEZ PAS QUE LES PRIX MONTENT. C'EST MAINTENANT OU JAMAIS FRÉROT.</p>
                    <Link to="/contact" className="inline-block bg-black text-white text-3xl font-black px-12 py-6 uppercase transform -skew-x-12 hover:scale-110 transition-transform shadow-[10px_10px_0px_#FFF]">
                        <span className="transform skew-x-12">JE VEUX MON DEVIS</span>
                    </Link>
                </div>
            </section>
        </>
    );
};
