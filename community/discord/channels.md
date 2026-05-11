# Channel architecture

The full server map. Categories are ordered top-to-bottom in the sidebar exactly as listed here. Each channel ships with a one-line topic (visible at the top of the channel in Discord) and a pinned message.

**Naming convention.** Lowercase, hyphenated, with a single emoji prefix per channel for visual scanning. Category names are uppercase with a leading symbol. Voice channels use a speaker emoji.

## Category 0 — onboarding (visible before verification)

Only two channels are visible to an unverified, just-joined account. Everything else is gated behind the rules-screening + onboarding flow.

| Channel | Type | Topic (one-liner) |
|---|---|---|
| `👋-start-here` | Text, read-only | What Stacked is, how the server works, where to go next. |
| `📜-rules` | Text, read-only | Five rules. Read once. They apply everywhere. |

Copy for both lives in [`copy/welcome.md`](copy/welcome.md) and [`copy/rules.md`](copy/rules.md).

## Category 1 — 📣 INFORMATION

Low-traffic, high-signal. New members land here after verification.

| Channel | Type | Purpose |
|---|---|---|
| `📢-announcements` | Announcement | Official posts only. Followable to other servers. Posting locked to `Team` and `Comms`. |
| `🗞️-changelog` | Announcement | Every product release. Mirrors the docs changelog. |
| `🗺️-roadmap` | Text, read-only | Pinned summary of `/docs/about/whats-next` + status updates. |
| `📅-events` | Text, read-only | Upcoming Free Play nights, host showcases, AMAs, tournaments (once live). |
| `🛡️-status` | Text, read-only | Backend status, contract status, known incidents. Auto-posted by a status bot or by the on-call. |
| `🔗-links` | Text, read-only | Canonical links: app, docs, X, Telegram, Basescan, GitHub. Pinned. |
| `🚨-scam-warnings` | Text, read-only | Active scams making the rounds. Updated whenever something new shows up. |

## Category 2 — 🎓 START HERE

For brand-new members. The activation funnel.

| Channel | Type | Purpose |
|---|---|---|
| `👋-introduce-yourself` | Text | Optional intros. Light prompts in the pinned message. |
| `❓-faq` | Text, read-only | The 20 questions everyone asks. Copy lives in [`copy/faq.md`](copy/faq.md). |
| `🪪-connect-a-wallet` | Text, read-only | Step-by-step walkthrough mirroring `/docs/getting-started/connect-a-wallet`, with a thread for stuck users. |
| `🆓-free-play-101` | Text | How to claim a seat at a Free Play table. Hand-holding for crypto users new to poker. |
| `🎓-poker-basics` | Text | Hand rankings, betting rounds, table etiquette. Mostly links + pinned charts. |

## Category 3 — 🪑 TABLES

Where games are actually found and discussed. This is the heart of the server.

| Channel | Type | Purpose |
|---|---|---|
| `🎲-find-a-game` | Text | Looking-for-game posts. "2/5 NL, 4 seats, host @x, link inside." Auto-deletes after 12h. |
| `🆓-free-play-tables` | Text | Free Play table links posted by hosts. Anyone can post. |
| `💵-real-money-tables` | Text | Real-money table links posted by verified hosts only. |
| `📋-hand-reviews` | Forum | One post per hand. Tags: `🆓 free-play`, `💵 real-money`, `📈 strategy`, `🎉 cooler`. |
| `🗣️-tables-chat` | Text | General table talk, sweat, rail. |
| `🏆-leaderboards` | Text, read-only | Weekly biggest winners, biggest hosts, hand of the week. Posted by a bot or by Comms. |

## Category 4 — 🎤 VOICE TABLES

Voice is where Stacked starts to feel like a poker room and not a chatroom. Hosts can claim a voice channel for the duration of their table.

| Channel | Type | Purpose |
|---|---|---|
| `🔊 Lobby` | Voice | The default hangout voice channel. |
| `🔊 Table 1` | Voice | Claimable by a host running an active table. |
| `🔊 Table 2` | Voice | Same. |
| `🔊 Table 3` | Voice | Same. |
| `🔊 Sweat Room` | Voice | For railing a high-stakes table. No buy-in required. |
| `🎧 AFK` | Voice | Auto-move target after 10 min idle. |

More voice channels are added on demand. We start with this set and let pressure tell us when to add more.

## Category 5 — 🛠️ HOSTS

For anyone who runs (or wants to run) tables. Locked behind the `Host` role.

| Channel | Type | Purpose |
|---|---|---|
| `🛠️-host-lounge` | Text | General host chat. |
| `🎯-host-playbook` | Text, read-only | Pinned guide: how to fill seats, set stakes, run a good table, deal with disputes at your table. Mirrors `/docs/hosting/overview`. |
| `💰-rake-and-payouts` | Text | Questions about the 25% host rake, withdrawals, on-chain receipts. |
| `📣-host-showcase` | Text | Hosts announce upcoming tables here. Cross-posts to `#real-money-tables` and `#events`. |
| `🤝-host-coordination` | Forum | One post per recurring game ("Tuesday $1/$2 PLO", "Friday Free Play night"). |

Apply-to-host happens via a ticket in `#support`.

## Category 6 — 🪙 CRYPTO & SETTLEMENT

The on-chain side. This is also where most scam attempts will surface, so traffic gets eyes on it.

| Channel | Type | Purpose |
|---|---|---|
| `🔐-on-chain-settlement` | Text | Questions about how settlement works, contract behavior, gas, Base. |
| `🪙-usdc-and-funding` | Text | Funding a wallet, bridging USDC to Base, the in-app onramp once it ships. |
| `🧰-self-custody-help` | Text | Wallet setup, seed-phrase hygiene, lost-access recovery. Pinned message: *we will never ask for your seed phrase.* |
| `🔎-contract-reading` | Text | Basescan walkthroughs, settlement transaction explainers, audit discussion. Slower channel, more technical. |

## Category 7 — 💬 COMMUNITY

The non-poker, non-crypto layer. Glue.

| Channel | Type | Purpose |
|---|---|---|
| `💬-general` | Text | Catch-all. |
| `🎭-off-topic` | Text | Anything not poker, not crypto. Sports, food, dogs, complaints about your ISP. |
| `🖼️-media` | Text | Screenshots, clips, memes. Slow-mode 10s. |
| `🎁-giveaways` | Text | Bot-run giveaways. Free Play tournament seats, swag, etc. Posts only by `Comms`. |
| `🌐-international` | Forum | One post per language community (ES, PT, FR, KR, TR…). Spun up only when there's enough activity to warrant it. |

## Category 8 — 🛟 SUPPORT & FEEDBACK

Where the team is reachable in the open.

| Channel | Type | Purpose |
|---|---|---|
| `🛟-support` | Text + ticket bot | Open a private ticket here. Anything from "my table won't load" to "I think a settlement is wrong." |
| `🐛-bug-reports` | Forum | One post per bug. Required tags: `🟢 minor`, `🟡 major`, `🔴 critical`, `✅ fixed`. |
| `💡-feature-requests` | Forum | One post per idea. Upvotes via reactions. |
| `📣-feedback` | Text | General feedback that isn't a bug and isn't a request. |
| `🧪-beta` | Text, gated | Locked to the `Beta` role. Where we test pre-release builds. |
| `🛡️-responsible-play` | Text, read-only | Resources for problem gambling. Always pinned to the top of the sidebar in the user's mind. Copy in [`copy/responsible-play.md`](copy/responsible-play.md). |

## Category 9 — 🔒 MOD (hidden)

Not visible to members. For moderators and admins only.

| Channel | Type | Purpose |
|---|---|---|
| `🔒-mod-chat` | Text | Coordination. |
| `📜-mod-logs` | Text | Bot-fed audit log: bans, kicks, timeouts, role changes, deleted messages. |
| `🚨-mod-alerts` | Text | Anti-raid bot output, flagged messages, autoresponder triggers. |
| `📊-mod-metrics` | Text | KPI dashboards, weekly review thread. |
| `📝-mod-handbook` | Text, read-only | Pinned: the moderation playbook ([moderation-playbook.md](moderation-playbook.md)). |

## Channels we deliberately did not create

- ❌ `#price-talk` / `#trading` — Stacked has no token. A trading channel invites the wrong kind of audience.
- ❌ `#shill` / `#partner-projects` — same reason. Partnerships get announced in `#announcements`, not promoted in a free-for-all channel.
- ❌ `#dms-from-team` or anything implying official DMs are a channel of communication.
- ❌ Game-by-game variant channels (PLO, NLH, MTT) — premature. One `#tables-chat` until volume splits naturally, then promote the busiest threads into channels.
- ❌ A separate `#welcome` and `#start-here` — they collapse into one channel (`👋-start-here`).
