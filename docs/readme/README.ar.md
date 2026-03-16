<p align="center">
  <img src="../../icon.png" alt="أيقونة OpenClaw Dashboard Plus" width="160">
</p>

# OpenClaw Dashboard Plus

أداة متعددة اللغات على شكل userscript وإضافة متصفح لمشروع OpenClaw Dashboard.

> ملاحظة: المطور غير متمكن من اللغة العربية. تم إنشاء هذا المستند بواسطة نموذج ذكاء اصطناعي وقد يحتوي على صياغات غير دقيقة.

[English](../../README.md) | [简体中文](./README.zh-CN.md) | [繁體中文](./README.zh-TW.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Français](./README.fr.md) | [Español](./README.es.md) | [Русский](./README.ru.md) | [Deutsch](./README.de.md) | [Tiếng Việt](./README.vi.md) | [Filipino](./README.fil.md) | [العربية](./README.ar.md)

## نظرة عامة

يتم توفير المشروع في شكلين:

- `openclaw-dashboard-plus.user.js` كملف userscript
- إضافة متصفح يتم بناؤها داخل `dist/extension/`

يضيف المشروع طبقة متعددة اللغات ولوحة إعدادات منبثقة وتحديثات بيانات وصفية عن بُعد وحزم لغات قابلة للتنزيل إلى OpenClaw Dashboard.

## الميزات

- فصل لغة المحتوى عن لغة واجهة النافذة المنبثقة
- جلب البيانات الوصفية وحزم اللغات من GitHub و Gitee
- نافذة منبثقة لإدارة الإعدادات وذاكرة التخزين المؤقت ومعلومات الإصدار
- استخدام نفس أيقونة المشروع في التوثيق والإضافة
- حفظ الملفات المولدة داخل `dist/` بدلاً من خلطها مع ملفات المصدر

## بنية المشروع

- `openclaw-dashboard-plus.user.js`: نقطة دخول userscript
- `extension-src/`: ملفات مصدر الإضافة وموارد الأيقونات
- `dist/extension/`: الإضافة غير المضغوطة بعد البناء
- `language-packs/`: مخرجات حزم اللغات داخل المستودع
- `ui-locales/`: ملفات ترجمة واجهة النافذة المنبثقة
- `.github/workflows/build-extension.yml`: مسار GitHub Actions

## البناء

1. بناء الإضافة غير المضغوطة:
   `node build-extension.mjs`
2. مسار الخرج:
   `dist/extension/`
3. إنشاء ملف ZIP للتوزيع:
   `node package-extension-zip.mjs`
4. اختيارياً إنشاء CRX محلي:
   `node package-crx.mjs`

## التثبيت

### userscript

1. افتح `openclaw-dashboard-plus.user.js`
2. ثبته باستخدام Tampermonkey أو ScriptCat أو أي مدير متوافق

### ملف ZIP للإضافة

1. نزّل `openclaw-dashboard-plus-extension.zip` من مخرجات GitHub Actions أو من الإصدارات
2. فك الضغط في مجلد ثابت
3. افتح `chrome://extensions` أو `edge://extensions`
4. فعّل وضع المطور
5. اضغط `Load unpacked`
6. اختر المجلد الذي تم فك ضغطه

### الإضافة المحلية غير المضغوطة

1. شغّل `node build-extension.mjs`
2. افتح `chrome://extensions` أو `edge://extensions`
3. فعّل وضع المطور
4. اضغط `Load unpacked`
5. اختر `dist/extension/`

## GitHub Actions

يتضمن المستودع سير عمل GitHub Actions على Windows يقوم تلقائياً بما يلي:

- بناء `dist/extension/`
- إنشاء `dist/openclaw-dashboard-plus-extension.zip`
- رفع ملف ZIP والإضافة غير المضغوطة كعناصر artifact

## لقطات الشاشة

![معاينة النافذة المنبثقة](../../image.png)
![معاينة التثبيت](../../image2.png)

## الترخيص

يتم نشر هذا المشروع تحت [MIT License](../../LICENSE).
