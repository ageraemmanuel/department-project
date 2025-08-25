import Image from "next/image";

const content = [
  {
    title: "Modern Library & ICT Labs",
    imgUrl: [
      `https://plus.unsplash.com/premium_photo-1750530064487-5e979173d281?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0`,
      `https://images.unsplash.com/photo-1695303521376-ccfe383b4fa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNlY29uZGFyeSUyMHNjaG9vbCUyMGxpYnJhcnl8ZW58MHx8MHx8fDA%3D`,
      `https://images.unsplash.com/photo-1606733803396-1d028f0e6f43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0`
    ]
  },
  {
    title: "Sports Fields & Playgrounds",
    imgUrl: [
      `https://images.unsplash.com/photo-1717584146940-118a65525da8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0`,
      `https://plus.unsplash.com/premium_photo-1684106554224-1df87e5c2e29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNlY29uZGFyeSUyMHNjaG9vbCUyMGZvb3RiYWxsJTIwZmllbGR8ZW58MHx8MHx8fDA%3D`,
      `https://images.unsplash.com/photo-1733648213151-54ff57977151?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0`,
    ]
  },
  {
    title: "Fully Equipped Science Laboratories",
    imgUrl: [
      `https://images.unsplash.com/photo-1722407348192-a44ce83704da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0`,
      `https://plus.unsplash.com/premium_photo-1682129938471-58c6b659cd8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0`,
      `https://media.istockphoto.com/id/2193901967/photo/teacher-and-student-in-lad-coats-looking-happy-and-contented.webp?a=1&b=1&s=612x612&w=0&k=20&c=ueHhZczpqhluYVii7HugkCJVJD55yFvQVvkES1yRkJo=`,
    ]
  },
  {
    title: "Safe, Spacious Classrooms",
    imgUrl: [
      `https://images.unsplash.com/photo-1602145095452-aba06946ed05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fE5pZ2VyaWFuJTIwQ2xhc3MlMjBSb29tc3xlbnwwfHwwfHx8MA%3D%3D`,
      `https://plus.unsplash.com/premium_photo-1724026586579-5c413598de2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TmlnZXJpYW4lMjBDbGFzcyUyMFJvb21zfGVufDB8fDB8fHww`,
      `https://images.unsplash.com/photo-1599827083902-7ebdbad1744c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE5pZ2VyaWFuJTIwQ2xhc3MlMjBSb29tc3xlbnwwfHwwfHx8MA%3D%3D`,
    ]
  },
];

const FacilitiesComponent = () => {
  return (
    <div className="max-w-screen p-4">
      <h1 className="text-center text-3xl sm:text-4xl font-bold pb-4 my-6 border-b-4 border-b-amber-400">
        A Conducive Environment for Learning & Growth
      </h1>

      <div>
        {content.map((cont, index) => (
          <div key={index}>
            <h2 className="text-center my-10 sm:text-3xl font-bold">
              <span className="pb-2 border-b-2 border-b-amber-300">{cont.title}</span>
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
  );
};

export default FacilitiesComponent;
