// hooks/useEurekas.ts
import { useQuery } from "@tanstack/react-query"
import { client } from "@/tina/__generated__/client"
import { Filters } from "@/types/Filters"
import { Eureka } from "@/tina/__generated__/types"

export function useEurekas(filters: Filters) {
  return useQuery<Eureka[]>({
    queryKey: ["eurekas", filters],
    queryFn: async () => {
      // Build Tina filter with correct types (NumberFilter needs a number)
      const tinaFilter: any = {}
      if (
        typeof filters.quality === "number" &&
        !Number.isNaN(filters.quality)
      ) {
        tinaFilter.quality = { eq: filters.quality }
      }
      if (filters.style) {
        tinaFilter.style = { includes: filters.style }
      }
      if (filters.name) {
        tinaFilter.name = { includes: filters.name }
      }

      const res = await client.queries.eurekaConnection({ filter: tinaFilter })

      // Defensive extraction: edges may be null and nodes may be null
      const edges = res?.data?.eurekaConnection?.edges ?? []
      const nodes = edges
        .map((e: any) => e?.node ?? null)
        .filter((n): n is NonNullable<typeof n> => n !== null)

      return nodes
    },
    // optional: staleTime, keepPreviousData, etc.
    staleTime: 1000 * 60, // 1 minute
  })
}
