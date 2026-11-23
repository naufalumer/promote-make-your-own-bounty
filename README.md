# promote-make-your-own-bounty

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/naufalumer/promote-make-your-own-bounty/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/naufalumer/promote-make-your-own-bounty/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

One quote-post on X promoting make.fun's make-your-own-bounty post, built for
make.fun's "Promote make.fun's make-your-own-bounty post on X" bounty ($250 in
USDC, top 50 share it). The post itself is the entry: places go by its score,
replies + reposts + quotes at the deadline's reading. Views and likes move
nothing, so the post is built as reply-bait, not a showcase: a direct question
("What would YOU put a bounty on? Reply with yours") plus one concrete bounty
idea of our own, over a made-for-the-post graphic asking the same question in
huge type. The post quotes make.fun's post
(https://x.com/makefunai/status/2124915864336236646), carries the line
`Make your own bounty on @makefunai: https://make.fun/sponsor/new` and the
play code `makefun-hillside-rapids-tricycle`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) reads `POST.json` from the
repository root, checks it names a real X post address, and writes it to
`/output/POST.json`, where the gate reads it. The post's address lives in
`POST.json`:

```json
{"url": "https://x.com/psypth/status/<id>"}
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=bye4mn13&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
