import { ReactComponent as Instagram } from "../../images/instagram.svg"
import { ReactComponent as Twitter } from "../../images/twitter.svg"
import { ReactComponent as Dribble } from "../../images/dribble.svg"
import { ReactComponent as LinkedIn } from "../../images/linkedin.svg"

export default function Socials() {
    return (
            <div className="container pl-3 pt-3 pt-0 mt-0 w-auto flex">
                <p className="text-gray-50 font-light text-lg">
                    <button
                    type="button"
                    className="my-3"
                    onClick={() => {
                        window.open("www.instagram.com", "_blank")
                    }}
                    >
                        <Instagram style={{width:"1.2rem", height:"auto"}}/>                                               
                    </button>                    
                    <br />
                    <button
                    type="button"
                    className="my-3"
                    onClick={() => {
                        window.open("www.twitter.com", "_blank")
                    }}
                    >
                        <Twitter style={{width:"1.2rem", height:"auto"}}/>                        
                    </button>
                    <br />
                    <button
                    type="button"
                    className="my-3"
                    onClick={() => {
                        window.open("www.linkedin.com", "_blank")
                    }}
                    >
                        <LinkedIn style={{width:"1.2rem", height:"auto"}}/>                        
                    </button>
                    <br />
                    <button
                    type="button"
                    className="my-3"
                    onClick={() => {
                        window.open("www.dribble.com", "_blank")
                    }}
                    >
                        <Dribble style={{width:"1.2rem", height:"auto"}}/>                        
                    </button>
                </p>
                
            </div>
        )
    }