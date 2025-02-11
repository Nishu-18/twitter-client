"use client"
import Image from 'next/image'
import React from 'react'
import { SideBarLayout } from '../Components/SideBarLayout'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { useCurrentUser, useGetUserById } from '@/hooks/user'
import { FeedComponent } from '../Components/FeedComponent'
import { Tweet } from '@/gql/graphql'
import {  useRouter } from 'next/router'
import { useParams, usePathname } from 'next/navigation'
import { GetServerSideProps } from 'next'

export default function page() {
    const params = useParams<{ id: string; item: string }>()
    const {user}=useCurrentUser()
    const {data}=useGetUserById(params.id)
   
    
    
    
   
   
   
    
    

   
   

    
    
    
  return (
    <div>
        <SideBarLayout>
           <nav className='flex items-center gap-3 px-3 py-2'>
           <MdOutlineKeyboardBackspace className='text-4xl' />
            <div>
            <h1 className='text-2xl font-bold '>{data?.getUserById?.firstName} {data?.getUserById?.lastName}</h1>
            <h1 className='text-md font-bold  text-slate-500'>{data?.getUserById?.tweets?.length} Tweets</h1>

            </div>
           

           </nav>
           <div className='p-4 border-b border-slate-800'>
           {data?.getUserById?.profileImageUrl && <Image className='rounded-full mb-5' src={data.getUserById.profileImageUrl} width={100} height={100} alt='image'/>}
           <h1 className='text-2xl font-bold '>{data?.getUserById?.firstName} {data?.getUserById?.lastName}</h1>

           </div>
           <div>
            {data?.getUserById?.tweets?.map(tweet=><FeedComponent key={tweet?.id} data={tweet as Tweet}/>)}
           </div>
           
        </SideBarLayout>
    </div>
  )
}

