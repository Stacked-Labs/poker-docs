---
sidebar_position: 25
---

# Bonus prizes

A tournament can put up a fixed prize in a second token on top of the usual USDC payouts — funded by the Host up front, and paid to the top finishers when the tournament ends.

This page is about what you're playing for when a tournament advertises one, and what a Host needs to know before offering one.

## What a bonus prize is

Most tournaments pay out in USDC, a digital dollar that holds a stable value. A bonus prize is a fixed amount of a **different** token — a separate digital asset that lives on Base, the Ethereum-based network Stacked runs on — that the Host adds to the tournament as an extra prize.

Two things make it different from the normal prize pool:

- **It's a flat amount, set in advance.** The USDC prize pool grows with every entry. A bonus prize doesn't. If the Host puts up 1 WETH, it's 1 WETH whether 12 players enter or 200.
- **The Host pays for it, not the players.** It doesn't come out of anyone's buy-in. The Host funds it from their own wallet before registration opens.

Nothing is taken out of a bonus prize. The full amount the Host funded is what gets split among the finishers.

## How it works

**The Host funds it first.** When a Host sets up a tournament with a bonus prize, they transfer the tokens into the tournament's own smart contract — a program on Base that holds the money and follows fixed rules no one can override. **Registration doesn't open until that transfer lands.** You can't register for a tournament whose bonus prize hasn't actually been paid in, so an advertised bonus prize is always a funded one.

**It pays out on the same ladder as the cash.** The bonus is split among the same finishing places, in the same proportions, as the USDC prize pool. If 1st place takes 50% of the cash, 1st place takes 50% of the bonus. You can see the exact split for any tournament on its page before you register.

**It arrives the same way your cash prize does.** When the tournament ends, your share of both is sent to your wallet on-chain.

**If the tournament never runs, the Host gets it back.** If a tournament is cancelled — usually because it didn't reach its minimum number of entries — every player is refunded their buy-in in full, and the Host reclaims the bonus prize from the contract. Nobody keeps what they didn't play for.

## Two ways a tournament can be built

The bonus prize can sit **alongside** the usual prize pool, or **replace** it. Which one you're looking at is shown on the tournament before you register, and it changes what your buy-in is actually buying.

### Buy-ins build the prize pool (the usual setup)

Everyone's buy-ins form the USDC prize pool exactly as described on the [Tournaments](/docs/playing/tournaments) page, and the Host's bonus prize is paid **on top**. Winners take a share of both.

### Buy-ins go to the Host

Here the buy-ins don't build a prize pool at all — they go to the Host, and the bonus prize is the **only** thing players compete for. It's a way for a Host to run an event with a fixed, advertised prize regardless of turnout.

If you're looking at one of these, know two things:

- **The prize is fixed.** More entries do not make it bigger.
- **Re-entries don't grow the prize either.** If someone busts and buys back in, that money goes to the Host, not to the pool.

Stacked labels these tournaments and states both facts on the tournament page and again in the registration window, so nobody enters one thinking their buy-in is building the prize.

## Which tokens can be used

Stacked keeps a short, curated list of tokens that can be offered as bonus prizes. A Host picks from that list when creating a tournament — they can't paste in an arbitrary token address.

That's deliberate. A prize is only worth something if it behaves predictably when the contract pays it out, and unusual tokens can behave in ways that would strand a Host's funds or block a payout. Curating the list is how we keep an advertised prize a real one.

The list changes. It's short today — wrapped Ether (WETH), a token that tracks the price of Ether, is on it — and the live list is always the one shown in the tournament creation form.

### Getting a token added

**If you're a project or community that wants your token available as a bonus prize, come talk to us on [Discord](https://discord.gg/xdaC5gRP4E).** It's the fastest way to reach the team, and adding a token is a conversation rather than a form — we'll want to look at the token first, and talk about what you're planning to run.

This is also the route for anything else in this area: running a sponsored tournament, a community series, or a collaboration with your own players.

## Gas

Gas is the small network fee for an on-chain action. Stacked covers the gas to open a tournament and to pay out prizes — including the bonus prize — so winners never pay to receive one.

A Host pays gas on the transfer that funds the bonus prize, because that's an action they sign themselves. On Base that's a fraction of a cent.

## Walkthrough

Alice runs a community tournament: a $10 buy-in, and she puts up 0.5 WETH from her own wallet as a bonus prize. She chooses the usual setup, where buy-ins still build a USDC prize pool.

- Alice creates the tournament and funds the 0.5 WETH. Once that transfer lands, registration opens. Until then, nobody can register.
- 40 players enter, including Bob. Their buy-ins build the USDC prize pool, exactly as they would in any other tournament.
- The tournament page shows both prizes side by side: the USDC pool, which grows as players enter, and the fixed 0.5 WETH, which doesn't.
- Play finishes. The top places split the USDC pool, and they split the 0.5 WETH in the same proportions. Bob comes second and receives his share of both, sent to his wallet on-chain.
- As the Host, Alice earns 25% of the platform fee collected across the buy-ins. The 0.5 WETH was hers to give and is now paid out in full to the finishers.

Had only 6 players registered — below Alice's minimum — the tournament would have been cancelled, all 6 would have got their $10 back, and Alice would have reclaimed her 0.5 WETH.

## FAQ

**Does the bonus prize get smaller if lots of people enter?**
No. It's a flat amount. More entries grow the USDC prize pool (in the usual setup), but the bonus prize is whatever the Host funded.

**Is a fee taken out of the bonus prize?**
No. The full amount is paid to the finishers. The platform fee applies to buy-ins — see [How fees work](/docs/your-money/fees).

**What if the Host doesn't fund it?**
Then registration never opens and there's no tournament to enter. A bonus prize you can see on a tournament you can register for has already been paid in.

**Can a tournament have more than one bonus prize?**
Not today — one bonus token per tournament, alongside the USDC prizes.

**What if something goes wrong and the tournament doesn't pay out?**
The same 24-hour safety net that covers everything else on Stacked covers this too. If a tournament stalls, after 24 hours anyone can open refunds and entrants can reclaim their share of what's in the contract. See [the 24-hour emergency exit](/docs/your-money/emergency-exit).

**I hold a token and want it listed. What do I do?**
[Ask on Discord](https://discord.gg/xdaC5gRP4E). See [Getting a token added](#getting-a-token-added) above.

## What's next

- [Tournaments →](/docs/playing/tournaments) — buy-ins, late registration, re-entry, and how prize pools are built.
- [How fees work →](/docs/your-money/fees) — the platform fee on tournament buy-ins.
- [24-hour emergency exit →](/docs/your-money/emergency-exit) — the safety net behind every payout.
- [Contact and community →](/docs/about/contact) — where to find the team.
