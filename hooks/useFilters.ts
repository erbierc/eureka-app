// hooks/useFilters.ts
"use client"
import { Filters } from "@/types/Filters"
import { useRouter, useSearchParams } from "next/navigation"
import qs from "query-string"

export function useFilters() {
  const router = useRouter()
  const params = useSearchParams()

  // parse quality as number when possible
  const qualityParam = params.get("quality")
  const filters: Filters = {
    quality: qualityParam ? Number(qualityParam) : undefined,
    style: params.get("style") || undefined,
    name: params.get("name") || undefined,
    // add more as needed
  }

  const setFilters = (newFilters: Filters) => {
    const merged = {
      quality: newFilters.quality ?? filters.quality,
      style: newFilters.style ?? filters.style,
      name: newFilters.name ?? filters.name,
    }

    // stringify but remove undefined / empty
    const query = qs.stringify(merged, {
      skipEmptyString: true,
      skipNull: true,
    })
    router.push(query ? `?${query}` : "/") // adjust path if needed
  }

  return { filters, setFilters }
}
