import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
    return (
        <div className="bg-yellow-50 min-h-screen pb-20">
            <Helmet>
                <title>Contact - Dubai Agency</title>
            </Helmet>

            <div className="bg-black text-white py-24 text-center border-b-8 border-yellow-400 mb-12">
                <h1 className="text-6xl md:text-8xl font-black italic uppercase">CONTACT</h1>
                <p className="text-2xl font-bold mt-4 uppercase text-yellow-400">RÉPONDS SOUS 24H (Sauf si on dort)</p>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12">

                    <div className="space-y-8">
                        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_#000]">
                            <h2 className="text-3xl font-black uppercase mb-6">Info Directes</h2>
                            <div className="space-y-6 font-bold text-lg">
                                <div className="flex items-center gap-4">
                                    <div className="bg-yellow-400 p-3 border-2 border-black"><Phone /></div>
                                    <span>+971 50 123 4567</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="bg-yellow-400 p-3 border-2 border-black"><Mail /></div>
                                    <span>booking@dubaiagency.com</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="bg-yellow-400 p-3 border-2 border-black"><MapPin /></div>
                                    <span>Dubai Marina, UAE</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-red-600 text-white border-4 border-black p-8 shadow-[8px_8px_0px_#000]">
                            <h2 className="text-3xl font-black uppercase mb-4">ATTENTION</h2>
                            <p className="font-bold text-xl">
                                LES PLACES PARTENT VITE. <br />
                                PREMIER ARRIVÉ, PREMIER SERVI.
                            </p>
                        </div>
                    </div>

                    <form className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_#000]">
                        <div className="space-y-6">
                            <div>
                                <label className="block font-black uppercase mb-2">TON NOM</label>
                                <input type="text" className="w-full border-4 border-black p-4 bg-gray-50 focus:bg-yellow-100 font-bold outline-none" placeholder="LA LÉGENDE" />
                            </div>
                            <div>
                                <label className="block font-black uppercase mb-2">TON EMAIL</label>
                                <input type="email" className="w-full border-4 border-black p-4 bg-gray-50 focus:bg-yellow-100 font-bold outline-none" placeholder="EMAIL@GMAIL.COM" />
                            </div>
                            <div>
                                <label className="block font-black uppercase mb-2">CE QUE TU VEUX</label>
                                <select className="w-full border-4 border-black p-4 bg-gray-50 focus:bg-yellow-100 font-bold outline-none appearance-none">
                                    <option>LOCATION VOITURE</option>
                                    <option>LOGEMENT</option>
                                    <option>ACTIVITÉS</option>
                                    <option>AUTRE (PRECISER)</option>
                                </select>
                            </div>
                            <div>
                                <label className="block font-black uppercase mb-2">MESSAGE</label>
                                <textarea rows={4} className="w-full border-4 border-black p-4 bg-gray-50 focus:bg-yellow-100 font-bold outline-none" placeholder="DIS NOUS TOUT..." />
                            </div>
                            <button className="w-full bg-black text-white text-2xl font-black py-4 hover:bg-yellow-400 hover:text-black transition-colors uppercase border-4 border-transparent hover:border-black">
                                ENVOYER LA DEMANDE
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};
