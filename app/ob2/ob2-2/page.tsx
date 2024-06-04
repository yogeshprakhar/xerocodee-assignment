"use client"
import Card from '@/components/Card';
import { handleLogout } from '@/controller/appwrite';
import { Button } from '@mui/material';
import React from 'react'

const page = () => {
 return (
   <div className="min-h-screen min-w-full overflow-hidden">
     <div className="bg-gradient-to-t from-white to-blue-300">
       <div className="flex justify-end px-14 py-10">
         <Button onClick={() => handleLogout()} variant="outlined">
           Logout
         </Button>
       </div>
       <div className="flex flex-col gap-2 bg-white rounded-3xl my-10 md:mx-40 mx-3 md:p-10 p-6 border border-gray-200">
         <div className="font-bold text-2xl text-center">
           Choose A Template To Deploy An Application
         </div>
         <div className="text-center text-sm">
           Import Your Existing App Or Create A New One With Our Ready-Made
           Template
         </div>
       </div>
       <div className="flex flex-wrap my-16 md:mx-40 mx-3  gap-10 justify-between">
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
       </div>
     </div>
   </div>
 );
}

export default page
