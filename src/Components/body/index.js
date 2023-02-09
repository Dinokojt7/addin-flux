import Introduction from "./intro";
import Pallets from "./start";
import Technology from "./two";

export default function Body() {
    return (
        <div className="">
            <div className="grid grid-cols-9 mx-2   w-full opacity-90">
               
                <div className="col-span-9 mr-4">                
                    <Introduction />
                </div>
            </div>
        </div>
    )
}