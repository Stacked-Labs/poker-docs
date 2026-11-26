# Stacked Docs — Style & Terminology Rubric

This file is the contract every page in `docs.stackedpoker.io` must satisfy. It supersedes any pattern in the existing pre-rewrite docs. When in doubt, this doc wins.

## Changed on 25 Nov 2026

The Bone and felt rebrand was approved on 25 Nov 2026. The canon for what we are, the money words, the navigation names and the claims we do not make is now `poker-game/PRODUCT.md`; this file follows it and adds what is specific to docs. Pages written before that date still carry the old words, so search for these when you touch one:

| Retired | Write |
|---|---|
| "Your table. Your money." as a headline or tagline; "Your Table. Your Rules." | The public line (see below) |
| Deposit, Add money, Buy | Add funds, for money going into the wallet balance. Money taken to a table is a buy-in |
| Withdraw, Send | Cash out, for wallet balance going to an exchange, wallet or bank. Leaving a table: "Stand up any time and your table stack returns to your wallet balance." "Withdraw" only for the 24-hour exit |
| Emergency withdrawal, emergency exit, self-withdraw | 24-hour exit |
| Entry fee | Buy-in |
| GTD | Prize pool. "Guaranteed" only when the guarantee is funded |
| Freeroll | Free Play |
| Rake | Platform fee |
| Stablecoin | USDC, defined on first use |
| on-chain | onchain (one word) |
| Log in, Connect, Connect wallet | Sign in |
| Lobby, Tournaments, Create game, Leaderboard, as the names of places in the app | Play, Events, Host, Ranks |
| Chips in play | Table stack |
| In your account, Available | Wallet balance |
| Banker, bank | Host |

## Audience

Recreational players. Mostly **not** crypto-native. Mostly **not** poker pros. Comfortable with Texas Hold'em basics; not comfortable with L2s, gas, smart contracts, or stablecoins as concepts.

Two implications:
- Define crypto terms on first use **on each page**, in a sentence, in player words. There is no glossary — definitions live inline. If a term recurs many times within a single page, define once at the top and use freely after.
- Don't assume poker depth past Hold'em fundamentals. Concepts like the platform fee structure, ICM, position dynamics need a sentence of framing.

## What Stacked is, and the public line

**Stacked Poker is browser poker that any player can host, with every real-money buy-in held in that table's own contract.**

Use that sentence wherever a page needs to say what Stacked is. The public line, which is the page-1 headline and the site tagline, is:

> Host a game for your group chat, or run your own tournament.

Both are set in `poker-game/PRODUCT.md` (What we are); do not reword them. Order of the story: poker first, trust second, crypto last. The description is chain-neutral: name Base where settlement is the subject, not in descriptions of what Stacked is.

"Your table. Your money." was the one-line hook from 17 Nov 2026 until the rebrand. It is retired as a headline and a tagline; do not use it on a docs page (retired outright, confirmed by Denis on 26 Nov 2026). The earlier hooks stay retired too: the homepage's "Your Table. Your Rules." and "Create your own poker table, settled on-chain."

The brand as a whole (voice, claims, look) is recorded in the Notion **Brand book** (Stacked Poker HQ / Product). This file stays the rubric for docs wording and wins for docs pages. Anything public is also checked with the workspace skill `stacked-brand-guard`.

## Terminology — fixed

| Term | Definition | Capitalization |
|---|---|---|
| **Stacked Poker**, then **Stacked** | The product. "Stacked Poker" on first mention in running text, "Stacked" after that. Never "Stacked Poker on Base", "SP" or "Stackedpoker". STACKED in capitals is the logo, never a word in a sentence. | Title case. |
| **Host** | The player who creates a table. Earns 25% of the platform fee on real-money tables they host. (Internally also called `gameCreator`. **Never write "Banker" in player docs** — that term is killed.) | Title case as a role. Lowercase as a verb: "you can host a table." |
| **Free Play** | Play chips, no signup. Chips have no real value, no platform fee, Hosts earn nothing. Listed beside real-money tables, clearly tagged. Never "freeroll". | Title case, two words. |
| **Real-money** | USDC-staked tables. 1 chip = $0.01. | Hyphenated, lowercase. |
| **USDC** | The digital dollar that buy-ins, pots and payouts are paid in. On first use per page: "USDC is a digital dollar that holds a stable value." Never call it a "stablecoin" in player copy. | All caps. |
| **Base** | The blockchain (Coinbase's L2) we run on. On first use per page: "Base, an Ethereum-based network with very low fees." | Title case. Don't write "L2" without explaining. |
| **Wallet** | Where a player's money sits away from the table. Can be brought-your-own (Coinbase Wallet, MetaMask, Rainbow, etc.) or an embedded wallet we provide. The one label for getting in is **Sign in** ("Signing in creates your account and wallet."), never "Log in", "Connect" or "Connect wallet". | Lowercase. |
| **Settlement** | The onchain transfer of chip movements after each hand. Happens every hand, under 5 seconds in the background, ~$0.001 in fees. | Lowercase. |
| **Platform fee** | The fee on real-money tables. The **player-facing term is "platform fee"; "rake" must NEVER appear in player copy.** **Production source of truth is `poker-server/poker/rake.go` — not the smart-contract docs (those are stale).** Currently: **4% of the pot, capped per hand by a continuous cap curve** that scales with the big blind. The cap rises gently with stakes (around $1.30 at $0.05/$0.10, leveling out at $6.00 for high stakes). Short-handed tables get a discount: heads-up pays 34% of the cap, 3–4 handed pays 50%, 5+ handed pays the full cap. All parameters are env-tunable. The platform fee also covers the gas Stacked sponsors for settlement and table creation — a benefit worth surfacing in copy. **Outside the dedicated Fees page (/docs/your-money/fees), only ever say "Hosts earn 25% of the platform fee"** — never quote the 4% headline, never quote cap numbers, never quote the 75/25 split. Those numbers live on one page only. **Never mention the platform fee in Free Play context** — Free Play has no platform fee; let it be implied. **Tournaments charge the platform fee differently** — it's a percentage of the buy-in on a tier schedule (not a per-pot cap curve), and those tier numbers also live on the Fees page only (and the technical Smart contracts reference). The Tournaments page links to the Fees page rather than quoting tiers. | Lowercase. |

**Money words.** One term per money object, defined in `poker-game/PRODUCT.md` (Money words). Use them exactly: Wallet balance, Add funds, Buy in (buy-in as a noun), Table stack, Cash out, 24-hour exit, Prize pool, Free Play, Platform fee, Sign in, onchain. "Withdraw" appears only for the 24-hour exit; the approved sentence is "If hands stop settling for 24 hours, you can withdraw your own stack." Write "guaranteed" only for a guarantee that is funded; otherwise the event has a prize pool.

**Navigation names.** When a page tells a player where to tap, use the labels they see: Play · Events · Host · Ranks · You (`poker-game/PRODUCT.md`, Navigation). The route paths have not moved.

**Amounts.** In a sentence, dollars: "Buy in for $10", "Cash out $100.00". A partner token is an amount and a ticker with no dollar value: "50,000 PDX".

## The hybrid architecture (canonical framing)

Stacked is **hybrid by design**: Stacked's servers run the live game (dealing, betting rounds, turn order, table state); smart contracts on Base hold the USDC and settle every hand onchain. This isn't a compromise: each part handles what it's best at. Our servers give players fast gameplay; the contracts give them onchain custody and settlement anyone can verify.

Always describe this as **two systems, each doing what it's good at**, not "centralized but with onchain settlement bolted on." Never claim Stacked is "fully decentralized" or "no central operator." Players will find out either way; honesty is the trust story.

Describe it at a **high level only** — see **Technical exposure** below. This framing applies on: What is Stacked?, How Stacked works, Custody, Per-hand settlement, About → Architecture.

## Technical exposure (describe outcomes, not mechanisms)

Player docs are public, and competitors read them. Reveal **what players get**, never **how it's wired**. The rule of thumb: describe outcomes and guarantees, not implementation. Keep the honesty (above) without handing out a blueprint.

**Never put in player docs:**
- **How settlement works after each hand.** No "the backend sends a settlement transaction/report to the contract," no settlement reports, webhooks, events (e.g. a "ChipsSettled" event), settlement wallets, or any backend↔contract message choreography. Say only that the hand settles onchain when it ends.
- **Infrastructure and vendors.** Never name third-party infra (e.g. thirdweb) or the relayer/"engine" that submits transactions and sponsors gas. For wallets, say "popular wallets" or list the brands (Coinbase Wallet, MetaMask, Rainbow, WalletConnect); for the provided wallet, "an embedded wallet Stacked creates for you."
- **The backend stack.** Never name the language or framework (no "Go backend"). Say "Stacked's servers."
- **Revealing diagrams.** No architecture/sequence diagrams showing backend↔contract messaging, settlement reports, events, gas-payment edges, or internal platform-fee routing. Keep diagrams to the player's own money flow (your wallet → table contract → your wallet), ≤3–4 nodes, no internal mechanism.

**Keep (these are player-facing outcomes and trust facts, not blueprints):**
- Each real-money table is its own smart contract deployed on Base when the Host creates it (per-table contracts).
- Your USDC sits in that contract, not with Stacked; only the contract's rules can move it; you sign your own buy-ins and the return of your own table stack.
- Every real-money hand settles onchain when it ends; it's fast (typically under 5 seconds on Base) and runs in the background.
- You never pay gas for settlement or table creation — Stacked covers those. State it as a player benefit, not as the mechanism ("Stacked sends the transaction and pays the gas").
- The 24-hour exit.
- Verifiability: contracts are source-verified and readable on Basescan; settlement outcomes are visible onchain.

## Sport coverage

Don't write "Texas Hold'em" as if it's the whole product. Stacked plans to expand to other variants. Use **"poker"** as the umbrella term in front-page and overview copy. Specific variant pages (Cash game rules, etc.) can name the variant they cover.

## Killed terms

Do not use anywhere in player-facing copy:
- "Banker" / "banker" / "bank": replaced by Host (player role) or "the table contract" / "onchain custody" (the smart-contract escrow)
- "rake" — player-facing term is "platform fee" (source code may still use rake)
- "Comprehensive" page — duplicate, deleted
- "Web3": replace with "wallet" or "onchain" depending on context
- "DeFi" — never appears in player docs
- "ERC-20" — say "the token standard for USDC" if the concept is genuinely needed; usually skip
- "Endpoint", "deprecated", "refactored", "migrated", "schema", "WebSocket" — engineering jargon, translate to player impact
- The words retired on 25 Nov 2026: Deposit, Withdraw (outside the 24-hour exit), Entry fee, GTD, Freeroll, Stablecoin, on-chain, Log in. The full list with replacements is under "Changed on 25 Nov 2026" above.

## Voice rules

1. **Every page opens with one sentence ending in a period that says why this exists, before any heading or list.** This is the value prop. Mechanics come after.
2. **Lead with the player's perspective, not the system's.** Write "After each hand, your share moves into the onchain contract", not "the backend invokes settleHand()."
3. **Concrete numbers > vague adjectives.** Don't say "fast" — say "typically under 5 seconds, depending on Base network conditions." Don't say "low fees" — say "about $0.001 per hand."
4. **Translate every developer-internal change to player impact.** Not "we refactored the lobby" — "tables now load faster."
5. **No exclamation marks.** No emoji. No marketing puffery. Calm, factual, confident.
6. **One concrete walkthrough per major feature.** A specific scenario with specific numbers ("Alice hosts a $1/$2 table, Bob buys in for $100 and is seated, the contract issues 10,000 chips..."). Players model the system from examples, not abstractions.

## Page-opening template

```
[One sentence: what this is and why it exists.]

[Optional: one sentence framing the section's structure if the page is long.]

## What it is
[2–4 sentences. Plain language. No mechanics yet.]

## How it works
[Mechanics. With numbers. Concrete.]

## Walkthrough
[A specific scenario. Real names like Alice and Bob. Actual numbers.]

## FAQ / Edge cases (optional)
[Three to five real questions a player would ask.]
```

## What we say (and don't)

**We can claim, today:**
- Cash-table hands settle onchain one by one. Tournament hands do not: a tournament pays out through its event contract when it ends.
- **Stacked sponsors all backend gas: settlement gas (every hand) and table-deployment gas (when a Host creates a table) are paid by Stacked, not the player or Host.** Players who signed in with a social account, email or phone (embedded wallet: Google, Discord, Telegram, X, Apple, Twitch, email or phone number) pay no gas at all: deposits and withdrawals are sponsored too. Players who connected their own wallet pay gas on actions they sign themselves (depositing into a table, withdrawing back to their wallet), so they need a little ETH on Base. Always state the split; never write "you never need ETH". Phrase as: "Stacked covers the gas, so you never pay to settle a hand" / "Creating a table is free. Stacked covers the deployment cost."
- ~$0.001 per settlement (Base gas).
- The 24-hour exit: if hands stop settling for 24 hours, players withdraw a table's money themselves. **Lead with this on the custody/safety page.** It's the single strongest trust story. The approved sentence: "If hands stop settling for 24 hours, you can withdraw your own stack."
- Platform fee details (cash: 4% of pot, BB-tiered caps, 75/25 split; tournaments: buy-in tier schedule, 75/25 split) live on the dedicated Fees page (/docs/your-money/fees) only. Everywhere else: "Hosts earn 25% of the platform fee." Free Play pages don't mention the platform fee at all. Source of truth: cash fees in `poker-server/poker/rake.go`; tournament fee tiers in `poker-server/transport/http/tournament_handler.go` (`cryptoTournamentRakeBps`), not the older smart-contract docs.
- Both BYO and embedded wallets supported.
- Any popular wallet works (Coinbase Wallet, MetaMask, Rainbow, WalletConnect). Don't name the wallet-integration vendor.
- Free table creation (gas sponsored at launch — phrase as current behavior, not a permanent guarantee).
- Tables auto-seat by default (Auto-Accept is on for every new table, cash and Free Play). A Host can turn Auto-Accept off in the table's Settings tab and approve each player by hand. Never write that every table requires Host approval.
- Cash games and buy-in tournaments. Tournament mechanics and fees may be documented (see the Tournaments page and the tournament section of the Fees page).

**We do not say:**
- **No "no KYC" marketing claim.** Don't state or imply Stacked has "no KYC" / "no identity verification" / "no account verification." Stacked isn't implementing KYC today but **reserves the right to require identity checks later**, so we never promise their absence. Equally, don't announce KYC. Stay silent on KYC in player copy; strip any no-KYC claims if found.
- No specific list of blocked jurisdictions until legal finalizes — the "Where Stacked is available" page ships with a placeholder.
- No fiat-onramp claims beyond what ships: signed-in players can buy USDC by card inside the app (the "Add funds" button in the header, and at a table or tournament when short). Don't promise Apple Pay, Google Pay or bank transfer, and don't name the payment provider.
- Contract addresses live on the **Smart contracts** technical reference page (/docs/reference/smart-contracts) only — both Base mainnet and Base Sepolia. Keep raw addresses and implementation/beacon/admin details on that page; never put them in player-voice pages.
- No "provably fair" language. Today's RNG is server-side; commit-reveal / onchain shuffle is on the roadmap, framed as "coming."
- No claim that hands settle "instantly" — settlement is fast, but not synchronous to gameplay.
- No "audited" claim — contracts are not audited yet (44 Foundry unit tests pass; audit is on the roadmap).

## Roadmap stance

A single lightweight "What's next" page. No quarter commitments, no dates. Themes only: provably-fair RNG, more wallets, jurisdiction expansion (tournaments have shipped — they now have their own page). Update together when reality changes. The old `roadmap.md` (dated Q-by-Q for 2024–2025) is deleted in this rewrite.

## Cross-cutting cleanup the rewrite will perform

- Delete: `marketplan/` (investor content), `stacked-comprehensive.md` (duplicate), old `roadmap.md`, orphaned images (`chips.png`, `stacked-logo.png`, `logo.svg`, `tile1.png`).
- Add: glossary, troubleshooting, "Where Stacked is available" (with TODO), Hosting section, Free Play page, custody/safety page with the 24-hour exit headline.
- Restructure: Getting Started becomes a real progression (wallet → USDC → first Free Play hand → first real-money hand) instead of two abstract pages.

## Verification checklist for any page

- [ ] First sentence ends with a period before any heading or bullet, and tells the reader why the page exists.
- [ ] Every crypto term is defined on first use on this page (in a sentence, in player words). No glossary cross-links — definitions are inline.
- [ ] No engineering jargon from the killed-terms list.
- [ ] At least one concrete number where a vague adjective could appear.
- [ ] At least one walkthrough or example, unless the page is genuinely glossary-style.
- [ ] Banker is never written. Host is.
- [ ] If the page makes a claim, that claim is on the "we can say today" list. If not, it's deleted or moved to roadmap.

## Source-of-truth note

Internal docs (`poker-server/docs/CryptoPlan/*`, `poker-server/contracts/docs/*`) are useful for grounding facts but **not authoritative for the player-facing voice**. Many describe target state, not shipped state. Always confirm specifics with product before publishing.

`poker-game/PRODUCT.md` is the exception. Since 25 Nov 2026 it is the canon for what we are, the money words, the navigation names and the claims we do not make, and Taro's Brand book in Notion wins over it. Where this file and `PRODUCT.md` disagree on a word, `PRODUCT.md` is right and this file is stale: fix this file.
