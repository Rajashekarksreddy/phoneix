import Image from "next/image";

const photos = [
  {
    author: {
     handle:1,
      href:'/g1.jpg'
      
    },
  },
  {
   
    author: {
      handle:2,
        href:'/g2.jpg'
    
    },
  },
  {
    author: {
      handle:3,
        href:'/g3.jpg'
     
    },
  },
  {
    author: {
      handle:5,
        href:'/g4.jpg'
    },
  },
  {
   
    author: {
      handle:6,
        href:'/g5.jpg'
    },
  },
  {
    author: {
      handle:7,
        href:'/g6.jpg'
     
    },
  },
  {
    author: {
      handle:7,
        href:'/g7.jpg'
     
    },
  },
  {
    author: {
      handle:7,
        href:'/g8.jpg'
     
    },
  },
];

export default function Gallery() {
  return (
    <div className="bg-white py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center text-4xl">
            Gallery
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {photos.map((photo) => (
              <div
                key={photo.author.handle}
                className="pt-8 sm:inline-block sm:w-full sm:px-4 relative"
              >
                <figure className="rounded-2xl   bg-white p-10 text-sm leading-6  relative">
                 
                  <div className="mt-6 flex items-center gap-x-4">
                  <Image
        alt="Vercel logo"
        src={photo.author.href}
        width={1000}
        height={1000}
        className=" w-full h-full"
      />
                   
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