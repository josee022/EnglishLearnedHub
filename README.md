# English Learner Hub

![English Learner Hub Logo](https://img.shields.io/badge/English-Learner%20Hub-blue)

Una aplicación web completa diseñada para el aprendizaje de inglés. Ofrece herramientas interactivas para la gestión de vocabulario, práctica con flashcards, quizzes personalizados y seguimiento detallado del progreso.

## Índice

- [Visión General](#visión-general)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Configuración y Despliegue](#configuración-y-despliegue)
- [Características Implementadas](#características-implementadas)
- [Características Planificadas](#características-planificadas)
- [Proceso de Desarrollo](#proceso-de-desarrollo)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Visión General

English Learner Hub es una aplicación moderna que proporciona un entorno completo para aprender inglés. El objetivo es ofrecer una experiencia personalizada que combine la gestión de vocabulario, práctica interactiva y seguimiento del progreso en una sola plataforma.

## Tecnologías Utilizadas

### Frontend

- **React 19**: Biblioteca de JavaScript para construir interfaces de usuario
- **TypeScript**: Superconjunto tipado de JavaScript que mejora la seguridad y escalabilidad del código
- **Vite**: Herramienta de construcción que proporciona un entorno de desarrollo rápido
- **Tailwind CSS**: Framework de CSS para diseño rápido y responsivo
- **React Router**: Manejo de rutas y navegación en la aplicación
- **Zustand**: Gestión de estado global simplificada
- **React Query**: Gestión de datos del servidor, caché y sincronización

### Backend

- **Firebase Authentication**: Sistema de autenticación seguro y escalable
- **Cloud Firestore**: Base de datos NoSQL en la nube para almacenar datos de usuario
- **Firebase Security Rules**: Reglas de seguridad para proteger datos de usuario

## Estructura del Proyecto

```
english-learner-hub/
├── src/
│   ├── components/     # Componentes reutilizables
│   ├── context/        # Contextos de React (AuthContext)
│   ├── firebase/       # Configuración y utilidades de Firebase
│   ├── hooks/          # Hooks personalizados (useAuth)
│   ├── pages/          # Componentes de página (Home, Login, etc.)
│   ├── types/          # Definiciones de tipos TypeScript
│   ├── App.tsx         # Componente principal
│   └── main.tsx        # Punto de entrada de la aplicación
├── public/           # Archivos estáticos públicos
└── .env.local        # Variables de entorno (no incluidas en git)
```

## Configuración y Despliegue

### Requisitos Previos

- Node.js (v18 o superior)
- npm o yarn
- Cuenta en Firebase

### Configuración de Variables de Entorno

1. Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
VITE_FIREBASE_PROJECT_ID=tu_project_id
VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
VITE_FIREBASE_MEASUREMENT_ID=tu_measurement_id
```

2. Estas variables se encuentran en la configuración de tu proyecto de Firebase.

### Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

### Configuración de Firebase

1. En la consola de Firebase, habilita la autenticación por correo electrónico.
2. Configura Firestore como tu base de datos.
3. Aplica las siguientes reglas de seguridad en Firestore:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permitir acceso a documentos de usuario solo al propietario
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Permitir acceso a colecciones anidadas del usuario
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // No permitir acceso a ningún otro documento
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

## Características Implementadas

### Sistema de Autenticación

- **Registro de Usuario**: Creación de cuentas mediante correo electrónico y contraseña
- **Inicio de Sesión**: Autenticación segura con Firebase Auth
- **Protección de Rutas**: Acceso restringido a rutas que requieren autenticación
- **Contexto de Autenticación**: Estado global para datos de usuario y funciones de autenticación

### Integración con Firestore

- **Estructura de Datos**: Organización jerárquica de datos por usuario
- **Reglas de Seguridad**: Protección de datos por usuario mediante reglas de Firestore
- **Funciones de Utilidad**: Helpers para facilitar operaciones CRUD con Firestore

## Características Planificadas

### Gestión de Vocabulario

- Creación, edición y eliminación de palabras y frases
- Organización por carpetas temáticas
- Sistema de etiquetas para clasificación

### Sistema de Flashcards

- Creación de tarjetas de memoria
- Sistema de repetición espaciada
- Modos de práctica personalizables

### Quizzes y Evaluaciones

- Generación de pruebas personalizadas
- Diversos tipos de ejercicios (selección múltiple, completar, etc.)
- Evaluación y puntuación automática

### Dashboard de Progreso

- Estadísticas de aprendizaje
- Seguimiento de palabras aprendidas
- Visualización de habilidades y áreas de mejora

## Proceso de Desarrollo

### Fase 1: Configuración Inicial (Completada)

- Configuración del proyecto React con TypeScript y Vite
- Integración de Tailwind CSS
- Configuración de Firebase (Auth y Firestore)
- Implementación de sistema de autenticación básico
- Seguridad con variables de entorno

### Fase 2: Funcionalidades Core (En Desarrollo)

- Gestión de vocabulario
- Sistema de flashcards
- Quizzes básicos

### Fase 3: Características Avanzadas (Planificada)

- Ampliación de tipos de ejercicios
- Mejoras en el dashboard de usuario
- Integración con APIs externas (pronunciación, traducción)

### Fase 4: Optimización y Despliegue (Planificada)

- Mejoras de rendimiento
- Testing completo
- Despliegue en producción

## Contribución

Las contribuciones son bienvenidas. Si quieres contribuir al proyecto:

1. Haz un fork del repositorio
2. Crea una rama para tu característica (`git checkout -b feature/amazing-feature`)
3. Haz commit de tus cambios (`git commit -m 'Add some amazing feature'`)
4. Haz push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## Licencia

Distribuido bajo la licencia MIT. Consulta `LICENSE` para más información.
