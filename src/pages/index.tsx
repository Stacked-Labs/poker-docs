import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageLanding from "../components/HomepageFeatures/Homepage/HomepageLanding";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Help for Stacked Poker: how to play, host a game, and where your money sits."
    >
      <main>
        <HomepageLanding />
      </main>
    </Layout>
  );
}
