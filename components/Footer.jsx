
export default function Footer({ locale='es' }) {
  const t = { es: 'Queso y Vino © 2025.', fr: 'Queso y Vino © 2025.' }[locale];
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="container-max py-8 text-sm text-gray-600 flex items-center justify-between">
        <div className="flex items-center gap-2"><span>🍷🧀</span><span>Queso y Vino</span></div>
        <p>{t}</p>
      </div>
    </footer>
  )
}
