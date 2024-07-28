import { ApiService } from "@/application/services/api-service";
import { AuthService } from "@/application/services/auth-service";
import { FetchHttpClient } from "@/core/infra/http/fetch-http-client";
import { CookiesStorage } from "@/core/infra/kv/cookies-storage";
import { LocalStorage } from "@/core/infra/kv/local-storage";

import { envs } from "../config/envs";

export const cookiesStorage = new CookiesStorage();
export const localStorage = new LocalStorage();

const authService = new AuthService(
  {
    ACCESS_TOKEN_KEY: "accessToken",
  },
  cookiesStorage,
);

if (!envs.API_URL) {
  throw new Error("missing environment variable: API_URL");
}

const fetchHttpClient = new FetchHttpClient();

export const api = new ApiService(
  authService,
  {
    API_URL: envs.API_URL,
  },
  fetchHttpClient,
);
