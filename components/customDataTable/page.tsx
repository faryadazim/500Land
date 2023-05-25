"use client"
import Image from "next/image"
import { z } from "zod"

import { columns } from "./columns"
import { DataTable } from "./data-table"
import { UserNav } from "./user-nav"
import { taskSchema } from "./schema"
import tasksList from "./tasks"

// Simulate a database read for tasks.
async function getTasks() {
  // const data = await fs.readFile(
  //   path.join(process.cwd(), "app/examples/tasks/data/tasks.json")
  // )
  const data = tasksList;
  const tasks = JSON.parse(data.toString())

  return z.array(taskSchema).parse(tasks)
}

export default function TaskPage({ pageName }: any) {
  const tasks = getTasks()

  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className=" h-full flex-1 flex-col space-y-4 py-8 pt-5 md:flex border rounded-md">
    


{
        pageName==="referrals"?<><div className="flex items-center justify-between space-y-2  px-5" >
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Referred</h2>
            <p className="text-muted-foreground">
              A list of people you have referred and your current earned status.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            Total amount earned: $2000
            {/* <UserNav /> */}
          </div>
        </div></> :  pageName==="marketplace"?<><div className="flex items-center justify-between space-y-2  px-5" >
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Current Listings</h2>

          </div>

        </div></>:pageName==="marketplace2"?<><div className="flex items-center justify-between space-y-2  px-5" >
          <div>
            <h2 className="text-2xl font-bold tracking-tight">My Listings</h2>

          </div>

        </div></>:<>Undefined</>
}




        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  )
}
