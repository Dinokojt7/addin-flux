import Logo from '../../images/logo.png';

export default function Identity() {
    return (
        <div className="pt-4 pr-2 pb-2 pl-8 ">
            <div className="container w-full h-auto flex">
                <img src={Logo} alt='/' style={{width:"20rem"}} />
            </div>
            <div className="pt-10 pb-5 pr-40">
                <p className="text-white opacity-90 text-xs tracking-wider font-mono ">
                    254 Fox Street,
                    City and Suburban, Johannesburg 2001
                    <br />
                    <br />
                    Copyright 2023 <br />Addin Flux Pty Ltd.                    
                    <br />
                    <br />
                    Terms Privacy Policy
                </p>
            </div>
        </div>
    )
}