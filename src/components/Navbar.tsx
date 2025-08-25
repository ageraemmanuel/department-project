import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-200 text-gray-800 font-bold px-10 p-4">
      <Link href={'/'}>Home</Link>
      <div className="flex justify-evenly gap-2 items-center">
        <Link href={'/about'}>About</Link>
        <Link href={'/academics'}>Academics</Link>
        <Link href={'/admissions'}>Admission</Link>
        <Link href={'/portal'}>Portal</Link>
        <Link href={'/contact'}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar