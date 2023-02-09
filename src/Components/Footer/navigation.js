import { useEffect, useRef, useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react' 

export default function Navigation() {
    const [isVisible, setIsVisibile] = useState(false);
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)

    const openModal = () => {
        setOpen(true);
    }

    const closeModal = () => {
        setOpen(false);
    }

    const toggleVisibility = () => {
        if (window.pageYOffset > 1000) {
            setIsVisibile(true);
        } else {
            setIsVisibile(false);
        }
    };

    //Set the cordinates to 0 and make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        
    }, []);

    return (
            <div className="">
                <div className="flex grid-cols-3 mr-4 pt-3 pl-2">
                    <div className="container col-span-2 flex mb-10 pl-1">
                        <p className="text-gray-50 font-light text-lg">
                            <button
                                type="button"
                                className="mx-1 border border-gray-400 rounded-full px-3 py-0.5"
                            >
                                <p className="text-sm text-gray-400">Careers</p>                         
                            </button>                            
                            <button
                                type="button"
                                className="mx-1 border border-gray-400 rounded-full px-3 py-0.5"
                            >
                                <p className="text-sm text-gray-400">Contact</p>                         
                            </button>                           
                            <button
                                type="button"
                                className="border border-gray-400 rounded-full px-3 py-0.5"
                            >
                                <p className="text-sm text-gray-400" onClick= {() => {
                            openModal();
                        }}>About</p>                         
                            </button>                           
                            <button
                                type="button"
                                className="border border-gray-400 rounded-full px-3 py-0.5"
                            >
                                <p className="text-sm text-gray-400">Blog</p>                         
                            </button>
                            <br />
                        </p>
                        
                    </div>
                    <div className="mr-0">
                        <p className="column text-gray-300 opacity-75 flex text-lg font-thin justify-end pr-3 ">
                        <button 
                        className="border border-white rounded-full py-1 px-1 cursor-default"
                        pointer="none"
                        type="button"
                        onClick={() => {
                            scrollToTop();
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform rotate-270" fill="none" viewBox="0 0 24 24" stroke="white">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                        </p>
                    </div>   
                </div>
                <div className="ml-5 mt-20 pb-10">
                    <div className="w-4/5 pl-8">
                        <p className="text-white text-xs tracking-wider font-mono ">
                            Subscribe to Our Newsletter
                            <br />
                            <span className="text-gray-300 opacity-70">
                                By signing up, you agree to our  
                                <span className="underline ml-2">
                                    Terms
                                </span> and 
                                <br />
                                <span className="underline">
                                    Privacy Policy.
                                </span>
                            </span>
                        </p>
                    </div>
                    <div className="grid grid-cols-10 rounded-full h-10 border  border-white mt-8 mr-10 pt-1">
                        <input
                            className="col-span-9 w-full h-8 bg-transparent text-white font-semibold focus:outline-none focus:ring-none focus:border-transparent active-bg-transparent pl-5 pb-1"
                            placeholder="your@email.co"
                            
                        />
                        <button
                            type="button"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="col-span-1 h-6 w-4 flex justify-end transform rotate-45" fill="#9CA3AF" viewBox="0 0 20 24" stroke="#9CA3AF">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                        </button>
                    </div>
                </div>
                <>
                {openModal ? (
                        <Transition.Root show={open} as={Fragment}>
                            <Dialog as="div" className="fixed z-10 inset-0 bg-gray-500 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
                            <div className="w-full flex justify-end items-end pt-8 pr-6">
                                <button
                                    type="button" 
                                    className="justify-end bg-black bg-opacity-20 rounded-full text-white text-xs tracking-wider px-5 py-2"
                                    onClick= {() => {
                                        closeModal();
                                    }}
                                    >
                                    Close
                                </button>
                            </div>
                            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0 transition-opacity" />
                            </Transition.Child>
                            <span class="candy hidden w-5/5 rounded-lg sm:inline-block sm:align-middle mx-64 mt-12 py-5" aria-hidden="true">
                                <p className="text-gray-900 text-sm text-center px-24">
                                    Addin Flux
                                    <br />
                                    254 Fox Street , The Onyx
                                    <br />
                                    City and Suburban
                                    , 
                                    Johannesburg 2001
                                    <br />
                                    South Africa
                                    <br />
                                    <br />
                                    Addin Flux is a Software/Branding Agency founded by Tiisetso Dinoko. 
                                    Through imagination, image, research, experiment and experience we help
                                    your brand reach a wider audience in the ever accommodating and transforming
                                    digital world. 
                                </p>
                                
                                <div class="slider px-24">
                                    <div class="slide-track">
                                        <div class="slide">
                                            <img src={`/images/yd.png`} style={{width:"8rem", height:"7rem"}} alt="" />
                                        </div>
                                        <div class="slide">
                                            <img src={`/images/iz.png`} style={{width:"10rem", height:"4rem"}} alt="" />
                                        </div>
                                        <div class="slide">
                                            <img src={`/images/yd.png`} style={{width:"8rem", height:"7rem"}} alt="" />
                                        </div>
                                        <div class="slide">
                                            <img src={`/images/yd.png`} style={{width:"8rem", height:"7rem"}} alt="" />
                                        </div>
                                        <div class="slide">
                                            <img src={`/images/yd.png`} style={{width:"8rem", height:"7rem"}} alt="" />
                                        </div>
                                        <div class="slide">
                                            <img src={`/images/yd.png`} style={{width:"8rem", height:"7rem"}} alt="" />
                                        </div>
                                        <div class="slide">
                                            <img src={`/images/yd.png`} style={{width:"8rem", height:"7rem"}} alt="" />
                                        </div>
                                        <div class="slide">
                                            <img src={`/images/yd.png`} style={{width:"8rem", height:"7rem"}} alt="" />
                                        </div>
                                        <div class="slide">
                                            <img src={`/images/yd.png`} style={{width:"8rem", height:"7rem"}} alt="" />
                                        </div>
                                        <div class="slide">
                                            <img src={`/images/yd.png`} style={{width:"8rem", height:"7rem"}} alt="" />
                                        </div>
                                        <div class="slide">
                                            <img src={`/images/yd.png`} style={{width:"8rem", height:"7rem"}} alt="" />
                                        </div>
                                        <div class="slide">
                                            <img src={`/images/yd.png`} style={{width:"8rem", height:"7rem"}} alt="" />
                                        </div>
                                        <div class="slide">
                                            <img src={`/images/yd.png`} style={{width:"8rem", height:"7rem"}} alt="" />
                                        </div>
                                        <div class="slide">
                                            <img src={`/images/yd.png`} style={{width:"8rem", height:"7rem"}} alt="" />
                                        </div>
                                    </div>

                                    <p className="text-gray-900 text-sm text-center px-24">
                                    Addin Flux
                                    <br />
                                    254 Fox Street , The Onyx
                                    <br />
                                    City and Suburban
                                    , 
                                    Johannesburg 2001
                                    <br />
                                    South Africa
                                    </p>
                                </div>
                            </span>
                            </div>
                            </Dialog>
                        </Transition.Root>
                    ) : null 
                }
            </>
            </div>    
        )
    }