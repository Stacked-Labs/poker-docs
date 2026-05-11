# Discord playbook

The strategic frame for the server refurbishment. Read this first; the rest of `community/discord/` is the implementation.

## What the server is for

Stacked is a hybrid product — a poker room where the cards run off-chain and the money runs on-chain. The community is the same shape: half poker players who care about hands and stakes, half crypto-native users who care about custody, settlement and self-sovereignty. **The Discord exists to be the place where those two audiences actually meet.**

Concretely, the server has four jobs:

1. **Find a seat.** Make it trivial to discover an active table — Free Play or real-money — and the host running it.
2. **Learn the game.** Lower the activation barrier for crypto users who don't know poker, and for poker players who don't know wallets.
3. **Build the host economy.** Hosts earn 25% of rake on their tables. Hosts who run good rooms should be visible, trusted and rewarded inside the server.
4. **Be the trust layer.** Open, public conversation with the team — bug reports, feature requests, settlement questions, contract questions, support — in the open, with receipts.

If a proposed channel, role or feature doesn't serve one of those four jobs, it doesn't ship.

## Who we're serving

Three overlapping personas. Channels and onboarding flow should map cleanly to all three.

| Persona | Knows | Doesn't know | What they want from Discord |
|---|---|---|---|
| **The Crypto Native** | Wallets, USDC, Base, gas, smart contracts | Poker rules, hand rankings, bet sizing, etiquette | A safe place to learn, a Free Play table to grind, low-stakes real-money games |
| **The Poker Player** | Hand reading, GTO basics, live etiquette, online platforms | Self-custody, what "on-chain" means, why no KYC matters, how to fund a wallet | Real games, real stakes, fewer hoops than regulated rooms, a path to fund a wallet |
| **The Host** | Both of the above, usually | How to fill seats, how to be a good host, what rake they're earning | Tools, a directory, a community that finds their tables, payouts they can verify |

There is also the team, press, partners and lurkers — but the channels are designed around the three personas above.

## Voice and tone

Match the product voice in [`/docs`](../../docs/welcome/what-is-stacked.md): direct, declarative, mature. No exclamation-mark spam, no hype-cycle adjectives, no rocket emojis in announcements. Confident, quiet, and specific.

- **Do:** "Stacked is live on Base. Real-money tables are open. Free Play is open. Here is the first link."
- **Don't:** "🚀🚀🚀 GM DEGENS!!! WE'RE LIVE 🔥🔥🔥 JOIN NOW 💎🙌"

Emojis are allowed inside channel names (they aid scanability) and as small punctuation in pinned messages. They are not allowed as decoration in announcements or rules.

## Operating principles

1. **Start lean.** Five active channels beat thirty empty ones. Every channel ships with a reason it exists; if it stays empty for two weeks post-launch, it gets archived.
2. **One source of truth per topic.** Settlement questions go in `#on-chain-settlement`, not also in `#general` and `#support` and `#crypto-chat`. The structure should make the right channel the obvious channel.
3. **Public over private.** Default to in-the-open conversation. DMs to the team should be reserved for security-sensitive reports (vulnerabilities, exposed keys, harassment). Everything else — including support — happens in public channels or public tickets so other players can read and learn.
4. **No team DMs from unverified accounts.** The fastest scam vector in crypto Discords is a fake-team DM. The server's first-party message in every onboarding flow is: *the team will never DM you first.*
5. **Hosts are first-class.** Hosts get their own category, their own role badge, their own forum to coordinate.
6. **The contract is the source of truth for money. The Discord is not.** Any payout, settlement, or balance dispute is resolved by Basescan, not by a moderator's word.

## KPIs

What we're actually trying to move. Reviewed monthly.

| KPI | What it measures | Target by launch + 90 days |
|---|---|---|
| **Activation rate** | % of new joiners who complete onboarding and post / react in any channel within 7 days | ≥ 35% |
| **Active hosts** | Unique hosts who ran at least one table in the last 30 days and posted in `#host-lounge` | ≥ 25 |
| **Time-to-seat** | Median minutes between a new member joining and sitting at any table (Free Play or real-money) | < 60 min |
| **Support resolution** | Median time from `#support` post to team response | < 4 hours (waking hours) |
| **Incident response** | Median time from scam/phishing report to moderator action | < 15 min |
| **Retention** | % of new joiners still active 30 days later | ≥ 25% |

We instrument these via Statbot or Sapphire on the server side, and via the same wallet/session telemetry the product already uses on the client side. The numbers go in `#mod-metrics` (private), reviewed at the weekly community sync.

## Phases

The rebuild is not a single drop. It rolls out in three phases so we don't introduce a 30-channel server to a 200-member audience on day one.

**Phase 1 — Soft relaunch (T-14 days before official launch).** The new structure goes live with the existing membership. Announcement explaining the change. Lean channel set (Info, Tables, Play, Hosting, Off-topic, Voice). Onboarding flow live.

**Phase 2 — Official launch (T-0).** Public invite link in product, on the docs site, on X, on Telegram. Launch announcement. First scheduled Free Play night. Welcome bot live, ticket system live, anti-raid tightened.

**Phase 3 — Expansion (T+30 to T+90).** Add channels as conversations spill out of `#general` and `#tables-chat`. Add forum channels for hand reviews, strategy, host coordination once volume justifies them. Add language-specific channels once we see enough non-English activity to warrant them.

See [launch-checklist.md](launch-checklist.md) for the per-phase task list.

## What we're explicitly not doing

- **No token.** There is no Stacked token, no airdrop, no presale. Any "$STACKED" you see in the server is a scam — this is repeated verbatim in `#rules`, `#announcements` pin, and the onboarding flow.
- **No KYC bot.** Stacked itself does not require KYC; the Discord won't either. Wallet-linking is opt-in and used only for host badges and event raffles, never for access to public chat.
- **No paid roles, no "VIP for $50".** Status in the server is earned by hosting and playing, not bought.
- **No DM-based support.** Every support request becomes a public ticket or a public message. This is a security stance, not a staffing decision.
