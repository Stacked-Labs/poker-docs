---
sidebar_position: 14
---

# Your first real-money hand

Real-money tables on Stacked are USDC-backed and settle on-chain. The flow is one extra step than Free Play, but everything happens between you and the contract.

## Before you start

- A connected wallet. See [Connect a wallet](/docs/getting-started/connect-a-wallet).
- USDC on Base in that wallet. See [Get USDC on Base](/docs/getting-started/get-usdc-on-base).
- A small amount of ETH on Base for gas. Gas on Base is typically under a cent per transaction.

## Steps

1. **Open the lobby and find a real-money table.** Tables are tagged so you can tell real-money apart from Free Play. Pick stakes that match what you brought — small blinds and big blinds are shown on each table card.
2. **Click sit and choose your buy-in.** You pick how much USDC you want to put on the table. Stakes guide the choice: a common starting point is 50–100 big blinds.
3. **Sign the deposit.** Your wallet pops up. If this is the first time you've deposited at this specific table, you may sign two transactions: a one-time USDC spending authorization and then the deposit itself. From then on, deposits to this table need only the deposit signature.
4. **Wait for confirmation.** The deposit confirms on Base in a few seconds.
5. **Wait for Host approval.** The Host sees your wallet and the buy-in you chose, and approves or declines. If they decline (or never respond), your USDC stays in the contract and you can click withdraw to pull it back. See [Withdrawals](/docs/your-money/withdrawals).
6. **Play.** When the Host approves, you're seated. The next hand deals you in.

## During the hand

Once seated, the game runs like any other Hold'em table — fold, check, call, bet, raise, with an action timer. **Your actions during a hand aren't on-chain**; nothing is signed by your wallet while a hand is in progress. The blockchain only sees the result of the hand when it settles. See [Per-hand settlement](/docs/your-money/settlement) for what that means.

Between hands, you'll see a brief on-chain settlement indicator. It's normally instant.

## Leaving

When you're done, click leave between hands (you can't leave mid-hand). The contract grants you withdrawal permission and you click withdraw to send your stack back to your wallet. You pay the gas on the withdrawal transaction.

## What's next

- [At the table →](/docs/playing/at-the-table) — controls and UX once you're seated.
- [Withdrawals →](/docs/your-money/withdrawals) — leaving cleanly.
- [How custody works →](/docs/your-money/custody) — what the table contract holds while you're playing.
