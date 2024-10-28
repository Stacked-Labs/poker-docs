---
sidebar_position: 3
---

# How It Works

Stacked Poker is designed to combine the excitement of poker with the power and security of blockchain technology. Here's a quick overview of how the system works:

## 1. Web3 Wallet Integration

To access the Stacked Poker platform, players use a Web3 wallet, such as MetaMask, Rabby Wallet, Coinbase, or any other compatible wallet. The Web3 wallet is used for secure login and authentication, as well as for managing transactions on the platform. This ensures that user funds are securely managed and that all game interactions are seamless and transparent.

## 2. Stacked Poker Backend

Once authenticated, players are connected to the **Stacked Poker proprietary backend**, which is responsible for managing the core poker game experience. The backend performs several key functions:

- **Real-time Game Management**: Handles game state, player actions, and game logic to ensure a smooth and responsive gaming experience.
- **Smart Contract Interaction**: Manages the deployment and interaction with smart contracts that govern each game.
- **Scalability and Performance**: Ensures that the platform can handle multiple concurrent games without performance degradation.

## 3. Detailed Workflow

### 3.1 Game Creation Process

Stacked makes it easy for anyone to create and host a poker game. Here’s how it works:

1. **Connect a Wallet**: Players connect their Web3 wallet to start hosting or joining a game.
2. **Generate a Game Link**: Game hosts choose the network, token, buy-in amount, and other settings. The system generates a game link that can be shared with friends or the community.
3. **Deposit Buy-in**: Players deposit their buy-in directly into the game’s smart contract, ensuring a trustless gaming experience.
4. **Payouts**: At the end of the game, the smart contract automatically distributes winnings to the players’ wallets.

### 3.2 Web3 and Backend Interaction

Once a player connects their Web3 wallet, the Stacked backend takes over. The backend manages:

- **WebSocket Connections**: Maintains real-time communication channels to keep games fast and responsive.
- **Game Logic and State Management**: Handles actions such as dealing cards, managing player moves, and determining winners.
- **Smart Contract Deployment**: Manages the deployment of smart contracts that handle deposits, updates to player stacks, and final payouts.

### 3.3 Smart Contracts as the Game "Bank"

Every game created on Stacked has a unique smart contract acting as the bank. This contract:

- **Holds Player Deposits**: Securely stores the ERC-20 tokens deposited by players.
- **Updates Player Stacks**: Keeps track of each player's remaining tokens in real-time during the game.
- **Processes Payouts**: Automatically distributes winnings to players' wallets at the conclusion of the game.

This ensures that all transactions are fair and secure without requiring any third-party oversight.

### 3.4 Deposits and Withdrawals

- **Deposits**: Players deposit ERC-20 tokens into the smart contract at the start of the game. These funds are locked until the game concludes.
- **Withdrawals**: At the end of the game, the smart contract pays out winnings based on the final results. Players can withdraw their funds anytime if they choose to leave the game, subject to the game's rules and conditions.

This mechanism ensures a trustless and transparent gaming experience, leveraging the security and efficiency of blockchain technology.

![How It Works](/img/backend.png)

## Summary

Stacked Poker uses a combination of secure Web3 wallets, a robust proprietary backend, and blockchain-based smart contracts to offer a seamless and transparent poker experience. Each component plays a critical role: wallets for user control, the backend for gameplay management, and smart contracts for secure fund handling.

