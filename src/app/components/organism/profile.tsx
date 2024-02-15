'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import profile from "@img/profile-pic.png"
import { FacebookRounded, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import Link from "next/link";

export default function Profile() {
  const names = [
    'Developer', 'Designer', 'Gamer'
  ]

  const [currentName, setCurrentName] = useState(names[0]);

  function setRandomName() {
    const index = Math.floor(Math.random() * names.length);
    let newName = names[index]
    if (newName == currentName) { setRandomName() }
    else { setCurrentName(newName) }
    return
  }

  useEffect(() => {
    setTimeout(() => {
      setRandomName()
    }, 1000);
  }, [currentName])

  return (
      <div className="flex w-screen portrait:flex-col-reverse px-5 gap-4 landscape:px-[7.5%]">
        <div className="w-[50%] h-auto portrait:w-full portrait:self-center flex flex-col portrait:items-center portrait:gap-y-4 justify-between overflow-hidden">
          <div className="flex flex-col justify-start landscape:justify-center gap-x-4 landscape:mt-[7.5vw] portrait:text-center">
            <h6 className="text-[1.8rem] whitespace-nowrap">
              Hello, my name is
            </h6>
            <h1 className="text-[3.5rem] max-md:text-[3rem] font-bold whitespace-nowrap">
              Kishan Singh
            </h1>
            <p className="text-[1.8rem] w-full relative whitespace-nowrap font-bold transitionAnimation">
              a <span className="transitionE">{currentName}</span>
            </p>
            <p className=" whitespace-break-spaces mt-2 font-light">
              I&apos;m a frontend developer based in Noida, India, with over 2 years of experience.
            </p>
          </div>
          <Link href={'./Kishan Singh.pdf'} target="#" className="landscape:px-8 landscape:py-4 landscape:rounded-full landscape:text-[1.2rem] animate-bounce px-4 py-2 rounded-3xl primaryButtonBG primaryButtonText w-max my-8"
          type="submit"
          >
            Download CV 
          </Link>
          <div className="w-full">
            <p className="font-light w-full portrait:text-center px-4">
              Find me on :
            </p>
            <div className="flex items-center portrait:justify-evenly landscape:px-4 landscape:gap-10 my-2 py-3">
              <Link target="#" href={'https://www.instagram.com/k.i.s.n.a.a'} className="rounded-full primaryButtonBG primaryButtonText p-1 flex items-center justify-center relative">
                <FacebookRounded className="landscape:text-[2rem] m-1 z-10" />
                <span className="w-full h-full animate-ping absolute top-0 right-0 themeBG opacity-50 rounded-full"/>
              </Link>
              <Link target="#" href={'https://www.instagram.com/k.i.s.n.a.a/'} className="rounded-full primaryButtonBG primaryButtonText p-1 flex items-center justify-center relative">
                <Instagram className="landscape:text-[2rem] m-1 z-10" />
                <span className="w-full h-full animate-ping absolute top-0 right-0 themeBG opacity-50 rounded-full"/>
              </Link>
              <Link target="#" href={'https://www.linkedin.com/in/kishan-singh-65ab04260/'} className="rounded-full primaryButtonBG primaryButtonText p-1 flex items-center justify-center relative">
                <LinkedIn className="landscape:text-[2rem] m-1 z-10" />
                <span className="w-full h-full animate-ping absolute top-0 right-0 themeBG opacity-50 rounded-full"/>
              </Link>
              <Link target="#" href={'https://github.com/ted-kishan'} className="rounded-full primaryButtonBG primaryButtonText p-1 flex items-center justify-center relative">
                <GitHub className="landscape:text-[2rem] m-1 z-10" />
                <span className="w-full h-full animate-ping absolute top-0 right-0 themeBG opacity-50 rounded-full"/>
              </Link>
            </div>
          </div>
        </div>
        <div className="rounded-full w-[50%] portrait:w-full portrait:mt-4 self-center aspect-square relative portrait:mb-2">
          <Image src={profile} priority={true} alt="profile" className="absolute right-0 top-0 w-full z-10 scale-[.90] shadow-lg rounded-full" />
          <div className="primaryBorder border-2 rounded-full w-full h-full secondryBG" />
        </div>
      </div>
  );
}
