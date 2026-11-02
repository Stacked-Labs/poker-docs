---
sidebar_position: 14
---

# Your first real-money hand

Real-money tables on Stacked are staked in USDC (a digital dollar that holds a stable value) and settle on-chain. The flow is one extra step compared to Free Play, but everything happens between you and the table's own smart contract — a small program on Base (an Ethereum-based network with very low fees) that holds the money and follows fixed rules. Each real-money table is its own contract, deployed when the Host creates it; your USDC sits in that contract, not with Stacked, and only the contract's rules can move it.

## Before you start

- A connected wallet. See [Connect a wallet](/docs/getting-started/connect-a-wallet).
- USDC on Base in that wallet. Click **Add funds** in the header to buy it with a card or send it from an exchange. See [Get USDC on Base](/docs/getting-started/get-usdc-on-base).
- Only if you connected your own wallet: a small amount of ETH on Base for network fees (also called gas), the small charge for a transaction you sign yourself. It is typically under a cent per transaction. If you signed in with Google, X, Discord or email, Stacked covers these fees and you don't need ETH.

## Steps

1. **Open the lobby and find a real-money table.** Tables are tagged so you can tell real-money apart from Free Play. Pick stakes that match what you brought — small blinds and big blinds are shown on each table card.
2. **Click sit and choose your buy-in.** You pick how much USDC you want to put on the table. Stakes guide the choice: a common starting point is 50–100 big blinds.
3. **Sign the deposit.** Your wallet pops up. If this is the first time you've deposited at this specific table, you may sign two transactions: a one-time USDC spending authorization and then the deposit itself. From then on, deposits to this table need only the deposit signature.
4. **Wait for confirmation.** The deposit confirms on Base in a few seconds.
5. **Play.** Tables seat you instantly by default, and the next hand deals you in. If the Host has turned off Auto-Accept, you wait for them to approve you first. If they decline (or never respond), your USDC stays in the contract and you can click withdraw to pull it back. See [Withdrawals](/docs/your-money/withdrawals).

## During the hand

Once seated, the game runs like any other Hold'em table — fold, check, call, bet, raise, with an action timer. **Your actions during a hand aren't on-chain**; nothing is signed by your wallet while a hand is in progress. The blockchain only sees the result of the hand when it settles. See [Per-hand settlement](/docs/your-money/settlement) for what that means.

Between hands, you'll see a brief on-chain settlement indicator. Settlement is fast — typically under 5 seconds on Base — and runs in the background. You never pay gas to settle a hand; Stacked covers that.

## Leaving

When you're done, click leave between hands (you can't leave mid-hand). The contract grants you withdrawal permission and you click withdraw to send your stack back to your wallet. If you connected your own wallet, you pay the network fee on the withdrawal. If you signed in with Google, X, Discord or email, Stacked covers it.

## What's next

- [At the table →](/docs/playing/at-the-table) — controls and UX once you're seated.
- [Withdrawals →](/docs/your-money/withdrawals) — leaving cleanly.
- [How custody works →](/docs/your-money/custody) — what the table contract holds while you're playing.
