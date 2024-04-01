import Image from "next/image";
import Link from 'next/link';
import TopLogoAmero from "./components/TopLogoAmero";
import { Merriweather} from "next/font/google";
const merriweather = Merriweather({ subsets: ["latin"], weight: ['400','700'] });

export default function AmeroHome() {
  return (
    <main className="flex fixed h-full w-full bg-amero overflow-auto flex-col items-center pt-2 pb-5 px-5 lg:pt-12 lg:px-20">
      <TopLogoAmero></TopLogoAmero>
      <h1 className={`text-center text-xl font-bold mt-[-.7rem] lg:mt-0 lg:text-7xl lg:mb-5 ${merriweather.className}`}>AI PHOTOBOOTH</h1>
      <div className="relative w-full flex justify-center items-center mt-5 mb-6 lg:mt-20 lg:mb-14">
        <div className='animate-upDown relative w-1/3 mx-auto flex justify-center items-center pointer-events-none'>
          <Image src='/amero/preview-1.png' width={268} height={646} alt='Zirolu' className='w-full' priority />
        </div>
        <div className='animate-upDown2 relative w-1/3 mx-auto flex justify-center items-center pointer-events-none'>
          <Image src='/amero/preview-2.png' width={268} height={646} alt='Zirolu' className='w-full' priority />
        </div>
        <div className='animate-upDown3 relative w-1/3 mx-auto flex justify-center items-center pointer-events-none'>
          <Image src='/amero/preview-3.png' width={268} height={646} alt='Zirolu' className='w-full' priority />
        </div>
      </div>
      <div className="relative w-full flex justify-center items-center lg:mt-20">
        <Link href='/register' className="relative mx-auto flex w-[70%] justify-center items-center">
          <Image src='/kai/btn-taptostart.png' width={410} height={96} alt='Zirolu' className='w-full' priority />
        </Link>
        {/* <Link href='/amero/how' className="relative mx-auto flex w-[70%] justify-center items-center">
          <Image src='/amero/btn-taptostart.png' width={410} height={96} alt='Zirolu' className='w-full' priority />
        </Link> */}
      </div>
    </main>
  );
}
