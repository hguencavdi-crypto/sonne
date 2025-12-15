import Link from 'next/link'

export const metadata = {
  title: 'Hasi Safe Stick - Hochsicherer USB-Stick | HASI Elektronic',
  description: 'Der Hasi Safe Stick ist ein hochsicherer USB-Stick mit AES-256 Verschlüsselung und integriertem Passwortmanager. Ab 59€ inkl. persönlicher Einrichtung.',
}

export default function HasiSafeStickPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-hasi-blue to-hasi-accent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-8xl mb-6">🔒</div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Hasi Safe Stick
            </h1>
            <p className="text-2xl mb-4">
              Hochsicherer USB-Stick mit Doppelverschlüsselung
            </p>
            <p className="text-4xl font-bold mb-8">ab 59 €</p>
            <p className="text-lg text-gray-100 max-w-2xl mx-auto">
              Inklusive persönlicher Einrichtung und Einweisung im Laden
            </p>
          </div>
        </div>
      </section>

      {/* Was ist der Safe Stick */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-hasi-darkblue mb-6 text-center">
            Was ist der Hasi Safe Stick?
          </h2>
          <p className="text-lg text-hasi-gray mb-6">
            Der <strong>Hasi Safe Stick</strong> ist ein proprietäres Sicherheitsprodukt von HASI Elektronic –
            ein hochsicherer USB-Stick mit doppelter Verschlüsselung, der Datensicherheit für jedermann zugänglich macht.
            Der Stick kombiniert zwei bewährte Open-Source-Sicherheitstechnologien in einem benutzerfreundlichen Paket.
          </p>
          <p className="text-lg text-hasi-gray">
            Perfekt für alle, die sensible Daten sicher aufbewahren müssen – ohne Fachchinesisch,
            ohne komplizierte Installation, mit persönlicher Einrichtung durch uns.
          </p>
        </div>
      </section>

      {/* Technologie */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-hasi-darkblue mb-12 text-center">
            Doppelte Sicherheit durch zwei Schichten
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Schicht 1: VeraCrypt */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">🛡️</span>
                <div>
                  <h3 className="text-2xl font-bold text-hasi-blue">Schicht 1</h3>
                  <p className="text-hasi-gray">VeraCrypt-Verschlüsselung</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-hasi-green mr-2">✓</span>
                  <span><strong>AES-256-Bit Verschlüsselung</strong> – Derselbe Standard wie Militär und Geheimdienste</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hasi-green mr-2">✓</span>
                  <span><strong>Verstecktes Laufwerk</strong> – Ohne Passwort existiert kein sichtbarer Laufwerkspfad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hasi-green mr-2">✓</span>
                  <span><strong>Plausible Deniability</strong> – Selbst bei Verlust ist nicht erkennbar, dass Daten existieren</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hasi-green mr-2">✓</span>
                  <span><strong>Brute-Force-Schutz</strong> – Ein Angriff würde Milliarden Jahre dauern</span>
                </li>
              </ul>
            </div>

            {/* Schicht 2: KeePass */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">🔑</span>
                <div>
                  <h3 className="text-2xl font-bold text-hasi-blue">Schicht 2</h3>
                  <p className="text-hasi-gray">KeePass-Passwortmanager</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-hasi-green mr-2">✓</span>
                  <span><strong>Verschlüsselter Passwort-Tresor</strong> – Alle Passwörter an einem sicheren Ort</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hasi-green mr-2">✓</span>
                  <span><strong>Auto-Type-Funktion</strong> – Automatisches Ausfüllen von Login-Daten</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hasi-green mr-2">✓</span>
                  <span><strong>Passwort-Generator</strong> – Erstellung sicherer, zufälliger Passwörter</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hasi-green mr-2">✓</span>
                  <span><strong>Kategorisierung</strong> – Organisation nach Gruppen (Banking, E-Mail, Shopping)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-hasi-darkblue mb-12 text-center">
            Alle Vorteile auf einen Blick
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'AES-256 Militärstandard-Verschlüsselung',
              'Unsichtbare Daten ohne Passwort',
              'Plug & Play – keine Installation erforderlich',
              'Portable Nutzung an jedem Windows-PC',
              'Inklusive persönlicher Einrichtung und Schulung',
              'DSGVO-konform für sensible Daten',
              'Kompatibel mit Windows 7, 10, 11',
              'macOS und Linux auf Anfrage',
              'Open-Source-Software (transparent und geprüft)',
              'Offline-Sicherheit – keine Cloud, keine fremden Server'
            ].map((vorteil, index) => (
              <div key={index} className="flex items-start bg-hasi-lightblue rounded-lg p-4">
                <span className="text-hasi-green mr-3 text-2xl">✓</span>
                <span className="text-hasi-text font-medium">{vorteil}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zielgruppen */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-hasi-darkblue mb-12 text-center">
            Für wen ist der Safe Stick geeignet?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-3">👔</div>
              <h3 className="text-xl font-bold text-hasi-blue mb-2">Unternehmer</h3>
              <p className="text-hasi-gray text-sm">
                Kundendaten, Verträge, Zugangsdaten, Geschäftsgeheimnisse
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-3">💼</div>
              <h3 className="text-xl font-bold text-hasi-blue mb-2">Freiberufler</h3>
              <p className="text-hasi-gray text-sm">
                Projektdaten, Rechnungen, Kundenkommunikation
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-3">👤</div>
              <h3 className="text-xl font-bold text-hasi-blue mb-2">Privatpersonen</h3>
              <p className="text-hasi-gray text-sm">
                Passwörter, Bankdaten, persönliche Dokumente, Fotos
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-3">⚕️</div>
              <h3 className="text-xl font-bold text-hasi-blue mb-2">Ärzte</h3>
              <p className="text-hasi-gray text-sm">
                Patientenakten, Befunde, Abrechnungsdaten (DSGVO-konform)
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-3">⚖️</div>
              <h3 className="text-xl font-bold text-hasi-blue mb-2">Anwälte</h3>
              <p className="text-hasi-gray text-sm">
                Mandantendaten, Akten, vertrauliche Korrespondenz
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-3">📰</div>
              <h3 className="text-xl font-bold text-hasi-blue mb-2">Journalisten</h3>
              <p className="text-hasi-gray text-sm">
                Quellenschutz, Recherchematerial, unveröffentlichte Artikel
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-hasi-darkblue mb-12 text-center">
            Häufig gestellte Fragen
          </h2>

          <div className="space-y-6">
            {[
              {
                frage: 'Was passiert, wenn ich den Stick verliere?',
                antwort: 'Ohne Ihr Passwort sind die Daten absolut sicher. Der Stick zeigt nicht einmal an, dass verschlüsselte Daten vorhanden sind. Ein Angreifer würde Milliarden Jahre brauchen, um die AES-256-Verschlüsselung zu knacken.'
              },
              {
                frage: 'Brauche ich eine Installation auf meinem PC?',
                antwort: 'Nein! Der Safe Stick ist Plug & Play. Alle benötigten Programme sind auf dem Stick selbst. Sie stecken ihn ein, geben Ihr Passwort ein und können sofort arbeiten.'
              },
              {
                frage: 'Was ist, wenn ich mein Passwort vergesse?',
                antwort: 'Dann sind die Daten leider unwiederbringlich verloren. Das ist das Prinzip höchster Sicherheit. Deshalb richten wir mit Ihnen gemeinsam ein sicheres, aber merkbares Passwort ein.'
              },
              {
                frage: 'Ist das DSGVO-konform?',
                antwort: 'Ja, absolut! Die AES-256-Verschlüsselung entspricht den höchsten Sicherheitsstandards der DSGVO. Perfekt für Ärzte, Anwälte und alle, die mit sensiblen Daten arbeiten.'
              },
              {
                frage: 'Wie unterscheidet sich das von Cloud-Speicher?',
                antwort: 'Der Safe Stick ist offline und in Ihrem physischen Besitz. Keine fremden Server, keine Internet-Risiken, keine Abhängigkeit von Cloud-Anbietern. Absolute Kontrolle über Ihre Daten.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-hasi-lightblue rounded-lg p-6">
                <h3 className="text-lg font-bold text-hasi-darkblue mb-3">
                  {faq.frage}
                </h3>
                <p className="text-hasi-gray">{faq.antwort}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-hasi-blue to-hasi-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Jetzt Hasi Safe Stick sichern
          </h2>
          <p className="text-xl mb-2">
            <strong>Ab 59 €</strong> inklusive persönlicher Einrichtung und Schulung
          </p>
          <p className="text-lg mb-8">
            Besuchen Sie uns im Laden oder rufen Sie an für eine unverbindliche Beratung
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
              Termin vereinbaren
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
