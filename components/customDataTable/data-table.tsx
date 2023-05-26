"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Pencil, CircleEllipsis } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { DataTablePagination } from "./data-table-pagination"
import { DataTableToolbar } from "./data-table-toolbar"
import { Checkbox } from "../ui/checkbox"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
  columsName, columnsData, pageName
}: any) {
  const [rowSelection, setRowSelection] = React.useState({})
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [sorting, setSorting] = React.useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })

  return (
    <div className="">

      {/* <DataTableToolbar table={table} /> like filter vghra*/}
      <div className="border-y">
        <Table>
          <TableHeader>
            {/* {table.getHeaderGroups().map((headerGroup) => ( */}
            <TableRow  >
              {/* {headerGroup.headers.map((header) => {
                  return ( */}
              {
                columsName?.map((x: any, index: any) => {
                  return <TableHead >
                    {
                      pageName == "referrals" && index == 0 && <Checkbox className="mr-2" />
                    }
                    {x}
                    {/* {header.isPlaceholder
            ? null
            : flexRender(
              header.column.columnDef.header,
              header.getContext()
            )} */}
                  </TableHead>
                })
              }

              {/* )
                })} */}
            </TableRow>
            {/* ))} */}
          </TableHeader>
          <TableBody>
            {/* {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => ( */}
            {
              [1, 2, 3, 4, 5].map((row) => {
                return (<TableRow
                  key={1}
                // data-state={row.getIsSelected() && "selected"}
                >
                  {columnsData?.map((column: any, index: any) => {
                    return <TableCell key={1} className={`text-[${column?.color}] ${column?.style} font-${column?.weight} `} >

                      <span className={`text-[${column?.color}]   flex items-center`}>

                        {
                          pageName == "referrals" && index == 0 && <span className="mr-3">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="40" height="40" rx="20" fill="#F9F5FF" />
                              <path d="M28 29V27C28 25.9391 27.5786 24.9217 26.8284 24.1716C26.0783 23.4214 25.0609 23 24 23H16C14.9391 23 13.9217 23.4214 13.1716 24.1716C12.4214 24.9217 12 25.9391 12 27V29M24 15C24 17.2091 22.2091 19 20 19C17.7909 19 16 17.2091 16 15C16 12.7909 17.7909 11 20 11C22.2091 11 24 12.7909 24 15Z" stroke="#7F56D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </span>
                        }
                        {column?.text}
                      </span>

                      {/* {flexRender(
                cell.column.columnDef.cell,
                cell.getContext()
              )} */}
                    </TableCell>
                  })}




                  {/* ))} */}
                </TableRow>)
              })
            }
            {/* ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )} */}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  )
}
