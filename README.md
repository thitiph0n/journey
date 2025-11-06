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
- **[Cloudflare Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/)** - Serve frontend from Workers

### Integration & AI
- **[LINE LIFF SDK](https://developers.line.biz/en/docs/liff/overview/)** - LINE frontend framework
- **[LINE Messaging API](https://developers.line.biz/en/docs/messaging-api/)** - Notifications and bot features
- **[Claude API](https://docs.anthropic.com/)** - AI-powered receipt parsing and trip planning

## Status

🚧 **In Development** - This is a learning project currently being built.

---

**Target Users:** Personal use with friends and family
**License:** MIT
