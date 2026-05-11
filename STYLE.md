# Stacked Docs — Style & Terminology Rubric

This file is the contract every page in `docs.stackedpoker.io` must satisfy. It supersedes any pattern in the existing pre-rewrite docs. When in doubt, this doc wins.

## Audience

Recreational players. Mostly **not** crypto-native. Mostly **not** poker pros. Comfortable with Texas Hold'em basics; not comfortable with L2s, gas, smart contracts, or stablecoins as concepts.

Two implications:
- Define crypto terms on first use **on each page**, in a sentence, in player words. There is no glossary — definitions live inline. If a term recurs many times within a single page, define once at the top and use freely after.
- Don't assume poker depth past Hold'em fundamentals. Concepts like rake structure, ICM, position dynamics need a sentence of framing.

## The one-line hook

**Create your own poker table, settled on-chain.**

This is the page-1 headline and the line we lean on across the site. It says the two things that distinguish Stacked: (1) the product is a Host-led marketplace, not a centralized poker room; (2) every hand settles on-chain, not in a back-office ledger.

## Terminology — fixed

| Term | Definition | Capitalization |
|---|---|---|
| **Stacked** | The product. | Title case. |
| **Host** | The player who creates a table. Earns 25% of the rake on real-money tables they host. (Internally also called `gameCreator`. **Never write "Banker" in player docs** — that term is killed.) | Title case as a role. Lowercase as a verb: "you can host a table." |
| **Free Play** | Play-money mode. Chips have no real value, no rake, Hosts earn nothing. Same lobby as real-money, clearly tagged. | Title case, two words. |
| **Real-money** | USDC-staked tables. 1 chip = $0.01. | Hyphenated, lowercase. |
| **USDC** | Stablecoin we use. Pegged to the US dollar. On first use per page: "USDC, a digital dollar that holds a stable value." | All caps. |
| **Base** | The blockchain (Coinbase's L2) we run on. On first use per page: "Base, an Ethereum-based network with very low fees." | Title case. Don't write "L2" without explaining. |
| **Wallet** | The app a player connects to play. Can be brought-your-own (Coinbase Wallet, MetaMask, Rainbow, etc.) or an embedded wallet we provide. | Lowercase. |
| **Settlement** | The on-chain transfer of chip movements after each hand. Happens every hand, ~30 seconds in the background, ~$0.001 in fees. | Lowercase. |
| **Rake** | The platform fee on real-money tables. **Production source of truth is `poker-server/poker/rake.go` — not the smart-contract docs (those are stale).** Currently: **4% of the pot, capped per hand by a big-blind-tiered schedule**. The cap multiplier shrinks as stakes go up (10×BB at micro, 0.5×BB at high). All values are env-tunable. **Outside the dedicated Rake page, only ever say "Hosts earn 25% of rake"** — never quote the 4% headline, never quote the cap tiers, never quote the 75/25 split. Those numbers live on one page only. **Never mention rake in Free Play context** — Free Play has no rake; let it be implied. | Lowercase. |

## The hybrid architecture (canonical framing)

Stacked is **hybrid by design**: a Go backend runs the live game (dealing, betting rounds, turn order, table state); smart contracts on Base hold the USDC and settle every hand on-chain. This isn't a compromise — each part handles what it's best at. The backend gives players sub-second gameplay; the contracts give them on-chain custody and provable settlement.

Always describe this as **two systems, each doing what it's good at**, not "centralized but with on-chain settlement bolted on." Never claim Stacked is "fully decentralized" or "no central operator." Players will find out either way; honesty is the trust story.

This framing applies on: What is Stacked?, How Stacked works, Custody, Per-hand settlement, About → Architecture.

## Sport coverage

Don't write "Texas Hold'em" as if it's the whole product. Stacked plans to expand to other variants. Use **"poker"** as the umbrella term in front-page and overview copy. Specific variant pages (Cash game rules, etc.) can name the variant they cover.

## Killed terms

Do not use anywhere in player-facing copy:
- "Banker" / "banker" / "bank" — replaced by Host (player role) or "the table contract" / "on-chain custody" (the smart-contract escrow)
- "Comprehensive" page — duplicate, deleted
- "Web3" — replace with "wallet" or "on-chain" depending on context
- "DeFi" — never appears in player docs
- "ERC-20" — say "the token standard for USDC" if the concept is genuinely needed; usually skip
- "Endpoint", "deprecated", "refactored", "migrated", "schema", "WebSocket" — engineering jargon, translate to player impact

## Voice rules

1. **Every page opens with one sentence ending in a period that says why this exists, before any heading or list.** This is the value prop. Mechanics come after.
2. **Lead with the player's perspective, not the system's.** "After each hand, your share moves into the on-chain contract" — not "the backend invokes settleHand()."
3. **Concrete numbers > vague adjectives.** Don't say "fast" — say "typically sub-second, depending on Base network conditions." Don't say "low fees" — say "about $0.001 per hand."
4. **Translate every developer-internal change to player impact.** Not "we refactored the lobby" — "tables now load faster."
5. **No exclamation marks.** No emoji. No marketing puffery. Calm, factual, confident.
6. **One concrete walkthrough per major feature.** A specific scenario with specific numbers ("Alice creates a $1/$2 table, Bob requests a seat, Alice approves, Bob deposits 100 USDC, the contract issues 10,000 chips...") — players model the system from examples, not abstractions.

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
- Per-hand on-chain settlement, every hand. Typically sub-second, depending on Base network conditions.
- **Stacked sponsors all backend gas: settlement gas (every hand) and table-deployment gas (when a Host creates a table) are paid by Stacked, not the player or Host.** Players only pay gas on actions they sign themselves — depositing into a table, withdrawing back to their wallet. Phrase as: "Stacked covers the gas, so you never pay to settle a hand" / "Creating a table is free — Stacked covers the deployment cost."
- ~$0.001 per settlement (Base gas).
- 24-hour emergency self-withdraw if a settlement stalls — **lead with this on the custody/safety page.** It's the single strongest trust story.
- Rake details (4% of pot, BB-tiered caps, 75/25 split) live on the dedicated Rake page only. Everywhere else: "Hosts earn 25% of rake." Free Play pages don't mention rake at all. Source of truth is `poker-server/poker/rake.go`, not the older smart-contract docs.
- Both BYO and embedded wallets supported.
- Any thirdweb-compatible wallet works (Coinbase Wallet, MetaMask, Rainbow, WalletConnect).
- Free table creation (gas sponsored at launch — phrase as current behavior, not a permanent guarantee).
- All tables require Host approval before a player sits.
- Cash games only.

**We do not say:**
- No KYC promises in copy until legal confirms phrasing.
- No specific list of blocked jurisdictions until legal finalizes — the "Where Stacked is available" page ships with a placeholder.
- No tournament mechanics — only a roadmap mention.
- No fiat-onramp claims that we can't back (need a separate confirmation pass before writing the deposit page).
- No mainnet contract addresses (none have been recorded canonically yet — link to a single status page when ready).
- No "provably fair" language. Today's RNG is server-side; commit-reveal / on-chain shuffle is on the roadmap, framed as "coming."
- No claim that hands settle "instantly" — settlement is fast, but not synchronous to gameplay.
- No "audited" claim — contracts are not audited yet (44 Foundry unit tests pass; audit is on the roadmap).

## Roadmap stance

A single lightweight "What's next" page. No quarter commitments, no dates. Themes only: tournaments, provably-fair RNG, more wallets, jurisdiction expansion. Update together when reality changes. The old `roadmap.md` (dated Q-by-Q for 2024–2025) is deleted in this rewrite.

## Cross-cutting cleanup the rewrite will perform

- Delete: `marketplan/` (investor content), `stacked-comprehensive.md` (duplicate), old `roadmap.md`, orphaned images (`chips.png`, `stacked-logo.png`, `logo.svg`, `tile1.png`).
- Add: glossary, troubleshooting, "Where Stacked is available" (with TODO), Hosting section, Free Play page, custody/safety page with the 24h emergency-exit headline.
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

Internal docs (`poker-server/docs/CryptoPlan/*`, `poker-server/contracts/docs/*`, `poker-game/PRODUCT.md`) are useful for grounding facts but **not authoritative for the player-facing voice**. Many describe target state, not shipped state. Always confirm specifics with product before publishing.
