import { useRef, useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react' 

export default function Header() {
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)
    const [nav, setNav] = useState(true)
    const [list, setList] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

    const handleSubList = () => {
        setList(!list)
    }

    const openModal = () => {
        setOpen(true);
    }

    const closeModal = () => {
        setOpen(false);
    }

    return (
        <>
            <div className="sticky top-0 z-50 w-full grid grid-cols-5 m-3 pr-8  py-5" >
                <div className="space-x-4 col-span-4">    
                    <button 
                        className="rounded-full border border-border opacity-90 py-2 px-6 "
                        type="button"
                        onClick= {() => {
                            openModal();
                        }}
                    >
                        <p className="text-stone text-sm tracking-wide">Addin Flux</p>
                    </button>
                    <button className="border border-border rounded-full opacity-90 py-2 px-6 ">
                        <p className="text-stone text-sm tracking-wide">Index</p>
                    </button>
                </div>
                <div className="flex justify-end space-x-4 col-span-1 cursor-default">
                    <p className="tracking-wide pt-2
                    text-stone text-sm">
                        Contact
                    </p>
                    <button 
                    type="button"
                    onClick={() => {
                        window.open("https://forms.zohopublic.com/addinflux/form/Contact/formperma/XgCNY3Ki5RfG2XxtLETuT2gGIP_spFTEhu2Pfl6D04g", "_blank")
                    }}
                        className="border border-border rounded-full py-2 px-2 cursor-default"
                        pointer="none"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#525252">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
    
        </>
    
    )
} 
