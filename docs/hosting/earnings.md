---
sidebar_position: 31
---

# Hosting earnings

Hosts earn 25% of the platform fee on every real-money hand played at a table they run, credited live as hands settle.

## How your share accumulates

You earn **25% of the platform fee** on every real-money hand played at a table you host. The number isn't a daily total or an end-of-session payout — it ticks up live as hands settle. Each real-money table is its own smart contract — a self-running program on Base, the Ethereum-based network Stacked runs on, where fees are very low. After each hand at your table, that contract credits your share to a balance attached to that specific table contract, and the figure updates in real time at the table view. Your USDC, a digital dollar that holds a stable value, stays in that contract, not with Stacked — only the contract's rules can move it.

For how the platform fee itself is calculated, see [How fees work](/docs/your-money/fees).

## Where you see it

Inside each table you host, open the table's **Settings → Players** tab. You'll see your accumulated platform fee for that table — updated as hands settle — alongside the option to withdraw it.

This is per-table: each table you host has its own balance and its own withdraw action. There's no global "all earnings" view that aggregates across every table. If you host five tables, you have five balances to track and five places to withdraw from.

## Withdrawing your share

When you're ready to pull your share at a table, go into that table's Settings → Players tab and click withdraw. The contract releases your accumulated balance directly to your wallet — no minimum amount, no schedule, no approval from anyone needed.

Two things worth knowing:

- **You pay the gas.** Gas is the small network fee for an on-chain action. Withdrawing is a transaction you sign from your wallet, so you cover the gas for it on Base. (Gas while hands are settling is on Stacked — you never pay to settle a hand.)
- **The balance keeps growing while you wait.** Withdrawing doesn't pause anything. If hands are still settling at the table, your balance restarts climbing the moment after you withdraw.

You can withdraw at any point — every hand, every day, or once at the end of a long-running table. Whatever fits.

## What's next

- [How fees work →](/docs/your-money/fees) — the underlying fee math.
- [Withdrawals →](/docs/your-money/withdrawals) — how withdrawals work for player stacks (similar mechanic, different starting balance).
