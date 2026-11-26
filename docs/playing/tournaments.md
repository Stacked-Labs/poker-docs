---
sidebar_position: 24
---

# Tournaments

Tournaments let a group of players each buy in for the same amount, play until one player holds all the chips, and split a prize pool. The buy-ins sit in the tournament's own contract, which pays the prizes out when the event ends.

## What a tournament is

A tournament is a single event with a set buy-in. You find them under **Events**. Everyone who enters pays the same buy-in in USDC (a digital dollar that holds a stable value), receives an equal stack of tournament chips, and plays until they run out or win it all. Unlike cash games, tournament chips have no cash value of their own. They only decide your finishing place. What you actually win is a share of the prize pool, paid in USDC.

Tournaments run on Base (an Ethereum-based network with very low fees), and each tournament is its own contract, a program on Base that holds the buy-ins and follows fixed rules, created when the tournament opens. Your USDC sits in that contract, not with Stacked Poker, until the tournament pays out.

Tournament hands don't settle onchain one by one the way cash-table hands do. The contract pays out when the tournament ends, and finished events show that onchain payout receipt.

## How a tournament works

- **Register.** While registration is open, you pay the buy-in to enter. The buy-in is all-inclusive: the platform fee is already built into it, so there's nothing extra added on top.
- **Late registration.** Most tournaments keep registration open for a window after play begins, so you can still join a little late.
- **Re-entry.** If you bust during the late-registration window, you can buy back in for another shot, as many times as the Host allows: from 1 to 10 re-entries, or none at all. Once the window closes, busting out is final.
- **Free Tickets.** A Host can hand out free seats. A Free Ticket covers your first entry, and any re-entry costs the normal buy-in. See [Free Tickets](/docs/hosting/free-tickets).
- **Play down.** Tables combine as players are knocked out, until everyone left is at one final table and then one player has all the chips.
- **Get paid.** When the tournament ends, the top finishers receive their share of the prize pool, sent straight to their wallets onchain.

## The prize pool

The prize pool is the sum of every buy-in, minus the platform fee, and the top finishers split it. A $20 buy-in tournament with 40 entries builds its prize pool from those 40 buy-ins (less the fee) and pays it out across the top places.

A Host can guarantee a minimum prize pool, for example $500. The Host puts the guarantee into the tournament's contract, and the event shows it as guaranteed only once it is funded. Until then it shows its prize pool and "Guarantee not yet funded". If the buy-ins don't reach the guarantee, the Host's funds make up the difference.

Some tournaments also carry a **bonus prize**: a fixed amount of a second token that the Host funds themselves and that pays out on top of the USDC. In some tournaments the bonus prize is the only prize, and buy-ins go to the Host instead of forming a pool. That's always labelled on the tournament. See [Bonus prizes](/docs/playing/bonus-prizes).

## Buy-in and the platform fee

The platform fee on a tournament is part of the buy-in, not a separate charge. It's a percentage of the buy-in that steps down as buy-ins get larger: a higher percentage at small buy-ins, lower at large ones. Tournaments that are free to enter (no buy-in) carry no fee at all. The exact schedule is on the [How fees work](/docs/your-money/fees) page. As with cash games, the Host of a tournament earns 25% of that fee. See [What Hosts earn](/docs/hosting/earnings).

## Changing your mind, and tournaments that can't run

- **Unregister.** If you change your mind before the tournament starts (up to a few minutes before), you can unregister and get your buy-in back in full.
- **Not enough players.** Every tournament has a minimum number of entries. If it doesn't fill, the tournament is cancelled and everyone is refunded their full buy-in.
- **The 24-hour exit.** If a tournament ever stalls and isn't paid out, a 24-hour safety net kicks in. After that point anyone can open refunds, and every entrant can reclaim their share of what's in the contract. This is the same fallback that protects cash-game balances. See [The 24-hour exit](/docs/your-money/emergency-exit).

## Private tournaments

A tournament can be public, where anyone can register, or private. A private tournament needs an access code from the Host to enter. That's useful for a home game, a community event, or an invite-only series.

## Gas

Gas is the small network fee for an onchain action. Stacked Poker covers the gas to open a tournament and to pay out the prizes, so neither the Host nor the winners pay for those. If you signed in with your own wallet, you pay gas only on the actions you confirm yourself: registering (paying your buy-in), buying back in, unregistering, or claiming a prize that wasn't delivered automatically. If you signed in with a social account, email or phone, Stacked covers those too.

## Walkthrough

Alice opens a $20 buy-in tournament with a $500 guaranteed prize pool and a minimum of 20 entries. Registration opens, and 40 players, including Bob, each pay $20 to enter.

- Alice funded the $500 guarantee when she set the tournament up. The 40 buy-ins more than cover it, so her guarantee goes back to her and none of her own money is used.
- Play begins. Bob busts midway through the first hour, but late registration is still open, so he re-enters once for another $20 and keeps playing.
- Hours later, three players remain and the prize pool is split among them. Bob finishes second, and his share lands in his wallet onchain when the tournament pays out.
- As the Host, Alice earns 25% of the platform fee collected across all the buy-ins.

If only 12 players had registered instead of 40, below Alice's minimum of 20, the tournament would be cancelled and all 12 would get their $20 back in full.

## What's next

- [Bonus prizes →](/docs/playing/bonus-prizes): fixed prizes in a second token, funded by the Host.
- [Entry tasks →](/docs/hosting/entry-tasks): tasks a Host can ask you to finish before you register.
- [How fees work →](/docs/your-money/fees): the buy-in fee schedule, for cash games and tournaments.
- [What Hosts earn →](/docs/hosting/earnings): the Host's 25% share.
- [The 24-hour exit →](/docs/your-money/emergency-exit): the safety net that also covers tournaments.
