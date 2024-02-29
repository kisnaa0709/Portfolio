'use client'
import { useState } from "react";
import './navbarMenu.css'
import Link from "next/link";
import { 
  BusinessCenterOutlined, 
  CurrencyRupee, 
  EmailOutlined, 
  HandshakeOutlined, 
  HomeOutlined, 
  PersonOutline 
} from "@mui/icons-material";

export default function NavbarMenu() {

  const [on, setOnState] = useState(false);
  const toggle = () => setOnState(!on);

  return (
    <main className={`${on ? 'fixed secondryBG bg-opacity-5 w-screen h-screen top-0 right-0' : 'w-[50px] h-[50px] rounded-full relative landscape:m-5 portrait:m-2.5'} z-30`} onClick={toggle}>
      <div className={`absolute landscape:top-0 rounded-xl portrait:top-0 landscape:right-0 portrait:right-0 `}>
        <div className={`toggle secondryBG z-30 ${on && 'active top-5 right-5 portrait:top-2.5 portrait:right-2.5'} `}>
          <span className="themeBG"></span>
          <span className="themeBG"></span>
          <span className="themeBG"></span>
        </div>
      </div>   
      <div className={`${ on ? 'right-0': 'right-[-300px] top-0' } transitionGrow fixed primaryBG overflow-hidden gap-4 w-[300px] h-screen flex flex-col justify-center primaryText px-12 pb-20 `}>
        
        <Link href={'#'} className="text-[1.3rem] leading-relaxed hoverSecondryText hover:pl-4 hover:font-normal flex items-center transitionGrow"><HomeOutlined className="mb-1 mr-2"/> Home</Link>

        <Link href={'#'} className="text-[1.3rem] leading-relaxed hoverSecondryText hover:pl-4 hover:font-normal flex items-center transitionGrow"><PersonOutline className="mb-1 mr-2"/> About</Link>

        <Link href={'#'} className="text-[1.3rem] leading-relaxed hoverSecondryText hover:pl-4 hover:font-normal flex items-center transitionGrow"><BusinessCenterOutlined className="mb-1 mr-2"/> Portfolio</Link>

        <Link href={'#'} className="text-[1.3rem] leading-relaxed hoverSecondryText hover:pl-4 hover:font-normal flex items-center transitionGrow"><HandshakeOutlined className="mb-1 mr-2"/> Clients</Link>

        <Link href={'#'} className="text-[1.3rem] leading-relaxed hoverSecondryText hover:pl-4 hover:font-normal flex items-center transitionGrow"><CurrencyRupee className="mb-1 mr-2"/> Pricing</Link>

        <Link href={'#'} className="text-[1.3rem] leading-relaxed hoverSecondryText hover:pl-4 hover:font-normal flex items-center transitionGrow"><EmailOutlined className="mb-1 mr-2"/> Contact</Link>
        
      </div>
    </main>
  );
}
