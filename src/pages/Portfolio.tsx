import { Helmet } from 'react-helmet-async';

export const Portfolio = () => {
    return (
        <div className="bg-black min-h-screen text-white pb-20">
            <Helmet>
                <title>Portfolio - Dubai Agency</title>
            </Helmet>

            <div className="bg-red-600 text-white py-24 text-center border-b-8 border-white">
                <h1 className="text-6xl md:text-8xl font-black italic uppercase">LA PREUVE</h1>
                <p className="text-2xl font-bold mt-4 uppercase">Photos réelles (no fake).</p>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="relative group aspect-square overflow-hidden border-4 border-white">
                            <img
                                src={`https://images.unsplash.com/photo-${item === 1 ? '1605281317010-fe5ffe79ba02' : item === 2 ? '1542259048-c7825d0d5b62' : item === 3 ? '1512453979798-5ea90b7929e1' : '1597659840241-37e2b9c2f55f'}?q=80&w=800&auto=format&fit=crop`}
                                alt="Portfolio"
                                loading="lazy"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="bg-yellow-400 text-black font-black uppercase text-xl px-4 py-2 transform -rotate-6">
                                    CLIENT CONTENT
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
