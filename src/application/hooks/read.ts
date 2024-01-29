import { type Input, read } from "@/application/use-cases/read";
import { useMutation } from "react-query";

export const useRead = () => {
  const {
    data,
    mutateAsync: execute,
    isLoading: loading,
  } = useMutation({
    mutationFn: async ({ body }: Input) => {
      const response = await read({
        body,
      });

      if (response.isFailure()) {
        return response.value.error;
      }

      return response.value;
    },
  });

  return {
    data,
    execute,
    loading,
  };
};
