import './globals.css'

export const metadata = {
  title: 'Sonne Restaurant - Bestellsystem',
  description: 'Kellner-Küche-System für Sonne Restaurant',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
