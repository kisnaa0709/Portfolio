'use client'
import './aboutSection.css'
import { ButtonV1 } from "../../atom/button/button";

export function PersonalInformation() {

  return (
    <div className='flex landscape:px-20 portrait:px-6 portrait:flex-col landscape:gap-10 h-max'>
      <div className='w-1/2 portrait:w-full flex flex-col pt-10 gap-8 justify-around'>
        <p className='secondryText text-[1.2rem] font-semibold tracking-wide'>Frontend Developer</p>
        <p className='primaryText text-[1rem] tracking-wide'>I work as a senior frontend developer, passionate about the whole frontend ecosystem and making pixel perfect designs with excellent user experience. I focus on improving usability and simplifying users life, while always having high standards regarding code quality and maintainability.</p>
        <ButtonV1 />
      </div>
      <div className='w-1/2 portrait:w-full flex flex-wrap py-8'>
        <div className='portrait:w-full w-1/2'>
          <p className='py-4 border-b'><b>Name:</b> Kishan</p>
        </div>
        <div className='portrait:w-full w-1/2'>
          <p className='py-4 border-b'><b>Surname:</b> Singh</p>
        </div>
        <div className='portrait:w-full w-1/2'>
          <p className='py-4 border-b'><b>Email:</b> ted.kishan@gmail.com</p>
        </div>
        <div className='portrait:w-full w-1/2'>
          <p className='py-4 border-b'><b>Age:</b> 22</p>
        </div>
        <div className='portrait:w-full w-1/2'>
          <p className='py-4 border-b'><b>Profession:</b> Software Developer</p>
        </div>
        <div className='portrait:w-full w-1/2'>
          <p className='py-4 border-b'><b>Nationality:</b> Indian</p>
        </div>
        <div className='portrait:w-full w-1/2'>
          <p className='py-4 border-b'><b>From:</b> UP, India</p>
        </div>
        <div className='portrait:w-full w-1/2'>
          <p className='py-4 border-b'><b>Phone:</b> +91 8808447118</p>
        </div>
        <div className='portrait:w-full w-1/2'>
          <p className='py-4 border-b'><b>Languages:</b>  English, Hindi</p>
        </div>
        <div className='portrait:w-full w-1/2'>
          <p className='py-4 border-b'><b>Freelance:</b>  Available</p>
        </div>
      </div>
    </div>
  );
}

export function ServicesSkills() {

  return (
    <div className='flex flex-col landscape:px-20 portrait:px-6 py-10 gap-10'>
      <h1 className="w-full flex flex-col items-center text-[1.2rem] tracking-wide text-center uppercase font-semibold">
        Services
        <span className="h-[1px] border-b my-4 w-[6%] portrait:min-w-16 primaryBorder"></span>
      </h1>
      <div className="flex gap-10">
        <div className="flex flex-col items-center p-4 w-1/3 border borderCustom">
          <button className='secondryBG p-4 max-w-max rounded-full secondryText mb-4'>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="var(--color-main-primary)" height="40" width="40" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" d="M0 0h24v24H0z"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"></path>
            </svg>
          </button>
          <p className='font-semibold text-[1.25rem] pb-4'>
            Web Design
          </p>
          <p className='font-light text-[1rem]'>
            Aliquam bibendum placerat maximus. Aliquam egestas nisi eu est rhoncus rhoncus. Proin eget dolor nulla. Nam vitae ornare dui.
          </p>
        </div>
        <div className="flex flex-col items-center p-8 w-1/3 border borderCustom">
          <button className='secondryBG p-4 max-w-max rounded-full secondryText mb-4'>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="var(--color-main-primary)" height="40" width="40" xmlns="http://www.w3.org/2000/svg">
              <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path>
            </svg>
          </button>
          <p className='font-semibold text-[1.25rem] pb-4'>
            Web Design
          </p>
          <p className='font-light text-[1rem]'>
            Aliquam bibendum placerat maximus. Aliquam egestas nisi eu est rhoncus rhoncus. Proin eget dolor nulla. Nam vitae ornare dui.
          </p>
        </div>
        <div className="flex flex-col items-center p-4 w-1/3 border borderCustom">
          <button className='secondryBG p-4 max-w-max rounded-full secondryText mb-4'>
            <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" color="var(--color-main-primary)" height="40" width="40" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"></path>
            </svg>
          </button>
          <p className='font-semibold text-[1.25rem] pb-4'>
            Web Design
          </p>
          <p className='font-light text-[1rem]'>
            Aliquam bibendum placerat maximus. Aliquam egestas nisi eu est rhoncus rhoncus. Proin eget dolor nulla. Nam vitae ornare dui.
          </p>
        </div>
      </div>
    </div>
  );
}

export function ExperienceEducation() {

  return (
    <div className='flex landscape:px-20 portrait:px-6 portrait:flex-col landscape:gap-10 h-max'>
      <div className='w-1/2 portrait:w-full flex flex-col pt-10 gap-8 justify-around'>
        <p className='secondryText text-[1.2rem] font-semibold tracking-wide'>Frontend Developer</p>
        <p className='primaryText text-[1rem] tracking-wide'>I work as a senior frontend developer, passionate about the whole frontend ecosystem and making pixel perfect designs with excellent user experience. I focus on improving usability and simplifying users life, while always having high standards regarding code quality and maintainability.</p>
        <ButtonV1 />
      </div>
      <div className='w-1/2 portrait:w-full flex flex-wrap py-8'>
        <div className='portrait:w-full w-1/2'>
          <p className='py-4 border-b'><b>Name:</b> Kishan</p>
        </div>
        <div className='portrait:w-full w-1/2'>
          <p className='py-4 border-b'><b>Surname:</b> Singh</p>
        </div>
        <div className='portrait:w-full w-1/2'>
          <p className='py-4 border-b'><b>Email:</b> ted.kishan@gmail.com</p>
        </div>
        <div className='portrait:w-full w-1/2'>
          <p className='py-4 border-b'><b>Age:</b> 22</p>
        </div>
        <div className='portrait:w-full w-1/2'>
          <p className='py-4 border-b'><b>Profession:</b> Software Developer</p>
        </div>
        <div className='portrait:w-full w-1/2'>
          <p className='py-4 border-b'><b>Nationality:</b> Indian</p>
        </div>
        <div className='portrait:w-full w-1/2'>
          <p className='py-4 border-b'><b>From:</b> UP, India</p>
        </div>
        <div className='portrait:w-full w-1/2'>
          <p className='py-4 border-b'><b>Phone:</b> +91 8808447118</p>
        </div>
        <div className='portrait:w-full w-1/2'>
          <p className='py-4 border-b'><b>Languages:</b>  English, Hindi</p>
        </div>
        <div className='portrait:w-full w-1/2'>
          <p className='py-4 border-b'><b>Freelance:</b>  Available</p>
        </div>
      </div>
    </div>
  );
}
