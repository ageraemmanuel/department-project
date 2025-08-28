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
    title: "Fully Equipped Laboratories",
    imgUrl: [
      `https://images.unsplash.com/photo-1719159381981-1327b22aff9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXIlMjBsYWJzfGVufDB8fDB8fHww`,
      `https://images.unsplash.com/photo-1689236673934-66f8e9d9279b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXIlMjBsYWJzfGVufDB8fDB8fHww`,
      `https://images.unsplash.com/photo-1691040516392-d9700bb4ebce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvbXB1dGVyJTIwbGFic3xlbnwwfHwwfHx8MA%3D%3D`,
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
    <div className="max-w-screen sm:p-8 p-4">
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
