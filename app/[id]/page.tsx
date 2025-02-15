"use client"
import { graphqlclient } from '@/clients/api'
import { Tweet } from '@/gql/graphql'
import { followUserMutation, UnfollowUserMutation } from '@/graphql/mutations/user'
import { useCurrentUser, useGetUserById } from '@/hooks/user'
import { useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useCallback, useMemo } from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { FeedComponent } from '../Components/FeedComponent'
import { SideBarLayout } from '../Components/SideBarLayout'

export default function page() {
  const queryClient=useQueryClient()
    const params = useParams<{ id: string; item: string }>()
    const {user}=useCurrentUser()
    const {data}=useGetUserById(params.id)
    const amIFollowing=useMemo(()=>{
      return ((user?.following?.findIndex((el)=>el?.id===data?.getUserById?.id)??-1)>=0)
    },[user?.following,data?.getUserById])
   
    
    
    const handleUnFolllowUser=useCallback(async()=>{
      if(!data?.getUserById?.id) return 
      await graphqlclient.request(UnfollowUserMutation,{to:data?.getUserById?.id})
      await queryClient.invalidateQueries({queryKey:["curent-user"]})
  
      
     },[data?.getUserById?.id,queryClient])


   const handleFolllowUser=useCallback(async()=>{
    if(!data?.getUserById?.id) return 
    await graphqlclient.request(followUserMutation,{to:data?.getUserById?.id})
    await queryClient.invalidateQueries({queryKey:["curent-user"]})

    
   },[data?.getUserById?.id,queryClient])
   
   
    
    

   
   

    
    
    
  return (
    <div>
        <SideBarLayout>
           <nav className='flex items-center gap-3 px-3 py-2'>
            <Link href={"/"}>
            <MdOutlineKeyboardBackspace className='text-4xl' />
            </Link>
           
            <div>
            <h1 className='text-2xl font-bold '>{data?.getUserById?.firstName} {data?.getUserById?.lastName}</h1>
            <h1 className='text-md font-bold  text-slate-500'>{data?.getUserById?.tweets?.length} Tweets</h1>

            </div>
           

           </nav>
           <div className='p-4 border-b border-slate-800'>
           {data?.getUserById?.profileImageUrl && <Image className='rounded-full mb-5' src={data.getUserById.profileImageUrl} width={100} height={100} alt='image'/>}
           <h1 className='text-2xl font-bold '>{data?.getUserById?.firstName} {data?.getUserById?.lastName}</h1>
           <div className='flex items-center justify-between'>
           <div className='flex gap-3 mt-3 text-gray-400 text-sm'>
            <span>{data?.getUserById?.followers?.length} followers</span>
            <span>{data?.getUserById?.following?.length} following</span>
           </div>
           {user?.id!=data?.getUserById?.id && (
            <>
            {amIFollowing ?(<button onClick={handleUnFolllowUser} className='bg-white text-black px-3 py-1  text-sm rounded-full'>Unfollow</button>):( <button onClick={handleFolllowUser} className='bg-white text-black px-3 py-1  text-sm rounded-full'>Follow</button>)}
           
            </>
           
           
            )}
           
            
           </div>
          

           </div>
          
           
           <div>
            {data?.getUserById?.tweets?.map(tweet=><FeedComponent key={tweet?.id} data={tweet as Tweet}/>)}
           </div>
           
        </SideBarLayout>
    </div>
  )
}

