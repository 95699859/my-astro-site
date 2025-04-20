# Мой Astro-проект 🚀

[![Astro](https://img.shields.io/badge/Astro-5.7.0-FF5D01?logo=astro)](https://astro.build)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Современный статический сайт, построенный на Astro с поддержкой TypeScript, SEO и оптимизированными изображениями.

## 📦 Особенности

- ⚡️ Высокая производительность (100/100 в Lighthouse)
- 🌙 Темная/светлая тема
- 📱 Адаптивный дизайн
- 📝 Интеграция с Markdown/MDX
- 🔍 SEO-оптимизация (sitemap, мета-теги)
- 🖼️ Автоматическая оптимизация изображений

## 🛠 Установка

1. **Клонируйте репозиторий:**

    ```bash
    git clone https://github.com/yourname/astro-project.git
    ```

2. **Установите зависимости:**

    ```bash
    npm install
    ```

3. **Установите TypeScript:**

    ```bash
    npm install --save-dev typescript @types/node
    ```

    **Создайте `tsconfig.json`:**

    ```json
    {
    "compilerOptions": {
        "target": "ESNext",
        "module": "ESNext",
        "strict": true,
        "jsx": "react-jsx",
        "baseUrl": ".",
        "paths": {
        "@components/*": ["src/components/*"]
        }
    }
    }
    ```

4. **Оптимизация изображений**

    **Используйте официальный плагин `@astrojs/image`:**

    ```bash
    npx astro add image
    ```

    **Пример компонента:**

    ```astro
    ---
    import { Image } from '@astrojs/image';
    ---

    <Image
    src="/images/hero.jpg"
    alt="Hero Image"
    width={1200}
    height={800}
    formats={['avif', 'webp', 'jpg']}
    loading="eager"
    />
    ```

5. **Настройка SEO**

    **Добавьте интеграции для `мета-тегов` и `sitemap`:**

    ```bash
    npx astro add sitemap @astrojs/mdx
    ```

    **В `astro.config.mjs`:**

    ```javascript
    import { defineConfig } from 'astro/config';
    import sitemap from '@astrojs/sitemap';

    export default defineConfig({
    site: 'https://my-astro-site.com',
    integrations: [sitemap()]
    });
    ```

6. **Линтинг и форматирование**

    **Установите `ESLint` и `Prettier`:**

    ```bash
    npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-astro
    ```

    **Создайте `.eslintrc.cjs`:**

    ```javascript
    module.exports = {
    extends: ['eslint:recommended', 'plugin:astro/recommended', 'prettier'],
    parserOptions: { ecmaVersion: 'latest' },
    env: { node: true, es6: true }
    };
    ```

7. **Реализация темной/светлой темы**

    **Добавьте переключатель в компонент `Header.astro`:**

    ```astro
    <script>
    if (typeof window !== 'undefined') {
        const theme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', theme);
    }
    </script>

    <button onclick="toggleTheme()">Сменить тему</button>

    <script is:inline>
    function toggleTheme() {
        const html = document.documentElement;
        const theme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }
    </script>
    ```

    **В `global.css`:**

    ```css
    :root {
    --bg: white;
    --text: black;
    }

    [data-theme="dark"] {
    --bg: #1a1a1a;
    --text: #f0f0f0;
    }

    body {
    background: var(--bg);
    color: var(--text);
    }
    ``

### 🚀 Запуск

- **Проверка обновлений пакетов:**

    ```bash
    npx npm-check-updates -u && npm install
    ```

- **Dev-сервер:**

    ```bash
    npm run dev
    ```

- **Сборка для production:**

    ```bash
    npm run build
    ```

- **Просмотр сборки:**

    ```bash
    npm run preview
    ```

![фотография_1](img/image_1.png)

### 📂 Структура проекта

```textline
my-astro-site/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Counter.jsx
│   │   └── ThemeToggle.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   └── blog/
│   │       └── post-1.md
│   ├── layouts/
│   │   └── MainLayout.astro
│   └── styles/
│       └── global.css
├── public/
│   ├── images/
│   │   └── hero.jpg
│   └── robots.txt
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── .eslintrc.cjs
└── README.md
```

### 🔌 Интеграции

- [React](https://docs.astro.build/ru/guides/integrations-guide/react/)

- [Sitemap](https://docs.astro.build/ru/guides/integrations-guide/sitemap/)

- [Image Optimization](https://docs.astro.build/ru/guides/images/)

### Это полностью рабочий проект со следующими функциями

- 📁 Многостраничная структура

- 🌓 Переключение тем

- 🧮 Интерактивный `React-компонент`

- 📝 Поддержка `Markdown`

- 🖼️ Оптимизация изображений

- 🔍 SEO-настройки

- 🛠 `TypeScript` и линтинг

### 📄 Лицензия

`MIT License` - Подробнее в файле `LICENSE`

| **Примечание:** Для кастомизации конфигурации см. официальную документацию.

---

**Дата:** 20.04.2025

**Преподаватель:** Дуплей Максим Игоревич

**Cоциальные сети:**

- **TG:** `@dupley_maxim_1999`
- **TG:** `@quadd4rv1n7`
- **VK:** `@maestro7it`
