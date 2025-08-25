'use client'

import Image from "next/image"
import Link from "next/link"

const news = [
  {
    imgUrl: `https://media.istockphoto.com/id/1770690434/photo/schoolgirl-concentrating-looking-at-keyboard-while-typing-on-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=RKixHktNOGFQDB0nblDjQyuZK3dIM0wRdPUIe8Yw2OM=`,
    title: `School annouces 2025/2026 Exams commencement Day.`,
    content: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eum iure, aliquam minima expedita corporis?`
  },
  {
    imgUrl: `https://plus.unsplash.com/premium_photo-1713890423188-01590e2422de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RXhhbXMlMjBEYXklMjBpbiUyME5pZ2VyaWF8ZW58MHx8MHx8fDA%3D`,
    title: `committee set for the 2025/2027 examinamination`,
  },
  {
    imgUrl: `https://plus.unsplash.com/premium_photo-1713890429200-e725c894ab95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RXhhbXMlMjBEYXklMjBpbiUyME5pZ2VyaWF8ZW58MHx8MHx8fDA%3D`,
    title: `Mrs Tyodue assumes the office as the principal`,
  },
  {
    imgUrl: `https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVuZGVyJTIwY29uc3RydWN0aW9ufGVufDB8fDB8fHww`,
    title: `The New exams premises under construction.`,
  },
  {
    imgUrl: `https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVuZGVyJTIwY29uc3RydWN0aW9ufGVufDB8fDB8fHww`,
    title: `School Board sit to make Computer training as a mandatory extra-curriculum activity.`,
  },
  {
    imgUrl: `https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TmlnZXJpYW4lMjBzdHVkZW50cyUyMGluJTIwY29tcHV0ZXIlMjBoYWxsfGVufDB8fDB8fHww`,
    title: `Preparation for Jamb classes to commence on 02/07/2026.`,
  },
]


const NewsSection = () => {

  return (
    <div className="max-w-full bg-gray-50 p-4">
      <h1 className="text-3xl sm:text-5xl my-6 pb-4 text-center font-extrabold"><span className="border-b-4 border-amber-300 pb-4">School News</span></h1>
      <div className="grid grid-cols-1 gap-4 sm-grid-col-2 md:grid-cols-3">
        {
          news.map((n, i) => (
            <div key={i} className="bg-white rounded-2xl border-gray-100 hover:border-4 p-2 sm:p-4 shadow-2xl hover:shadow-lg transition-all duration-500">
              <Image src={n.imgUrl}
                alt="news image"
                width={400}
                height={400}
                className="w-full object-center object-cover"
              />
              <h3 className="text-amber-600 my-4 text-2xl">{n.title}</h3>
              <p><Link href={'/'} className="text-blue-500 font-extrabold">Read Now <span className="text-3xl">→</span></Link></p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default NewsSection