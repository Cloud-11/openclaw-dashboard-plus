<p align="center">
  <img src="../../icon.png" alt="OpenClaw Dashboard Plus icon" width="160">
</p>

# OpenClaw Dashboard Plus

<p align="center">OpenClaw WebUI の多言語対応を中心に、UI 修正、テーマ調整、フォント制御、会話進行の高速ジャンプも追加するブラウザー拡張です。</p>

<p align="center"><a><img src="https://img.shields.io/badge/OpenClaw-2026.3.2%2B-ff6b57" alt="OpenClaw 対応バージョン"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/releases"><img src="https://img.shields.io/github/v/release/Cloud-11/openclaw-dashboard-plus?display_name=tag" alt="最新リリース"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/stargazers"><img src="https://img.shields.io/github/stars/Cloud-11/openclaw-dashboard-plus?style=flat" alt="GitHub Stars"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/issues"><img src="https://img.shields.io/github/issues/Cloud-11/openclaw-dashboard-plus" alt="GitHub Issues"></a>
  <a href="../../LICENSE"><img src="https://img.shields.io/github/license/Cloud-11/openclaw-dashboard-plus" alt="License"></a>
</p>

> 注記: 開発者は日本語に精通していません。この文書は AI により生成されており、不自然な表現が含まれる可能性があります。

[English](../../README.md) | [简体中文](./README.zh-CN.md) | [繁體中文](./README.zh-TW.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Français](./README.fr.md) | [Español](./README.es.md) | [Русский](./README.ru.md) | [Deutsch](./README.de.md) | [Svenska](./README.sv.md) | [Tiếng Việt](./README.vi.md) | [Filipino](./README.fil.md) | [العربية](./README.ar.md)

> 注記: このドキュメントは AI 大規模言語モデルで翻訳されており、まだ人手での校正を行っていません。表現に不自然さや不正確な箇所があれば申し訳ありません。

## プレビュー

<table>
  <tr>
    <td width="50%">
      <img src="../../image5.png" alt="OpenClaw WebUI の強化表示">
      <p><strong>OpenClaw WebUI 強化</strong><br>テーマ配色、UI 修正、右側の会話進行ジャンプを OpenClaw ページへ直接反映します。</p>
    </td>
    <td width="50%">
      <img src="../../image3.png" alt="テーマとスタイルプリセット">
      <p><strong>テーマ配色とスタイルプリセット</strong><br>OpenClaw 本体を改変せずに配色と UI スタイルを切り替えられます。</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <img src="../../image4.png" alt="UI 修正トグル">
      <p><strong>UI 修正トグル</strong><br>ドロップダウン、コードブロック、境界線、余白などを必要に応じて個別に補正できます。</p>
    </td>
    <td width="50%">
      <img src="../../image.png" alt="言語と実行設定">
      <p><strong>言語と実行設定</strong><br>WebUI 言語パック、ポップアップ言語、対象 URL、同期元をまとめて管理できます。</p>
    </td>
  </tr>
</table>

## 概要

OpenClaw Dashboard Plus は現在、`dist/extension/` にビルドされるブラウザー拡張としてのみ提供されます。

主な内容:

- OpenClaw のコンテンツ言語とポップアップ UI 言語を分離して設定
- GitHub / Gitee からメタデータ、言語パック、スタイル資産を取得
- UI プリセット、フォント、フォントサイズ、修復トグルを使ったテーマ設定
- ドキュメントと拡張で共通のアイコンとメタデータ経路を利用

## 機能

- `Settings`、`Features`、`Languages`、`About` の各ポップアップタブ
- メタデータ、言語パック、テーマプリセット、スタイルモジュールのリモート更新
- リモート JavaScript を許可せず、HTML / CSS / JSON のみでテーマ資産を配信
- `extension-src/`、`language-packs/`、`ui-locales/`、`plugin-metadata.json` を分離した構成
- 生成物を `dist/` に集約し、ソースと分離

## 使い方

1. `node build-extension.mjs` を実行するか、GitHub Actions の ZIP 成果物を取得します。
2. `chrome://extensions` または `edge://extensions` を開き、Developer mode を有効にします。
3. `dist/extension/` を展開済み拡張として読み込みます。
4. `http://127.0.0.1:18789` などの OpenClaw パネルを開きます。
5. ポップアップタブを使います。
   - `Settings`: 翻訳を有効化し、許可ホストとポートを設定
   - `Features`: UI プリセット、フォント、サイズ、スタイル上書き、スタイル修復、セレクト修復、コードブロック装飾を切り替え
   - `Languages`: コンテンツ言語の切り替え、リモート言語パック更新、キャッシュ削除
   - `About`: リモートメタデータ更新、リポジトリ情報や互換性情報の確認
6. 変更後は設定を保存します。リモート資産のキャッシュはポップアップから削除するまで保持されます。

## ビルド

前提条件:

- 基準ランタイムは Node.js 22 です。
- `package-extension-zip.mjs` には PowerShell が必要です。
- `package-crx.mjs` には Chrome または Edge が必要です。

コマンド:

1. 展開済み拡張を生成:
   `node build-extension.mjs`
2. 配布用 ZIP を作成:
   `node package-extension-zip.mjs`
3. 任意でローカル CRX を作成:
   `node package-crx.mjs`

出力:

- `dist/extension/`: 生成された展開済み拡張
- `dist/openclaw-dashboard-plus-extension.zip`: 配布用 ZIP
- `dist/openclaw-dashboard-plus.crx`: 任意のローカル CRX

## ファイルガイド

- `extension-src/`: 拡張ソース、ポップアップ UI、アイコン、テーマプリセット、コンテンツロジック
- `extension-src/content-main.js`: 拡張コンテンツスクリプトのソース
- `extension-src/style-bundle.json`: リモート読込スタイルモジュールのマニフェスト
- `extension-src/style-modules/`: CSS / HTML / JSON のスタイル資産
- `extension-src/theme-presets.json`: 内蔵テーマプリセット定義
- `language-packs/`: OpenClaw コンテンツ言語パック
- `ui-locales/`: ポップアップ UI 文言とテーマプリセット文言
- `plugin-metadata.json`: バージョン、リモートソース、利用可能ロケールを管理するメタデータ
- `build-extension.mjs`: `dist/extension/` を生成するビルドスクリプト
- `package-extension-zip.mjs`: `dist/` に ZIP を作成
- `package-crx.mjs`: ローカル CRX 作成補助

## インストール

おすすめ: [ZIP インストールパッケージをダウンロード](https://github.com/Cloud-11/openclaw-dashboard-plus/releases/latest/download/openclaw-dashboard-plus-extension.zip)

1. GitHub Releases から ZIP インストールパッケージをダウンロードします。
2. 安定したフォルダーに展開します。
3. `chrome://extensions` または `edge://extensions` を開きます。
4. Developer mode を有効にします。
5. `Load unpacked` をクリックします。
6. 展開したフォルダーを選択します。
7. OpenClaw WebUI を開きます。例: `http://127.0.0.1:18789`

## GitHub Actions

このリポジトリには Windows ベースの GitHub Actions ワークフローがあり、次を自動で実行します。

- `dist/extension/` のビルド
- `dist/openclaw-dashboard-plus-extension.zip` の作成
- ZIP と展開済み拡張の成果物アップロード

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Cloud-11/openclaw-dashboard-plus&type=Date)](https://star-history.com/#Cloud-11/openclaw-dashboard-plus&Date)

## Pull Request

- `extension-src/`、ロケール、メタデータ、ビルドスクリプトを更新し、`dist/extension/` は直接編集しないでください。
- リポジトリは拡張専用です。ユーザースクリプトや並行配布経路を再導入しないでください。
- リモート配信するテーマ資産は HTML / CSS / JSON に限定し、JavaScript 実行経路を追加しないでください。
- UI やスタイル修正では、再現手順と必要に応じてスクリーンショットを PR に添えてください。
- PR 前に関連ビルドを実行し、検証結果を記載してください。

## ライセンス

このプロジェクトは [MIT License](../../LICENSE) のもとで公開されています。
