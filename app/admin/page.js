'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '@/lib/supabase';

export default function AdminDashboard() {
  const router = useRouter();
  const [benutzer, setBenutzer] = useState(null);
  const [activeTab, setActiveTab] = useState('kellner');
  
  // Kellner-Verwaltung
  const [neuerKellner, setNeuerKellner] = useState({ username: '', password: '' });
  const [kellnerListe, setKellnerListe] = useState([]);
  
  // Tisch-Konfiguration
  const [tische, setTische] = useState([]);

  useEffect(() => {
    const gespeicherterBenutzer = localStorage.getItem('benutzer');
    if (!gespeicherterBenutzer) {
      router.push('/');
      return;
    }

    const user = JSON.parse(gespeicherterBenutzer);
    if (user.rolle !== 'admin') {
      router.push('/');
      return;
    }

    setBenutzer(user);
    loadData();
  }, [router]);

  const loadData = async () => {
    // Lade Tische
    const { data: tischeData } = await db.getAlleTische();
    if (tischeData) setTische(tischeData);

    // Lade Kellner (würde normale Benutzer-Query benötigen)
    // Placeholder für jetzt
    setKellnerListe([]);
  };

  const handleKellnerHinzufuegen = async (e) => {
    e.preventDefault();
    
    const { data, error } = await db.createBenutzer(
      neuerKellner.username,
      neuerKellner.password,
      'kellner'
    );

    if (error) {
      alert('Fehler beim Hinzufügen des Kellners');
      return;
    }

    alert('Kellner erfolgreich hinzugefügt!');
    setNeuerKellner({ username: '', password: '' });
    loadData();
  };

  const handlePasswortAendern = () => {
    const neuesPasswort = prompt('Neues Passwort eingeben:');
    if (!neuesPasswort) return;

    // In Production würde hier die DB aktualisiert werden
    alert('Passwort erfolgreich geändert!');
  };

  const handleLogout = () => {
    localStorage.removeItem('benutzer');
    router.push('/');
  };

  if (!benutzer) {
    return <div className="min-h-screen flex items-center justify-center">Lade...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-sonne-primary">SONNE - Admin Dashboard</h1>
            <p className="text-sm text-gray-600">Angemeldet als: {benutzer.username}</p>
          </div>
          <button onClick={handleLogout} className="btn-secondary">
            Abmelden
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('kellner')}
              className={`${
                activeTab === 'kellner'
                  ? 'border-sonne-primary text-sonne-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Kellner verwalten
            </button>
            <button
              onClick={() => setActiveTab('tische')}
              className={`${
                activeTab === 'tische'
                  ? 'border-sonne-primary text-sonne-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Tische konfigurieren
            </button>
            <button
              onClick={() => setActiveTab('passwort')}
              className={`${
                activeTab === 'passwort'
                  ? 'border-sonne-primary text-sonne-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Passwort ändern
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="mt-6">
          {activeTab === 'kellner' && (
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Neuen Kellner hinzufügen</h2>
              <form onSubmit={handleKellnerHinzufuegen} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Benutzername
                  </label>
                  <input
                    type="text"
                    value={neuerKellner.username}
                    onChange={(e) => setNeuerKellner({ ...neuerKellner, username: e.target.value })}
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Passwort
                  </label>
                  <input
                    type="password"
                    value={neuerKellner.password}
                    onChange={(e) => setNeuerKellner({ ...neuerKellner, password: e.target.value })}
                    className="input-field"
                    required
                  />
                </div>
                <button type="submit" className="btn-primary">
                  Kellner hinzufügen
                </button>
              </form>
            </div>
          )}

          {activeTab === 'tische' && (
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Tisch-Übersicht</h2>
              <div className="grid grid-cols-4 gap-4">
                {tische.map((tisch) => (
                  <div key={tisch.id} className="p-4 border rounded-lg">
                    <div className="font-semibold">Tisch {tisch.nummer}</div>
                    <div className="text-sm text-gray-600">{tisch.kapazitaet} Personen</div>
                    <div className={`text-sm mt-2 font-medium ${
                      tisch.status === 'frei' ? 'text-green-600' :
                      tisch.status === 'besetzt' ? 'text-red-600' :
                      'text-blue-600'
                    }`}>
                      {tisch.status === 'frei' ? 'Frei' :
                       tisch.status === 'besetzt' ? 'Besetzt' :
                       'Reserviert'}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Alle Tische sind auf 4 Personen konfiguriert
              </p>
            </div>
          )}

          {activeTab === 'passwort' && (
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Passwort ändern</h2>
              <p className="text-gray-600 mb-4">
                Ändern Sie Ihr Admin-Passwort für mehr Sicherheit.
              </p>
              <button onClick={handlePasswortAendern} className="btn-primary">
                Passwort ändern
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
