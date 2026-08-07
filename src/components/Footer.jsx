import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { Mail, Phone, MapPin, Heart } from 'lucide-react'
import Logo from './Logo'
import { useLang } from '../context/LanguageContext'
import { CATEGORY_SLUGS } from '../config/categoryMeta'
import googlePlay from "../assets/google-play.svg";
import appleStore from "../assets/apple-store-white.svg";

export default function Footer() {
  const { t } = useLang()
  const ft = t('footer')
  const nav = t('nav')

  const quickLinks = [
    { to: '/', label: nav.home },
    { to: '/about', label: nav.about },
    { to: '/privacy', label: nav.privacy },
    { to: '/terms', label: nav.terms },
    { to: '/refund', label: nav.refund },
    { to: '/contact', label: nav.contact },
  ]

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <Logo className="h-8 w-auto" />
              <span className="font-display font-bold text-lg text-white">
                Medi<span className="text-gradient">Saver</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-500">{ft.tagline}</p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/medisaver"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-brand-600 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/medisaver"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-brand-600 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@medisaver"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-brand-600 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <FaTiktok className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">{ft.quickLinks}</h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-gray-500 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">{ft.categories}</h3>
            <ul className="space-y-2.5">
              {ft.categoriesList.map((cat, i) => (
                <li key={cat}>
                  <Link
                    to={`/categories/${CATEGORY_SLUGS[i]}`}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">{ft.contactUs}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-gray-500">
                <Mail size={15} className="text-brand-500 shrink-0" />
                <a href="mailto:hello@medisaver.app" className="hover:text-white transition-colors break-all">
                  hello@medisaver.app
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-500">
                <Phone size={15} className="text-brand-500 shrink-0" />
                <a href="tel:+201000000000" dir="ltr" className="hover:text-white transition-colors">
                  +20 100 000 0000
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-500">
                <MapPin size={15} className="text-brand-500 shrink-0" />
                <span>{ft.location}</span>
              </li>
            </ul>
            <div className="mt-6 space-y-2">
              <a
                href="https://apps.apple.com/app/medisaver/id0000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 rounded-lg px-3 py-2 transition-colors"
              >
                <img
                  src={appleStore}
                  alt="App Store"
                  className="w-7 h-7"
                />
                <div>
                  <div className="text-xs text-gray-400 leading-none">{ft.downloadOnThe}</div>
                  <div className="text-white text-xs font-semibold leading-tight">{ft.appStore}</div>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.medisaver.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 rounded-lg px-3 py-2 transition-colors"
              >
                <img
                  src={googlePlay}
                  alt="Google Play"
                  className="w- h-8"
                />
                <div>
                  <div className="text-xs text-gray-400 leading-none">{ft.getItOn}</div>
                  <div className="text-white text-xs font-semibold leading-tight">{ft.googlePlay}</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            {ft.copyright.replace('{year}', new Date().getFullYear())}
          </p>
          <p className="text-sm text-gray-600 flex items-center gap-1">
            {ft.madeWith} <Heart size={13} className="text-brand-500 fill-brand-500" /> {ft.forBetterHealthcare}
          </p>
        </div>
      </div>
    </footer>
  )
}