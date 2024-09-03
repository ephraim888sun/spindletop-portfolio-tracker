import { fetcher } from "@/lib/fetcher"
import useSWR from "swr"

function useOrganizations() {
  const { data, error, isLoading } = useSWR(`/api/organization`, fetcher)
 
  return {
    organizations: data,
    isLoading,
    isError: error
  }
}

export { useOrganizations }