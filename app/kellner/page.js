'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '@/lib/supabase';

export default function KellnerDashboard() {
  const router = useRouter();
  const [benutzer, setBenutzer] = useState(null);
  const [tische, setTische] = useState([]);
  const [selectedTisch, setSelectedTisch] = useState(null);
  const [menuKategorien, setMenuKategorien] = useState([]);
  const [warenkorb, setWarenkorb] = useState([]);
  const [showBestellModal, setShowBestellModal] = useState(false);

  useEffect(() => {
    const gespeicherterBenutzer = localStorage.getItem('benutzer');
    if (!gespeicherterBenutzer) {
      router.push('/');
      return;
    }

    const user = JSON.parse(gespeicherterBenutzer);
    if (user.rolle !== 'kellner') {
      router.push('/');
      return;
    }

    setBenutzer(user);
    loadData();

    // Echtzeit-Updates für Tische
    const tischeChannel = db.subscribeTische((payload) => {
      console.log('Tisch-Update:', payload);
      loadData();
    });

    return () => {
      tischeChannel.unsubscribe();
    };
  }, [router]);

  const loadData = async () => {
    const { data: tischeData } = await db.getAlleTische();
    if (tischeData) setTische(tischeData);

    const { data: menuData } = await db.getMenuByKategorie();
    if (menuData) setMenuKategorien(menuData);
  };

  const handleTischAuswaehlen = (tisch) => {
    setSelectedTisch(tisch);
    setWarenkorb([]);
    setShowBestellModal(true);
  };

  const handleItemHinzufuegen = (item) => {
    const existingItem = warenkorb.find(w => w.id === item.id);
    if (existingItem) {
      setWarenkorb(warenkorb.map(w =>
        w.id === item.id ? { ...w, menge: w.menge + 1 } : w
      ));
    } else {
      setWarenkorb([...warenkorb, { ...item, menge: 1, notizen: '' }]);
    }
  };

  const handleMengeAendern = (itemId, delta) => {
    setWarenkorb(warenkorb.map(item => {
      if (item.id === itemId) {
        const neueMenge = Math.max(0, item.menge + delta);
        return neueMenge === 0 ? null : { ...item, menge: neueMenge };
      }
      return item;
    }).filter(Boolean));
  };

  const handleBestellungAbsenden = async () => {
    if (warenkorb.length === 0) {
      alert('Warenkorb ist leer!');
      return;
    }

    try {
      // Erstelle Bestellung
      const { data: bestellung, error: bestellungError } = await db.createBestellung(
        selectedTisch.id,
        benutzer.id
      );

      if (bestellungError) {
        alert('Fehler beim Erstellen der Bestellung');
        return;
      }

      // Füge Items hinzu
      for (const item of warenkorb) {
        await db.addBestellungItem(
          bestellung.id,
          item.id,
          item.menge,
          item.notizen || null
        );
      }

      // Update Tisch-Status
      await db.updateTischStatus(selectedTisch.id, 'besetzt');

      alert('Bestellung erfolgreich aufgegeben!');
      setShowBestellModal(false);
      setSelectedTisch(null);
      setWarenkorb([]);
      loadData();
    } catch (error) {
      alert('Fehler beim Absenden der Bestellung');
      console.error(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('benutzer');
    router.push('/');
  };

  if (!benutzer) {
    return <div className="min-h-screen flex items-center justify-center">Lade...</div>;
  }

  const getTischStatusClass = (status) => {
    switch (status) {
      case 'frei': return 'tisch-frei';
      case 'besetzt': return 'tisch-besetzt';
      case 'reserviert': return 'tisch-reserviert';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-sonne-primary">SONNE - Kellner</h1>
            <p className="text-sm text-gray-600">{benutzer.username}</p>
          </div>
          <button onClick={handleLogout} className="btn-secondary">
            Abmelden
          </button>
        </div>
      </header>

      {/* Tischübersicht */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h2 className="text-xl font-semibold mb-4">Tischübersicht</h2>
        
        {/* Legende */}
        <div className="flex gap-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-tisch-frei rounded"></div>
            <span className="text-sm">Frei</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-tisch-besetzt rounded"></div>
            <span className="text-sm">Besetzt</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-tisch-reserviert rounded"></div>
            <span className="text-sm">Reserviert</span>
          </div>
        </div>

        {/* Tische Grid */}
        <div className="grid grid-cols-4 gap-4">
          {tische.map((tisch) => (
            <div
              key={tisch.id}
              onClick={() => handleTischAuswaehlen(tisch)}
              className={`tisch-card ${getTischStatusClass(tisch.status)}`}
            >
              <div className="text-2xl font-bold">Tisch {tisch.nummer}</div>
              <div className="text-sm mt-2">{tisch.kapazitaet} Personen</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bestellmodal */}
      {showBestellModal && selectedTisch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">
                  Bestellung für Tisch {selectedTisch.nummer}
                </h2>
                <button
                  onClick={() => setShowBestellModal(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6">
              {/* Menü */}
              <div className="space-y-6">
                {menuKategorien.map((kategorie) => (
                  <div key={kategorie.id}>
                    <h3 className="text-lg font-semibold mb-3">{kategorie.name}</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {kategorie.menu_items?.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleItemHinzufuegen(item)}
                          className="text-left p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="font-medium">{item.name}</div>
                          {item.beschreibung && (
                            <div className="text-sm text-gray-600">{item.beschreibung}</div>
                          )}
                          <div className="text-sm font-semibold mt-1">
                            €{item.preis.toFixed(2)}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Warenkorb */}
              {warenkorb.length > 0 && (
                <div className="mt-6 border-t pt-6">
                  <h3 className="text-lg font-semibold mb-3">Warenkorb</h3>
                  <div className="space-y-2">
                    {warenkorb.map((item) => (
                      <div key={item.id} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <div className="flex-1">
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm text-gray-600">
                            €{item.preis.toFixed(2)} × {item.menge} = €{(item.preis * item.menge).toFixed(2)}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleMengeAendern(item.id, -1)}
                            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{item.menge}</span>
                          <button
                            onClick={() => handleMengeAendern(item.id, 1)}
                            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="text-xl font-bold">
                      Gesamt: €{warenkorb.reduce((sum, item) => sum + (item.preis * item.menge), 0).toFixed(2)}
                    </div>
                    <button onClick={handleBestellungAbsenden} className="btn-primary">
                      Bestellung absenden
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
