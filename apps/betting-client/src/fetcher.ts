import createClient from 'openapi-fetch';

import { paths } from './types/schema';

export const client = createClient<paths>({
  baseUrl: process.env.NEXT_PUBLIC_CLIENT_BASE_URL,
});
