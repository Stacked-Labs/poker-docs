---
sidebar_position: 83
---

# Troubleshooting

Quick fixes for the issues that come up most. If something here doesn't help, reach out in the community channel.

## I can't sign in with my wallet

**Most common cause:** the wallet is on the wrong network. Stacked Poker runs on Base, an Ethereum-based network with very low fees. Switch your wallet to Base and try again. Most wallets switch automatically when prompted.

If the sign-in button doesn't respond, refresh the page. If you use a browser extension wallet, make sure it's unlocked.

## A transaction is stuck or failed

**Stuck:** Base congestion can briefly slow transactions. Wait a minute and refresh. Usually the transaction confirms.

**Failed:** if you signed in with your own wallet, check that it has enough ETH (the coin that pays network fees on Base) for gas, the small network fee paid to process a transaction. A few cents' worth is plenty. If you signed in with a social account, email or phone, Stacked covers gas, so skip this check. If gas is fine and the transaction still fails, the contract may have rejected it (wrong amount, table closed and so on). Try again with the amounts the prompt suggests.

## I bought in, but I'm not seated

Most tables seat you instantly, so first try refreshing. If you still see a pending status, this Host has turned off Auto-Accept and approves each player by hand. If the Host declines or doesn't get to you, your USDC is safe in the contract. USDC is a digital dollar that holds a stable value. You can take your buy-in back to your wallet balance. See [Cash out](/docs/your-money/withdrawals).

## I lost my connection mid-hand

The action timer keeps running. If you don't come back and act before it expires, you fold. If you come back in time, you can keep playing.

## I can't leave the table

You can only leave between hands. Finish the current hand first, then stand up and tap **Cash out**.

## My stack hasn't come back to my wallet balance

Your stack returns once you've stood up between hands and tapped **Cash out**. If you signed in with your own wallet, the confirmation has to be signed from it, so check that it's signed in and on Base.

## Settlement seems stuck

If a cash-table hand finishes and the next one doesn't deal for an unusually long time, settling that hand may be taking longer than usual. The table pauses while this resolves. If hands stop settling for 24 hours, [the 24-hour exit](/docs/your-money/emergency-exit) unlocks and you can withdraw your own stack from the contract.

## "Insufficient funds" when buying in

Two checks:

- Do you have enough USDC on Base to cover the buy-in? It has to be on Base, not Ethereum mainnet.
- If you signed in with your own wallet: do you have a small amount of ETH on Base for gas? If you signed in with a social account, email or phone, Stacked covers gas.

If you're short on USDC, tap **Add funds** in the header, or see [Add funds](/docs/getting-started/get-usdc-on-base).

## The number of chips looks wrong after sitting down

At a real-money cash table, one chip is $0.01. A $100 buy-in becomes 10,000 chips at the table. If the numbers seem off, try refreshing.

## What's next

- [FAQ →](/docs/reference/faq): common questions about how things work.
- [How custody works →](/docs/your-money/custody): what to expect when something goes wrong.
- [The 24-hour exit →](/docs/your-money/emergency-exit): the safety net when hands stop settling.
