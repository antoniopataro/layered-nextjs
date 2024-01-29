import { type Input, write } from "@/application/use-cases/write";
import { useMutation } from "react-query";

export const useWrite = () => {
  const {
    data,
    mutateAsync: execute,
    isLoading: loading,
  } = useMutation({
    mutationFn: async ({ body }: Input) => {
      const response = await write({
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
