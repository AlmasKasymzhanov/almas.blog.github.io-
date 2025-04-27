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
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "ru-RU",
    baseUrl: "https://almas.blog",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter", // Использование шрифта Inter для заголовков как на slava.skp.kz
        body: "Inter", // Использование шрифта Inter для основного текста
        code: "JetBrains Mono", // Популярный моноширинный шрифт для кода
      },
      colors: {
        lightMode: {
          light: "#ffffff", // Чисто белый фон
          lightgray: "#f5f5f5",
          gray: "#e0e0e0",
          darkgray: "#86868b",
          dark: "#1d1d1f", // Почти черный текст, как на slava.skp.kz
          secondary: "#1d1d1f", // Почти черный для ссылок
          tertiary: "#1d1d1f", // Почти черный для акцентов
          highlight: "rgba(0, 0, 0, 0.08)", // Светло-серая подсветка
          textHighlight: "rgba(0, 0, 0, 0.08)",
        },
        darkMode: {
          light: "#1d1d1f", // Темно-серый фон, как на slava.skp.kz
          lightgray: "#2d2d2f",
          gray: "#424245",
          darkgray: "#86868b",
          dark: "#ffffff", // Белый текст
          secondary: "#ffffff", // Белые ссылки
          tertiary: "#ffffff", // Белые акценты
          highlight: "rgba(255, 255, 255, 0.08)", // Темно-серая подсветка
          textHighlight: "rgba(255, 255, 255, 0.08)",
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
      Plugin.CustomOgImages(),
    ],
  },
}
export default config
