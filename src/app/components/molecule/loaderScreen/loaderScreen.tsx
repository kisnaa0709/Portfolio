'use client'

import Loader from "../../atom/loader/loader";

export default function LoaderScreen() {
  return (
    <div className="w-scrren h-screen flex justify-center items-center z-[99] primaryBG">
      <Loader/>
    </div>
  );
}
