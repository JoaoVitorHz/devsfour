import { AiOutlineClose } from 'react-icons/ai';

export function Header(){
    return(
        <div className='flex justify-between mb-8'>
            <span className='text-black text-xl'>Cadastro de Produtos</span>
            <AiOutlineClose className="text-xl text-black cursor-pointer hover:text-red-600"/>
        </div>
    )
}