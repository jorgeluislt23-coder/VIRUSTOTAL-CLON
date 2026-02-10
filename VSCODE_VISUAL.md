# 🖥️ Visual Studio Code - Capturas y Ejemplos

## Cómo se ve el Proyecto en VS Code

### 1. Primera Apertura del Proyecto

Cuando abres el proyecto por primera vez, VS Code detectará las extensiones recomendadas:

```
📦 Este workspace tiene recomendaciones de extensiones

¿Deseas instalar las extensiones recomendadas para este workspace?

[Instalar Todas]  [Mostrar Recomendaciones]  [Ignorar]
```

### 2. Estructura de Archivos en el Explorador

```
VIRUSTOTAL-CLON/
├── 📂 .vscode/                    ← Configuración de VS Code
│   ├── extensions.json            ← 10 extensiones recomendadas
│   ├── settings.json              ← Formato automático, etc.
│   ├── launch.json                ← Debugging
│   └── tasks.json                 ← Tareas NPM
│
├── 📂 backend/                    ← Backend Node.js
│   ├── 📂 src/
│   │   ├── 📄 index.js           ← Punto de entrada
│   │   ├── 📂 controllers/
│   │   ├── 📂 routes/
│   │   ├── 📂 services/
│   │   └── 📂 utils/
│   ├── 📂 tests/
│   ├── 📄 package.json
│   └── 📄 .env.example
│
├── 📂 frontend/                   ← Frontend React
│   ├── 📂 public/
│   ├── 📂 src/
│   │   ├── 📄 App.js             ← Componente principal
│   │   ├── 📂 components/
│   │   │   ├── FileUpload.js
│   │   │   ├── UrlScanner.js
│   │   │   ├── IpAnalyzer.js
│   │   │   ├── DomainAnalyzer.js
│   │   │   └── SearchBar.js
│   │   └── 📂 services/
│   └── 📄 package.json
│
├── 📄 GUIA_VSCODE.md             ← Esta guía
├── 📄 README.md
└── 📄 docker-compose.yml
```

### 3. Terminal Integrada (Dos Terminales Abiertas)

```
┌─ TERMINAL 1: Backend ────────────────────────────┐
│ PS C:\...\VIRUSTOTAL-CLON\backend> npm start     │
│                                                    │
│ > virustotal-clone-backend@1.0.0 start           │
│ > node src/index.js                               │
│                                                    │
│ 🚀 VirusTotal Clone API running on port 3000     │
│ 📝 Environment: development                       │
│ 🔒 CORS enabled for: http://localhost:3001       │
└────────────────────────────────────────────────────┘

┌─ TERMINAL 2: Frontend ───────────────────────────┐
│ PS C:\...\VIRUSTOTAL-CLON\frontend> npm start    │
│                                                    │
│ Compiled successfully!                            │
│                                                    │
│ You can now view virustotal-clone-frontend       │
│ in the browser.                                   │
│                                                    │
│   Local:            http://localhost:3001         │
│   On Your Network:  http://192.168.1.10:3001     │
│                                                    │
│ Note that the development build is not optimized. │
│ To create a production build, use npm run build. │
└────────────────────────────────────────────────────┘
```

### 4. Panel de Debugging (F5)

```
┌─ DEBUG: Full Stack ──────────────────────────────┐
│                                                    │
│ ▶️ Debug Backend          [Node.js]               │
│ ▶️ Debug Frontend         [Chrome]                │
│                                                    │
│ Variables                                          │
│ ├─ req                    {method: "POST", ...}   │
│ ├─ file                   {name: "test.txt", ...} │
│ └─ hashes                 {md5: "abc123...", ...} │
│                                                    │
│ Call Stack                                         │
│ ├─ scanFile               fileController.js:42    │
│ ├─ asyncHandler           errorHandler.js:12      │
│ └─ <anonymous>            express.js:256          │
│                                                    │
│ Breakpoints                                        │
│ ✓ fileController.js:42                            │
│ ✓ api.js:18                                       │
└────────────────────────────────────────────────────┘
```

### 5. Extensiones Instaladas

Una vez instaladas las extensiones recomendadas, verás:

```
✓ ESLint                      - Linter de JavaScript
✓ Prettier                    - Formateador de código
✓ ES7+ React Snippets         - Snippets para React
✓ Auto Rename Tag             - Renombra tags HTML
✓ Path Intellisense           - Autocompleta rutas
✓ GitLens                     - Git supercharged
✓ Live Server                 - Servidor local
✓ TypeScript                  - Soporte TypeScript
✓ Tailwind CSS                - IntelliSense CSS
✓ Debugger for Chrome         - Debug en Chrome
```

### 6. Comandos Rápidos (Ctrl+Shift+P)

```
> Tasks: Run Task
  ├─ Start Backend
  ├─ Start Frontend
  ├─ Install Backend Dependencies
  ├─ Install Frontend Dependencies
  ├─ Test Backend
  └─ Start All Servers

> Git: Clone
  └─ https://github.com/jorgeluislt23-coder/VIRUSTOTAL-CLON.git

> Preferences: Open Workspace Settings
  └─ Configuración específica del proyecto
```

### 7. IntelliSense Funcionando

Cuando escribes código, verás sugerencias automáticas:

```javascript
// En backend/src/controllers/fileController.js
const { calculate█ }
         └─ calculateHashes()        ← Sugerencia
            calculateStringHash()
            calculateFileSize()
```

### 8. Git Integrado (Panel Izquierdo)

```
┌─ Source Control (Git) ──────────────────────────┐
│                                                   │
│ Changes (3)                                       │
│ ├─ M  backend/src/controllers/fileController.js  │
│ ├─ A  backend/src/utils/newFeature.js           │
│ └─ D  old-file.js                                │
│                                                   │
│ Message: "Add new feature for file analysis"     │
│                                                   │
│ [✓ Commit]  [↑ Push]  [↓ Pull]                  │
└───────────────────────────────────────────────────┘
```

### 9. Búsqueda en Todo el Proyecto (Ctrl+Shift+F)

```
┌─ Search ─────────────────────────────────────────┐
│                                                   │
│ 🔍 calculateHashes                                │
│                                                   │
│ 15 results in 8 files                            │
│                                                   │
│ 📄 backend/src/utils/hash.js                     │
│    22: async function calculateHashes(filePath)  │
│    23:   const fileBuffer = await fs.readFile... │
│                                                   │
│ 📄 backend/src/controllers/fileController.js     │
│    45:   const hashes = await calculateHashes... │
│    46:   return { ...fileInfo, hashes };         │
└───────────────────────────────────────────────────┘
```

### 10. Problemas Detectados (ESLint)

```
┌─ Problems ───────────────────────────────────────┐
│                                                   │
│ ⚠️ 3 Warnings  ❌ 0 Errors                       │
│                                                   │
│ ⚠️ 'const' is preferred over 'let'               │
│    backend/src/utils/hash.js:15                  │
│                                                   │
│ ⚠️ Missing semicolon                             │
│    frontend/src/App.js:42                        │
│                                                   │
│ ⚠️ Unused variable 'error'                       │
│    backend/src/services/api.js:89                │
└───────────────────────────────────────────────────┘
```

## Atajos de Teclado Más Usados

| Acción | Atajo |
|--------|-------|
| Abrir terminal | `` Ctrl+` `` |
| Buscar archivos | `Ctrl+P` |
| Comando rápido | `Ctrl+Shift+P` |
| Comentar línea | `Ctrl+/` |
| Formato | `Shift+Alt+F` |
| Ir a definición | `F12` |
| Debugging | `F5` |
| Guardar todo | `Ctrl+K S` |

## Tips Visuales

### Tema Recomendado
- **One Dark Pro** - Fácil para los ojos
- **Material Theme** - Moderno y limpio
- **Dracula** - Alto contraste

### Iconos de Archivo
- Instala **Material Icon Theme** para iconos bonitos

### Minimap
- El minimap (derecha) muestra vista general del archivo
- Útil para navegar código largo

### Breadcrumbs
- La barra superior muestra la ruta: `backend > src > controllers > fileController.js`
- Click para navegar rápidamente

## Flujo de Trabajo Típico

1. **Abrir VS Code** → `code .`
2. **Instalar extensiones** → Popup automático
3. **Abrir 2 terminales** → `` Ctrl+` `` (dos veces)
4. **Terminal 1**: `cd backend && npm start`
5. **Terminal 2**: `cd frontend && npm start`
6. **Editar código** → Formato automático al guardar
7. **Debug si necesario** → `F5`
8. **Commit cambios** → Panel Git izquierdo
9. **Push** → `git push` o botón en VS Code

## Archivos de Configuración Incluidos

### .vscode/extensions.json
Cuando abres el proyecto, VS Code pregunta:
```
"¿Deseas instalar las 10 extensiones recomendadas?"
```

### .vscode/settings.json
- ✅ Formato automático al guardar
- ✅ 2 espacios de indentación
- ✅ ESLint habilitado
- ✅ node_modules excluido de búsqueda

### .vscode/launch.json
- ✅ Debug backend con Node.js
- ✅ Debug frontend con Chrome
- ✅ Debug tests con Jest
- ✅ Full Stack debugging

### .vscode/tasks.json
- ✅ Iniciar servers con un click
- ✅ Instalar dependencias fácilmente
- ✅ Ejecutar tests

## Conclusión

Con esta configuración, tienes un entorno de desarrollo profesional para el proyecto VirusTotal Clone. VS Code detectará automáticamente las configuraciones y te sugerirá las extensiones necesarias.

**¡Todo está listo para empezar a desarrollar!** 🚀

---

Para la guía completa paso a paso, lee: [GUIA_VSCODE.md](GUIA_VSCODE.md)
