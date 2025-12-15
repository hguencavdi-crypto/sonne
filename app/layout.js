import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'HASI Elektronic - IT-Dienstleistungen seit 1986 | Vaihingen an der Enz',
  description: 'PC-Reparatur, Datenrettung, IT-Sicherheit und mehr. Kostenlose Erstdiagnose. Ihr Technik-Partner in Vaihingen an der Enz seit 1986.',
  keywords: 'PC Reparatur Vaihingen, Laptop Reparatur, Computer Service, Datenrettung, IT Service Vaihingen an der Enz',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
