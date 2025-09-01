import Admindashboard from "./Admindashboard";
import SideBarComponent from "@/components/SideBarComponent";

export default function AdminPage() {

  return (

    <div className="min-h-screen max-w-screen bg-gray-50 md:flex mt-18">
      {/* Sidebar */}
      <SideBarComponent />

      {/* Main Content */}
      <main className="flex-1 sm:p-6 p-2 space-y-6 ">
        <Admindashboard />
      </main>

    </div>
  );
}
