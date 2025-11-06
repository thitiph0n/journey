import { treaty } from '@elysiajs/eden'
import type { App } from '@backend/index'

const isDevelopment = import.meta.env.DEV

export const api = treaty<App>(
  isDevelopment ? 'http://localhost:8787' : window.location.origin
)
