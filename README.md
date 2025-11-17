# 🍽️ SONNE RESTAURANT - Bestellsystem

Kellner-Küche-System für das Sonne Restaurant in Sersheim.

## 🚀 SCHNELLSTART (3 SCHRITTE!)

### SCHRITT 1: Supabase SQL ausführen

1. Gehe zu https://supabase.com
2. Öffne dein "Sone" Projekt
3. Gehe zu SQL Editor
4. Kopiere und führe die SQL aus `SUPABASE_SCHEMA.sql` aus

### SCHRITT 2: Environment Variables

1. In Supabase: Settings → API
2. Kopiere:
   - Project URL
   - anon public key
3. Erstelle `.env.local` Datei:
   ```
   NEXT_PUBLIC_SUPABASE_URL=deine-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=dein-key
   ```

### SCHRITT 3: Auf Hostinger Horizon deployen

1. GitHub Repository erstellen
2. Dieses Projekt hochladen
3. In Hostinger Horizon:
   - "Import from Git"
   - Repository verbinden
   - Environment Variables eintragen (siehe oben)
   - Deploy!

## 📋 FEATURES

✅ Admin Dashboard (Kellner verwalten, Tische sehen)
✅ Kellner Interface (Bestellungen aufnehmen)
✅ Küche Interface (Bestellungen bearbeiten)
✅ 16 Tische (alle 4 Personen)
✅ Komplettes Menü von Sonne Restaurant
✅ Echtzeit-Synchronisation
✅ Minimalistisches Design

## 🔑 STANDARD LOGIN

**Admin:**
- Username: `Admin`
- Password: `Admin`

⚠️ Nach erstem Login Passwort ändern!

## 📁 DATEIEN

```
sonne-restaurant/
├── app/
│   ├── admin/         # Admin Dashboard
│   ├── kellner/       # Kellner Interface
│   ├── kueche/        # Küchen Interface
│   ├── page.js        # Login
│   ├── layout.js      # Root Layout
│   └── globals.css    # Styles
├── lib/
│   └── supabase.js    # Database Client
├── .env.example       # Environment Template
├── package.json       # Dependencies
└── SUPABASE_SCHEMA.sql # Database Schema
```

## 🛠️ LOKALER TEST (Optional)

```bash
npm install
npm run dev
```

Öffne: http://localhost:3000

## 📞 SUPPORT

Bei Fragen: hamdi@example.com

**Entwickelt von Hamdi Güncavdi**

---

© 2025 Sonne Restaurant - Alle Rechte vorbehalten
