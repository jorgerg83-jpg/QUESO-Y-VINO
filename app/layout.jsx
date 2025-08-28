
import './globals.css'

export const metadata = {
  title: 'Queso y Vino — Viajes exclusivos',
  description: 'Viajes personalizados y experiencias auténticas en Suiza, Menorca y Granada.'
}
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
