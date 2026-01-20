import { Helmet } from 'react-helmet-async';

const services = [
    { title: "LOCATION VOITURES", price: "500 AED", features: ["Luxe", "Sport", "SUV"] },
    { title: "LOGEMENT", price: "300 AED", features: ["Marina", "Downtown", "Palm"] },
    { title: "ACTIVITÉS", price: "200 AED", features: ["Désert", "Jet Ski", "Yacht"] },
    { title: "CONCIERGERIE", price: "SUR MESURE", features: ["Résa Resto", "Club", "Beach"] },
];

export const Services = () => {
    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <Helmet>
                <title>Services - Dubai Agency</title>
                <meta name="description" content="Nos services de conciergerie à Dubai." />
            </Helmet>

            <div className="bg-yellow-400 text-black py-24 text-center border-b-8 border-black">
                <h1 className="text-6xl md:text-8xl font-black italic uppercase transform -min-skew-x-12">NOS "SERVICES"</h1>
                <p className="text-2xl font-bold mt-4 uppercase">ON S'OCCUPE DE TOUT, T'INQUIÈTE.</p>
            </div>

            <div className="container mx-auto px-4 mt-[-50px]">
                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((s, i) => (
                        <div key={i} className="bg-white border-4 border-black p-8 shadow-[10px_10px_0px_#000] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all">
                            <div className="flex justify-between items-start mb-6">
                                <h2 className="text-4xl font-black uppercase italic">{s.title}</h2>
                                <span className="bg-red-600 text-white font-bold px-4 py-2 transform rotate-3">À PARTIR DE <br /><span className="text-2xl">{s.price}</span></span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {s.features.map((f, j) => (
                                    <li key={j} className="font-bold text-xl flex items-center gap-2">
                                        <span className="w-4 h-4 bg-black"></span> {f}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full bg-black text-white font-bold py-4 hover:bg-yellow-400 hover:text-black transition-colors uppercase text-xl">
                                RÉSERVER CE TRUC
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
