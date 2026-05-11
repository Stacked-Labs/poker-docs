# Roles and permissions

A flat, additive role model. `@everyone` has effectively no permissions; access is granted by stacking roles on top.

## Hierarchy (top to bottom in role list)

1. **Owner** — Stacked Labs founders. Server ownership.
2. **Admin** — Engineering / leadership. Full server permissions, including dangerous ones (Manage Server, Manage Roles, Manage Channels). Two to three people, no more.
3. **Team** — Anyone employed by Stacked Labs. Can post in `#announcements`, `#changelog`, `#events`. Cannot edit server structure.
4. **Comms** — Community/marketing managers. Same as Team for announcement posting. May be a Team member or a contractor.
5. **Mod** — Trusted community moderators. Manage Messages, Manage Threads, Timeout Members, Kick Members. **No ban, no role management, no channel editing.** Bans go through Admin to enforce a four-eyes rule.
6. **Trial Mod** — On a 30-day evaluation. Same permissions as Mod but reviewed before promotion.
7. **Host (Verified)** — Has run at least one real-money table. Access to the `🛠️ HOSTS` category, may post in `#real-money-tables`. Badge visible in member list.
8. **Host (Pending)** — Has applied to host and is being reviewed.
9. **Beta** — Opt-in. Access to `#beta`. Granted on request, revocable.
10. **Member** — Default role granted automatically after rules-screening + onboarding completion. Required for posting in 99% of channels.
11. **Unverified** — Implicit; this is just `@everyone` before they accept rules. Sees only `#start-here` and `#rules`.

## Cosmetic / opt-in roles (no permissions)

Granted by reaction-role or onboarding answers. Used for tagging interest and getting useful pings, not for access.

- `🎰 Cash Game` — pinged when a new cash game opens up to public seats.
- `🏆 Tournaments` — pinged when tournaments ship and when one starts (once available).
- `🆓 Free Play` — pinged for scheduled Free Play nights.
- `🛠️ Builder` — for the engineers / contributors who want product-side pings.
- `🌐 EN / ES / PT / FR / KR / TR…` — language tags.
- `🔔 All Announcements` — opt-in for `@announcements` mentions. Default is opt-out so we don't spam.

## Permission philosophy

- **Additive model.** `@everyone` gets nothing. Every permission is granted by a role on top. This is the safer model for community servers per [Discord's own guidance](https://discord.com/blog/how-to-set-up-your-servers-roles-for-members-mods-admins).
- **Two-person rule for bans.** Bans require Admin approval. Mods can timeout up to 7 days unilaterally; longer requires sign-off in `#mod-chat`.
- **No one outside Owner gets the Administrator permission.** Everything else is granular.
- **Bots get scoped permissions.** No bot gets Administrator. Each bot's permissions are documented in [`bots-and-tooling.md`](bots-and-tooling.md).
- **Role colors are reserved.** Team / Comms / Mods get colors that visibly mark them in chat. Host has its own color. Members are uncolored. Cosmetic roles are uncolored.

## How a member is verified to `Member`

1. They join.
2. They see only `👋-start-here` and `📜-rules`.
3. They accept the rules via Discord's native Rules Screening prompt.
4. They run through Community Onboarding (3 questions max — see [`copy/welcome.md`](copy/welcome.md)).
5. The onboarding flow grants `Member`.
6. They are now visible in the member list and can read/post in the public categories.

No bot-based CAPTCHA on top of this for now — Discord's native flow is enough and adding another step has measurable drop-off. We revisit only if we see raid activity.

## How a member becomes a `Host`

1. They open a ticket in `#support` with the topic "Apply to host" (or use a dedicated `/apply-host` slash command if we wire one).
2. They confirm the wallet address they'll host from. (Verification via signed message in the ticket, not by sharing keys.)
3. A Team member reviews — minimum: at least one Free Play table run before, no prior moderation actions.
4. On approval, `Host (Pending)` → `Host (Verified)` after they run their first real-money table.

Host status is reviewed if a host receives 3+ complaints about table behavior, no-shows, or rake disputes. Removal is an Admin decision.
