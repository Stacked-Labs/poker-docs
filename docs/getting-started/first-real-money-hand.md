---
sidebar_position: 14
---

# Your first real-money hand

At a real-money table you buy in with USDC, a digital dollar that holds a stable value, and your buy-in sits in that table's own contract.

The flow is one extra step compared to Free Play. The contract is a small program on Base, an Ethereum-based network with very low fees, that holds the money and follows fixed rules. Each real-money table is its own contract, deployed when the Host creates it. Your USDC sits in that contract, not with Stacked Poker, and only the contract's rules can move it.

## Before you start

- A signed-in account. See [Sign in](/docs/getting-started/connect-a-wallet).
- USDC on Base in your wallet balance. Click **Add funds** in the header to buy it with a card or add it from an exchange. See [Add funds](/docs/getting-started/get-usdc-on-base).
- Only if you signed in with your own wallet: a small amount of ETH (the coin that pays network fees on Base) for network fees, also called gas: the small charge for a transaction you confirm yourself. It is typically under a cent per transaction. If you signed in with a social account, email or phone, Stacked Poker covers these fees and you don't need ETH.

## Steps

1. **Open Play and find a real-money table.** Tables are tagged so you can tell real-money apart from Free Play. Pick stakes that match what you brought: small blinds and big blinds are shown on each table card.
2. **Pick a seat and choose your buy-in.** You pick how much USDC you want to put on the table. Stakes guide the choice: a common starting point is 50–100 big blinds.
3. **Confirm the buy-in.** If you signed in with your own wallet, it pops up. The first time you buy in at a specific table, you may confirm two transactions: a one-time USDC spending authorization, then the buy-in itself. After that, buy-ins at this table need only the buy-in confirmation.
4. **Wait for confirmation.** The buy-in confirms on Base in a few seconds.
5. **Play.** Tables seat you instantly by default, and the next hand deals you in. If the Host has turned off Auto-Accept, you wait for them to approve you first. If they decline (or never respond), your USDC stays in the contract and you can take your table stack back to your wallet balance. See [Cash out](/docs/your-money/withdrawals).

## During the hand

Once seated, the game runs like any other Hold'em table: fold, check, call, bet, raise, with an action timer. **Your actions during a hand aren't onchain.** Nothing is confirmed by your wallet while a hand is in progress. At a cash table, the blockchain only sees the result of the hand when it settles. See [How hands settle](/docs/your-money/settlement) for what that means.

Between hands, you'll see a brief settlement indicator. Settlement is fast, typically under 5 seconds on Base, and runs in the background. You never pay gas to settle a hand: Stacked covers that.

## Leaving

When you're done, stand up between hands (you can't leave mid-hand), then tap **Cash out**. Your table stack returns from the contract to your wallet balance. If you signed in with your own wallet, you confirm the step and pay the network fee. If you signed in with a social account, email or phone, Stacked covers it.

## What's next

- [At the table →](/docs/playing/at-the-table): controls once you're seated.
- [Cash out →](/docs/your-money/withdrawals): leaving cleanly.
- [How custody works →](/docs/your-money/custody): what the table's contract holds while you're playing.
