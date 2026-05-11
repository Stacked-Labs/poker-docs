# `❓-faq` — final copy

Read-only pinned post. Twenty questions, no fluff. Every answer ends with a link to the relevant docs page so the FAQ doesn't drift away from product reality.

---

# FAQ

The questions we get the most. If yours isn't here, ask in `🛟-support`.

## The basics

**What is Stacked?**
A poker platform where every table is created by a player and every real-money hand settles to USDC on Base. [More →](https://docs.stacked.gg/docs/welcome/what-is-stacked)

**Do I need an account?**
No. No email, no signup, no KYC. You connect a wallet — Coinbase Wallet, MetaMask, Rainbow, WalletConnect, or the embedded wallet Stacked provides if you don't have one.

**What does it cost to play?**
Real-money tables take rake (a small cut of each pot, like every poker room). Free Play tables don't take rake. There are no subscriptions, no signup fees, and Stacked covers gas on every settlement — you never pay to settle a hand.

**Is there a Stacked token?**
No. No airdrop, no presale, no "claim" page. There will not be one. Anything claiming otherwise is a scam.

## Money

**Where is my money when I'm sitting at a table?**
In the table's smart contract on Base. Not with Stacked. [Custody →](https://docs.stacked.gg/docs/your-money/custody)

**How fast does a hand settle?**
Typically sub-second after the hand ends, depending on Base network conditions. [Settlement →](https://docs.stacked.gg/docs/your-money/settlement)

**What if something goes wrong and a settlement stalls?**
Every real-money table contract has a 24-hour emergency exit. After 24 hours, you can withdraw your stack directly from the contract without needing approval from us. No support ticket required.

**Who pays gas?**
Stacked does, for hand settlement. You'll pay gas on Base for your own deposits, withdrawals, and any direct contract interactions.

**What about taxes?**
We can't give tax advice. Every real-money transaction is on-chain and visible from your wallet's history, which makes record-keeping straightforward.

## Playing

**What variants are available?**
Texas Hold'em cash games today. Tournaments are on the roadmap; other variants are an idea, not a commitment. [What's next →](https://docs.stacked.gg/docs/about/whats-next)

**What's the difference between Free Play and real-money?**
Same game, same lobby, same UI. Free Play uses play-money chips with no real value and no rake. Real-money uses USDC and settles on-chain. Free Play tables are clearly tagged.

**How do I join a table?**
The app's lobby shows all open tables. Some are public; some require host approval. Hosts can also share a direct link.

**Is the shuffle fair?**
Today, the shuffler is standard server-side cryptographic randomness. Provably-fair, commit-reveal shuffling is on the roadmap. [Security →](https://docs.stacked.gg/docs/about/security)

## Hosting

**Anyone can host?**
Yes. Every table is created by a player. On real-money tables you host, you earn 25% of the rake — paid out on-chain whenever you withdraw. [Hosting →](https://docs.stacked.gg/docs/hosting/overview)

**How do I get the `Host` role in Discord?**
Open a ticket in `🛟-support` with topic *Apply to host*. We'll walk through it. The role unlocks the `🛠️ HOSTS` category and lets you post in `💵-real-money-tables`.

**Can I run private tables?**
Yes. Hosts approve who sits. You can run a table for friends only, or open seats to the lobby.

## Security and safety

**Are the contracts audited?**
The contracts are source-verified and unit-tested. An external audit is on the roadmap before we expand stakes. [Security →](https://docs.stacked.gg/docs/about/security)

**Why is no one DMing me from "Stacked Support"?**
Because real Stacked support doesn't DM you. Every account that DMs you claiming to be the team is fake. Report in `🛟-support` and block.

**What do I do if I think a hand was wrong?**
Open a ticket in `🛟-support` with the table contract address. Engineering pulls the on-chain settlement and walks through what happened. The contract is the source of truth.

**What if I have a security vulnerability to report?**
Open a ticket in `🛟-support` and mark it *Security*. Don't post details in public. We'll move it to a private channel with Engineering.
