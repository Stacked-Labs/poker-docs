---
sidebar_position: 83
---

# Troubleshooting

Quick fixes for the issues that come up most. If something here doesn't help, reach out in the community channel.

## Wallet won't connect

**Most common cause:** wallet on the wrong network. Stacked runs on Base; switch your wallet to Base and try again. Most wallets switch automatically when prompted.

If the connect button doesn't respond, refresh the page. If you're using a browser extension wallet, make sure it's unlocked.

## Transaction stuck or failed

**Stuck:** Base congestion can briefly slow transactions. Wait a minute and refresh — usually the transaction confirms.

**Failed:** check that your wallet has enough ETH on Base for gas. A few cents' worth is plenty. If gas is fine and the transaction still fails, the contract may have rejected it (wrong amount, table closed, etc.) — try again with the prompt's suggested values.

## Deposited, but I'm not seated

You're in the pending list waiting for the Host to approve. The Host sees your wallet and buy-in; most respond quickly. If the Host declines or doesn't get to you, your USDC is safe in the contract — click withdraw to pull it back. See [Withdrawals](/docs/your-money/withdrawals).

## Disconnected mid-hand

The action timer keeps running. If you don't reconnect and act before it expires, the system folds you. If you reconnect in time, you can keep playing.

## Can't leave the table

You can only leave between hands. Finish the current hand first, then the leave button activates.

## Can't withdraw

Withdrawals happen between hands. If you just left the table, give it a moment for the contract to grant you withdrawal permission, then try again. The withdraw transaction has to be signed from your wallet; check that your wallet is connected and on Base.

## Settlement seems stuck

If a hand finishes and the next one doesn't deal for an unusually long time, the backend may be retrying a stuck settlement. The table pauses while this resolves. If settlements stall for 24 hours, the [24-hour emergency exit](/docs/your-money/emergency-exit) unlocks and you can withdraw your stack directly from the contract.

## "Insufficient funds" when depositing

Two checks:

- Do you have enough USDC on Base to cover the buy-in? (Not Ethereum mainnet — USDC has to be on Base.)
- Do you have a small amount of ETH on Base for gas?

See [Get USDC on Base](/docs/getting-started/get-usdc-on-base) if your wallet is empty.

## Wrong amount of chips after sitting down

Chip-to-USDC conversion is fixed at 1 chip = $0.01. So a 100 USDC buy-in becomes 10,000 chips at the table. If the numbers seem off, try refreshing.

## What's next

- [FAQ →](/docs/reference/faq) — common questions about how things work.
- [How custody works →](/docs/your-money/custody) — what to expect when something goes wrong.
- [24-hour emergency exit →](/docs/your-money/emergency-exit) — the safety net for stalled settlements.
