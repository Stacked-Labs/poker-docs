---
sidebar_position: 30
---

# Hosting a table

Anyone can run a poker table on Stacked, and Hosts earn 25% of the rake on real-money tables they run.

Hosts create tables, decide who sits, and earn a share of the rake on real-money tables they run. There are no application gates and no fees to start: connect a wallet, click create, and a new table contract is deployed for you on Base (Coinbase's Ethereum-based network) — Stacked covers the deployment gas.

## Why host

If you run a regular game with friends, want a piece of the rake on a public table, or just want to set the rules for how a game is played, hosting is the path. On real-money tables, you keep **25% of the rake** — paid out on-chain whenever you withdraw. ([How rake works →](/docs/your-money/rake)) Free Play tables don't generate earnings; the value is creating space for friends or a community to play without putting real money on the table.

You can also play in your own table. Hosting and playing aren't separate roles — you can take a seat at the table you created, or just oversee from the side and let others play. Most Hosts who run friend games play; most who run public tables don't.

## Creating a table

When you create a table, you set three things:

- **Stakes** — small blind and big blind. The big blind has to be at least twice the small blind.
- **Mode** — Free Play (play-money chips, no earnings) or real-money (chips backed by USDC, a digital dollar pegged 1:1 to USD).
- **Visibility** — public (appears in the lobby) or invite-only (reachable only via direct link).

That's it. You don't pick a buy-in range — each player chooses their own buy-in and you approve or decline based on what they bring. Stacked sponsors the gas to deploy the table contract, so creating a table is free for you.

## Approving players

Every player who wants to sit needs your approval. Stacked uses a home-game model: there are no protocol-run tables and no auto-seating — when someone wants to play at your table, they request a seat and wait for you to let them in.

When a request comes in, the player shows up in a pending list at your table view, and you get an in-app notification. The request includes the player's wallet and the buy-in they're proposing — for example, "Alice requests a seat with a 200 USDC buy-in." Approve and they're in; decline and they aren't.

The flow is the same for public and invite-only tables. Letting Hosts curate who plays — turning down players whose buy-in is outside what you wanted, or anyone you don't want at your table — is what makes the marketplace work without the platform setting those rules.

## Running the table

Once the table is live, players play hands and Stacked's backend keeps the game running. **You don't have to stay online for the table to keep running.** Your only required action while the table is live is approving new pending players when they arrive.

You can also step in between hands:

- **Kick a player.** Between hands, you can remove a seated player. They're given permission to withdraw their stack from the contract — the move isn't automatic; they click withdraw on their side to receive their USDC.
- **Change stakes.** Between hands, you can raise or lower the small or big blind.
- **Pause or end the table.** Between hands, you can pause the table or close it entirely. When a table closes, every seated player gets withdrawal permission for their stack. Same as a kick, the funds don't move on their own. Everyone clicks withdraw to actually receive their USDC.

Stacked never moves a player's funds without the player's signature. Whenever someone leaves a table — by choice, by a kick, or because the table ended — they always have the final click.

## Hosting Free Play tables

Free Play tables work the same way for the Host. Create the table, pick stakes, approve players, kick or pause as needed — there are just no earnings. Hosts run Free Play tables for the reasons people host home games — friends, communities, practice, fun. If you want to run a table where the cost of being wrong is zero, this is it.

## What's next

- [Hosting earnings →](/docs/hosting/earnings) — how your 25% share is tracked and withdrawn.
- [How rake works →](/docs/your-money/rake) — the full breakdown of the platform fee.
- [Connect a wallet →](/docs/getting-started/connect-a-wallet) — required before you can create a table.
- [Joining a table →](/docs/playing/joining-a-table) — the player side of the same approval flow.
