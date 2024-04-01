'use client';

import Link from 'next/link';
import Image from "next/image";
import TopLogoAmero from "../components/TopLogoAmero";
import { Merriweather} from "next/font/google";
const merriweather = Merriweather({ subsets: ["latin"], weight: ['400','700'] });
export default function How() {
    return (
        <main className="flex fixed h-full w-full bg-amero overflow-auto flex-col items-center pt-2 pb-5 px-5 lg:pt-12 lg:px-20">
            <TopLogoAmero></TopLogoAmero>
            <h1 className={`text-center text-xl font-bold mt-[-.7rem] lg:mt-0 lg:text-5xl mb-5 lg:mb-8 ${merriweather.className}`}>HOW TO</h1>
            <div className="relative w-full flex flex-col justify-center items-center mt-3 mb-3">
                <div className='relative w-[70%] mb-8 lg:mb-12'>
                    <Image src='/amero/how-to.png' width={550} height={651} alt='Zirolu' className='w-full' priority />
                </div>
            </div>

            <div className="relative w-full flex justify-center items-center">
                <Link href='/cam' className="relative mx-auto flex w-[60%] justify-center items-center">
                    <Image src='/amero/btn-next.png' width={410} height={96} alt='Zirolu' className='w-full' priority />
                </Link>
            </div>
        </main>
    );
}
