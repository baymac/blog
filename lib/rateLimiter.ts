import RateLimiter from 'async-ratelimiter';
import Redis from 'ioredis';
import { NextApiRequest, NextApiResponse } from 'next';
import { getClientIp } from 'request-ip';

// Max 10 requests in 60 mins
const rateLimiter = new RateLimiter({
  db: new Redis(process.env.REDIS_URL),
  max: 10,
  duration: 1_000 * 60,
});

export const rateLimiterMiddleWare = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const clientIp = getClientIp(req);
  const limit = await rateLimiter.get({ id: clientIp });
  if (!limit.remaining) {
    res.setHeader('X-Rate-Limit-Limit', limit.total);
    res.setHeader('X-Rate-Limit-Remaining', Math.max(0, limit.remaining - 1));
    res.setHeader('X-Rate-Limit-Reset', limit.reset);
    return {
      message: 'Sorry, you are rate limited. Wait for 5 seconds',
      error: true,
    };
  }
  return {
    message: '',
    error: false,
  };
};
