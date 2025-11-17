'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { db, supabase } from '@/lib/supabase';

export default function KuecheDashboard() {
  const router = useRouter();
  const [benutzer, setBenutzer] = useState(null);
  const [bestellungen, setBestellungen] = useState([]);

  useEffect(() => {
    const gespeicherterBenutzer = localStorage.getItem('benutzer');
    if (!gespeicherterBenutzer) {
      router.push('/');
      return;
    }

    const user = JSON.parse(gespeicherterBenutzer);
    if (user.rolle !== 'kueche') {
      router.push('/');
      return;
    }

    setBenutzer(user);
    loadBestellungen();

    // Echtzeit-Updates für Bestellungen
    const bestellungenChannel = db.subscribeBestellungen((payload) => {
      console.log('Bestellung-Update:', payload);
      loadBestellungen();
    });

    // Auto-Refresh alle 30 Sekunden
    const interval = setInterval(loadBestellungen, 30000);

    return () => {
      bestellungenChannel.unsubscribe();
      clearInterval(interval);
    };
  }, [router]);

  const loadBestellungen = async () => {
    try {
      // Lade aktive Bestellungen mit Details
      const { data, error } = await supabase
        .from('bestellungen')
        .select(`
          *,
          tische(nummer),
          benutzer(username),
          bestellung_items(
            *,
            menu_items(name, beschreibung)
          )
        `)
        .in('status', ['neu', 'in_zubereitung'])
        .order('erstellt_am', { ascending: true });

      if (error) {
        console.error('Fehler beim Laden der Bestellungen:', error);
        return;
      }

      setBestellungen(data || []);
    } catch (err) {
      console.error('Fehler:', err);
    }
  };

  const handleStatusAendern = async (bestellungId, neuerStatus) => {
    const { error } = await db.updateBestellungStatus(bestellungId, neuerStatus);
    
    if (error) {
      alert('Fehler beim Aktualisieren des Status');
      return;
    }

    loadBestellungen();
  };

  const handleLogout = () => {
    localStorage.removeItem('benutzer');
    router.push('/');
  };

  if (!benutzer) {
    return <div className="min-h-screen flex items-center justify-center">Lade...</div>;
  }

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'neu': return 'status-neu';
      case 'in_zubereitung': return 'status-zubereitung';
      case 'fertig': return 'status-fertig';
      default: return '';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'neu': return 'Neu';
      case 'in_zubereitung': return 'In Zubereitung';
      case 'fertig': return 'Fertig';
      case 'serviert': return 'Serviert';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-sonne-primary">SONNE - Küche</h1>
            <p className="text-sm text-gray-600">
              {bestellungen.length} aktive Bestellung(en)
            </p>
          </div>
          <button onClick={handleLogout} className="btn-secondary">
            Abmelden
          </button>
        </div>
      </header>

      {/* Bestellungen */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {bestellungen.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">👨‍🍳</div>
            <h2 className="text-2xl font-semibold text-gray-600">Keine offenen Bestellungen</h2>
            <p className="text-gray-500 mt-2">Perfekt! Alles ist auf dem neuesten Stand.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bestellungen.map((bestellung) => (
              <div key={bestellung.id} className="card">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">
                      Tisch {bestellung.tische?.nummer}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Kellner: {bestellung.benutzer?.username}
                    </p>
                  </div>
                  <span className={`status-badge ${getStatusBadgeClass(bestellung.status)}`}>
                    {getStatusText(bestellung.status)}
                  </span>
                </div>

                {/* Bestellte Items */}
                <div className="space-y-2 mb-4">
                  {bestellung.bestellung_items?.map((item) => (
                    <div key={item.id} className="p-2 bg-gray-50 rounded">
                      <div className="flex justify-between">
                        <div className="font-medium">{item.menu_items?.name}</div>
                        <div className="text-sm font-semibold">×{item.menge}</div>
                      </div>
                      {item.menu_items?.beschreibung && (
                        <div className="text-xs text-gray-600">{item.menu_items.beschreibung}</div>
                      )}
                      {item.notizen && (
                        <div className="text-xs text-blue-600 mt-1">📝 {item.notizen}</div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Zeit */}
                <div className="text-xs text-gray-500 mb-4">
                  Bestellt: {new Date(bestellung.erstellt_am).toLocaleTimeString('de-DE', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </div>

                {/* Aktionen */}
                <div className="flex gap-2">
                  {bestellung.status === 'neu' && (
                    <button
                      onClick={() => handleStatusAendern(bestellung.id, 'in_zubereitung')}
                      className="flex-1 bg-yellow-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-yellow-600 transition-colors"
                    >
                      In Zubereitung
                    </button>
                  )}
                  {bestellung.status === 'in_zubereitung' && (
                    <button
                      onClick={() => handleStatusAendern(bestellung.id, 'fertig')}
                      className="flex-1 bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors"
                    >
                      Fertig
                    </button>
                  )}
                  {bestellung.status === 'fertig' && (
                    <div className="flex-1 text-center text-green-600 font-medium py-2">
                      ✓ Bereit zum Servieren
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
