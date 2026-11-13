# LoveScoreTest (static site, Cloudflare Pages + Decap CMS)

## Cloudflare Pages settings
- Build command: `node build.mjs`    Output directory: `dist`    (no dependencies)

## Content (all editable in the CMS at /admin, or as .md files)
- `content/home.md` home page article. Calculator is inserted after the H1.
- `content/blog/*.md` blog posts -> `/blog/slug`
- `content/tools/*.md` pages (tools, quizzes) -> `/slug`
- `content/categories/*.md` categories (only 3 now). Rename/add/remove here or in the CMS.
- `content/pages/*.md` About, Contact, Privacy, Terms
- `content/links.json` phrases in the home article that get an internal/external link (text is never changed). Internal category links only appear once that category has content.
- Latest pages (6) and latest posts (3) show on the home page automatically.
- Images: `static/images/`

## CMS login (GitHub) - one time setup
1. Edit `static/admin/config.yml`: set `repo: YOUR_GITHUB_USERNAME/YOUR_REPO_NAME` (and `branch` if not main).
2. GitHub > Settings > Developer settings > OAuth Apps > New OAuth App:
   Homepage URL `https://lovescoretest.com`, Authorization callback URL `https://lovescoretest.com/api/callback`.
3. Copy Client ID and generate a Client Secret.
4. Cloudflare Pages > your project > Settings > Variables and Secrets: add `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` (secret), then redeploy.
5. Open `https://lovescoretest.com/admin` and log in with GitHub. Saving a post commits to GitHub and Cloudflare rebuilds in ~1 minute.
