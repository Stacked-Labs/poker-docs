---
sidebar_position: 81
---

# Supported wallets

Stacked uses thirdweb for wallet integration, so any wallet thirdweb supports works for sign-in, deposits, and withdrawals. You're not locked into one specific wallet.

## Self-custody wallets

You connect a wallet you already control. Common options:

- **Coinbase Wallet** — works well, especially if you're sourcing USDC from a Coinbase account.
- **MetaMask** — the most widely used Ethereum wallet; switches to Base when prompted.
- **Rainbow** — mobile-first.
- **WalletConnect-compatible wallets** — Rabby, Trust Wallet, Zerion, Frame, Ledger Live, and many others.

If your wallet supports Base and signs Ethereum messages, it almost certainly works on Stacked.

## Embedded wallet

If you don't have a wallet, Stacked can create one for you using thirdweb's embedded wallet. You sign in with an email or a social account and Stacked provisions the wallet behind the scenes.

The embedded wallet is yours — you can export the keys later if you ever want to move to a different wallet app.

## What network and token

Stacked runs on **Base**. All real-money tables use **USDC** on Base. Make sure your wallet is set to Base when prompted; most wallets will switch automatically when Stacked asks.

## What's next

- [Connect a wallet →](/docs/getting-started/connect-a-wallet)
- [Get USDC on Base →](/docs/getting-started/get-usdc-on-base)
