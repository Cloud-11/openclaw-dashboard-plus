<p align="center">
  <img src="../../icon.png" alt="Icône OpenClaw Dashboard Plus" width="160">
</p>

# OpenClaw Dashboard Plus

Outil multilingue de script utilisateur et d'extension de navigateur pour OpenClaw Dashboard.

> Remarque : le développeur ne maîtrise pas le français. Ce document a été généré avec l'aide d'un modèle IA et peut contenir des formulations imparfaites.

[English](../../README.md) | [简体中文](./README.zh-CN.md) | [繁體中文](./README.zh-TW.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Français](./README.fr.md) | [Español](./README.es.md) | [Русский](./README.ru.md) | [Deutsch](./README.de.md) | [Tiếng Việt](./README.vi.md) | [Filipino](./README.fil.md) | [العربية](./README.ar.md)

## Aperçu

Le projet existe sous deux formes :

- `openclaw-dashboard-plus-zh.user.js` pour les gestionnaires de scripts utilisateur
- Une extension de navigateur générée dans `dist/extension/`

Il ajoute à OpenClaw Dashboard une couche multilingue, un panneau popup, des mises à jour de métadonnées distantes et des packs de langue téléchargeables.

## Fonctionnalités

- Séparation entre la langue du contenu et la langue de l'interface popup
- Récupération des métadonnées et des packs de langue depuis GitHub et Gitee
- Popup d'extension pour gérer les paramètres, le cache et les versions
- Même icône de projet dans la documentation et l'extension
- Sorties générées regroupées dans `dist/` au lieu de mélanger source et build

## Structure du projet

- `openclaw-dashboard-plus-zh.user.js` : point d'entrée du script utilisateur
- `extension-src/` : sources de l'extension et icônes
- `dist/extension/` : extension générée non empaquetée
- `language-packs/` : sortie des packs de langue du dépôt
- `ui-locales/` : fichiers de langue de l'interface popup
- `.github/workflows/build-extension.yml` : pipeline GitHub Actions

## Build

1. Générer l'extension non empaquetée :
   `node build-extension.mjs`
2. Sortie :
   `dist/extension/`
3. Créer l'archive ZIP de distribution :
   `node package-extension-zip.mjs`
4. Optionnel : créer un CRX local :
   `node package-crx.mjs`

## Installation

### Script utilisateur

1. Ouvrez `openclaw-dashboard-plus-zh.user.js`
2. Installez-le avec Tampermonkey, ScriptCat ou un gestionnaire compatible

### ZIP de l'extension

1. Téléchargez `openclaw-dashboard-plus-extension.zip` depuis les artefacts GitHub Actions ou les releases
2. Extrayez-le dans un dossier stable
3. Ouvrez `chrome://extensions` ou `edge://extensions`
4. Activez le mode développeur
5. Cliquez sur `Load unpacked`
6. Sélectionnez le dossier extrait

### Extension non empaquetée locale

1. Exécutez `node build-extension.mjs`
2. Ouvrez `chrome://extensions` ou `edge://extensions`
3. Activez le mode développeur
4. Cliquez sur `Load unpacked`
5. Sélectionnez `dist/extension/`

## GitHub Actions

Le dépôt inclut un workflow GitHub Actions sous Windows qui :

- Construit `dist/extension/`
- Produit `dist/openclaw-dashboard-plus-extension.zip`
- Téléverse le ZIP et l'extension non empaquetée comme artefacts

## Captures d'écran

![Aperçu du popup](../../image.png)
![Aperçu de l'installation](../../image2.png)

## Licence

Ce projet est publié sous la [MIT License](../../LICENSE).
