import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const pages = [
    { name: 'ACCUEIL', path: '/' },
    { name: 'NOS SERVICES', path: '/services' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'CONTACT & RÉSA', path: '/contact' },
];

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black text-white border-b-4 border-yellow-400 font-bold uppercase tracking-tighter shadow-xl">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-2xl md:text-4xl bg-yellow-400 text-black px-4 py-2 transform -skew-x-12 inline-block hover:scale-105 transition-transform shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
                    <span className="block transform skew-x-12 font-black italic">DUBAI AGENCY</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-xl">
                    {pages.map((page) => (
                        <Link
                            key={page.path}
                            to={page.path}
                            className={`hover:text-yellow-400 transition-colors relative group ${location.pathname === page.path ? 'text-yellow-400' : ''}`}
                        >
                            {page.name}
                            <span className={`absolute -bottom-1 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${location.pathname === page.path ? 'scale-x-100' : ''}`}></span>
                        </Link>
                    ))}
                    <a href="tel:+971500000000" className="bg-red-600 hover:bg-red-500 text-white px-6 py-2 flex items-center gap-2 transform skew-x-[-12deg] shadow-[4px_4px_0px_0px_#FFF] active:translate-y-1 active:shadow-none transition-all">
                        <span className="transform skew-x-[12deg] flex items-center gap-2 font-black">
                            <Phone size={20} />
                            <span className="hidden lg:inline">APPEL DIRECT</span>
                        </span>
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button className="md:hidden text-yellow-400 bg-black p-2 border-2 border-yellow-400" onClick={() => setIsOpen(true)}>
                    <Menu size={32} />
                </button>
            </div>

            {/* Mobile Side Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 h-full w-[85%] max-w-sm bg-yellow-400 text-black z-50 shadow-2xl flex flex-col p-6 border-l-8 border-black"
                        >
                            <div className="flex justify-between items-center mb-10 border-b-4 border-black pb-4">
                                <span className="text-2xl font-black italic">MENU</span>
                                <button onClick={() => setIsOpen(false)} className="bg-black text-yellow-400 p-2 hover:bg-red-600 hover:text-white transition-colors">
                                    <X size={28} />
                                </button>
                            </div>

                            <nav className="flex flex-col gap-6 text-3xl font-black italic">
                                {pages.map((page) => (
                                    <Link
                                        key={page.path}
                                        to={page.path}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-4 hover:translate-x-4 transition-transform text-black uppercase"
                                    >
                                        <span className="bg-black text-white w-8 h-8 flex items-center justify-center text-sm not-italic rounded-full">
                                            {pages.indexOf(page) + 1}
                                        </span>
                                        {page.name}
                                    </Link>
                                ))}
                            </nav>

                            <div className="mt-auto bg-red-600 text-white p-6 -mx-6 mb-[-24px] shadow-inner">
                                <p className="text-3xl font-black text-center mb-2 animate-pulse">OFFRE FLASH !</p>
                                <p className="text-center font-bold">REMISE DE 500 AED SUR TOUTE LOCATION DE SPORTIVE</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};
