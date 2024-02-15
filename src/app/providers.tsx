"use client";
import { useEffect, useState } from 'react';
import { Style } from './style';
import Header from './components/organism/header';

const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // const [state, setOnState] = useState('off');
  
  // useEffect(()=>{
  //   if ( typeof localStorage != 'undefined' ) {
  //     localStorage.theme ?
  //     setOnState(localStorage.theme):
  //     ''
  //     console.log(localStorage.theme);
      
  //   }
  // },[])

  const [on, setOnState] = useState(false);

  function toggleSwitch( item: boolean ) {
    setOnState(item)
  }

  return (
      <Style>
          <div className={`${ on ? 'light' : 'dark' } primaryBG primaryText `}>
            <Header toggleSwitch={toggleSwitch} />
            {children}
          </div>
      </Style>
  );
};

export default Providers;
