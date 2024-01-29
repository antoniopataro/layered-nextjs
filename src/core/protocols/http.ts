const HttpMethod = {
  DELETE: 'DELETE',
  GET: 'GET',
  PATCH: 'PATCH',
  POST: 'POST',
  PUT: 'PUT'
} as const;

export const HttpStatus = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  FAILED_DEPENDENCY: 424,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500
} as const;

export type HttpRequest<B = string> = {
  body?: B;
  headers?: Record<string, string>;
  method: keyof typeof HttpMethod;
  url: string;
};

export type HttpResponse<D = unknown> = {
  data: D | null;
  status: (typeof HttpStatus)[keyof typeof HttpStatus];
};

export interface HttpClient {
  request: <D = unknown>(data: HttpRequest) => Promise<HttpResponse<D>>;
}
