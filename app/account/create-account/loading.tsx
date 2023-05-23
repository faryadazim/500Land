 

export default function CreateAccountLoading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
    <div className="flex">
      <div className="relative">
        {/* Outer Ring*/}
        <div className="w-12 h-12 rounded-full absolute
                  border border-solid border-gray-200" />
        {/* Inner Ring */}
        <div className="w-12 h-12 rounded-full animate-spin absolute
                  border border-solid  border-[#70F09C]  border-t-transparent" />
      </div>
    </div>

  </div >
  )
}
