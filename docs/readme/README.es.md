<p align="center">
  <img src="../../icon.png" alt="Icono de OpenClaw Dashboard Plus" width="160">
</p>

# OpenClaw Dashboard Plus

Herramienta multilingüe de userscript y extensión de navegador para OpenClaw Dashboard.

> Aviso: el desarrollador no domina el español. Este documento fue generado con ayuda de un modelo de IA y puede contener frases poco naturales.

[English](../../README.md) | [简体中文](./README.zh-CN.md) | [繁體中文](./README.zh-TW.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Français](./README.fr.md) | [Español](./README.es.md) | [Русский](./README.ru.md) | [Deutsch](./README.de.md) | [Tiếng Việt](./README.vi.md) | [Filipino](./README.fil.md) | [العربية](./README.ar.md)

## Resumen

El proyecto se distribuye en dos formas:

- `openclaw-dashboard-plus.user.js` como userscript
- Una extensión de navegador generada en `dist/extension/`

Añade a OpenClaw Dashboard una capa multilingüe, un panel emergente, actualizaciones remotas de metadatos y paquetes de idioma descargables.

## Funciones

- Configuración separada para el idioma del contenido y el idioma de la interfaz popup
- Obtención de metadatos y paquetes de idioma desde GitHub y Gitee
- Popup de extensión para gestionar ajustes, caché e información de versión
- El mismo icono del proyecto en la documentación y en la extensión
- Los archivos generados se guardan en `dist/` en lugar de mezclarse con el código fuente

## Estructura del proyecto

- `openclaw-dashboard-plus.user.js`: entrada del userscript
- `extension-src/`: fuentes de la extensión e iconos
- `dist/extension/`: extensión generada sin empaquetar
- `language-packs/`: salida de paquetes de idioma del repositorio
- `ui-locales/`: archivos de idioma de la interfaz popup
- `.github/workflows/build-extension.yml`: flujo de GitHub Actions

## Compilación

1. Generar la extensión sin empaquetar:
   `node build-extension.mjs`
2. Salida:
   `dist/extension/`
3. Crear el ZIP de distribución:
   `node package-extension-zip.mjs`
4. Opcional: crear un CRX local:
   `node package-crx.mjs`

## Instalación

### Userscript

1. Abre `openclaw-dashboard-plus.user.js`
2. Instálalo con Tampermonkey, ScriptCat o un gestor compatible

### ZIP de la extensión

1. Descarga `openclaw-dashboard-plus-extension.zip` desde los artefactos de GitHub Actions o desde releases
2. Descomprímelo en una carpeta estable
3. Abre `chrome://extensions` o `edge://extensions`
4. Activa el modo desarrollador
5. Haz clic en `Load unpacked`
6. Selecciona la carpeta extraída

### Extensión local sin empaquetar

1. Ejecuta `node build-extension.mjs`
2. Abre `chrome://extensions` o `edge://extensions`
3. Activa el modo desarrollador
4. Haz clic en `Load unpacked`
5. Selecciona `dist/extension/`

## GitHub Actions

El repositorio incluye un flujo de GitHub Actions sobre Windows que:

- Compila `dist/extension/`
- Genera `dist/openclaw-dashboard-plus-extension.zip`
- Sube el ZIP y la extensión sin empaquetar como artefactos

## Capturas

![Vista previa del popup](../../image.png)
![Vista previa de instalación](../../image2.png)

## Licencia

Este proyecto se distribuye bajo la [MIT License](../../LICENSE).
