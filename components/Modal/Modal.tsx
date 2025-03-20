'use client'

import React from 'react';



const Modal = ({ isOpen, closeModal }:{isOpen?:boolean, closeModal?:any}) => {
   
  
  if (!isOpen) return null;

  return (
        <div className="fixed inset-0 backdrop-blur-[8px] backdrop-brightness-75 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-lg  p-6 flex text-black max-md:w-[80%] w-[40%]">
            {/* Left side: Details Preview */}
            <div className="flex-1 pr-4">
            <h2 className="text-xl font-extrabold ">Update Name And Address</h2>
        <p className='text-neutral-600 mb-1 '>Please fill in the appropriate information</p>
       

            <div className="space-y-2">
             sdfds
            </div>
            <div className='flex items-center gap-4'>
            <button className="bg-blue-500 text-white p-3 rounded-lg drop-shadow-md hover:bg-opacity-80 transition-all text-sm mt-8"/>
            <button className="bg-blue-500 text-white p-3 rounded-lg drop-shadow-md hover:bg-opacity-80 transition-all text-sm mt-8" />
            <button onClick={()=>{
                closeModal()
            }} className="bg-white p-3 rounded-lg drop-shadow-md hover:bg-opacity-80 transition-all text-sm mt-8 border-2 border-blue-500 text-blue-500">Cancel</button>
            </div>
            </div>
        </div>
        </div>
  );
};

export default Modal;
