'use client'    

import { Header } from "@/components/createProduct/header"
import { InputsCreateProduct } from "@/components/createProduct/inputs"

export default function CreateProduct(){

    function HandleClick(data: any){
        console.log(data)
    }

    return(
        <div className='w-full min-h-screen flex justify-center items-center'>
            <div className='bg-white w-1/2 p-5'>
                <Header/>
                <InputsCreateProduct onClick={HandleClick}/>
            </div>
        </div>
    )   
}