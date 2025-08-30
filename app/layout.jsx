import "./globals.css";

export const metadata = {
  title: "Queso y Vino — Viajes exclusivos y a medida",
  description: "Experiencias únicas en Suiza, Menorca y Granada. ES/FR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
