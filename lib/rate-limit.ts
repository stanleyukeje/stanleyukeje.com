interface RateLimitRecord {
  timestamps: number[];
}

const rateLimitMap = new Map<string, RateLimitRecord>();

const WINDOW_MS = 60 * 60 * 1000; // 1 hour sliding window
const MAX_REQUESTS = 5;

export function checkRateLimit(ip: string): { success: boolean; count: number } {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;

  const record = rateLimitMap.get(ip) || { timestamps: [] };

  // Filter timestamps within current 1-hour window
  const validTimestamps = record.timestamps.filter((ts) => ts > windowStart);

  if (validTimestamps.length >= MAX_REQUESTS) {
    return { success: false, count: validTimestamps.length };
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, { timestamps: validTimestamps });

  // Periodically clean up stale IP entries
  if (rateLimitMap.size > 1000) {
    for (const [key, rec] of rateLimitMap.entries()) {
      const active = rec.timestamps.filter((ts) => ts > windowStart);
      if (active.length === 0) {
        rateLimitMap.delete(key);
      } else {
        rateLimitMap.set(key, { timestamps: active });
      }
    }
  }

  return { success: true, count: validTimestamps.length };
}
