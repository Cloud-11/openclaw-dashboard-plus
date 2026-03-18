<p align="center">
  <img src="../../icon.png" alt="Icono de OpenClaw Dashboard Plus" width="160">
</p>

# OpenClaw Dashboard Plus

<p align="center">Extensión de navegador centrada en el soporte multilingüe del OpenClaw WebUI, con correcciones UI, temas, control de fuentes y saltos rápidos en el progreso de conversaciones.</p>

<p align="center"><a><img src="https://img.shields.io/badge/OpenClaw-2026.3.2%2B-ff6b57" alt="Versión compatible con OpenClaw"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/releases"><img src="https://img.shields.io/github/v/release/Cloud-11/openclaw-dashboard-plus?display_name=tag" alt="Última versión"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/stargazers"><img src="https://img.shields.io/github/stars/Cloud-11/openclaw-dashboard-plus?style=flat" alt="GitHub Stars"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/issues"><img src="https://img.shields.io/github/issues/Cloud-11/openclaw-dashboard-plus" alt="GitHub Issues"></a>
  <a href="../../LICENSE"><img src="https://img.shields.io/github/license/Cloud-11/openclaw-dashboard-plus" alt="License"></a>
</p>

> Aviso: el desarrollador no domina el español. Este documento fue generado con ayuda de un modelo de IA y puede contener frases poco naturales.

[English](../../README.md) | [简体中文](./README.zh-CN.md) | [繁體中文](./README.zh-TW.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Français](./README.fr.md) | [Español](./README.es.md) | [Русский](./README.ru.md) | [Deutsch](./README.de.md) | [Tiếng Việt](./README.vi.md) | [Filipino](./README.fil.md) | [العربية](./README.ar.md)

## Vista Previa

<table>
  <tr>
    <td width="50%">
      <img src="../../image5.png" alt="Mejora del OpenClaw WebUI">
      <p><strong>Mejora del OpenClaw WebUI</strong><br>La paleta de tema, las correcciones UI y el salto rápido del progreso de conversación se aplican directamente a la página de OpenClaw.</p>
    </td>
    <td width="50%">
      <img src="../../image3.png" alt="Paletas y estilos predefinidos">
      <p><strong>Paletas y estilos predefinidos</strong><br>Cambia colores y estilo UI sin modificar el código fuente de OpenClaw.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <img src="../../image4.png" alt="Controles de reparación UI">
      <p><strong>Controles de reparación UI</strong><br>Corrige de forma independiente menús desplegables, bloques de código, bordes, espaciado y otros detalles visuales.</p>
    </td>
    <td width="50%">
      <img src="../../image.png" alt="Idiomas y ejecución">
      <p><strong>Idiomas y ejecución</strong><br>Gestiona en un solo lugar los paquetes de idioma WebUI, el idioma del popup, las URL activas y las fuentes de sincronización.</p>
    </td>
  </tr>
</table>

## Resumen

OpenClaw Dashboard Plus ahora se distribuye solo como extensión de navegador, compilada en `dist/extension/`.

El proyecto aporta:

- Configuración separada para el idioma del contenido de OpenClaw y el idioma de la interfaz popup
- Carga de metadatos, paquetes de idioma y recursos de estilo desde GitHub o Gitee
- Opciones de tema para estilo UI, fuente, tamaño de fuente y reparaciones visuales
- Una cadena unificada de iconos y metadatos para la documentación y la extensión

## Funciones

- Pestañas popup `Settings`, `Features`, `Languages` y `About`
- Actualización remota de metadatos, paquetes de idioma, presets de tema y módulos de estilo
- Entrega de recursos de tema en HTML / CSS / JSON sin JavaScript remoto
- Estructura modular que separa `extension-src/`, `language-packs/`, `ui-locales/` y `plugin-metadata.json`
- Los archivos generados se guardan en `dist/` en lugar de mezclarse con el código fuente

## Uso

1. Ejecuta `node build-extension.mjs` o descarga el ZIP generado por GitHub Actions.
2. Abre `chrome://extensions` o `edge://extensions` y activa el modo desarrollador.
3. Carga `dist/extension/` como extensión descomprimida.
4. Abre tu panel OpenClaw, por ejemplo `http://127.0.0.1:18789`.
5. Usa las pestañas del popup:
   - `Settings`: activar traducción y definir hosts y puertos permitidos
   - `Features`: elegir preset UI, fuente, tamaño y correcciones de estilo
   - `Languages`: cambiar idioma del contenido, actualizar paquetes remotos y limpiar caché
   - `About`: actualizar metadatos remotos y revisar compatibilidad o repositorio
6. Guarda la configuración después de cada cambio. Los recursos remotos en caché permanecen locales hasta borrarlos desde el popup.

## Compilación

Requisitos previos:

- Node.js 22 es el runtime de referencia.
- `package-extension-zip.mjs` requiere PowerShell.
- `package-crx.mjs` requiere Chrome o Edge.

Comandos:

1. Compilar la extensión descomprimida:
   `node build-extension.mjs`
2. Crear el ZIP de distribución:
   `node package-extension-zip.mjs`
3. Opcional: crear un CRX local:
   `node package-crx.mjs`

Salidas:

- `dist/extension/`: extensión generada sin empaquetar
- `dist/openclaw-dashboard-plus-extension.zip`: ZIP de distribución
- `dist/openclaw-dashboard-plus.crx`: CRX local opcional

## Guía De Archivos

- `extension-src/`: fuentes de la extensión, popup UI, iconos, presets de tema y lógica de contenido
- `extension-src/content-main.js`: fuente del script de contenido
- `extension-src/style-bundle.json`: manifiesto de módulos de estilo remotos
- `extension-src/style-modules/`: recursos modulares CSS / HTML / JSON
- `extension-src/theme-presets.json`: definición de presets de tema integrados
- `language-packs/`: paquetes de idioma del contenido OpenClaw
- `ui-locales/`: textos del popup y nombres o descripciones de presets
- `plugin-metadata.json`: metadatos canónicos para versiones, fuentes remotas e idiomas disponibles
- `build-extension.mjs`: construye `dist/extension/`
- `package-extension-zip.mjs`: crea el ZIP en `dist/`
- `package-crx.mjs`: ayuda opcional para CRX local

## Instalación

Recomendado: [Descargar paquete ZIP de instalación](https://github.com/Cloud-11/openclaw-dashboard-plus/releases/latest/download/openclaw-dashboard-plus-extension.zip)

1. Descarga el paquete ZIP de instalación desde GitHub Releases.
2. Descomprímelo en una carpeta estable.
3. Abre `chrome://extensions` o `edge://extensions`.
4. Activa el modo desarrollador.
5. Haz clic en `Load unpacked`.
6. Selecciona la carpeta extraída.
7. Abre tu OpenClaw WebUI, por ejemplo `http://127.0.0.1:18789`.

## GitHub Actions

El repositorio incluye un flujo de GitHub Actions sobre Windows que:

- Compila `dist/extension/`
- Genera `dist/openclaw-dashboard-plus-extension.zip`
- Sube el ZIP y la extensión sin empaquetar como artefactos

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Cloud-11/openclaw-dashboard-plus&type=Date)](https://star-history.com/#Cloud-11/openclaw-dashboard-plus&Date)

## Pull Request

- Modifica `extension-src/`, las locales, los metadatos o los scripts de compilación. No edites `dist/extension/` directamente.
- El repositorio es ahora solo para la extensión. No reintroduzcas empaquetado heredado ni rutas de distribución paralelas.
- Los recursos remotos del tema deben limitarse a HTML / CSS / JSON, sin JavaScript remoto.
- Para cambios de UI o estilos, añade pasos de reproducción y, si ayuda, capturas en la PR.
- Ejecuta la compilación correspondiente antes de abrir la PR e indica el resultado de verificación.

## Licencia

Este proyecto se distribuye bajo la [MIT License](../../LICENSE).
