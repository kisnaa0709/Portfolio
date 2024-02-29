'use client'
import { useState } from "react";
interface props {
  toggleSwitch: Function;
}
export default function ThemeModeButton({ toggleSwitch } : props) {

  const [on, setOnState] = useState(false);
  const toggle = () => {
    setOnState(!on);
    toggleSwitch(!on);
  }
  return (
    <div className="h-[50px] flex items-center landscape:m-5 m-2.5 top-0 left-0">
      <button className={`${!on ? 'border-white' : 'border-black shadow-slate-800'} secondryBG border w-16 h-8 relative rounded-3xl portrait:scale-[.8] shadow-sm`} onClick={toggle}>
        <span className={`transitionAnimation rounded-full absolute top-[3px] w-6 h-6 ${on ? 'left-[34px]' : 'left-[4px]'} themeBG`} />
      </button>
    </div>
  );
}
