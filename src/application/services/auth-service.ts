import { CookiesStorage } from '@/infra/kv/cookies-storage';

type Config = {
  ACCESS_TOKEN_KEY: string;
};

export class AuthService {
  constructor(
    private readonly config: Config,
    private readonly cookiesStorage: CookiesStorage
  ) {}

  getAccessToken() {
    return this.cookiesStorage.getItem<string>(this.config.ACCESS_TOKEN_KEY);
  }
}
