"use client";

import { useState } from "react";

type Props = {
  onClick: (data: any) => void;
};

export function InputsCreateProduct({ onClick }: Props) {
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productAmount, setProductAmount] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productType, setProductType] = useState("");

    const [isInvalidName, setIsInvalidName] = useState(false);
    const [isInvalidDescription, setIsInvalidDescription] = useState(false);
    const [isInvalidAmount, setIsInvalidAmount] = useState(false);
    const [isInvalidPrice, setIsInvalidPrice] = useState(false);

    function VerifyInputsData() {
        if (productName == ''){
            setIsInvalidName(true)
            return false;
        }
        setIsInvalidName(false)

        if (productDescription == ''){
            setIsInvalidDescription(true)
            return
        }
        setIsInvalidDescription(false)

        if (productAmount == ''){
            setIsInvalidAmount(true)
            return
        }
        setIsInvalidAmount(false)

        if (productPrice == ''){
            setIsInvalidPrice(true)
            return
        }
        setIsInvalidPrice(false)

        let obj = {
            productName: productName,
            productDescription: productDescription,
            productPrice: productPrice,
            productAmount: productAmount
        }

        onClick(obj)
    }

    return (
        <>
            <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="flex flex-col">
                    <span className="text-black">Nome</span>
                    <input
                        type="text"
                        placeholder="Digite o nome do produto"
                        className="border border-solid border-gray-400 rounded-sm px-3 py-2 text-gray-500"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                    {isInvalidName ? <span className="text-red-300">Nome Invalido</span> : ''}
                </div>

                <div className="flex flex-col">
                    <span className="text-black">Descritivo</span>
                    <input
                        type="text"
                        className="border border-solid border-gray-400 rounded-sm px-3 py-2 text-gray-500"
                        placeholder="Digite o nome do produto"
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                    />
                    {isInvalidDescription ? <span className="text-red-300">Descritivo invalido</span> : ''}
                </div>

                <div className="flex flex-col">
                    <span className="text-black">Quantidade</span>
                    <input
                        type="text"
                        className="border border-solid border-gray-400 rounded-sm px-3 py-2 text-gray-500"
                        placeholder="Digite o nome do produto"
                        value={productAmount}
                        onChange={(e) => setProductAmount(e.target.value)}
                    />
                    {isInvalidAmount ? <span className="text-red-300">Quantidade Invalida</span> : ''}
                </div>

                <div className="flex flex-col">
                    <span className="text-black">Preço</span>
                    <input
                        type="text"
                        className="border border-solid border-gray-400 rounded-sm px-3 py-2 text-gray-500"
                        placeholder="Digite o nome do produto"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                    />
                    {isInvalidPrice ? <span className="text-red-300">Preço Invalido</span> : ''}
                </div>

                <div className="flex flex-col">
                    <span className="text-black">Tipo</span>
                    <select
                        name=""
                        id=""
                        className="text-gray-500 border border-solid border-gray-400 rounded-sm px-3 py-2"
                    >
                        <option value="">Opção 1</option>
                        <option value="">Opção 2</option>
                        <option value="">Opção 3</option>
                    </select>
                </div>
            </div>

            <button
                className="w-full py-3 bg-blue-500 hover:bg-blue-300 transition-[300ms]"
                onClick={VerifyInputsData}
            >
                Cadastrar Produto
            </button>
        </>
    );
}
