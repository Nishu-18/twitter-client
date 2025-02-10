"use client"
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { MdHomeFilled } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { BiImageAlt, BiUser } from "react-icons/bi";
import { FeedComponent } from "./Components/FeedComponent";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { use, useCallback, useState } from "react";
import toast from "react-hot-toast";
import { graphqlclient } from "@/clients/api";
import { verifyUserGoogleToken } from "@/graphql/query/user";
import { useCurrentUser } from "@/hooks/user";
import { useCreateTweet, useGetAllTweets } from "@/hooks/tweet";
import { Tweet } from "@/gql/graphql";



export default function Home() {
  const [content,setContent]=useState('')
  const {user}=useCurrentUser()
  const {tweets=[]}=useGetAllTweets()
  const {mutate}=useCreateTweet()
  const handleSelectImage=useCallback(()=>{
     const input=document.createElement('input')
     input.setAttribute('type','file')
     input.setAttribute('accept','image/*')
     input.click();
  },[])

  const handleCreateTweet=useCallback(()=>{
    mutate({
      content
    });

  },[content,mutate])
   
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
  interface sideBarProps{
    title:string,
    icon:React.ReactNode
  }
  const SideBarMenuItems:sideBarProps[]=[{title:'Home',icon:<MdHomeFilled/>},{title:'Explore',icon:<IoSearch/>},{title:'Notifications',icon:<IoNotificationsOutline/>},{title:'Messages',icon:<BsEnvelope/>
    
  },{title:'Bookmarks',icon:<BsBookmark/>},{title:"Profile",icon:<BiUser/>}]
  return (
   <div className="grid grid-cols-12 h-screen max-w-screen px-52 ">
    <div className="col-span-3 px-4 relative h-screen">
      <div className="flex justify-start hover:bg-slate-900 w-fit rounded-full p-3 cursor-pointer">
      <FaXTwitter size={30}/>

      </div>
      <ul >
        {SideBarMenuItems.map(item=><li className="flex items-center gap-4 hover:bg-slate-900 rounded-full w-fit p-4 cursor-pointer" key={item.title}>
          <div className="text-3xl">
          {item.icon}
            
          </div>
          <div className="text-xl">
          {item.title}

          </div>
         
          
        </li>)}
      </ul>
      <div className="pr-5">
      <button className="bg-blue-500 rounded-full p-4 w-full ">Tweet</button>
      <div className="absolute bottom-5">
      {user && user.profileImageUrl &&<div className="flex gap-2 items-center bg-slate-800 rounded-full px-3 py-2 w-fit">
        <Image className="rounded-full" src={user?.profileImageUrl} width={50} height={50} alt="alt-image"/>
        <div>
        <h3 >{user.firstName} {user.lastName}</h3>
       

        </div>
        
        </div>}
        

      </div>

      </div>
      
   
    </div>
    <div className="col-span-5 border-r-[1px] border-l-[1px] border-gray-800 h-screen overflow-y-auto scrollbar-hide">
    <div className='grid grid-cols-12 gap-2 p-4 border-b-2 border-b-slate-900 hover:bg-slate-900 transition-all cursor-pointer'>
       <div className='col-span-1'>
{user&&user.profileImageUrl && <Image className="rounded-full" src={user?.profileImageUrl} width={50} height={50} alt="alt-image"/>}
       
                 
              </div>
              <div className="col-span-11">
                <textarea onChange={(e)=>setContent(e.target.value)} name="" id="" rows={3} className="w-full bg-transparent text-xl px-2 border-b border-slate-700" placeholder="What's Happening?"></textarea>
                <div className="flex justify-between items-center">
              <BiImageAlt onClick={handleSelectImage} className="text-xl" />
              <button onClick={handleCreateTweet} className="bg-blue-500 rounded-full px-4 py-1  text-sm">Tweet</button>
              </div>
              </div>
              
    </div>
    {tweets?.map(tweet=> 
      tweet? <FeedComponent key={tweet?.id} data={tweet as Tweet} />:null)}

     
    
      

      
      
    </div>
   {!user && <div className="col-span-3 p-5 ">
      <div className="p-5 bg-slate-700 rounded-lg w-fit">
        <h1 className="my-2 text-2xl">New to Twitter ?</h1>
      <GoogleLogin onSuccess={handleLoginWithGoogle}/>
        
      </div>
      
    </div>}
    
    </div>
  );
}
