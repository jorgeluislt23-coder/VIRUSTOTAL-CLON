# 📘 Guía de Visual Studio Code - VirusTotal Clone

## Cómo Descargar y Abrir el Proyecto en Visual Studio Code

Esta guía te ayudará a descargar el proyecto y configurarlo en Visual Studio Code.

---

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

1. **Git** - [Descargar Git](https://git-scm.com/downloads)
2. **Node.js** (versión 16 o superior) - [Descargar Node.js](https://nodejs.org/)
3. **Visual Studio Code** - [Descargar VS Code](https://code.visualstudio.com/)

### Verificar Instalaciones

Abre una terminal y ejecuta:

```bash
git --version
node --version
npm --version
```

Si ves los números de versión, ¡todo está instalado correctamente!

---

## 📥 Paso 1: Descargar el Proyecto

### Opción A: Usando Git (Recomendado)

1. **Abre una terminal** o Command Prompt

2. **Navega a la carpeta** donde quieres guardar el proyecto:
   ```bash
   cd C:\Users\TuUsuario\Documents\Proyectos
   ```
   (Cambia la ruta según donde quieras guardarlo)

3. **Clona el repositorio**:
   ```bash
   git clone https://github.com/jorgeluislt23-coder/VIRUSTOTAL-CLON.git
   ```

4. **Entra a la carpeta del proyecto**:
   ```bash
   cd VIRUSTOTAL-CLON
   ```

### Opción B: Descarga Directa (Sin Git)

1. Ve a: https://github.com/jorgeluislt23-coder/VIRUSTOTAL-CLON
2. Haz clic en el botón verde **"Code"**
3. Selecciona **"Download ZIP"**
4. Descomprime el archivo en tu carpeta de proyectos
5. Renombra la carpeta a `VIRUSTOTAL-CLON` (sin el `-main` o `-master`)

---

## 🚀 Paso 2: Abrir en Visual Studio Code

### Método 1: Desde VS Code

1. **Abre Visual Studio Code**
2. Haz clic en **"File" → "Open Folder"** (o `Ctrl+K Ctrl+O`)
3. Navega y selecciona la carpeta **VIRUSTOTAL-CLON**
4. Haz clic en **"Seleccionar carpeta"**

### Método 2: Desde la Terminal

Si ya estás en la carpeta del proyecto en la terminal:

```bash
code .
```

Este comando abrirá VS Code en la carpeta actual.

---

## 🔧 Paso 3: Instalar Extensiones Recomendadas

Cuando abras el proyecto por primera vez, VS Code te sugerirá instalar extensiones recomendadas.

**Haz clic en "Install All"** o instálalas manualmente:

### Extensiones Esenciales:

1. **ESLint** - Para verificar errores en JavaScript
2. **Prettier** - Para formatear código automáticamente
3. **ES7+ React/Redux/React-Native snippets** - Atajos para React
4. **Auto Rename Tag** - Renombra etiquetas HTML automáticamente
5. **Path Intellisense** - Autocompletado de rutas de archivos

### Cómo Instalar Extensiones Manualmente:

1. Haz clic en el ícono de **Extensions** (o presiona `Ctrl+Shift+X`)
2. Busca cada extensión por nombre
3. Haz clic en **"Install"**

---

## 📦 Paso 4: Instalar Dependencias del Proyecto

### Backend

1. **Abre una terminal integrada** en VS Code:
   - Menú: `Terminal → New Terminal` (o `` Ctrl+` ``)

2. **Navega al backend**:
   ```bash
   cd backend
   ```

3. **Instala las dependencias**:
   ```bash
   npm install
   ```

4. **Crea el archivo de configuración**:
   ```bash
   copy .env.example .env
   ```
   (En Linux/Mac usa `cp .env.example .env`)

### Frontend

1. **Abre una NUEVA terminal** (haz clic en el `+` en la terminal)

2. **Navega al frontend**:
   ```bash
   cd frontend
   ```

3. **Instala las dependencias**:
   ```bash
   npm install
   ```

---

## ▶️ Paso 5: Ejecutar el Proyecto

Necesitas **DOS terminales abiertas** (una para backend, otra para frontend).

### Terminal 1 - Backend

```bash
cd backend
npm start
```

Deberías ver:
```
🚀 VirusTotal Clone API running on port 3000
```

### Terminal 2 - Frontend

```bash
cd frontend
npm start
```

Deberías ver:
```
Compiled successfully!
Local: http://localhost:3001
```

### Acceder a la Aplicación

Abre tu navegador en: **http://localhost:3001**

---

## 🐛 Paso 6: Debugging en VS Code

El proyecto ya incluye configuración de debugging. Para usarlo:

1. **Coloca un breakpoint** haciendo clic a la izquierda del número de línea (aparecerá un punto rojo)

2. **Ve a la vista de Debug**:
   - Haz clic en el ícono de "Run and Debug" (o presiona `Ctrl+Shift+D`)

3. **Selecciona la configuración**:
   - "Debug Backend" - Para debuggear el servidor
   - "Debug Frontend" - Para debuggear React

4. **Presiona F5** o haz clic en el botón verde "▶️ Start Debugging"

---

## 🎨 Atajos de Teclado Útiles en VS Code

| Acción | Windows/Linux | Mac |
|--------|---------------|-----|
| Abrir terminal | `` Ctrl+` `` | `` Cmd+` `` |
| Buscar archivos | `Ctrl+P` | `Cmd+P` |
| Buscar en archivos | `Ctrl+Shift+F` | `Cmd+Shift+F` |
| Panel de comandos | `Ctrl+Shift+P` | `Cmd+Shift+P` |
| Formatear documento | `Shift+Alt+F` | `Shift+Option+F` |
| Comentar línea | `Ctrl+/` | `Cmd+/` |
| Duplicar línea | `Shift+Alt+Down` | `Shift+Option+Down` |
| Ir a definición | `F12` | `F12` |
| Mostrar referencias | `Shift+F12` | `Shift+F12` |

---

## 📁 Estructura del Proyecto en VS Code

```
VIRUSTOTAL-CLON/
├── 📂 backend/          # Servidor Node.js
│   ├── 📂 src/          # Código fuente backend
│   ├── 📂 tests/        # Tests del backend
│   └── 📄 package.json  # Dependencias backend
│
├── 📂 frontend/         # Aplicación React
│   ├── 📂 src/          # Código fuente frontend
│   │   ├── 📂 components/  # Componentes React
│   │   └── 📄 App.js       # Componente principal
│   └── 📄 package.json     # Dependencias frontend
│
├── 📂 .vscode/          # Configuración VS Code
│   ├── extensions.json  # Extensiones recomendadas
│   ├── settings.json    # Configuración workspace
│   └── launch.json      # Configuración debugging
│
└── 📄 README.md         # Documentación principal
```

---

## 🔍 Explorar el Código

### Explorador de Archivos

El panel izquierdo muestra todos los archivos. Los principales:

**Backend:**
- `backend/src/index.js` - Punto de entrada del servidor
- `backend/src/routes/` - Rutas de la API
- `backend/src/controllers/` - Lógica de negocio
- `backend/src/services/` - Integraciones con APIs externas

**Frontend:**
- `frontend/src/App.js` - Componente principal
- `frontend/src/components/` - Componentes de la interfaz
- `frontend/src/services/api.js` - Cliente API

### Búsqueda Rápida

- **Buscar archivos**: `Ctrl+P` y escribe el nombre
- **Buscar en todo el proyecto**: `Ctrl+Shift+F`

---

## ⚙️ Configuración Personalizada

### Formato Automático al Guardar

1. Abre configuración: `Ctrl+,`
2. Busca: "format on save"
3. Marca la casilla ✅

### Tabulación y Espacios

Ya está configurado en `.vscode/settings.json`:
- JavaScript/TypeScript: 2 espacios
- Usa espacios en lugar de tabs

---

## 🆘 Solución de Problemas

### "Cannot find module"

```bash
# Limpia e reinstala dependencias
cd backend
rm -rf node_modules package-lock.json
npm install

cd ../frontend
rm -rf node_modules package-lock.json
npm install
```

### Puerto ya en uso

Si el puerto 3000 o 3001 ya está en uso:

**Backend:**
```bash
PORT=3005 npm start
```

**Frontend:**
```bash
PORT=3006 npm start
```

### VS Code muy lento

1. Excluye carpetas grandes de la búsqueda:
   - Ya configurado en `.vscode/settings.json`
   - Excluye: `node_modules`, `dist`, `build`

2. Desactiva extensiones que no uses

---

## 📚 Recursos Adicionales

- [Documentación VS Code](https://code.visualstudio.com/docs)
- [Atajos de teclado PDF](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
- [Tips y Trucos VS Code](https://code.visualstudio.com/docs/getstarted/tips-and-tricks)

### Documentación del Proyecto

- **README.md** - Visión general del proyecto
- **QUICKSTART.md** - Inicio rápido
- **INSTALLATION.md** - Instalación detallada
- **API_DOCS.md** - Documentación de la API
- **SOLUCION.md** - Soluciones a problemas comunes

---

## ✅ Checklist de Configuración

Marca cada paso completado:

- [ ] Git instalado
- [ ] Node.js instalado
- [ ] VS Code instalado
- [ ] Proyecto clonado/descargado
- [ ] Proyecto abierto en VS Code
- [ ] Extensiones recomendadas instaladas
- [ ] Dependencias del backend instaladas
- [ ] Dependencias del frontend instaladas
- [ ] Archivo `.env` creado en backend
- [ ] Backend ejecutándose (puerto 3000)
- [ ] Frontend ejecutándose (puerto 3001)
- [ ] Aplicación accesible en navegador

---

## 🎓 Siguientes Pasos

1. **Explora el código** - Familiarízate con la estructura
2. **Lee la documentación** - Revisa los archivos `.md`
3. **Haz cambios** - Empieza a desarrollar
4. **Usa debugging** - Aprende a debuggear eficientemente
5. **Contribuye** - Lee `CONTRIBUTING.md` para contribuir

---

## 💡 Tips Profesionales

1. **Usa el terminal integrado** - No necesitas terminal externa
2. **Aprende los atajos** - Te harán 10x más rápido
3. **Usa Multi-cursor** - `Alt+Click` para múltiples cursores
4. **Git integrado** - VS Code tiene Git incorporado (ícono de control de código fuente)
5. **Snippets personalizados** - Crea tus propios atajos

---

## 🤝 ¿Necesitas Ayuda?

- **Problemas con el proyecto**: Revisa `SOLUCION.md`
- **Preguntas sobre el código**: Abre un Issue en GitHub
- **Bugs**: Reporta en el repositorio

---

¡Feliz Coding! 🚀

**Proyecto**: VirusTotal Clone
**Documentación**: https://github.com/jorgeluislt23-coder/VIRUSTOTAL-CLON
