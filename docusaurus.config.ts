import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const SITE_URL = "https://stackedpoker.io";
const SITE_TITLE = "Stacked Poker Docs";
const SITE_TAGLINE =
  "Create your own poker table, settled on-chain.";
const SITE_DESCRIPTION =
  "Documentation for Stacked Poker. Learn how to play poker in your browser — free play or real stakes settled in USDC on Base. No downloads, no KYC, no account.";
const SITE_KEYWORDS =
  "stacked poker, online poker, crypto poker, USDC poker, Base poker, texas holdem, onchain poker, web3 poker, poker docs";
const SITE_TWITTER = "@stacked_poker";
const SITE_OG_IMAGE = "img/preview-social-card.png";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Stacked Poker",
  url: "https://stackedpoker.io",
  description:
    "Play poker in your browser. Free play, or real stakes in USDC on Base. No downloads, no KYC, no account.",
  applicationCategory: "GameApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: {
    "@type": "Organization",
    name: "Stacked Poker",
    url: "https://stackedpoker.io",
    logo: {
      "@type": "ImageObject",
      url: "https://stackedpoker.io/IconMain.png",
    },
    sameAs: [
      "https://x.com/stacked_poker",
      "https://discord.gg/896EhkVYbd",
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
  onBrokenMarkdownLinks: "warn",

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
        href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/img/IconLogo.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        href: "/img/IconMain.png",
      },
    },
    {
      tagName: "meta",
      attributes: { name: "theme-color", content: "#0B1430" },
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

  markdown: { mermaid: true },
  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Stacked-Labs",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Stacked-Labs",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
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
      title: "Stacked",
      logo: {
        alt: "Stacked Logo",
        src: "img/IconLogo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://x.com/stacked_poker",
          className: "navbar_logo navbar_x",
          position: "right",
        },
        {
          href: "https://discord.gg/896EhkVYbd",
          className: "navbar_logo navbar_discord",
          position: "right",
        },
        {
          href: "https://t.me/stackedpoker",
          className: "navbar_logo navbar_telegram",
          position: "right",
        },
        {
          href: "https://github.com/Stacked-Labs",
          className: "navbar_logo navbar_github",
          position: "right",
        },
      ],
      hideOnScroll: true,
    },
    footer: {
      style: "light",
      logo: {
        alt: "Stacked Logo",
        src: "img/IconLogo.png",
        width: 44,
        height: 44,
      },
      links: [
        {
          title: "Product",
          items: [
            {
              label: "Play Now",
              href: "https://stackedpoker.io",
            },
            {
              label: "Create Game",
              href: "https://stackedpoker.io/create-game",
            },
            {
              label: "Leaderboard",
              href: "https://stackedpoker.io/leaderboard",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "What is Stacked?",
              to: "/docs/welcome/what-is-stacked",
            },
            {
              label: "Getting started",
              to: "/docs/getting-started/connect-a-wallet",
            },
            {
              label: "How Stacked works",
              to: "/docs/about/how-stacked-works",
            },
            {
              label: "Hosting",
              to: "/docs/hosting/overview",
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
              href: "https://discord.gg/896EhkVYbd",
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
      copyright: `The easiest way to play poker with friends, onchain. No downloads, no hassle — just pure poker action.<br/>© ${new Date().getFullYear()} Stacked Labs. All rights reserved.`,
    },
    colorMode: {
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