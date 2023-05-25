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

import { Pencil , CircleEllipsis} from "lucide-react"
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

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
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

      <DataTableToolbar table={table} />
      <div className="border-y">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
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
                  {/* {row.getVisibleCells().map((cell) => ( */}
                  <TableCell key={1}>
                    Data
                    {/* {flexRender(
            cell.column.columnDef.cell,
            cell.getContext()
          )} */}
                  </TableCell>
                  <TableCell key={1}>
                    Data
                    {/* {flexRender(
            cell.column.columnDef.cell,
            cell.getContext()
          )} */}
                  </TableCell>
                  <TableCell key={1}>
                    Data
                    {/* {flexRender(
            cell.column.columnDef.cell,
            cell.getContext()
          )} */}
                  </TableCell>
                  <TableCell key={1}>
                    Data
                    {/* {flexRender(
            cell.column.columnDef.cell,
            cell.getContext()
          )} */}
                  </TableCell>
                  <TableCell key={1}>
                    Data
                    {/* {flexRender(
            cell.column.columnDef.cell,
            cell.getContext()
          )} */}
                  </TableCell>
              
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
