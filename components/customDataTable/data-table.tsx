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
                  return <TableHead key={index}>
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
              [1, 2, 3, 4, 5].map((row, index) => {
                return (<TableRow
                  key={index}
                // data-state={row.getIsSelected() && "selected"}
                >
                  {columnsData?.map((column: any, index: any) => {
                    return <TableCell key={index} className={`text-[${column?.color}] ${column?.style} font-${column?.weight} `} >

                      <span className={`text-[${column?.color}]   flex items-center`}>

                        {
                          pageName == "referrals" && index == 0 && <span className="mr-3">
                            <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width={40} height={40} rx={20} fill="#F9F5FF" />
                              <path d="M28 29V27C28 25.9391 27.5786 24.9217 26.8284 24.1716C26.0783 23.4214 25.0609 23 24 23H16C14.9391 23 13.9217 23.4214 13.1716 24.1716C12.4214 24.9217 12 25.9391 12 27V29M24 15C24 17.2091 22.2091 19 20 19C17.7909 19 16 17.2091 16 15C16 12.7909 17.7909 11 20 11C22.2091 11 24 12.7909 24 15Z" stroke="#7F56D9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                          </span>
                        }




                        {column?.text}


                        {
                          pageName == "marketplace" && index == 4 && <span className="mr-3 flex items-center">
                            <span>

                              <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.3974 25.0964C12.4356 24.7518 12.4548 24.5795 12.5069 24.4185C12.5532 24.2756 12.6185 24.1397 12.7012 24.0143C12.7944 23.873 12.9169 23.7504 13.1621 23.5053L24.1673 12.5C25.0878 11.5796 26.5802 11.5796 27.5007 12.5C28.4211 13.4205 28.4211 14.9129 27.5007 15.8334L16.4954 26.8386C16.2503 27.0838 16.1277 27.2063 15.9864 27.2995C15.861 27.3822 15.7251 27.4475 15.5822 27.4938C15.4212 27.5459 15.2489 27.5651 14.9043 27.6033L12.084 27.9167L12.3974 25.0964Z" stroke="#475467" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>

                            </span>
                            <span>

                              <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3333 4.99996V4.33329C13.3333 3.39987 13.3333 2.93316 13.1517 2.57664C12.9919 2.26304 12.7369 2.00807 12.4233 1.84828C12.0668 1.66663 11.6001 1.66663 10.6667 1.66663H9.33333C8.39991 1.66663 7.9332 1.66663 7.57668 1.84828C7.26308 2.00807 7.00811 2.26304 6.84832 2.57664C6.66667 2.93316 6.66667 3.39987 6.66667 4.33329V4.99996M8.33333 9.58329V13.75M11.6667 9.58329V13.75M2.5 4.99996H17.5M15.8333 4.99996V14.3333C15.8333 15.7334 15.8333 16.4335 15.5608 16.9683C15.3212 17.4387 14.9387 17.8211 14.4683 18.0608C13.9335 18.3333 13.2335 18.3333 11.8333 18.3333H8.16667C6.76654 18.3333 6.06647 18.3333 5.53169 18.0608C5.06129 17.8211 4.67883 17.4387 4.43915 16.9683C4.16667 16.4335 4.16667 15.7334 4.16667 14.3333V4.99996" stroke="#475467" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>

                            </span>

                          </span>
                        }

                        {
                          pageName == "marketplace2" && index == 4 && <span className="mr-3 ">


                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14.7901 26.8356C14.3401 26.8356 13.9605 26.68 13.6513 26.3689C13.3421 26.0578 13.1875 25.6787 13.1875 25.2318V18.9347C13.1875 18.485 13.3435 18.1035 13.6554 17.7903C13.9673 17.4772 14.3473 17.3206 14.7954 17.3206C15.2434 17.3206 15.6237 17.4772 15.9364 17.7903C16.249 18.1035 16.4054 18.485 16.4054 18.9347V25.2318C16.4054 25.6787 16.2487 26.0578 15.9353 26.3689C15.622 26.68 15.2402 26.8356 14.7901 26.8356ZM19.9985 26.8356C19.5484 26.8356 19.1688 26.68 18.8596 26.3689C18.5504 26.0578 18.3958 25.6787 18.3958 25.2318V14.7681C18.3958 14.3183 18.5518 13.9368 18.8637 13.6237C19.1756 13.3105 19.5556 13.1539 20.0037 13.1539C20.4517 13.1539 20.8321 13.3105 21.1447 13.6237C21.4574 13.9368 21.6137 14.3183 21.6137 14.7681V25.2318C21.6137 25.6787 21.457 26.0578 21.1436 26.3689C20.8303 26.68 20.4486 26.8356 19.9985 26.8356ZM25.2068 26.8356C24.7567 26.8356 24.3771 26.68 24.0679 26.3689C23.7588 26.0578 23.6042 25.6787 23.6042 25.2318V22.2681C23.6042 21.8183 23.7601 21.4368 24.0721 21.1237C24.384 20.8105 24.764 20.6539 25.212 20.6539C25.6601 20.6539 26.0404 20.8105 26.3531 21.1237C26.6657 21.4368 26.822 21.8183 26.822 22.2681V25.2318C26.822 25.6787 26.6654 26.0578 26.352 26.3689C26.0386 26.68 25.6569 26.8356 25.2068 26.8356Z" fill="#475467" />
                            </svg>

                          </span>
                        }

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
