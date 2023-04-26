 

export default async function DashboardLayout({
  children,
}: any) {
   

  return (
    <div className="mx-auto flex flex-col space-y-6">
     {children}
    </div>
  )
}
