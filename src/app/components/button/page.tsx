// import React from 'react'

import Link from "next/link";
import React from "react";

interface Buttonprops {
    title: string,
    bottomtitle: string,
    bottomLink: string,
    redirectLink: string
}

const Button: React.FC<Buttonprops> = ({title, bottomtitle, bottomLink, redirectLink}) => {
  return (
    <div>
      <button
        type="submit"
        className="flex justify-center items-center mt-4 p-3 bg-red-700 rounded-2xl border-2 w-[350px] m-auto font-semibold font-serif text-xl hover:bg-transparent hover:text-black border-red-700"
      >
       {title}
      </button>

      <div className="flex justify-center items-center mt-2 ">
        <h1 className="text-red-900 font-bold font-serif italic">
          {bottomtitle}
        </h1>
        <Link
          href={redirectLink}
          className="text-black ml-2 font-bold text-xl border-b-orange-400 border-2 italic font-serif"
        >
          {bottomLink}
        </Link>
      </div>
    </div>
  );
};

export default Button;
