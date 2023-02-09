import Typed from 'react-typed';

export default function Introduction() {
    return (

        
        <><div className="flex grid grid-cols-2">
        <div className="col-span-1 grid grid-rows-3">
            <div className="row-span-5"></div>
            <Typed className="text-orange pl-2 row-span-1 font-bold sentencecase text-xs mt-20 tracking-wider font-mono "
            strings={['Design', 'Branding', 'Software']}
            typeSpeed={120} backSpeed={150} loop />
        </div>    
        <p className="text-stone col-span-1 text-6xl pl-5">
        For feeling & function.
    </p>
    </div>
           
            <div className="border-solid border bg-gridbg border-border w-full space-y-60 ml-2 mt-2 mb-10 pl-6 pt-10 pb-16 h-auto">
                
                <p className="flex justify-end border-b border-black text-black text-2xl 
                    ml-8 mr-16 mb-10 pb-5">
                    Digital Product + Ecommerce Experiences
                </p>
            </div>
        </>
    )
}