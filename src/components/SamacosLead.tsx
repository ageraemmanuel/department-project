"use client";

import Image from "next/image";
import { useState } from "react";

const content = [
  {
    name: "Comr. Peter Mhen",
    desc: `President: Current`,
    img: `https://plus.unsplash.com/premium_photo-1707155466129-89388072375e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fE5pZ2VyaWFuJTIwQ29tcHV0ZXIlMjBTY2llbmNlZSUyMHN0dWRlbnQlMjBPbiUyMHN5c3RlbXxlbnwwfHwwfHx8MA%3D%3D`,
  },
  {
    name: "Comr. Peter Mhen",
    desc: `President 2026-2025`,
    img: `https://images.unsplash.com/photo-1678282955808-de92256dbd59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fE5pZ2VyaWFuJTIwQ29tcHV0ZXIlMjBTY2llbmNlZSUyMHN0dWRlbnQlMjBPbiUyMHN5c3RlbXxlbnwwfHwwfHx8MA%3D%3D`,
  },
  {
    name: "Comr. John aladiho",
    desc: `President from 2000 - 2001`,
    img: `https://images.unsplash.com/photo-1629836149344-3c51a772fe35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TmlnZXJpYW4lMjBDb21wdXRlciUyMFNjaWVuY2VlJTIwc3R1ZGVudCUyME9uJTIwc3lzdGVtfGVufDB8fDB8fHww`,
  },
  {
    name: "Mrs. Awashima Terna",
    desc: `President: 2001 - 2002`,
    img: `https://plus.unsplash.com/premium_photo-1692873056432-3d02639a184e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TmlnZXJpYSUyMHdvbWFufGVufDB8fDB8fHww`,
  },
  {
    name: "Comr. Iengem Tyozughul",
    desc: `President: 2002 - 2003`,
    img: `https://media.istockphoto.com/id/1312436846/photo/portrait-of-high-school-female-student-in-front-of-the-classroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=7NL8Ai7Z3AS063b_kvKiBbaejJdKTnX5PXv8unKxcSo=`,
  },
];

export default function SamacosLead() {
  // Duplicate the content to create infinite loop effect
  const loopContent = [...content, ...content];

  const [hover, setHover] = useState(false)

  return (
    <section className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold border-b-4 border-amber-300 text-center text-gray-800 mb-8 sm:mx-40 pb-4">
        Meet SAMACOS Leaders
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
              className="min-w-[320px] max-w-sm bg-white shadow-xl hover:shadow-lg border-amber-300 border rounded-2xl p-6 flex-shrink-0 flex flex-col items-center text-center transition-all duration-500"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={20}
                height={20}
                className="w-20 h-20 rounded-full object-cover border-4 border-blue-500 shadow-md"
              />
              <h4 className="mt-4 font-semibold text-amber-600">{item.name}</h4>
              <p className="text-gray-600 italic mt-4">“{item.desc}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
