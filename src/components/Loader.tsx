import Image from "next/image";

export default function Loader() {
  return (
    <div className="flex items-center border-white justify-center min-h-screen bg-white">
      <div className="animate-spin h-20 w-20 rounded-full border-white/80 border-8" >
        <Image src="/logo.jpg" alt="Logo" width={100} height={100} />
      </div>
    </div>
  );
}
