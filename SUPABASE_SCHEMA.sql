-- ============================================
-- SONNE RESTAURANT - DATABASE SCHEMA
-- Supabase SQL Editor'da çalıştır!
-- ============================================

-- Önce eski tabloları sil (dikkatli!)
DROP TABLE IF EXISTS bestellung_items CASCADE;
DROP TABLE IF EXISTS bestellungen CASCADE;
DROP TABLE IF EXISTS menu_items CASCADE;
DROP TABLE IF EXISTS kategorien CASCADE;
DROP TABLE IF EXISTS tische CASCADE;
DROP TABLE IF EXISTS benutzer CASCADE;
DROP TABLE IF EXISTS reservierungen CASCADE;

-- BENUTZER (Admin, Kellner, Küche)
CREATE TABLE benutzer (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  rolle VARCHAR(20) NOT NULL CHECK (rolle IN ('admin', 'kellner', 'kueche')),
  erstellt_am TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  aktiv BOOLEAN DEFAULT TRUE
);

INSERT INTO benutzer (username, password_hash, rolle) 
VALUES ('Admin', 'Admin', 'admin');

-- TISCHE (16 Tische, alle 4 Personen)
CREATE TABLE tische (
  id SERIAL PRIMARY KEY,
  nummer INTEGER UNIQUE NOT NULL,
  kapazitaet INTEGER DEFAULT 4,
  status VARCHAR(20) DEFAULT 'frei' CHECK (status IN ('frei', 'besetzt', 'reserviert')),
  aktualisiert_am TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO tische (nummer, kapazitaet, status)
SELECT generate_series(1, 16), 4, 'frei';

-- KATEGORIEN
CREATE TABLE kategorien (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  reihenfolge INTEGER
);

INSERT INTO kategorien (name, reihenfolge) VALUES
('Vorspeisen', 1),
('Salate', 2),
('Nudelgerichte', 3),
('Pfannengerichte', 4),
('Fleisch auf heißem Stein', 5);

-- MENÜ ITEMS
CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY,
  kategorie_id INTEGER REFERENCES kategorien(id),
  name VARCHAR(200) NOT NULL,
  beschreibung TEXT,
  preis DECIMAL(10,2) NOT NULL,
  allergene TEXT,
  verfuegbar BOOLEAN DEFAULT TRUE
);

-- Vorspeisen
INSERT INTO menu_items (kategorie_id, name, preis, allergene) VALUES
(1, 'Hausgemachte Tomatencremesuppe', 6.90, 'G'),
(1, 'Bruschetta', 7.90, ''),
(1, 'Büffelmozzarella', 9.90, 'G');

-- Salate
INSERT INTO menu_items (kategorie_id, name, beschreibung, preis, allergene) VALUES
(2, 'Gemischter Salat klein', 'mit hausgemachtem Kräuterdressing', 6.90, 'G,J,L'),
(2, 'Gemischter Salat groß', 'mit hausgemachtem Kräuterdressing', 9.90, 'G,J,L'),
(2, 'Veggie-Salat', 'mit Grillgemüse und Feta', 19.90, 'G'),
(2, 'Gambas-Salat', 'mit Riesengarnelen und Ananas', 19.90, 'D'),
(2, 'Steakhouse-Salat', 'mit gegrillten Steakstreifen', 19.90, '');

-- Nudelgerichte
INSERT INTO menu_items (kategorie_id, name, beschreibung, preis, allergene) VALUES
(3, 'Penne mit scharfer Peperoni', 'in Tomatensoße', 10.90, 'A,C,D,G,L'),
(3, 'Rigatoni mit Büffelmozzarella', 'in Tomaten-Sahnesoße', 12.90, 'A,C,D,G,L'),
(3, 'Spaghetti mit Riesengarnelen', 'in Limetten-Sahnesoße', 16.90, 'A,C,D,G,L'),
(3, 'Rigatoni mit Gemüse', 'in Tomatensoße', 16.90, 'A,C,D,G,L'),
(3, 'Penne mit Steak-Streifen', 'in Tomatensoße', 16.90, 'A,C,D,G,L'),
(3, 'Manti', 'in Knoblauch-Joghurtsoße und Tomatenmark', 16.90, 'A,C,D,G,L');

-- Pfannengerichte
INSERT INTO menu_items (kategorie_id, name, beschreibung, preis) VALUES
(4, 'Fleischpfanne', 'serviert mit Bulgur', 28.90),
(4, 'Garnelenpfanne', 'serviert mit Bulgur', 28.90);

-- Fleisch auf heißem Stein
INSERT INTO menu_items (kategorie_id, name, beschreibung, preis) VALUES
(5, 'Hüftsteak 200g', 'extra mager und zart', 24.90),
(5, 'Hüftsteak 300g', 'extra mager und zart', 31.90),
(5, 'Hüftsteak 400g', 'extra mager und zart', 38.90),
(5, 'Rumpsteak 200g', 'aromatisch mit dem typischen Fettrand', 27.90),
(5, 'Rumpsteak 300g', 'aromatisch mit dem typischen Fettrand', 35.90),
(5, 'Rumpsteak 400g', 'aromatisch mit dem typischen Fettrand', 43.90),
(5, 'Entrecôte 300g', 'aromatisch mit dem klassischen Fettauge', 35.90),
(5, 'Entrecôte 400g', 'aromatisch mit dem klassischen Fettauge', 43.90),
(5, 'Filet 200g', 'das edelste und zarteste Stück vom Rind', 34.90),
(5, 'Filet 300g', 'das edelste und zarteste Stück vom Rind', 44.90);

-- BESTELLUNGEN
CREATE TABLE bestellungen (
  id SERIAL PRIMARY KEY,
  tisch_id INTEGER NOT NULL REFERENCES tische(id),
  kellner_id INTEGER NOT NULL REFERENCES benutzer(id),
  status VARCHAR(20) DEFAULT 'neu' CHECK (status IN ('neu', 'in_zubereitung', 'fertig', 'serviert', 'abgeschlossen')),
  erstellt_am TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  aktualisiert_am TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- BESTELLUNGS ITEMS
CREATE TABLE bestellung_items (
  id SERIAL PRIMARY KEY,
  bestellung_id INTEGER NOT NULL REFERENCES bestellungen(id) ON DELETE CASCADE,
  menu_item_id INTEGER NOT NULL REFERENCES menu_items(id),
  menge INTEGER DEFAULT 1,
  notizen TEXT,
  status VARCHAR(20) DEFAULT 'offen'
);

-- RESERVIERUNGEN (Optional)
CREATE TABLE reservierungen (
  id SERIAL PRIMARY KEY,
  tisch_id INTEGER NOT NULL REFERENCES tische(id),
  kunde_name VARCHAR(100) NOT NULL,
  kunde_telefon VARCHAR(20),
  datum DATE NOT NULL,
  uhrzeit TIME NOT NULL,
  personen_anzahl INTEGER NOT NULL,
  status VARCHAR(20) DEFAULT 'aktiv',
  notizen TEXT
);

-- TRIGGER für auto-update timestamp
CREATE OR REPLACE FUNCTION update_aktualisiert_am()
RETURNS TRIGGER AS $$
BEGIN
  NEW.aktualisiert_am = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER bestellungen_update
BEFORE UPDATE ON bestellungen
FOR EACH ROW
EXECUTE FUNCTION update_aktualisiert_am();

-- INDEXES für Performance
CREATE INDEX idx_bestellungen_status ON bestellungen(status);
CREATE INDEX idx_bestellungen_tisch ON bestellungen(tisch_id);
CREATE INDEX idx_tische_status ON tische(status);
CREATE INDEX idx_menu_items_kategorie ON menu_items(kategorie_id);

-- SUCCESS!
DO $$
BEGIN
  RAISE NOTICE '✅ Database erfolgreich erstellt!';
  RAISE NOTICE '📊 16 Tische, 26 Menü Items, 1 Admin User';
  RAISE NOTICE '🔑 Login: Admin / Admin';
END $$;
