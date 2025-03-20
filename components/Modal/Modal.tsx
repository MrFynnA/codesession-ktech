'use client'

import React, { useState } from 'react';



const Modal = ({ isOpen, closeModal }:{isOpen?:boolean, closeModal?:any}) => {
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

      const res =await  fetch('https://fixit-testing.tuulbox.app/api/accounts/6d475484-c5d6-492d-98c7-27b0733806b1/',{
        method:'PATCH',
        body:JSON.stringify(userData)
      })

      const dataa=res.json()

      console.log(dataa)

   }
   
  
  if (!isOpen) return null;

  return (
        <div className="fixed inset-0 backdrop-blur-[8px] backdrop-brightness-75 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-lg  p-6  flex justify-center text-black max-md:w-[80%] md:w-[30%] md:h-[364px]">
            {/* Left side: Details Preview */}
            <div className="h-full space-y-2 md:w-[98%]">
            <h2 className="text-base">Update Name And Address</h2>
        <p className='mb-1 text-sm text-neutral-500'>Please fill in the appropriate information</p>
  

            <div className="space-y-2 mt-8 w-full">
      <form onSubmit={handleSubmit} className='h-full flex flex-col gap-4'>
        <div className='flex items-center gap-6 [&>*]:flex [&>*]:flex-col [&>*]:w-full [&>*]:capitalize'>
        <div>
            <label htmlFor='firstname' className='text-neutral-600'>firsname</label>
            <input type='text' className='border border-neutral-200 rounded-lg p-2 h-10 outline-none placeholder:text-neutral-400' placeholder='Enter firstname' onChange={(e)=>handleValues('firstname',e.target.value)}/>
        </div>
        <div>
            <label htmlFor='lastname' className='text-neutral-600'>lastname</label>   
            <input type='text' className='border border-neutral-200 p-2 rounded-lg h-10 outline-none placeholder:text-neutral-400' placeholder='Enter lastname' onChange={(e)=>handleValues('lastname',e.target.value)}/>
        </div>
        </div>
        <div className='w-full flex flex-col'>
            <label htmlFor='address' className='text-neutral-600'>Address</label>
            <input type='text' className='p-2 h-10 border border-neutral-200 rounded-lg !outline-none placeholder:text-neutral-400' placeholder='32 wendy street, Accra Ghana' onChange={(e)=>handleValues('address',e.target.value)}/>
        </div>
   
            <div className='flex items-center justify-end gap-4'>
            
            <button onClick={()=>{
              closeModal()
            }} className="p-3 rounded-xl shadow-sm hover:bg-opacity-80 transition-all text-sm mt-8 bg-[#E6EAF9] text-[#0130C7]">Cancel</button>
            <button className="bg-indigo-400 text-white p-3 shadow-sm rounded-xl hover:bg-opacity-80 transition-all text-sm mt-8">Save changes</button>
            </div>
            </form>
            </div>
            </div>
            </div>
        </div>
        
  );
};

export default Modal;
