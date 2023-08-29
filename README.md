# AppMusica_Gonzalo_Maximiliano_Santiago
Proyecto integrador final Senpai Academy
## FRONTEND
# Introducción
El proyecto Front-End es una aplicación web para el servicio de "Música ya", que permite a los usuarios descubrir canciones, crear listas de reproducción contextualizadas y utilizar la función de Cupido musical para generar listas de reproducción basadas en sus preferencias musicales. Esta documentación proporciona una visión general de la estructura, componentes, características y configuración del proyecto.

# Requisitos Previos

• Node.js y npm deben estar instalados en su máquina.
• Acceso a la API del backend de "Música ya" para obtener datos de canciones y usuarios.

# Configuración

• package.json: Lista de dependencias y scripts del proyecto.
• vite.config.js: Configuración específica de Vite.

# Componentes

• Button.js: Componente reutilizable de botón.
• BottomBar.js: Barra de navegación inferior compartida en todas las páginas.

# Rutas y Navegación

Se utiliza React Router para gestionar las rutas y la navegación entre páginas.

# Páginas Principales

Home: Página de inicio que presenta las opciones de Cupido musical y música contextual.
Searcher: Página de búsqueda de canciones que muestra los resultados en función de la búsqueda.
User Profile: Página de perfil de usuario que muestra playlists y permite crear nuevas.
Match Screen: Página de Cupido musical que muestra artistas para la elección del usuario.
Contextual Music: Página de música contextual que permite crear playlists personalizadas.
Match Result: Página de resultados de Cupido musical que muestra la lista de reproducción generada.

# Flujos de Datos

Las solicitudes HTTP se realizan a la API del backend para obtener información de canciones y usuarios.
Funcionalidades Específicas

Cupido Musical: Los usuarios eligen artistas que les gustan, y se genera una lista de reproducción basada en sus selecciones.
Música Contextual: Los usuarios definen la ocasión, estado de ánimo, clima y géneros para crear listas de reproducción personalizadas.
Búsqueda de Canciones: Los usuarios pueden buscar canciones por título o artista.

# Instrucciones de Desarrollo

Clonar el repositorio desde GitHub.
Ejecutar npm install para instalar las dependencias.
Ejecutar npm start para iniciar la aplicación en modo desarrollo.

# Instrucciones de Implementación

Ejecutar npm run build para crear una versión de producción.
Los archivos generados se encuentran en la carpeta /build.
Desplegar los archivos en un servidor web.

# Solución de Problemas

Si enfrentas problemas de dependencias, asegúrate de que Node.js y npm estén actualizados.
Para problemas de conexión con la API, verifica la configuración de URL en las solicitudes.

# Recursos Adicionales

Documentación de [React](https://reactjs.org/docs/getting-started.html).
Documentación de [React Router](https://reactrouter.com/web/guides/quick-start).
Documentación de [Vite](https://vitejs.dev/guide/).
Tutoriales en línea para aprender sobre React, React Router y Vite.

## BACKEND
# Documentación del Proyecto

Este proyecto es una aplicación de servidor basada en Express.js que proporciona funcionalidad de autenticación de usuarios y gestión de playlists de música.

## Configuración del Proyecto

- Node.js y npm deben estar instalados en el sistema.
- Ejecute `npm install` para instalar las dependencias del proyecto.

## Estructura del Proyecto

- `app.js`: El punto de entrada de la aplicación Express.
- `middleware/`: Carpeta que contiene middleware personalizados.
- `routes/`: Carpeta que contiene las rutas de la aplicación.
- `controllers/`: Carpeta que contiene los controladores para manejar las solicitudes.
- `DB/`: Carpeta que podría contener archivos de configuración de la base de datos (no proporcionados en el código proporcionado).

## Uso

- Inicie la aplicación utilizando `npm start`.
- Las rutas de autenticación están disponibles en `/auth`.
- Las rutas de gestión de usuarios y playlists están disponibles en `/user`.

## Middleware

- `authMiddleWare`: Middleware para autenticación de usuarios basada en tokens JWT.
- `requestmiddle`: Middleware para generar un ID de solicitud único.
- `initalLogging` y `finalLogging`: Middleware para registrar el inicio y el final de las solicitudes.

## Rutas

- `/auth`: Rutas relacionadas con la autenticación de usuarios.
- `/user`: Rutas para la gestión de usuarios y playlists.

## Dependencias Principales

- Express.js: Framework de aplicación web.
- cookie-parser: Middleware para el manejo de cookies.
- cors: Middleware para el control de acceso a recursos de origen cruzado.
- express-validator: Biblioteca para validar solicitudes HTTP.
- jsonwebtoken: Biblioteca para generar y verificar tokens JWT.
