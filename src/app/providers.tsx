"use client";
import { useEffect, useState } from 'react';
import { Style } from './style';
import Header from '@/app/components/organism/header/header';
import LoaderScreen from './components/molecule/loaderScreen/loaderScreen';

const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const [loading, setLoading] = useState(false)
 
  useEffect(() => {
    setTimeout(() => setLoading(true), 2000)
  }, [])

  const [on, setOnState] = useState(false);

  function toggleSwitch( item: boolean ) {
    setOnState(item)
  }

  return (
      <Style>
        {
          loading ?
          <div className={`${ on ? 'light' : 'dark' } primaryBG primaryText `}>
            <Header toggleSwitch={toggleSwitch} />
            {children}
          </div>: 
          <LoaderScreen />
        }
      </Style>
  );
};

export default Providers;
