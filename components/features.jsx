

const amenities = [
  {
    author: {
      name: "Five art-inspired towers",
      handle:1
      
    },
  },
  {
   
    author: {
      name: "Spread across 4 acres",
      handle:2,
    
    },
  },
  {
    author: {
      name: "182 fine living redefining units",
      handle:3,
     
    },
  },
  {
    author: {
      name: "Three premium clubhouses",
      handle:4,
    },
  },
  {
   
    author: {
      name: "Homes in the sky",
      handle:5,
    },
  },
  {
    author: {
      name: "Floors : 2B + G + 30 Floors",
      handle:6,
      
     
    },
  },
];

export default function Features() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mt-6 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className=" sm:columns-2 sm:text-[0] lg:columns-3">
            {amenities.map((amenitie) => (
              <div
                key={amenitie.author.handle}
                className="pt-2 sm:inline-block sm:w-full sm:px-2 relative"
              >
                <figure className="rounded-2xl   bg-white p-1 text-sm leading-6  relative">
                 
                  <div className="mt-6 flex items-center gap-x-4">
                  </div>
                  <div>
                  <p className="flex flex-col py-2 px-4 my-4 bg-black text-white ">{amenitie.author.name}</p>
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