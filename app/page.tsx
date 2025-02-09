"use client"
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { MdHomeFilled } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FeedComponent } from "./Components/FeedComponent";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useCallback } from "react";
import toast from "react-hot-toast";
import { graphqlclient } from "@/clients/api";
import { verifyUserGoogleToken } from "@/graphql/query/user";



export default function Home() {
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
    <div className="col-span-3 px-4 sticky top-0 left-0 h-screen">
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

      </div>
      
   
    </div>
    <div className="col-span-5 border-r-[1px] border-l-[1px] border-gray-800 h-screen overflow-y-auto scrollbar-hide">
      <FeedComponent/>
      <FeedComponent/>
      <FeedComponent/>
      <FeedComponent/>
      <FeedComponent/>
      <FeedComponent/>
      <FeedComponent/>
      <FeedComponent/>
      

      
      
    </div>
    <div className="col-span-3 p-5 ">
      <div className="p-5 bg-slate-700 rounded-lg w-fit">
        <h1 className="my-2 text-2xl">New to Twitter ?</h1>
      <GoogleLogin onSuccess={handleLoginWithGoogle}/>
        
      </div>
      
    </div>
    
    </div>
  );
}
