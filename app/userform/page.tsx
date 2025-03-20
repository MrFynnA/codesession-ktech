'use client'
import React,{useState} from 'react'

const page = () => {

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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor='firstname'>firsname</label>
            <input type='text' onChange={(e)=>handleValues('firstname',e.target.value)}/>
        </p>
        <p>
            <label htmlFor='lastname'>lastname</label>   
            <input type='text' onChange={(e)=>handleValues('lastname',e.target.value)}/>
        </p>
        <p>
            <label htmlFor='address'>address</label>
            <input type='text' onChange={(e)=>handleValues('address',e.target.value)}/>
        </p>

        <button>Send Details</button>
      </form>
    </div>
  )
}

export default page
