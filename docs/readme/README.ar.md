<p align="center">
  <img src="../../icon.png" alt="OpenClaw Dashboard Plus icon" width="160">
</p>

# OpenClaw Dashboard Plus

<p align="center">إضافة متصفح تركّز على دعم تعدد اللغات داخل OpenClaw WebUI، مع إصلاحات UI، وتحسينات السمات، والتحكم بالخطوط، والتنقل السريع عبر تقدم المحادثة.</p>

<p align="center"><a><img src="https://img.shields.io/badge/OpenClaw-2026.3.2%2B-ff6b57" alt="إصدار OpenClaw المتوافق"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/releases"><img src="https://img.shields.io/github/v/release/Cloud-11/openclaw-dashboard-plus?display_name=tag" alt="أحدث إصدار"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/stargazers"><img src="https://img.shields.io/github/stars/Cloud-11/openclaw-dashboard-plus?style=flat" alt="GitHub Stars"></a>
  <a href="https://github.com/Cloud-11/openclaw-dashboard-plus/issues"><img src="https://img.shields.io/github/issues/Cloud-11/openclaw-dashboard-plus" alt="GitHub Issues"></a>
  <a href="../../LICENSE"><img src="https://img.shields.io/github/license/Cloud-11/openclaw-dashboard-plus" alt="License"></a>
</p>

> ملاحظة: المطور غير متمكن من العربية. تم إنشاء هذا المستند بمساعدة نموذج ذكاء اصطناعي وقد يحتوي على صياغات غير طبيعية.

[English](../../README.md) | [简体中文](./README.zh-CN.md) | [繁體中文](./README.zh-TW.md) | [日本語](./README.ja.md) | [한국어](./README.ko.md) | [Français](./README.fr.md) | [Español](./README.es.md) | [Русский](./README.ru.md) | [Deutsch](./README.de.md) | [Tiếng Việt](./README.vi.md) | [Filipino](./README.fil.md) | [العربية](./README.ar.md)

> ملاحظة: تمت ترجمة هذه الوثيقة باستخدام نموذج لغوي كبير بالذكاء الاصطناعي، ولم تُراجع يدويًا بعد. نعتذر إذا كانت بعض العبارات غير دقيقة أو غير طبيعية.

## معاينة

<table>
  <tr>
    <td width="50%">
      <img src="../../image5.png" alt="تحسين OpenClaw WebUI">
      <p><strong>تحسين OpenClaw WebUI</strong><br>ألوان السمات وإصلاحات UI والتنقل السريع عبر تقدم المحادثة تظهر مباشرة داخل صفحة OpenClaw.</p>
    </td>
    <td width="50%">
      <img src="../../image3.png" alt="ألوان السمات والأنماط">
      <p><strong>ألوان السمات والأنماط</strong><br>بدّل لوحة الألوان ونمط الواجهة من دون تعديل الشيفرة المصدرية لـ OpenClaw.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <img src="../../image4.png" alt="مفاتيح إصلاح UI">
      <p><strong>مفاتيح إصلاح UI</strong><br>يمكن إصلاح القوائم المنسدلة وكتل الشيفرة والحدود والمسافات والتفاصيل البصرية الأخرى بشكل منفصل عند الحاجة.</p>
    </td>
    <td width="50%">
      <img src="../../image.png" alt="اللغة والتشغيل">
      <p><strong>اللغة والتشغيل</strong><br>أدِر حزم لغة WebUI ولغة النافذة المنبثقة وعناوين URL النشطة ومصادر المزامنة من مكان واحد.</p>
    </td>
  </tr>
</table>

## نظرة عامة

يتم الآن توفير OpenClaw Dashboard Plus كإضافة متصفح فقط، ويتم بناء الناتج داخل `dist/extension/`.

يوفر المشروع:

- إعدادات منفصلة للغة محتوى OpenClaw ولغة واجهة النافذة المنبثقة
- تحميل البيانات الوصفية وحزم اللغة وموارد الأنماط من GitHub أو Gitee
- خيارات مظهر تشمل نمط الواجهة والخط وحجم الخط وإصلاحات العرض
- سلسلة موحدة للأيقونة والبيانات الوصفية بين التوثيق والإضافة

## الميزات

- تبويبات منبثقة `Settings` و `Features` و `Languages` و `About`
- تحديثات بعيدة للبيانات الوصفية وحزم اللغة وإعدادات السمات ووحدات الأنماط
- تسليم موارد السمات بصيغة HTML / CSS / JSON فقط ومن دون JavaScript بعيد
- بنية معيارية تفصل بين `extension-src/` و `language-packs/` و `ui-locales/` و `plugin-metadata.json`
- جميع مخرجات البناء محفوظة داخل `dist/`

## الاستخدام

1. شغّل `node build-extension.mjs` أو نزّل ملف ZIP الناتج من GitHub Actions.
2. افتح `chrome://extensions` أو `edge://extensions` وفعّل وضع المطور.
3. حمّل `dist/extension/` كإضافة غير مضغوطة.
4. افتح لوحة OpenClaw مثل `http://127.0.0.1:18789`.
5. استخدم تبويبات النافذة المنبثقة:
   - `Settings`: تفعيل الترجمة وتحديد المضيفات والمنافذ المسموح بها
   - `Features`: اختيار إعداد الواجهة والخط والحجم وإصلاحات الأنماط
   - `Languages`: تبديل لغة المحتوى وتحديث الحزم البعيدة وتنظيف التخزين المؤقت
   - `About`: تحديث البيانات الوصفية البعيدة ومراجعة معلومات التوافق
6. احفظ الإعدادات بعد كل تعديل. تبقى الموارد البعيدة المخزنة محليًا حتى يتم حذفها من النافذة المنبثقة.

## البناء

المتطلبات:

- Node.js 22 هو بيئة التشغيل المرجعية.
- `package-extension-zip.mjs` يحتاج إلى PowerShell.
- `package-crx.mjs` يحتاج إلى Chrome أو Edge.

الأوامر:

1. بناء الإضافة غير المضغوطة:
   `node build-extension.mjs`
2. إنشاء ZIP للتوزيع:
   `node package-extension-zip.mjs`
3. اختياريًا: إنشاء CRX محلي:
   `node package-crx.mjs`

المخرجات:

- `dist/extension/`: الإضافة غير المضغوطة بعد البناء
- `dist/openclaw-dashboard-plus-extension.zip`: ملف ZIP للتوزيع
- `dist/openclaw-dashboard-plus.crx`: ملف CRX محلي اختياري

## دليل الملفات

- `extension-src/`: مصدر الإضافة وواجهة popup والأيقونات وإعدادات السمات ومنطق المحتوى
- `extension-src/content-main.js`: المصدر الأساسي لـ content script
- `extension-src/style-bundle.json`: بيان وحدات الأنماط القابلة للتحميل عن بعد
- `extension-src/style-modules/`: موارد CSS / HTML / JSON المعيارية
- `extension-src/theme-presets.json`: تعريفات السمات المدمجة
- `language-packs/`: حزم لغة محتوى OpenClaw
- `ui-locales/`: نصوص واجهة popup وأسماء السمات المترجمة
- `plugin-metadata.json`: البيانات الوصفية الأساسية للإصدارات والمصادر البعيدة واللغات المتاحة
- `build-extension.mjs`: ينشئ `dist/extension/`
- `package-extension-zip.mjs`: ينشئ ZIP داخل `dist/`
- `package-crx.mjs`: مساعد لإنشاء CRX محلي

## التثبيت

الطريقة الموصى بها: [تنزيل حزمة التثبيت ZIP](https://github.com/Cloud-11/openclaw-dashboard-plus/releases/latest/download/openclaw-dashboard-plus-extension.zip)

1. نزّل حزمة التثبيت ZIP من GitHub Releases.
2. فك الضغط داخل مجلد ثابت.
3. افتح `chrome://extensions` أو `edge://extensions`.
4. فعّل وضع المطور.
5. اضغط `Load unpacked`.
6. اختر المجلد الذي تم فك ضغطه.
7. افتح OpenClaw WebUI، مثل `http://127.0.0.1:18789`.

## GitHub Actions

يتضمن المستودع سير عمل GitHub Actions على Windows يقوم تلقائيًا بما يلي:

- بناء `dist/extension/`
- إنشاء `dist/openclaw-dashboard-plus-extension.zip`
- رفع ملف ZIP والإضافة غير المضغوطة كعناصر مخرجات

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Cloud-11/openclaw-dashboard-plus&type=Date)](https://star-history.com/#Cloud-11/openclaw-dashboard-plus&Date)

## Pull Request

- عدّل `extension-src/` أو ملفات اللغات أو البيانات الوصفية أو سكربتات البناء. لا تعدّل `dist/extension/` مباشرة.
- أصبح المستودع مخصصًا للإضافة فقط. لا تعِد أسلوب التغليف القديم أو مسارات توزيع موازية.
- يجب أن تبقى موارد السمات البعيدة ضمن HTML / CSS / JSON فقط، من دون تنفيذ JavaScript بعيد.
- عند إصلاحات الواجهة أو الأنماط، أضف خطوات إعادة الإنتاج ولقطات شاشة إذا كانت مفيدة.
- شغّل البناء المناسب قبل فتح PR واكتب نتيجة التحقق.

## الترخيص

يتم توفير هذا المشروع بموجب [MIT License](../../LICENSE).
