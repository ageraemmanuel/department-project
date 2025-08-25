'use client'

import Image from "next/image"

const activities = [
  {
    name: 'Annual Cultural & Sports Day',
    imgUrl: [
      `https://images.unsplash.com/photo-1515921560173-3633830cb11a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fE5pZ2VyaWFuJTIwc2Vjb25kYXJ5JTIwc2Nob29sJTJDJTIwQW5udWFsJTIwQ3VsdHVyYWwlMjAlMjYlMjBTcG9ydHMlMjBEYXl8ZW58MHx8MHx8fDA%3D`,

      `https://images.unsplash.com/photo-1714575628358-d1ff94fcdd72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE5pZ2VyaWFuJTIwc2Vjb25kYXJ5JTIwc2Nob29sJTJDJTIwQW5udWFsJTIwQ3VsdHVyYWwlMjAlMjYlMjBTcG9ydHMlMjBEYXl8ZW58MHx8MHx8fDA%3D`,

      `https://images.unsplash.com/photo-1624695759638-c11d66bbeac3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TmlnZXJpYW4lMjBzZWNvbmRhcnklMjBzY2hvb2wlMkMlMjBBbm51YWwlMjBDdWx0dXJhbCUyMCUyNiUyMFNwb3J0cyUyMERheXxlbnwwfHwwfHx8MA%3D%3D`

    ]
  },
  {
    name: ' Science & Innovation Fair',
    imgUrl: [
      `https://media.istockphoto.com/id/2165289440/photo/high-school-students-in-science-lab-use-microscope.webp?a=1&b=1&s=612x612&w=0&k=20&c=P3A-GG3OIBhj9Cgjk0kY3HAbbBZwhNj_35z4bbwEJU0=`,

      `https://media.istockphoto.com/id/498707467/photo/high-school-students-using-microscope-examining-slides-in-science-class.webp?a=1&b=1&s=612x612&w=0&k=20&c=oWMELwCOxQh63mYa6i6UrTx3mA9pVtwwlp7kvVyD6yA=`,

      `https://images.unsplash.com/photo-1601728735713-8561190dc839?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFNjaWVuY2UlMjAlMjYlMjBJbm5vdmF0aW9uJTIwRmFpciUyMEluJTIwTmlnZXJpYW4lMjBzZWNvbmRhcnklMjBzY2hvb2xzfGVufDB8fDB8fHww`

    ]
  },
  {
    name: 'Debate & Leadership Clubs',
    imgUrl: [
      `https://images.unsplash.com/photo-1703763873673-736d41a821e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE5pZ2VyaWFuJTIwRGViYXRlJTIwSW4lMjBTZWNvbmRhcnklMjBzY2hvb2xzfGVufDB8fDB8fHww`,

      `https://images.unsplash.com/photo-1588072432836-e10032774350?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsYXNzcm9vbXxlbnwwfHwwfHx8MA%3D%3D`,

      `https://media.istockphoto.com/id/1441395831/photo/group-of-students-giving-a-presentation-to-classmates-at-school.webp?a=1&b=1&s=612x612&w=0&k=20&c=d3NcEem39yjmBD8UjkYTGx8htoOBYq_ZeSYdsnSQG0g=`

    ]
  },
  {
    name: 'Community Outreach Programs',
    imgUrl: [
      `https://images.unsplash.com/photo-1660066524211-864a8a495d9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENvbW11bml0eSUyME91dHJlYWNoJTIwUHJvZ3JhbXMlMjBJbiUyME5pZ2VyaWF8ZW58MHx8MHx8fDA%3D`,

      `https://media.istockphoto.com/id/2187682901/photo/a-set-of-young-black-african-women-lady-girl-wearing-pink-shirt-holding-nigeria-national-flag.webp?a=1&b=1&s=612x612&w=0&k=20&c=q2Vyg2SRcuA329lbHl92z60S6oFdFTBDOy2_eEOqSyY=`,

      `https://images.unsplash.com/photo-1708347456805-b7f83316a8ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fENvbW11bml0eSUyME91dHJlYWNoJTIwUHJvZ3JhbXMlMjBJbiUyME5pZ2VyaWF8ZW58MHx8MHx8fDA%3D`

    ]
  },

]

const AchievmentSection = () => {
  return (
    <div className="max-w-screen my-6 p-4">
      <div className="shadow-xl p-4">
        <h1 className="text-center font-bold my-6 text-3xl sm:text-5xl md:mx-10 border-b-4 border-amber-300 pb-4">
          Celebrating Our Success Stories
        </h1>
        <p> From winning inter-school competitions to producing top-performing graduates, <span className="text-amber-300 font-bold">MySchool</span> continues to set standards in education and child development. Taking your child to <span className="text-amber-300 font-bold">MySchool</span> will be the best decision you will ever make for the future of your Child.
        </p>
      </div>
      <div>
        {activities.map((cont, index) => (
          <div key={index}>
            <h2 className="text-center my-10 sm:text-3xl font-bold">
              <span className="pb-2 border-b-2 border-b-amber-300">{cont.name}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {cont.imgUrl.map((img, i) => (
                <div key={i} className="w-full h-64 relative border hover:border-4 shadow hover:shadow-2xl rounded-lg border-gray-50 transition-all duration-500">
                  <Image
                    src={img}
                    alt="facility images"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AchievmentSection