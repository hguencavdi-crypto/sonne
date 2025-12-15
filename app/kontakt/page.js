'use client'

import { useState } from 'react'

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefon: '',
    betreff: '',
    nachricht: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // Hier würde normalerweise die API-Integration erfolgen
    // Für jetzt simulieren wir eine erfolgreiche Übermittlung
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', telefon: '', betreff: '', nachricht: '' })
    }, 1000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-hasi-blue to-hasi-accent text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Kontaktieren Sie uns
          </h1>
          <p className="text-xl">
            Wir sind für Sie da – persönlich, telefonisch oder per E-Mail
          </p>
        </div>
      </section>

      {/* Kontaktoptionen */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Telefon */}
            <div className="bg-hasi-lightblue rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-hasi-darkblue mb-3">Telefon</h3>
              <a href="tel:+4970421639" className="text-2xl font-bold text-hasi-accent hover:underline">
                07042 / 16391
              </a>
              <p className="text-hasi-gray mt-2 text-sm">
                Mo-Fr: 09:00 - 18:00 Uhr<br />
                Sa: 10:00 - 14:00 Uhr
              </p>
            </div>

            {/* E-Mail */}
            <div className="bg-hasi-lightblue rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="text-xl font-bold text-hasi-darkblue mb-3">E-Mail</h3>
              <a href="mailto:info@hasi-elektronic.de" className="text-xl font-bold text-hasi-accent hover:underline break-all">
                info@hasi-elektronic.de
              </a>
              <p className="text-hasi-gray mt-2 text-sm">
                Antwort innerhalb von 24 Stunden
              </p>
            </div>

            {/* WhatsApp */}
            <div className="bg-hasi-lightblue rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-hasi-darkblue mb-3">WhatsApp</h3>
              <a href="https://wa.me/4970421639" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-hasi-accent hover:underline">
                Direkt chatten
              </a>
              <p className="text-hasi-gray mt-2 text-sm">
                Schnelle Antwort während der Öffnungszeiten
              </p>
            </div>
          </div>

          {/* Kontaktformular und Standort */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formular */}
            <div>
              <h2 className="text-3xl font-bold text-hasi-darkblue mb-6">
                Schreiben Sie uns
              </h2>

              {status === 'success' && (
                <div className="bg-hasi-green text-white p-4 rounded-lg mb-6">
                  ✓ Vielen Dank für Ihre Nachricht! Wir melden uns in Kürze bei Ihnen.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-hasi-text mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-hasi-accent focus:outline-none"
                    placeholder="Ihr Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-hasi-text mb-2">
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-hasi-accent focus:outline-none"
                    placeholder="ihre@email.de"
                  />
                </div>

                <div>
                  <label htmlFor="telefon" className="block text-sm font-medium text-hasi-text mb-2">
                    Telefon (optional)
                  </label>
                  <input
                    type="tel"
                    id="telefon"
                    name="telefon"
                    value={formData.telefon}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-hasi-accent focus:outline-none"
                    placeholder="Ihre Telefonnummer"
                  />
                </div>

                <div>
                  <label htmlFor="betreff" className="block text-sm font-medium text-hasi-text mb-2">
                    Betreff *
                  </label>
                  <select
                    id="betreff"
                    name="betreff"
                    value={formData.betreff}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-hasi-accent focus:outline-none"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="reparatur">PC/Laptop Reparatur</option>
                    <option value="datenrettung">Datenrettung</option>
                    <option value="safe-stick">Hasi Safe Stick</option>
                    <option value="cloud">Hasi Cloud</option>
                    <option value="beratung">Kaufberatung</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="nachricht" className="block text-sm font-medium text-hasi-text mb-2">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    id="nachricht"
                    name="nachricht"
                    value={formData.nachricht}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-hasi-accent focus:outline-none"
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full px-8 py-4 bg-hasi-blue text-white font-bold rounded-lg hover:bg-hasi-darkblue transition-colors disabled:opacity-50"
                >
                  {status === 'sending' ? 'Wird gesendet...' : 'Nachricht senden'}
                </button>

                <p className="text-sm text-hasi-gray">
                  * Pflichtfelder
                </p>
              </form>
            </div>

            {/* Standort */}
            <div>
              <h2 className="text-3xl font-bold text-hasi-darkblue mb-6">
                So finden Sie uns
              </h2>

              <div className="bg-hasi-lightblue rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-hasi-blue mb-4">Adresse</h3>
                <p className="text-hasi-text mb-2 font-medium">HASI Elektronic</p>
                <p className="text-hasi-gray mb-1">Hamdi Güncavdi</p>
                <p className="text-hasi-gray mb-1">Grabenstraße 18</p>
                <p className="text-hasi-gray mb-4">71665 Vaihingen an der Enz</p>
                <p className="text-hasi-gray">Baden-Württemberg, Deutschland</p>
              </div>

              <div className="bg-hasi-lightblue rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-hasi-blue mb-4">Öffnungszeiten</h3>
                <div className="space-y-2 text-hasi-text">
                  <div className="flex justify-between">
                    <span>Montag - Freitag:</span>
                    <span className="font-bold">09:00 - 18:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samstag:</span>
                    <span className="font-bold">10:00 - 14:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sonntag:</span>
                    <span className="text-hasi-gray">Geschlossen</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-hasi-gray">
                  ⚠️ Termine außerhalb der Öffnungszeiten nach Vereinbarung möglich
                </p>
              </div>

              <div className="bg-gray-300 rounded-xl overflow-hidden h-64">
                {/* Hier würde normalerweise eine Google Maps Integration sein */}
                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                  <div className="text-center">
                    <div className="text-5xl mb-2">📍</div>
                    <p>Google Maps Integration</p>
                    <p className="text-sm mt-2">Grabenstraße 18, 71665 Vaihingen an der Enz</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Grabenstraße+18+71665+Vaihingen+an+der+Enz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 bg-hasi-accent text-white font-bold rounded-lg hover:bg-hasi-blue transition-colors"
                >
                  In Google Maps öffnen →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zusatzinfos */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🏠</div>
              <h3 className="font-bold text-hasi-blue mb-2">Vor-Ort-Service</h3>
              <p className="text-sm text-hasi-gray">
                Besuchen Sie uns im Laden oder wir kommen zu Ihnen nach Hause
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-bold text-hasi-blue mb-2">Fernwartung</h3>
              <p className="text-sm text-hasi-gray">
                Schnelle Hilfe per Remote-Zugriff – ohne dass Sie vorbeikommen müssen
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold text-hasi-blue mb-2">Schnelle Reaktion</h3>
              <p className="text-sm text-hasi-gray">
                Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
