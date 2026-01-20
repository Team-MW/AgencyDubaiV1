import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-black text-white pt-16 pb-8 border-t-8 border-yellow-400 overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 opacity-10 font-black text-9xl text-white pointer-events-none select-none overflow-hidden whitespace-nowrap">
                DUBAI DUBAI DUBAI
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="bg-yellow-400 text-black px-4 py-2 text-3xl font-black italic inline-block transform -skew-x-12 mb-6 shadow-[5px_5px_0px_#FFF]">
                            <span className="block transform skew-x-12">DUBAI AGENCY</span>
                        </div>
                        <p className="text-gray-300 max-w-sm mb-6 font-bold text-lg leading-tight uppercase">
                            LA MEILLEURE CONCIERGERIE À PRIX CASSÉS. <br />
                            <span className="text-yellow-400">SERVICE VIP, PRIX LOWCOST.</span> <br />
                            NOUS SOMMES LES MOINS CHERS DE DUBAI.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="bg-white text-black p-3 border-4 border-transparent hover:border-yellow-400 hover:bg-black hover:text-yellow-400 transition-all transform hover:-translate-y-2 shadow-[4px_4px_0px_#333]">
                                    <Icon size={24} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-3xl font-black text-yellow-400 mb-6 uppercase italic transform -rotate-1">Contact Rapide</h3>
                        <ul className="space-y-4 font-bold text-lg">
                            <li className="flex items-center gap-3 group">
                                <div className="bg-red-600 p-2 text-white group-hover:rotate-12 transition-transform">
                                    <MapPin size={20} />
                                </div>
                                <span>Dubai Marina, Street 4, DUBAI, UAE</span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <div className="bg-red-600 p-2 text-white group-hover:rotate-12 transition-transform">
                                    <Phone size={20} />
                                </div>
                                <span>+971 50 123 4567</span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <div className="bg-red-600 p-2 text-white group-hover:rotate-12 transition-transform">
                                    <Mail size={20} />
                                </div>
                                <span>booking@dubaiagency.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="bg-yellow-400 p-6 text-black transform rotate-2 shadow-[8px_8px_0px_0px_#FFF] border-4 border-black">
                        <h3 className="text-2xl font-black uppercase mb-2 bg-black text-yellow-400 inline-block px-2">NE RATEZ RIEN !</h3>
                        <p className="font-bold mb-4 text-xl">Recevez nos promos secrètes directement.</p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="VOTRE EMAIL ICI..."
                                className="w-full p-3 font-black border-4 border-black bg-white placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-red-600 uppercase"
                            />
                            <button type="submit" className="w-full bg-red-600 text-white font-black p-3 hover:bg-black hover:text-red-500 transition-colors uppercase border-4 border-black shadow-[4px_4px_0px_#000] active:translate-y-1 active:shadow-none">
                                M'INSCRIRE MAINTENANT
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t-4 border-gray-800 pt-8 text-center text-gray-500 font-bold uppercase text-sm">
                    &copy; {new Date().getFullYear()} Dubai Agency. All rights reserved. <span className="text-yellow-400 mx-2">●</span> LES MEILLEURS PLANS DE DUBAI.
                </div>
            </div>
        </footer>
    );
};
