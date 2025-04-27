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
    locale: "ru-RU", // Изменено на русский язык
    baseUrl: "https://almas.blog",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Montserrat",
        body: "Open Sans",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff", // Чисто белый фон
          lightgray: "#f0f0f0",
          gray: "#c0c0c0",
          darkgray: "#808080",
          dark: "#000000", // Чисто черный текст
          secondary: "#000000", // Черные ссылки
          tertiary: "#000000", // Черные акценты
          highlight: "rgba(0, 0, 0, 0.10)", // Светло-серая подсветка
          textHighlight: "rgba(0, 0, 0, 0.10)",
        },
        darkMode: {
          light: "#000000", // Чисто черный фон
          lightgray: "#1a1a1a",
          gray: "#404040",
          darkgray: "#c0c0c0",
          dark: "#ffffff", // Чисто белый текст
          secondary: "#ffffff", // Белые ссылки
          tertiary: "#ffffff", // Белые акценты
          highlight: "rgba(255, 255, 255, 0.10)", // Темно-серая подсветка
          textHighlight: "rgba(255, 255, 255, 0.10)",
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
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}
export default config
