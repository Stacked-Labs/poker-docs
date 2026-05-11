# Launch checklist

Everything that needs to be true before each phase ships. Tick it off as a PR review on this file before the phase goes live.

## Phase 1 — Soft relaunch (T-14)

### Server config

- [ ] Server name set: **Stacked**.
- [ ] Vanity URL set to `discord.gg/stacked` (or confirm taken and pick the next best option).
- [ ] Server icon: Stacked wordmark on green felt, square.
- [ ] Server banner: horizontal table image (the same one used at the top of `/docs/welcome/what-is-stacked`).
- [ ] Community features enabled (`Server Settings → Enable Community`).
- [ ] Verification level: **Medium** (verified email + account ≥ 5 min).
- [ ] Explicit media filter: **scan all members**.
- [ ] DMs from server members: **off by default** (server setting).
- [ ] System messages channel: `📢-announcements`. "Member joined" messages turned off (too noisy).

### Onboarding

- [ ] Rules Screening enabled with copy from [`copy/rules.md`](copy/rules.md).
- [ ] Community Onboarding configured with the three questions in [`copy/welcome.md`](copy/welcome.md).
- [ ] Default Channels list: `👋-start-here`, `📜-rules`, `📢-announcements`, `❓-faq`, `💬-general`, `🪪-connect-a-wallet`, `🆓-free-play-tables`.

### Categories and channels

- [ ] All categories from [`channels.md`](channels.md) created in order.
- [ ] All Phase-1 channels created. (Phase-2 / Phase-3 channels can wait.)
- [ ] Each channel has its one-line topic set.
- [ ] Each channel has its pinned welcome message (copy from `copy/`).
- [ ] `#announcements` and `#changelog` set as **Announcement** channels.
- [ ] `#hand-reviews`, `#bug-reports`, `#feature-requests`, `#host-coordination`, `#international` set as **Forum** channels with their tags.
- [ ] Mod category (`🔒 MOD`) hidden from `@everyone`.

### Roles

- [ ] All roles from [`roles-and-permissions.md`](roles-and-permissions.md) created in order.
- [ ] `@everyone` has near-zero permissions.
- [ ] No role except Owner has Administrator.
- [ ] Reaction-role messages for cosmetic roles posted in the relevant channels and bound to Carl-bot.

### Bots

- [ ] Carl-bot installed with scoped permissions.
- [ ] Wick installed with scoped permissions.
- [ ] Ticket Tool installed and configured. Ticket categories: Support, Host application, Bug, Security report, Other.
- [ ] All bots audited in `#mod-logs` (initial baseline).

### Copy

- [ ] `#rules` post is final ([copy](copy/rules.md)).
- [ ] `#start-here` post is final ([copy](copy/welcome.md)).
- [ ] `#faq` post is final ([copy](copy/faq.md)).
- [ ] `#responsible-play` post is final ([copy](copy/responsible-play.md)).
- [ ] Soft-relaunch announcement drafted ([copy](copy/announcements.md#soft-relaunch)).

### Team

- [ ] At least 2 Admins, 3+ Mods in place.
- [ ] On-call rotation defined for first 14 days.
- [ ] All mods have read [`moderation-playbook.md`](moderation-playbook.md).

## Phase 2 — Official launch (T-0)

- [ ] Invite link added to: app, `/docs`, X bio, Telegram pin, blog post.
- [ ] Launch announcement scheduled in `#announcements` ([copy](copy/announcements.md#official-launch)).
- [ ] First Free Play night scheduled in `#events` for launch day or launch +1.
- [ ] `#status` is reporting (backend status, contract status).
- [ ] Anti-raid: Wick verified-account-age threshold tuned (suggested 7 days minimum).
- [ ] Comms shift coverage for launch day announced.
- [ ] Press / partner kit linked in a pinned `#links` message.
- [ ] Hand-of-the-week / leaderboard automation tested end-to-end in `#leaderboards`.

## Phase 3 — Expansion (T+30 to T+90)

Nothing is created on a schedule. Things are created when pressure justifies them.

- [ ] Review channel pressure weekly. Split `#tables-chat` only when a single variant (e.g. PLO) consistently dominates.
- [ ] Spin up `#international` forum posts only after we see >100 messages in a non-English language in any 7-day window.
- [ ] Add a `#strategy` forum if `#hand-reviews` consistently spills into strategy-not-tied-to-a-hand discussion.
- [ ] Re-evaluate wallet-verification bot decision once we see how much host fraud (if any) actually occurs.
- [ ] First quarterly review: what's working, what's empty, what to prune.

## Rollback plan

If the rebuild creates more friction than it solves in the first 72 hours after Phase 1:

- Revert verification level to **Low**.
- Disable Community Onboarding (Rules Screening stays on; it's always on).
- Collapse the 9 categories down to 4 (Info, Tables, Community, Support) and unhide everything to `Member`.
- Post a transparent note in `#announcements`: "We tightened the server too much. Here's what we changed back, here's why, and here's what we'll try instead."

Keep the rollback path documented as a known option; trying things and reversing publicly is better than trying nothing.
