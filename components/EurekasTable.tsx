// components/EurekasTable.tsx
"use client"
import { Fragment, useMemo, useState } from "react"
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getExpandedRowModel,
  SortingState,
  getSortedRowModel,
  sortingFns,
  SortingFn,
} from "@tanstack/react-table"
import { useEurekas } from "@/hooks/useEurekas"
import { useFilters } from "@/hooks/useFilters"
import { Eureka } from "./Eureka"
import { ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import { Descriptor } from "./Descriptor"

export default function EurekasTable() {
  const { filters, setFilters } = useFilters()
  const { data = [], isLoading } = useEurekas(filters)
  const [sorting, setSorting] = useState<SortingState>([])

  const sortByName: SortingFn<any> = (rowA, rowB, columnId) => {
    const a = rowA.getValue(columnId)
    const b = rowB.getValue(columnId)

    const nameA =
      typeof a === "object" && a !== null && "name" in a
        ? String((a as { name?: string }).name ?? "")
        : String(a ?? "")

    const nameB =
      typeof b === "object" && b !== null && "name" in b
        ? String((b as { name?: string }).name ?? "")
        : String(b ?? "")

    return nameA.localeCompare(nameB, undefined, { sensitivity: "base" })
  }

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: () => "Name",
        sortingFn: sortingFns.alphanumeric,
      },
      {
        accessorKey: "quality",
        header: () => "Quality",
        sortingFn: sortingFns.alphanumeric,
      },
      {
        accessorKey: "style",
        header: "Style",
        cell: (info: any) => {
          const style = info.getValue()
          return <Descriptor image={style.image} name={style.name} />
        },
        sortingFn: sortByName,
      },
      {
        accessorKey: "label",
        header: "Label",
        cell: (info: any) => {
          const label = info.getValue()
          return <Descriptor image={label.image} name={label.name} />
        },
        sortingFn: sortByName,
      },
      {
        id: "expander",
        header: "",
        cell: ({ row }: any) => (
          <>{row.getIsExpanded() ? <ChevronUp /> : <ChevronDown />}</>
        ),
      },
    ],
    []
  )

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getRowCanExpand: () => true,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    enableMultiSort: true,
  })

  console.log(table.getState().sorting)

  return (
    <div>
      {isLoading ? (
        <p>Loading…</p>
      ) : data.length === 0 ? (
        <p>No eurekas match that filter.</p>
      ) : (
        <table>
          <thead>
            {table.getHeaderGroups().map((hg) => (
              <tr key={hg.id}>
                {hg.headers.map((h) => (
                  <th
                    key={h.id}
                    onClick={h.column.getToggleSortingHandler()}
                    style={{
                      cursor: h.column.getCanSort() ? "pointer" : "default",
                    }}
                  >
                    <div>
                      <span>
                        {flexRender(h.column.columnDef.header, h.getContext())}
                      </span>
                      {{
                        asc: <ChevronUp />,
                        desc: <ChevronDown />,
                      }[h.column.getIsSorted() as string] ?? null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <Fragment key={row.id}>
                <tr onClick={row.getToggleExpandedHandler()}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
                {row.getIsExpanded() && (
                  <tr>
                    <td className="eureka-container" colSpan={columns.length}>
                      <Eureka {...row.original} />
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
