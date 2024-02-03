import Image from "next/image";

import { cn } from "@/lib/utils";

const FeatureSections = () => {
    return (
      <>
          <section className=" bg-slate-50">
          <div className="mx-auto px-6 py-6 sm:py-20">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16  lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
              <div  className=" lg:order-last"
   
              >
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl py-6">
                ABOUT PHOENIX KESSAKU
                </p>
                <p className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16  lg:mx-0 lg:max-w-none ">
                The Phoenix Mills Ltd, is over a 100 year old company with over 17.5 mn sq ft Hospitality, Commercial and Residential assets spread over 100+ acres. Our creativity in developing the alternative asset classes on a build-and-sale model is nothing short of the kind of energy we have placed behind our retail assets. Our commercial developments offer a focused modern work environment with the advantage of being part of retail-led mixed-use assets. We have made a strong statement with our foray into the residential segment, by upholding our core philosophy of high design, attention to detail and ensuring a world-class experience for every customer. The highest standards are applied towards ensuring well-planned products, quality construction and timely delivery. We intend to elevate our customer’s experience to a whole new level.
                </p>
              </div>
              <Image
              alt="Vercel logo"
              src='/vercel.png'
               width={1000}
               height={1000}
               className=" w-full h-full"
               />
            </div>
          </div>
        </section>

      </>
    );
  };
  
  export default FeatureSections;