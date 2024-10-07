---
sidebar_position: 3
---

# How It Works

Stacked Poker is designed to combine the excitement of poker with the power and security of blockchain technology. Here's a quick overview of how the system works:

## 1. Web3 Wallet Integration

To access the Stacked Poker platform, players use a Web3 wallet, such as Metamask, Rabby Wallet, Coinbase, or any other compatible wallet. The Web3 wallet is used for secure login and authentication, as well as for managing transactions on the platform. This ensures that user funds are securely managed and that all game interactions are seamless and transparent.

## 2. Stacked Poker Backend

Once authenticated, players are connected to the **Stacked Poker proprietary backend**, which is responsible for managing the core poker game experience. The backend performs several key functions:

* **Websocket Connections:** Keeps the communication fast and responsive by managing player connections in real-time.
* **Game Logic and State Management:** The backend generates poker games, handles all poker logic (such as dealing cards and determining the winner), and keeps track of the current state of each game.
* **Contract Deployment and Management:** It also manages the deployment of game-specific smart contracts and updates player stack data on the smart contract.

## 3. Smart Contract as the "Bank"

For each game created, a unique **smart contract** is deployed on the blockchain, serving as a secure "bank" for that game. The smart contract is responsible for:

* **Holding Funds:** It securely holds user deposits in ERC20 tokens, ensuring that all funds are managed transparently and safely.
* **Managing Player Stacks:** The smart contract keeps an up-to-date record of each player's chip stack, including the value accumulated up to the most recent hand.
* **Deposits and Withdrawals:** Players can deposit and withdraw their tokens, and these transactions are handled directly by the smart contract to ensure fairness.
* **Game Payouts:** At the end of each game, the smart contract pays out player stacks based on the game results, ensuring that winnings are distributed without manual intervention.

![Backend Architecture](/img/backend.png)

## Summary

Stacked Poker uses a combination of secure Web3 wallets, a robust proprietary backend, and blockchain-based smart contracts to offer a seamless and transparent poker experience. Each component plays a critical role: wallets for user control, the backend for gameplay management, and smart contracts for secure fund handling.