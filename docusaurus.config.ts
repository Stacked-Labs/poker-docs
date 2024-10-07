import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Stacked",
  tagline: "Your crypto poker arena",
  favicon: "img/stacked-logo.ico",

  // Set the production url of your site here
  url: "https://stackedpoker.io",
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
  ],

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
    // Replace with your project's social card
    customCss: [require.resolve("./src/css/custom.css")],
    image: "img/stacked-logo.png",
    navbar: {
      title: "Stacked",
      logo: {
        alt: "Stacked Logo",
        src: "img/chips.png",
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
          href: "https://discord.gg/R42388MfDd",
          className: "navbar_logo navbar_discord",
          position: "right",
        },
        {
          href: "https://warpcast.com/stackedpoker",
          className: "navbar_logo navbar_warpcast",
          position: "right",
        },
        {
          href: "https://github.com/Stacked-Labs",
          className: "navbar_logo navbar_github",
          position: "right",
        },
      ],
      hideOnScroll: true,
      style: "dark",
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "/docs/introduction",
            },
            {
              label: "Getting Started",
              to: "/docs/category/getting-started",
            },
            {
              label: "How it works",
              to: "/docs/howitworks", 
            },
            {
              label: "Market Plan",
              to: "/docs/category/market-plan",
            },
            {
              label: "Roadmap",
              to: "/docs/roadmap",
            },
            {
              label: "FAQs",
              to: "/docs/faq",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/R42388MfDd",
            },
            {
              label: "X",
              href: "https://x.com/stacked_poker",
            },
            {
              label: "Warpcast",
              href: "https://warpcast.com/stackedpoker",
            },
            {
              label: "Github",
              href: "https://github.com/Stacked-Labs",
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Stacked Labs`,
    },
    colorMode: {
      disableSwitch: true,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    sidebar: {
      className: "custom-sidebar",
      hideable: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;