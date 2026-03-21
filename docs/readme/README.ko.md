<p align="center">
  <img src="../../icon.png" alt="OpenClaw Dashboard Plus icon" width="160">
</p>

# OpenClaw Dashboard Plus

<p align="center">OpenClaw WebUI 다국어 지원을 중심으로 UI 보정, 테마 다듬기, 글꼴 제어, 대화 진행 빠른 점프까지 제공하는 브라우저 확장입니다.</p>

<p align="center"><a><img src="https://img.shields.io/badge/OpenClaw-2026.3.2%2B-ff6b57" alt="OpenClaw 호환 버전"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/releases"><img src="https://img.shields.io/github/v/release/Cloud-11/openclaw-dashboard-plus?display_name=tag" alt="최신 릴리스"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/stargazers"><img src="https://img.shields.io/github/stars/Cloud-11/openclaw-dashboard-plus?style=flat" alt="GitHub Stars"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/issues"><img src="https://img.shields.io/github/issues/Cloud-11/openclaw-dashboard-plus" alt="GitHub Issues"></a>
  <a href="../../LICENSE"><img src="https://img.shields.io/github/license/Cloud-11/openclaw-dashboard-plus" alt="License"></a>
</p>

> 참고: 개발자는 한국어에 익숙하지 않습니다. 이 문서는 AI 모델의 도움으로 생성되었으며 어색한 표현이 있을 수 있습니다.

[English](../../README.md) | [简体中文](./README.zh-CN.md) | [繁體中文](./README.zh-TW.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Français](./README.fr.md) | [Español](./README.es.md) | [Русский](./README.ru.md) | [Deutsch](./README.de.md) | [Tiếng Việt](./README.vi.md) | [Filipino](./README.fil.md) | [العربية](./README.ar.md)

> 안내: 이 문서는 AI 대규모 언어 모델로 번역되었으며 아직 사람이 직접 교정하지 않았습니다. 일부 표현이 어색하거나 부정확할 수 있는 점 양해 부탁드립니다.

## 미리보기

<table>
  <tr>
    <td width="50%">
      <img src="../../image5.png" alt="OpenClaw WebUI 강화 화면">
      <p><strong>OpenClaw WebUI 강화</strong><br>테마 색상, UI 보정, 오른쪽 대화 진행 점프 기능이 OpenClaw 페이지에 바로 적용됩니다.</p>
    </td>
    <td width="50%">
      <img src="../../image3.png" alt="테마와 스타일 프리셋">
      <p><strong>테마 색상과 스타일 프리셋</strong><br>OpenClaw 원본을 수정하지 않고도 색상 조합과 UI 스타일을 바꿀 수 있습니다.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <img src="../../image4.png" alt="UI 보정 토글">
      <p><strong>UI 보정 토글</strong><br>드롭다운, 코드 블록, 테두리, 간격 같은 세부 요소를 필요에 따라 개별적으로 고칠 수 있습니다.</p>
    </td>
    <td width="50%">
      <img src="../../image.png" alt="언어와 실행 설정">
      <p><strong>언어와 실행 설정</strong><br>WebUI 언어 팩, 팝업 언어, 적용 URL, 동기화 소스를 한곳에서 관리합니다.</p>
    </td>
  </tr>
</table>

## 개요

OpenClaw Dashboard Plus는 이제 `dist/extension/`에 빌드되는 브라우저 확장으로만 제공됩니다.

주요 내용:

- OpenClaw 콘텐츠 언어와 팝업 UI 언어를 분리해서 설정
- GitHub / Gitee에서 메타데이터, 언어 팩, 스타일 자산을 가져오기
- UI 프리셋, 글꼴, 글꼴 크기, 복구 토글을 포함한 테마 설정
- 문서와 확장에서 동일한 아이콘과 메타데이터 체인을 사용

## 기능

- `Settings`, `Features`, `Languages`, `About` 팝업 탭
- 메타데이터, 언어 팩, 테마 프리셋, 스타일 모듈의 원격 새로고침
- 원격 JavaScript 없이 HTML / CSS / JSON만 허용하는 테마 자산 전달
- `extension-src/`, `language-packs/`, `ui-locales/`, `plugin-metadata.json`로 분리된 구조
- 생성 산출물을 `dist/`에 모아 소스와 분리

## 사용 방법

1. `node build-extension.mjs`를 실행하거나 GitHub Actions ZIP 아티팩트를 다운로드합니다.
2. `chrome://extensions` 또는 `edge://extensions`를 열고 개발자 모드를 켭니다.
3. `dist/extension/`을 압축 해제된 확장으로 로드합니다。
4. `http://127.0.0.1:18789` 같은 OpenClaw 패널을 엽니다.
5. 팝업 탭을 사용합니다.
   - `Settings`: 번역 활성화, 허용 호스트와 포트 설정
   - `Features`: UI 프리셋, 글꼴, 크기, 스타일 오버라이드, 스타일 복구, 셀렉트 복구, 코드 블록 스타일 전환
   - `Languages`: 콘텐츠 언어 전환, 원격 언어 팩 새로고침, 캐시 삭제
   - `About`: 원격 메타데이터 새로고침, 저장소 및 호환성 정보 확인
6. 변경 후 설정을 저장합니다. 원격 자산 캐시는 팝업에서 지울 때까지 유지됩니다.

## 빌드

사전 요구 사항:

- 기준 런타임은 Node.js 22입니다.
- `package-extension-zip.mjs`에는 PowerShell이 필요합니다.
- `package-crx.mjs`에는 Chrome 또는 Edge가 필요합니다.

명령:

1. 압축 해제된 확장 빌드:
   `node build-extension.mjs`
2. 배포용 ZIP 생성:
   `node package-extension-zip.mjs`
3. 선택 사항: 로컬 CRX 생성:
   `node package-crx.mjs`

출력:

- `dist/extension/`: 생성된 압축 해제 확장
- `dist/openclaw-dashboard-plus-extension.zip`: 배포용 ZIP
- `dist/openclaw-dashboard-plus.crx`: 선택 가능한 로컬 CRX

## 파일 안내

- `extension-src/`: 확장 소스, 팝업 UI, 아이콘, 테마 프리셋, 콘텐츠 로직
- `extension-src/content-main.js`: 확장 콘텐츠 스크립트 원본
- `extension-src/style-bundle.json`: 원격 로드 스타일 모듈 매니페스트
- `extension-src/style-modules/`: CSS / HTML / JSON 스타일 자산
- `extension-src/theme-presets.json`: 내장 테마 프리셋 정의
- `language-packs/`: OpenClaw 콘텐츠 언어 팩
- `ui-locales/`: 팝업 UI 문구와 테마 프리셋 문구
- `plugin-metadata.json`: 버전, 원격 소스, 사용 가능한 로캘을 관리하는 메타데이터
- `build-extension.mjs`: `dist/extension/`을 생성하는 빌드 스크립트
- `package-extension-zip.mjs`: `dist/`에 ZIP 생성
- `package-crx.mjs`: 로컬 CRX 생성 도우미

## 설치

권장 방법: [ZIP 설치 패키지 다운로드](https://github.com/Cloud-11/openclaw-dashboard-plus/releases/latest/download/openclaw-dashboard-plus-extension.zip)

1. GitHub Releases에서 ZIP 설치 패키지를 다운로드합니다.
2. 안정적인 폴더에 압축을 풉니다.
3. `chrome://extensions` 또는 `edge://extensions`를 엽니다.
4. 개발자 모드를 켭니다.
5. `Load unpacked`를 클릭합니다.
6. 압축을 푼 폴더를 선택합니다.
7. OpenClaw WebUI를 엽니다. 예: `http://127.0.0.1:18789`

## GitHub Actions

이 저장소에는 Windows 기반 GitHub Actions 워크플로가 포함되어 있으며 다음을 자동으로 수행합니다.

- `dist/extension/` 빌드
- `dist/openclaw-dashboard-plus-extension.zip` 생성
- ZIP과 압축 해제 확장을 아티팩트로 업로드

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Cloud-11/openclaw-dashboard-plus&type=Date)](https://star-history.com/#Cloud-11/openclaw-dashboard-plus&Date)

## Pull Request

- `extension-src/`, 로캘, 메타데이터, 빌드 스크립트를 수정하고 `dist/extension/`은 직접 편집하지 마세요.
- 저장소는 확장 전용입니다. 사용자 스크립트나 병행 배포 경로를 다시 도입하지 마세요.
- 원격 테마 자산은 HTML / CSS / JSON으로 제한하고 JavaScript 실행 경로를 추가하지 마세요.
- UI 또는 스타일 수정에는 재현 단계와 필요한 경우 스크린샷을 PR에 첨부하세요.
- PR 전에 관련 빌드를 실행하고 검증 결과를 적어 주세요.

## 라이선스

이 프로젝트는 [MIT License](../../LICENSE)로 배포됩니다.
