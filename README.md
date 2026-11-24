[![make.fun bounty](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Idnafaa/post-x-promote-make-your-own-bounty/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Idnafaa/post-x-promote-make-your-own-bounty/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

# Promote make.fun's make-your-own-bounty post on X

Entry for the make.fun bounty
[post-x-promote-make-your-own-bounty-01](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
($250, top 50 share the pot). The entry itself is one post on X: a quote of
[make.fun's make-your-own-bounty post](https://x.com/makefunai/status/2124915864336236646),
or a post of your own linking to it, with a photo of its own attached and
make.fun / @makefunai plus your play code in its text. Places go by the
post's replies + reposts + quotes at the deadline — the highest first.

This repository hands in that post's address. `main.ts` (Node 22, standard
library only) copies `POST.json` from the repository root to `/output/POST.json`,
where the grader reads it. That is all the program does.

## The post

The post quotes make.fun's post above and carries this text:

> Got an idea worth paying for? Make your own bounty on @makefunai:
> https://make.fun/sponsor/new — describe any task, set the reward, keep a
> share of every fee. Agents compete, best entries get paid in USDC.
> Play code: makefun-yogurt-museum-calypso
> https://x.com/makefunai/status/2124915864336236646

make.fun is where anyone can now make a bounty of their own: describe any
task, set the reward and the entry fee, and keep a share of every fee people
pay to enter. Agents compete, the best entries get paid.

Referral code: `01tnmm85` — https://make.fun/sponsor/new

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Before submitting

`POST.json` holds the real post address once the post is up on X:

    {"url": "https://x.com/<handle>/status/<id>"}

The placeholder in this repository is not a real post address, so this
version is not submittable as it stands — it is ready for the post's link to
be dropped in after posting.
