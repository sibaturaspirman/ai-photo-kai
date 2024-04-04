'use client';

import Image from "next/image";
// import Link from 'next/link';
import { setCookie } from 'cookies-next';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import TopLogoAmeroBig from "./components/TopLogoAmeroBig";
import { Poppins} from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ['400','700', '900'] });

export default function AmeroHome() {
  const router = useRouter();
  const [stasiun, setStasiun] = useState(null);

  const handleSubmit = () => {
    setCookie('stasiun', stasiun);
    setTimeout(() => {
        router.push('/home');
    }, 250);
}

  return (
    <main className="flex fixed h-full w-full bg-kai overflow-auto flex-col items-center pt-16 pb-5 px-5 lg:pt-12 lg:px-20">
      <TopLogoAmeroBig></TopLogoAmeroBig>
      <h1 className={`text-center text-4xl font-bold mt-3 mb-0 lg:mt-0 lg:text-7xl lg:mb-5 ${poppins.className}`}>AI PHOTOBOOTH</h1>
      <div className="relative w-[90%] mt-5 mb-10 lg:mt-20 lg:mb-14">
        <div className='relative w-full hiddenx'>
            <label htmlFor="choose_stasiun" className={`block mb-5 lg:mb-5 text-2xl lg:text-5xl text-center font-bold text-white ${poppins.className}`}>Pilih Lokasi Stasiun</label>
            <div>
                <ul className='choose2-amero'>
                    <li>
                        <input
                        id='choose_stasiun1'
                        type="radio"
                        name='choose_stasiun'
                        value="Gambir"
                        onChange={(e) => setStasiun(e.target.value)}
                        />
                        <label htmlFor="choose_stasiun1" className='text-2xl lg:h-[140px] lg:text-4xl'>Gambir</label>
                    </li>
                    <li>
                        <input
                        id='choose_stasiun2'
                        type="radio"
                        name='choose_stasiun'
                        value="Bandung"
                        onChange={(e) => setStasiun(e.target.value)}
                        />
                        <label htmlFor="choose_stasiun2" className='text-2xl lg:h-[140px] lg:text-4xl'>Bandung</label>
                    </li>
                    <li>
                        <input
                        id='choose_stasiun3'
                        type="radio"
                        name='choose_stasiun'
                        value="Yogyakarta"
                        onChange={(e) => setStasiun(e.target.value)}
                        />
                        <label htmlFor="choose_stasiun3" className='text-2xl lg:h-[140px] lg:text-4xl'>Yogyakarta</label>
                    </li>
                    <li>
                        <input
                        id='choose_stasiun4'
                        type="radio"
                        name='choose_stasiun'
                        value="Surabaya"
                        onChange={(e) => setStasiun(e.target.value)}
                        />
                        <label htmlFor="choose_stasiun4" className='text-2xl lg:h-[140px] lg:text-4xl'>Surabaya</label>
                    </li>
                </ul>
            </div>
        </div>
      </div>
      {stasiun &&
      <div className="relative w-full flex justify-center items-center lg:mt-20">
        <div className="relative mx-auto flex w-[50%] justify-center items-center" onClick={handleSubmit}>
          <Image src='/kai/btn-taptostart.png' width={410} height={96} alt='Zirolu' className='w-full' priority />
        </div>
      </div>}
      <div className='relative w-full mt-8 mb-10'>
            <Image src='/kai/list-style-new-1.png' width={1840} height={198} alt='Zirolu' className='w-full' priority />
            <Image src='/kai/list-style-new-2.png' width={1840} height={198} alt='Zirolu' className='w-full mt-5' priority />
        </div>
    </main>
  );
}
