'use client'    

import { Header } from "@/components/createProduct/header"
import { InputsUpdateProduct } from "@/components/updateProduct/InputsUpdateProduct"

export default function CreateProduct(){

    const HandleClick = (data: any) => { 
        console.log(data)
    }

    return(
        <div className='w-full min-h-screen flex justify-center items-center'>
            <div className='bg-white w-1/2 p-5'>

                <div className='flex justify-between mb-8'>
                    <span className='text-black text-xl'>Alterar Produto</span>
                </div>

                <InputsUpdateProduct onClick={HandleClick}/>

            </div>
        </div>
    )   
}