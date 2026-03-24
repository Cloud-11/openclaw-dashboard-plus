<p align="center">
  <img src="../../icon.png" alt="Icône OpenClaw Dashboard Plus" width="160">
</p>

# OpenClaw Dashboard Plus

<p align="center">Extension de navigateur axée sur le support multilingue de l'OpenClaw WebUI, avec correctifs UI, palettes de thème, contrôle des polices et saut rapide dans la progression des conversations.</p>

<p align="center"><a><img src="https://img.shields.io/badge/OpenClaw-2026.3.2%2B-ff6b57" alt="Version compatible OpenClaw"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/releases"><img src="https://img.shields.io/github/v/release/Cloud-11/openclaw-dashboard-plus?display_name=tag" alt="Dernière version"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/stargazers"><img src="https://img.shields.io/github/stars/Cloud-11/openclaw-dashboard-plus?style=flat" alt="GitHub Stars"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/issues"><img src="https://img.shields.io/github/issues/Cloud-11/openclaw-dashboard-plus" alt="GitHub Issues"></a>
  <a href="../../LICENSE"><img src="https://img.shields.io/github/license/Cloud-11/openclaw-dashboard-plus" alt="License"></a>
</p>

> Remarque : le développeur ne maîtrise pas le français. Ce document a été généré avec l'aide d'un modèle IA et peut contenir des formulations imparfaites.

[English](../../README.md) | [简体中文](./README.zh-CN.md) | [繁體中文](./README.zh-TW.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Français](./README.fr.md) | [Español](./README.es.md) | [Русский](./README.ru.md) | [Deutsch](./README.de.md) | [Svenska](./README.sv.md) | [Tiếng Việt](./README.vi.md) | [Filipino](./README.fil.md) | [العربية](./README.ar.md)

> Remarque : Ce document a été traduit à l'aide d'un grand modèle de langage d'IA et n'a pas encore été relu manuellement. Veuillez nous excuser si certaines formulations restent peu naturelles ou imprécises.

## Aperçu Visuel

<table>
  <tr>
    <td width="50%">
      <img src="../../image5.png" alt="Amélioration OpenClaw WebUI">
      <p><strong>Amélioration OpenClaw WebUI</strong><br>Palette de thème, correctifs UI et saut rapide dans la progression des conversations directement sur la page OpenClaw.</p>
    </td>
    <td width="50%">
      <img src="../../image3.png" alt="Palettes et styles prédéfinis">
      <p><strong>Palettes et styles prédéfinis</strong><br>Changez le schéma de couleurs et le style UI sans modifier le code source d'OpenClaw.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <img src="../../image4.png" alt="Correctifs UI">
      <p><strong>Correctifs UI</strong><br>Corrigez séparément menus déroulants, blocs de code, bordures, espacements et autres détails visuels.</p>
    </td>
    <td width="50%">
      <img src="../../image.png" alt="Langues et exécution">
      <p><strong>Langues et exécution</strong><br>Gérez en un seul endroit les packs de langue WebUI, la langue du popup, les hôtes actifs et les sources de synchronisation.</p>
    </td>
  </tr>
</table>

## Aperçu

OpenClaw Dashboard Plus est désormais fourni uniquement comme extension de navigateur, construite dans `dist/extension/`.

Le projet apporte :

- Des réglages séparés pour la langue du contenu OpenClaw et celle de l'interface popup
- Le chargement de métadonnées, packs de langue et ressources de style depuis GitHub ou Gitee
- Des options de thème pour le style UI, la police, la taille de police et les correctifs visuels
- Une chaîne unifiée d'icônes et de métadonnées pour la documentation et l'extension

## Fonctionnalités

- Onglets popup `Settings`, `Features`, `Languages` et `About`
- Actualisation distante des métadonnées, packs de langue, préréglages de thème et modules de style
- Distribution des ressources de thème en HTML / CSS / JSON sans JavaScript distant
- Structure modulaire séparant `extension-src/`, `language-packs/`, `ui-locales/` et `plugin-metadata.json`
- Sorties générées regroupées dans `dist/` au lieu de mélanger source et build

## Utilisation

1. Exécutez `node build-extension.mjs` ou téléchargez le ZIP généré par GitHub Actions.
2. Ouvrez `chrome://extensions` ou `edge://extensions` et activez le mode développeur.
3. Chargez `dist/extension/` comme extension non empaquetée.
4. Ouvrez votre panneau OpenClaw, par exemple `http://127.0.0.1:18789`.
5. Utilisez les onglets du popup :
   - `Settings` : activer la traduction et définir les hôtes et ports autorisés
   - `Features` : choisir le préréglage UI, la police, la taille et les correctifs de style
   - `Languages` : changer la langue du contenu, mettre à jour les packs distants et vider le cache
   - `About` : actualiser les métadonnées distantes et consulter les informations de compatibilité
6. Enregistrez les paramètres après modification. Les ressources distantes mises en cache restent locales jusqu'à leur suppression dans le popup.

## Build

Prérequis :

- Node.js 22 est la version de référence.
- `package-extension-zip.mjs` nécessite PowerShell.
- `package-crx.mjs` nécessite Chrome ou Edge.

Commandes :

1. Construire l'extension non empaquetée :
   `node build-extension.mjs`
2. Créer le ZIP de distribution :
   `node package-extension-zip.mjs`
3. Optionnel : créer un CRX local :
   `node package-crx.mjs`

Sorties :

- `dist/extension/` : extension non empaquetée générée
- `dist/openclaw-dashboard-plus-extension.zip` : ZIP de distribution
- `dist/openclaw-dashboard-plus.crx` : CRX local optionnel

## Guide Des Fichiers

- `extension-src/` : sources de l'extension, popup UI, icônes, préréglages de thème et logique de contenu
- `extension-src/content-main.js` : source du script de contenu
- `extension-src/style-bundle.json` : manifeste des modules de style distants
- `extension-src/style-modules/` : ressources CSS / HTML / JSON modulaires
- `extension-src/theme-presets.json` : définition des préréglages de thème intégrés
- `language-packs/` : packs de langue du contenu OpenClaw
- `ui-locales/` : textes localisés du popup et libellés des préréglages
- `plugin-metadata.json` : métadonnées canoniques pour les versions, sources distantes et langues disponibles
- `build-extension.mjs` : construit `dist/extension/`
- `package-extension-zip.mjs` : crée le ZIP dans `dist/`
- `package-crx.mjs` : assistant de génération CRX local

## Installation

Recommande : [Telecharger l'archive ZIP d'installation](https://github.com/Cloud-11/openclaw-dashboard-plus/releases/latest/download/openclaw-dashboard-plus-extension.zip)

1. Telechargez l'archive ZIP d'installation depuis les GitHub Releases.
2. Extrayez-la dans un dossier stable.
3. Ouvrez `chrome://extensions` ou `edge://extensions`.
4. Activez le mode développeur.
5. Cliquez sur `Load unpacked`.
6. Sélectionnez le dossier extrait.
7. Ouvrez votre OpenClaw WebUI, par exemple `http://127.0.0.1:18789`.

## GitHub Actions

Le dépôt inclut un workflow GitHub Actions sous Windows qui :

- Construit `dist/extension/`
- Produit `dist/openclaw-dashboard-plus-extension.zip`
- Téléverse le ZIP et l'extension non empaquetée comme artefacts

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Cloud-11/openclaw-dashboard-plus&type=Date)](https://star-history.com/#Cloud-11/openclaw-dashboard-plus&Date)

## Pull Request

- Modifiez `extension-src/`, les locales, les métadonnées ou les scripts de build. N'éditez pas directement `dist/extension/`.
- Le dépôt est désormais réservé à l'extension. Ne réintroduisez pas l'ancien mode de script ni une distribution parallèle.
- Les ressources distantes de thème doivent rester limitées à HTML / CSS / JSON, sans JavaScript distant.
- Pour les correctifs UI ou style, ajoutez des étapes de reproduction et si utile une capture d'écran dans la PR.
- Exécutez la commande de build pertinente avant d'ouvrir la PR et mentionnez le résultat de vérification.

## Licence

Ce projet est publié sous la [MIT License](../../LICENSE).
