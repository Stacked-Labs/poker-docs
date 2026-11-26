import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const SITE_URL = "https://stackedpoker.io";
const SITE_TITLE = "Stacked Poker Docs";
const SITE_TAGLINE = "Host a game for your group chat, or run your own tournament.";
const SITE_DESCRIPTION =
  "Help for Stacked Poker: browser poker that any player can host, with every real-money buy-in held in that table's own contract. Free Play, cash tables and tournaments.";
const SITE_KEYWORDS =
  "stacked poker, online poker, host a poker game, home game, poker with friends, poker tournament, texas holdem, USDC poker, free poker, poker help";
const SITE_TWITTER = "@stacked_poker";
const SITE_OG_IMAGE = "img/preview-social-card.png";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Stacked Poker",
  url: "https://stackedpoker.io",
  description:
    "Browser poker that any player can host, with every real-money buy-in held in that table's own contract.",
  applicationCategory: "GameApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: {
    "@type": "Organization",
    name: "Stacked Poker",
    url: "https://stackedpoker.io",
    logo: {
      "@type": "ImageObject",
      url: "https://docs.stackedpoker.io/img/brand/stacked-icon-512.png",
    },
    sameAs: [
      "https://x.com/stacked_poker",
      "https://discord.gg/xdaC5gRP4E",
      "https://t.me/stackedpoker",
      "https://github.com/Stacked-Labs",
    ],
  },
};

const config: Config = {
  title: SITE_TITLE,
  tagline: SITE_TAGLINE,
  favicon: "img/favicon.ico",

  url: SITE_URL,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Stacked", // Usually your GitHub org/user name.
  projectName: "Stacked", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "true",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "stylesheet",
        // Barlow in three widths, the same six files poker-game loads in app/layout.tsx.
        href: "https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Barlow+Condensed:ital,wght@1,800&family=Barlow+Semi+Condensed:wght@700&display=swap",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/img/brand/apple-touch-icon.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        href: "/img/brand/stacked-icon-512.png",
      },
    },
    {
      tagName: "meta",
      // Bone, the page ground (poker-game uses the same value for its light theme colour).
      attributes: { name: "theme-color", content: "#F3EEE4" },
    },
    {
      tagName: "meta",
      attributes: { name: "application-name", content: "Stacked Poker" },
    },
    {
      tagName: "meta",
      attributes: {
        name: "apple-mobile-web-app-title",
        content: "Stacked Poker",
      },
    },
    {
      tagName: "script",
      attributes: { type: "application/ld+json" },
      innerHTML: JSON.stringify(jsonLd),
    },
    { tagName: "meta", attributes: { name: "description", content: SITE_DESCRIPTION } },
    { tagName: "meta", attributes: { name: "keywords", content: SITE_KEYWORDS } },
    { tagName: "meta", attributes: { name: "author", content: "Stacked Labs" } },
    { tagName: "meta", attributes: { name: "robots", content: "index, follow" } },
    { tagName: "meta", attributes: { property: "og:type", content: "website" } },
    { tagName: "meta", attributes: { property: "og:site_name", content: "Stacked Poker" } },
    { tagName: "meta", attributes: { property: "og:title", content: SITE_TITLE } },
    { tagName: "meta", attributes: { property: "og:description", content: SITE_DESCRIPTION } },
    { tagName: "meta", attributes: { property: "og:url", content: SITE_URL } },
    { tagName: "meta", attributes: { property: "og:image", content: `${SITE_URL}/${SITE_OG_IMAGE}` } },
    { tagName: "meta", attributes: { property: "og:locale", content: "en_US" } },
    { tagName: "meta", attributes: { name: "twitter:card", content: "summary_large_image" } },
    { tagName: "meta", attributes: { name: "twitter:site", content: SITE_TWITTER } },
    { tagName: "meta", attributes: { name: "twitter:creator", content: SITE_TWITTER } },
    { tagName: "meta", attributes: { name: "twitter:title", content: SITE_TITLE } },
    { tagName: "meta", attributes: { name: "twitter:description", content: SITE_DESCRIPTION } },
    { tagName: "meta", attributes: { name: "twitter:image", content: `${SITE_URL}/${SITE_OG_IMAGE}` } },
  ],

  markdown: { hooks: { onBrokenMarkdownLinks: "warn" } },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    customCss: [require.resolve("./src/css/custom.css")],
    image: SITE_OG_IMAGE,
    navbar: {
      title: "Docs",
      logo: {
        alt: "Stacked Poker",
        src: "img/brand/stacked-logo-ink.svg",
        srcDark: "img/brand/stacked-logo-white.svg",
        href: "/",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Guides",
        },
        {
          to: "/docs/reference/faq",
          position: "left",
          label: "FAQ",
        },
        {
          href: "https://stackedpoker.io",
          position: "right",
          label: "Play",
          className: "navbar__cta",
        },
      ],
      hideOnScroll: false,
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Stacked Poker",
          items: [
            {
              label: "Play",
              href: "https://stackedpoker.io/public-games",
            },
            {
              label: "Events",
              href: "https://stackedpoker.io/public-games?format=tournaments",
            },
            {
              label: "Host",
              href: "https://stackedpoker.io/create-game",
            },
            {
              label: "Ranks",
              href: "https://stackedpoker.io/leaderboard",
            },
          ],
        },
        {
          title: "Help",
          items: [
            {
              label: "What is Stacked Poker?",
              to: "/docs/welcome/what-is-stacked",
            },
            {
              label: "Your first Free Play hand",
              to: "/docs/getting-started/first-free-play-hand",
            },
            {
              label: "Hosting",
              to: "/docs/hosting/overview",
            },
            {
              label: "Where your money sits",
              to: "/docs/your-money/custody",
            },
            {
              label: "The 24-hour exit",
              to: "/docs/your-money/emergency-exit",
            },
            {
              label: "FAQ",
              to: "/docs/reference/faq",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "X",
              href: "https://x.com/stacked_poker",
            },
            {
              label: "Discord",
              href: "https://discord.gg/xdaC5gRP4E",
            },
            {
              label: "Telegram",
              href: "https://t.me/stackedpoker",
            },
            {
              label: "GitHub",
              href: "https://github.com/Stacked-Labs",
            },
          ],
        },
      ],
      copyright: `Stacked Poker is browser poker that any player can host, with every real-money buy-in held in that table's own contract.<br/>© ${new Date().getFullYear()} Stacked Labs`,
    },
    colorMode: {
      defaultMode: "light",
      respectPrefersColorScheme: false,
      disableSwitch: false,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
    },
    sidebar: {
      className: "custom-sidebar",
      hideable: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;