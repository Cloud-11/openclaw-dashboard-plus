<p align="center">
  <img src="../../icon.png" alt="OpenClaw Dashboard Plus icon" width="160">
</p>

# OpenClaw Dashboard Plus

OpenClaw Dashboard 向けの多言語ユーザースクリプトとブラウザー拡張ツールです。

> 注記: 開発者は日本語に精通していません。この文書は AI により生成されており、不自然な表現が含まれる可能性があります。

[English](../../README.md) | [简体中文](./README.zh-CN.md) | [繁體中文](./README.zh-TW.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Français](./README.fr.md) | [Español](./README.es.md) | [Русский](./README.ru.md) | [Deutsch](./README.de.md) | [Tiếng Việt](./README.vi.md) | [Filipino](./README.fil.md) | [العربية](./README.ar.md)

## 概要

このプロジェクトは 2 つの形式で提供されます。

- `openclaw-dashboard-plus-zh.user.js` ユーザースクリプト
- `dist/extension/` に生成されるブラウザー拡張

OpenClaw Dashboard に多言語コンテンツ、ポップアップ設定パネル、リモートメタデータ更新、ダウンロード可能な言語パックを追加します。

## 主な機能

- コンテンツ言語とポップアップ UI 言語を個別に設定
- GitHub / Gitee からメタデータと言語パックを取得
- 実行設定、キャッシュ、バージョン情報を管理できる拡張ポップアップ
- ドキュメントと拡張機能で共通のプロジェクトアイコンを使用
- 生成物を `dist/` に集約し、ソースと分離

## ディレクトリ構成

- `openclaw-dashboard-plus-zh.user.js`: ユーザースクリプト本体
- `extension-src/`: 拡張機能のソースとアイコン
- `dist/extension/`: 生成された展開済み拡張
- `language-packs/`: リポジトリ内の言語パック出力
- `ui-locales/`: ポップアップ UI の翻訳ファイル
- `.github/workflows/build-extension.yml`: GitHub Actions ビルド

## ビルド

1. 展開済み拡張を生成:
   `node build-extension.mjs`
2. 出力先:
   `dist/extension/`
3. 配布用 ZIP を作成:
   `node package-extension-zip.mjs`
4. 任意でローカル CRX を作成:
   `node package-crx.mjs`

## インストール

### ユーザースクリプト

1. `openclaw-dashboard-plus-zh.user.js` を開く
2. Tampermonkey、ScriptCat など対応マネージャーでインストールする

### ブラウザー拡張 ZIP

1. GitHub Actions の成果物または Releases から `openclaw-dashboard-plus-extension.zip` を取得
2. 安定したフォルダーに展開する
3. `chrome://extensions` または `edge://extensions` を開く
4. Developer mode を有効にする
5. `Load unpacked` をクリックする
6. 展開したフォルダーを選択する

### ローカルの展開済み拡張

1. `node build-extension.mjs` を実行する
2. `chrome://extensions` または `edge://extensions` を開く
3. Developer mode を有効にする
4. `Load unpacked` をクリックする
5. `dist/extension/` を選択する

## GitHub Actions

このリポジトリには Windows ベースの GitHub Actions ワークフローが含まれており、次を自動で実行します。

- `dist/extension/` のビルド
- `dist/openclaw-dashboard-plus-extension.zip` の作成
- ZIP と展開済み拡張の成果物アップロード

## スクリーンショット

![Extension popup preview](../../image.png)
![Extension install preview](../../image2.png)

## ライセンス

このプロジェクトは [MIT License](../../LICENSE) のもとで公開されています。
