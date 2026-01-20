import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './components/Layout';
import { PageWrapper } from './components/PageWrapper';

const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Services = lazy(() => import('./pages/Services').then(module => ({ default: module.Services })));
const Portfolio = lazy(() => import('./pages/Portfolio').then(module => ({ default: module.Portfolio })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));

const Loading = () => (
  <div className="flex items-center justify-center min-h-screen bg-black text-yellow-400">
    <div className="text-4xl font-black italic animate-pulse">CHARGEMENT...</div>
  </div>
);

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<Loading />}>
            <AppRoutes />
          </Suspense>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
