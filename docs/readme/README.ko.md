<p align="center">
  <img src="../../icon.png" alt="OpenClaw Dashboard Plus icon" width="160">
</p>

# OpenClaw Dashboard Plus

OpenClaw Dashboard를 위한 다국어 사용자 스크립트 및 브라우저 확장 도구입니다.

> 안내: 개발자는 한국어에 익숙하지 않습니다. 이 문서는 AI로 생성되었으며 표현이 부자연스러울 수 있습니다.

[English](../../README.md) | [简体中文](./README.zh-CN.md) | [繁體中文](./README.zh-TW.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Français](./README.fr.md) | [Español](./README.es.md) | [Русский](./README.ru.md) | [Deutsch](./README.de.md) | [Tiếng Việt](./README.vi.md) | [Filipino](./README.fil.md) | [العربية](./README.ar.md)

## 개요

이 프로젝트는 두 가지 형태로 제공됩니다.

- `openclaw-dashboard-plus-zh.user.js` 사용자 스크립트
- `dist/extension/` 에 생성되는 브라우저 확장

OpenClaw Dashboard에 다국어 콘텐츠, 팝업 설정 패널, 원격 메타데이터 업데이트, 다운로드 가능한 언어 팩을 추가합니다.

## 주요 기능

- 콘텐츠 언어와 팝업 UI 언어를 분리하여 설정
- GitHub / Gitee에서 메타데이터와 언어 팩 가져오기
- 런타임 설정, 캐시, 버전 정보를 관리하는 확장 팝업
- 문서와 확장 프로그램에서 동일한 프로젝트 아이콘 사용
- 생성 산출물을 `dist/` 로 모아 소스와 분리

## 디렉터리 구조

- `openclaw-dashboard-plus-zh.user.js`: 사용자 스크립트 진입점
- `extension-src/`: 확장 소스와 아이콘 자산
- `dist/extension/`: 생성된 압축 해제형 확장
- `language-packs/`: 저장소의 언어 팩 출력
- `ui-locales/`: 팝업 UI 번역 파일
- `.github/workflows/build-extension.yml`: GitHub Actions 빌드

## 빌드

1. 압축 해제형 확장 생성:
   `node build-extension.mjs`
2. 출력 위치:
   `dist/extension/`
3. 배포용 ZIP 패키지 생성:
   `node package-extension-zip.mjs`
4. 선택적으로 로컬 CRX 생성:
   `node package-crx.mjs`

## 설치

### 사용자 스크립트

1. `openclaw-dashboard-plus-zh.user.js` 파일을 엽니다
2. Tampermonkey, ScriptCat 또는 호환 매니저로 설치합니다

### 브라우저 확장 ZIP

1. GitHub Actions 아티팩트 또는 Releases에서 `openclaw-dashboard-plus-extension.zip` 을 다운로드합니다
2. 고정 폴더에 압축을 풉니다
3. `chrome://extensions` 또는 `edge://extensions` 를 엽니다
4. Developer mode 를 활성화합니다
5. `Load unpacked` 를 클릭합니다
6. 압축을 푼 폴더를 선택합니다

### 로컬 압축 해제형 확장

1. `node build-extension.mjs` 를 실행합니다
2. `chrome://extensions` 또는 `edge://extensions` 를 엽니다
3. Developer mode 를 활성화합니다
4. `Load unpacked` 를 클릭합니다
5. `dist/extension/` 을 선택합니다

## GitHub Actions

이 저장소에는 Windows 기반 GitHub Actions 워크플로가 포함되어 있으며 다음을 자동으로 수행합니다.

- `dist/extension/` 빌드
- `dist/openclaw-dashboard-plus-extension.zip` 생성
- ZIP 및 압축 해제형 확장을 아티팩트로 업로드

## 스크린샷

![Extension popup preview](../../image.png)
![Extension install preview](../../image2.png)

## 라이선스

이 프로젝트는 [MIT License](../../LICENSE) 를 따릅니다。
