# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**เจอนี่ (Journey)** - A LINE LIFF app for travel planning and expense tracking. Thai wordplay name: "เจอนี่" sounds like "Journey".

**Architecture:** Monorepo with backend and frontend in same repository
- Backend: Elysia API on Cloudflare Workers (src/)
- Frontend: Vue 3 + Vuetify SPA (web/)
- Deployment: Single Cloudflare Workers deployment serving both API and static assets

**Package Manager:** Bun (not npm/yarn)

## Development Commands

### Running the Application

Backend and frontend must run in separate terminals during development:

```bash
# Terminal 1: Backend (Cloudflare Workers on port 8787)
bun run dev

# Terminal 2: Frontend (Vite dev server on port 5173)
bun run dev:web
# Or: cd web && bun run dev
```

### Building and Deployment

```bash
# Build web app only (outputs to web/dist/)
bun run build

# Type check frontend
bun run type-check

# Deploy to Cloudflare Workers (builds + deploys)
bun run deploy
```

## Critical Architecture Patterns

### End-to-End Type Safety with Eden Treaty

The project uses **Eden Treaty** for compile-time type safety between frontend and backend without code generation:

**Backend exports its app type:**
```typescript
// src/index.ts
const app = new Elysia()
  .get('/api/journeys', () => ({ journeys: [] }))

export default app
export type App = typeof app
```

**Frontend imports the type:**
```typescript
// web/src/api/client.ts
import type { App } from '@backend/index'
import { treaty } from '@elysiajs/eden'

const api = treaty<App>(baseURL)
```

**Key configuration enabling this:**
- Frontend `tsconfig.json` includes `../src/index.ts` in compilation
- Path alias `@backend` points to `../src`
- Both configs use `"moduleResolution": "bundler"` for cross-directory imports

**When adding new API endpoints:**
1. Define route in backend with proper Elysia schema validation
2. Export the app type
3. Frontend automatically gets type inference - no manual typing needed

### Route Structure

**Backend (Elysia):**
- Modular routes with `.use()` pattern and prefix grouping
- Routes located in `src/routes/`
- Validation using Elysia's `t` (typebox) schema
- CORS enabled with credentials support

**Frontend (Vue 3):**
- No Vue Router yet installed (single page app currently)
- API calls use Eden Treaty client from `web/src/api/client.ts`
- Component-based architecture with Composition API

### Development Proxy Configuration

**Frontend Vite config proxies API requests:**
```typescript
// web/vite.config.ts
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:8787',
      changeOrigin: true
    }
  }
}
```

**Production:** Static assets served from Workers' ASSETS binding (web/dist)

### Cloudflare Workers Configuration

**wrangler.toml key settings:**
```toml
[assets]
binding = "ASSETS"
directory = "./web/dist"
not_found_handling = "single-page-application"  # For Vue Router (when added)
```

## Code Conventions

- **TypeScript:** Strict mode enabled in both frontend and backend
- **Comments:** Minimal - code should be self-explanatory
- **Line endings:** Always include end of line
- **Vue components:** Use `<script setup>` with Composition API
- **Styling:** Scoped styles in components, Vuetify theme for global Material Design

## Current Implementation Status

**Implemented:**
- Backend API framework with sample journeys and expenses endpoints
- Frontend Vue 3 app with Vuetify UI library
- Type-safe API client with Eden Treaty
- Development workflow with hot reload
- Basic journey list component

**Not Yet Implemented:**
- LINE LIFF SDK integration
- LINE authentication (JWT dependency installed but unused)
- Database persistence (D1)
- File storage for receipts (R2)
- AI integration (Claude API)
- Vue Router
- Global state management

**All current API endpoints return mock/empty data** - no actual database yet.

## Planned Tech Stack

- **Database:** Cloudflare D1 (SQLite at edge)
- **Storage:** Cloudflare R2 (receipt images)
- **Auth:** LINE LIFF + JWT
- **AI:** Claude API for receipt OCR and trip planning

## Path Aliases

**Backend (src/tsconfig.json):**
- `@/*` → `./src/*`

**Frontend (web/tsconfig.json):**
- `@/*` → `./src/*`
- `@backend/*` → `../src/*` (for importing backend types)

## Important Notes

- Use `bun` commands, not `npm` or `yarn`
- When adding packages: `bun add <package>` or `cd web && bun add <package>`
- Backend runs on port 8787, frontend on 5173 during development
- Changes to backend types automatically reflected in frontend (restart TypeScript server if needed)
- Vuetify components auto-imported via vite-plugin-vuetify
