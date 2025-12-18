# Frontend - DocuAssist AI

## 📖 Descripción

Interfaz web moderna para el sistema DocuAssist AI, construida con React 18+ y Vite.

### Stack Tecnológico

- **React 18+**: Framework UI
- **Vite**: Build tool y dev server
- **Tailwind CSS**: Framework de estilos
- **React Router**: Navegación entre páginas
- **Fetch API**: Comunicación con backend

---

## 📁 Estructura

```
frontend/
├── src/
│   ├── pages/
│   │   ├── Dashboard.jsx          # Landing page con búsquedas recientes
│   │   ├── AskAI.jsx              # Interfaz de chat principal
│   │   ├── SearchHistory.jsx      # Historial completo de búsquedas
│   │   └── Login.jsx              # Página de login
│   ├── components/
│   │   ├── chat/                  # Componentes del chat
│   │   │   ├── ChatMessages.jsx
│   │   │   ├── ChatInput.jsx
│   │   │   ├── ChatMessage.jsx
│   │   │   ├── ChatLoader.jsx
│   │   │   ├── ChatHeader.jsx
│   │   │   └── EmptyState.jsx
│   │   ├── layout/                # Layout de la aplicación
│   │   │   ├── AppLayout.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── Topbar.jsx
│   │   └── ui/                    # Componentes UI reutilizables
│   ├── services/
│   │   ├── chatService.js         # API de chat
│   │   └── historyService.js      # API de historial
│   ├── App.jsx                    # Componente raíz
│   └── main.jsx                   # Entry point
├── package.json
├── vite.config.js
└── tailwind.config.js
```

---

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

---

## 🔌 Comunicación con Backend

El frontend se comunica con el backend a través de servicios:

### chatService.js

```javascript
const API_URL = "http://localhost:8000";

// Enviar pregunta
sendMessage(question, filters)

// Obtener historial limitado
getSearchHistory(limit)
```

### historyService.js

```javascript
// Obtener historial completo con filtros
getSearchHistory(limit)
```

---

## 📄 Páginas Principales

### Dashboard
- Página de inicio
- Muestra las últimas 3 búsquedas reales (no hardcodeadas)
- Cards de acceso rápido

### AskAI
- Interfaz de chat principal
- Dropdowns para seleccionar filtros:
  - Tipo de documentación (Técnico/Sistema)
  - Categoría de equipo
  - Sistema (para docs de sistema)
  - Marca y Modelo (para docs técnicos)
- Muestra respuestas con fuentes
- Historial de mensajes en la sesión

### SearchHistory
- Tabla completa del historial
- Columnas: Pregunta, Respuesta, Tipo, Metadata, Fecha
- Filtros y búsqueda
- Badges de colores para tipo de documentación

---

## 🎨 Estilos

El proyecto usa Tailwind CSS con configuración personalizada:

- Tema oscuro por defecto
- Colores personalizados
- Componentes responsive
- Animaciones suaves

---

## 🔧 Configuración

### Vite (vite.config.js)
- Plugin de React
- Puerto por defecto: 5173

### Tailwind (tailwind.config.js)
- Content paths configurados
- Theme extendido con colores personalizados

### ESLint (eslint.config.js)
- Reglas para React
- Configuración para desarrollo

---

## 👤 Autor

**Agostina Torres**  
Get Talent - Pi Data  
Challenge Final - Diciembre 2025
