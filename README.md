
# Queso y Vino — Web (Next.js + Tailwind)
Sitio bilingüe (ES/FR) listo para publicar en **Vercel**.

## 🧰 Requisitos
- Node.js 18+
- Cuenta gratuita en vercel.com

## 🚀 Desarrollo local
```bash
npm install
npm run dev
# abre http://localhost:3000 (redirige a /es)
```

## 🌐 Despliegue en Vercel
1. Entra en https://vercel.com y crea un **Nuevo Proyecto**.
2. Sube esta carpeta o conecta tu repo.
3. Build Command: `next build` (por defecto). Output dir: `.next`.
4. Listo: tendrás tu dominio *.vercel.app*.

## 📁 Estructura
- app/
  - page.jsx → redirige a /es
  - es/ (inicio ES + destinos)
  - fr/ (inicio FR + destinos)
- components/ (Header, Hero, Destinos, Servicios, Cursos, Contacto)

## 📝 Personaliza
- WhatsApp: `+34 649 505 918` en Header/Contacto.
- Colores: `tailwind.config.js` (brandWine, brandCheese).
- Textos y precios en componentes/páginas.
