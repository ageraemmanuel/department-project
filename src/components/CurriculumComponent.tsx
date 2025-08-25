'use client'

import Image from "next/image"

const details = [
  {
    id: 1,
    imgUrl: `https://images.unsplash.com/photo-1612373886932-59c0494aefa0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fE5pZ2VyaWFuJTIwc2Vjb25kYXJ5JTIwc2Nob29sJTIwc3R1ZGVudHMlMjBkb2luZyUyMGV4dHJhJTIwY3VyaWN1bHVtJTIwYWN0aXZpdGllc3xlbnwwfHwwfHx8MA%3D%3D`,
    title: 'Nursery & Early Years ',
    desc: 'Foundational skills through play-based learning. to empower your child with all the neccessary base knowledge he needs'
  },
  {
    id: 2,
    imgUrl: `https://images.unsplash.com/photo-1687794504223-8bdc02e25ef6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fE5pZ2VyaWFuJTIwc2Vjb25kYXJ5JTIwc2Nob29sJTIwc3R1ZGVudHMlMjBkb2luZyUyMGV4dHJhJTIwY3VyaWN1bHVtJTIwYWN0aXZpdGllc3xlbnwwfHwwfHx8MA%3D%3D`,
    title: 'Primary Education',
    desc: 'Building strong literacy, numeracy, and social skills. Through structural learning and motivational techniques'
  },
  {
    id: 3,
    imgUrl: `https://images.unsplash.com/photo-1632215863479-201029d93143?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE5pZ2VyaWFucyUyMHN0dWRlbnRzfGVufDB8fDB8fHww`,
    title: 'Secondary Education. ',
    desc: 'Preparing for higher education and global opportunities. with higher educational curriculum and avancing the thinking abilities.'
  },
  {
    id: 4,
    imgUrl: `https://images.unsplash.com/photo-1582638423482-a90640357638?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fE5pZ2VyaWFucyUyMHN0dWRlbnRzfGVufDB8fDB8fHww`,
    title: 'STEM & Extra Activities',
    desc: 'Science, coding, sports, arts, and leadership. we take upon ourself to go extra-miles to make sure your child get all the skills to excel in which ever part he choose'
  },
]

const CurriculumComponent = () => {
  return (
    <div className="max-w-screen bg-gray-50 mb-4 p-4 sm:p-8">
      <div >
        <h1 className="font-bold border-b-4 border-amber-300 pb-4 text-3xl md:text-5xl my-10 text-center">
          Curiculum Tailored for Every Stage
        </h1>
        <p className="my-4 leading-relaxed">
          From early childhood to secondary school, our curriculum is designed to help students excel academically while exploring their unique talents.
        </p>
        <div className="grid gap-8 sm:grid-cols-2">
          {
            details.map(det => (
              <div
                key={det.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-4"
              >
                <Image src={det.imgUrl}
                  alt="curricullums image"
                  width={450}
                  height={400}
                  className="object-center object-cover rounded-xl w-full"
                />
                <h2 className="font-bold my-4 text-center">
                  <span className="border-b-2 text-2xl border-amber-300 pb-2">{det.title}</span>
                </h2>
                <p>{det.desc}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default CurriculumComponent