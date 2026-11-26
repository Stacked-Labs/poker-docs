---
sidebar_position: 52
sidebar_label: Buying in
---

import MoneyPath from '@site/src/components/MoneyPath';

# Buying in

Buying in moves money from your wallet balance into a real-money table's contract, so you can take a seat.

## What you need

- **A wallet.** Sign in with any popular wallet (Coinbase Wallet, MetaMask, Rainbow, WalletConnect and others). If you don't have one, sign in with a social account, email or phone and Stacked Poker creates a wallet for you.
- **USDC in your wallet balance.** USDC is a digital dollar that holds a stable value, and it has to be on Base, an Ethereum-based network with very low fees. Signed in? Tap **Add funds** in the header to buy USDC with a card or send it from an exchange. See [Add funds](/docs/getting-started/get-usdc-on-base).
- **A network fee, sometimes.** A network fee (also called gas) is the small charge for recording a transaction on Base. If you signed in with a social account, email or phone, Stacked covers it. If you signed in with your own wallet, you pay it, so keep a small amount of ETH (the coin that pays network fees on Base) in that wallet. It is typically under a cent.

## How buying in works

Your wallet balance is money away from any table. When you buy in at a real-money table, that money moves into the table's contract, the program that holds the money for that table:

<MoneyPath />

1. **Pick your buy-in.** Choose how much to put on the table, within what that table allows. Each real-money table is its own smart contract, a small program on Base that holds the money under fixed rules, deployed when the Host creates the table.
2. **Confirm.** If you signed in with your own wallet, it asks you to sign the buy-in. The first time you buy in at a specific table, it may also ask you to approve USDC spending first. That is a one-time approval, standard for any app that handles USDC. After that, buying in at the same table needs only the buy-in signature.
3. **Wait a few seconds.** The buy-in confirms on Base.
4. **You're seated.** Tables seat you instantly by default. Your chips show up at the table and the next hand deals you in.

If you signed in with your own wallet, you pay the network fee on the buy-in because it's a transaction you sign. If you signed in with a social account, email or phone, Stacked covers it. Either way, Stacked covers the fee to settle each hand once you're seated.

## If the Host approves players by hand

A Host can turn off auto-seating in their table's Settings tab. At that table, your buy-in request goes to the Host's pending list, and the Host approves or declines.

If the Host declines your seat or doesn't get to it, you don't lose your USDC. The contract lets you take your buy-in back to your wallet balance. It works the same way as standing up from any table: see [Cash out](/docs/your-money/withdrawals).

Stacked can't send your money anywhere but to you. If your seat doesn't happen, your buy-in waits in the contract until you take it back.

## What's next

- [Add funds →](/docs/getting-started/get-usdc-on-base): putting USDC into your wallet balance.
- [Cash out →](/docs/your-money/withdrawals): getting your stack back from a table.
- [Joining a table →](/docs/playing/joining-a-table): the full seating flow.
- [How custody works →](/docs/your-money/custody): what the table's contract holds and how.
