import { read } from "@/application/use-cases/read";
import { useQuery } from "react-query";

export const useRead = () => {
  const { data, isLoading: loading } = useQuery({
    queryKey: ["read"],
    queryFn: async () => {
      const response = await read();

      if (response.isFailure()) {
        return response.value.error;
      }

      return response.value;
    },
  });

  return {
    data,
    loading,
  };
};
