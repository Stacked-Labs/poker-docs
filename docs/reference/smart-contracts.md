---
sidebar_position: 84
---

# Smart contracts

The addresses of the on-chain contracts Stacked runs on Base, so anyone can read the code and verify activity for themselves. This is a technical reference — you don't need anything here to play.

## How the contracts are organized

Stacked uses two independent contract systems on Base, an Ethereum-based network with very low fees:

- **Cash tables.** Each real-money cash table is its own contract, deployed when the Host creates the table. There's no single shared address — every table is a separate contract you can open on Basescan from the table view.
- **Tournaments.** Each tournament is its own contract, created by a shared **TournamentFactory** when the tournament opens. The factory, its implementation, and the tournament template are fixed addresses, listed below. The tournament system runs its own separate operator registry, so a tournament issue can never affect cash-table funds.

All contracts are source-verified on [Basescan](https://basescan.org), the public block explorer for Base, so the exact code each one runs is open to inspect. The tournament contracts are covered by an automated test suite; an external security audit is on the roadmap and not yet complete.

## Base mainnet

| Contract / role | Address |
|---|---|
| TournamentFactory (proxy) | [0xF3c45CAB6235c163F2a4a1859ECb063c9A32E652](https://basescan.org/address/0xF3c45CAB6235c163F2a4a1859ECb063c9A32E652) |
| TournamentFactory (implementation) | [0xe3fa363cFe27af9fE79e675f5F543E3CE2B0EB2f](https://basescan.org/address/0xe3fa363cFe27af9fE79e675f5F543E3CE2B0EB2f) |
| Tournament (implementation) | [0x60EFf0C6068DD190826E8d900Be9Ddcff20a2Ba5](https://basescan.org/address/0x60EFf0C6068DD190826E8d900Be9Ddcff20a2Ba5) |
| UpgradeableBeacon | [0xEc86B3882965a94e2A9D2416Bb6a643ff46c30D8](https://basescan.org/address/0xEc86B3882965a94e2A9D2416Bb6a643ff46c30D8) |
| Admin | [0xFA04cC2127216C2699Fa1e1D9BD74cD3C583445b](https://basescan.org/address/0xFA04cC2127216C2699Fa1e1D9BD74cD3C583445b) |
| Platform wallet | [0xf272943b70d36F4b5EFbDF76f25237184b5CEF6a](https://basescan.org/address/0xf272943b70d36F4b5EFbDF76f25237184b5CEF6a) |
| USDC | [0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913](https://basescan.org/address/0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913) |


## Base Sepolia (testnet)

| Contract / role | Address |
|---|---|
| TournamentFactory (proxy) | [0xfDC0bf9b1ef67492561ddD605c408E1B73efc7EE](https://sepolia.basescan.org/address/0xfDC0bf9b1ef67492561ddD605c408E1B73efc7EE) |
| TournamentFactory (implementation) | [0x9f5B2C5c495c859Afdbe750A1D3299a1C44C0047](https://sepolia.basescan.org/address/0x9f5B2C5c495c859Afdbe750A1D3299a1C44C0047) |
| Tournament (implementation) | [0xa5722b6FE467E0Dd6b957Fe2581657D80Cc29Aef](https://sepolia.basescan.org/address/0xa5722b6FE467E0Dd6b957Fe2581657D80Cc29Aef) |
| UpgradeableBeacon | [0xD0d8e97f398c65e3374ef939Da33F7da0311C3aC](https://sepolia.basescan.org/address/0xD0d8e97f398c65e3374ef939Da33F7da0311C3aC) |
| Admin | [0xFA04cC2127216C2699Fa1e1D9BD74cD3C583445b](https://sepolia.basescan.org/address/0xFA04cC2127216C2699Fa1e1D9BD74cD3C583445b) |
| Platform wallet | [0xf272943b70d36F4b5EFbDF76f25237184b5CEF6a](https://sepolia.basescan.org/address/0xf272943b70d36F4b5EFbDF76f25237184b5CEF6a) |
| USDC | [0x036CbD53842c5426634e7929541eC2318f3dCF7e](https://sepolia.basescan.org/address/0x036CbD53842c5426634e7929541eC2318f3dCF7e) |


## What's next

- [Tournaments →](/docs/playing/tournaments) — how tournaments work for players.
- [How fees work →](/docs/your-money/fees) — the full fee schedule.
- [Security & contracts →](/docs/about/security) — the broader contract security story.
