export const metadata = {
  title: 'Impressum | HASI Elektronic',
  description: 'Impressum und rechtliche Angaben von HASI Elektronic',
}

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-hasi-darkblue mb-8">Impressum</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-hasi-blue mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="text-hasi-text leading-relaxed">
              <strong>HASI Elektronic</strong><br />
              Hamdi Güncavdi<br />
              Grabenstraße 18<br />
              71665 Vaihingen an der Enz<br />
              Deutschland
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-hasi-blue mb-4">Kontakt</h2>
            <p className="text-hasi-text leading-relaxed">
              <strong>Telefon:</strong> 07042 / 16391<br />
              <strong>E-Mail:</strong>{' '}
              <a href="mailto:info@hasi-elektronic.de" className="text-hasi-accent hover:underline">
                info@hasi-elektronic.de
              </a><br />
              <strong>Website:</strong>{' '}
              <a href="https://www.hasi-elektronic.de" className="text-hasi-accent hover:underline">
                www.hasi-elektronic.de
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-hasi-blue mb-4">Umsatzsteuer-ID</h2>
            <p className="text-hasi-text leading-relaxed">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              <em>[wird nachgetragen]</em>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-hasi-blue mb-4">Verantwortlich für den Inhalt</h2>
            <p className="text-hasi-text leading-relaxed">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br />
              Hamdi Güncavdi<br />
              Grabenstraße 18<br />
              71665 Vaihingen an der Enz
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-hasi-blue mb-4">EU-Streitschlichtung</h2>
            <p className="text-hasi-text leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-hasi-accent hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>.<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-hasi-blue mb-4">
              Verbraucherstreitbeilegung/Universalschlichtungsstelle
            </h2>
            <p className="text-hasi-text leading-relaxed">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-hasi-blue mb-4">Haftung für Inhalte</h2>
            <p className="text-hasi-text leading-relaxed mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
              zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="text-hasi-text leading-relaxed">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-hasi-blue mb-4">Haftung für Links</h2>
            <p className="text-hasi-text leading-relaxed mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
            <p className="text-hasi-text leading-relaxed">
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
              Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
              Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-hasi-blue mb-4">Urheberrecht</h2>
            <p className="text-hasi-text leading-relaxed mb-4">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
            <p className="text-hasi-text leading-relaxed">
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
              Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem
              auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
              Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-hasi-gray">
              Quelle: Erstellt mit dem{' '}
              <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Impressum-Generator von eRecht24
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
