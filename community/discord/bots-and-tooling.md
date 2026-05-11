# Bots and tooling

What we install on the server, what each bot does, and what permissions it gets. **No bot is given Administrator.** Permissions are scoped to the minimum needed.

## Tier 1 — must-have for launch

### Carl-bot — moderation backbone

Reaction roles, auto-moderation, logging, custom commands. Best all-around moderation bot for servers under 20k members, covers ~90% of needs without a paid plan.

**Permissions:** Manage Messages, Manage Roles (only below its role), Manage Nicknames, Kick Members, Timeout Members, Embed Links, Add Reactions, Read Message History.

**Used for:**

- Reaction roles for opt-in pings (`Cash Game`, `Tournaments`, etc.).
- Automod patterns: invite links, phishing keyword list, mass-mention block, mass-emoji block.
- Logging to `#mod-logs`.
- Slowmode and lockdown commands during raids.

### Wick — anti-raid / anti-nuke

Runs alongside Carl-bot for hardened anti-raid. Catches coordinated join waves (which Carl-bot's keyword filter alone misses).

**Permissions:** Ban Members (used only via Wick's own rate-limited triggers), Kick Members, Manage Roles. No message-level permissions.

**Used for:** join-rate anomaly detection, anti-nuke (auto-revokes role changes and channel deletions made by compromised mod accounts), verified-account-age gate on joins.

### Ticket Tool — private support tickets

The `🛟-support` channel is a launcher; the actual conversation happens in a private channel auto-created per ticket between the user and the support role.

**Permissions:** Manage Channels (limited to its ticket category), Read/Send Messages, Embed Links.

**Used for:** support, host applications, vulnerability reports, harassment reports.

### Discord native — Onboarding + Rules Screening

Not a bot. Native Discord feature. This is the actual gate; the bots above are layered on top.

**Used for:**

- Rules Screening prompt before anyone can talk.
- Three onboarding questions that route a member to interest roles and recommended channels.
- Default Channels list (the channels everyone sees on first load).

Copy and questions: [`copy/welcome.md`](copy/welcome.md).

## Tier 2 — useful, install in Phase 2

### Statbot — analytics

Member growth, channel activity, retention, time-of-day heatmaps. Drives the KPI dashboards in `#mod-metrics`.

**Permissions:** Read Message History, View Channels. No write permissions.

### Sesh — events and scheduling

For scheduled Free Play nights, AMAs, tournaments. Posts in `#events`, RSVPs by reaction, posts reminders.

**Permissions:** Send Messages, Embed Links, Add Reactions, Mention Roles.

### Discord-native Voice Activity & Stage Channels

For team AMAs and "host masterclass" sessions. No bot needed.

## Tier 3 — evaluate, don't install yet

### Wallet-verification bot (thirdweb / Collab.Land / custom)

**Not installed at launch.** Reason: tying a Discord identity to an on-chain wallet is privacy-sensitive, and Stacked's product position is explicitly *no KYC, no account.* Forcing wallet-Discord linkage in the server would contradict that.

We revisit this **only** for:

- Optional cosmetic `🪙 Verified Player` role (linked-wallet has played ≥ N hands).
- Optional `Host (Verified)` self-service flow.

If we ship it, it's:

- Built on thirdweb (we already use thirdweb wallet flows — [docs](https://blog.thirdweb.com/guides/create-a-discord-bot-that-gives-nft-holders-a-role/)) or a minimal custom service. Not Collab.Land out of the box, because it's NFT-centric and we don't have an NFT.
- Opt-in, never required for access.
- Verifies via a signed message, never asks for any on-chain transaction.

### Tip bots (tip.cc etc.)

**Not installed.** Stacked is a USDC poker product; tipping inside Discord competes with playing actual hands and invites confusion about where balances live ("is this on Base? where does it settle? did I just lose 5 USDC to a Discord bot?"). If we ever ship in-Discord tipping, it routes through the same Base contracts as the rest of the product, not a third party.

### MEE6

**Not installed.** Carl-bot covers everything MEE6 does at the free tier and more. MEE6's pricing has gotten worse over time and its core moderation is weaker than Carl-bot.

### Levels / XP bots

**Not installed at launch.** Status in the server is earned by hosting and playing actual hands, not by spamming `#general` for XP. We can revisit a points system that's tied to on-chain hand volume, but generic chat XP is off-brand.

## Bot permissions audit

Monthly: any Admin pulls the bot list and reconfirms each bot's permissions. Any bot that has accumulated permissions it doesn't need gets pruned. Logged in `#mod-logs`.
