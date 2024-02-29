'use client'
import './about.css'
import Button from '../../atom/button/button';
import { useState } from 'react';
import { ExperienceEducation, PersonalInformation, ServicesSkills } from '../../molecule/aboutSections/aboutSection';

export default function About() {
  const [active, setActive] = useState('Personal Information')
  return (
    <div className=''>
      <div className="flex items-center justify-center w-screen portrait:flex-col-reverse px-5 gap-4 landscape:px-[7.5%] relative portrait:h-[100px] landscape:h-[150px]">
        {/* <Image src={about} alt='' className='absolute top-0 right-0 w-full h-auto opacity-30' /> */}
        <h1 className='text-[2.75rem] secondryText font-semibold tracking-wide'> About <span className='text-white'>Me</span></h1>
      </div>
      <div className='flex w-full flex-wrap justify-evenly gap-4 landscape:px-16 portrait:px-6 mt-10'>
        <Button active={active} setActive={setActive}>Personal Information</Button>
        <Button active={active} setActive={setActive}>Services & Skills</Button>
        <Button active={active} setActive={setActive}>Experience & Education</Button>
      </div>
      {
        active === "Personal Information" ?
          <PersonalInformation /> :
          active === "Services & Skills" ?
            <ServicesSkills /> :
            <ExperienceEducation />
      }
    </div>
  );
}
