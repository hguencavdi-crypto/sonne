import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-hasi-darkblue via-hasi-blue to-hasi-accent text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Wenn Technik streikt – <br />sind wir da.
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-100">
              Schnelle Hilfe. Faire Preise. Persönlicher Service.
            </p>
            <p className="text-lg mb-10 text-gray-200">
              Ihr Technik-Partner von nebenan seit 1986 in Vaihingen an der Enz
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+4970421639"
                className="px-8 py-4 bg-white text-hasi-blue font-bold rounded-lg text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                📞 Jetzt anrufen: 07042 / 16391
              </a>
              <Link
                href="/kontakt"
                className="px-8 py-4 bg-hasi-green text-white font-bold rounded-lg text-lg hover:bg-green-600 transition-colors shadow-lg"
              >
                Termin anfragen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* USP Banner */}
      <section className="bg-hasi-lightblue py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2">✅</span>
              <p className="font-semibold text-hasi-text">Kostenlose Erstdiagnose</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2">💰</span>
              <p className="font-semibold text-hasi-text">Keine versteckten Kosten</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2">🏆</span>
              <p className="font-semibold text-hasi-text">Fast 40 Jahre Erfahrung</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2">👤</span>
              <p className="font-semibold text-hasi-text">Persönlicher Service</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2">🏠</span>
              <p className="font-semibold text-hasi-text">Regionale Verbundenheit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-hasi-darkblue mb-4">
              Unsere Leistungen
            </h2>
            <p className="text-lg text-hasi-gray max-w-2xl mx-auto">
              Von der Reparatur bis zur Beratung – wir sind Ihr kompetenter Partner für alle IT-Fragen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* PC & Laptop Reparatur */}
            <div className="bg-white border-2 border-hasi-lightblue rounded-xl p-6 hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-hasi-blue mb-3">PC & Laptop Reparatur</h3>
              <p className="text-hasi-gray mb-4">
                Professionelle Diagnose und Reparatur aller Marken. Erst Diagnose, dann Entscheidung.
              </p>
              <Link href="/leistungen#reparatur" className="text-hasi-accent font-semibold hover:underline">
                Mehr erfahren →
              </Link>
            </div>

            {/* Datenrettung */}
            <div className="bg-white border-2 border-hasi-lightblue rounded-xl p-6 hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">💾</div>
              <h3 className="text-xl font-bold text-hasi-blue mb-3">Datenrettung & Backup</h3>
              <p className="text-hasi-gray mb-4">
                Rettung verloren geglaubter Daten. DSGVO-konforme Backup-Lösungen für maximale Sicherheit.
              </p>
              <Link href="/leistungen#datenrettung" className="text-hasi-accent font-semibold hover:underline">
                Mehr erfahren →
              </Link>
            </div>

            {/* IT-Sicherheit */}
            <div className="bg-white border-2 border-hasi-lightblue rounded-xl p-6 hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-hasi-blue mb-3">Virenentfernung & Sicherheit</h3>
              <p className="text-hasi-gray mb-4">
                Schutz vor digitalen Bedrohungen. Entfernung von Viren, Malware und Ransomware.
              </p>
              <Link href="/leistungen#sicherheit" className="text-hasi-accent font-semibold hover:underline">
                Mehr erfahren →
              </Link>
            </div>

            {/* Aufrüstung */}
            <div className="bg-white border-2 border-hasi-lightblue rounded-xl p-6 hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-hasi-blue mb-3">PC-Aufrüstung</h3>
              <p className="text-hasi-gray mb-4">
                SSD-Einbau, RAM-Erweiterung, Grafikkarten-Upgrade. Mehr Leistung für Ihr System.
              </p>
              <Link href="/leistungen#aufruestung" className="text-hasi-accent font-semibold hover:underline">
                Mehr erfahren →
              </Link>
            </div>

            {/* Netzwerk */}
            <div className="bg-white border-2 border-hasi-lightblue rounded-xl p-6 hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">📡</div>
              <h3 className="text-xl font-bold text-hasi-blue mb-3">Netzwerk & Internet</h3>
              <p className="text-hasi-gray mb-4">
                WLAN-Optimierung, Router-Einrichtung, Netzwerksicherheit und Smart-Home-Integration.
              </p>
              <Link href="/leistungen#netzwerk" className="text-hasi-accent font-semibold hover:underline">
                Mehr erfahren →
              </Link>
            </div>

            {/* Verkauf & Beratung */}
            <div className="bg-white border-2 border-hasi-lightblue rounded-xl p-6 hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-hasi-blue mb-3">Verkauf & Beratung</h3>
              <p className="text-hasi-gray mb-4">
                Ehrliche Beratung ohne Fachchinesisch. PCs, Notebooks, Drucker und Zubehör.
              </p>
              <Link href="/leistungen#verkauf" className="text-hasi-accent font-semibold hover:underline">
                Mehr erfahren →
              </Link>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/leistungen"
              className="inline-block px-8 py-3 bg-hasi-blue text-white font-bold rounded-lg hover:bg-hasi-darkblue transition-colors"
            >
              Alle Leistungen ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Produkte */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-hasi-darkblue mb-4">
              Unsere Eigenprodukte
            </h2>
            <p className="text-lg text-hasi-gray max-w-2xl mx-auto">
              Professionelle Sicherheitslösungen – entwickelt für Ihre Datensicherheit
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Hasi Safe Stick */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-hasi-blue to-hasi-accent p-8 text-white">
                <div className="text-6xl mb-4">🔒</div>
                <h3 className="text-2xl font-bold mb-2">Hasi Safe Stick</h3>
                <p className="text-xl mb-4">Hochsicherer USB-Stick mit Doppelverschlüsselung</p>
                <p className="text-3xl font-bold">ab 59 €</p>
              </div>
              <div className="p-8">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-hasi-green mr-2 text-xl">✓</span>
                    <span>AES-256 Militärstandard-Verschlüsselung</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hasi-green mr-2 text-xl">✓</span>
                    <span>Integrierter Passwortmanager (KeePass)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hasi-green mr-2 text-xl">✓</span>
                    <span>Plug & Play – keine Installation nötig</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hasi-green mr-2 text-xl">✓</span>
                    <span>Inklusive persönlicher Einrichtung und Schulung</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hasi-green mr-2 text-xl">✓</span>
                    <span>DSGVO-konform für sensible Daten</span>
                  </li>
                </ul>
                <Link
                  href="/hasi-safe-stick"
                  className="block text-center px-6 py-3 bg-hasi-blue text-white font-bold rounded-lg hover:bg-hasi-darkblue transition-colors"
                >
                  Mehr zum Safe Stick →
                </Link>
              </div>
            </div>

            {/* Hasi Cloud */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-hasi-accent to-hasi-blue p-8 text-white">
                <div className="text-6xl mb-4">☁️</div>
                <h3 className="text-2xl font-bold mb-2">Hasi Cloud</h3>
                <p className="text-xl mb-4">Sichere Cloud-Speicherlösung mit persönlichem Service</p>
                <p className="text-3xl font-bold">ab 99 € (netto)</p>
              </div>
              <div className="p-8">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-hasi-green mr-2 text-xl">✓</span>
                    <span>DSGVO-konforme Datenspeicherung in Deutschland</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hasi-green mr-2 text-xl">✓</span>
                    <span>Persönlicher Ansprechpartner vor Ort</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hasi-green mr-2 text-xl">✓</span>
                    <span>Zugriff von überall (PC, Tablet, Smartphone)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hasi-green mr-2 text-xl">✓</span>
                    <span>Persönliche Einrichtung und Schulung inklusive</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hasi-green mr-2 text-xl">✓</span>
                    <span>Keine Weitergabe an Dritte</span>
                  </li>
                </ul>
                <Link
                  href="/hasi-cloud"
                  className="block text-center px-6 py-3 bg-hasi-accent text-white font-bold rounded-lg hover:bg-hasi-blue transition-colors"
                >
                  Mehr zur Hasi Cloud →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warum HASI */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-hasi-darkblue mb-4">
              Warum HASI Elektronic?
            </h2>
            <p className="text-lg text-hasi-gray max-w-2xl mx-auto">
              Fast 40 Jahre Erfahrung treffen auf moderne Lösungen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-hasi-lightblue rounded-full flex items-center justify-center text-2xl">
                🏆
              </div>
              <div>
                <h3 className="text-xl font-bold text-hasi-blue mb-2">Seit 1986</h3>
                <p className="text-hasi-gray">
                  Fast vier Jahrzehnte Erfahrung in der IT-Branche. Wir haben die digitale Revolution miterlebt und mitgestaltet.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-hasi-lightblue rounded-full flex items-center justify-center text-2xl">
                👤
              </div>
              <div>
                <h3 className="text-xl font-bold text-hasi-blue mb-2">Persönlicher Service</h3>
                <p className="text-hasi-gray">
                  Kein Callcenter, keine anonyme Hotline. Bei uns haben Sie einen direkten Ansprechpartner mit Namen und Gesicht.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-hasi-lightblue rounded-full flex items-center justify-center text-2xl">
                💰
              </div>
              <div>
                <h3 className="text-xl font-bold text-hasi-blue mb-2">Faire Preise</h3>
                <p className="text-hasi-gray">
                  Kostenlose Erstdiagnose und absolute Preistransparenz. Sie erfahren vorher, was es kostet – keine versteckten Kosten.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-hasi-lightblue rounded-full flex items-center justify-center text-2xl">
                🏠
              </div>
              <div>
                <h3 className="text-xl font-bold text-hasi-blue mb-2">Regional verwurzelt</h3>
                <p className="text-hasi-gray">
                  In Vaihingen an der Enz zu Hause. Wir kennen die Region und die Menschen – Ihr Technik-Partner von nebenan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-hasi-blue to-hasi-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Brauchen Sie Hilfe mit Ihrer Technik?
          </h2>
          <p className="text-xl mb-8">
            Kontaktieren Sie uns für eine kostenlose Erstdiagnose!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+4970421639"
              className="px-8 py-4 bg-white text-hasi-blue font-bold rounded-lg text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              📞 07042 / 16391
            </a>
            <Link
              href="/kontakt"
              className="px-8 py-4 bg-hasi-green text-white font-bold rounded-lg text-lg hover:bg-green-600 transition-colors shadow-lg"
            >
              Online anfragen
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-200">
            Oder besuchen Sie uns: Grabenstraße 18, 71665 Vaihingen an der Enz
          </p>
        </div>
      </section>
    </div>
  )
}
