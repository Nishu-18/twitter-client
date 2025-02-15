"use client"
import { useCurrentUser } from "@/hooks/user"
import {  BiUser } from "react-icons/bi"
import { BsBookmark, BsEnvelope } from "react-icons/bs"
import { FaXTwitter } from "react-icons/fa6"
import { IoNotificationsOutline, IoSearch } from "react-icons/io5"
import { MdHomeFilled } from "react-icons/md"
import Image from "next/image";
import { useCallback, useMemo } from "react"

import { CredentialResponse, GoogleLogin } from "@react-oauth/google"
import toast from "react-hot-toast"
import { graphqlclient } from "@/clients/api"
import { verifyUserGoogleToken } from "@/graphql/query/user";
import Link from "next/link"


interface sideBarProps{
  title:string,
  icon:React.ReactNode,
  link:string
}




export const SideBarLayout = ({children}:{children:React.ReactNode}) => {
    const {user}=useCurrentUser()
     


     

       

      const handleLoginWithGoogle=useCallback(async(cred:CredentialResponse)=>{
        const googleToken=cred.credential
        if(!googleToken)
         return toast.error('Google token not found')
        const {verifyGoogleToken}=await graphqlclient.request(verifyUserGoogleToken,{token:googleToken})
        toast.success('Verified Success')
        if(verifyGoogleToken){
          window.localStorage.setItem('twitter_token',verifyGoogleToken)
        }
        
    
        
      },[])

      const sideBarMenuItems:sideBarProps[]=useMemo(()=>[{title:'Home',icon:<MdHomeFilled/>,link:'/'},{title:'Explore',icon:<IoSearch/>,link:'/'},{title:'Notifications',icon:<IoNotificationsOutline/>,link:'/'},{title:'Messages',icon:<BsEnvelope/>,link:'/'
  
      },{title:'Bookmarks',icon:<BsBookmark/>,link:'/'},{title:"Profile",icon:<BiUser/>,link:`${user?.id}`}]
      ,[user?.id])
  
  return (

    <div>
        <div className="grid grid-cols-12 gap-2 h-screen max-w-screen sm:px-52 ">
    <div className="col-span-2 sm:col-span-3  relative h-screen">
    <div className="flex justify-start hover:bg-slate-900 w-fit rounded-full p-3 cursor-pointer">
      <Link href={"/"}> <FaXTwitter  size={30}/></Link>
     

      </div>
      <ul >
        {sideBarMenuItems.map(item=><li className="" key={item.title}>
          <Link className="flex items-center gap-4 hover:bg-slate-900 rounded-full w-fit p-4 cursor-pointer" href={item.link}>
          <div className="text-3xl mb-1">
          {item.icon}
            
          </div>
          <div className="hidden sm:block">
          {item.title}

          </div>
          </Link>
          
         
          
        </li>)}
      </ul>
      <div className="pr-5">
      <button className="hidden sm:block bg-blue-500 rounded-full p-4 w-full ">Tweet</button>
      <button className="sm:hidden bg-blue-500 rounded-full p-4 w-full ">
      <FaXTwitter size={30}/>
      </button>
      
      <div className="absolute bottom-5">
      {user && user.profileImageUrl &&<div className="flex gap-2 items-center bg-slate-800 rounded-full px-3 py-2 w-fit">
        <Image className="rounded-full" src={user?.profileImageUrl} width={50} height={50} alt="alt-image"/>
        <div>
          <div className="hidden sm:block">
          <h3 >{user.firstName} {user.lastName}</h3>

          </div>
        
       

        </div>
        
        </div>}
        

      </div>

      </div>
      
      
      
   
    </div>
    <div className="col-span-10 sm:col-span-5 border-r-[1px] border-l-[1px] border-gray-800 h-screen overflow-y-auto scrollbar-hide">
      {children}
    </div>
    
   {!user && <div className=" sm:col-span-3 p-5 ">
      <div className="p-5 bg-slate-700 rounded-lg w-fit">
        <h1 className="my-2 text-2xl">New to Twitter ?</h1>
      <GoogleLogin onSuccess={handleLoginWithGoogle}/>
        
      </div>
      
    </div>}
    <div className="px-4 py-2 sm:col-span-3 bg-slate-800 rounded-lg w-fit h-fit">
    <h1 className="my-2 font-medium text-2xl mb-5 ">Users you may know</h1>
    {user?.recommendedUsers?.map((el)=>(
      <div className="flex items-center gap-3" key={el?.id}>
        
        {el?.profileImageUrl && <Image className="rounded-full" src={el?.profileImageUrl} width={50} height={50} alt="user-image"/>}
        <div>
          <div>
          {el?.firstName} {el?.lastName}

          </div>
        
        <Link href={`/${el?.id}`} className="bg-white text-black text-sm px-5 py-1  w-full rounded-md">View</Link>
       
        
          
        </div>
        
        
        
        
      </div>
      
      
    ))}
   

    </div>
    
    
    </div>

           
    </div>
  )
}


