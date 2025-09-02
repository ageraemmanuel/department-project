import Link from 'next/link'
import SideBarComponent from '@/components/SideBarComponent'
import Display from './Display'

const CoursePage = () => {
  return (
    <div className="min-h-screen max-w-screen bg-gray-50 md:flex mt-18">
      {/* Sidebar */}
      <SideBarComponent />

      {/* Main Content */}
      <main className="flex-1 sm:p-6 p-2  ">
        <div className="bg-gray-100">
          <h1 className="text-center text-gray-500 py-10">
            <Link href='/'>Home / </Link>
            <Link href='/admin/dashboad'> Admin / </Link>
            <Link href='/'> Course Management</Link>
          </h1>
        </div>
        <Display />
      </main>

    </div>
  )
}

export default CoursePage