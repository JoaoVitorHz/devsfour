import { BiAddToQueue } from 'react-icons/bi';
import { BiSpreadsheet } from 'react-icons/bi';
import { MdSystemUpdateAlt } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdPlaylistAddCheck } from 'react-icons/md';

export function Menu(){
    return( 
        <>
            <div className="flex flex-col">
                <h2 className="uppercase text-xs text-gray-600 font-semibold mb-3">Produtos</h2>

                <div className='flex flex-col'>
                    <a href="/createProduct" className="font-semibold text-sm flex gap-2 items-center ml-2 hover:bg-blue-300 p-2 rounded-sm">
                        <BiAddToQueue className="text-base"/>
                        Cadastrar Produtos
                    </a>
                    <a href="" className="font-semibold text-sm flex gap-2 items-center ml-2 hover:bg-blue-300 p-2">
                        <MdPlaylistAddCheck className="text-base"/>
                        Cadastrar Tipos
                    </a>
                    <a href="" className="font-semibold text-sm flex gap-2 items-center ml-2 hover:bg-blue-300 p-2">
                        <BiSpreadsheet className="text-base"/>
                        Ver Produtos
                    </a>
                    <a href="" className="font-semibold text-sm flex gap-2 items-center ml-2 hover:bg-blue-300 p-2">
                        <MdSystemUpdateAlt className="text-base"/>
                        Alterar Produtos
                    </a>
                    <a href="" className="font-semibold text-sm flex gap-2 items-center ml-2 hover:bg-blue-300 p-2">
                        <RiDeleteBin6Line className="text-base"/>
                        Deletar Produtos
                    </a>
                </div>
            </div>

            <div className="flex flex-col mt-8">
                <h2 className="uppercase text-xs text-gray-600 font-semibold mb-3">Vendas</h2>

                <div className='flex flex-col'>
                    <a href="" className="font-semibold text-sm flex gap-2 items-center ml-2 hover:bg-blue-300 p-2">
                        <RiDeleteBin6Line className="text-base"/>
                        Realizar Venda
                    </a>
                    <a href="" className="font-semibold text-sm flex gap-2 items-center ml-2 hover:bg-blue-300 p-2">
                        <RiDeleteBin6Line className="text-base"/>
                        Analise de Vendas
                    </a>
                </div>
            </div>
        
        </>
      
    )
}