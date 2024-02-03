import Image from "next/image";
import Link from "next/link";

const FeatureSections = () => {
    return (
      <>
          <section>
            <div className="mx-auto px-6 py-6 sm:py-20 ">
              <div className=" mx-8 flex flex-row max-w-2px">
                <div
                  className="m-auto lg:col-span-2 lg:order-last"  
                >
                  
                  <p className=" text-lg text-gray-600 max-w-36px  px-9 ">
                    <p>The Phoenix Mills Ltd, is over a 100 year old company with over 17.5 mn sq ft Hospitality, Commercial and Residential assets spread over 100+ acres</p>
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