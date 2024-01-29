export const envs = {
  API_URL: process.env.NEXT_PUBLIC_API_URL
} as const;

export type Envs = typeof envs;
