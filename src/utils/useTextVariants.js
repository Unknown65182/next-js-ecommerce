import useSWR from "swr";
import fetcher from "./fetcher";

const useTextVariant = (url) => {
  const { data, error } = useSWR(url, fetcher);
  return {
    textVariants: data && data.textVariants,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useTextVariant;
