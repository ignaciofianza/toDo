# 📋 Administrador de Tareas

Este es un proyecto de administrador de tareas desarrollado con **React** y **Vite**. Permite agregar, completar, priorizar y eliminar tareas de manera sencilla.

## 🚀 Tecnologías Utilizadas

- **React** (con Vite)
- **Bootstrap** (para estilos)
- **LocalStorage** (para persistencia de datos)
- **SweetAlert2** (para alertas interactivas)

## 📂 Instalación y Uso

### 1️⃣ Clonar el repositorio

```bash
  git clone https://github.com/tuusuario/nombre-del-repo.git
  cd nombre-del-repo
```

### 2️⃣ Instalar dependencias

```bash
  npm install
```

### 3️⃣ Iniciar el servidor en desarrollo

```bash
  npm run dev
```

Esto abrirá la aplicación en `http://localhost:5173/` (o el puerto configurado en `vite.config.js`).

## 📦 Build y Deploy

Para generar una versión optimizada para producción:

```bash
  npm run build
```

Esto creará una carpeta `dist/` con los archivos listos para subir a un hosting estático.

## 🔧 Funcionalidades

✅ Agregar tareas con descripción  
✅ Marcar tareas como completadas o no completadas  
✅ Priorizar tareas  
✅ Eliminar tareas  
✅ Guardado de tareas en `localStorage` (persistencia en el navegador)  
✅ Alertas interactivas con `SweetAlert2`

## 🌍 Despliegue

Este proyecto está deployado en **todo.ignaciofianza.com**, por lo que no es necesario utilizar GitHub Pages para su hosting.

## 📌 Configuración de `vite.config.js`

El archivo `vite.config.js` **se sube al repositorio** ya que configura el servidor y los plugins. Se encuentra configurado para escuchar en `0.0.0.0` y usa el puerto `5173` por defecto.

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  plugins: [react()],
});
```

## 🛠 Autor

Proyecto desarrollado por **Ignacio Fianza**.

