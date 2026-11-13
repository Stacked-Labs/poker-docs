---
sidebar_position: 84
---

# Smart contracts

The addresses of the on-chain contracts Stacked runs on Base, so anyone can read the code and verify activity for themselves. This is a technical reference — you don't need anything here to play.

## How the contracts are organized

Stacked uses two independent contract systems on Base, an Ethereum-based network with very low fees:

- **Cash tables.** Each real-money cash table is its own contract, created by a shared **PokerFactory** when the Host creates the table. You can open any table's contract on Basescan from the table view.
- **Tournaments.** Each tournament is its own contract, created by a shared **TournamentFactory** when the tournament opens. The tournament system runs its own separate operator registry, so a tournament issue can never affect cash-table funds.

In both systems, every table or tournament runs the code its **beacon** points to. The factory and beacon addresses below stay fixed. The implementation addresses change whenever Stacked updates the contract code (see [Security & contracts](/docs/about/security)), so the live one is always what the factory or beacon reports on Basescan: use **Read as Proxy** on a factory, or `implementation()` on a beacon. The implementations listed here were read on 13 November 2026.

All contracts are source-verified on [Basescan](https://basescan.org), the public block explorer for Base, so the exact code each one runs is open to inspect. The tournament contracts are covered by an automated test suite; an external security audit is on the roadmap and not yet complete.

## Base mainnet

| Contract / role | Address |
|---|---|
| PokerFactory (proxy) | [0x698970173Ea813fD6502E2c851394dbA4D2cFbe4](https://basescan.org/address/0x698970173Ea813fD6502E2c851394dbA4D2cFbe4) |
| PokerFactory (implementation) | [0x3058D4FF02c3eD5e42B6339f362593e729c442c1](https://basescan.org/address/0x3058D4FF02c3eD5e42B6339f362593e729c442c1) |
| PokerTable beacon | [0x744E16572b54754E017b0aCC08b33d2cB9055d8C](https://basescan.org/address/0x744E16572b54754E017b0aCC08b33d2cB9055d8C) |
| PokerTable (implementation) | [0x14a2D5BD80dD0dB393C0B4F0a43A33A1A49A3ecC](https://basescan.org/address/0x14a2D5BD80dD0dB393C0B4F0a43A33A1A49A3ecC) |
| TournamentFactory (proxy) | [0xF3c45CAB6235c163F2a4a1859ECb063c9A32E652](https://basescan.org/address/0xF3c45CAB6235c163F2a4a1859ECb063c9A32E652) |
| TournamentFactory (implementation) | [0xb1E4E9c8d6189d0021559cF6dA024E04a44Ea15c](https://basescan.org/address/0xb1E4E9c8d6189d0021559cF6dA024E04a44Ea15c) |
| Tournament (implementation) | [0xAE12B231A31C11E492D506A9fe997191374bd589](https://basescan.org/address/0xAE12B231A31C11E492D506A9fe997191374bd589) |
| Tournament beacon | [0xEc86B3882965a94e2A9D2416Bb6a643ff46c30D8](https://basescan.org/address/0xEc86B3882965a94e2A9D2416Bb6a643ff46c30D8) |
| Admin | [0xFA04cC2127216C2699Fa1e1D9BD74cD3C583445b](https://basescan.org/address/0xFA04cC2127216C2699Fa1e1D9BD74cD3C583445b) |
| Platform wallet | [0xf272943b70d36F4b5EFbDF76f25237184b5CEF6a](https://basescan.org/address/0xf272943b70d36F4b5EFbDF76f25237184b5CEF6a) |
| USDC | [0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913](https://basescan.org/address/0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913) |


## Base Sepolia (testnet)

| Contract / role | Address |
|---|---|
| PokerFactory (proxy) | [0x4ecC21097307A105ED71cc3A3A1eAE89768aFA9D](https://sepolia.basescan.org/address/0x4ecC21097307A105ED71cc3A3A1eAE89768aFA9D) |
| PokerFactory (implementation) | [0x245CbcD6618066A14D35135bAAD6Bdc3824a5d9a](https://sepolia.basescan.org/address/0x245CbcD6618066A14D35135bAAD6Bdc3824a5d9a) |
| PokerTable beacon | [0x11FDfa2E89922f3B2d7963BaE495F6ee12b1cA5d](https://sepolia.basescan.org/address/0x11FDfa2E89922f3B2d7963BaE495F6ee12b1cA5d) |
| PokerTable (implementation) | [0xF21d58c8c1f43B8fd512a3E3bed0FF7401939660](https://sepolia.basescan.org/address/0xF21d58c8c1f43B8fd512a3E3bed0FF7401939660) |
| TournamentFactory (proxy) | [0xfDC0bf9b1ef67492561ddD605c408E1B73efc7EE](https://sepolia.basescan.org/address/0xfDC0bf9b1ef67492561ddD605c408E1B73efc7EE) |
| TournamentFactory (implementation) | [0x9f5B2C5c495c859Afdbe750A1D3299a1C44C0047](https://sepolia.basescan.org/address/0x9f5B2C5c495c859Afdbe750A1D3299a1C44C0047) |
| Tournament (implementation) | [0xD5eD365519951d544956862E198e0108fd7E0d13](https://sepolia.basescan.org/address/0xD5eD365519951d544956862E198e0108fd7E0d13) |
| Tournament beacon | [0xD0d8e97f398c65e3374ef939Da33F7da0311C3aC](https://sepolia.basescan.org/address/0xD0d8e97f398c65e3374ef939Da33F7da0311C3aC) |
| Admin | [0xFA04cC2127216C2699Fa1e1D9BD74cD3C583445b](https://sepolia.basescan.org/address/0xFA04cC2127216C2699Fa1e1D9BD74cD3C583445b) |
| Platform wallet | [0xf272943b70d36F4b5EFbDF76f25237184b5CEF6a](https://sepolia.basescan.org/address/0xf272943b70d36F4b5EFbDF76f25237184b5CEF6a) |
| USDC | [0x036CbD53842c5426634e7929541eC2318f3dCF7e](https://sepolia.basescan.org/address/0x036CbD53842c5426634e7929541eC2318f3dCF7e) |


## What's next

- [Tournaments →](/docs/playing/tournaments) — how tournaments work for players.
- [How fees work →](/docs/your-money/fees) — the full fee schedule.
- [Security & contracts →](/docs/about/security) — the broader contract security story.
