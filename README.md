<<<<<<< HEAD
# HI
=======
# LightPress - Web Game Project

Proyecto de desarrollo web fullstack creado para la asignatura de DevOps. LightPress es un videojuego de reflejos y memoria basado en un tablero interactivo con una geometría de panal (4-3-4).

## 🏗️ Arquitectura del Proyecto (Monorepo)

El proyecto está estructurado como un monorepo que separa estrictamente los entornos de ejecución para evitar colisiones de dependencias:

* `/client`: Frontend desarrollado como una Single Page Application (SPA).
* `/server`: Backend y lógica de la API (En construcción).

### Stack Tecnológico
* **Frontend:** React.js + Vite (Build tool)
* **Backend:** Node.js + Express (En fase de estructuración)
* **Base de Datos:** MySQL (Por definir)
* **Estilos:** CSS3 Puro (Uso intensivo de CSS Variables y CSS Grid)

---

## 🎨 Decisiones de Diseño e Ingeniería (Frontend - Fase 1)

Durante la maquetación de la interfaz gráfica, se priorizó la fidelidad al wireframe original y la escalabilidad del código:

1.  **Design Tokens:** Implementación de variables CSS (`:root`) para mantener consistencia en la paleta de colores (Azul claro, amarillo de bloques y contornos negros estrictos).
2.  **Sistema de Bloques:** Uso de `aspect-ratio: 1/1` combinado con Flexbox en el Sidebar para garantizar la forma cuadrada perfecta de los paneles de "Game Modes" y "Puntuación", sin depender de alturas fijas.
3.  **El Reto Geométrico (Layout 4-3-4):**
    * Para renderizar los 11 botones en un patrón intercalado preciso, se descartó el uso de Flexbox por su limitación en el control de celdas vacías.
    * Se implementó una **estrategia de CSS Grid de 8 columnas**, donde cada botón ocupa un `span` de 2 columnas. 
    * El desplazamiento de la fila central se logra mediante la propiedad `grid-column-start: 2` aplicada dinámicamente al quinto elemento, forzando el centrado del bloque de 3 botones.

---

## 🚀 Guía de Instalación y Despliegue Local

### Requisitos Previos
* [Node.js](https://nodejs.org/) (Versión v24.x LTS o superior instalada de forma nativa en el sistema).
* Gestor de paquetes `npm`.

### Configuración del Entorno de Desarrollo

1.  **Clonar el repositorio:**
    ```bash
    git clone [URL_DEL_REPOSITORIO]
    cd Game-Project-LightPress
    ```

2.  **Levantar el Frontend (React):**
    Abre una terminal y navega exclusivamente a la carpeta del cliente:
    ```bash
    cd client
    npm install
    npm run dev
    ```
    El servidor de desarrollo se ejecutará en `http://localhost:5173/`.

---
*Documentación mantenida por el equipo de ingeniería de Devs-ColMex.*
>>>>>>> backend
