import { fetcher } from "@/lib/fetcher"
import useSWR from "swr"

function useHoldings() {
  const { data, error, isLoading } = useSWR(`/api/asset/holdings`, fetcher)
 
  return {
    assets: data?.assets,
    portfolio: data?.portfolio,
    isLoading,
    isError: error
  }
}

export { useHoldings }
