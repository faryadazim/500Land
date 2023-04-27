import MainContent from "./MainContent";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
export default function DashBoard() {
  return (
    <>
      <SideBar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <NavBar />
        <MainContent />
      </div>
    </>
  )
}
