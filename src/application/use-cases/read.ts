import { api } from "@/core/ioc/container";
import { HttpStatus } from "@/core/protocols/http";
import { type Either, failure, success } from "@/utils/either";

type Failure = { error: string };

type Success = {
  success: boolean;
};

type Output = Either<Failure, Success>;

export const read = async (): Promise<Output> => {
  const { data, status } = await api.request<Failure | Success>({
    method: "GET",
    url: "/",
  });

  if (status !== HttpStatus.OK) {
    return failure(data as Failure);
  }

  return success(data as Success);
};
