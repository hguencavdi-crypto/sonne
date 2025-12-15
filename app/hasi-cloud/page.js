import Link from 'next/link'

export const metadata = {
  title: 'Hasi Cloud - Sichere Cloud-Speicherlösung | HASI Elektronic',
  description: 'Die Hasi Cloud ist Ihre sichere Cloud-Speicherlösung mit persönlichem Service vor Ort. DSGVO-konform, persönlich betreut. Ab 99€ netto.',
}

export default function HasiCloudPage() {
  const pakete = [
    { speicher: '100 GB', preis: '99,00', preisProGB: '0,99' },
    { speicher: '200 GB', preis: '149,00', preisProGB: '0,75', empfohlen: false },
    { speicher: '500 GB', preis: '199,00', preisProGB: '0,40', empfohlen: true },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-hasi-accent to-hasi-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-8xl mb-6">☁️</div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Hasi Cloud
            </h1>
            <p className="text-2xl mb-4">
              Sichere Cloud-Speicherlösung mit persönlichem Service
            </p>
            <p className="text-4xl font-bold mb-8">ab 99 € (netto)</p>
            <p className="text-lg text-gray-100 max-w-2xl mx-auto">
              Im Gegensatz zu großen Anbietern: Persönliche Betreuung vor Ort und Daten in Deutschland
            </p>
          </div>
        </div>
      </section>

      {/* Einleitung */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-hasi-darkblue mb-6 text-center">
            Was ist die Hasi Cloud?
          </h2>
          <p className="text-lg text-hasi-gray mb-6">
            Die <strong>Hasi Cloud</strong> ist die sichere Cloud-Speicherlösung von HASI Elektronic für
            Privat- und Geschäftskunden. Im Gegensatz zu großen internationalen Cloud-Anbietern wie Google Drive,
            Dropbox oder iCloud bietet Hasi Cloud eine persönliche, regionale Betreuung mit direktem Ansprechpartner vor Ort.
          </p>
          <p className="text-lg text-hasi-gray">
            Ihre Daten werden sicher in Deutschland gespeichert und sind von überall aus zugänglich –
            mit der Sicherheit eines lokalen Anbieters, dem Sie vertrauen können.
          </p>
        </div>
      </section>

      {/* Preistabelle */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hasi-darkblue mb-4">
              Transparente Preise
            </h2>
            <p className="text-hasi-yellow font-semibold mb-2">⚠️ Alle Preise sind Nettopreise (ohne MwSt.)</p>
            <p className="text-hasi-gray">Je größer das Paket, desto günstiger der Preis pro Gigabyte!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pakete.map((paket, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                  paket.empfohlen ? 'ring-4 ring-hasi-accent transform scale-105' : ''
                }`}
              >
                {paket.empfohlen && (
                  <div className="bg-hasi-accent text-white text-center py-2 font-bold">
                    💡 BESTES PREIS-LEISTUNGS-VERHÄLTNIS
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-hasi-darkblue mb-4 text-center">
                    {paket.speicher}
                  </h3>
                  <div className="text-center mb-6">
                    <p className="text-5xl font-bold text-hasi-blue">{paket.preis} €</p>
                    <p className="text-hasi-gray mt-2">netto / Jahr</p>
                  </div>
                  <div className="bg-hasi-lightblue rounded-lg p-4 mb-6 text-center">
                    <p className="text-sm text-hasi-gray">Preis pro GB</p>
                    <p className="text-2xl font-bold text-hasi-darkblue">{paket.preisProGB} €</p>
                  </div>
                  <Link
                    href="/kontakt"
                    className={`block text-center px-6 py-3 rounded-lg font-bold transition-colors ${
                      paket.empfohlen
                        ? 'bg-hasi-accent text-white hover:bg-hasi-blue'
                        : 'bg-hasi-blue text-white hover:bg-hasi-darkblue'
                    }`}
                  >
                    Jetzt Speicherplatz sichern
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-hasi-gray">
            💡 <strong>Tipp:</strong> Das 500-GB-Paket bietet mit nur 0,40 € pro GB das beste Preis-Leistungs-Verhältnis!
          </p>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-hasi-darkblue mb-12 text-center">
            Ihre Vorteile mit der Hasi Cloud
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sicherheit */}
            <div>
              <h3 className="text-2xl font-bold text-hasi-blue mb-6 flex items-center">
                <span className="text-4xl mr-3">🔒</span>
                Sicherheit & Datenschutz
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-hasi-green mr-2">✓</span>
                  <span>DSGVO-konforme Datenspeicherung in Deutschland</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hasi-green mr-2">✓</span>
                  <span>Verschlüsselte Übertragung (SSL/TLS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hasi-green mr-2">✓</span>
                  <span>Regelmäßige Backups Ihrer Daten</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hasi-green mr-2">✓</span>
                  <span>Persönlicher Ansprechpartner vor Ort</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hasi-green mr-2">✓</span>
                  <span>Keine Weitergabe an Dritte</span>
                </li>
              </ul>
            </div>

            {/* Benutzerfreundlichkeit */}
            <div>
              <h3 className="text-2xl font-bold text-hasi-blue mb-6 flex items-center">
                <span className="text-4xl mr-3">📱</span>
                Benutzerfreundlichkeit
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-hasi-green mr-2">✓</span>
                  <span>Zugriff von überall (PC, Laptop, Tablet, Smartphone)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hasi-green mr-2">✓</span>
                  <span>Automatische Synchronisation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hasi-green mr-2">✓</span>
                  <span>Einfache Bedienung ohne technisches Vorwissen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hasi-green mr-2">✓</span>
                  <span>Dateifreigabe für Familie oder Kollegen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hasi-green mr-2">✓</span>
                  <span>Versionierung und Papierkorb-Funktion</span>
                </li>
              </ul>
            </div>

            {/* Service */}
            <div>
              <h3 className="text-2xl font-bold text-hasi-blue mb-6 flex items-center">
                <span className="text-4xl mr-3">🤝</span>
                Service & Support
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-hasi-green mr-2">✓</span>
                  <span>Persönliche Einrichtung (auf Wunsch vor Ort)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hasi-green mr-2">✓</span>
                  <span>Schulung inklusive</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hasi-green mr-2">✓</span>
                  <span>Telefon-Support: 07042/16391</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hasi-green mr-2">✓</span>
                  <span>Fernwartung bei Problemen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hasi-green mr-2">✓</span>
                  <span>Flexible Erweiterung möglich</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vergleich */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-hasi-darkblue mb-12 text-center">
            Hasi Cloud vs. Große Anbieter
          </h2>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-hasi-blue text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Kriterium</th>
                  <th className="px-6 py-4 text-center">Hasi Cloud</th>
                  <th className="px-6 py-4 text-center">Google/Dropbox/etc.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">Datenspeicherort</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-hasi-green text-2xl">✓</span>
                    <p className="text-sm text-hasi-gray">Deutschland</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-red-500 text-2xl">✗</span>
                    <p className="text-sm text-hasi-gray">USA/weltweit</p>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Persönlicher Support</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-hasi-green text-2xl">✓</span>
                    <p className="text-sm text-hasi-gray">Vor Ort verfügbar</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-red-500 text-2xl">✗</span>
                    <p className="text-sm text-hasi-gray">Nur Online/Chat</p>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Einrichtungshilfe</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-hasi-green text-2xl">✓</span>
                    <p className="text-sm text-hasi-gray">Persönlich inklusive</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-red-500 text-2xl">✗</span>
                    <p className="text-sm text-hasi-gray">Self-Service</p>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">DSGVO-Konformität</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-hasi-green text-2xl">✓</span>
                    <p className="text-sm text-hasi-gray">Vollständig</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-hasi-yellow text-2xl">⚠️</span>
                    <p className="text-sm text-hasi-gray">Fragwürdig</p>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Datenanalyse</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-hasi-green text-2xl">✓</span>
                    <p className="text-sm text-hasi-gray">Keine</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-red-500 text-2xl">✗</span>
                    <p className="text-sm text-hasi-gray">Für Werbung genutzt</p>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Ansprechpartner</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-hasi-green text-2xl">✓</span>
                    <p className="text-sm text-hasi-gray">Hamdi Güncavdi</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-red-500 text-2xl">✗</span>
                    <p className="text-sm text-hasi-gray">Anonym</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Zielgruppen */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-hasi-darkblue mb-12 text-center">
            Für wen ist die Hasi Cloud geeignet?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: '👤', titel: 'Privatpersonen', text: 'Fotos, Videos, Dokumente sicher in der Cloud speichern' },
              { emoji: '👨‍👩‍👧‍👦', titel: 'Familien', text: 'Gemeinsamer Speicher für Familienfotos und wichtige Dokumente' },
              { emoji: '💼', titel: 'Selbstständige', text: 'Projektdaten, Rechnungen und Kundendokumente zentral verwalten' },
              { emoji: '🏢', titel: 'Kleine Unternehmen', text: 'Teamarbeit und Datenaustausch ohne komplizierte IT-Infrastruktur' },
              { emoji: '🎭', titel: 'Vereine', text: 'Protokolle, Mitgliederlisten und Vereinsdokumente sicher speichern' },
              { emoji: '👴', titel: 'Senioren', text: 'Einfacher Zugang zu Fotos und Dokumenten – mit persönlicher Unterstützung' },
            ].map((gruppe, index) => (
              <div key={index} className="bg-hasi-lightblue rounded-lg p-6">
                <div className="text-5xl mb-3">{gruppe.emoji}</div>
                <h3 className="text-xl font-bold text-hasi-blue mb-2">{gruppe.titel}</h3>
                <p className="text-hasi-gray">{gruppe.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kombinationsangebot */}
      <section className="py-12 bg-hasi-lightblue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-hasi-darkblue mb-4">
              🎁 Kombinationsangebot: Safe Stick + Cloud
            </h2>
            <p className="text-lg text-hasi-gray">
              Kombinieren Sie den <strong>Hasi Safe Stick</strong> (59 €) mit der <strong>Hasi Cloud</strong> für maximale Sicherheit.
              Der Stick schützt Ihre sensiblen Daten offline, die Cloud ermöglicht flexiblen Zugriff von überall.
              Sprechen Sie uns auf attraktive Kombinationspreise an!
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-hasi-accent to-hasi-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Jetzt Hasi Cloud bestellen
          </h2>
          <p className="text-xl mb-8">
            Persönliche Beratung und Einrichtung durch uns – vor Ort oder per Fernwartung
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
              Jetzt anfragen
            </Link>
          </div>
          <p className="mt-6 text-sm">
            Grabenstraße 18, 71665 Vaihingen an der Enz
          </p>
        </div>
      </section>
    </div>
  )
}
