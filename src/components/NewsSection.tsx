'use client'

import { Megaphone } from "lucide-react"

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
    <div id="anouncement" className="max-w-full bg-amber-500 p-4">
      <h1 className="text-3xl sm:text-5xl my-6 pb-4 text-center font-extrabold">
        Anouncements
        <Megaphone size={50} className="flex justify-self-center text-white" />
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:p-8 p-2">
        {
          news.map((n, i) => (
            <div key={i} className="shadow-xl p-4 bg-white rounded-2xl">
              <Megaphone className="flex justify-self-end text-amber-400" />
              <h3 className="text-amber-500 mb-4 text-xl">{n.title}</h3>
              <p className="my-4">{n.content}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default NewsSection