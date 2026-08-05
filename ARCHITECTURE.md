# StanleyUkeje.com — Architecture & System Design Documentation

This document outlines the architecture, design principles, platform service boundaries, containerization strategy, and deployment flows governing the official Stanley Ukeje web platform.

---

## 1. High-Level Architecture Philosophy

StanleyUkeje.com is built as an enterprise product engineering platform designed for performance, maintainability, strict type-safety, and modular expansion.

### Core Principles:
- **Server Components by Default**: All pages, layouts, and static content render as React Server Components (RSC) to guarantee minimal client JavaScript payloads and maximum initial page speed.
- **Config-Driven Domain Architecture**: All structural values, project metadata, links, and SEO defaults live inside isolated configuration files in `/config`. UI components consume configs rather than hardcoding content.
- **Service-Layer Abstraction**: All external API integrations (GitHub, Supabase, Resend) are encapsulated in dedicated sub-modules in `/lib/` and never fetched directly inside UI rendering logic.
- **Feature-Based Scaffolding**: Business domain routes delegate view presentation to `/features/` modules, ensuring the `/app/` directory serves purely for route definition and layout composition.
- **Deployment Agnostic & Zero Vendor Lock-in**: Designed to deploy natively to self-hosted Hetzner (via Coolify & Docker) as well as Vercel without code modifications.

---

## 2. Directory & Modular Structure

```text
.
├── app/                  # Next.js App Router routes & metadata entries
│   ├── api/
│   │   └── health/       # Container & uptime health check endpoint (/api/health)
│   ├── favicon.ico
│   ├── icon.png
│   ├── manifest.ts       # Dynamic Web App Manifest
│   ├── robots.ts         # Dynamic robots.txt generator
│   ├── sitemap.ts        # Dynamic sitemap.xml builder
│   ├── layout.tsx        # Root HTML layout with global fonts & metadata
│   ├── page.tsx          # Minimal container composition shell
│   └── globals.css       # Tailwind CSS & theme custom properties
├── components/           # Atomic & structural UI primitives
│   ├── layout/           # Container, Section, PageWrapper, Header, Footer
│   ├── navigation/       # MainNav, MobileNav
│   └── ui/               # Button, Card, Badge, Divider
├── config/               # System configurations (Single source of truth)
│   ├── site.ts           # Author & website profile config
│   ├── navigation.ts     # Header & footer links
│   ├── projects.ts       # Typed metadata for BayRight, Yike, BamSignal, etc.
│   ├── social.ts         # Social platform profiles
│   ├── seo.ts            # Default metadata & OpenGraph templates
│   ├── contact.ts        # Contact SLA & subject categories
│   ├── github.ts         # GitHub API configuration
│   ├── resend.ts         # Resend email credentials
│   └── supabase.ts       # Supabase connection endpoints
├── constants/            # Design system tokens & static constants
│   ├── design.ts         # Centralized colors, spacing, radius, z-index, transitions
│   └── theme.ts          # Backward-compatible design token export
├── content/              # MDX / Content storage for future expansion
│   ├── blog/
│   └── projects/
├── features/             # Business domain feature components
│   ├── home/
│   ├── projects/
│   ├── blog/
│   ├── contact/
│   └── github/
├── lib/                  # Isolated library services & utility helpers
│   ├── env.ts            # Runtime environment validation helper
│   ├── github/           # GitHub repository, contribution, activity & cache service
│   ├── resend/           # Resend contact email, notifications & templates service
│   ├── supabase/         # Supabase client, server, middleware & helper service
│   ├── seo/              # Reusable SEO metadata & JSON-LD constructors
│   └── utils/            # Tailwind class merging (cn)
├── public/               # Public static assets
│   ├── images/
│   │   ├── profile/      # stanley.png portrait
│   │   ├── projects/     # Project screenshots & covers
│   │   └── blog/         # Article cover graphics
│   ├── icon.png          # App icon / favicon / OpenGraph
│   └── logo.png          # Navigation header & footer brand mark
├── types/                # System-wide TypeScript type definitions
│   ├── index.ts          # Project, Article, GitHubRepo, SiteMetadata types
│   └── site.ts           # Re-exported site types
├── Dockerfile            # Multi-stage standalone Next.js container build
├── .dockerignore         # Docker build filters
└── .env.example          # Environment variables template
```

---

## 3. Platform Services Architecture (`/lib`)

### Supabase (`lib/supabase/`)
- Encapsulates authentication, database access, storage, and RLS.
- Provides `createBrowserClient()`, `createServerClient()`, `updateSupabaseSession()`, and formatted error helpers.

### Resend (`lib/resend/`)
- Encapsulates contact form handling, transactional notifications, and HTML email templates.
- Features `sendContactEmail()`, `sendNotification()`, and `renderContactEmailTemplate()`.

### GitHub (`lib/github/`)
- Encapsulates repository listings, activity feeds, and contribution statistics.
- Features `fetchRepositories()`, `fetchContributionStats()`, `fetchRecentActivity()`, and `GITHUB_CACHE` settings.

### Cloudflare Integration Boundary
- Manages DNS, SSL, CDN edge caching, security rules, and DDoS protection at the network level.
- Kept completely separate from application logic to preserve vendor neutrality.

---

## 4. Multi-Environment Deployment Flow

```text
Local Development ──> GitHub Repo ──> Coolify / Hetzner Container ──> Cloudflare Edge DNS/CDN ──> User
```

1. **Development**: Local development environment validating types via `npm run type-check`.
2. **Version Control**: GitHub repository triggering Coolify webhooks on main branch updates.
3. **Coolify Orchestrator**: Pulls updates, builds Docker standalone image using multi-stage `Dockerfile`.
4. **Hetzner Compute**: Hosts lightweight Alpine Node.js 20 container listening on port 3000.
5. **Health Checks**: Coolify monitors `/api/health` returning `200 OK`.
6. **Cloudflare Edge**: Proxies traffic via Cloudflare Zero Trust/CDN, providing automated SSL, DDoS mitigation, and global edge caching.

---

## 5. Design System & Tokens (`constants/design.ts`)

All visual tokens are defined in `constants/design.ts` and mapped to CSS custom variables in `styles/theme.css`:
- **Background**: `#05070B`
- **Surface**: `#0E131B`
- **Primary**: `#2563EB` (Hover: `#1D4ED8`)
- **Muted Text**: `#9CA3AF`
- **Border**: `#1F2937` (Hover: `#374151`)
- **Status Indicators**: `#22C55E` (Success), `#F59E0B` (Warning), `#EF4444` (Error)
- **Typography**: `Inter` for body & body mono, `Geist` for crisp geometric display headers.

---

## 6. Environment & Secrets Management

Environment variables are validated via `lib/env.ts` and template documented in `.env.example`:
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPABASE_URL` & `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `RESEND_TO_EMAIL`
- `GITHUB_USERNAME`, `GITHUB_TOKEN`
- `CONTACT_EMAIL`

---

## 7. Future Expansion Roadmap

- **Phase 2 — Feature Implementation**: Implement high-converting homepage, projects showcase, interactive case studies, and engineering blog using the `/features/` modules.
- **Phase 3 — Interactive Dashboard**: Connect dynamic GitHub API service and live activity feed.
- **Phase 4 — Contact & AI Integrations**: Wire up Resend email endpoints and Supabase state persistence.
