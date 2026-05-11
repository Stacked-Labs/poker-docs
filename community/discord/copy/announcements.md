# `📢-announcements` — copy library

Drop-in copy for the announcement channel. Two kinds of post: the launch-phase milestones (one-time), and the templates (reused for every product update, event, etc.). Voice matches `/docs` — direct, no hype, no emoji decoration.

---

## Soft relaunch

Posted at the start of Phase 1, 14 days before the official launch.

> # The server has a new layout
>
> We're refurbishing the Discord ahead of Stacked's official launch.
>
> **What changed:**
>
> - New categories: **Information, Start Here, Tables, Voice Tables, Hosts, Crypto & Settlement, Community, Support & Feedback.** The full map is pinned in `🔗-links`.
> - **Onboarding** is on. New joiners answer three questions and get routed to the right channels. Existing members: you've already been granted the `Member` role, so nothing's locked for you.
> - **`🛟-support`** is now a ticket flow. Every question becomes a private channel between you and the team.
> - **`🐛-bug-reports`** and **`💡-feature-requests`** are now forums. One post per bug, one post per idea.
> - **`🛠️ HOSTS`** is a new category for anyone running tables. To get access, open a ticket and apply.
>
> **What didn't change:**
>
> - The same team is here. The same product is shipping.
> - There is still no Stacked token. There will not be one.
> - The team still never DMs you first.
>
> The official launch is in two weeks. Between now and then, expect: a few more channels to come online, a couple of scheduled Free Play nights to test the table flow, and a launch announcement that will look a lot like a smaller version of this one.
>
> If anything in the new layout feels off — broken permissions, a channel you can't see, a category that doesn't make sense — say so in `📣-feedback`. We'll fix it before launch.

---

## Official launch

Posted at T-0. The first post in the announcement channel after the soft-relaunch one.

> # Stacked is live
>
> Real-money tables are open. Free Play tables are open. Hosts are running games.
>
> **Get to the felt:**
>
> - **Play:** [app.stacked.gg](https://app.stacked.gg)
> - **Read first:** [What is Stacked](https://docs.stacked.gg/docs/welcome/what-is-stacked)
> - **First hand, no USDC required:** [Try a Free Play hand](https://docs.stacked.gg/docs/getting-started/first-free-play-hand)
>
> **The short version of how it works:**
>
> - Every table is created by a player. Hosts earn 25% of the rake on their real-money tables.
> - Every real-money table is its own smart contract on Base.
> - Your USDC is in the contract, not with us. We never hold player funds.
> - Stacked covers gas. You never pay to settle a hand.
> - No KYC, no account, no email. Connect any thirdweb-supported wallet.
> - If anything ever stalls, the 24-hour emergency exit on the contract lets you withdraw your stack directly. No ticket needed.
>
> **Tonight at 8pm ET:** opening-night Free Play. No buy-in, real prizes, every seat counts. Details in `📅-events`.
>
> **Two reminders that will outlast this post:**
>
> - The team will never DM you first.
> - There is no Stacked token. Any "$STACKED" or "claim" page is a scam.
>
> See you at the tables.

---

## Templates

### Product release

> # `<release name>` is live
>
> Short paragraph: what shipped, why it matters, one link to the docs page.
>
> **The change:** one sentence.
>
> **What you'll notice:** bulleted, three items max.
>
> **Docs:** `<link>` · **Changelog:** `<link>`
>
> Feedback in `📣-feedback`. Bugs in `🐛-bug-reports`.

### Incident

> # `<incident name>` — `<status>`
>
> **Time:** `<UTC timestamp>`
>
> **What's happening:** one or two sentences. Plain English. No "we're aware" filler.
>
> **Who's affected:** specific. "All real-money tables" / "Only PLO tables" / "Withdrawals only."
>
> **Workaround if any:** specific.
>
> **Your money:** "Your stack is on-chain in the contract and unaffected" — assuming this is true.
>
> **Next update:** by `<UTC time>`.
>
> Live thread for questions below.

### Resolved incident

> # `<incident name>` — resolved
>
> **Resolved at:** `<UTC timestamp>`. **Duration:** `<X>` minutes.
>
> **What happened:** one paragraph.
>
> **What we did:** one paragraph.
>
> **What's next:** post-mortem in `🛡️-status` within `<N>` days.
>
> Thanks for the patience.

### Event

> # `<event name>` — `<day, date, time UTC + ET>`
>
> One paragraph: what it is, who it's for, what's at stake.
>
> **RSVP:** react below. **Venue:** `🔊 Table 1` voice + `🪙-real-money-tables` for the link.

### Scam warning (cross-posted to `🚨-scam-warnings`)

> # Scam alert: `<short name>`
>
> **What it looks like:** one or two sentences. Screenshot if safe to share.
>
> **What it wants:** one sentence ("connect-wallet on a fake domain," "sign a transaction," "DM a fake mod").
>
> **The truth:**
>
> - The team will never DM you first.
> - Stacked has no token, no airdrop, no claim page.
> - The only domains we operate are `stacked.gg`, `app.stacked.gg`, and `docs.stacked.gg`.
>
> Saw it? Report in `🛟-support`. Block, don't engage.
