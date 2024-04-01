'use client';

import Image from "next/image";
import { setCookie } from 'cookies-next';
import { useState } from 'react';
import TopLogoAmero from "../components/TopLogoAmero";
import BtnHexagonAmero from "../components/BtnHexagonAmero";
import { useRouter } from 'next/navigation';

import { Merriweather} from "next/font/google";
const merriweather = Merriweather({ subsets: ["latin"], weight: ['400','700'] });

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
        <main className="flex fixed h-full w-full bg-amero overflow-auto flex-col items-center pt-2 pb-5 px-5 lg:pt-12 lg:px-20">
            <TopLogoAmero></TopLogoAmero>
            <h1 className={`text-center text-xl font-bold mt-[-.7rem] lg:mt-0 lg:text-5xl lg:mb-5 ${merriweather.className}`}>REGISTRATION</h1>
            <div className="relative w-full flex flex-col justify-center items-center mt-12 mb-14">
                <div className='relative w-[80%] mb-14 lg:mb-20'>
                    <label htmlFor="name" className={`text-light font-bold text-2xl lg:text-5xl mb-4 lg:mb-8 block ${merriweather.className}`}>Full Name</label>
                    <div className='relative w-full'>
                        <Image
                            src='/amero/icon-user.png'
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
                            className={`w-full rounded-lg font-semibold text-2xl lg:text-5xl outline-none py-6 lg:py-8 pr-3 pl-14 lg:pl-24 text-black bg-light ${merriweather.className}`}
                            placeholder='Your Name'
                            onChange={handleChange}
                        />
                    </div>
                    {/* {payload.name} */}
                    {/* {errorMsg && <p className='text-[#E00A0A] text-xs'>{errorMsg}</p>} */}
                </div>
                <div className='relative w-[80%] mb-14'>
                    <label htmlFor="name" className={`text-light font-bold text-2xl lg:text-5xl mb-4 lg:mb-8 block ${merriweather.className}`}>Phone Number</label>
                    <div className='relative w-full'>
                        <Image
                            src='/amero/icon-call.png'
                            width={32}
                            height={32}
                            className='absolute left-4 top-1/2 -translate-y-1/2 lg:w-[55px]'
                            alt='icon'
                        />
                        <p className={`absolute left-[3.5rem] lg:left-[5rem] top-1/2 font-bold text-2xl lg:text-5xl text-black -translate-y-1/2 ${merriweather.className}`}>+62</p>
                        <input
                            type='number'
                            value={payload.phone}
                            id='phone'
                            name='phone'
                            className={`w-full rounded-lg font-semibold text-2xl lg:text-5xl outline-none py-6 lg:py-8 pr-3 pl-32 lg:pl-48 text-black bg-light ${merriweather.className}`}
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
