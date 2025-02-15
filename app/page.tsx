"use client"

import { Tweet } from "@/gql/graphql";
import { useCreateTweet, useGetAllTweets } from "@/hooks/tweet";
import { useCurrentUser } from "@/hooks/user";
import Image from "next/image";
import { useCallback, useState } from "react";
import { BiImageAlt } from "react-icons/bi";
import { FeedComponent } from "./Components/FeedComponent";
import { SideBarLayout } from "./Components/SideBarLayout";
import { graphqlclient } from "@/clients/api";
import { getSignedUrlForTweetQuery } from "@/graphql/query/tweet";
import axios from "axios";
import toast from "react-hot-toast";

interface HomeProps{
  tweets?:Tweet[]
}


export default function Home(props:HomeProps) {
  const {tweets=props.tweets as Tweet[]}=useGetAllTweets()
  
  const {user}=useCurrentUser()

  const [content,setContent]=useState('')
  const [imageurl,setImageUrl]=useState('')
  const {mutateAsync}=useCreateTweet()
  const handleFileChange=useCallback((input:HTMLInputElement)=>{
      return async(event:Event)=>{
        event.preventDefault()
        const file:File|null|undefined=input.files?.item(0)
        if(!file) return;
        const {getSignedUrlForTweet}=await graphqlclient.request(getSignedUrlForTweetQuery,{
          imageType:file.type,
          imageName:file.name
        })
        if(getSignedUrlForTweet){
          toast.loading('Uploading...',{id:'2'})
          await axios.put(getSignedUrlForTweet,file,
            {headers:{
              'Content-Type':file.type
            }}
          )
          toast.success('Upload Completed',{id:'2'})
          const url=new URL(getSignedUrlForTweet)
          const myFilePath=`${url.origin}${url.pathname}`
          setImageUrl(myFilePath)
        }

        
      }

  },[])

  const handleSelectImage=useCallback(()=>{
    const input=document.createElement('input')
    input.setAttribute('type','file')
    input.setAttribute('accept','image/*')
    input.click();
    const handlerFn=handleFileChange(input)
    input.addEventListener("change",handlerFn)
 },[handleFileChange])



 const handleCreateTweet = useCallback(async () => {
  try {
    console.log("Calling mutateAsync with content:", content);
    await mutateAsync({
      content,
      imageUrl: imageurl || undefined,
    });

    // Use functional updates to clear state
    setContent((prevContent) => {
      console.log("Clearing content:", prevContent);
      return "";
    });

    setImageUrl((prevImageUrl) => {
      console.log("Clearing imageUrl:", prevImageUrl);
      return "";
    });
    setTimeout(() => {
      console.log("After timeout: content =", content);
    }, 500);
  } catch (error) {
    console.error("Failed to create tweet:", error);
  }
}, [content, mutateAsync, imageurl]);

// Log state updates



  

  return (
  
    <SideBarLayout>
      <div>
    
    <div className='grid grid-cols-12 gap-2 p-4 border-b-2 border-b-slate-900 hover:bg-slate-900 transition-all cursor-pointer'>
       <div className='col-span-1'>
{user&&user.profileImageUrl && <Image className="rounded-full" src={user?.profileImageUrl} width={50} height={50} alt="alt-image"/>}
       
                 
              </div>
              <div className="col-span-11">
                <textarea value={content} onChange={(e)=>setContent(e.target.value)} name="" id="" rows={3} className="w-full bg-transparent text-xl px-2 border-b border-slate-700" placeholder="What's Happening?"></textarea>
                {imageurl && <Image src={imageurl} width={400} height={400} alt="image"/>}
                <div className="flex justify-between items-center">
              <BiImageAlt onClick={handleSelectImage} className="text-xl" />
              <button onClick={handleCreateTweet} className="bg-blue-500 rounded-full px-4 py-1  text-sm">Tweet</button>
              </div>
              </div>
              
    </div>
    {tweets?.map(tweet=> 
      tweet? <FeedComponent key={tweet?.id} data={tweet as Tweet} />:null)}
      </div>
    


    </SideBarLayout>
    

   
  );
}
