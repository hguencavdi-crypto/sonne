import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-hasi-darkblue text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Firma */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-white">HASI</span>{' '}
              <span className="text-hasi-accent">Elektronic</span>
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Ihr Technik-Partner von nebenan seit 1986
            </p>
            <p className="text-gray-400 text-sm italic">
              &quot;Wenn Technik streikt – sind wir da.&quot;
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <p className="font-medium text-white">Hamdi Güncavdi</p>
              <p>Grabenstraße 18</p>
              <p>71665 Vaihingen an der Enz</p>
              <p className="pt-2">
                <a href="tel:+4970421639" className="hover:text-hasi-accent transition">
                  📞 07042 / 16391
                </a>
              </p>
              <p>
                <a href="mailto:info@hasi-elektronic.de" className="hover:text-hasi-accent transition">
                  ✉️ info@hasi-elektronic.de
                </a>
              </p>
            </div>
          </div>

          {/* Schnelllinks */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Schnelllinks</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link href="/leistungen" className="hover:text-hasi-accent transition">
                  Unsere Leistungen
                </Link>
              </li>
              <li>
                <Link href="/hasi-safe-stick" className="hover:text-hasi-accent transition">
                  🔒 Hasi Safe Stick
                </Link>
              </li>
              <li>
                <Link href="/hasi-cloud" className="hover:text-hasi-accent transition">
                  ☁️ Hasi Cloud
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="hover:text-hasi-accent transition">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-hasi-accent transition">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Öffnungszeiten</h4>
            <div className="space-y-1 text-gray-300 text-sm">
              <p className="flex justify-between">
                <span>Mo - Fr:</span>
                <span className="font-medium">09:00 - 18:00</span>
              </p>
              <p className="flex justify-between">
                <span>Sa:</span>
                <span className="font-medium">10:00 - 14:00</span>
              </p>
              <p className="flex justify-between">
                <span>So:</span>
                <span className="text-gray-500">Geschlossen</span>
              </p>
              <p className="pt-3 text-hasi-yellow text-xs">
                ⚠️ Termine außerhalb der Öffnungszeiten nach Vereinbarung
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-hasi-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {currentYear} HASI Elektronic. Alle Rechte vorbehalten.
            </p>

            {/* USPs */}
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
              <span className="flex items-center">
                <span className="text-hasi-green mr-1">✓</span> Kostenlose Erstdiagnose
              </span>
              <span className="flex items-center">
                <span className="text-hasi-green mr-1">✓</span> Fast 40 Jahre Erfahrung
              </span>
              <span className="flex items-center">
                <span className="text-hasi-green mr-1">✓</span> Persönlicher Service
              </span>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/impressum" className="hover:text-hasi-accent transition">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-hasi-accent transition">
                Datenschutz
              </Link>
              <Link href="/agbs" className="hover:text-hasi-accent transition">
                AGBs
              </Link>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-center text-gray-500 text-xs mt-4 italic">
            Technik mit Vertrauen seit 1986
          </p>
        </div>
      </div>
    </footer>
  )
}
