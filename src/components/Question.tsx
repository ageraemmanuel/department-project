import Link from "next/link"

const Question = () => {
  return (
    <div className="flex justify-center items-center py-10 px-4">
      <div>
        <h3 className="text-center my-4 text-3xl md:text-5xl">
          Have Any Question❓
        </h3>
        <p>If you have questions or would like to learn more about <span className="text-amber-300 font-bold">MyShool</span></p>
        <Link href="/contact"
          className="flex justify-self-center bg-amber-500 hover:bg-amber-700 transition-colors duration-500 text-xl font-bold rounded-xl py-2 my-10 px-10 text-white"
        >
          Get In Touch
        </Link>
      </div>
    </div>
  )
}

export default Question