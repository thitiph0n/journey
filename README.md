# เจอนี่ (Journey)

A travel planning and expense tracking app for LINE users. Keep all your trip information in one place instead of scattered Excel sheets and paper notes.

## Description

เจอนี่ (pronounced "jur-nee") is a LINE LIFF app designed to help travelers organize their journeys. The name is a Thai wordplay where "เจอ" (found/meet) + "นี่" (this/here) sounds like the English word "Journey".

## Planned Features

- **LINE Authentication** - Seamless login with LINE account
- **Journey Management** - Create and organize multiple trips
- **Expense Tracking** - Track spending with categories and receipts
- **Itinerary Planning** - Day-by-day breakdown of activities
- **Transport Information** - Keep track of flights, trains, and bookings
- **AI Integration**
  - Receipt-to-expense conversion using OCR
  - AI-powered trip planning assistant
- **Collaborative Planning** - Share trips with friends and family

## Tech Stack

### Backend

- **[Elysia](https://elysiajs.com/)** - Fast and ergonomic TypeScript framework
- **[Cloudflare Workers](https://developers.cloudflare.com/workers/)** - Serverless backend runtime
- **[Cloudflare D1](https://developers.cloudflare.com/d1/)** - SQLite database at the edge
- **[Cloudflare R2](https://developers.cloudflare.com/r2/)** - Object storage for receipt images

### Frontend

- **[Vue 3](https://vuejs.org/guide/introduction.html)** - Progressive JavaScript framework
- **[Vuetify](https://vuetifyjs.com/en/)** - Material Design component framework
- **[Cloudflare Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/)** - Serve web app from Workers

### Integration & AI

- **[LINE LIFF SDK](https://developers.line.biz/en/docs/liff/overview/)** - LINE frontend framework
- **[LINE Messaging API](https://developers.line.biz/en/docs/messaging-api/)** - Notifications and bot features
- **[Claude API](https://docs.anthropic.com/)** - AI-powered receipt parsing and trip planning

## Project Structure

```
journey/
├── src/                    # Backend (Elysia on Cloudflare Workers)
│   ├── index.ts           # Main API entry point
│   └── routes/            # API route handlers
│       ├── journeys.ts    # Journey management endpoints
│       └── expenses.ts    # Expense tracking endpoints
├── web/                   # Web app (Vue 3 + Vite LIFF)
│   ├── src/
│   │   ├── api/          # Eden Treaty API client (type-safe)
│   │   ├── components/   # Vue components
│   │   ├── App.vue       # Root component
│   │   └── main.ts       # App entry point
│   └── vite.config.ts    # Vite configuration
├── wrangler.toml         # Cloudflare Workers configuration
└── package.json          # Root package configuration
```

## Development Setup

### Prerequisites

- [Bun](https://bun.sh/) installed (v1.0+)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/) installed globally

### Installation

```bash
# Install dependencies
bun install

# Install web app dependencies
cd web && bun install && cd ..
```

### Development

Run backend and web app in separate terminals:

```bash
# Terminal 1: Start backend (Cloudflare Workers)
bun run dev
# Backend runs at http://localhost:8787

# Terminal 2: Start web app (Vite dev server)
bun run dev:web
# Web app runs at http://localhost:5173
```

The web app is configured to proxy API requests to the backend automatically.

### Building for Production

```bash
# Build web app assets
bun run build

# Deploy to Cloudflare Workers
bun run deploy
```

## Type-Safe API Client

This project uses [Eden Treaty](https://elysiajs.com/eden/treaty/overview.html) for end-to-end type safety between web app and backend:

```typescript
// Backend defines the API
const app = new Elysia()
  .get('/api/journeys', () => ({ journeys: [] }))

// Web app gets full type safety
const { data } = await api.api.journeys.get()
// data is automatically typed as { journeys: any[] }
```

## Status

🚧 **In Development** - This is a learning project currently being built.

---

**Target Users:** Personal use with friends and family
**License:** MIT
