import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import BackToTop from "./components/BackToTop";
import WhatsAppButton from './components/Whatsappbutton'
import PageTransition from './components/PageTransition'
import PageSkeleton from './components/PageSkeleton'
import { useLang } from './context/LanguageContext'

// Route-level code splitting: each page ships as its own chunk and is
// only downloaded when the user actually navigates to it. <Suspense>
// below shows a skeleton while a chunk is in flight.
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const Refund = lazy(() => import('./pages/Refund'))
const Contact = lazy(() => import('./pages/Contact'))
const CategoryDetail = lazy(() => import('./pages/CategoryDetail'))
const NotFound = lazy(() => import('./pages/NotFound'))

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <Suspense fallback={<PageSkeleton />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
          <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
          <Route path="/refund" element={<PageTransition><Refund /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/categories/:slug" element={<PageTransition><CategoryDetail /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  )
}

export default function App() {
  const { t } = useLang()

  return (
    <BrowserRouter>
      <ScrollToTop />
      <WhatsAppButton
        tooltipText={t('common.whatsAppTooltip')}
        message={t('common.whatsAppMessage')}
      />
      <BackToTop />

      {/* Accessibility: keyboard/screen-reader users can jump straight to
          the main content instead of tabbing through the whole navbar. */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-brand-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        {t('common.skipToContent')}
      </a>

      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 transition-colors duration-300">
        <Navbar />
        <main id="main-content" className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}