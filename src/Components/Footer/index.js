import Identity from "./identity";
import Navigation from "./navigation";
import Socials from "./Socials";

export default function Footer() {
    return (
        <div className="grid grid-cols-5 w-full bg-stone opacity-90 divide-x divide-white">
            <div className="col-span-2">
                <Identity />
            </div>
            <div className="col-span-1">                
                <Socials />
            </div>
            <div className="col-span-2">
                <Navigation />
            </div>
        </div>
    )
}