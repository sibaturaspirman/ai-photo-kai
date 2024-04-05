'use client';

import Link from 'next/link';
import Image from "next/image";
import TopLogoAmero from "../components/TopLogoAmero";
import { getCookie } from 'cookies-next';
import React,{ useEffect, useState, useRef } from 'react';
import { useQRCode } from 'next-qrcode';
// import io from 'socket.io-client';
import { Poppins} from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ['400','700', '900'] });
import BtnHexagon2 from "../components/BtnHexagon2";
import ReactToPrint from "react-to-print";


// function downloadImage(data, filename = 'untitled.jpeg') {
//     var a = document.createElement('a');
//     a.href = data;
//     a.download = filename;
//     document.body.appendChild(a);
//     a.click();
// }

// SETUP SOCKET
// let SERVER_IP = "https://ag.socket.web.id:11100";
// let NETWORK = null;

// function emitNetworkConnection() {
//    NETWORK = io(SERVER_IP, {
//       withCredentials: false,
//       transoirtOptions: {
//          pooling: {
//             extraHeaders: {
//                "my-custom-header": "ag-socket",
//             },
//          },
//       },
//    });
// }

// function emitString(key, payload) {
//    NETWORK.emit(key, payload);
// }
// !SETUP SOCKET


export default function Result() {
    const [imageResultAI, setImageResultAI] = useState(null);
    const [generateQR, setGenerateQR] = useState(null);
    const [linkQR, setLinkQR] = useState('https://zirolu.id/');
    const [idFormEmail, setIdFormEmail] = useState(null);
    const [sendEmailGak, setSendEmailGak] = useState(null);
    const [alamatEmail, setAlamatEmail] = useState();
    const [keKirimEmailGak, setKeKirimEmailGak] = useState(null);
    const [loadingDownload, setLoadingDownload] = useState(null);
    const [showEmail, setShowEmail] = useState(null);

    let componentRef = useRef();

    const [payload, setPayload] = useState({
      name: getCookie('name'),
      phone: getCookie('phone'),
      stasiun: getCookie('stasiun'),
    });
    // const [payload, setPayload] = useState({
    //     name: 'AI ZIROLU DEMO',
    //     phone: '00000',
    //   });
    const { Canvas } = useQRCode();

    // emitNetworkConnection()

    useEffect(() => {
        // Perform localStorage action
        if (typeof localStorage !== 'undefined') {
            const item = localStorage.getItem('resulAIBase64')
            const item2 = localStorage.getItem('faceURLResult')
            setImageResultAI(item)
            setLinkQR(item2)
        }
        // const item2 = getCookie('phone')
        // const item3 = getCookie('name')
        // setPayload(() => ({
        //     name: item2,
        //     phone: item3,
        //   }));
    }, [imageResultAI, linkQR])

    const downloadImageAI = async () => {
        // import('html2canvas').then(html2canvas => {
        //     html2canvas.default(document.querySelector("#capture"), {scale:1}).then(canvas => 
        //     //   document.getElementById('canvasResult2').appendChild(canvas)
        //         uploadImage(canvas)
        //     )
        // }).catch(e => {console("load failed")})
        // setLoadingDownload('≈')
        // setGenerateQR('true')
        // setLoadingDownload(null)

        // uploadImage()


        // let bodyFormData = new FormData();
        // bodyFormData.append("name", payload.name);
        // bodyFormData.append("phone", payload.phone);
        // bodyFormData.append("image", linkQR);
        // let bodyFormData = {"name":payload.name, "phone":payload.phone,"image":linkQR}
        // console.log(bodyFormData)
      
        const options = {
            method: 'POST',
            body: JSON.stringify({
                name:payload.name,
                phone:payload.phone,
                image:linkQR,
                location:payload.stasiun
            }),
            headers: {
                'Authorization': 'de2e0cc3-65da-48a4-8473-484f29386d61:xZC8Zo4DAWR5Yh6Lrq4QE3aaRYJl9lss',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        
        await fetch('https://photo-ai-iims.zirolu.id/v1/kai', options)
            // .then(response => response.json())
            .then(response => {
                // console.log(response)
                // setLinkQR(response.file)
                // setIdFormEmail(response.id)
                // emitString("sendImage", response.file);
                // response.json()
                setGenerateQR('true')
                setLoadingDownload(null)
                // setImageResultAI()
                // if (typeof localStorage !== 'undefined') {
                //     localStorage.setItem("idSendEmail", )
                // }
            })
            .catch(err => {
                if (typeof localStorage !== 'undefined') {
                    const item = localStorage.getItem('faceURLResult')
                    // emitString("sendImage", item);
                    setShowEmail('true')
                    setLinkQR(item)
                    // setIdFormEmail(response.id)
                    setGenerateQR('true')
                    setLoadingDownload(null)
                }
            });
    }

    // const downloadPrint = () => {
    //     downloadImageAI()
    //     useReactToPrint({
    //         content: () => componentRef.current,
    //       }
    // }
    const uploadImage = async () => {
        // downloadImage(canvas.toDataURL("image/jpeg", 1.0), 'my-canvas.jpeg')
        // console.log(payload)
        // bodyFormData.append("file", '');
        setLoadingDownload('≈')
        let bodyFormData = {"name":payload.name, "phone":payload.phone,"image":linkQR}
        console.log(bodyFormData)
      
        const options = {
            method: 'POST',
            body: JSON.stringify({
                "name":payload.name,
                "phone":payload.phone,
                "image":linkQR
            }),
            headers: {
                'Authorization': 'de2e0cc3-65da-48a4-8473-484f29386d61:xZC8Zo4DAWR5Yh6Lrq4QE3aaRYJl9lss',
                'Accept': 'application/json',
            }
        };
        
        await fetch('https://photo-ai-iims.zirolu.id/v1/amero', options)
            // .then(response => response.json())
            .then(response => {
                // console.log(response)
                // setLinkQR(response.file)
                // setIdFormEmail(response.id)
                // emitString("sendImage", response.file);
                response.json()
                setGenerateQR('true')
                setLoadingDownload(null)
                // setImageResultAI()
                // if (typeof localStorage !== 'undefined') {
                //     localStorage.setItem("idSendEmail", )
                // }
            })
            .catch(err => {
                if (typeof localStorage !== 'undefined') {
                    const item = localStorage.getItem('faceURLResult')
                    // emitString("sendImage", item);
                    setShowEmail('true')
                    setLinkQR(item)
                    // setIdFormEmail(response.id)
                    setGenerateQR('true')
                    setLoadingDownload(null)
                }
            });

        // if (typeof localStorage !== 'undefined') {
        //     const item = localStorage.getItem('faceURLResult')
        //     // const item2 = localStorage.getItem('faceURLResult')
        //     // setImageResultAI(item)
        //     // setLinkQR(item2)
        //     emitString("sendImage", item);
        // }

        // canvas.toBlob(async function(blob) {
        //     let bodyFormData = new FormData();
        //     bodyFormData.append("name", payload.name);
        //     bodyFormData.append("phone", payload.phone);
        //     bodyFormData.append("image", linkQR);
          
        //     const options = {
        //         method: 'POST',
        //         body: bodyFormData,
        //         headers: {
        //             'Authorization': 'de2e0cc3-65da-48a4-8473-484f29386d61:xZC8Zo4DAWR5Yh6Lrq4QE3aaRYJl9lss',
        //             'Accept': 'application/json',
        //         }
        //     };
            
        //     await fetch('https://photo-ai-iims.zirolu.id/v1/demo', options)
        //         .then(response => response.json())
        //         .then(response => {
        //             // console.log(response)
        //             setLinkQR(response.file)
        //             setIdFormEmail(response.id)
        //             // emitString("sendImage", response.file);
        //             setGenerateQR('true')
        //             setLoadingDownload(null)
        //             // setImageResultAI()
        //             // if (typeof localStorage !== 'undefined') {
        //             //     localStorage.setItem("idSendEmail", )
        //             // }
        //         })
        //         .catch(err => {
        //             if (typeof localStorage !== 'undefined') {
        //                 const item = localStorage.getItem('faceURLResult')
        //                 // emitString("sendImage", item);
        //                 setShowEmail('true')
        //                 setLinkQR(item)
        //                 // setIdFormEmail(response.id)
        //                 setGenerateQR('true')
        //                 setLoadingDownload(null)
        //             }
        //         });
        // });
    }


    const handleChange = (e) => {
        setAlamatEmail(e.target.value)
    };
    const isValid = () => {
      if (alamatEmail) return true
      else return false;
    };

    const sendEmail = async () => {
        // SENT EMAIL
        // console.log(idFormEmail)
        const options = {
            method: 'POST',
            body: JSON.stringify({
                "email": alamatEmail,
                "id": idFormEmail
            }),
            headers: {
                'Authorization': 'de2e0cc3-65da-48a4-8473-484f29386d61:xZC8Zo4DAWR5Yh6Lrq4QE3aaRYJl9lss',
                'Content-Type': 'application/json',
            }
        };
          
        await fetch('https://photo-ai-iims.zirolu.id/v1/demo/email', options)
            .then(response => response.json())
            .then(response =>{
                // console.log(response)
                setKeKirimEmailGak('true')
                // if(response.status){
                //     setKeKirimEmailGak('true')
                // }
            })
            .catch(err => console.error(err));
    }

    return (
        <main className="flex fixed h-full w-full bg-kai overflow-auto flex-col items-center justify-top pt-2 pb-5 px-5 lg:pt-12 lg:px-20">
            {/* <TopLogoAmero></TopLogoAmero> */}
            {/* QR */}
            {sendEmailGak &&
                <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center mt-0 flex-col z-50 bg-black bg-opacity-90'>
                    <div className='relative w-[70%] mt-0 mx-auto flex justify-center items-cente'>
                        <Image src='/popup.png' width={939} height={605} alt='Zirolu' className='w-full' priority />
                        <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center flex-col'>
                            {keKirimEmailGak && 
                                <div className='relative w-[60%]' onClick={()=>{setKeKirimEmailGak(null);setSendEmailGak(null)}}>
                                    <Image
                                        src='/success.png'
                                        width={596}
                                        height={434}
                                        className='w-full'
                                        alt='icon'
                                    />
                                </div>
                            }
                            <div className={`relative w-[94%] mb-2 p-2 lg:w-[80%] lg:mb-5 ${keKirimEmailGak ? 'hidden' : ''}`}>
                                <label htmlFor="email" className="text-[#fff] font-bold text-sm lg:text-2xl mb-4 block">Input Your Email</label>
                                <div className='relative w-full'>
                                    <Image
                                        src='/icon-sms.png'
                                        width={32}
                                        height={32}
                                        className='absolute left-2 lg:left-4 top-1/2 -translate-y-1/2'
                                        alt='icon'
                                    />
                                    <input
                                        type='email'
                                        value={alamatEmail}
                                        id='email'
                                        name='email'
                                        className={`w-full border-2 border-[#fff] rounded-lg font-semibold text-sm lg:text-2xl outline-none py-2 lg:py-6 pr-3 pl-12 lg:pl-14 text-black bg-white'`}
                                        placeholder='Your Email'
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className={`relative w-[60%] flex justify-center items-center ${keKirimEmailGak ? 'hidden' : ''}`}>
                                <BtnHexagon2
                                    disabled={!isValid()}
                                    onClick={sendEmail}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            }
            {generateQR && 
                <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-top mt-24 lg:mt-64 flex-col z-40 bg-black bg-opacity-0'>
                    <h1 className={`text-center text-3xl font-bold mt-[-.7rem] lg:mt-0 lg:text-4xl lg:mb-5 ${poppins.className}`}>SCAN QR CODE</h1>
                    <div className='relative mt-3 w-[60%] mx-auto flex items-center justify-center canvas-qr' onClick={()=>{setGenerateQR(null)}}>
                        <Canvas
                        text={linkQR}
                        options={{
                            errorCorrectionLevel: 'M',
                            margin: 3,
                            scale: 4,
                            width: 500,
                            color: {
                            dark: '#000000',
                            light: '#ffffff',
                            },
                        }}
                        />
                    </div>
                    <p className={`text-center font-semibold text-2xl lg:text-4xl mt-10 ${poppins.className}`}>Scan this QR Code to Download your image.</p>

                    {/* <div className={`relative w-full  ${showEmail ? 'hidden' : ''}`}>
                    <div className="relative w-[60%] mx-auto flex justify-center items-center flex-col mt-5">
                        <button className="relative mx-auto flex justify-center items-center" onClick={()=>setSendEmailGak('true')}>
                            <Image src='/btn-send-email.png' width={410} height={96} alt='Zirolu' className='w-full' priority />
                        </button>
                        <a href={linkQR} target='_blank' className="relative mx-auto flex justify-center items-center">
                            <Image src='/btn-download-image.png' width={410} height={96} alt='Zirolu' className='w-full' priority />
                        </a>
                    </div>
                    </div> */}
                    {/* <Link href='/' className='text-center font-semibold text-lg mt-2 p-20' onClick={()=>{setGenerateQR(null)}}>Tap here to close</Link> */}
                    <a href='/home' className='text-center font-semibold text-4xl py-20 pb-36 p-40'>Tap here to close</a>
                </div>
            }
            {/* QR */}

            <div className={generateQR ? `opacity-0 pointer-events-none` : ''}>
                <h1 className={`text-center text-2xl font-bold mt-20 lg:mt-0 lg:text-5xl mb-2 lg:mb-5 ${poppins.className}`}>YOU LOOKS AMAZING!</h1>
                {imageResultAI && 
                <div className='relative w-[58%] mt-2 mx-auto flex justify-center items-center  border-2 border-[#ffffff] rounded-sm' onClick={downloadImageAI}>
                    <div className='relative' id='capture' ref={(el) => (componentRef = el)}>
                        {/* <img src={imageResultAI} className='block'></img> */}
                        <Image src={imageResultAI}  width={420} height={689} alt='Zirolu' className='relative block w-full'></Image> 
                    </div>
                    {/* <div id='canvasResult' className='absolute top-0 left-0 right-0 bottom-0 z-10'></div> */}
                </div>
                }
                {loadingDownload && 
                    <div className='relative mt-5 lg:mt-2 rounded-lg text-center border-2 border-[#ffffff] text-center bg-slate-500 text-[#fff] lg:font-bold p-2 lg:text-xl lg:font-bold w-[80%] lg:w-[50%] mx-auto'>
                        <p>Please wait, loading...</p>
                    </div>
                }
                <div className={`relative w-full ${loadingDownload ? 'hiddenx' : ''}`}>
                    {/* <div className={`relative w-[80%] mx-auto flex justify-center items-center flex-col mt-5 ${loadingDownload ? 'hidden' : ''}`}   >
                        <button className={`relative mx-auto flex justify-center items-center ${loadingDownload ? 'hidden' : ''}`} onClick={downloadImageAI}>
                            <Image src='/btn-download.png' width={410} height={96} alt='Zirolu' className='w-full' priority />
                        </button>
                        <button className="relative mx-auto flex justify-center items-center" onClick={sendEmail}>
                            <Image src='/btn-download.png' width={410} height={96} alt='Zirolu' className='w-full' priority />
                        </button>
                    </div> */}
                    {/* <div className='w-full'>
                        <div className="relative w-[80%] mx-auto flex justify-center items-center flex-col">
                            <Link href='/amero/generate' className="relative mx-auto flex justify-center items-center">
                                <Image src='/btn-retake.png' width={410} height={96} alt='Zirolu' className='w-full' priority />
                            </Link>
                        </div>
                    </div> */}

                    <div className={`w-full`} onClick={downloadImageAI}>
                        <div className={`w-full mt-5`}>
                            <div className="relative w-[50%] mx-auto flex justify-center items-center flex-col">
                                <div className="block w-full relative mx-auto flex justify-center items-center">
                                    <Image src='/kai/btn-download.png' width={480} height={96} alt='Zirolu' className='w-full' priority />
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <div className={`w-full mt-5`} onClick={downloadPrint}>
                        <div className="relative w-[60%] mx-auto flex justify-center items-center flex-col">
                            <div className="block w-full relative mx-auto flex justify-center items-center">
                                <Image src='/amero/btn-download-print.png' width={410} height={96} alt='Zirolu' className='w-full' priority />
                            </div>
                        </div>
                    </div> */}

                    <div className='w-full'>
                        <div className="relative w-[50%] mx-auto flex justify-center items-center flex-col">
                            <Link href='/generate' className="relative w-full mx-auto flex justify-center items-center">
                                <Image src='/btn-retake.png' width={410} height={96} alt='Zirolu' className='w-full' priority />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
