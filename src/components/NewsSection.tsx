'use client'

const news = [
  {
    title: `School set to resume on 27th, Aug, 2025`,
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos cupiditate quae voluptatem ipsa, qui quis! Perferendis nisi accusamus culpa voluptates?`
  },
  {
    title: `All 100lv Students are to meet EOD `,
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos cupiditate quae voluptatem ipsa, qui quis! Perferendis nisi accusamus culpa voluptates?`
  },
  {
    title: `The New exams premises under construction.`,
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos cupiditate quae voluptatem ipsa, qui quis! Perferendis nisi accusamus culpa voluptates?`
  },
  {
    title: `School Board sit to make Computer training mandatory.`,
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos cupiditate quae voluptatem ipsa, qui quis! Perferendis nisi accusamus culpa voluptates?`
  },
]


const NewsSection = () => {

  return (
    <div className="max-w-full bg-gray-50 p-4">
      <h1 className="text-3xl sm:text-5xl my-6 pb-4 text-center font-extrabold"><span className="border-b-4 border-amber-300 pb-4">Anouncements</span></h1>
      <div className="grid grid-cols-1 gap-4 sm-grid-col-2 md:grid-cols-3">
        {/* {
          news.map((n, i) => (
            <div key={i} className="bg-white rounded-xl border-gray-100 hover:border-4 p-2 sm:p-4 shadow transition-all duration-500">
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
        } */}

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {
          news.map((n, i) => (
            <div key={i} className="shadow my-4 p-4">
              <h3 className="text-amber-600 my-4 text-lg">{n.title}</h3>
              <p className="my-4">{n.content}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default NewsSection