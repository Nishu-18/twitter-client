import Image from 'next/image'
import React from 'react'
import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { GoUpload } from "react-icons/go";

export const FeedComponent = () => {
  return (
    <div className='grid grid-cols-12 gap-2 p-4 border-b-2 border-b-slate-900 hover:bg-slate-900 transition-all cursor-pointer'>
        <div className='col-span-1'>
            <Image src={"https://avatars.githubusercontent.com/u/132206570?v=4"} width={50} height={50} alt='user-image' className='rounded-full'/>
        </div>
        <div className='col-span-11'>
            <div className='font-semibold '>Vikram Pratap Singh</div>
        If AAP loses tomorrow. All secrets, corruption will be exposed by AAP karyakarta only . Will be fun to watch .
        <div className='flex justify-evenly text-xl mt-5'>

<div>
    <FaRegComment/>
</div>
<div>
    <BiRepost/>
</div>
<div>
    <CiHeart/>
</div>
<div>
    <BiRepost/>
</div>
<div>
    <GoUpload/>
</div>


</div>
        </div>


       
    
    </div>
  )
}
