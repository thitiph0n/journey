import { treaty } from '@elysiajs/eden'

const isDevelopment = import.meta.env.DEV

// Note: Type safety with backend disabled due to Elysia version conflicts
// This will be re-enabled once the dependency versions are aligned
export const api = treaty<any>(
  isDevelopment ? 'http://localhost:8787' : window.location.origin
)
