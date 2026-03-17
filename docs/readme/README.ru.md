<p align="center">
  <img src="../../icon.png" alt="Иконка OpenClaw Dashboard Plus" width="160">
</p>

# OpenClaw Dashboard Plus

Многоязычный userscript и браузерное расширение для OpenClaw Dashboard.

> Примечание: разработчик не владеет русским языком в полной мере. Этот документ сгенерирован с помощью ИИ и может содержать неточные формулировки.

[English](../../README.md) | [简体中文](./README.zh-CN.md) | [繁體中文](./README.zh-TW.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Français](./README.fr.md) | [Español](./README.es.md) | [Русский](./README.ru.md) | [Deutsch](./README.de.md) | [Tiếng Việt](./README.vi.md) | [Filipino](./README.fil.md) | [العربية](./README.ar.md)

## Обзор

Проект распространяется в двух формах:

- `openclaw-dashboard-plus-zh.user.js` как userscript
- Браузерное расширение, собираемое в `dist/extension/`

Он добавляет в OpenClaw Dashboard многоязычный слой, всплывающую панель настроек, удаленные обновления метаданных и загружаемые языковые пакеты.

## Возможности

- Раздельные настройки языка контента и языка интерфейса popup
- Получение метаданных и языковых пакетов из GitHub и Gitee
- Popup расширения для управления настройками, кэшем и версиями
- Один и тот же значок проекта в документации и в расширении
- Сгенерированные файлы сохраняются в `dist/`, а не смешиваются с исходниками

## Структура проекта

- `openclaw-dashboard-plus-zh.user.js`: вход userscript
- `extension-src/`: исходники расширения и иконки
- `dist/extension/`: собранное распакованное расширение
- `language-packs/`: вывод языковых пакетов в репозитории
- `ui-locales/`: файлы локализации интерфейса popup
- `.github/workflows/build-extension.yml`: pipeline GitHub Actions

## Сборка

1. Собрать распакованное расширение:
   `node build-extension.mjs`
2. Результат:
   `dist/extension/`
3. Создать ZIP для распространения:
   `node package-extension-zip.mjs`
4. Необязательно: создать локальный CRX:
   `node package-crx.mjs`

## Установка

### Userscript

1. Откройте `openclaw-dashboard-plus-zh.user.js`
2. Установите его через Tampermonkey, ScriptCat или совместимый менеджер

### ZIP расширения

1. Скачайте `openclaw-dashboard-plus-extension.zip` из артефактов GitHub Actions или из releases
2. Распакуйте его в постоянную папку
3. Откройте `chrome://extensions` или `edge://extensions`
4. Включите режим разработчика
5. Нажмите `Load unpacked`
6. Выберите распакованную папку

### Локальное распакованное расширение

1. Выполните `node build-extension.mjs`
2. Откройте `chrome://extensions` или `edge://extensions`
3. Включите режим разработчика
4. Нажмите `Load unpacked`
5. Выберите `dist/extension/`

## GitHub Actions

В репозитории есть workflow GitHub Actions на Windows, который автоматически:

- Собирает `dist/extension/`
- Создает `dist/openclaw-dashboard-plus-extension.zip`
- Загружает ZIP и распакованное расширение как артефакты

## Скриншоты

![Предпросмотр popup](../../image.png)
![Предпросмотр установки](../../image2.png)

## Лицензия

Проект распространяется по лицензии [MIT License](../../LICENSE).
