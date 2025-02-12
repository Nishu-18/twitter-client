import Image from 'next/image'
import React from 'react'
import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { GoUpload } from "react-icons/go";
import { Tweet } from '@/gql/graphql';
import Link from 'next/link';
interface TweetCompoProps{
    data:Tweet
}

export const FeedComponent = (props:TweetCompoProps) => {
    const {data}=props
  return (
    <div className='grid grid-cols-12 gap-2 p-4 border-b-2 border-b-slate-900 hover:bg-slate-900 transition-all cursor-pointer'>
    <div className='col-span-1'>
    {data.author?.profileImageUrl && <Image src={data.author?.profileImageUrl} width={50} height={50} alt='user-image' className='rounded-full'/>}
    </div>
        <div className='col-span-11'>
            <Link href={`/${props.data.author?.id}`} className='font-semibold '>{data.author?.firstName} {data.author?.lastName}</Link>
            <div>
            {data.content}
            {data.imageUrl && <Image className='rounded-md' src={data.imageUrl} width={400} height={400} alt='tweet-image'/>}

            </div>
       
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
