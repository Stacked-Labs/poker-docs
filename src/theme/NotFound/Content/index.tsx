import React from "react";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

export default function NotFoundContent(): JSX.Element {
  return (
    <main className="container margin-vert--xl">
      <div className="row">
        <div className="col col--6 col--offset-3">
          <Heading as="h1">This page isn't here</Heading>
          <p>
            It may have moved when we updated the docs. Try the{" "}
            <Link to="/">docs home</Link>, the{" "}
            <Link to="/docs/reference/faq">FAQ</Link>, or ask us on{" "}
            <Link to="https://discord.gg/xdaC5gRP4E">Discord</Link>.
          </p>
        </div>
      </div>
    </main>
  );
}
