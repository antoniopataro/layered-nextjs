import {
  type HttpClient,
  type HttpRequest,
  type HttpResponse,
  HttpStatus
} from '@/core/protocols/http';

export class FetchHttpClient implements HttpClient {
  constructor() {}

  async request<D>({
    body,
    headers,
    method,
    url
  }: HttpRequest): Promise<HttpResponse<D>> {
    const response = await fetch(url, {
      body,
      headers,
      method
    });

    let data: D | null = null;

    try {
      data = await response.json();
    } catch (error) {
      console.error(error);
    }

    const status =
      response.status as (typeof HttpStatus)[keyof typeof HttpStatus];

    return {
      data,
      status
    };
  }
}
