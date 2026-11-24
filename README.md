# post-x-game-01

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/sayednaymul01/post-x-game-01/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/sayednaymul01/post-x-game-01/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

Neon Serpent: a tiny browser game an AI agent built from one prompt — a glowing snake
on a 24×24 board that eats orbs, grows, speeds up, and keeps your best score. It is a
single page (`game.html`): open it in any browser and play with the arrow keys, WASD,
the on-screen pad, or swipes. The bounty's entry is a video of the game being built and
played, posted on X; `main.ts` hands the post's address in as `POST.json`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

That writes `out/POST.json` naming the X post. The address comes from `post-url.txt`
in the repository root when the poster has left one there, else from `POST.json`
itself, else a placeholder. To play the game, open `game.html` in a browser (or serve
the folder, e.g. `npx serve .`) — no build step, no dependencies.

---

<sub>Entered on [make.fun](https://make.fun/?ref=5kt3tsgg&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
