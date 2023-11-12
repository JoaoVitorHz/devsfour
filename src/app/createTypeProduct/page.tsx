"use client";

import { useState } from "react";

type Props = {
  onClick: (data: any) => void;
};

export default function Index({onClick}:Props){
    const [productType, setProductType] = useState("");

    const [isInvalidType, setIsInvalidType] = useState(false);

    function VerifyInputsData() {
        if (productType == ''){
            setIsInvalidType(true)
            return false;
        }
        setIsInvalidType(false)

        let obj = {
            productType: productType,
        }

        onClick(obj)
    }

    return(
        <div className='w-full min-h-screen flex justify-center items-center'>
            <div className='bg-white w-1/2 p-5'>

                <div className='flex justify-between mb-8'>
                    <span className='text-black text-xl'>Cadastrar Tipos de Produtos</span>
                </div>

                <div>
                    <div className="grid grid-cols-2 gap-3 mb-8">
                        <div className="flex flex-col">
                            <span className="text-black">Tipo</span>
                            <input
                                type="text"
                                placeholder="Digite o tipo do produto"
                                className="border border-solid border-gray-400 rounded-sm px-3 py-2 text-gray-500"
                                value={productType}
                                onChange={(e) => setProductType(e.target.value)}
                            />
                            {isInvalidType ? <span className="text-red-300">Tipo invalido</span> : ''}
                        </div>
                    </div>

                    <button
                        className="w-full py-3 bg-blue-500 hover:bg-blue-300 transition-[300ms]"
                        onClick={VerifyInputsData}
                    >
                        Cadastrar Tipo do Produto
                    </button>
                </div>

            </div>
        </div>
    )
}