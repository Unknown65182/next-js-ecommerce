import useSWR from "swr";
import fetcher from "./fetcher";

const useColors = (url) => {
  const { data, error } = useSWR(url, fetcher);
  return {
    colors: data && data.colors,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useColors;
