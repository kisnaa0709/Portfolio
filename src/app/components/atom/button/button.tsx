'use client'
import Link from 'next/link';
import './button.css'

interface props {
  children: string,
  active: string,
  setActive: Function
}
export default function Button({children, active, setActive} : props) {
  return (
    <button onClick={() => setActive(children)} className={`${active === children ? 'primaryButtonBG primaryButtonText' : 'primaryText bg-transparent' } w-full min-w-[30%] max-w-80 p-3 px-8 rounded-full border primaryBorder text-[1.1rem]`}>{children}</button>
  );
}

export function ButtonV1() {
  return (
    <Link href={'./Kishan Singh Resume.pdf'} target="#" className="landscape:px-8 landscape:py-3 landscape:rounded-full landscape:text-[1.1rem] animate-bounce px-6 py-3 rounded-3xl primaryButtonBG primaryButtonText w-max my-8"
    type="submit"
    >
      Download CV 
    </Link>
  );
}
