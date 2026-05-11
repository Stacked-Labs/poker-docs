# Moderation playbook

The operational guide for `Mod`, `Trial Mod`, and `Admin`. Pin this in `#mod-handbook`.

## Cardinal rules

1. **The team will never DM users first.** If a member reports that "Team @x" DMed them, that account is fake. Action: ban the fake, alert the user, post a screenshot (with reporter's name redacted) in `#scam-warnings`.
2. **Never ask for, accept, or transmit a seed phrase.** Not from users, not from teammates, not from "support tickets". Anyone asking for one in the server gets banned on sight.
3. **No real-money disputes are settled by mods.** Money lives in the contract. If a member claims a settlement is wrong, route to `#support` → ticket → Engineering / Admin. Mod's job is to keep the conversation civil and direct it.
4. **Public-first.** Resolve in channel or in a ticket. Do not move conversations into mod DMs.
5. **Document.** Every kick / timeout / ban gets a one-line reason in `#mod-logs` (Carl-bot does this automatically; add context if the auto-log is thin).

## Escalation ladder

Light → heavy. Skip steps when the violation is severe (scams, doxx, slurs, real-world threats).

| Step | Action | When |
|---|---|---|
| 1 | Friendly correction in-channel | First-time low-severity (off-topic, light tone issue) |
| 2 | Formal warning (DM via Carl-bot's warn command, logged) | Repeated low-severity, or first-time medium |
| 3 | Timeout: 1 hour | After warning, or first-time medium-severity |
| 4 | Timeout: 24 hours | Repeat medium, or single high-severity |
| 5 | Timeout: 7 days | Repeat high-severity |
| 6 | Ban (Admin sign-off required) | Scam attempts, doxxing, hate speech, repeated 7-day-timeout offender, ban evasion |

## Specific incident playbooks

### Phishing / scam links

1. Delete the message immediately.
2. Timeout the account for 24 hours.
3. Open a thread in `#mod-alerts` with a screenshot and the URL.
4. If the same domain shows up twice in 24 hours, add it to Carl-bot's blocklist.
5. Post a short notice in `#scam-warnings` if the scam is novel ("Heads up: there's a fake `claim-stacked-rewards.xyz` going around. Stacked has no token, no airdrop, no rewards claim page.").
6. Ban if it's clearly a bot/throwaway, timeout-then-review if it's a real account that may have been compromised.

### Impersonation of team / mods

1. Ban the impersonator immediately. (This is one of the few cases that doesn't need Admin sign-off.)
2. Screenshot for `#mod-logs` and `#scam-warnings`.
3. DM the reporter to confirm we received the report and to remind them: the team will not DM them first.
4. If the impersonator DMed many users, post a notice in `#announcements` (Team / Comms).

### Coordinated join raid

1. Wick should auto-handle the first wave. If alerts fire in `#mod-alerts`, the on-call mod confirms.
2. Escalate by enabling server-wide slowmode (Carl-bot: `?slowmode all 30s`).
3. If the raid persists, raise verification level to "High" (only members for 10+ minutes can talk) or "Highest" (verified phone only — last resort, breaks new signups).
4. Page Admin in `#mod-alerts` (`@Admin`).
5. Post-mortem in `#mod-chat` within 24h: what got through, what didn't, what to harden.

### Hate speech / harassment / slurs

1. Delete the message.
2. Timeout 7 days, no warning step.
3. Admin reviews for ban within 24h.
4. If targeted at a specific member, DM the target to acknowledge the action was taken.

### Real-world threats / self-harm

1. Do **not** delete the message — preserve evidence.
2. Reach out to the user in a ticket. Share the resources in `#responsible-play`.
3. Ping Admin immediately. This is above mod pay-grade.
4. If the threat is against a specific person and concrete, preserve the message and contact relevant authorities per Admin direction.

### Doxxing

1. Delete immediately.
2. Ban (Admin sign-off, but execute immediately; sign-off can be after the fact).
3. DM the victim. Offer to lock the relevant channel down and clear history.
4. Report the doxxer to Discord Trust & Safety.

### "Why did my withdrawal not arrive" / settlement disputes

Not a moderation issue — but it's the most common heated thread in any crypto server, so the playbook lives here.

1. Be calm, be specific. "That's a settlement question, not a chat issue. Open a ticket in `#support` and paste your wallet address and the table contract address. Engineering will pull the on-chain history."
2. Do not promise an outcome. The contract is the source of truth.
3. If they're calm, escalate via ticket. If they're inflammatory, timeout and continue the conversation in the ticket.

## What mods do not do

- Adjudicate balances or payouts.
- Approve hosts unilaterally (Team / Admin only).
- Take security-vulnerability reports in public — those go to a private ticket and are routed to Engineering.
- Promise features.
- Promise dates.

## Weekly mod sync

Fifteen minutes, every week. Voice in `#mod-chat`. Agenda:

1. KPI scan from `#mod-metrics`.
2. Open incidents from the week.
3. Scam patterns to watch for next week.
4. Channel pressure — anywhere that needs a split, a slowdown, or a new forum.
5. Promotions / demotions (Trial Mod → Mod, etc.).
