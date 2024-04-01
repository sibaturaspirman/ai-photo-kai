'use client';

import Image from "next/image";
import { setCookie } from 'cookies-next';
import { useState } from 'react';
import TopLogoAmero from "../components/TopLogoAmero";
import BtnHexagonAmero from "../components/BtnHexagonAmero";
import { useRouter } from 'next/navigation';

import { Poppins} from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ['400','700', '900'] });

export default function Register() {
    const router = useRouter();
    const [payload, setPayload] = useState({
      name: '',
      phone: '',
    });

    const isValid = () => {
      if (payload.name && payload.phone) return true
      else return false;
    };

    const handleChange = (e) => {
        const { value, name } = e.target;
        setPayload((prev) => ({
          ...prev,
          [name]: value,
        }));
    };

    const handleSubmit = () => {
        setCookie('name', payload.name);
        setCookie('phone', payload.phone);
        setTimeout(() => {
            router.push('/how');
        }, 250);
    }
    return (
        <main className="flex fixed h-full w-full bg-kai overflow-auto flex-col items-center pt-16 pb-5 px-5 lg:pt-12 lg:px-20">
            <TopLogoAmero></TopLogoAmero>
            <h1 className={`text-center text-3xl font-bold mt-2 lg:mt-0 lg:text-5xl mb-5 lg:mb-5 ${poppins.className}`}>REGISTRATION</h1>
            <div className="relative w-full flex flex-col justify-center items-center mt-6 mb-6">
                <div className='relative w-[80%] mb-14 lg:mb-20'>
                    <label htmlFor="name" className={`text-light font-bold text-2xl lg:text-5xl mb-4 lg:mb-8 block ${poppins.className}`}>Full Name</label>
                    <div className='relative w-full'>
                        <Image
                            src='/kai/icon-user.png'
                            width={32}
                            height={32}
                            className='absolute left-4 top-1/2 -translate-y-1/2 lg:w-[55px]'
                            alt='icon'
                        />
                        <input
                            type='text'
                            value={payload.name}
                            id='name'
                            name='name'
                            className={`w-full rounded-lg font-semibold text-2xl lg:text-5xl outline-none py-6 lg:py-8 pr-3 pl-14 lg:pl-24 text-black bg-light ${poppins.className}`}
                            placeholder='Your Name'
                            onChange={handleChange}
                        />
                    </div>
                    {/* {payload.name} */}
                    {/* {errorMsg && <p className='text-[#E00A0A] text-xs'>{errorMsg}</p>} */}
                </div>
                <div className='relative w-[80%] mb-10'>
                    <label htmlFor="name" className={`text-light font-bold text-2xl lg:text-5xl mb-4 lg:mb-8 block ${poppins.className}`}>Phone Number</label>
                    <div className='relative w-full'>
                        <Image
                            src='/kai/icon-call.png'
                            width={32}
                            height={32}
                            className='absolute left-4 top-1/2 -translate-y-1/2 lg:w-[55px]'
                            alt='icon'
                        />
                        <p className={`absolute left-[3.5rem] lg:left-[5rem] top-1/2 font-bold text-2xl lg:text-5xl text-black -translate-y-1/2 ${poppins.className}`}>+62</p>
                        <input
                            type='number'
                            value={payload.phone}
                            id='phone'
                            name='phone'
                            className={`w-full rounded-lg font-semibold text-2xl lg:text-5xl outline-none py-6 lg:py-8 pr-3 pl-32 lg:pl-48 text-black bg-light ${poppins.className}`}
                            placeholder='Your number'
                            onChange={handleChange}
                        />
                    </div>
                    {/* {payload.phone} */}
                    {/* {errorMsg && <p className='text-[#E00A0A] text-xs'>{errorMsg}</p>} */}
                </div>
            </div>
            <div className="relative w-[60%] flex justify-center items-center">
                <BtnHexagonAmero
                    disabled={!isValid()}
                    onClick={handleSubmit}
                />
            </div>
        </main>
    );
}
