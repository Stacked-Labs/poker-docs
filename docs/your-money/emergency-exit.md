---
sidebar_position: 55
sidebar_label: The 24-hour exit
---

import ExitClock from '@site/src/components/ExitClock';

# The 24-hour exit

If hands stop settling for 24 hours, you can withdraw your own stack. This page covers when the 24-hour exit opens, how to use it and what you get back.

## What it is

Your stack is held in USDC. USDC is a digital dollar that holds a stable value. Every real-money table on Stacked Poker is its own smart contract, a small program on the blockchain that holds the money and follows fixed rules. It is deployed on Base, an Ethereum-based network with very low fees. At a cash table, the contract typically settles every hand onchain in under 5 seconds. If that ever fails, for any reason, including an outage on Stacked's side, the contract has a fallback built in:

**24 hours after the last successful settlement, any player at the table can withdraw their current stack straight back to their wallet.**

<ExitClock />

This is the safety net behind custody. You don't have to take our word for it that your money is safe. The contract holds it, and the 24-hour exit is what makes that real.

## When the clock starts

The 24-hour clock resets every time a hand settles onchain at your table. As long as hands keep settling, the clock keeps resetting and the exit stays locked.

If something goes wrong and settling stops, the clock runs from the last successful hand. Once 24 hours have passed without another, the exit unlocks for every player seated at the table.

## Who can use it

The exit is for players still seated at the table. The clock counts from the last hand settled at the whole table, so while other players keep playing there and hands keep settling, it stays locked. In that case you can stand up and get your stack back the ordinary way.

If you've already left the table, use the ordinary return to your wallet balance, described on [Cash out](/docs/your-money/withdrawals). If Stacked has paused ordinary returns in an emergency, your stack stays in the contract, in your name, until they resume. A pause can delay your money. It can't send it anywhere else.

Tournaments have their own version: if a tournament stalls and isn't paid out, anyone can open refunds 24 hours after its advertised end time. See [Tournaments](/docs/playing/tournaments).

## How to use it

Open the table's **Settings → Players** tab. Once the 24-hour window has passed without a settled hand, the option to withdraw your stack appears there. Tap it and, if you signed in with your own wallet, sign the transaction. The contract releases your current stack to your wallet.

Stacked's servers aren't involved in this step. The contract handles it on its own, and it can be called from any wallet tool, so your money is still reachable even if our app is not. You don't need our cooperation for the 24-hour exit to work.

## What you get back

Your current stack at the stalled table. The amount is whatever was last settled for you before hands stopped settling, so the protection is exactly as good as the most recent settled hand. Under normal operation, that's the last hand you played.

The exit works one table at a time. Using it at one table doesn't touch any other table you're seated at. If you're stalled at one and playing normally at another, only the stalled one unlocks.

## What happens to the table

Once players use the 24-hour exit, that's typically the end of the table. Players take their stacks, the table closes out, and Stacked works through whatever caused the stall before opening a new one.

## When you'd actually need this

In normal operation, you wouldn't. Hands settle one by one and the clock never gets near 24 hours. The exit exists for the edge cases: outages, infrastructure failures, anything that could otherwise leave your money out of reach. It's a safety net you hopefully never reach for. The point is that it's always there.

## What's next

- [How custody works →](/docs/your-money/custody): the full picture of how the table's contract holds your money.
- [How hands settle →](/docs/your-money/settlement): what's supposed to happen on every cash-table hand.
- [Cash out →](/docs/your-money/withdrawals): the ordinary way your money comes back.
