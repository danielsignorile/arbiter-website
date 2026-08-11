# Arbiter Website — Operator Setup Guide

Everything needed to go from a brand-new Mac to shipping a live change to
`www.arbiter-completions.com`. Written for Sandenn. Follow it top to bottom;
nothing here requires you to infer anything.

Last verified against the repository and the live Vercel project on **2026-08-11**.

---

## 1. What this is

This is the Arbiter marketing website: a **Next.js 14.2.5** app using the App
Router, written in **TypeScript** with **React 18**, styled with **Tailwind CSS
3.4**, using **lucide-react** for icons. It is hosted on **Vercel** (project
`arbiter-website`) and serves **https://www.arbiter-completions.com** (the apex
`arbiter-completions.com` is also aliased to the same deployment). There is no
GitHub Actions pipeline and no separate deploy step: Vercel's GitHub integration
watches the `main` branch of `github.com/danielsignorile/arbiter-website`, and
**any push to `main` triggers a production build that is automatically promoted
to the live domain**. The most recent production build took **37 seconds**;
budget **40–60 seconds from `git push` to the change being live**.

---

## 2. Repository facts

| Item | Value |
| --- | --- |
| Repo URL | `https://github.com/danielsignorile/arbiter-website` |
| Visibility | **Public** (owned by the `danielsignorile` personal account, not an org) |
| Default branch | `main` |
| Branch that deploys to production | `main` — every deployment in the project's history has `target: production` and `ref: main` |
| Other long-lived branches | None. `main` is the only branch, locally and on the remote |
| CI / required checks in the repo | **None.** There is no `.github/` directory and no workflow files of any kind |
| Merge commits in history | **Zero.** Every commit has landed directly on `main`; no PR has ever been merged |
| Only status reported on commits | Vercel's own deployment check, posted by the GitHub integration |
| Vercel project | `arbiter-website` (`prj_4gTob3sxPidMixgnHeKp7bLdNkDv`) |
| Vercel account | `danielsignorile1994-4870's projects` — a **personal** account, not a Pro Team |
| Vercel build Node version | `24.x` |
| Vercel deploy region | `iad1` |

> **On branch protection:** GitHub branch-protection rules are stored in GitHub's
> settings, not in the repository, so they cannot be read from a clone. What is
> observable is that every commit in history was pushed straight to `main` and
> succeeded, and there are no required status checks defined in the repo. Treat
> `main` as **unprotected** — which means nothing will stop you from breaking
> production. Section 7 and Section 9 exist because of this.

### Directory layout

| Path | What it holds |
| --- | --- |
| `app/` | App Router pages and layouts. One `page.tsx` per route |
| `app/layout.tsx` | Root layout: site-wide metadata, Open Graph defaults, Inter font `<link>`s, `DemoModalProvider` |
| `app/page.tsx` | Homepage, and owner of the root canonical URL |
| `app/globals.css` | Tailwind directives, `body` typography, custom utilities |
| `app/about/`, `app/learn/`, `app/features/*` | Content routes (7 feature pages, news articles, case studies) |
| `app/api/hubspot/route.js` | Server route that proxies demo-request form submissions to HubSpot |
| `components/` | 20+ shared React components (`Navbar`, `Hero`, `Footer`, `DemoModal`, `Stats`, …) |
| `public/` | Web-served static assets: logos, `og-image.png`, `robots.txt`, `sitemap.xml`, case-study PDF |
| `tailwind.config.js` | The `arbiter` brand colour palette, Inter font stack, marquee/fade keyframes |
| `next.config.js` | Present but empty — no custom Next configuration |
| `tsconfig.json` | Strict mode on, `@/*` path alias mapped to the repo root |
| repo root | A number of loose source images/PDFs (`Arbiter Logo.png`, `Cenovus logo.svg`, `industry-segments.html`, …). These are **not** what the site serves — the served copies live in `public/` |

---

## 3. Prerequisites — macOS, from zero

Run these in **Terminal** (press `Cmd+Space`, type `Terminal`, press Return).
Do them in order. Each step has a verification command; if a verification
command errors, fix that step before moving on.

### 3.1 Xcode Command Line Tools

This gives you a compiler and a baseline `git`. A GUI dialog will appear —
click **Install** and wait (it can take 10+ minutes).

```
xcode-select --install
```

Verify (should print a path ending in `CommandLineTools` or `Xcode.app`):

```
xcode-select -p
```

### 3.2 Homebrew

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

The installer prints a "Next steps" section telling you to run two `eval`
commands. On Apple Silicon Macs, run this so `brew` is on your `PATH` in every
new terminal:

```
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
```

Then load it into the current session:

```
eval "$(/opt/homebrew/bin/brew shellenv)"
```

Verify:

```
brew --version
```

> If Homebrew installed to `/usr/local` instead of `/opt/homebrew` (older Intel
> Macs), substitute `/usr/local/bin/brew` in the two commands above.

### 3.3 git

```
brew install git
```

Verify (expect 2.40 or newer):

```
git --version
```

Set your identity — these two values appear on every commit you make:

```
git config --global user.name "<YOUR FULL NAME>"
```

```
git config --global user.email "<YOUR GITHUB EMAIL ADDRESS>"
```

> Where to get these: your name as you want it shown publicly, and the email
> address on your GitHub account (github.com → Settings → Emails).

### 3.4 Node.js

**This repo pins no Node version** — there is no `.nvmrc`, no `engines` field in
`package.json`, and no `packageManager` field. The relevant constraints are:
Next 14.2.5 requires Node **>= 18.17.0**, and Vercel builds this project with
Node **24.x**. Install Node 24 so your local builds match production.

Install `nvm` (a Node version manager, so you can hold multiple versions):

```
brew install nvm
```

Wire it into your shell:

```
mkdir -p ~/.nvm && printf '\nexport NVM_DIR="$HOME/.nvm"\n[ -s "$(brew --prefix)/opt/nvm/nvm.sh" ] && \\. "$(brew --prefix)/opt/nvm/nvm.sh"\n[ -s "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm" ] && \\. "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm"\n' >> ~/.zshrc
```

Reload your shell config:

```
source ~/.zshrc
```

Install and select Node 24:

```
nvm install 24 && nvm alias default 24
```

Verify (expect `v24.x.x`):

```
node --version
```

> Node 22.18.0 also works — that is what Daniel currently runs locally. Node 24
> is recommended only because it matches Vercel's builder, so a build that
> passes on your machine is a build that passes in production.

### 3.5 npm — the package manager this repo uses

This repo uses **npm**. It ships a `package-lock.json` with
`lockfileVersion: 3`, and there is no `yarn.lock` or `pnpm-lock.yaml`. Do not
use yarn or pnpm here; doing so would generate a second, conflicting lockfile.

npm is bundled with Node, so it is already installed. Verify (expect 10.x or newer):

```
npm --version
```

### 3.6 GitHub CLI

```
brew install gh
```

Verify:

```
gh --version
```

### 3.7 Claude Code

```
curl -fsSL https://claude.ai/install.sh | bash
```

Verify:

```
claude --version
```

Sign in (opens a browser; use the account Daniel tells you to use):

```
claude
```

Then type `/login` at the prompt and follow the browser flow. Type `/exit` to quit.

---

## 4. GitHub access

### 4.1 What Daniel must do

Daniel adds Sandenn as a collaborator with **write** access:

1. Go to `https://github.com/danielsignorile/arbiter-website`
2. **Settings** → **Collaborators** (under "Access" in the left sidebar)
3. **Add people** → enter Sandenn's GitHub username or email
4. Choose the **Write** role (this is the minimum that allows pushing; Maintain
   also works and additionally allows managing settings)
5. Send the invite

GitHub emails Sandenn an invitation. **The invitation must be accepted before
any push will work** — an unaccepted invite looks exactly like "no access".

### 4.2 What Sandenn does

Accept the invitation from the email, or from:

```
open "https://github.com/danielsignorile/arbiter-website/invitations"
```

Then authenticate the CLI. Choose **GitHub.com**, **HTTPS**, and **yes** when it
offers to authenticate git with your GitHub credentials:

```
gh auth login
```

Verify:

```
gh auth status
```

You should see `Logged in to github.com account <your-username>` and a token
with at least the `repo` scope.

#### SSH alternative

If you would rather use SSH keys than an HTTPS token, do this instead of the
HTTPS choice above.

Generate a key (accept the default file location; setting a passphrase is
recommended):

```
ssh-keygen -t ed25519 -C "<YOUR GITHUB EMAIL ADDRESS>"
```

Add it to the macOS keychain so you are not retyping the passphrase:

```
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

Upload the public key to GitHub:

```
gh ssh-key add ~/.ssh/id_ed25519.pub --title "Sandenn MacBook"
```

Verify (expect `Hi <username>! You've successfully authenticated`):

```
ssh -T git@github.com
```

> Note: Daniel's machine authenticates over **HTTPS** using the macOS keychain
> credential helper. Either method works; HTTPS via `gh auth login` is the
> shorter path and is what the rest of this document assumes.

### 4.3 Confirming push access without pushing anything

Check the permissions GitHub reports for your account on this repo. Expect
`"push": true`:

```
gh api repos/danielsignorile/arbiter-website --jq .permissions
```

After you have cloned (Section 5), you can also ask git to rehearse a push
without sending anything. Expect `Everything up-to-date` and **no**
authentication error:

```
git -C ~/arbiter-website push --dry-run origin main
```

If that prints `remote: Permission to danielsignorile/arbiter-website.git
denied`, your invite is not accepted or the role is not Write. Stop and tell
Daniel.

---

## 5. Clone and first run

Clone into your home directory:

```
gh repo clone danielsignorile/arbiter-website ~/arbiter-website
```

> If you set up SSH instead, this works too:
> `git clone git@github.com:danielsignorile/arbiter-website.git ~/arbiter-website`

Move into it:

```
cd ~/arbiter-website
```

Install dependencies exactly as the lockfile specifies:

```
npm ci
```

> Use `npm ci`, not `npm install`, for this first run. `npm ci` installs the
> exact versions in `package-lock.json`; `npm install` may silently update the
> lockfile and create noise in your first commit.

Start the dev server:

```
npm run dev
```

Open the site:

```
open http://localhost:3000
```

**The local URL is http://localhost:3000.** There are **no pre-build steps** —
no code generation, no database, no `.env` file to create. `npm ci` then
`npm run dev` is the whole setup. Press `Ctrl+C` in the terminal to stop the
dev server.

---

## 6. Secrets and environment variables

**This project reads no environment variables at all.** That is a verified
fact, not an assumption:

- There is no `.env`, `.env.local`, `.env.example`, or `.env.production` file in the repo.
- `git grep process.env` across every tracked file returns **zero** matches.
- There are no `NEXT_PUBLIC_*` references anywhere in `app/` or `components/`.
- `next.config.js` is empty (`const nextConfig = {}`), so no build-time env plumbing.

| Variable | Purpose | Needed locally | Needed in Vercel |
| --- | --- | --- | --- |
| *(none)* | — | — | — |

### The HubSpot identifiers are not secrets

`app/api/hubspot/route.js` posts demo-request form submissions to a hardcoded
HubSpot endpoint containing a portal ID and a form GUID. Those two values are
public form identifiers — the kind that normally sit in client-side HubSpot
embed code — and they are already committed to a **public** repository. They
are not credentials, there is no API key involved, and there is nothing to
rotate or hand over. The form works identically on your machine as it does in
production, and **submitting the local form posts real data to the live HubSpot
form**, so use obviously fake details when testing it.

### What Daniel must hand over

Nothing secret. Only these, and none of them are values that belong in a file:

1. The **GitHub collaborator invitation** with Write access (Section 4.1).
2. Optionally, **Vercel access** — see the caveat below.

If this project ever does gain a real secret (an API key, a token), it must be
delivered through a password manager or another end-to-end-encrypted channel,
added to Vercel via the project's Environment Variables settings, and mirrored
locally in a `.env.local` file. **Never** paste a secret value into this
document, into a commit, or into a chat message.

### Two Vercel access caveats — read these before you are surprised by them

**(a) You probably cannot be added to the Vercel account.** The project lives
under `danielsignorile1994-4870's projects`, which is a **personal** Vercel
account, and personal accounts cannot have additional members. Giving Sandenn
dashboard access requires Daniel to upgrade to a **Pro Team** and move the
project into it. This is optional — the entire loop in Section 7 works without
Vercel dashboard access, because pushing to `main` is what triggers the deploy
and the live domain is what proves it worked.

**(b) Preview URLs are locked even if you do get access.** The project has
Vercel SSO protection enabled with scope `all_except_custom_domains`. Every
`*.vercel.app` URL — including per-branch and per-PR preview deployments —
requires being logged into the owning Vercel account. The **custom domain
(`www.arbiter-completions.com`) is public and unprotected.** Practical
consequence: you cannot preview a branch in the browser before merging. Verify
your work at `localhost:3000` and via `npm run build`, then verify on the live
domain after the deploy.

---

## 7. The edit-to-live loop

Because `main` has no protection and no required checks, a push to `main` goes
live within about a minute with nothing standing in its way. **The local checks
in step 4 are the only safety net this project has.** Do not skip them.

### Step 1 — Get onto a current `main`

```
cd ~/arbiter-website
```

```
git switch main
```

```
git pull --ff-only origin main
```

> `--ff-only` refuses to create a surprise merge commit. If it errors saying it
> cannot fast-forward, you have local commits on `main` that are not on the
> remote — stop and ask Daniel rather than forcing anything.

If `package-lock.json` changed in what you just pulled, reinstall:

```
npm ci
```

### Step 2 — Make a branch

```
git switch -c <short-branch-name>
```

> Name it after the change, e.g. `update-hero-copy` or `fix-footer-links`.
> This is a safety habit, not a repo requirement — history shows Daniel commits
> directly to `main`. Working on a branch means a mistake is not instantly live.

### Step 3 — Make the change

Edit files in your editor, or drive Claude Code (Section 8). With `npm run dev`
running in a second terminal tab, the browser at `localhost:3000` updates as
you save.

### Step 4 — Run the repo's real checks

Type-check. This project is `strict: true`, and a type error has broken a
production deploy here before:

```
npx tsc --noEmit
```

Then run the production build. **This is the check that actually gates your
deploy** — it is the same command Vercel runs, so if it passes here it will
almost certainly pass there:

```
npm run build
```

Both must exit cleanly with no errors before you commit.

> **Do not run `npm run lint`.** It is defined in `package.json` as `next lint`,
> but this repo has no ESLint configuration file — so the command drops into an
> interactive "How would you like to configure ESLint?" prompt and hangs
> waiting for keyboard input. It is not a usable check in its current state.
> This is verified behaviour, not a guess. If it ever needs fixing, that is a
> separate conversation with Daniel.

### Step 5 — Commit

Review exactly what you are about to commit:

```
git status
```

```
git diff
```

Stage your changes (name the files explicitly rather than using `git add .`, so
stray local files never sneak in):

```
git add <path/to/file> <path/to/another-file>
```

Commit with a message that says what changed and why:

```
git commit -m "Short summary of the change"
```

### Step 6 — Push

```
git push -u origin <short-branch-name>
```

### Step 7 — Merge to `main` (this is what deploys)

Open a pull request:

```
gh pr create --base main --fill
```

Review the diff one more time in the browser:

```
gh pr view --web
```

Merge it. This squashes your branch into a single commit on `main` and deletes
the branch:

```
gh pr merge --squash --delete-branch
```

Bring your local `main` back in sync:

```
git switch main && git pull --ff-only origin main
```

> **The direct-to-`main` alternative.** For a one-line copy fix, Daniel's actual
> habit is to commit on `main` and push — `git switch main`, edit, run the
> Step 4 checks, `git commit`, then `git push origin main`. It works and it is
> what the entire history looks like. The branch-and-PR route above costs about
> 30 extra seconds and gives you a reviewable diff and a clean revert point.
> Use the PR route until you are comfortable.

### Step 8 — Watch the deploy

The merge commit triggers Vercel immediately. Watch the commit's check status:

```
open "https://github.com/danielsignorile/arbiter-website/commits/main"
```

Your commit should be at the top with a status marker beside it — a spinning
amber dot while building, a green check when the deploy is live, a red X if the
build failed. Click the marker for the build log link.

You can also poll the GitHub Deployments that Vercel creates (it may take a few
seconds to appear after the push):

```
gh api repos/danielsignorile/arbiter-website/deployments --jq '.[0] | {sha, created_at, environment}'
```

If Daniel has given you Vercel dashboard access, the build log lives here:

```
open "https://vercel.com/danielsignorile1994-4870s-projects/arbiter-website"
```

### Step 9 — Verify it is actually live

Wait for the green check, then fetch the live page and confirm your change is
in the HTML. Replace the search string with something unique to your edit:

```
curl -s https://www.arbiter-completions.com/ | grep -c "<TEXT YOU CHANGED>"
```

A result of `1` or higher means your change is live. `0` means it is not —
recheck that the deploy finished and that you are looking at the right page.

And confirm it visually, hard-reloading to defeat your browser cache:

```
open "https://www.arbiter-completions.com/"
```

---

## 8. Working with Claude Code in this repo

Launch it from the repo root — it takes its context from the current directory:

```
cd ~/arbiter-website && claude
```

Useful things to know at the prompt: `/exit` quits, `/clear` starts a fresh
conversation, `Shift+Tab` cycles permission modes (including plan mode, where
it proposes without editing), and prefixing a line with `!` runs a shell
command directly in the session.

**There is currently no `CLAUDE.md` in this repo.** There is a
`.claude/settings.local.json` on Daniel's machine, but it only holds a local
permission allowlist and is not committed.

Save the block below as `CLAUDE.md` in the repo root and commit it. It encodes
the conventions that are actually visible in the codebase, plus the two
landmines (the lint prompt and the manual sitemap) that would otherwise bite
whoever hits them next.

````markdown
# CLAUDE.md

Marketing website for Arbiter. Next.js 14.2.5 App Router, React 18, TypeScript
(strict), Tailwind CSS 3.4, lucide-react icons. Hosted on Vercel; **a push to
`main` deploys straight to production at www.arbiter-completions.com in about a
minute.** There are no tests and no CI, so local checks are the only gate.

## Checks before any commit

```bash
npx tsc --noEmit   # strict mode; type errors have broken prod deploys here
npm run build      # same command Vercel runs — this is the real gate
```

**Never run `npm run lint`.** There is no ESLint config in this repo, so
`next lint` opens an interactive setup prompt and hangs.

## Conventions

- **Package manager is npm.** `package-lock.json`, lockfileVersion 3. Never
  introduce a yarn or pnpm lockfile.
- **Server Components by default.** Add `'use client'` only when the component
  needs state, effects, or event handlers. Currently client-side: `Navbar`,
  `Hero`, `Stats`, `CTABanner`, `ContactForm`, `FAQ`, `DemoModal`,
  `AnnouncementBar`, and the two context providers.
- **Imports use the `@/` alias** mapped to the repo root, e.g.
  `import Foo from '@/components/Foo'`. Not relative `../../` paths.
- **Colours come from the Tailwind theme**, not hex literals: `arbiter-green`
  (`#3c7c20`), `arbiter-green-dark`, `arbiter-green-light`, `arbiter-dark`,
  `arbiter-muted`, `arbiter-gray-bg`, `arbiter-gray-light`, `arbiter-border`.
  Add new brand colours to `tailwind.config.js` rather than inlining them.
- **Type font is Inter**, loaded via `<link>` in `app/layout.tsx` and `@import`
  in `app/globals.css`, and set as the default `font-sans`.
- **Shared components live in `components/`** as one PascalCase `.tsx` file per
  component, default-exported. Routes live in `app/<route>/page.tsx`.
- **Feature pages** share `components/FeaturePageLayout.tsx` — match the
  existing seven pages under `app/features/` rather than inventing a new shape.
- **Static assets the site serves live in `public/`.** The loose images and PDFs
  at the repo root are unused originals; do not reference them from code.

## SEO, and the things that are maintained by hand

- `app/layout.tsx` holds site-wide metadata, Open Graph and Twitter card
  defaults, and `metadataBase`. Per-page `metadata` exports override title and
  description. The homepage owns the root canonical; do not add a second
  canonical for `/`.
- `public/sitemap.xml` is **hand-written**. Adding a new route means adding a
  `<url>` entry with `loc`, `lastmod`, `changefreq`, and `priority`, matching
  the existing style. Nothing generates this.
- The production domain `https://www.arbiter-completions.com` is hardcoded in
  several places: `app/layout.tsx` (`metadataBase`, `OG_IMAGE`, `openGraph.url`),
  `app/page.tsx` (canonical), `components/Footer.tsx` (absolute feature links),
  `components/DemoModal.tsx` (`pageUri`), `public/robots.txt`, and
  `public/sitemap.xml`. A domain change means updating all of them.

## Do not

- Force-push, rebase, or rewrite history on `main` — it is the production branch.
- Hand-edit `package-lock.json`. Change dependencies with `npm install <pkg>`.
- Commit `.next/`, `node_modules/`, `.vercel/`, `tsconfig.tsbuildinfo`, or
  `.DS_Store` — all are gitignored, keep them that way.
- Commit `.claude/settings.local.json`. It is machine-local.
- Add environment variables without saying so explicitly. This project reads
  **zero** env vars today, and that simplicity is worth preserving.
````

Save it with:

```
claude "Create CLAUDE.md in the repo root with the content from section 8 of ARBITER-SITE-SETUP.md"
```

Or copy the block into a new `CLAUDE.md` by hand, then commit it through the
Section 7 loop.

---

## 9. Guardrails

### Never do these

- **Never force-push `main`** (`git push --force`, `--force-with-lease`, or
  `push -f`). `main` is the production branch and it is unprotected, so a force
  push rewrites live history and Vercel will immediately deploy whatever `main`
  now points at. There is no protection rule that will stop you.
- **Never `git rebase` or `git commit --amend` on commits already pushed to
  `main`.** Same reason.
- **Never hand-edit `package-lock.json`.** Change dependencies via
  `npm install <package>` and commit the resulting lockfile diff.
- **Never commit a secret**, even to this public repo — especially to this
  public repo.
- **Never use yarn or pnpm** in this project.

### Generated and machine-local files — never commit these

Already gitignored (leave them that way): `node_modules/`, `.next/`,
`.vercel/`, `tsconfig.tsbuildinfo`, `.DS_Store`.

`.next/` and `tsconfig.tsbuildinfo` are build output — they regenerate on every
`npm run build`. `.vercel/` holds the local project-linkage IDs.

> **One thing that will differ on your machine.** On Daniel's Mac,
> `.claude/settings.local.json` is hidden by a *global* git ignore file at
> `~/.config/git/ignore` — which your machine will not have. So on your clone it
> will show up as an untracked file and could get committed by accident. Add it
> to your own global ignore once:
>
> ```
> mkdir -p ~/.config/git && echo '**/.claude/settings.local.json' >> ~/.config/git/ignore
> ```

### Files to leave alone unless the change is specifically about them

- `public/sitemap.xml` and `public/robots.txt` — hand-maintained SEO files.
- `next.config.js`, `tsconfig.json`, `postcss.config.js` — build configuration;
  a careless edit here breaks the production build for everyone.
- The loose images and PDFs at the repo root — unused originals, not served.

### How to roll back a bad deploy

**Option A — revert the commit (works with no Vercel access; this is your
default).** A revert is itself a normal commit, so pushing it triggers a fresh
deploy that rebuilds the site as it was. It takes about a minute and leaves an
honest history.

Find the bad commit's SHA:

```
git -C ~/arbiter-website log --oneline -5
```

Revert it and push:

```
git switch main && git pull --ff-only origin main
```

```
git revert <BAD-COMMIT-SHA>
```

> Where to get the SHA: the 8-character hash in the left column of the
> `git log --oneline` output above.

```
git push origin main
```

Then confirm on the live domain as in Section 7 Step 9.

**Option B — Vercel Instant Rollback (needs dashboard access, and it is
faster).** Vercel keeps prior production deployments as rollback candidates and
can repoint the domain at one without a rebuild — seconds rather than a minute.
In the dashboard, open the project's **Deployments** tab, find the last known-good
production deployment, and use **Instant Rollback** / **Promote to Production**.

```
open "https://vercel.com/danielsignorile1994-4870s-projects/arbiter-website"
```

Important: rolling back in Vercel does **not** change the code in GitHub.
`main` still contains the bad commit, and the next push to `main` will deploy
it again. Always follow Option B with Option A, or fix the code properly.

### If the pipeline fails

1. **Read the build log first.** Click the red X beside your commit on
   `https://github.com/danielsignorile/arbiter-website/commits/main`. Nearly
   every failure here is a TypeScript error, and the log names the file and
   line.
2. **Reproduce it locally** with `npm run build` — the same command, so the same
   failure. Fix, re-run both checks, push again.
3. **If the site is currently broken for visitors**, roll back first (above) and
   debug afterwards. Do not debug on production.
4. **If the build log makes no sense, or the deploy never starts at all**
   (no status marker appears on your commit within a couple of minutes), that
   points at the Vercel–GitHub integration rather than your code. **Contact
   Daniel Signorile** — he owns both the GitHub repo and the Vercel account, and
   he is the only person who can change project settings, domains, or
   integration state.

---

## 10. Verification checklist

Work down this list. Do not skip ahead — each step assumes the ones above it.

**Tooling**

- [ ] `xcode-select -p` prints a path
- [ ] `brew --version` prints a version
- [ ] `git --version` prints 2.40 or newer
- [ ] `git config --global user.name` and `git config --global user.email` both print your details
- [ ] `node --version` prints `v24.x.x`
- [ ] `npm --version` prints `10.x` or newer
- [ ] `gh --version` prints a version
- [ ] `claude --version` prints a version

**Access**

- [ ] GitHub collaborator invitation accepted
- [ ] `gh auth status` shows you logged in
- [ ] `gh api repos/danielsignorile/arbiter-website --jq .permissions` shows `"push": true`

**Local project**

- [ ] `~/arbiter-website` exists and `git -C ~/arbiter-website remote -v` shows the `danielsignorile/arbiter-website` remote
- [ ] `npm ci` completed with no errors
- [ ] `npm run dev` starts and `http://localhost:3000` renders the Arbiter homepage
- [ ] Navigate to a feature page locally (e.g. `/features/softchecks`) and it renders
- [ ] `npx tsc --noEmit` exits with no output
- [ ] `npm run build` completes with no errors
- [ ] `git -C ~/arbiter-website push --dry-run origin main` prints `Everything up-to-date` with no auth error

**Now prove the whole loop end to end**

This makes a deliberately trivial, invisible change — a single `<meta>` tag
that no visitor will ever notice — pushes it, confirms it reached the live
domain, and then removes it again. Completing this proves you can deploy *and*
roll back.

- [ ] Start on a fresh `main`:

```
cd ~/arbiter-website && git switch main && git pull --ff-only origin main
```

- [ ] Open the root layout in your editor:

```
open -e app/layout.tsx
```

- [ ] Inside the `<head>` block (around line 48, just after the opening
      `<head>` tag), add this line, then save:

```
<meta name="x-deploy-check" content="sandenn-setup-verified" />
```

- [ ] Run both checks; both must pass:

```
npx tsc --noEmit && npm run build
```

- [ ] Commit and push:

```
git add app/layout.tsx && git commit -m "Add temporary deploy-check meta tag" && git push origin main
```

- [ ] Watch for the green check beside your commit:

```
open "https://github.com/danielsignorile/arbiter-website/commits/main"
```

- [ ] Once it is green, confirm the tag is live. **This must print `1`:**

```
curl -s https://www.arbiter-completions.com/ | grep -c 'x-deploy-check'
```

- [ ] Now remove it again. Get your commit's SHA:

```
git log --oneline -3
```

- [ ] Revert and push:

```
git revert --no-edit <YOUR-COMMIT-SHA>
```

```
git push origin main
```

> Where to get the SHA: the hash beside `Add temporary deploy-check meta tag`
> in the `git log --oneline -3` output above.

- [ ] Wait for the second green check, then confirm the tag is gone.
      **This must print `0`:**

```
curl -s https://www.arbiter-completions.com/ | grep -c 'x-deploy-check'
```

- [ ] `git status` is clean and `git log --oneline -3` shows both your commit and its revert

If both `curl` commands returned what they should — `1` then `0` — you have a
working local environment, write access, a passing build, a deploy you
triggered yourself, and a rollback you performed yourself. You are set up.
