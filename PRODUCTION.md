# StanleyUkeje.com — Production Deployment Runbook

This document details the production infrastructure, deployment steps, environment configurations, security policies, and rollback procedures for StanleyUkeje.com.

---

## 1. Production Architecture Stack

```text
Local Dev ──> GitHub Repo ──> Coolify Webhook ──> Hetzner VPS Container ──> Cloudflare Edge ──> User
```

- **Source Code Repository**: `https://github.com/stanleyukeje/stanleyukeje.com.git`
- **Database & Workspace**: Supabase (`https://elvqrrdsrutdfpopsqtk.supabase.co`)
- **Hosting Infrastructure**: Hetzner Cloud VPS running Coolify Orchestrator
- **DNS, SSL & CDN**: Cloudflare Proxy (Full/Strict SSL)

---

## 2. Coolify Deployment Specification

Configure Coolify with the following parameters:

- **Deployment Type**: Dockerfile
- **Dockerfile Path**: `./Dockerfile`
- **Exposed Port**: `3000`
- **Health Check Endpoint**: `/api/health`
- **Health Check Interval**: 15s
- **Persistent Storage**: None (Stateless Node.js App Router container)

### Environment Variables Required in Coolify:
- `NEXT_PUBLIC_SITE_URL` = `https://stanleyukeje.com`
- `NEXT_PUBLIC_SUPABASE_URL` = `https://elvqrrdsrutdfpopsqtk.supabase.co`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `<your-supabase-anon-key>`
- `RESEND_API_KEY` = `<your-resend-api-key>`
- `RESEND_FROM_EMAIL` = `contact@stanleyukeje.com`
- `RESEND_TO_EMAIL` = `stan@stanleyukeje.com`
- `GITHUB_USERNAME` = `stanleyukeje`
- `CONTACT_EMAIL` = `stan@stanleyukeje.com`

---

## 3. Step-by-Step Deployment Procedure

1. **GitHub Push**: Merge changes into `main` branch:
   ```bash
   git push origin main
   ```
2. **Coolify Trigger**: Coolify automatically detects commit webhook on `main` branch.
3. **Build Execution**: Multi-stage `Dockerfile` compiles Next.js standalone server (`output: 'standalone'`).
4. **Health Check**: Coolify queries `http://localhost:3000/api/health`.
5. **Traffic Routing**: Upon `200 OK` health status, Coolify updates container routing.

---

## 4. Rollback Strategy

If a deployment experiences issues:
1. Open Coolify Dashboard -> Deployments tab.
2. Select the previous successful container build hash.
3. Click **Redeploy / Rollback**. Traffic will immediately route to the healthy image.

---

## 5. Security & Verification Policy

- **Security Headers**: `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`.
- **Secrets Management**: No secrets committed to source repository. Environment variables loaded securely in container.
- **Fail-Fast Assertion**: Application invokes `assertEnv()` in `lib/env.ts` on startup.
