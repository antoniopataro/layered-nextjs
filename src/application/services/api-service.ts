import {
  type HttpRequest,
  type HttpResponse,
  type HttpClient,
  HttpStatus,
} from "@/core/protocols/http";

import { type AuthService } from "./auth-service";

type Config = {
  API_URL: string;
};

export class ApiService implements HttpClient {
  constructor(
    private readonly authService: AuthService,
    private readonly config: Config,
    private readonly httpClient: HttpClient
  ) {}

  async request<D, B = string>({
    body,
    headers,
    method,
    url,
  }: HttpRequest<B>): Promise<HttpResponse<D>> {
    const accessToken = this.authService.getAccessToken();

    const response = await this.httpClient.request<D>({
      ...(body && {
        body: typeof body === "string" ? body : JSON.stringify(body),
      }),
      headers: {
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
        "Content-Type": "application/json",
        ...headers,
      },
      method,
      url: `${this.config.API_URL}${url}`,
    });

    const data =
      response.status !== HttpStatus.NO_CONTENT ? response.data : null;

    const status =
      response.status as (typeof HttpStatus)[keyof typeof HttpStatus];

    return {
      data,
      status,
    };
  }
}
