# 🎯 dragonWebWiki
Una web donde se suben personajes de Dragon Ball y los usuarios evalúan el nivel y poder. También pueden crear sus personajes subiendo imágenes y "habilidades".

## ✨ Features a implementar
- [ ] Mostrar spinner de carga
- [ ] Mostrar estado vacío
- [ ] Listar dragones en cards
- [ ] Crear buscador de dragones
- [ ] Mostrar detalles de un dragón
- [ ] Sistema de favoritos para dragones
- [ ] Modo oscuro/claro

## 🚀 Setup rápido
1. Clona el repositorio
2. Navega a la carpeta del proyecto
3. Ejecuta `npm install`
4. Ejecuta `npm run dev`

## 📁 Estructura del proyecto
```
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   └── header.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       └── spinner.tsx
│   ├── hooks/
│   │   └── useApi.ts
│   ├── lib/
│   │   ├── api.ts
│   │   └── utils.ts
│   ├── types/
│   │   └── index.ts
│   └── index.css
├── .env.example
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.ts
```

## 🔗 API endpoints disponibles
No se utilizan API externas, todos los datos son mockeados.

## ⭐ Criterios de evaluación y puntos
- Mostrar spinner de carga: 10pts
- Mostrar estado vacío: 10pts
- Listar dragones en cards: 25pts
- Crear buscador de dragones: 25pts
- Mostrar detalles de un dragón: 25pts
- Sistema de favoritos para dragones: 40pts
- Modo oscuro/claro: 20pts (bonus)

## 💡 Tips y recursos útiles
- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)

## ❓ FAQ y problemas comunes
- **¿Cómo inicio el proyecto?**:
  1. Clona el repositorio
  2. Ejecuta `npm install`
  3. Ejecuta `npm run dev`
- **¿Qué hacer si tengo errores de dependencias?**:
  Asegúrate de estar usando la versión correcta de Node.js y de haber instalado todas las dependencias correctamente.