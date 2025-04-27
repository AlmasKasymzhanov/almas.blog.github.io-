import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Almas Kasymzhanov",
    pageTitleSuffix: " | Личный блог",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "ru-RU", // Изменено на русский язык
    baseUrl: "https://almas.blog",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      isDark: false, // Устанавливает светлую тему по умолчанию
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Montserrat", // Изменен шрифт заголовков
        body: "Open Sans", // Изменен шрифт основного текста
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff", // Белый фон
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#0066cc", // Синий для ссылок и акцентов
          tertiary: "#4d9e91", // Приятный зеленый для дополнительных элементов
          highlight: "rgba(0, 102, 204, 0.15)", // Голубая подсветка
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#1a1a1a", // Темный фон, но не слишком черный
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#f5f5f5", // Светлый текст
          secondary: "#3d9dff", // Светло-синий для ссылок
          tertiary: "#6bd6c8", // Светло-зеленый для дополнительных элементов
          highlight: "rgba(61, 157, 255, 0.15)", // Синяя подсветка
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Раскомментировано для создания красивых изображений для соц. сетей
      Plugin.CustomOgImages(),
    ],
  },
}
export default config
