
export default function Pallets() {
    return (
        <div className="bg-transparent w-full h-auto space-y-10 mt-2 mb-10 pl-0  pb-16">
            <div className=" mx-12">
                <div className=" w-5/5">
                    <p className="flex justify-start w-5/5 font-sans 
                        text-black text-xl leading-none font-bold tracking-wider uppercase
                        ml-0 mr-0 pl-0 pt-14">
                        <span className="border-t-2 border-black pt-3">Cases</span>
                    </p>
                </div>
            </div>
            <div className="w-full grid grid-cols-8"> 
                <div className="col-span-1"></div>         
                <div className="col-span-3 mr-16 pl-0">
                    
                    <div className="flex bg-green-50  h-auto ml-0 mb-2">
                        <img
                            className="mx-24 my-auto"
                            src={`/images/android.png`}
                            style={{width:"10rem", height:"10rem"}} 
                        />
                        <button 
                            className="border border-black rounded-full mt-80 mb-16 mx-16 py-2 px-2 cursor-default"
                            pointer="none"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#4B5563">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                    <div className="">
                        <p className="font-bold text-xl text-black tracking-wide">
                            Izinto
                        </p>
                        <p className="font-normal text-gray-400 flex leading-snug text-base">
                            Wordpress, Ecommerce, Branding 
                        </p>
                    </div>
                </div>
                
                <div className="col-span-4 pl-0">
                    <div className="col-span-1 ml-0 mr-48 pt-0">
                        <p className="text-black text-xl leading-none font-bold">
                            We strive to build the best                     
                        </p>
                        <p className="font-normal text-gray-900 leading-relaxed text-lg mt-4 ">
                            Insightful strategy, meaningful UX, and design- inspired development. We
                            build products with purpose and experiences with feeling. 
                        </p>
                    </div>
                    <div className="w-3/5 bg-gradient-to-b from-indigo-300 via-purple-200 to-purple-100 mt-6 ml-28 mb-2 pb-2">
                        <img
                            className="mx-auto my-auto"
                            src={`/images/smallwork.png`}
                            style={{width:"24rem", height:"24rem"}} 
                        />
                        {/* <button 
                            className="border border-black rounded-full mt-0 mb-16 mx-16 py-2 px-2 cursor-default"
                            pointer="none"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#4B5563">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button> */}
                    </div>
                    <div className="ml-28">
                        <p className="font-bold text-xl text-black tracking-wide">
                            Razum
                        </p>
                        <p className="font-normal text-gray-400 flex leading-snug text-base ">
                            Web App, API
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}