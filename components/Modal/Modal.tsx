'use client'

import React, { useState } from 'react';
import Closebutton from '../icons/Closebutton';



const Modal = ({ isOpen, closeModal, title }:{isOpen?:boolean, closeModal?:any, title?:string}) => {
     const [data,setData] = useState({
        firstname:'',
        lastname:'',
        address:''
    })

    const handleValues = (inputField:string ,value:string | number)=>{
        setData((prev)=>{
            return {
                ...prev,
                [inputField]:value
            }
        })
    }

   const handleSubmit=async(e)=>{
     e.preventDefault()

     const userData={
        ...data
     }

     console.log(userData)

     try{
       const res =await  fetch('https://fixit-testing.tuulbox.app/api/accounts/6d475484-c5d6-492d-98c7-27b0733806b1/',{
         method:'PATCH',
         body:JSON.stringify(userData),
         headers: {
          "Content-Type": "application/json",
        },
       })
       const resData=res.json()
       console.log(resData)
       console.log('success')
       closeModal()
     }catch(err){
console.log('Update failed',err)
     }


   }
   
  
  if (!isOpen) return null;

  return (
        <div className="fixed inset-0 backdrop-blur-[8px] backdrop-brightness-75 flex justify-center items-center z-50 animate-[fadeIn_0.8s_ease] duration-300">
        <div className="bg-white rounded-lg shadow-lg  p-6  flex justify-center text-black max-md:w-[80%] w-[30%]% animate-[pop_0.3s_ease] duration-300">
            {/* Left side: Details Preview */}
            <div className="h-full space-y-2 w-[98%] relative">
            <h2 className="text-base">Update {title}</h2>
        <p className='mb-1 text-sm text-neutral-500'>Please fill in the appropriate information</p>
           <div className='absolute right-0 top-0 !cursor-pointer' onClick={()=>closeModal()}><Closebutton/></div> 

            <div className="space-y-2 mt-8">
      <form onSubmit={handleSubmit} className='h-full flex flex-col gap-4'>
        <div className='flex items-center gap-6 w-full [&>*]:flex [&>*]:flex-col justify-center max-md:flex-wrap [&>*]:capitalize'>
        <span className='w-[50%] max-md:!w-full'>
            <label htmlFor='firstname' className='text-neutral-600'>firsname</label>
            <input type='text' className='border border-neutral-200 rounded-lg p-2 h-10 outline-none placeholder:text-neutral-400' placeholder='Enter firstname' onChange={(e)=>handleValues('firstname',e.target.value)}/>
        </span>
        <span className='w-[50%] max-md:!w-full'>
            <label htmlFor='lastname' className='text-neutral-600'>lastname</label>   
            <input type='text' className='border border-neutral-200 p-2 rounded-lg h-10 outline-none placeholder:text-neutral-400' placeholder='Enter lastname' onChange={(e)=>handleValues('lastname',e.target.value)}/>
        </span>
        </div>
        <span className='w-full flex flex-col'>
            <label htmlFor='address' className='text-neutral-600'>Address</label>
            <input type='text' className='p-2 h-10 border border-neutral-200 rounded-lg !outline-none placeholder:text-neutral-400' placeholder='32 wendy street, Accra Ghana' onChange={(e)=>handleValues('address',e.target.value)}/>
        </span>
   
            <div className='flex items-center justify-end gap-4'>
            
            <button type='button' onClick={()=>{
              closeModal()
            }} className="p-3 rounded-xl shadow-sm hover:bg-opacity-80 transition-all text-sm mt-8 bg-[#E6EAF9] text-[#0130C7] cursor-pointer">Cancel</button>
            <button type='submit' className="bg-indigo-400 text-white p-3 shadow-sm rounded-xl hover:bg-opacity-80 transition-all text-sm mt-8 cursor-pointer">Save changes</button>
            </div>
            </form>
            </div>
            </div>
            </div>
        </div>
        
  );
};

export default Modal;
