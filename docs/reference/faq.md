---
sidebar_position: 80
---

# FAQ

Quick answers to the questions we hear most. Each one links to the page with more.

## Custody and trust

**Does Stacked Poker hold my money?**
No. Every real-money buy-in sits in that table's own smart contract, a program that runs on the blockchain and only moves money according to its own rules. The contract lives on Base, an Ethereum-based network with very low fees. Stacked itself never holds player money. See [How custody works](/docs/your-money/custody).

**What if Stacked goes down?**
Your money is still in the contract. If hands stop settling for 24 hours, you can withdraw your own stack straight from the contract, with no help from Stacked. See [The 24-hour exit](/docs/your-money/emergency-exit).

**Are the contracts audited?**
Not yet by an external firm. The contracts have extensive unit-test coverage and are source-verified on Basescan. An external audit is on the roadmap. See [How custody works](/docs/your-money/custody).

**How are the cards shuffled?**
The shuffle happens on Stacked's servers using cryptographic randomness. Players can't check a shuffle themselves yet. An onchain shuffle check is on the roadmap.

## Playing

**Do I need an account to play Free Play?**
No. Free Play needs no signup: open Play or a friend's table link, pick a name and sit down. To play for real money you need USDC in a wallet. USDC is a digital dollar that holds a stable value. If you don't have a wallet, sign in with a social account, email or phone and Stacked creates one for you.

**Do I have to wait for the Host to approve me?**
Usually not. Tables seat you instantly by default. A Host can turn off Auto-Accept to approve each player by hand, and at those tables you wait for the Host. See [Joining a table](/docs/playing/joining-a-table).

**What if I lose my connection mid-hand?**
The action timer keeps running. If you don't act before it expires, you fold. If you come back in time, you can keep playing the hand.

**Can I sit at multiple tables at once?**
Yes. Each table is independent. Your table stack at one table doesn't affect another.

**Some tournaments show a prize in a token that isn't USDC. What is that?**
A bonus prize: a fixed amount of another token that the Host funded themselves, paid to the top finishers on top of the USDC. It's funded before registration opens, so an advertised one is always real. See [Bonus prizes](/docs/playing/bonus-prizes).

## Hosting

**Who can host a table?**
Anyone who signs in. Creating a table is free: Stacked covers the gas, the small network fee paid to process anything on Base. See [Hosting a table](/docs/hosting/overview).

**How much can a Host earn?**
Hosts earn 25% of the platform fee on real-money tables they create. At a cash table it is credited live as hands settle, and the Host can collect it any time with no minimum. See [What Hosts earn](/docs/hosting/earnings).

**Do Hosts earn anything on Free Play tables?**
No. Free Play has no platform fee and no earnings.

**Can I put up my own token as a tournament prize?**
Tokens usable as bonus prizes come from a short curated list, so you can't add one yourself. If you're a project or community that wants yours on it, [ask on Discord](https://discord.gg/xdaC5gRP4E). See [Bonus prizes](/docs/playing/bonus-prizes).

## Money

**What's the fee?**
The platform fee applies on real-money play. At a cash table it is taken from the pot, and Hosts earn 25% of it. The platform fee also covers the gas (the network fee for an onchain action) that Stacked sponsors on your behalf, to settle every cash-table hand and to create a table. That's why settling hands and creating tables are free for everyone at the table. See [How fees work](/docs/your-money/fees).

**Do I pay gas?**
Gas is the network fee for an onchain action. If you signed in with a social account, email or phone, no: Stacked covers it. If you signed in with your own wallet, you pay gas only on actions you sign yourself, like buying in, so keep a small amount of ETH (the coin that pays network fees on Base). Either way, the platform fee covers the gas Stacked sponsors on settlement and on table creation.

**Where do I get USDC on Base?**
Once you're signed in, tap **Add funds** in the header. You can buy USDC with a card, or send it from an exchange like Coinbase (choose Base as the network). See [Add funds](/docs/getting-started/get-usdc-on-base).

**How do I get my money back from a table?**
Stand up between hands, then tap **Cash out** and your table stack returns to your wallet balance. See [Cash out](/docs/your-money/withdrawals).

## Access

**Is Stacked available in my country?**
We're finalizing the geographic availability list. See [Where Stacked is available](/docs/reference/availability) for the current status.

**Does Stacked run tournaments?**
Yes. Stacked runs buy-in tournaments alongside cash games. A tournament pays out through its event contract when it ends. See [Tournaments](/docs/playing/tournaments).

**Can I play on my phone?**
Yes. Stacked works in any modern browser, including mobile.

## What's next

- [Troubleshooting →](/docs/reference/troubleshooting): when something goes wrong.
- [How custody works →](/docs/your-money/custody)
- [Hosting a table →](/docs/hosting/overview)
