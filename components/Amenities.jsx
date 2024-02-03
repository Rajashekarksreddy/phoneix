
import Image from "next/image";

const testimonials = [
  {
    author: {
      name: "TENNIS COURT",
     handle:1,
      imageUrl:
        "https://phoneix-kessaku.info/staging/images/am6.png",
      
    },
  },
  {
   
    author: {
      name: "BASKETBALL COURT",
      handle:2,
      imageUrl:
        "https://phoneix-kessaku.info/staging/images/am6.png",
    
    },
  },
  {
    author: {
      name: "JOGGING TRACK",
      handle:3,
      imageUrl:
        "https://phoneix-kessaku.info/staging/images/am6.png",
     
    },
  },
  {
    author: {
      name: "SWIMMING POOLS",
      handle:5,
      imageUrl:
        "https://phoneix-kessaku.info/staging/images/am6.png",
    },
  },
  {
   
    author: {
      name: "BILLIARDS TABLE",
      handle:6,
      imageUrl:
        "https://phoneix-kessaku.info/staging/images/am6.png",
    },
  },
  {
    author: {
      name: "GYMNASIUM",
      handle:7,
      imageUrl:
        "https://phoneix-kessaku.info/staging/images/am6.png",
     
    },
  },
];

export default function Amenities() {
  return (
    <div className="bg-white py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
            Amenties
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.handle}
                className="pt-8 sm:inline-block sm:w-full sm:px-4 relative"
              >
                <figure className="rounded-2xl   bg-white p-10 text-sm leading-6  relative">
                 
                  <div className="mt-6 flex items-center gap-x-4">
                  <Image
        alt="Vercel logo"
        src='/vercel.png'
        width={1000}
        height={1000}
        className=" w-full h-full"
      />
                   
                  </div>
                  <div>
                  <p className="flex flex-col py-2 px-4 my-4 bg-gray-600 ">{testimonial.author.name}</p>
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