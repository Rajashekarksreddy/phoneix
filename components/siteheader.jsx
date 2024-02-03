import Image from "next/image";

export default function SiteHeader() {
  return (
     <Image
        alt="Vercel logo"
        src='/vercel.png'
        width={1000}
        height={1000}
        className=" w-full h-full"
      />
  );
}