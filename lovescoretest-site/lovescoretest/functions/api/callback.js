// Cloudflare Pages Function: finishes GitHub login and hands the token to Decap CMS.
export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const cookie = (request.headers.get("Cookie") || "").match(/oauth_state=([^;]+)/);
  if (!code || !state || !cookie || cookie[1] !== state) return done("error", { message: "Invalid login state. Please try again." });
  if (!env.GITHUB_CLIENT_ID || !env.GITHUB_CLIENT_SECRET) return done("error", { message: "GitHub keys are missing in Cloudflare settings." });

  const res = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json", "User-Agent": "lovescoretest-cms" },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: `${url.origin}/api/callback`,
    }),
  });
  const data = await res.json();
  if (!data.access_token) return done("error", { message: data.error_description || "GitHub login failed." });
  return done("success", { token: data.access_token, provider: "github" });
}

function done(status, content) {
  const msg = `authorization:github:${status}:${JSON.stringify(content)}`;
  const safe = JSON.stringify(msg).replace(/</g, "\\u003c");
  const html = `<!doctype html><meta charset="utf-8"><title>Login</title><script>
(function(){var m=${safe};
function r(e){window.opener.postMessage(m,e.origin);window.removeEventListener("message",r,false)}
window.addEventListener("message",r,false);
window.opener.postMessage("authorizing:github","*");})();
</script>`;
  return new Response(html, {
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Set-Cookie": "oauth_state=; HttpOnly; Secure; SameSite=Lax; Path=/api; Max-Age=0",
    },
  });
}
