import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageLanding from "../components/HomepageFeatures/Homepage/HomepageLanding";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Crypto-native poker, real cash games settled in USDC on Base. Built for players, not converts."
    >
      <main>
        <HomepageLanding />
      </main>
    </Layout>
  );
}
