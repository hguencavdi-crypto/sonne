'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '@/lib/supabase';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { data: benutzer, error: loginError } = await db.loginBenutzer(username, password);

      if (loginError || !benutzer) {
        setError('Ungültige Anmeldedaten');
        setLoading(false);
        return;
      }

      localStorage.setItem('benutzer', JSON.stringify(benutzer));

      switch (benutzer.rolle) {
        case 'admin':
          router.push('/admin');
          break;
        case 'kellner':
          router.push('/kellner');
          break;
        case 'kueche':
          router.push('/kueche');
          break;
        default:
          setError('Ungültige Benutzerrolle');
      }
    } catch (err) {
      setError('Fehler bei der Anmeldung');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="card max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-sonne-primary mb-2">SONNE</h1>
          <p className="text-gray-600">Restaurant Bestellsystem</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Benutzername
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field"
              placeholder="Benutzername eingeben"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Passwort
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              placeholder="Passwort eingeben"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full"
          >
            {loading ? 'Anmeldung läuft...' : 'Anmelden'}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          Standard-Login: Admin / Admin
        </div>
      </div>
    </div>
  );
}
