"use client";

import Image from "next/image";
import { useState } from "react";

const content = [
  {
    name: "Mrs. Benardino May",
    desc: `🥏🥏 My daughter has grown academically and socially since joining MySchool. The teachers are supportive, and the environment is safe.`,
    img: `https://media.istockphoto.com/id/517301140/photo/portrait-of-nigerian-woman-smiling-towards-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=ve6VN0w2TKV12UOSZdyqEcgpYvDWS7oWGEERYzeB2zQ=`,
  },
  {
    name: "Mrs. John aladiho",
    desc: `🥏🥏 My daughter has grown academically and socially since joining MySchool. The teachers are supportive, and the environment is safe.`,
    img: `https://media.istockphoto.com/id/1234454727/photo/confident-young-african-businesswoman-looking-out-through-an-office-window.webp?a=1&b=1&s=612x612&w=0&k=20&c=qpckmrdK8JIS8waE-HgNFFIXFC8mwQzVWzkkUVK_EwQ=`,
  },
  {
    name: "Mrs. Awashima Terna",
    desc: `🥏🥏 My daughter has grown academically and socially since joining MySchool. The teachers are supportive, and the environment is safe.`,
    img: `https://plus.unsplash.com/premium_photo-1692873056432-3d02639a184e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TmlnZXJpYSUyMHdvbWFufGVufDB8fDB8fHww`,
  },
  {
    name: "Iengem Tyozughul",
    desc: `🥏🥏 Coming to 'MySchool' is the best thing that ever happend to me. The teachers are supportive, and the environment is safe.`,
    img: `https://media.istockphoto.com/id/1312436846/photo/portrait-of-high-school-female-student-in-front-of-the-classroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=7NL8Ai7Z3AS063b_kvKiBbaejJdKTnX5PXv8unKxcSo=`,
  },
];

export default function TestimonialScroller() {
  // Duplicate the content to create infinite loop effect
  const loopContent = [...content, ...content];

  const [hover, setHover] = useState(false)

  return (
    <section className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold border-b-4 border-amber-300 text-center text-gray-800 mb-8 sm:mx-40 pb-4">
        What Parents And Student Say  ❤️
      </h2>

      <div className="overflow-hidden py-4">
        <div className="flex animate-scroll space-x-6"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{ animationPlayState: hover ? 'paused' : 'running' }}
        >
          {loopContent.map((item, i) => (
            <div
              key={i}
              className="min-w-[320px] max-w-sm bg-white shadow-xl hover:shadow-lg border-amber-300 border-2 hover:border-8 rounded-2xl p-6 flex-shrink-0 flex flex-col items-center text-center transition-all duration-500"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={20}
                height={20}
                className="w-20 h-20 rounded-full object-cover border-4 border-blue-500 shadow-md"
              />
              <p className="text-gray-600 italic mt-4">“{item.desc}”</p>
              <h4 className="mt-4 font-semibold text-amber-600">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
