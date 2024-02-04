
import Image from "next/image";

const amenities = [
  {
    author: {
      name: "SORA",
     handle:1,
      href:'/fp1.jpg'
      
    },
  },
  {
   
    author: {
      name: "NIVA",
      handle:2,
      imageUrl:
        "https://phoneix-kessaku.info/staging/images/am6.png",
        href:'/fp2.jpg'
    
    },
  },
  {
    author: {
      name: "MIZU",
      handle:3,
      imageUrl:
        "	https://phoneix-kessaku.info/staging/images/am7.png",
        href:'/fp3.jpg'
     
    },
  },
  {
    author: {
      name: "FAIA",
      handle:5,
      imageUrl:
        "https://phoneix-kessaku.info/staging/images/am10.png",
        href:'/fp4.jpg'
    },
  },
  {
   
    author: {
      name: "ZEFA",
      handle:6,
      imageUrl:
        "	https://phoneix-kessaku.info/staging/images/am14.png",
        href:'/fp5.jpg'
    },
  },
];

export default function Amenities() {
  return (
    <div className="bg-white py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center text-4xl">
            MASTER PLANS & FLOOR PLANS
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {amenities.map((amenitie) => (
              <div
                key={amenitie.author.handle}
                className="pt-8 sm:inline-block sm:w-full sm:px-4 relative"
              >
                <figure className="rounded-2xl   bg-white p-10 text-sm leading-6  relative">
                 
                  <div className="mt-6 flex items-center gap-x-4">
                  <Image
        alt="Vercel logo"
        src={amenitie.author.href}
        width={1000}
        height={1000}
        className=" w-full h-full"
      />
                   
                  </div>
                  <div>
                  <p className="flex flex-col py-2 px-4 my-4 bg-gray-600 ">{amenitie.author.name}</p>
                  </div>
                </figure>
              </div>
            ))}
          </div>
          <div>
    
        </div>
        </div>
      </div>
    </div>
  );
}